/* Shared renderer for Azercell Business content pages. */
(function (global) {
  'use strict';

  var R = global.SiteRegistry;
  var C = global.Components;

  function section(content, compact) {
    return C.render('businessSection', { content: content, compact: compact });
  }

  var INFORMATION_TABLES = {
    'Contact channels': true,
    'Working hours': true,
    'Partner contacts': true
  };

  var MOBILE_PLAN_TABLES = {
    'Current offers': true,
    'Baseline plan details': true,
    'Archived offers': true,
    'Business Bundles': true,
    'Old packages': true,
    'Annual subscription groups': true,
    'Subscription': true,
    'Validity and new-user access': true,
    'SMS packs': true,
    'Archived packs': true
  };

  var DETAIL_TABLES = {
    'Pack details': true,
    'Package information': true
  };

  function renderBlock(block, path) {
    if (block.type === 'cards') {
      return section(
        C.render('sectionHead', { title: block.title, body: block.body, action: block.action }) +
        C.render('businessCardGrid', { items: block.items, columns: block.columns })
      );
    }
    if (block.type === 'offerStack') {
      return section('<div class="cmp-business-offer-stack">' + block.groups.map(function (group) {
        return C.render('businessOfferGrid', Object.assign({}, group, {
          path: path,
          variant: MOBILE_PLAN_TABLES[group.title] ? 'plan' : 'pack',
          archived: /\/archive\//.test(path)
        }));
      }).join('') + '</div>');
    }
    if (block.type === 'table') {
      if (!INFORMATION_TABLES[block.title]) {
        if (DETAIL_TABLES[block.title]) {
          return section(C.render('businessDetailCard', block));
        }
        return section(C.render('businessOfferGrid', Object.assign({}, block, {
          path: path,
          variant: MOBILE_PLAN_TABLES[block.title] ? 'plan' : 'pack',
          archived: /\/archive\//.test(path)
        })));
      }
      return section(C.render('businessInfoTable', block));
    }
    if (block.type === 'faq') {
      return section(C.render('businessFaq', block));
    }
    if (block.type === 'steps') {
      return section(C.render('businessSteps', block));
    }
    return section(C.render('businessCopyBlock', block));
  }

  function customerGuidance(data, path) {
    var body = 'Share the number of users, the service location and the expected usage with an Azercell Business specialist. The team can confirm availability and prepare the right commercial offer.';
    var items = ['Confirm eligibility and coverage before ordering.', 'Review the final price, installation needs and contract terms with the account manager.'];

    if (/\/mobile\//.test(path)) {
      body = 'Compare the included data, calls, messages and validity period against how each employee uses the line. An Azercell Business specialist can help assign different options to different user groups.';
      items = ['Check whether the company lines meet the service requirements.', 'Confirm activation, renewal and out-of-bundle charges before switching.'];
    } else if (/\/fixed\//.test(path)) {
      body = 'Prepare the addresses of the sites that need connectivity and the required bandwidth at each location. Azercell can then confirm technical availability, installation work and the commercial terms.';
      items = ['Include the number of offices or branches.', 'Note any requirements for static IP addresses, redundancy or managed equipment.'];
    } else if (/\/(?:iot|fleet-field-operations)\//.test(path)) {
      body = 'Estimate the number of connected devices, expected monthly data use and the locations where they will operate. This helps the team recommend the right connectivity and management setup.';
      items = ['List device types and deployment locations.', 'Confirm reporting, alerting and integration requirements.'];
    } else if (/\/(?:ict-solutions|automation-management|customer-engagement)\//.test(path)) {
      body = 'Describe the current systems, user groups and the business process you want to improve. Azercell can use this information to scope the solution and identify any integration or implementation work.';
      items = ['Identify the teams and systems involved.', 'Agree success criteria, security requirements and the implementation scope.'];
    }

    return section(C.render('businessCopyBlock', {
      title: 'Planning the right option for your company',
      paragraphs: [body],
      items: items,
      source: 'authored',
      actions: [
        { label: 'Talk to a business specialist', href: R.href('/business/support/contact-us/'), variant: 'primary' },
        { label: 'Call *6050', href: 'tel:*6050' }
      ]
    }));
  }

  function fallbackFaq(data, path) {
    var firstAnswer = 'Start with the number of users or devices, expected usage and the locations where the service is needed. Azercell Business can then confirm the most suitable option.';
    if (/\/mobile\//.test(path)) firstAnswer = 'Compare the included allowances, validity period, renewal method and out-of-bundle charges for the company lines that will use the service.';
    if (/\/fixed\//.test(path)) firstAnswer = 'The required speed, number of sites, technical availability and installation conditions determine the suitable fixed-connectivity option.';

    return {
      type: 'faq',
      title: 'Frequently asked questions',
      source: 'authored',
      items: [
        { question: 'How do I choose the right option?', answer: firstAnswer, source: 'authored' },
        { question: 'How can my company order this service?', answer: 'Contact Azercell Business through the contact page or call *6050. A specialist will confirm eligibility, availability and the documents required.', source: 'authored' },
        { question: 'Are the displayed terms the final commercial offer?', answer: 'The page is a prototype summary. Confirm the current price, coverage, installation requirements and contract terms with Azercell Business before ordering.', source: 'authored' }
      ]
    };
  }

  function mount() {
    var path = global.location.pathname;
    var data = global.BusinessPagesData[path];
    if (!data) return;

    var parent = data.parent ? R.get(data.parent) : null;
    var hero = Object.assign({}, data.hero, {
      backHref: data.parent,
      backLabel: parent ? parent.title : 'Business',
      actions: [
        { label: 'Contact us', href: R.href('/business/support/contact-us/'), variant: 'primary' }
      ]
    });

    document.title = data.title + ' — Azercell Business';
    document.body.setAttribute('data-business-page', path);

    C.mount('#page-top', [
      ['announcementBar', { messages: R.SITE_CHROME.announcements }],
      ['siteHeader', R.headerProps({ branch: 'business' })]
    ]);
    C.mount('#page-bottom', [['siteFooter', R.SITE_CHROME.businessFooter]]);
    C.mount('#page-chat', [['floatingBar', R.SITE_CHROME.businessFloatingBar]]);

    var main = document.querySelector('#page-main');
    main.className = 'cmp-business-content';
    var contentBlocks = data.sections.filter(function (block) {
      return block.type !== 'faq';
    });
    var faqBlocks = data.sections.filter(function (block) { return block.type === 'faq'; });
    if (!faqBlocks.length) faqBlocks = [fallbackFaq(data, path)];

    main.innerHTML = C.render('businessHero', hero) +
      contentBlocks.map(function (block) { return renderBlock(block, path); }).join('') +
      customerGuidance(data, path) +
      faqBlocks.map(function (block) { return renderBlock(block, path); }).join('');
  }

  mount();
})(window);
