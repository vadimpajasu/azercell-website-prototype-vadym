/* Shared renderer for Azercell Business content pages. */
(function (global) {
  'use strict';

  var R = global.SiteRegistry;
  var C = global.Components;

  function section(content, compact) {
    return C.render('businessSection', { content: content, compact: compact });
  }

  function renderBlock(block) {
    if (block.type === 'cards') {
      return section(
        C.render('sectionHead', { title: block.title, body: block.body }) +
        C.render('businessCardGrid', { items: block.items, columns: block.columns })
      );
    }
    if (block.type === 'table') {
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
    main.innerHTML = C.render('businessHero', hero) +
      section(C.render('businessSourceLegend', {
        deckLabel: 'Attached files — #f0f',
        dummyLabel: 'Prototype-only copy — #8000FF80'
      }), true) +
      data.sections.map(renderBlock).join('') +
      (data.sourceUrls && data.sourceUrls.length
        ? section(C.render('businessCopyBlock', {
            eyebrow: 'References',
            title: 'Original Azercell sources',
            items: data.sourceUrls.map(function (url) {
              return { text: url, href: url, source: 'site' };
            })
          }), true)
        : '');
  }

  mount();
})(window);
