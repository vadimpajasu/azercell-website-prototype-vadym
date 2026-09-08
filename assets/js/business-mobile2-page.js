/* Renderer for the isolated /business/mobile2/ discovery concept. */
(function (global) {
  'use strict';

  var D = global.BusinessMobile2Data;
  var C = global.Components;
  var R = global.SiteRegistry;

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function section(content, className) {
    return '<section class="section cmp-business-section' + (className ? ' ' + className : '') + '"><div class="wrap">' + content + '</div></section>';
  }

  function head(title, body, action) {
    return C.render('sectionHead', { title: title, body: body || '', action: action || null });
  }

  function cards(title, items, columns, changed, action) {
    return section(
      head(title, '', action) + C.render('businessCardGrid', { items: items, columns: columns || 3 }),
      changed ? 'cmp-mobile2-change' : ''
    );
  }

  function offers(group, variant, changed) {
    return section(C.render('businessOfferGrid', {
      title: group.title,
      rows: group.rows,
      note: group.note || '',
      variant: variant || 'pack',
      path: global.location.pathname
    }), changed ? 'cmp-mobile2-change' : '');
  }

  function faq(title, items, changed) {
    return section(C.render('businessFaq', { title: title, items: items }), changed ? 'cmp-mobile2-change' : '');
  }

  function hero(title, body, parentPath, parentLabel) {
    return C.render('businessHero', {
      title: title,
      body: body,
      backHref: parentPath,
      backLabel: parentLabel,
      actions: [{ label: 'Contact us', href: '/business/support/contact-us/', variant: 'primary' }]
    });
  }

  function contactBlock() {
    return section(C.render('businessCopyBlock', {
      title: 'Need help choosing?',
      paragraphs: ['Email the Azercell Business team or call *6050. The same contact channels are available to new and existing business customers.'],
      actions: [
        { label: 'Email Business team', href: 'mailto:business@azercell.com', variant: 'primary' },
        { label: 'Call *6050', href: 'tel:*6050' }
      ]
    }));
  }

  function landing() {
    var services = [
      { title: 'My Business Tariff Plans', body: 'Compare bundled plans first, then review the simple pay-as-you-go My Business 2 option.', href: D.routes.tariffs },
      { title: 'My Business Internet Packs', body: 'Compare monthly, non-recurrent, short-term and social-network packs together on one page.', href: D.routes.internet },
      { title: 'Roaming', body: 'Find a destination, open its rates directly and compare roaming internet packs without extra navigation levels.', href: D.routes.roaming }
    ];
    return [
      hero('Mobile', 'Core mobile services for company lines: tariff plans, internet packs and roaming.', '/business/', 'Business'),
      cards('Mobile products and services', services, 1, true),
      cards('Current campaigns', D.campaigns, 2, true, { label: 'All business campaigns', href: '/business/campaigns/' }),
      cards('Archive', [
        { title: 'Tariffs archive', body: 'Terms retained for active users of closed tariff plans.', href: '/business/mobile/tariffs/archive/' },
        { title: 'Internet packs archive', body: 'Previous business data packages retained for existing users.', href: '/business/mobile/internet/archive/' },
        { title: 'Campaigns archive', body: 'Ended business campaigns and their conditions.', href: '/business/campaigns/archive/' }
      ], 3, true),
      contactBlock(),
      faq('Frequently asked questions', [
        { question: 'What belongs in the Mobile section?', answer: 'Tariff plans, internet packs and roaming are the core Mobile services.' },
        { question: 'Where are Mobile Marketing services?', answer: 'They are intentionally not included in this Mobile concept while their new place in the wider Business structure is being confirmed.' },
        { question: 'Where can existing users find closed offers?', answer: 'Use the compact Archive section for tariff, internet-pack and campaign conditions.' }
      ], true)
    ];
  }

  function tariffs() {
    return [
      hero('My Business Tariff Plans', 'Choose a bundled plan for everyday business use or a simple pay-as-you-go option.', D.routes.hub, 'Mobile'),
      offers({ title: 'Current offers', rows: D.currentPlans, note: 'Prices include VAT. Extra night data on eligible plans is available from 00:00 to 08:00.' }, 'plan', false),
      offers({ title: 'Basic pay-as-you-go plan', rows: D.basicPlan, note: 'This simple option has no included data, minutes or SMS allowances.' }, 'plan', true),
      cards('Tariff archive', [{ title: 'Previous tariff plans', body: 'Review conditions for offers that are closed to new subscriptions but may still have active users.', href: '/business/mobile/tariffs/archive/' }], 1, true),
      contactBlock(),
      faq('Tariff rules and frequently asked questions', [
        { question: 'Which plans should customers compare first?', answer: 'Start with the bundled My Business 4GB–100GB plans. My Business 2 is a secondary pay-as-you-go option without included data, minutes or SMS.' },
        { question: 'Which data allowance is used first?', answer: 'An activated monthly internet pack has priority over data included in a My Business tariff.' },
        { question: 'Do unused allowances roll over?', answer: 'No. Unused tariff allowances do not roll over to the next validity period.' },
        { question: 'How can I check the remaining allowance?', answer: 'Send a blank SMS to 650 to check the remaining discounted services balance, excluding internet.' }
      ], true)
    ];
  }

  function internet() {
    var blocks = [
      hero('My Business Internet Packs', 'Compare every current business internet pack on one page.', D.routes.hub, 'Mobile')
    ];
    D.internetGroups.forEach(function (group) { blocks.push(offers(group, 'pack', true)); });
    blocks.push(cards('Internet packs archive', [{ title: 'Archived internet packs', body: 'Review previous packages retained for active users.', href: '/business/mobile/internet/archive/' }], 1, true));
    blocks.push(contactBlock());
    blocks.push(faq('Internet pack rules and frequently asked questions', [
      { question: 'Why are all packs shown together?', answer: 'Keeping monthly, non-recurrent, short-term and social-network packs on one page makes comparison easier and removes unnecessary navigation levels.' },
      { question: 'Can a larger monthly pack be ordered?', answer: 'Yes. Existing packs remain active, and the pack with the smallest data volume is used first.' },
      { question: 'Which monthly pack renews automatically?', answer: 'Only the most recently activated monthly pack renews automatically.' },
      { question: 'Can more than one social-network pack be active?', answer: 'Only one My Business Social Networks pack can be active on a number at a time.' }
    ], true));
    return blocks;
  }

  function countrySearch() {
    return '<div class="cmp-mobile2-search" data-mobile2-country-search-wrap>' +
      '<label class="t-h4" for="mobile2-country-search">Find country</label>' +
      '<p class="t-body">Enter at least two letters in English, Azerbaijani or Russian. Suggestions show country names only and open the selected country directly.</p>' +
      '<input class="input cmp-mobile2-search__input" id="mobile2-country-search" type="search" autocomplete="off" placeholder="Enter country name…" aria-controls="mobile2-country-results" aria-expanded="false" data-mobile2-country-search>' +
      '<div class="cmp-mobile2-search__results" id="mobile2-country-results" role="listbox" hidden data-mobile2-country-results></div>' +
      '<p class="t-small cmp-mobile2-search__status" aria-live="polite" data-mobile2-country-status>Type at least two letters.</p>' +
      '<div class="cmp-mobile2-popular" aria-label="Popular countries">' + D.countries.map(function (country) {
        return '<a class="btn btn--small" href="' + esc(country.route) + '">' + esc(country.name) + '</a>';
      }).join('') + '</div>' +
    '</div>';
  }

  function packGrid() {
    return '<div class="grid grid--2 cmp-ipack-grid">' + D.packs.map(function (pack) {
      return C.render('businessRoamingPackCard', { pack: pack, subscribe: false });
    }).join('') + '</div>';
  }

  function roaming() {
    return [
      hero('Roaming', 'Search a destination, review the available operators and choose a roaming internet pack for the trip.', D.routes.hub, 'Mobile'),
      section(head('Find a destination') + countrySearch() + '<div class="cmp-mobile2-compact-action"><a class="btn btn--primary" href="' + esc(D.routes.operators) + '">Countries and operators for internet packs</a></div>', 'cmp-mobile2-change'),
      section(head('Roaming internet packs', 'All current pack options are shown here so employees can compare them without opening another catalogue page.') + packGrid() + '<div class="cmp-mobile2-compact-action"><a class="btn btn--primary" href="' + esc(D.kabinetim) + '">Activate in Azercell Kabinetim</a></div>', 'cmp-mobile2-change'),
      section(head('Before and during travel') + '<div class="grid grid--2 cmp-broam-guide-grid">' +
        C.render('tariffFeatureList', { title: 'Before travel', features: D.beforeTravel }) +
        C.render('tariffFeatureList', { title: 'Upon arrival', features: D.uponArrival }) + '</div>'),
      contactBlock(),
      faq('Roaming questions and answers', D.roamingFaq, false)
    ];
  }

  function operators() {
    return [
      hero('Countries and operators', 'Reference list of destinations and partner networks where roaming internet packs can be used.', D.routes.roaming, 'Roaming'),
      cards('Open a country', D.countries.map(function (country) {
        return { title: country.name, body: country.operators.map(function (operator) { return operator.name; }).join(' · '), href: country.route };
      }), 3, true),
      section(head('Supported partner networks') + C.render('businessRoamingCoverageTable', {
        inputId: 'mobile2-operator-coverage-search', rows: D.supportedOperators, label: 'Enter country or operator name'
      })),
      contactBlock(),
      faq('Frequently asked questions', [
        { question: 'Is this list a replacement for the country search?', answer: 'No. The main Roaming page provides the quickest route to country pricing. This page is a reference list for pack coverage and partner operators.' },
        { question: 'Should an operator be selected manually?', answer: 'Check the compatible partner before travel. Manual selection may be useful when pack compatibility or pricing differs.' }
      ], true)
    ];
  }

  function countryPage(countryId) {
    var country = D.getCountry(countryId);
    if (!country) return operators();
    return [
      hero(country.name, 'Corporate postpaid roaming rates and available partner networks.', D.routes.roaming, 'Roaming'),
      section(head('Available operators') + C.render('businessRoamingOperatorList', { operators: country.operators }) + head('Rates') + C.render('businessRoamingRateTable', { country: country })),
      section(head('Available roaming internet packs') + packGrid()),
      contactBlock(),
      faq('Frequently asked questions', [
        { question: 'How did I reach this page?', answer: 'Selecting a country in the Roaming search opens its details directly without an intermediate results page.' },
        { question: 'How should calls be dialled abroad?', answer: 'Use + [country code] [city or operator code] [number].' },
        { question: 'What should I check before travelling?', answer: 'Confirm roaming activation, account balance, partner-network support and the selected pack conditions.' }
      ], true)
    ];
  }

  function archive() {
    return [
      hero('Mobile archives', 'Closed offers remain available for customers who still use them.', D.routes.hub, 'Mobile'),
      cards('Archive sections', [
        { title: 'Tariffs archive', body: 'Previous corporate tariff plans and conditions.', href: '/business/mobile/tariffs/archive/' },
        { title: 'Internet packs archive', body: 'Previous business data packages and conditions.', href: '/business/mobile/internet/archive/' },
        { title: 'Campaigns archive', body: 'Ended business campaigns and offers.', href: '/business/campaigns/archive/' }
      ], 3, false),
      faq('Frequently asked questions', [
        { question: 'Why are closed products still available?', answer: 'A product can be closed to new subscriptions while existing customers continue to use it.' },
        { question: 'Can a company activate an archived offer?', answer: 'Usually not. Confirm current availability with Azercell Business before making changes to a line.' }
      ], false)
    ];
  }

  function bindCountrySearch() {
    var input = document.querySelector('[data-mobile2-country-search]');
    var results = document.querySelector('[data-mobile2-country-results]');
    var status = document.querySelector('[data-mobile2-country-status]');
    if (!input || !results || !status) return;

    function normalize(value) {
      return String(value || '').trim().toLocaleLowerCase();
    }

    function closeResults() {
      results.hidden = true;
      input.setAttribute('aria-expanded', 'false');
    }

    input.addEventListener('input', function () {
      var query = normalize(input.value);
      if (query.length < 2) {
        results.innerHTML = '';
        status.textContent = 'Type at least two letters.';
        closeResults();
        return;
      }
      var matches = D.countries.filter(function (country) {
        return [country.name].concat(D.countryAliases[country.id] || []).some(function (name) {
          return normalize(name).indexOf(query) !== -1;
        });
      });
      results.innerHTML = matches.map(function (country) {
        return '<a class="cmp-mobile2-search__result" role="option" href="' + esc(country.route) + '">' + esc(country.name) + '</a>';
      }).join('');
      status.textContent = matches.length ? matches.length + ' matching destination' + (matches.length === 1 ? '' : 's') + '.' : 'No matching destinations.';
      results.hidden = !matches.length;
      input.setAttribute('aria-expanded', matches.length ? 'true' : 'false');
    });

    input.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeResults();
    });
  }

  function build(mode, countryId) {
    if (mode === 'tariffs') return tariffs();
    if (mode === 'internet') return internet();
    if (mode === 'roaming') return roaming();
    if (mode === 'operators') return operators();
    if (mode === 'country') return countryPage(countryId);
    if (mode === 'archive') return archive();
    return landing();
  }

  function mount(mode, countryId) {
    var blocks = build(mode, countryId);
    document.body.setAttribute('data-business-page', global.location.pathname);
    document.title = (mode === 'hub' ? 'Mobile' : (R.get(global.location.pathname) || {}).title || 'Mobile') + ' — Azercell Business';
    C.mount('#page-top', [
      ['announcementBar', { messages: R.SITE_CHROME.announcements }],
      ['siteHeader', R.headerProps({ branch: 'business' })]
    ]);
    C.mount('#page-bottom', [['siteFooter', R.SITE_CHROME.businessFooter]]);
    C.mount('#page-chat', [['floatingBar', R.SITE_CHROME.businessFloatingBar]]);
    var main = document.querySelector('#page-main');
    main.className = 'cmp-business-content cmp-mobile2';
    C.mount('#page-main', blocks);
    bindCountrySearch();
  }

  global.BusinessMobile2Page = { mount: mount };
})(window);
