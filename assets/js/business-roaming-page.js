/* ==========================================================================
   Azercell HTML Prototype — B2B roaming page renderer
   Layout follows the existing B2C roaming and internet-pack page pattern.
   ========================================================================== */

(function (global) {
  'use strict';

  var D = global.BusinessRoamingData;

  function section(inner, modifier) {
    return '<section class="section' + (modifier ? ' ' + modifier : '') + '"><div class="wrap">' + inner + '</div></section>';
  }

  function hrefFn() {
    return global.SiteRegistry ? global.SiteRegistry.href : function (path) { return path; };
  }

  function topCountryChips() {
    return D.topCountries.map(function (id) {
      var country = D.getCountry(id);
      return country ? { id: country.id, name: country.name } : null;
    }).filter(Boolean);
  }

  function countrySearch(href, inputId, options) {
    var opts = options || {};
    return global.Components.render('roamingCountrySearch', {
      label: opts.label || 'Enter country name',
      hint: opts.hint || 'Search a destination to view the available partner networks and pay-as-you-go rates for calls, mobile internet and SMS.',
      placeholder: 'Enter country name…',
      inputId: inputId,
      syncUrl: true,
      urlBase: href(D.routes.countries),
      topCountries: topCountryChips(),
      showAllDefault: !!opts.showAllDefault,
      hideDefaultResults: !!opts.hideDefaultResults,
      className: 'cmp-broam-country-search'
    });
  }

  function coverageTable(inputId) {
    return global.Components.render('businessRoamingCoverageTable', {
      inputId: inputId,
      rows: D.supportedOperators,
      label: 'Enter country or operator name',
      tags: topCountryChips().map(function (country) {
        return { label: country.name, value: country.name };
      })
    });
  }

  function packCards() {
    return '<div class="grid grid--2 cmp-ipack-grid">' + D.packs.map(function (pack) {
      return '<div>' + global.Components.render('businessRoamingPackCard', { pack: pack, subscribe: true }) + '</div>';
    }).join('') + '</div>';
  }

  function subscribeModal() {
    return global.Components.render('businessRoamingSubscribeModal', {
      joinHref: '/join-azercell/',
      kabinetimHref: D.KABINETIM
    });
  }

  function actionRow(links, legal) {
    return global.Components.render('tariffDetailCrossLinks', {
      links: links,
      legal: legal || ''
    });
  }

  function featureList(title, items) {
    return global.Components.render('tariffFeatureList', { title: title, features: items, className: 'cmp-broam-feature-list' });
  }

  function mountPage(C, blocks) {
    var faqBlocks = blocks.filter(function (block) { return block && (block.indexOf('cmp-accordion') !== -1 || block.indexOf('cmp-campaign-faq') !== -1); });
    var contentBlocks = blocks.filter(function (block) { return block && block.indexOf('cmp-accordion') === -1 && block.indexOf('cmp-campaign-faq') === -1; });

    contentBlocks.push(section(C.render('campaignCopyBlock', {
      title: 'Prepare company lines before travel',
      paragraphs: ['Share the destination countries, trip duration and expected data use with Azercell Business. A specialist can confirm compatible operators, pack availability and activation steps for each employee.'],
      items: ['Activate roaming before departure.', 'Check pack coverage and out-of-bundle rates for every destination.'],
      source: 'authored',
      actions: [
        { label: 'Talk to a business specialist', href: '/business/support/contact-us/', variant: 'primary' },
        { label: 'Call *6050', href: 'tel:*6050' }
      ]
    })));

    contentBlocks.push(faqBlocks.length ? faqBlocks.join('') : section(C.render('businessFaq', {
      title: 'Frequently asked questions',
      source: 'authored',
      items: [
        { question: 'When should roaming be activated?', answer: 'Activate roaming before the employee leaves Azerbaijan and confirm that the required pack supports the destination country.', source: 'authored' },
        { question: 'How can a company check current rates?', answer: 'Search the destination and partner operator, then confirm current pack and pay-as-you-go conditions with Azercell Business.', source: 'authored' },
        { question: 'Where can employees get help abroad?', answer: 'Use Azercell online support or contact the company account manager for activation and network-selection assistance.', source: 'authored' }
      ]
    })));

    var main = document.querySelector('#page-main');
    main.className = 'cmp-business-content';
    C.mount('#page-main', contentBlocks);
  }

  function mountHub() {
    var C = global.Components;
    var href = hrefFn();

    mountPage(C, [
      section(C.render('sectionHead', {
        eyebrow: 'Roaming',
        hero: true,
        title: 'Stay connected anywhere in the world',
        body: 'Azercell Business offers practical internet pack options and pay-as-you-go roaming information for employees travelling abroad.'
      })),
      section(
        C.render('sectionHead', { eyebrow: 'Before travel', title: 'How to use Azercell roaming?' }) +
        C.render('businessRoamingSteps', {
          items: D.howToRoaming,
          firstStepContent: countrySearch(href, 'business-roaming-country-search', {
            label: 'Find country',
            hint: 'Enter the destination to see available operators and current prices.',
            hideDefaultResults: true
          })
        })
      ),
      section(
        C.render('sectionHead', {
          eyebrow: 'Roaming',
          title: 'Internet packages in roaming'
        }) +
        packCards() +
        actionRow([
          { label: 'Check in which countries internet packs can be used', href: D.routes.countries, variant: 'primary' },
          { label: 'More information about the internet packs', href: D.routes.packs }
        ])
      ),
      section(C.render('splitBanner', {
        eyebrow: 'Roaming essentials',
        title: 'Calling and balance abroad',
        body: 'Use the international format + [country code] [operator or city code] [number]. Balance can be topped up through Azercell Kabinetim, online payment or a scratch card. For a scratch card, dial *131*[13-digit code]#YES.',
        media: 'Calling and balance abroad',
        actions: [
          { label: 'Azercell Kabinetim', href: D.KABINETIM, variant: 'primary' },
          { label: 'Online payment', href: D.ONLINE_PAYMENT }
        ]
      })),
      section(
        C.render('sectionHead', { eyebrow: 'Roaming', title: 'Useful tips' }) +
        '<div class="grid grid--2 cmp-broam-guide-grid">' +
          featureList('Before travel', D.beforeTravel) +
          featureList('Upon arrival', D.uponArrival) +
        '</div>' +
        '<div class="cmp-broam-tips__planning">' + C.render('splitBanner', {
          eyebrow: 'Roaming tips',
          title: 'Planning a trip?',
          body: 'Download the roaming tips before departure so the essential setup and support information is available offline.',
          media: 'Roaming tips',
          actions: [{ label: 'Download roaming tips', href: D.SOURCE_ROAMING, variant: 'primary' }]
        }) + '</div>'
      ),
      section(C.render('splitBanner', {
        inverse: true,
        eyebrow: 'Online support',
        title: 'Need help? Chat with us!',
        body: 'Employees can contact online support while roaming if they need help with activation, network selection or mobile data.',
        media: 'Online roaming support',
        actions: [{ label: 'Chat with Online Support', href: D.SOURCE_ROAMING, variant: 'primary' }]
      })),
      section(
        C.render('sectionHead', {
          eyebrow: 'Roaming help',
          title: 'Questions and Answers'
        }) +
        '<div style="margin-top:var(--sp-5)">' + C.render('accordion', { items: D.additionalInfo }) + '</div>' +
        actionRow([{ label: 'Open support.azercell.com', href: D.SUPPORT }])
      ),
      subscribeModal()
    ]);
  }

  function mountCountries() {
    var C = global.Components;

    mountPage(C, [
      section(C.render('sectionHead', {
        eyebrow: 'Roaming',
        hero: true,
        title: 'Countries and prices',
        body: 'Search a destination to view the available partner networks and pay-as-you-go rates for calls, mobile internet and SMS.'
      })),
      section(
        '<div id="roaming-catalog">' +
          C.render('sectionHead', {
            title: 'Countries where internet packs are available'
          }) +
          coverageTable('business-roaming-country-coverage-search') +
        '</div>'
      )
    ]);
  }

  function mountCountry(countryId) {
    var C = global.Components;
    var country = D.getCountry(countryId);
    if (!country) return mountCountries();
    var usesOperatorTabs = country.id === 'turkiye';
    var operatorDetails = C.render('sectionHead', {
      eyebrow: 'Partner networks',
      title: 'Available operators'
    }) + (usesOperatorTabs
      ? C.render('businessRoamingOperatorTabs', { country: country })
      : C.render('businessRoamingOperatorList', { operators: country.operators }) +
        C.render('sectionHead', {
          eyebrow: 'Postpaid',
          title: 'Rates'
        }) +
        C.render('businessRoamingRateTable', { country: country }));

    mountPage(C, [
      section(C.render('sectionHead', {
        eyebrow: 'Roaming · Countries and prices',
        hero: true,
        title: country.name,
        body: usesOperatorTabs ? '' : 'Postpaid | Available operators'
      })),
      section(
        '<div id="roaming-country-details">' +
          operatorDetails +
        '</div>'
      ),
      section(
        C.render('sectionHead', {
          eyebrow: 'Internet packages in roaming',
          title: 'Available roaming internet packs',
          body: usesOperatorTabs ? '' : '500MB — 10 AZN / 3 days · 2GB — 20 AZN / 10 days · 5GB — 50 AZN / 30 days · 10GB — 75 AZN / 30 days'
        }) +
        packCards() +
        actionRow([{ label: 'More details', href: D.routes.packs, variant: 'primary' }])
      ),
      subscribeModal()
    ]);
  }

  function mountPacks() {
    var C = global.Components;

    mountPage(C, [
      section(C.render('sectionHead', {
        eyebrow: 'Roaming',
        hero: true,
        title: 'Roaming internet packs list',
        body: 'Choose the roaming internet pack that fits the trip duration and expected data use.'
      })),
      section(
        '<div id="roaming-catalog">' +
          C.render('sectionHead', {
            eyebrow: 'Internet packages in roaming',
            title: 'Choose a pack'
          }) +
          packCards() +
        '</div>'
      ),
      section(
        C.render('sectionHead', {
          eyebrow: 'Activation',
          title: 'Activate abroad',
          body: 'A roaming internet pack can be activated before travelling or while abroad.'
        }) +
        C.render('businessRoamingActivationMethods', { kabinetimHref: D.KABINETIM })
      ),
      section(
        featureList('Before subscribing', D.packRules)
      ),
      section(
        '<div id="supported-operators">' +
          C.render('sectionHead', {
            eyebrow: 'Internet packages in roaming',
            title: 'Countries where internet packs are available'
          }) +
          coverageTable('business-roaming-pack-coverage-search') +
        '</div>'
      ),
      section(
        C.render('sectionHead', { eyebrow: 'Roaming internet packs', title: 'Questions and Answers' }) +
        '<div style="margin-top:var(--sp-5)">' + C.render('accordion', { items: D.packAdditionalInfo }) + '</div>'
      ),
      subscribeModal()
    ]);
  }

  global.BusinessRoamingPage = {
    mount: function (mode, countryId) {
      if (mode === 'countries') return mountCountries();
      if (mode === 'country') return mountCountry(countryId);
      if (mode === 'packs') return mountPacks();
      return mountHub();
    }
  };
})(window);
