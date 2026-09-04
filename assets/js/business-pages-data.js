/* ==========================================================================
   Azercell Business content-page data
   Source values: site = azercell.com, file = supplied documents,
   authored = prototype-only connective copy.
   ========================================================================== */

(function (global) {
  'use strict';

  var CONTACT = '/business/support/contact-us/';
  var BIZNES = 'https://biznes.azercell.com/';
  var SUPPORT = 'https://support.azercell.com/';

  function card(title, body, href, source, meta) {
    return { title: title, body: body, href: href, source: source || 'site', meta: meta || [] };
  }

  function cards(title, items, body) {
    return { type: 'cards', title: title, body: body || '', items: items };
  }

  function copy(title, paragraphs, source, items, actions) {
    return { type: 'copy', title: title, paragraphs: paragraphs || [], source: source || 'site', items: items || [], actions: actions || [] };
  }

  function table(title, rows, note, source) {
    return { type: 'table', title: title, rows: rows, note: note || '', source: source || 'site' };
  }

  function faq(title, items) {
    return { type: 'faq', title: title, items: items };
  }

  function contactBlock() {
    return copy('Need a digital solution?', [
      'Contact Azercell Business for a solution tailored to your company or choose from the available packages.'
    ], 'site', [], [
      { label: 'Contact us', href: CONTACT, variant: 'primary' },
      { label: 'Call *6050', href: 'tel:*6050' }
    ]);
  }

  function page(path, title, parent, body, source, sections, sourceUrls) {
    return {
      path: path,
      title: title,
      parent: parent,
      hero: { eyebrow: 'Azercell Business', title: title, body: body, source: source || 'site' },
      sections: (sections || []).concat([contactBlock()]),
      sourceUrls: sourceUrls || []
    };
  }

  var P = {};

  P['/business/mobile/'] = page('/business/mobile/', 'Mobile', '/business/',
    'Discover the ways Azercell’s mobile network can support and connect your business.', 'site', [
      cards('Mobile products and services', [
        card('My Business Tariff Plans', 'Flexible corporate plans with data, calls, SMS and unlimited calls within the company.', '/business/mobile/tariffs/', 'site'),
        card('My Business Internet Packs', 'Monthly, short-term and social network data options for corporate lines.', '/business/mobile/internet/', 'site'),
        card('Roaming', 'Voice, SMS and internet abroad for corporate subscribers.', '/business/mobile/roaming/', 'site'),
        card('Mobile Marketing', 'Reach segmented customer groups through mobile channels.', '/business/mobile/mobile-marketing/', 'site'),
        card('My Business Wi-Fi', 'Portable and fixed 4G Wi-Fi offers for business teams.', '/business/campaigns/my-business-wifi/', 'site'),
        card('Campaigns', 'Current business offers and promotions.', '/business/campaigns/', 'site'),
        card('Archive', 'Previous tariffs, internet packs and campaigns.', '/business/mobile/archive/', 'file')
      ])
    ], ['https://www.azercell.com/en/corporate/mobile-communications.html']);

  P['/business/mobile/tariffs/'] = page('/business/mobile/tariffs/', 'My Business Tariff Plans', '/business/mobile/',
    'Manage mobility by user or cost centre and keep employees connected across Azerbaijan.', 'site', [
      table('Current offers', [
        { label: 'My Business 4GB', value: '15 AZN/month · 4GB · 700 cross-net min · 500 SMS · unlimited corporate calls' },
        { label: 'My Business 8GB', value: '21 AZN/month · 8GB + 1GB night · 1,500 cross-net min · 1,000 SMS · unlimited corporate calls' },
        { label: 'My Business 12GB', value: '26 AZN/month · 12GB + 2GB night · 2,500 cross-net min · 2,000 SMS · 10 international min' },
        { label: 'My Business 20GB', value: '36 AZN/month · 20GB + 3GB night · 4,000 cross-net min · 2,000 SMS · 20 international min' },
        { label: 'My Business 60GB', value: '56 AZN/month · 60GB · 7,000 cross-net min · 3,000 SMS · 30 international min' },
        { label: 'My Business 100GB', value: '80 AZN/month · 100GB · 10,000 cross-net min under FUP · 1,000 SMS · 100 international min' }
      ], 'Prices include VAT. Extra night data on 8GB, 12GB and 20GB plans is available from 00:00 to 08:00.'),
      copy('Baseline plans', [
        'My Business 2 has a 2 AZN monthly fee and pay-as-you-go usage. My Business Region has a 2 AZN monthly fee with regional call rates.'
      ], 'site'),
      cards('Related pages', [
        card('Internet packs', 'Add more data to an eligible corporate line.', '/business/mobile/internet/', 'site'),
        card('Tariffs archive', 'Terms for previous corporate tariffs.', '/business/mobile/tariffs/archive/', 'site')
      ])
    ], ['https://www.azercell.com/en/corporate/mobile-communications/business-tariffs.html']);

  P['/business/mobile/tariffs/archive/'] = page('/business/mobile/tariffs/archive/', 'Tariffs archive', '/business/mobile/tariffs/',
    'Terms for corporate tariff plans that are no longer presented as current mass offers.', 'site', [
      cards('Archived tariff families', [
        card('Business packages', 'Previous Business 10, Business 16 and Business 20 package terms.', 'https://www.azercell.com/en/corporate/mobile-communications/tariffs-archive/business-10.html', 'site'),
        card('Tariff archive', 'Browse the official archive of corporate mobile tariffs.', 'https://www.azercell.com/en/corporate/mobile-communications/tariffs-archive.html', 'site')
      ]),
      copy('Before changing a tariff', ['Confirm current availability and migration conditions with the Corporate Contact Center.'], 'authored')
    ], ['https://www.azercell.com/en/corporate/mobile-communications/tariffs-archive.html']);

  P['/business/mobile/internet/'] = page('/business/mobile/internet/', 'My Business Internet Packs', '/business/mobile/',
    'Choose monthly, short-term or social network data for corporate mobile lines.', 'site', [
      cards('Internet pack categories', [
        card('Monthly internet packs', '2GB, 7GB, 14GB, 35GB and 55GB packages valid for 30 days.', '/business/mobile/internet/monthly/', 'site'),
        card('Short-term packs', 'Unlimited 1-hour and 3-hour access.', '/business/mobile/internet/short-term/', 'site'),
        card('Social network packs', 'Dedicated data for messaging, social media and video.', '/business/mobile/internet/social/', 'site'),
        card('Internet packs archive', 'Previous GigaMax and other archived offers.', '/business/mobile/internet/archive/', 'site')
      ])
    ], ['https://www.azercell.com/en/corporate/mobile-communications/internet/monthly.html']);

  P['/business/mobile/internet/monthly/'] = page('/business/mobile/internet/monthly/', 'Monthly internet packs', '/business/mobile/internet/',
    'Data packages for recurring business use, valid for 30 days.', 'site', [
      table('Monthly packs', [
        { label: '2GB', value: '6 AZN · SMS 2000 to 2525' },
        { label: '7GB', value: '10 AZN · SMS 7000 to 2525' },
        { label: '14GB', value: '15 AZN · SMS 14000 to 2525' },
        { label: '35GB', value: '25 AZN · SMS 35000 to 2525' },
        { label: '55GB', value: '30 AZN · SMS 55000 to 2525' }
      ], 'Each pack is valid for 30 days. SMS to 2525 costs 0.01 AZN.'),
      table('Non-recurrent packs', [
        { label: '2GB', value: '6 AZN · SMS +2GB to 2525' },
        { label: '7GB', value: '10 AZN · SMS +7GB to 2525' },
        { label: '14GB', value: '15 AZN · SMS +14GB to 2525' }
      ], 'Non-recurrent packs deactivate when their data is used or the 30-day period ends.')
    ], ['https://www.azercell.com/en/corporate/mobile-communications/internet/monthly.html']);

  P['/business/mobile/internet/short-term/'] = page('/business/mobile/internet/short-term/', 'Short-term packs', '/business/mobile/internet/',
    'Unlimited internet for a short business task or temporary need.', 'site', [
      table('Available packs', [
        { label: 'Unlimited 1 hour', value: '0.99 AZN · SMS S to 2525' },
        { label: 'Unlimited 3 hours', value: '1.99 AZN · SMS 3S to 2525' }
      ], 'The service is activated within 15 minutes. Each SMS to 2525 costs 0.01 AZN.'),
      copy('After the pack ends', ['Internet access returns to the conditions of the active tariff or other available data pack.'], 'site')
    ], ['https://www.azercell.com/en/corporate/mobile-communications/internet/short-term-packs.html']);

  P['/business/mobile/internet/social/'] = page('/business/mobile/internet/social/', 'Social network packs', '/business/mobile/internet/',
    'Dedicated data packages for messaging, social networks and video platforms.', 'site', [
      table('My Business Social Networks', [
        { label: 'My Business Chat', value: '5GB · 4 AZN · SMS B1 to 2525' },
        { label: 'My Business Social', value: '10GB · 7 AZN · SMS B2 to 2525' },
        { label: 'My Business Media', value: '30GB · 16 AZN · SMS B3 to 2525' }
      ], 'Each pack is valid for 30 days and may be used through supported mobile applications.'),
      copy('Eligibility', ['Available to subscribers with an active eligible auto-renewing monthly business internet pack or My Business tariff plan.'], 'site')
    ], ['https://www.azercell.com/en/corporate/mobile-communications/internet/my-business-social-packs.html']);

  P['/business/mobile/internet/archive/'] = page('/business/mobile/internet/archive/', 'Internet packs Archive', '/business/mobile/internet/',
    'Previous business internet packs and conditions retained for existing subscribers.', 'site', [
      cards('Archived packs', [
        card('GigaMax', '60GB under FUP, then up to 256 kb/s. Closed to new subscriptions from 1 December 2025.', 'https://www.azercell.com/en/corporate/mobile-communications/internet/b2b-internet-packs-archive/gigamax.html', 'site'),
        card('GigaMax Plus', '80GB under FUP, then up to 256 kb/s. Closed to new subscriptions from 1 December 2025.', 'https://www.azercell.com/en/corporate/mobile-communications/internet/b2b-internet-packs-archive/gigamax-plus.html', 'site'),
        card('500MB', 'Archived 30-day pack for eligible business broadband lines.', 'https://www.azercell.com/en/corporate/mobile-communications/internet/b2b-internet-packs-archive/500mb-archive.html', 'site')
      ])
    ], ['https://www.azercell.com/en/corporate/mobile-communications/internet/b2b-internet-packs-archive/gigamax-plus.html']);

  P['/business/mobile/azercell-biznes/'] = page('/business/mobile/azercell-biznes/', 'Azercell Biznes Platform', '/business/ict-solutions/cloud-digital-platforms/',
    'Manage corporate numbers, balances, invoices and services from one business application.', 'site', [
      cards('Core functions', [
        card('Number management', 'Open or close lines, review status and manage services for several corporate numbers.', '', 'site'),
        card('Billing and payments', 'Review invoices, accounts, debts and payment history, and top up numbers.', '', 'site'),
        card('Packages and roaming', 'Check balances and activate or deactivate internet and roaming packs.', '', 'site'),
        card('Documents and support', 'Sign official documents electronically and access customer care online.', '', 'site')
      ]),
      copy('Access the platform', ['The company representative registers with an Azercell number that has special access permission. The service is available on web and mobile devices.'], 'site', [], [
        { label: 'Open Azercell Biznes', href: BIZNES, variant: 'primary' }
      ])
    ], ['https://www.azercell.com/en/corporate/mobile-communications/special-services/azercell-biznes.html']);

  P['/business/mobile/mobile-marketing/'] = page('/business/mobile/mobile-marketing/', 'Mobile Marketing', '/business/mobile/',
    'Use mobile channels to reach segmented customer groups and support loyalty activity.', 'site', [
      copy('Direct mobile communication', ['Mobile Marketing supports targeted communication and analysis of customer groups through mobile channels.'], 'site'),
      cards('Available services', [
        card('Bulk & Profile SMS', 'Send information to a large number of customers in a short time.', '/business/customer-engagement/bulk-sms/', 'site'),
        card('Call Signature / Content Services', 'Add a business signature to outgoing calls.', '/business/customer-engagement/content-services/', 'site')
      ])
    ], ['https://www.azercell.com/en/corporate/mobile-communications/special-services/mobile-marketing.html']);

  P['/business/mobile/archive/'] = page('/business/mobile/archive/', 'Archive', '/business/mobile/',
    'Browse previous Business mobile offers by content type.', 'file', [
      cards('Archive sections', [
        card('Tariffs archive', 'Previous corporate tariff plans and conditions.', '/business/mobile/tariffs/archive/', 'site'),
        card('Internet packs archive', 'Previous business data packages.', '/business/mobile/internet/archive/', 'site'),
        card('Campaigns archive', 'Ended business campaigns and offers.', '/business/campaigns/archive/', 'site')
      ])
    ]);

  P['/business/fixed/'] = page('/business/fixed/', 'Fixed', '/business/',
    'Fixed connectivity for offices, branches, sites and business-critical applications.', 'site', [
      cards('Fixed services', [
        card('Internet Leased Line', 'Dedicated symmetrical internet with monitored business support.', '/business/fixed/internet-leased-line/', 'site'),
        card('MPLS / VPN', 'Secure data connectivity between offices and branches.', '/business/fixed/mpls-vpn/', 'file'),
        card('Fixed connectivity', 'Dedicated fibre connectivity with symmetrical upload and download.', '/business/fixed/fixed-connectivity/', 'file'),
        card('Managed Wi-Fi', 'Design, deployment, monitoring and ongoing management of a business Wi-Fi network.', '/business/fixed/managed-wifi/', 'file')
      ])
    ], ['https://www.azercell.com/en/corporate/fixed-communications.html']);

  P['/business/fixed/internet-leased-line/'] = page('/business/fixed/internet-leased-line/', 'Internet Leased Line', '/business/fixed/',
    'Dedicated symmetrical internet for websites, online sales, VoIP, cloud applications and large file transfers.', 'site', [
      cards('Benefits', [
        card('Fast installation', 'Azercell targets installation within three business days after the request.', '', 'site'),
        card('Reliable connection', 'Dedicated bandwidth with round-the-clock monitoring.', '', 'site'),
        card('Unlimited traffic', 'No data cap on the leased-line connection.', '', 'site'),
        card('Dedicated bandwidth', 'Upload and download capacity is not shared with consumer traffic.', '', 'site')
      ]),
      table('Wireless leased-line plans', [
        { label: '5 Mb/s', value: '199 AZN/month' },
        { label: '10 Mb/s', value: '249 AZN/month' },
        { label: '15 Mb/s', value: '309 AZN/month' },
        { label: '20 Mb/s', value: '399 AZN/month' },
        { label: '30 Mb/s', value: '549 AZN/month' },
        { label: '50 Mb/s', value: '749 AZN/month' },
        { label: '100 Mb/s', value: '1,399 AZN/month' },
        { label: '200 Mb/s', value: '2,049 AZN/month', source: 'file' },
        { label: '300 Mb/s', value: '2,699 AZN/month', source: 'file' },
        { label: '500 Mb/s', value: '3,499 AZN/month', source: 'file' },
        { label: '1 Gb/s', value: '4,299 AZN/month', source: 'file' }
      ], 'VAT is excluded. Installation fees may apply by location and connection type.'),
      copy('Installation conditions', ['The subscriber obtains building permissions and provides internal equipment such as a router. One public static IP is available per connected point on request.'], 'site')
    ], ['https://www.azercell.com/en/corporate/fixed-communications/my-business-internet-leased-line.html']);

  P['/business/fixed/mpls-vpn/'] = page('/business/fixed/mpls-vpn/', 'MPLS / VPN', '/business/fixed/',
    'Secure, stable and high-speed data transfer between offices and branches.', 'file', [
      copy('Business network connectivity', ['MPLS carries data efficiently across different network protocols and helps a company manage distributed operations through a private connection.'], 'file'),
      table('Monthly service fee by speed', [
        { label: '10 Mb/s', value: '170 AZN' }, { label: '20 Mb/s', value: '260 AZN' },
        { label: '30 Mb/s', value: '330 AZN' }, { label: '50 Mb/s', value: '490 AZN' },
        { label: '100 Mb/s', value: '690 AZN' }, { label: '200 Mb/s', value: '1,290 AZN' },
        { label: '300 Mb/s', value: '1,790 AZN' }, { label: '500 Mb/s', value: '2,090 AZN' },
        { label: '1 Gb/s', value: '2,790 AZN' }
      ], 'VAT is excluded. Installation fees may apply.', 'file')
    ]);

  P['/business/fixed/fixed-connectivity/'] = page('/business/fixed/fixed-connectivity/', 'Fixed connectivity', '/business/fixed/',
    'Dedicated fibre connectivity for fast, symmetrical upload and download.', 'file', [
      copy('Dedicated optical line', ['A dedicated cable connects one or more business devices or users. The service supports high-quality video, audio and image transfer and uninterrupted operation.'], 'file'),
      table('Fibre leased-line plans', [
        { label: '10 Mb/s', value: '110 AZN/month' }, { label: '20 Mb/s', value: '195 AZN/month' },
        { label: '30 Mb/s', value: '280 AZN/month' }, { label: '50 Mb/s', value: '449 AZN/month' },
        { label: '100 Mb/s', value: '847 AZN/month' }, { label: '250 Mb/s', value: '1,949 AZN/month' },
        { label: '1 Gb/s', value: '5,085 AZN/month' }
      ], 'VAT is excluded.', 'file')
    ]);

  P['/business/fixed/managed-wifi/'] = page('/business/fixed/managed-wifi/', 'Managed Wi-Fi', '/business/fixed/',
    'A managed business Wi-Fi network from design and deployment through monitoring and ongoing operation.', 'file', [
      cards('Service scope', [
        card('Network design', 'Plan coverage and capacity around the business site.', '', 'file'),
        card('Deployment', 'Install and configure the managed Wi-Fi environment.', '', 'file'),
        card('Monitoring', 'Track service health and connectivity.', '', 'file'),
        card('Ongoing management', 'Reduce the burden of operating the Wi-Fi infrastructure internally.', '', 'file')
      ])
    ]);

  P['/business/ict-solutions/'] = page('/business/ict-solutions/', 'ICT Solutions', '/business/',
    'Business technology services for communications, connected devices, security, automation and digital platforms.', 'authored', [
      cards('Solution areas', [
        card('Unified Communications', 'Business voice, calling management and IP telephony.', '/business/ict-solutions/unified-communications/', 'file'),
        card('IoT & M2M', 'Connect devices, vehicles, sensors and field operations.', '/business/iot/', 'site'),
        card('Security', 'Protect networks, systems, applications, data and users.', '/business/ict-solutions/security/', 'file'),
        card('Automation & Management', 'Automate routine work and manage teams and devices.', '/business/automation-management/', 'site'),
        card('Cloud & Digital Platforms', 'Customer communication, knowledge and corporate self-service platforms.', '/business/ict-solutions/cloud-digital-platforms/', 'file')
      ])
    ]);

  P['/business/ict-solutions/unified-communications/'] = page('/business/ict-solutions/unified-communications/', 'Unified Communications', '/business/ict-solutions/',
    'Interlink people, applications, clouds and networks with the right mix of communication technology.', 'site', [
      cards('Voice solutions', [
        card('Business VoIP', 'Cloud-based business calling without traditional on-site PBX equipment.', '/business/ict-solutions/unified-communications/business-voip/', 'file'),
        card('My Business Calls Manager', 'Manage company calling through a single business voice environment.', '/business/ict-solutions/unified-communications/calls-manager/', 'file'),
        card('SIP / IP Telephony', 'Connect an existing IP-PBX to the public telephone network.', '/business/ict-solutions/unified-communications/sip-ip-telephony/', 'file')
      ])
    ], ['https://www.azercell.com/en/corporate/unified-communications.html']);

  P['/business/ict-solutions/unified-communications/business-voip/'] = page('/business/ict-solutions/unified-communications/business-voip/', 'Business VoIP', '/business/ict-solutions/unified-communications/',
    'A cloud-based business phone system with essential PBX functions and no traditional on-site equipment to maintain.', 'file', [
      cards('Designed for', [
        card('Offices and branches', 'Use professional business calling across multiple locations.', '', 'file'),
        card('Remote teams', 'Keep employees connected through an IP-based voice environment.', '', 'file'),
        card('Customer-facing operations', 'Support reliable incoming and outgoing business calls.', '', 'file')
      ])
    ]);

  P['/business/ict-solutions/unified-communications/calls-manager/'] = page('/business/ict-solutions/unified-communications/calls-manager/', 'My Business Calls Manager', '/business/ict-solutions/unified-communications/',
    'Connect employees and customers through a single business voice environment.', 'file', [
      copy('Business call management', ['Use professional phone numbers, flexible call management and advanced communication features across company teams.'], 'file'),
      cards('Typical needs', [
        card('Call routing', 'Direct business calls to the right team or location.', '', 'authored'),
        card('Company numbers', 'Organize professional phone numbers in one environment.', '', 'file'),
        card('Distributed work', 'Support office, branch and remote users.', '', 'file')
      ])
    ]);

  P['/business/ict-solutions/unified-communications/sip-ip-telephony/'] = page('/business/ict-solutions/unified-communications/sip-ip-telephony/', 'SIP / IP Telephony', '/business/ict-solutions/unified-communications/',
    'Connect an existing IP-PBX or corporate telephone system to the public telephone network through SIP.', 'file', [
      copy('For companies with their own PBX', ['SIP provides scalable voice capacity without traditional telephone lines and is suited to businesses that already operate PBX infrastructure.'], 'file'),
      cards('Service characteristics', [
        card('Scalable capacity', 'Adjust voice capacity as business requirements change.', '', 'file'),
        card('Existing-system support', 'Use the company’s current IP-PBX or telephone system.', '', 'file'),
        card('IP-based connection', 'Carry business voice through SIP instead of traditional lines.', '', 'file')
      ])
    ]);

  P['/business/iot/'] = page('/business/iot/', 'IoT & M2M', '/business/ict-solutions/',
    'Connect devices and systems for monitoring, data analysis and automated business operations.', 'site', [
      cards('IoT and M2M portfolio', [
        card('My Business IoT Tariff Plans', 'Domestic data tariffs for corporate IoT devices.', '/business/iot/tariff-plans/', 'site'),
        card('IoT Roaming Packs', 'International connectivity for eligible IoT data lines.', '/business/iot/roaming-packs/', 'file'),
        card('IoT Pool Packages', 'Shared data volumes across connected IoT SIM cards.', '/business/iot/pool-packages/', 'file'),
        card('Fleet Management', 'Real-time vehicle monitoring and telematics.', '/business/fleet-field-operations/fleet/', 'site'),
        card('YolDash', 'Video surveillance and cloud footage for vehicles.', '/business/fleet-field-operations/yoldash-360/', 'site'),
        card('M2M Service', 'Device connectivity, monitoring and sector-specific applications.', '/business/iot/m2m/', 'site'),
        card('APN/PDP', 'Private mobile connectivity to corporate resources.', '/business/iot/apn-pdp/', 'file'),
        card('Irrigation System Control', 'Remote control and monitoring for pivot irrigation.', '/business/fleet-field-operations/irrigation/', 'site')
      ])
    ], ['https://www.azercell.com/en/corporate/iot.html']);

  P['/business/iot/tariff-plans/'] = page('/business/iot/tariff-plans/', 'My Business IoT Tariff Plans', '/business/iot/',
    'Domestic connectivity plans for postpaid corporate Data numbers used in IoT devices.', 'site', [
      table('IoT tariffs', [
        { label: 'My Business IoT 60MB', value: '60MB · 1 AZN/month' },
        { label: 'My Business IoT 150MB', value: '150MB · 2 AZN/month' }
      ], 'Prices include VAT. The plans operate within Azerbaijan.'),
      table('Business broadband data options', [
        { label: '500MB', value: '2.40 AZN · 30 days' }, { label: '2GB', value: '6 AZN · 30 days' },
        { label: '7GB', value: '10 AZN · 30 days' }, { label: '14GB', value: '15 AZN · 30 days' },
        { label: '35GB', value: '25 AZN · 30 days' }, { label: '55GB', value: '30 AZN · 30 days' }
      ], 'The 500MB option is intended for Data numbers on the My Business Broadband tariff.', 'file')
    ], ['https://www.azercell.com/en/about-us/press-releases/news/korporativ-abunecilerin-nezerine-iot.html']);

  P['/business/iot/roaming-packs/'] = page('/business/iot/roaming-packs/', 'IoT Roaming Packs', '/business/iot/',
    'Predictable roaming data for connected devices that operate across supported countries and networks.', 'file', [
      table('IoT roaming options', [
        { label: 'IoT Roaming 30MB', value: '30MB · 3 AZN/month' },
        { label: 'IoT Roaming 50MB', value: '50MB · 5 AZN/month' }
      ], 'For eligible postpaid corporate Data lines. Standard roaming and IoT roaming packs cannot be active at the same time.', 'file'),
      copy('Usage', ['The packs work only in roaming and renew every 30 days unless renewal is cancelled.'], 'file')
    ]);

  P['/business/iot/pool-packages/'] = page('/business/iot/pool-packages/', 'IoT Pool Packages', '/business/iot/',
    'Share an allocated data volume across a pool of connected IoT SIM cards.', 'file', [
      copy('Shared connectivity', ['Pooling helps reduce unused individual allowances, manage traffic centrally and scale connected-device deployments.'], 'file'),
      table('Pooled data packages', [
        { label: '10GB', value: '40 AZN/month' }, { label: '20GB', value: '55 AZN/month' },
        { label: '50GB', value: '90 AZN/month' }, { label: '100GB', value: '140 AZN/month' },
        { label: '200GB', value: '210 AZN/month' }, { label: '500GB', value: '290 AZN/month' },
        { label: '1TB', value: '410 AZN/month' }, { label: '3TB', value: '1,230 AZN/month' },
        { label: '6TB', value: '2,460 AZN/month' }, { label: '9TB', value: '3,690 AZN/month' }
      ], 'Each pool is valid for 30 days. A per-SIM licence fee also applies by SIM-count bracket.', 'file')
    ], ['https://www.azercell.com/en/about-us/press-releases/news/azercell-biznes-korporativ-meteriler-ecen-iot-ve-m2m-platformasini-teqdim-edir.html']);

  P['/business/iot/m2m/'] = page('/business/iot/m2m/', 'M2M Service', '/business/iot/',
    'Connect devices and systems for real-time monitoring, analysis and automated processes.', 'site', [
      cards('Application areas', [
        card('Transportation and logistics', 'Track vehicles, monitor driver behaviour and optimize routes.', '', 'site'),
        card('Energy management', 'Exchange smart-meter data and manage energy distribution.', '', 'site'),
        card('Smart cities', 'Use sensor and camera data for traffic and public infrastructure.', '', 'site'),
        card('Healthcare', 'Collect and send device data for remote monitoring.', '', 'site')
      ]),
      cards('Modules and devices', [
        card('Mobile modules', '3G, 4G, LTE and 5G connectivity for devices.', '', 'site'),
        card('GPS modules', 'Location tracking for vehicles, people and property.', '', 'site'),
        card('IoT sensors', 'Collect temperature, humidity, motion and other measurements.', '', 'site'),
        card('Gateways', 'Connect devices that use different networks or protocols.', '', 'site')
      ])
    ], ['https://www.azercell.com/en/corporate/iot/m2m.html']);

  P['/business/iot/apn-pdp/'] = page('/business/iot/apn-pdp/', 'APN/PDP', '/business/iot/',
    'Secure private connectivity between company devices, IoT SIM cards, applications and corporate resources.', 'file', [
      copy('How APN/PDP connectivity works', ['APN defines how mobile devices connect to the network and which corporate resources they can access. PDP provides the data session between the device and the mobile network.'], 'file'),
      cards('Use cases', [
        card('Private device access', 'Connect managed mobile devices to company resources.', '', 'file'),
        card('IoT and M2M', 'Provide controlled connectivity for data SIM cards and field devices.', '', 'file'),
        card('Business applications', 'Route mobile data sessions to approved corporate services.', '', 'file')
      ])
    ]);

  P['/business/fleet-field-operations/yoldash-360/'] = page('/business/fleet-field-operations/yoldash-360/', 'YolDash', '/business/iot/',
    'Smart video surveillance for corporate vehicles with live and recorded footage.', 'site', [
      cards('Safety and risk management', [
        card('24/7 vehicle video', 'Monitor company vehicles for theft, misuse and incidents.', '', 'site'),
        card('Incident evidence', 'Use recorded footage for disputes, insurance and investigations.', '', 'site'),
        card('Driver accountability', 'Review driving behaviour and support safer standards.', '', 'site')
      ]),
      cards('Fleet monitoring', [
        card('Live access', 'Connect to dash cameras and stream video from vehicles.', '', 'site'),
        card('Notifications', 'Receive alerts about dangerous situations on the road.', '', 'site'),
        card('Cloud storage', 'Access live and recorded video from mobile devices.', '', 'site')
      ])
    ], ['https://www.azercell.com/en/corporate/iot/yoldash-360.html']);

  P['/business/fleet-field-operations/fleet/'] = page('/business/fleet-field-operations/fleet/', 'Fleet Management', '/business/iot/',
    'Real-time vehicle monitoring supported by predictive analytics and operational reporting.', 'site', [
      cards('Fleet functions', [
        card('Location and route', 'Track vehicle position and direction and review routes.', '', 'site'),
        card('Driver and safety alerts', 'Analyze speeding or harsh braking and notify drivers.', '', 'site'),
        card('Fuel reporting', 'Review mileage and fuel-use reports to identify waste or fraud.', '', 'site'),
        card('Maintenance', 'Monitor service schedules for vehicles in the company fleet.', '', 'site')
      ]),
      table('Official package example', [
        { label: 'One-time payment, 2G', value: '65 AZN connection · 11 AZN/month' },
        { label: 'One-time payment, 4G', value: '129 AZN connection · 11 AZN/month' },
        { label: 'Installment, 2G', value: '0 AZN connection · 22 AZN/month for 6 months, then 11 AZN' },
        { label: 'Installment, 4G', value: '0 AZN connection · 32.50 AZN/month for 6 months, then 11 AZN' }
      ], 'Package includes 300MB domestic data and 10MB roaming data.')
    ], ['https://www.azercell.com/en/corporate/iot/biznesim-neqliyyat.html']);

  P['/business/fleet-field-operations/irrigation/'] = page('/business/fleet-field-operations/irrigation/', 'Irrigation System Control', '/business/iot/',
    'Remote monitoring and management for fixed sprinkler and pivot irrigation equipment.', 'site', [
      cards('Control functions', [
        card('Remote management', 'Review connection status, control cycles and receive alarms.', '', 'site'),
        card('Dashboard', 'View reports in a graphical interface.', '', 'site'),
        card('Reporting and notifications', 'Use detailed reporting and notification tools.', '', 'site'),
        card('Unified pivot control', 'Operate and maintain pivot devices from one system.', '', 'site')
      ]),
      copy('Operational purpose', ['The solution supports cable protection, efficient irrigation and real-time remote control through web and mobile applications.'], 'site')
    ], ['https://www.azercell.com/en/corporate/iot/suvarmaya-nezaret-sistemi.html']);

  P['/business/automation-management/'] = page('/business/automation-management/', 'Automation & Management', '/business/ict-solutions/',
    'Automate routine work and manage field teams and mobile devices.', 'authored', [
      cards('Management solutions', [
        card('Robotic Automation', 'Software robots for repetitive, rule-based tasks.', '/business/automation-management/rpa/', 'site'),
        card('Mobile Team Management', 'Plan, dispatch and monitor field operations.', '/business/fleet-field-operations/team-management/', 'site'),
        card('Mobile Device Management', 'Centrally manage and protect company devices.', '/business/automation-management/device-management/', 'site')
      ])
    ]);

  P['/business/automation-management/rpa/'] = page('/business/automation-management/rpa/', 'Robotic Automation', '/business/automation-management/',
    'Automate repetitive, rule-based tasks with tailored software robots.', 'site', [
      cards('Processes suited to RPA', [
        card('Invoice processing', 'Move structured invoice data through repeatable workflows.', '', 'site'),
        card('Employee onboarding and offboarding', 'Automate routine account and data steps.', '', 'site'),
        card('Data entry and validation', 'Transfer and check structured information across systems.', '', 'site'),
        card('Reporting', 'Generate recurring reports from defined data sources.', '', 'site')
      ]),
      copy('Service model', ['Azercell assesses workflows, identifies automation opportunities, develops bots, deploys them and supports ongoing optimization.'], 'site'),
      copy('Licensing referenced in the offer deck', ['Autonomous Robot and Automation Developer licences are offered for a 12-month period. Robot configuration and programming are separate services.'], 'file')
    ], ['https://www.azercell.com/en/corporate/iot/rpa.html']);

  P['/business/fleet-field-operations/team-management/'] = page('/business/fleet-field-operations/team-management/', 'Mobile Team Management', '/business/automation-management/',
    'Organize, manage and monitor field operations through a digital platform.', 'site', [
      table('Standard offers', [
        { label: 'Lite', value: '200 AZN/month excl. VAT · 3 field users · 1 admin user' },
        { label: 'Plus', value: '400 AZN/month excl. VAT · 6 field users · 2 admin users' },
        { label: 'Pro', value: '700 AZN/month excl. VAT · 12 field users · 2 admin users' }
      ]),
      cards('Capabilities', [
        card('Field work management', 'Plan customer visits and track work completion.', '', 'site'),
        card('Location and route reporting', 'Use GPS data and operational reporting.', '', 'site'),
        card('Photo reporting', 'Collect photo evidence and feedback along a work route.', '', 'site'),
        card('Resource scheduling', 'Allocate staff and tasks with real-time access.', '', 'site')
      ])
    ], ['https://www.azercell.com/en/corporate/iot/mobil-komandanin-idare-edilmesi.html']);

  P['/business/automation-management/device-management/'] = page('/business/automation-management/device-management/', 'Mobile Device Management', '/business/automation-management/',
    'Manage, secure and customize company smartphones, tablets and terminals.', 'site', [
      cards('Management features', [
        card('Centralized management', 'Enroll devices and apply bulk actions to user or device groups.', '', 'site'),
        card('Remote management', 'Troubleshoot, update and deploy policy remotely.', '', 'site'),
        card('Asset tracking and inventory', 'Review device specifications, software and usage statistics.', '', 'site'),
        card('Scalability', 'Support both small teams and larger enterprise deployments.', '', 'site')
      ]),
      table('Pricing', [
        { label: 'Monthly licence', value: '11 AZN per device, VAT included' },
        { label: 'Activation, installation and initial training', value: '600 AZN, VAT included' }
      ]),
      copy('Deployment choices', ['Data can be stored and processed on Azercell servers or on the customer’s servers. Devices can operate through the internet or an isolated network.'], 'site')
    ], ['https://www.azercell.com/en/corporate/iot/mobil-cihazlarin-idar-edilmsi.html']);

  P['/business/ict-solutions/security/'] = page('/business/ict-solutions/security/', 'Security', '/business/ict-solutions/',
    'Protect business networks, systems, applications, data and users against digital and voice threats.', 'file', [
      cards('Security services', [
        card('Cybersecurity Solutions', 'Protection, detection, incident response and security monitoring.', '/business/ict-solutions/security/cybersecurity-solutions/', 'file'),
        card('Security Audits & Consulting', 'Identify vulnerabilities and assess cyber risk.', '/business/ict-solutions/security/audits-consulting/', 'file'),
        card('Managed Security', 'Continuous monitoring and support for threat response.', '/business/ict-solutions/security/managed-security/', 'file'),
        card('DNS Security', 'Block access to known or suspicious web destinations.', '/business/ict-solutions/security/dns-security/', 'file'),
        card('Fraud Protection', 'Identify and block potentially malicious voice traffic.', '/business/ict-solutions/security/fraud-protection/', 'file')
      ])
    ]);

  P['/business/ict-solutions/security/cybersecurity-solutions/'] = page('/business/ict-solutions/security/cybersecurity-solutions/', 'Cybersecurity Solutions', '/business/ict-solutions/security/',
    'Comprehensive protection for networks, systems, applications, data and users.', 'file', [
      cards('Security coverage', [
        card('Proactive protection', 'Reduce exposure before a threat affects operations.', '', 'file'),
        card('Threat detection', 'Identify suspicious activity across the protected environment.', '', 'file'),
        card('Incident response', 'Support containment and recovery when a security event occurs.', '', 'file'),
        card('Security monitoring', 'Maintain visibility into the organization’s security posture.', '', 'file')
      ])
    ]);

  P['/business/ict-solutions/security/audits-consulting/'] = page('/business/ict-solutions/security/audits-consulting/', 'Security Audits & Consulting', '/business/ict-solutions/security/',
    'Expert audits and consulting to identify vulnerabilities, assess risks and strengthen security.', 'file', [
      cards('Engagement focus', [
        card('Vulnerability identification', 'Find weaknesses across the in-scope environment.', '', 'file'),
        card('Risk assessment', 'Evaluate the business impact of identified security risks.', '', 'file'),
        card('Security improvement', 'Define actions that strengthen the organization’s protection.', '', 'file')
      ])
    ]);

  P['/business/ict-solutions/security/managed-security/'] = page('/business/ict-solutions/security/managed-security/', 'Managed Security', '/business/ict-solutions/security/',
    'Continuous security monitoring that helps detect suspicious activity and respond before threats affect the business.', 'file', [
      cards('Managed service', [
        card('Continuous monitoring', 'Maintain visibility across the IT environment.', '', 'file'),
        card('Suspicious activity detection', 'Identify behaviour that may indicate a security threat.', '', 'file'),
        card('Response support', 'Help the business act on detected threats.', '', 'file')
      ])
    ]);

  P['/business/ict-solutions/security/dns-security/'] = page('/business/ict-solutions/security/dns-security/', 'DNS Security', '/business/ict-solutions/security/',
    'Analyze DNS requests and prevent access to known or suspicious destinations.', 'file', [
      copy('Threats addressed', ['DNS Security adds protection against phishing, malware, ransomware, botnets and other web-based threats.'], 'file'),
      cards('How it helps', [
        card('Request analysis', 'Check DNS requests before a destination is reached.', '', 'file'),
        card('Destination blocking', 'Prevent access to known or suspicious web destinations.', '', 'file')
      ])
    ]);

  P['/business/ict-solutions/security/fraud-protection/'] = page('/business/ict-solutions/security/fraud-protection/', 'Fraud Protection', '/business/ict-solutions/security/',
    'Identify and block potentially fraudulent or malicious voice traffic.', 'file', [
      copy('Call protection', ['The service helps safeguard the organization and employees from suspicious calls before they cause financial or operational damage.'], 'file'),
      cards('Protection goals', [
        card('Identify suspicious calls', 'Flag voice traffic that may be fraudulent.', '', 'file'),
        card('Block malicious traffic', 'Stop known or suspected threats before connection.', '', 'file'),
        card('Reduce impact', 'Limit financial and operational exposure from voice fraud.', '', 'file')
      ])
    ]);

  P['/business/ict-solutions/cloud-digital-platforms/'] = page('/business/ict-solutions/cloud-digital-platforms/', 'Cloud & Digital Platforms', '/business/ict-solutions/',
    'Platforms for customer communication, internal knowledge, corporate self-service and selected zero-rated business access.', 'file', [
      cards('Platforms', [
        card('InfoHUB', 'Centralized knowledge and FAQ response management for service teams.', '/business/customer-engagement/infohub/', 'site'),
        card('CPaaS', 'Bring calls, video, messaging, chatbots, SMS, email and social media into one cloud platform.', '/business/customer-engagement/cpaas/', 'site'),
        card('Azercell Biznes Platform', 'Manage corporate numbers, services, invoices and documents.', '/business/mobile/azercell-biznes/', 'site'),
        card('Free DPI', 'Access selected business services without using mobile data allowance.', '/business/ict-solutions/cloud-digital-platforms/free-dpi/', 'file')
      ])
    ]);

  P['/business/customer-engagement/infohub/'] = page('/business/customer-engagement/infohub/', 'InfoHUB', '/business/ict-solutions/cloud-digital-platforms/',
    'Centralize business knowledge so service teams can answer customer questions quickly and consistently.', 'site', [
      cards('What InfoHUB supports', [
        card('Real-time information management', 'Publish product launches, feature updates, campaigns and operational information.', '', 'site'),
        card('Reports and notifications', 'Track performance and notify users about important changes.', '', 'site'),
        card('Training and guidelines', 'Provide account, troubleshooting, privacy and security guidance.', '', 'site')
      ]),
      copy('Customer-service value', ['The platform can reduce call duration, improve answer consistency and support cross-selling and up-selling.'], 'site'),
      table('Annual subscription groups', [
        { label: '0–50 users', value: '333 AZN' }, { label: '51–100 users', value: '500 AZN' },
        { label: '101–300 users', value: '1,250 AZN' }, { label: '301–500 users', value: '1,667 AZN' },
        { label: '501–1,000 users', value: '2,500 AZN' }, { label: '1,001–2,000 users', value: '3,333 AZN' },
        { label: '2,001–5,000 users', value: '3,750 AZN' }
      ], 'Prices include VAT and come from the supplied commercial offer deck.', 'file')
    ], ['https://www.azercell.com/en/corporate/cloud-services/infohub.html']);

  P['/business/customer-engagement/cpaas/'] = page('/business/customer-engagement/cpaas/', 'CPaaS', '/business/ict-solutions/cloud-digital-platforms/',
    'A cloud customer-experience platform that brings business communication channels together.', 'site', [
      cards('Communication channels', [
        card('Calls and video calls', 'Support voice and video interactions in the same platform.', '', 'site'),
        card('Messaging and chatbots', 'Serve customers through messaging channels and automated chat.', '', 'site'),
        card('SMS and email', 'Coordinate outbound and service communications.', '', 'site'),
        card('Social media', 'Connect customer conversations from supported social channels.', '', 'site')
      ]),
      cards('Business outcomes', [
        card('Interaction history', 'Track customer communication history in one place.', '', 'site'),
        card('CRM integration', 'Use customer context to support more relevant interactions.', '', 'site'),
        card('Remote and office teams', 'Give distributed teams access to the same communication environment.', '', 'site')
      ])
    ], ['https://www.azercell.com/en/corporate/cloud-services/cpaas.html']);

  P['/business/ict-solutions/cloud-digital-platforms/free-dpi/'] = page('/business/ict-solutions/cloud-digital-platforms/free-dpi/', 'Free DPI', '/business/ict-solutions/cloud-digital-platforms/',
    'Access selected business services without the traffic being deducted from the mobile data allowance.', 'file', [
      copy('My Business 0 Traffic', ['Eligible business customers can use selected websites and applications without consuming the active mobile data allowance.'], 'file'),
      copy('Eligibility and service list', ['The final list of eligible lines, websites and applications must be confirmed before production launch.'], 'authored')
    ]);

  P['/business/customer-engagement/bulk-sms/'] = page('/business/customer-engagement/bulk-sms/', 'Bulk & Profile SMS', '/business/mobile/mobile-marketing/',
    'Send information to a large number of customers within minutes.', 'site', [
      copy('Business messaging', ['Bulk & Profile SMS helps companies contact thousands of customers through a direct mobile communication channel.'], 'site'),
      cards('Typical uses', [
        card('Service updates', 'Inform customers about changes or operational notices.', '', 'authored'),
        card('Campaign communication', 'Deliver an approved offer to a defined audience.', '', 'authored'),
        card('Customer notifications', 'Send time-sensitive business messages at scale.', '', 'authored')
      ])
    ], ['https://www.azercell.com/en/corporate/mobile-communications/special-services/mobile-marketing.html']);

  P['/business/customer-engagement/content-services/'] = page('/business/customer-engagement/content-services/', 'Call Signature / Content Services', '/business/mobile/mobile-marketing/',
    'Add a business signature or message to outgoing calls.', 'site', [
      copy('Call Signature', ['The service displays a custom signature to supported local mobile numbers and can introduce a job title, company name or short business message.'], 'site'),
      table('Subscription', [
        { label: 'Postpaid', value: '1.99 AZN/month · unlimited use' },
        { label: 'Prepaid', value: '0.10 AZN/day · unlimited use' },
        { label: 'Create a signature', value: 'Send the signature text to 5111; dial the destination with the *5* prefix' }
      ], 'A signature can contain up to 100 characters.'),
      faq('Additional information', [
        { question: 'Where is the signature visible?', answer: 'It can currently be shown to subscribers of supported local mobile operators in Azerbaijan.', source: 'site' },
        { question: 'How do I check the current signature?', answer: 'Send IMZA to 5111.', source: 'site' },
        { question: 'How do I stop the service?', answer: 'Send STOPIMZA to 5111.', source: 'site' }
      ])
    ], ['https://www.azercell.com/en/corporate/mobile-communications/special-services/call-forwarding.html']);

  P['/business/partnerships/'] = page('/business/partnerships/', 'Partnerships', '/business/',
    'Work with Azercell to bring technology, solutions and services to businesses across Azerbaijan.', 'file', [
      copy('Who we work with', ['Technology providers, solution integrators, startups and industry partners can collaborate with Azercell on new business opportunities and enterprise needs.'], 'file'),
      cards('Partnership paths', [
        card('Technology providers', 'Bring a proven technology into a joint business solution.', '', 'authored'),
        card('Solution integrators', 'Combine connectivity and implementation capabilities for enterprise customers.', '', 'authored'),
        card('Startups', 'Explore product and distribution collaboration for new services.', '', 'authored'),
        card('Industry partners', 'Develop solutions around sector-specific operational needs.', '', 'authored')
      ])
    ]);

  P['/business/support/'] = page('/business/support/', 'Support', '/business/',
    'Get product information, technical support and help with corporate service operations.', 'site', [
      cards('Support options', [
        card('FAQ', 'Answers to common questions about tariffs, internet packs and business services.', '/business/support/faq/', 'file'),
        card('Live Chat', 'Contact online support through the official support portal.', '/business/support/live-chat/', 'site'),
        card('Contact Us', 'Corporate Contact Center hours and numbers.', '/business/support/contact-us/', 'site'),
        card('Locations', 'Find a service location for in-person help.', '/business/support/locations/', 'file'),
        card('Online Itemized Bill', 'Get a detailed breakdown of company-number bills.', '/business/support/itemized-bill/', 'site')
      ])
    ], ['https://www.azercell.com/en/about-us/contact-us/corporate-call-center.html']);

  P['/business/support/faq/'] = page('/business/support/faq/', 'FAQ', '/business/support/',
    'Common questions about Azercell Business tariffs, data packs and account support.', 'file', [
      faq('Tariffs and internet', [
        { question: 'Can unused tariff data be carried forward?', answer: 'No. Internet data expires at the end of the billing period.', source: 'site' },
        { question: 'How can I check a business internet pack balance?', answer: 'Send a blank SMS to 2525 or dial *100#YES. SMS to 2525 costs 0.01 AZN.', source: 'site' },
        { question: 'Can I buy a smaller monthly pack?', answer: 'The active pack must have at least 95% of its traffic used before a smaller or identical pack can be ordered.', source: 'site' },
        { question: 'Do domestic business internet packs work in roaming?', answer: 'No. Roaming usage follows the applicable roaming rates or roaming internet packs.', source: 'site' }
      ]),
      faq('Corporate support', [
        { question: 'What can the Corporate Contact Center help with?', answer: 'It provides information about tariffs, campaigns and services, handles written operation requests and offers technical support.', source: 'site' },
        { question: 'How do I contact the Corporate Contact Center?', answer: 'Call (+994 12) 490 49 40 from a landline or 6050 / *6050 from a mobile phone.', source: 'site' }
      ])
    ], ['https://www.azercell.com/en/corporate/mobile-communications/business-tariffs.html', 'https://www.azercell.com/en/corporate/mobile-communications/internet/monthly.html']);

  P['/business/support/live-chat/'] = page('/business/support/live-chat/', 'Live Chat', '/business/support/',
    'Use Azercell’s online support portal for corporate requests and assistance.', 'site', [
      copy('Open online support', ['Requests submitted through the support portal are processed during Corporate Contact Center working hours.'], 'site', [], [
        { label: 'Open support portal', href: SUPPORT, variant: 'primary' }
      ]),
      copy('Working hours', ['Monday to Friday: 09:00–18:00. Saturday: portal requests are processed from 09:00–16:00. Sunday is a non-working day.'], 'site')
    ], ['https://www.azercell.com/en/about-us/contact-us/corporate-call-center.html']);

  P['/business/support/contact-us/'] = page('/business/support/contact-us/', 'Contact Us', '/business/support/',
    'Contact the Corporate Contact Center for tariff information, service requests and technical support.', 'site', [
      table('Contact channels', [
        { label: 'Landline', value: '(+994 12) 490 49 40' },
        { label: 'Mobile', value: '6050 or *6050 · 0.10 AZN per call' },
        { label: 'Online portal', value: 'https://support.azercell.com/' },
        { label: 'Business email', value: 'business@azercell.com' }
      ]),
      table('Working hours', [
        { label: 'Monday–Friday', value: '09:00–18:00 · calls and portal requests' },
        { label: 'Saturday', value: '09:00–16:00 · portal requests only' },
        { label: 'Sunday', value: 'Closed' }
      ]),
      copy('What the team can do', [], 'site', [
        'Provide information on current tariffs, campaigns and services',
        'Process eligible operations requested in writing',
        'Provide technical support'
      ], [
        { label: 'Open support portal', href: SUPPORT, variant: 'primary' },
        { label: 'Email Business team', href: 'mailto:business@azercell.com' }
      ])
    ], ['https://www.azercell.com/en/about-us/contact-us/corporate-call-center.html']);

  P['/business/support/locations/'] = page('/business/support/locations/', 'Locations', '/business/support/',
    'Find an Azercell Business location for in-person support, consultation and service assistance.', 'file', [
      copy('Visit a service location', ['Use the official location finder to review nearby Azercell sales and service centres and their current opening information.'], 'authored', [], [
        { label: 'Open location finder', href: 'https://www.azercell.com/en/personal/azercell-stores.html', variant: 'primary' }
      ]),
      copy('Before visiting', ['For a corporate operation, confirm the required company documents and authorization with the Corporate Contact Center.'], 'authored')
    ]);

  P['/business/support/itemized-bill/'] = page('/business/support/itemized-bill/', 'Online Itemized Bill', '/business/support/',
    'Get a detailed breakdown of bills for numbers used by your company.', 'site', [
      copy('How the service works', ['Authorized users log in to a dedicated page with a username and password to review itemized billing.'], 'site'),
      copy('Subscription', ['Complete the service form, authenticate it with the company seal and authorized signature, and submit it to the company’s Azercell Account Manager.'], 'site'),
      table('Price', [{ label: 'Each itemized bill', value: '1.59 AZN' }]),
      copy('Deactivation', ['Submit a written request to the company’s Azercell Account Manager.'], 'site')
    ], ['https://www.azercell.com/en/corporate/mobile-communications/special-services/online-itemized-bill.html']);

  global.BusinessPagesData = P;
})(window);
