/* Azercell Business Mobile concept 2 — content decisions from the Mobile discovery call. */
(function (global) {
  'use strict';

  var baseRoaming = global.BusinessRoamingData;

  var routes = {
    hub: '/business/mobile2/',
    tariffs: '/business/mobile2/tariffs/',
    internet: '/business/mobile2/internet/',
    archive: '/business/mobile2/archive/',
    roaming: '/business/mobile2/roaming/',
    operators: '/business/mobile2/roaming/countries-and-operators/',
    countryBase: '/business/mobile2/roaming/countries/'
  };

  var currentPlans = [
    { label: 'My Business 4GB', value: '15 AZN/month · 4GB · 700 cross-net min · 500 SMS · unlimited corporate calls' },
    { label: 'My Business 8GB', value: '21 AZN/month · 8GB + 1GB night · 1,500 cross-net min · 1,000 SMS · unlimited corporate calls' },
    { label: 'My Business 12GB', value: '26 AZN/month · 12GB + 2GB night · 2,500 cross-net min · 2,000 SMS · 10 international min' },
    { label: 'My Business 20GB', value: '36 AZN/month · 20GB + 3GB night · 4,000 cross-net min · 2,000 SMS · 20 international min' },
    { label: 'My Business 60GB', value: '56 AZN/month · 60GB · 7,000 cross-net min · 3,000 SMS · 30 international min' },
    { label: 'My Business 100GB', value: '80 AZN/month · 100GB · 10,000 cross-net min under FUP · 1,000 SMS · 100 international min' }
  ];

  var basicPlan = [
    { label: 'My Business 2', value: '2 AZN/month · unlimited corporate calls · countrywide calls 0.10 AZN/min · SMS 0.10 AZN · internet 0.30 AZN/MB' }
  ];

  var internetGroups = [
    {
      title: 'Monthly packs',
      note: 'Recurring packs renew every 30 days. SMS to 2525 costs 0.01 AZN for postpaid subscribers.',
      rows: [
        { label: '2GB', value: '6 AZN · 30 days · SMS 2000 to 2525' },
        { label: '7GB', value: '10 AZN · 30 days · SMS 7000 to 2525' },
        { label: '14GB', value: '15 AZN · 30 days · SMS 14000 to 2525' },
        { label: '35GB', value: '25 AZN · 30 days · SMS 35000 to 2525' },
        { label: '55GB', value: '30 AZN · 30 days · SMS 55000 to 2525' }
      ]
    },
    {
      title: 'Non-recurrent packs',
      note: 'These packs deactivate when the data is used or the 30-day period ends.',
      rows: [
        { label: '2GB', value: '6 AZN · 30 days · SMS +2GB to 2525' },
        { label: '7GB', value: '10 AZN · 30 days · SMS +7GB to 2525' },
        { label: '14GB', value: '15 AZN · 30 days · SMS +14GB to 2525' }
      ]
    },
    {
      title: 'Short-term packs',
      note: 'The service is activated within 15 minutes.',
      rows: [
        { label: 'Unlimited 1 hour', value: '0.99 AZN · 1 hour · SMS S to 2525' },
        { label: 'Unlimited 3 hours', value: '1.99 AZN · 3 hours · SMS 3S to 2525' }
      ]
    },
    {
      title: 'Social network packs',
      note: 'Available with an eligible recurring monthly business internet pack or My Business tariff plan.',
      rows: [
        { label: 'My Business Chat', value: '4 AZN · 5GB · 30 days · SMS B1 to 2525' },
        { label: 'My Business Social', value: '7 AZN · 10GB · 30 days · SMS B2 to 2525' },
        { label: 'My Business Media', value: '16 AZN · 30GB · 30 days · SMS B3 to 2525' }
      ]
    }
  ];

  var countryAliases = {
    turkiye: ['turkiye', 'türkiye', 'turkey', 'турция', 'турkiye'],
    georgia: ['georgia', 'грузия', 'gurcustan', 'gürcüstan'],
    germany: ['germany', 'deutschland', 'германия', 'almaniya']
  };

  function countryRoute(id) {
    return routes.countryBase + id + '/';
  }

  var countries = baseRoaming.countries.map(function (country) {
    return Object.assign({}, country, { route: countryRoute(country.id) });
  });

  global.BusinessMobile2Data = {
    routes: routes,
    currentPlans: currentPlans,
    basicPlan: basicPlan,
    internetGroups: internetGroups,
    campaigns: [
      { title: 'MNP 60GB Campaign', body: '60GB, 2,000 all-net minutes, 50 international minutes and unlimited corporate calls.', meta: ['26 AZN per billing cycle'], href: '/business/campaigns/acquisition-campaigns/mnp-60gb/' },
      { title: 'MNP 80GB Campaign', body: '80GB, 5,000 all-net minutes, 100 international minutes and unlimited corporate calls.', meta: ['46 AZN per billing cycle'], href: '/business/campaigns/acquisition-campaigns/mnp-80gb/' }
    ],
    countries: countries,
    countryAliases: countryAliases,
    packs: baseRoaming.packs,
    supportedOperators: baseRoaming.supportedOperators,
    howToRoaming: baseRoaming.howToRoaming,
    beforeTravel: baseRoaming.beforeTravel,
    uponArrival: baseRoaming.uponArrival,
    roamingFaq: baseRoaming.additionalInfo,
    kabinetim: baseRoaming.KABINETIM,
    support: baseRoaming.SUPPORT,
    getCountry: function (id) {
      return countries.find(function (country) { return country.id === id; }) || null;
    }
  };
})(window);
