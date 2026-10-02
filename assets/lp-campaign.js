(function () {
  'use strict';

  var PHONE = '5511941492612';
  var ATTRIBUTION_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'];
  var body = document.body;
  var service = body.getAttribute('data-service') || 'campanha';
  var pagePath = window.location.pathname;
  var params = new URLSearchParams(window.location.search);
  var attribution = {};

  window.dataLayer = window.dataLayer || [];

  function safeStorage(method, key, value) {
    try {
      if (method === 'get') return window.sessionStorage.getItem(key);
      window.sessionStorage.setItem(key, value);
    } catch (error) {}
    return null;
  }

  ATTRIBUTION_KEYS.forEach(function (key) {
    var value = params.get(key) || safeStorage('get', 'ddb_' + key);
    if (value) {
      attribution[key] = value;
      safeStorage('set', 'ddb_' + key, value);
    }
  });

  function createFallbackLeadRef() {
    var fromUrl = params.get('lead_ref');
    var stored = safeStorage('get', 'ddb_fallback_lead_ref');
    if (fromUrl) return fromUrl;
    if (stored) return stored;
    var time = Date.now().toString(36).slice(-6).toUpperCase();
    var random = Math.random().toString(36).slice(2, 6).toUpperCase();
    return 'DDB-' + time + random;
  }

  var fallbackLeadRef = createFallbackLeadRef();
  safeStorage('set', 'ddb_fallback_lead_ref', fallbackLeadRef);

  function pushEvent(name, extra) {
    var payload = Object.assign({
      event: name,
      service: service,
      page_path: pagePath
    }, attribution, extra || {});
    window.dataLayer.push(payload);
    return payload;
  }

  function whatsappUrl(message, leadRef) {
    var text = message;
    if (leadRef) text += ' Código: ' + leadRef;
    return 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(text);
  }

  function getLeadRefFromUrl(url) {
    try {
      var text = new URL(url).searchParams.get('text') || '';
      var tracked = text.match(/\(cód\.\s*([A-Z0-9-]+)\)/i);
      var fallback = text.match(/Código:\s*([A-Z0-9-]+)/i);
      return tracked ? tracked[1] : (fallback ? fallback[1] : '');
    } catch (error) {
      return '';
    }
  }

  document.querySelectorAll('.js-whatsapp[data-wa-message]').forEach(function (link) {
    var message = link.getAttribute('data-wa-message');
    link.setAttribute('href', whatsappUrl(message));
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener');
    link.addEventListener('click', function () {
      var activeLeadRef = getLeadRefFromUrl(link.href);
      if (!activeLeadRef) {
        activeLeadRef = fallbackLeadRef;
        link.setAttribute('href', whatsappUrl(message, activeLeadRef));
      }
      document.documentElement.setAttribute('data-lead-ref', activeLeadRef);
      var eventData = pushEvent('whatsapp_click', {
        cta_location: link.getAttribute('data-cta-location') || 'unknown',
        cta_message: message,
        lead_ref: activeLeadRef
      });
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Contact', {
          content_name: service,
          content_category: eventData.cta_location,
          lead_ref: activeLeadRef
        });
      }
    });
  });

  document.querySelectorAll('.faq-question').forEach(function (button) {
    button.addEventListener('click', function () {
      var item = button.closest('.faq-item');
      var opening = !item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach(function (openItem) {
        openItem.classList.remove('is-open');
        openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (opening) {
        item.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  var revealItems = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(function (entries, currentObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .1, rootMargin: '0px 0px -35px' });
    revealItems.forEach(function (item) { observer.observe(item); });
  }

  var nav = document.querySelector('.top-nav');
  var lastScroll = window.scrollY;
  window.addEventListener('scroll', function () {
    var current = window.scrollY;
    if (nav) {
      if (current > lastScroll && current > 180) nav.classList.add('nav-hidden');
      else nav.classList.remove('nav-hidden');
    }
    lastScroll = current;
  }, { passive: true });

  document.querySelectorAll('[data-current-year]').forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  if (body.getAttribute('data-service') === 'gordura-localizada') {
    var variants = {
      crio: {
        pre: 'Criolipólise para a gordura',
        highlight: 'que não sai',
        post: 'nem com dieta e treino'
      },
      drenagem: {
        pre: 'Drenagem para',
        highlight: 'desinchar',
        post: 'e definir o contorno do corpo'
      },
      gordura: {
        pre: 'Aquela gordura localizada',
        highlight: 'que não sai',
        post: 'nem com dieta e treino'
      }
    };
    var variant = params.get('p') || 'gordura';
    var dynamicTitle = document.querySelector('[data-dynamic-title]');
    if (dynamicTitle && variants[variant]) {
      dynamicTitle.querySelector('[data-title-pre]').textContent = variants[variant].pre;
      dynamicTitle.querySelector('[data-title-highlight]').textContent = variants[variant].highlight;
      dynamicTitle.querySelector('[data-title-post]').textContent = variants[variant].post;
    }
  }

  if (window.LP_CONFIG && window.LP_CONFIG.packages) {
    Object.keys(window.LP_CONFIG.packages).forEach(function (key) {
      var config = window.LP_CONFIG.packages[key];
      var card = document.querySelector('[data-package="' + key + '"]');
      if (!card) return;
      var values = card.querySelector('.price-values');
      var consult = card.querySelector('.price-consult');
      if (typeof config.total !== 'number' || config.total <= 0) {
        if (values) values.hidden = true;
        if (consult) consult.hidden = false;
        return;
      }
      var sessions = Number(config.sessions) || 1;
      var total = config.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      var unit = (config.total / sessions).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      if (values) {
        values.hidden = false;
        values.querySelector('.price-total').textContent = total;
        values.querySelector('.price-unit').textContent = unit + ' por sessão';
        var discount = values.querySelector('.price-discount');
        var singleSession = Number(window.LP_CONFIG.singleSession);
        if (discount && singleSession > 0) {
          var percentage = Math.max(0, Math.round((1 - (config.total / sessions) / singleSession) * 100));
          discount.textContent = percentage + '% menos que a sessão avulsa';
          discount.hidden = false;
        }
      }
      if (consult) consult.hidden = true;
    });
  }

  if (body.getAttribute('data-highlight-hash') === 'true' && window.location.hash) {
    var target = document.querySelector(window.location.hash);
    if (target && target.classList.contains('offer-card') && !target.hidden) {
      target.classList.add('is-visible', 'is-highlighted');
      pushEvent('offer_anchor_view', { offer_id: target.id });
      function alignOffer() {
        var targetTop = target.getBoundingClientRect().top + window.scrollY - 86;
        window.scrollTo(0, Math.max(0, targetTop));
      }
      alignOffer();
      window.addEventListener('load', function () {
        window.setTimeout(alignOffer, 60);
      }, { once: true });
    }
  }

  pushEvent('landing_page_view');
})();
