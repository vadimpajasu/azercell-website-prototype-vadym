/* ==========================================================================
   Azercell Business content-page data
   Source values: site = azercell.com, file = supplied documents,
   authored = prototype-only connective copy.
   ========================================================================== */

(function (global) {
  'use strict';

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

  function offerStack(groups) {
    return { type: 'offerStack', groups: groups };
  }

  function faq(title, items) {
    return { type: 'faq', title: title, items: items };
  }

  function page(path, title, parent, body, source, sections, sourceUrls) {
    return {
      path: path,
      title: title,
      parent: parent,
      hero: { eyebrow: 'Azercell Business', title: title, body: body, source: source || 'site' },
      sections: sections || [],
      sourceUrls: sourceUrls || []
    };
  }

  var P = {};

  P['/business/mobile/'] = page('/business/mobile/', 'Mobile', '/business/',
    'Discover the ways Azercell’s mobile network can support and connect your business.', 'site', [
      cards('Mobile products and services', [
        card('My Business Tariff Plans', 'Compare corporate plans with data, calls, SMS and unlimited calls within the company.', '/business/mobile/tariffs/', 'prompt'),
        card('My Business Internet Packs', 'Choose recurring, short-term or social-network data for corporate lines.', '/business/mobile/internet/', 'prompt'),
        card('Roaming', 'Prepare company lines for calls, messaging and mobile internet abroad.', '/business/mobile/roaming/', 'prompt')
      ]),
      cards('Mobile Marketing', [
        card('Mobile Marketing overview', 'Review mobile communication and loyalty services for business customer engagement.', '/business/mobile/mobile-marketing/', 'prompt'),
        card('Bulk & Profile SMS', 'Send information to a large customer audience in a short time.', '/business/customer-engagement/bulk-sms/', 'prompt'),
        card('Call Signature / Content Services', 'Add a business signature to outgoing calls.', '/business/customer-engagement/content-services/', 'prompt'),
        card('Talking minutes and internet packages', 'Use an Azercell loyalty service to reward customers with on-net minutes or internet packages.', '/business/mobile/mobile-marketing/talking-minutes-and-internet-packages/', 'prompt')
      ]),
      {
        type: 'cards',
        title: 'Campaigns',
        action: { label: 'All business campaigns', href: '/business/campaigns/' },
        columns: 1,
        items: [
          card('My Business Wi-Fi', 'Compare portable Mi-Fi and fixed WTTx internet offers for business teams.', '/business/campaigns/my-business-wifi/', 'prompt')
        ]
      },
      cards('Archive', [
        card('Tariffs archive', 'Previous corporate tariff plans and conditions.', '/business/mobile/tariffs/archive/', 'prompt'),
        card('Internet packs archive', 'Previous business data packages and their conditions.', '/business/mobile/internet/archive/', 'prompt'),
        card('Campaigns archive', 'Ended business campaigns and offers.', '/business/campaigns/archive/', 'prompt')
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

    ], ['https://www.azercell.com/en/corporate/mobile-communications/business-tariffs.html']);

  P['/business/mobile/tariffs/archive/'] = page('/business/mobile/tariffs/archive/', 'Tariffs archive', '/business/mobile/tariffs/',
    'Terms for corporate tariff plans that are no longer presented as current mass offers.', 'site', [
      cards('Tariff archive', [
        card('10GB roaming pack', 'Previous price, activation methods and conditions for the 10GB roaming internet pack.', '/business/mobile/tariffs/archive/10gb-roaming-pack/', 'site'),
        card('Call packs', 'Archived corporate Business Bundles with calls, SMS and mobile internet.', '/business/mobile/tariffs/archive/call-packs/', 'site'),
        card('Mobile Internet Packs', 'Archived corporate Mi-Fi, USB modem and specialist mobile internet products.', '/business/mobile/tariffs/archive/mobile-internet-packs/', 'site'),
        card('My Business tariff plans', 'Archived My Business tariff-plan terms, allowances and baseline packages.', '/business/mobile/tariffs/archive/my-business-tariff-plans/', 'site'),
        card('Old Business packages', 'Legacy Business 10, 20, 15, 25 and 55 package conditions.', '/business/mobile/tariffs/archive/old-business-packages/', 'site'),
        card('SMS packs', 'Previous corporate SMS packages and prices.', '/business/mobile/tariffs/archive/sms-packs/', 'site'),
        card('Tariffs', 'Earlier corporate tariff schedules and plan-by-plan usage rates.', '/business/mobile/tariffs/archive/tariffs/', 'site')
      ]),
      copy('Before changing a tariff', ['Confirm current availability and migration conditions with the Corporate Contact Center.'], 'authored')
    ], ['https://www.azercell.com/en/corporate/mobile-communications/tariffs-archive.html']);

  P['/business/mobile/internet/'] = page('/business/mobile/internet/', 'My Business Internet Packs', '/business/mobile/',
    'Choose monthly, short-term or social network data for corporate mobile lines.', 'site', [
      cards('Internet pack categories', [
        card('Monthly internet packs', '2GB, 7GB, 14GB, 35GB and 55GB packages valid for 30 days.', '/business/mobile/internet/monthly/', 'site'),
        card('Short-term packs', 'Unlimited 1-hour and 3-hour access.', '/business/mobile/internet/short-term/', 'site'),
        card('Social network packs', 'Dedicated data for messaging, social media and video.', '/business/mobile/internet/social/', 'site')
      ]),
      cards('Internet packs archive', [
        card('Browse archived internet packs', 'Review previous GigaMax, daily, weekend and other corporate data offers.', '/business/mobile/internet/archive/', 'prompt')
      ])
    ], ['https://www.azercell.com/en/corporate/mobile-communications/internet/monthly.html']);

  P['/business/mobile/internet/monthly/'] = page('/business/mobile/internet/monthly/', 'Monthly internet packs', '/business/mobile/internet/',
    'Data packages for recurring business use, valid for 30 days.', 'site', [
      offerStack([
        table('Monthly packs', [
          { label: '2GB', value: '6 AZN · 30 days · SMS 2000 to 2525', href: '/business/mobile/internet/monthly/2gb/' },
          { label: '7GB', value: '10 AZN · 30 days · SMS 7000 to 2525', href: '/business/mobile/internet/monthly/7gb/' },
          { label: '14GB', value: '15 AZN · 30 days · SMS 14000 to 2525', href: '/business/mobile/internet/monthly/14gb/' },
          { label: '35GB', value: '25 AZN · 30 days · SMS 35000 to 2525', href: '/business/mobile/internet/monthly/35gb/' },
          { label: '55GB', value: '30 AZN · 30 days · SMS 55000 to 2525', href: '/business/mobile/internet/monthly/55gb/' }
        ], 'Each pack is valid for 30 days. SMS to 2525 costs 0.01 AZN.', 'prompt'),
        table('Non-recurrent packs', [
          { label: '2GB', value: '6 AZN · SMS +2GB to 2525' },
          { label: '7GB', value: '10 AZN · SMS +7GB to 2525' },
          { label: '14GB', value: '15 AZN · SMS +14GB to 2525' }
        ], 'Non-recurrent packs deactivate when their data is used or the 30-day period ends.')
      ])
    ], ['https://www.azercell.com/en/corporate/mobile-communications/internet/monthly.html']);

  P['/business/mobile/internet/short-term/'] = page('/business/mobile/internet/short-term/', 'Short-term packs', '/business/mobile/internet/',
    'Unlimited internet for a short business task or temporary need.', 'site', [
      table('Available packs', [
        { label: 'Unlimited 1 hour', value: '0.99 AZN · Up to 1 hour · SMS S to 2525', href: '/business/mobile/internet/short-term/unlimited-1-hour/' },
        { label: 'Unlimited 3 hours', value: '1.99 AZN · 3 hours · SMS 3S to 2525', href: '/business/mobile/internet/short-term/unlimited-3-hours/' }
      ], 'The service is activated within 15 minutes. Each SMS to 2525 costs 0.01 AZN.', 'prompt'),
      copy('After the pack ends', ['Internet access returns to the conditions of the active tariff or other available data pack.'], 'site')
    ], ['https://www.azercell.com/en/corporate/mobile-communications/internet/short-term-packs.html']);

  P['/business/mobile/internet/social/'] = page('/business/mobile/internet/social/', 'Social network packs', '/business/mobile/internet/',
    'Dedicated data packages for messaging, social networks and video platforms.', 'site', [
      table('My Business Social Networks', [
        { label: 'My Business Chat', value: '5GB · 4 AZN · 30 days · SMS B1 to 2525', href: '/business/mobile/internet/social/my-business-chat/' },
        { label: 'My Business Social', value: '10GB · 7 AZN · 30 days · SMS B2 to 2525', href: '/business/mobile/internet/social/my-business-social/' },
        { label: 'My Business Media', value: '30GB · 16 AZN · 30 days · SMS B3 to 2525', href: '/business/mobile/internet/social/my-business-media/' }
      ], 'Each pack is valid for 30 days and may be used through supported mobile applications.', 'prompt'),
      copy('Eligibility', ['Available to subscribers with an active eligible auto-renewing monthly business internet pack or My Business tariff plan.'], 'site')
    ], ['https://www.azercell.com/en/corporate/mobile-communications/internet/my-business-social-packs.html']);

  P['/business/mobile/internet/archive/'] = page('/business/mobile/internet/archive/', 'Internet packs Archive', '/business/mobile/internet/',
    'Previous business internet packs and conditions retained for existing subscribers.', 'site', [
      cards('Archived internet packs', [
        card('GigaMax Pro', 'Archived unlimited GigaMax Pro terms and eligibility.', '/business/mobile/internet/archive/gigamax-pro/', 'prompt'),
        card('GigaMax Plus', '80GB under FUP, then up to 256 kb/s. Closed to new subscriptions from 1 December 2025.', '/business/mobile/internet/archive/gigamax-plus/', 'prompt'),
        card('GigaMax', '60GB under FUP, then up to 256 kb/s. Closed to new subscriptions from 1 December 2025.', '/business/mobile/internet/archive/gigamax/', 'prompt'),
        card('Unlimited Weekend', 'Archived short-term unlimited weekend internet offer.', '/business/mobile/internet/archive/unlimited-weekend/', 'prompt'),
        card('Unlimited Night', 'Archived unlimited night internet offer.', '/business/mobile/internet/archive/unlimited-night/', 'prompt'),
        card('500MB · 30 days', 'Previous recurring 500MB pack.', '/business/mobile/internet/archive/500mb-monthly/', 'prompt'),
        card('500MB · 24 hours', 'Earlier daily 500MB pack.', '/business/mobile/internet/archive/500mb-daily/', 'prompt'),
        card('500+MB', 'Archived bonus-volume internet pack.', '/business/mobile/internet/archive/500-plus-mb/', 'prompt'),
        card('50MB', 'Archived 50MB corporate internet pack.', '/business/mobile/internet/archive/50mb/', 'prompt'),
        card('60MB', 'Archived 60MB corporate internet pack.', '/business/mobile/internet/archive/60mb/', 'prompt')
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
        card('Call Signature / Content Services', 'Add a business signature to outgoing calls.', '/business/customer-engagement/content-services/', 'site'),
        card('Talking minutes and internet packages', 'Loyalty service: reward customers with on-net calling minutes or internet packages credited directly to their balances.', '/business/mobile/mobile-marketing/talking-minutes-and-internet-packages/', 'prompt')
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
        card('Unified Communications', 'Business voice, call management and IP telephony for office, branch and remote teams.', '/business/ict-solutions/unified-communications/', 'prompt', ['Business VoIP', 'Calls Manager', 'SIP / IP Telephony']),
        card('IoT & M2M', 'Connect devices, vehicles and sensors with domestic, roaming and pooled data options.', '/business/iot/', 'prompt', ['IoT tariffs and pool packages', 'Fleet and field operations', 'Private APN connectivity']),
        card('Security', 'Protect networks, applications, data and users with prevention, audit and managed-security services.', '/business/ict-solutions/security/', 'prompt', ['Cybersecurity solutions', 'Security audits', 'DNS and fraud protection']),
        card('Automation & Management', 'Automate routine work and manage field teams or company devices from central platforms.', '/business/automation-management/', 'prompt', ['Robotic automation', 'Mobile team management', 'Device management']),
        card('Cloud & Digital Platforms', 'Support customer communication, internal knowledge and corporate self-service.', '/business/ict-solutions/cloud-digital-platforms/', 'prompt', ['InfoHUB', 'CPaaS', 'Azercell Biznes Platform'])
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
      copy('RPA licence options in the supplied offer', ['The supplied commercial presentation lists two annual licensing units: an Autonomous Robot licence for one software robot and an Automation Developer licence for one user. Configuration and programming by local RPA specialists are separate implementation services.'], 'prompt')
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
        card('Free DPI', 'Access selected business services without using mobile data allowance.', '/business/ict-solutions/cloud-digital-platforms/free-dpi/', 'file')
      ]),
      cards('Azercell Biznes Platform', [
        card('Manage corporate services in one place', 'Review numbers, balances, invoices, payments, packages, documents and support requests through the web and mobile platform.', '/business/mobile/azercell-biznes/', 'prompt', ['Corporate number management', 'Billing and payment history', 'Packages, documents and online support'])
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
      ], 'Prices include VAT and come from the supplied commercial offer deck.', 'prompt')
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

  /* -----------------------------------------------------------------------
     Official-site detail restored after the 4 September content audit.
     Insert every block before the shared contact block so the page keeps the
     same information architecture and ends with one consistent next step.
     ----------------------------------------------------------------------- */

  function addOfficial(path, blocks) {
    var entry = P[path];
    if (!entry) throw new Error('Unknown Business page: ' + path);
    entry.sections.splice.apply(entry.sections, [entry.sections.length - 1, 0].concat(blocks));
  }

  addOfficial('/business/mobile/tariffs/', [
    table('Baseline plan details', [
      { label: 'My Business 2', value: '2 AZN/month · unlimited corporate calls · countrywide calls 0.10 AZN/min · SMS 0.10 AZN · internet 0.30 AZN/MB' },
      { label: 'My Business Region', value: '2 AZN/month · calls within the same company 0 AZN/min · countrywide calls 0.10 AZN/min · SMS 0.10 AZN' }
    ]),
    copy('Package priority and balance', [], 'site', [
      'Send a blank SMS to 650 to check the remaining discounted services balance, excluding internet.',
      'An activated monthly internet pack has priority over data included in a My Business tariff. Special switching rules apply when 55GB or archived GigaMax packs are used together with My Business 60GB.',
      'Unused tariff allowances do not roll over. Night data on eligible plans is available from 00:00 to 08:00.'
    ]),
    copy('After included allowances are used', [], 'site', [
      'On My Business 60GB, mobile internet continues at up to 64 kbps until the tariff validity period ends.',
      'On other plans, internet access is suspended if no other data pack is available. The subscriber can buy a pack or continue at the applicable out-of-pack rate of 0.05 AZN/MB.',
      'Domestic calls then cost 0.10 AZN/min, international calls 0.50 AZN/min, domestic SMS 0.10 AZN and international SMS 0.25 AZN.',
      'My Business 100GB includes 10,000 domestic minutes under the Fair Usage Policy; subsequent domestic calls cost 0.05 AZN/min.'
    ]),
    copy('Billing and usage rules', [], 'site', [
      'Calls are billed in 10-second intervals on My Business plans; My Business 2 uses 60-second billing.',
      'Bonus SMS applies only to local on-net messages. Bonus minutes do not cover roaming, special coded destinations or short numbers.',
      'Non-recurrent data packs can be activated after the tariff or monthly-pack data is used. Usage recorded after 23:00 may appear on the next invoice.',
      'The plans are intended for ordinary business use and may not be used for mass unsolicited messaging, Simbox/Fix GSM or unlawful telecommunications activity.'
    ])
  ]);

  addOfficial('/business/mobile/internet/monthly/', [
    copy('How multiple packs work', [], 'site', [
      'A larger monthly pack can be ordered at any time. Existing packs remain active, and the pack with the smallest data volume is used first.',
      'Only the most recently activated monthly pack renews automatically. Other active packs and their remaining traffic expire on their own renewal date.',
      'A smaller or identical pack can be ordered only after at least 95% of the current pack has been used. Reactivating the same pack deletes its previous remainder.'
    ]),
    copy('Renewal controls', [], 'site', [
      'Send AVTO to 2525 to enable automatic renewal. The recurring pack renews every 30 days and may also renew when its data volume is exhausted.',
      'The 2GB, 7GB and 14GB non-recurrent packs are valid for 30 days and deactivate when their data is exhausted or the validity period ends.'
    ])
  ]);

  addOfficial('/business/mobile/internet/short-term/', [
    copy('Activation options', [], 'site', [
      'Activate the 1-hour pack by sending S to 2525; activate the 3-hour pack by sending 3S to 2525.',
      'Activation can also be completed through Azercell Kabinetim. The service is activated within 15 minutes.',
      'SMS is free for prepaid subscribers and costs 0.01 AZN for postpaid subscribers.'
    ])
  ]);

  addOfficial('/business/mobile/internet/social/', [
    copy('Supported applications', [], 'site', [
      'My Business Chat is designed for WhatsApp, Facebook Messenger and Viber.',
      'My Business Social includes supported social and messaging applications.',
      'My Business Media covers supported social and messaging applications and YouTube video use.'
    ]),
    copy('Usage and renewal rules', [], 'site', [
      'Traffic may be used only through supported mobile applications. Other traffic follows the active tariff or another internet pack.',
      'Unused traffic expires after 30 days and cannot be rolled over. Only one My Business Social Networks pack can be active on a number at a time.',
      'The selected pack renews every 30 days. Send STOP B to 2525 to deactivate it immediately; remaining traffic expires and is not refunded. Send B- to 2525 to cancel automatic renewal.',
      'If a device connected by hotspot orders a pack, the fee is charged to and the pack is activated on the number sharing the connection.'
    ])
  ]);

  addOfficial('/business/mobile/azercell-biznes/', [
    copy('Account, number and service controls', [], 'site', [
      'Review the company account, debt, advance balance, invoices for the last 12 months, payment history, recent actions and financial information for deactivated numbers.',
      'Search, filter and group active, closed and inactive numbers; open or close voice and data lines; review tariff, pack and bonus balances.',
      'Activate or deactivate internet and roaming packs, roaming and international access, a second line, Simurq, e-invoice and advertising-message settings.',
      'Review credit limits, PUK codes, SIM serial numbers and activation dates.'
    ]),
    copy('Business tools in the platform', [], 'site', [
      'Electronically sign documents, manage Asan Imza details and prolongation, synchronize the phonebook and use company-name SMS, Web SMS and bulk messaging for up to 10 messages.',
      'Manage third-party service blocking, Paycell history, call forwarding, Gizlicell and Gizlatcell, notifications, language and dark mode; find sales and service centres and contact support by online chat.',
      'The IoT & M2M area shows device status and traffic in real time, monitors pooled data balances and helps optimize connected-device costs.'
    ])
  ]);

  addOfficial('/business/mobile/mobile-marketing/', [
    copy('Why mobile marketing', [], 'site', [
      'Mobile marketing is a direct, multichannel communication method designed to strengthen brand value and demand.',
      'It supports segmented audiences, detailed target-group analysis and a high feedback rate.',
      'The portfolio includes Bulk & Profile SMS, Content Services, and loyalty offers based on talking minutes and internet packages.'
    ])
  ]);

  addOfficial('/business/customer-engagement/bulk-sms/', [
    copy('Sending options', [], 'site', [
      'Schedule the date and time of a broadcast and display the company name as the sender.',
      'Profile SMS focuses delivery on a selected audience so the message reaches relevant potential customers.'
    ]),
    copy('Official service partners', [], 'site', [
      'DSC: (012) 404 31 30; MSM: (012) 441 55 11; LSIM: (012) 598 88 44; Smile: (012) 505 48 38.',
      'Ata Technology / MOBIS: (012) 598 99 00; Figensoft Azerbaijan: (012) 597 48 72; ATL SMS LLC: (012) 210 00 99.'
    ])
  ]);

  addOfficial('/business/customer-engagement/content-services/', [
    copy('Signature controls and limitations', [], 'site', [
      'The signature is currently displayed only to supported Azercell and Azerfon-Nar mobile numbers in Azerbaijan.',
      'Send imza to 5111 to check the current signature, infoimza to 5111 for service information, and stopimza to 5111 to unsubscribe.',
      'A signature can contain up to 100 characters. The subscriber is responsible for its content.',
      'An unlimited number of unique signatures can be created, including different signatures for different called numbers.'
    ])
  ]);

  addOfficial('/business/fixed/', [
    copy('End-to-end connectivity', [
      'The official fixed-service portfolio provides network-wide, building-to-building and internet connectivity across Azerbaijan, supporting changing needs for bandwidth, flexibility and access.'
    ], 'site')
  ]);

  addOfficial('/business/fixed/internet-leased-line/', [
    copy('Order and installation process', [], 'site', [
      'Choose the required speed, provide contact details and company documentation, then wait for technical approval and installation.',
      'The one-time installation fee is 500 AZN for each connected point. Prices exclude VAT.',
      'The subscriber obtains all required building permissions and supplies internal equipment such as the router. Equipment installed by Azercell remains Azercell property and is provided only for use with the service.',
      'One public static IP address is available per connected point on request. Installation and monthly charges are billed through the subscriber number; technical support is provided by Azeronline.',
      'The service uses a wireless connection and provides a guaranteed uptime level of 99.50%.'
    ])
  ]);

  addOfficial('/business/iot/', [
    copy('Why IoT matters', [
      'IoT can create new revenue streams, improve employee efficiency and customer experience, and provide visibility across supply chains, assets and operations. Azercell helps customers select and manage the right connectivity, devices and software.'
    ], 'site')
  ]);

  addOfficial('/business/iot/m2m/', [
    cards('Advantages of M2M technology', [
      card('Automated connectivity', 'Devices communicate without human intervention, simplifying repeatable business processes.', '', 'site'),
      card('High-level security', 'The platform supports privacy and secure data transmission across IoT networks.', '', 'site'),
      card('24/7 support', 'Continuous customer support is available for connected operations.', '', 'site')
    ])
  ]);

  addOfficial('/business/fleet-field-operations/yoldash-360/', [
    copy('Service benefits', [], 'site', [
      'Flexible subscriptions scale from a small number of vehicles to large enterprise fleets.',
      'Secure cloud storage provides access to live and recorded footage at any time and from any location.',
      'The solution protects corporate property, improves driver safety and preserves video evidence of incidents.'
    ])
  ]);

  addOfficial('/business/fleet-field-operations/fleet/', [
    cards('Product benefits', [
      card('Real-time control', 'Monitor vehicles, change routes and respond to operational events as they happen.', '', 'site'),
      card('Lower fleet costs', 'Use fuel, route and maintenance information to reduce total ownership costs.', '', 'site'),
      card('Operational reporting', 'Review vehicle maintenance, driver behaviour and delivery information.', '', 'site'),
      card('Preventive maintenance', 'Plan maintenance using vehicle type, mileage, operating conditions and weather.', '', 'site'),
      card('Continuous service', 'Support connected fleet operations locally and while vehicles travel abroad.', '', 'site')
    ])
  ]);

  addOfficial('/business/fleet-field-operations/irrigation/', [
    cards('Service benefits', [
      card('Unified billing', 'Service charges appear on the Azercell invoice.', '', 'site'),
      card('Continuous support', 'The solution supports local and roaming operation with 24/7 assistance.', '', 'site'),
      card('Real-time management', 'Control irrigation remotely through web and mobile applications.', '', 'site'),
      card('Resource savings', 'Reduce time, operating costs and water use through more precise control.', '', 'site')
    ])
  ]);

  addOfficial('/business/automation-management/rpa/', [
    cards('Benefits of automation', [
      card('Productivity', 'Move repetitive work to software robots so employees can focus on higher-value tasks.', '', 'site'),
      card('Cost efficiency', 'Reduce manual effort in repeatable, rules-based processes.', '', 'site'),
      card('Accuracy and compliance', 'Apply consistent steps and reduce avoidable human error.', '', 'site'),
      card('Scalability', 'Expand automated capacity as transaction volumes grow.', '', 'site')
    ]),
    copy('Delivery stages', [], 'site', [
      'Process assessment and analysis; custom bot development; implementation and deployment; ongoing monitoring and optimization.',
      'Typical use cases include payroll and HR, customer support, financial reporting and compliance workflows.'
    ])
  ]);

  addOfficial('/business/fleet-field-operations/team-management/', [
    copy('Unique benefits', [], 'site', [
      'Flexible terms configured around the organisation’s field-work requirements.',
      '24/7 technical support.',
      'On-demand access to resources and schedules with optimized workforce allocation.',
      'Automated planning, dispatch and route optimization.',
      'Mobile access to staff and operations from any location.',
      'Real-time communication between field workers, the office and team members.'
    ])
  ]);

  addOfficial('/business/automation-management/device-management/', [
    copy('Security and productivity controls', [], 'site', [
      'Deploy updates and corporate resources securely, automate device management, reduce IT support effort and help prevent data loss.',
      'Administrators can delete corporate data or block access to it remotely with one action.',
      'The platform can provide a controlled company app store and help identify vulnerabilities and plan device upgrades.'
    ]),
    copy('Three device-management models', [], 'site', [
      'Company-owned, single profile: full control over device and software functions.',
      'Company-owned, two profiles: separate corporate and personal environments with different policies.',
      'User-owned, two profiles (BYOD): the company controls the corporate profile but cannot monitor or access the personal profile and data.'
    ])
  ]);

  addOfficial('/business/customer-engagement/infohub/', [
    copy('Customer-service outcomes', [], 'site', [
      'Improve customer experience and product knowledge, reduce service-resolution time, support cross-selling and up-selling, strengthen brand perception and adapt to customer feedback.',
      'The shared knowledge environment helps service agents provide consistent and reliable information while shortening calls.'
    ])
  ]);

  addOfficial('/business/customer-engagement/cpaas/', [
    copy('Unified engagement', [], 'site', [
      'Publish updates, campaigns and news across several channels at once and use intelligent chatbots for initial 24/7 support.',
      'Centralize communication, integrate CRM context and use customer data to personalize service and offers.',
      'The secure cloud platform supports office and remote teams and scales with the business.'
    ])
  ]);

  addOfficial('/business/support/contact-us/', [
    copy('Outside working hours', [], 'site', [
      'Calls outside Corporate Contact Center working hours are forwarded to the general Call Center.',
      'Support-portal requests submitted after 16:00 on Saturday are processed from 09:00 on Monday.'
    ]),
    copy('Contact form fields', [], 'site', [
      'First name and last name; email; phone number; company name; TAX ID; region or city; preferred contact method (call or email).'
    ])
  ]);

  addOfficial('/business/support/live-chat/', [
    copy('Saturday requests', [
      'Requests submitted after 16:00 on Saturday are processed from 09:00 on Monday.'
    ], 'site')
  ]);

  /* -----------------------------------------------------------------------
     Current-site gap audit, 7 September 2026.
     Content restored from the original site uses the regular site provenance.
     ----------------------------------------------------------------------- */

  addOfficial('/business/mobile/internet/social/', [
    copy('Social media use for business', [
      'The packs help corporate customers use supported messaging, social-network and video applications without consuming the traffic of the main internet pack. Social media can support a digital marketing strategy for businesses of any size.',
      'There are no additional content or correspondence restrictions beyond applicable law: subscribers may exchange files, audio and video messages through the supported applications.'
    ], 'site')
  ]);

  addOfficial('/business/mobile/azercell-biznes/', [
    copy('Guidance, accessibility and reporting', [], 'site', [
      'Access roaming guides and country tariffs, bank details, sample request forms, subscriptions and the My Business Loyalty programme.',
      'Use accessibility support for visually impaired users, adjust user-number information, change the language of Azercell SMS and integrate Google Maps with support.',
      'Review and download recent actions, Paycell history, payment history and three-month company invoice reports; manage missed-call and notification services and the line tear-down function.',
      'Top up balances, make direct calls to corporate numbers, rate the application and use the help section from the same platform.'
    ])
  ]);

  addOfficial('/business/mobile/mobile-marketing/', [
    copy('Business-development partnership', [
      'Azercell’s professional team can work with a company on suitable communication solutions and new business opportunities in the market.'
    ], 'site')
  ]);

  addOfficial('/business/fleet-field-operations/fleet/', [
    cards('Related package', [
      card('My Business Fleet pack', 'Detailed connectivity, equipment and payment options.', '/business/fleet-field-operations/fleet/fleet-pack/', 'site')
    ])
  ]);

  addOfficial('/business/ict-solutions/unified-communications/', [
    cards('What unified communications can support', [
      card('Digital workplace', 'Give employees an effective connected environment across people, applications, clouds and networks.', '', 'site'),
      card('Communications operations', 'Transform how the company operates and manages its communications infrastructure.', '', 'site'),
      card('Customer relationships', 'Build deeper customer relationships through personalized contact-centre experiences.', '', 'site')
    ])
  ]);

  addOfficial('/business/automation-management/rpa/', [
    cards('Additional automation use case', [
      card('Customer support automation', 'Automate repetitive, rules-based support steps so service teams can focus on higher-value customer needs.', '', 'site')
    ])
  ]);

  addOfficial('/business/automation-management/device-management/', [
    cards('Additional device-management benefits', [
      card('Increased productivity', 'Keep devices updated and configured so employees can work with fewer interruptions.', '', 'site'),
      card('Cost savings', 'Use centralized and bulk management to reduce ongoing administration and support effort.', '', 'site')
    ])
  ]);

  addOfficial('/business/fleet-field-operations/irrigation/', [
    cards('Additional service benefit', [
      card('Trusted partner', 'Use Azercell as a single partner for connectivity, implementation and ongoing irrigation-service support.', '', 'site')
    ])
  ]);

  addOfficial('/business/customer-engagement/content-services/', [
    table('Validity and new-user access', [
      { label: 'Postpaid validity', value: '30 days', source: 'site' },
      { label: 'Prepaid validity', value: '3 days', source: 'site' },
      { label: 'New users', value: 'The service starts free; after the free period it continues on a paid basis unless the subscriber deactivates it.', source: 'site' }
    ], '', 'site')
  ]);

  /* -----------------------------------------------------------------------
     Detailed destinations restored from the live English corporate site.
     ----------------------------------------------------------------------- */

  function auditTable(title, rows, note) {
    return table(title, rows, note || '', 'site');
  }

  function auditCopy(title, paragraphs, items, actions) {
    return copy(title, paragraphs || [], 'site', items || [], actions || []);
  }

  function auditFaq(title, items) {
    return { type: 'faq', title: title, source: 'site', items: items };
  }

  function monthlyPackSections(volume, price, keyword, ussd) {
    return [
      auditTable('Pack details', [
        { label: 'Traffic', value: volume },
        { label: 'Price', value: price + ' AZN' },
        { label: 'Validity', value: '30 days' }
      ], 'Internet use is charged in 51 kB intervals.'),
      auditCopy('Subscription and renewal', [
        'Send ' + keyword + ' to 2525 or dial ' + ussd + ' to activate the pack. Each SMS to 2525 costs 0.01 AZN.',
        'Send AVTO to 2525 to renew the pack automatically when its volume is exhausted as well as at the end of each 30-day period.'
      ]),
      auditFaq('Additional information', [
        { question: 'How can I check the remaining balance?', answer: 'Send a blank SMS to 2525 or dial *100#YES.' },
        { question: 'Does unused data roll over?', answer: 'No. Unused internet data expires at the end of the pack validity period.' },
        { question: 'Does the pack work in roaming?', answer: 'The pack is for domestic use in Azerbaijan. Roaming internet packs apply abroad.' },
        { question: 'How can I deactivate the pack?', answer: 'Postpaid subscribers can send STOP or STOP AY to 2525. Remaining data expires immediately and is not refunded.' }
      ])
    ];
  }

  P['/business/mobile/internet/monthly/2gb/'] = page('/business/mobile/internet/monthly/2gb/', '2GB', '/business/mobile/internet/monthly/',
    'A recurring 2GB business internet pack for domestic use.', 'site', monthlyPackSections('2GB', '6', '2000', '*100*2000#YES'),
    ['https://www.azercell.com/en/corporate/mobile-communications/internet/monthly/2-gb.html']);

  P['/business/mobile/internet/monthly/7gb/'] = page('/business/mobile/internet/monthly/7gb/', '7GB', '/business/mobile/internet/monthly/',
    'A recurring 7GB business internet pack for domestic use.', 'site', monthlyPackSections('7GB', '10', '7000', '*100*7000#YES'),
    ['https://www.azercell.com/en/corporate/mobile-communications/internet/monthly/7-gb.html']);

  P['/business/mobile/internet/monthly/14gb/'] = page('/business/mobile/internet/monthly/14gb/', '14GB', '/business/mobile/internet/monthly/',
    'A recurring 14GB business internet pack for domestic use.', 'site', monthlyPackSections('14GB', '15', '14000', '*100*14000#YES'),
    ['https://www.azercell.com/en/corporate/mobile-communications/internet/monthly/14-gb.html']);

  P['/business/mobile/internet/monthly/35gb/'] = page('/business/mobile/internet/monthly/35gb/', '35GB', '/business/mobile/internet/monthly/',
    'A recurring 35GB business internet pack for domestic use.', 'site', monthlyPackSections('35GB', '25', '35000', '*100*35000#YES'),
    ['https://www.azercell.com/en/corporate/mobile-communications/internet/monthly/35gb.html']);

  P['/business/mobile/internet/monthly/55gb/'] = page('/business/mobile/internet/monthly/55gb/', '55GB', '/business/mobile/internet/monthly/',
    'A recurring 55GB business internet pack for domestic use.', 'site', monthlyPackSections('55GB', '30', '55000', '*100*55000#YES'),
    ['https://www.azercell.com/en/corporate/mobile-communications/internet/monthly/55-gb.html']);

  function shortTermSections(hours, price, keyword) {
    return [
      auditTable('Pack details', [
        { label: 'Traffic', value: 'Unlimited' },
        { label: 'Validity', value: hours },
        { label: 'Price', value: price + ' AZN' }
      ]),
      auditCopy('How to subscribe', ['Send ' + keyword + ' to 2525. Each SMS to 2525 costs 0.01 AZN.']),
      auditFaq('Additional information', [
        { question: 'What speed is available?', answer: 'Network speed may reach 190 Mbps on 4G and 21.6 Mbps on 3G. After expiry, 64 kbps access is available for 15 minutes.' },
        { question: 'Can several packs be used at once?', answer: 'Only one internet pack can be used at a time.' },
        { question: 'What happens when a hotspot user orders a pack?', answer: 'The fee is deducted from the number sharing the internet and the pack is activated on that main number.' }
      ])
    ];
  }

  P['/business/mobile/internet/short-term/unlimited-1-hour/'] = page('/business/mobile/internet/short-term/unlimited-1-hour/', 'Unlimited 1 hour', '/business/mobile/internet/short-term/',
    'Unlimited mobile internet for a business task lasting up to one hour.', 'site', shortTermSections('Up to 1 hour', '0.99', 'S'),
    ['https://www.azercell.com/en/corporate/mobile-communications/internet/short-term-packs/1-hour.html']);

  P['/business/mobile/internet/short-term/unlimited-3-hours/'] = page('/business/mobile/internet/short-term/unlimited-3-hours/', 'Unlimited 3 hours', '/business/mobile/internet/short-term/',
    'Unlimited mobile internet for a business task lasting up to three hours.', 'site', shortTermSections('3 hours', '1.99', '3S'),
    ['https://www.azercell.com/en/corporate/mobile-communications/internet/short-term-packs/unlimited-3-hours.html']);

  function socialPackSections(volume, price, keyword, use) {
    return [
      auditTable('Pack details', [
        { label: 'Traffic', value: volume },
        { label: 'Supported use', value: use },
        { label: 'Price', value: price + ' AZN' },
        { label: 'Validity', value: '30 days' }
      ]),
      auditCopy('How to subscribe', ['Send ' + keyword + ' to 2525. The pack renews automatically every 30 days.']),
      auditFaq('Additional information', [
        { question: 'Who can subscribe?', answer: 'Subscribers with an eligible auto-renewing monthly internet pack or a My Business tariff pack.' },
        { question: 'Can several social packs be active on one number?', answer: 'No. Multiple My Business Social packs cannot be activated simultaneously on the same number.' },
        { question: 'How can I deactivate the pack?', answer: 'Send STOP B to 2525. To cancel only automatic renewal, send B- to 2525.' }
      ])
    ];
  }

  P['/business/mobile/internet/social/my-business-chat/'] = page('/business/mobile/internet/social/my-business-chat/', 'My Business Chat', '/business/mobile/internet/social/',
    'Dedicated data for business messaging applications.', 'site', socialPackSections('5GB', '4', 'B1', 'WhatsApp and Messenger'),
    ['https://www.azercell.com/en/corporate/mobile-communications/internet/my-business-social-packs/my-business-chat.html']);

  P['/business/mobile/internet/social/my-business-social/'] = page('/business/mobile/internet/social/my-business-social/', 'My Business Social', '/business/mobile/internet/social/',
    'Dedicated data for business use of messaging and social-network applications.', 'site', socialPackSections('10GB', '7', 'B2', 'WhatsApp, Messenger, Facebook and Instagram'),
    ['https://www.azercell.com/en/corporate/mobile-communications/internet/my-business-social-packs/my-business-social.html']);

  P['/business/mobile/internet/social/my-business-media/'] = page('/business/mobile/internet/social/my-business-media/', 'My Business Media', '/business/mobile/internet/social/',
    'Dedicated data for messaging, social networks and video platforms.', 'site', socialPackSections('30GB', '16', 'B3', 'Chat, social-network and supported video applications'),
    ['https://www.azercell.com/en/corporate/mobile-communications/internet/my-business-social-packs/my-business-media.html']);

  function roamingPackSections(volume, price, validity, keyword, deactivate) {
    return [
      auditTable('Package information', [
        { label: 'Internet', value: volume },
        { label: 'Price', value: price + ' AZN' },
        { label: 'Validity', value: validity }
      ]),
      auditCopy('Subscription', [
        'Send ' + keyword + ' to 2525 or dial *100*' + keyword + '#YES. The cost of each SMS to 2525 is 0.01 AZN.',
        'The pack can also be activated through Kabinetim.'
      ], [], [{ label: 'Countries and operators', href: '/business/mobile/roaming/countries-and-prices/' }]),
      auditCopy('Useful information', [], [
        'Activate roaming before using mobile internet abroad.',
        'If the pack does not work, disable LTE/4G and set the APN to “Internet”.',
        'Check available roaming partners before travelling and select the operator manually.'
      ]),
      auditFaq('Additional information', [
        { question: 'How can I check the balance?', answer: 'Send BALANS to 2525 or dial *100#YES. Postpaid balance information can be delayed in roaming.' },
        { question: 'Can I buy another roaming pack?', answer: 'A new pack cannot be purchased while data remains on the current roaming pack.' },
        { question: 'How can I deactivate the pack?', answer: 'Send ' + deactivate + ' to 2525. Remaining data expires immediately and is not refunded.' }
      ])
    ];
  }

  function archivedDataSections(rows, note, faqItems) {
    return [auditTable('Pack details', rows, note), auditFaq('Additional information', faqItems || [
      { question: 'Is this pack available to new subscribers?', answer: 'This page is retained as an archive. Confirm current availability with the Corporate Contact Center.' },
      { question: 'Are unused allowances refunded?', answer: 'No. Remaining traffic expires when the pack is cancelled or reaches the end of its validity period.' }
    ])];
  }

  P['/business/mobile/internet/archive/unlimited-weekend/'] = page('/business/mobile/internet/archive/unlimited-weekend/', 'Unlimited Weekend', '/business/mobile/internet/archive/',
    'Archived unlimited weekend internet offer.', 'site', archivedDataSections([
      { label: 'Traffic', value: 'Unlimited' }, { label: 'Price', value: '1.99 AZN' }, { label: 'Validity', value: 'All weekend' }
    ], 'Archived offer.'), ['https://www.azercell.com/en/corporate/mobile-communications/internet/b2b-internet-packs-archive/unlimited-weekend.html']);

  P['/business/mobile/internet/archive/500mb-monthly/'] = page('/business/mobile/internet/archive/500mb-monthly/', '500MB — monthly archive', '/business/mobile/internet/archive/',
    'Archived 30-day 500MB internet pack.', 'site', archivedDataSections([
      { label: 'Traffic', value: '500MB' }, { label: 'Price', value: '2.40 AZN' }, { label: 'Validity', value: '30 days' }
    ], 'Automatic renewal could be enabled by sending AVTO to 2525.'), ['https://www.azercell.com/en/corporate/mobile-communications/internet/b2b-internet-packs-archive/500mb-archive.html']);

  P['/business/mobile/internet/archive/500mb-daily/'] = page('/business/mobile/internet/archive/500mb-daily/', '500MB — daily archive', '/business/mobile/internet/archive/',
    'Archived 24-hour 500MB internet pack.', 'site', archivedDataSections([
      { label: 'Traffic', value: '500MB' }, { label: 'Price', value: '1.20 AZN' }, { label: 'Validity', value: '24 hours' }
    ], 'Archived offer.'), ['https://www.azercell.com/en/corporate/mobile-communications/internet/b2b-internet-packs-archive/500-mb2.html']);

  P['/business/mobile/internet/archive/50mb/'] = page('/business/mobile/internet/archive/50mb/', '50MB', '/business/mobile/internet/archive/',
    'Archived 50MB internet pack.', 'site', archivedDataSections([
      { label: 'Traffic', value: '50MB' }, { label: 'Price', value: '0.25 AZN' }, { label: 'Validity', value: '24 hours with auto-renewal' }
    ], 'Archived offer.'), ['https://www.azercell.com/en/corporate/mobile-communications/internet/b2b-internet-packs-archive/archive-50-mb.html']);

  P['/business/mobile/internet/archive/60mb/'] = page('/business/mobile/internet/archive/60mb/', '60MB', '/business/mobile/internet/archive/',
    'Archived 60MB internet pack.', 'site', archivedDataSections([
      { label: 'Traffic', value: '60MB' }, { label: 'Price', value: '0.80 AZN' }, { label: 'Validity', value: '15 days' }
    ], 'Automatic renewal could be enabled by sending AVTO to 2525.'), ['https://www.azercell.com/en/corporate/mobile-communications/internet/b2b-internet-packs-archive/60-mb1.html']);

  P['/business/mobile/internet/archive/500-plus-mb/'] = page('/business/mobile/internet/archive/500-plus-mb/', '500+MB', '/business/mobile/internet/archive/',
    'Archived 500+MB internet pack.', 'site', archivedDataSections([
      { label: 'Traffic', value: '500MB' }, { label: 'Price', value: '1.20 AZN' }, { label: 'Validity', value: '24 hours with auto-renewal' }
    ], 'Archived offer.'), ['https://www.azercell.com/en/corporate/mobile-communications/internet/b2b-internet-packs-archive/500-mb-archieve.html']);

  P['/business/mobile/internet/archive/gigamax-pro/'] = page('/business/mobile/internet/archive/gigamax-pro/', 'GigaMax Pro', '/business/mobile/internet/archive/',
    'Archived unlimited GigaMax Pro business internet pack.', 'site', archivedDataSections([
      { label: 'Speed', value: 'Maximum available speed' }, { label: 'Price', value: '49.90 AZN' }, { label: 'Validity', value: '30 days' }
    ], 'New subscriptions have been suspended since 2 August 2022; existing subscribers may continue until cancellation.'), ['https://www.azercell.com/en/corporate/mobile-communications/internet/b2b-internet-packs-archive/gigamax-pro.html']);

  P['/business/mobile/internet/archive/gigamax-plus/'] = page('/business/mobile/internet/archive/gigamax-plus/', 'GigaMax Plus', '/business/mobile/internet/archive/',
    'Archived high-volume GigaMax Plus business internet pack.', 'site', archivedDataSections([
      { label: 'FUP traffic', value: '80GB' }, { label: 'Speed after FUP', value: 'Up to 256 kbps' }, { label: 'Price', value: '28.90 AZN' }, { label: 'Validity', value: '30 days' }
    ], 'New subscriptions have been suspended since 1 December 2025; existing subscribers may continue until cancellation.'), ['https://www.azercell.com/en/corporate/mobile-communications/internet/b2b-internet-packs-archive/gigamax-plus.html']);

  P['/business/mobile/internet/archive/gigamax/'] = page('/business/mobile/internet/archive/gigamax/', 'GigaMax', '/business/mobile/internet/archive/',
    'Archived GigaMax business internet pack.', 'site', archivedDataSections([
      { label: 'FUP traffic', value: '60GB' }, { label: 'Speed after FUP', value: 'Up to 256 kbps' }, { label: 'Price', value: '18.90 AZN' }, { label: 'Validity', value: '30 days' }
    ], 'New subscriptions have been suspended since 1 December 2025; existing subscribers may continue until cancellation.'), ['https://www.azercell.com/en/corporate/mobile-communications/internet/b2b-internet-packs-archive/gigamax.html']);

  P['/business/mobile/internet/archive/unlimited-night/'] = page('/business/mobile/internet/archive/unlimited-night/', 'Unlimited Night', '/business/mobile/internet/archive/',
    'Archived unlimited night internet pack.', 'site', archivedDataSections([
      { label: 'Traffic', value: 'Unlimited' }, { label: 'Price', value: '2 AZN' }, { label: 'Validity', value: 'One night, 00:00–08:00' }
    ], 'Send GECE to 2525 to subscribe. The activation window depends on the time the pack is ordered.'), ['https://www.azercell.com/en/corporate/mobile-communications/internet/b2b-internet-packs-archive/unlimited-night-archieve.html']);

  P['/business/mobile/tariffs/archive/my-business-tariff-plans/'] = page('/business/mobile/tariffs/archive/my-business-tariff-plans/', 'My Business tariff plans — archive', '/business/mobile/tariffs/archive/',
    'Previous My Business tariff plans retained for existing subscribers and reference.', 'site', [
      auditTable('Archived offers', [
        { label: 'My Business 1GB', value: '12 AZN · 1GB · 700 cross-net min · 500 SMS' },
        { label: 'My Business 3GB', value: '17 AZN · 3GB · 1,300 cross-net min · 1,000 SMS' },
        { label: 'My Business 5GB', value: '22 AZN · 5GB · 2,500 cross-net min · 2,000 SMS · 10 international min' },
        { label: 'My Business 10GB', value: '32 AZN · 10GB · 4,000 cross-net min · 2,000 SMS · 20 international min' },
        { label: 'My Business 50GB', value: '52 AZN · 50GB · 7,000 cross-net min · 3,000 SMS · 30 international min' }
      ], 'All plans include unlimited calls within the company.'),
      auditCopy('Baseline plans', ['My Business 2 costs 2 AZN/month. My Business Region costs 2 AZN/month and includes free calls within BizKlub.'])
    ], ['https://www.azercell.com/en/corporate/mobile-communications/tariffs-archive/business-tariffs-archive.html']);

  P['/business/mobile/tariffs/archive/sms-packs/'] = page('/business/mobile/tariffs/archive/sms-packs/', 'SMS packs — archive', '/business/mobile/tariffs/archive/',
    'Archived SMS packages for corporate lines.', 'site', [auditTable('SMS packs', [
      { label: '50 SMS', value: '0.90 AZN' }, { label: '100 SMS', value: '1.50 AZN' }, { label: '200 SMS', value: '2.40 AZN' },
      { label: '20 SMS Socar', value: '0.42 AZN' }, { label: '50 SMS Socar', value: '0.90 AZN' }, { label: '100 SMS Socar', value: '1.50 AZN' }
    ], 'Archived offers; confirm availability before use.')], ['https://www.azercell.com/en/corporate/mobile-communications/tariffs-archive/sms-paketleri.html']);

  P['/business/mobile/tariffs/archive/mobile-internet-packs/'] = page('/business/mobile/tariffs/archive/mobile-internet-packs/', 'Mobile Internet Packs — archive', '/business/mobile/tariffs/archive/',
    'Archived specialist corporate mobile internet packages.', 'site', [auditTable('Archived packs', [
      { label: 'Corporate 4G MiFi Router', value: '20GB · 20 AZN' },
      { label: 'Corporate 4G USB Modem', value: '6GB · 9 AZN' },
      { label: 'Ministry of Taxes pack', value: '1GB · 5.50 AZN' }
    ], 'Confirm current eligibility with the Corporate Contact Center.')], ['https://www.azercell.com/en/corporate/mobile-communications/tariffs-archive/mobile-internet-packs.html']);

  P['/business/mobile/tariffs/archive/tariffs/'] = page('/business/mobile/tariffs/archive/tariffs/', 'Tariffs — archive', '/business/mobile/tariffs/archive/',
    'Previous corporate tariff schedules retained for reference.', 'site', [
      auditCopy('Archived tariff names', [], [
        'Azercell Partners', 'Azeronline', 'Bələdiyyə', 'Bizimkilər', 'Biznes 200', 'Dövlətcell', 'Hər Yerə',
        'Korporativ Dövlətcell', 'Korporativ Klassik', 'Korporativ Platinum', 'Korporativ Platinum Ekstra',
        'Korporativ Premium', 'Səfirlik', 'Socar', 'Yeni Hər-Yerə', 'Korporativ 5000', 'Sizin Tarif 3', 'Sizin Tarif 3.5', 'Data'
      ]),
      auditCopy('Archive notice', ['The original page contains plan-by-plan call, SMS and internet rates. Confirm any operational use of an archived tariff with Azercell Business.'])
    ], ['https://www.azercell.com/en/corporate/mobile-communications/tariffs-archive/tariffs.html']);

  P['/business/mobile/tariffs/archive/call-packs/'] = page('/business/mobile/tariffs/archive/call-packs/', 'Call packs — archive', '/business/mobile/tariffs/archive/',
    'Archived Business Bundles combining calls, SMS and internet.', 'site', [
      auditTable('Business Bundles', [
        { label: 'Minimalist', value: '19 AZN · 100 off-net min · 1,000 on-net min · 100 SMS · 1GB' },
        { label: 'Optimist Danışıq', value: '29 AZN · 300 off-net min · 3,000 on-net min · 300 SMS · 30 international min · 3GB' },
        { label: 'Optimist İnternet', value: '29 AZN · 50 off-net min · 500 on-net min · 50GB' },
        { label: 'Optimist Şəbəkə', value: '29 AZN · 1,000 off-net min · 5GB' },
        { label: 'Praqmatist', value: '59 AZN · 1,000 off-net min · unlimited on-net · 1,000 SMS · 100 international min · 10GB' },
        { label: 'Maximalist', value: '89 AZN · 10,000 off-net min · 15,000 on-net min · 5,000 SMS · 100 international min · 20GB' },
        { label: 'Idealist', value: '149 AZN · 10,000 off-net min · 15,000 on-net min · 400 roaming incoming min · 200 international min · 100GB' }
      ], 'Archived offers; all displayed prices include VAT.'),
      auditCopy('Important conditions', ['Unused allowances do not roll over. Included minutes do not apply to roaming or short numbers. Confirm migration and availability before changing a corporate line.'])
    ], ['https://www.azercell.com/en/corporate/mobile-communications/tariffs-archive/business-bundles.html']);

  P['/business/mobile/tariffs/archive/old-business-packages/'] = page('/business/mobile/tariffs/archive/old-business-packages/', 'Old Business packages', '/business/mobile/tariffs/archive/',
    'Legacy Business packages retained for existing subscribers and reference.', 'site', [
      auditTable('Old packages', [
        { label: 'Business 10', value: '10 AZN · 500 on-net min · 500 SMS · 500MB' },
        { label: 'Business 20', value: '20 AZN · 2,000 on-net min · 2,000 SMS · 2GB' },
        { label: 'Business 15', value: 'Unlimited corporate calls · 1,000 cross-net min · 3GB' },
        { label: 'Business 25', value: '25 AZN · 1,000 off-net min · 3,000 on-net min · 4,000 SMS · 20 international min · 4GB' },
        { label: 'Business 55', value: '55 AZN · 4,000 cross-net min · 4,000 SMS · 15GB' }
      ]),
      auditCopy('Archive conditions', ['Unused allowances do not roll over. Business 20 and Business 16 have been closed to new connections since 1 August 2016. Included allowances apply only to domestic destinations.'])
    ], ['https://www.azercell.com/en/corporate/mobile-communications/tariffs-archive/business-10.html']);

  P['/business/mobile/tariffs/archive/10gb-roaming-pack/'] = page('/business/mobile/tariffs/archive/10gb-roaming-pack/', '10GB roaming pack — archive', '/business/mobile/tariffs/archive/',
    'Archived version of the 10GB roaming internet pack.', 'site', roamingPackSections('10GB', '110', '30 days · unlimited WhatsApp messaging', '10001', 'stop10001'),
    ['https://www.azercell.com/en/corporate/mobile-communications/tariffs-archive/10-gb-arxiv.html']);

  P['/business/fleet-field-operations/fleet/fleet-pack/'] = page('/business/fleet-field-operations/fleet/fleet-pack/', 'My Business Fleet pack', '/business/fleet-field-operations/fleet/',
    'Telematics tools for monitoring vehicles, drivers, routes and operating efficiency.', 'site', [
      auditCopy('General information', ['The fleet-management service combines vehicle location with route, driving-behaviour and maintenance tools and may help reduce operating costs.']),
      auditTable('Our offer', [
        { label: 'One-time payment · 2G', value: '65 AZN connection · 11 AZN/month' },
        { label: 'One-time payment · 4G', value: '129 AZN connection · 11 AZN/month' },
        { label: 'Instalment · 2G', value: '0 AZN connection · 22 AZN/month for 6 months, then 11 AZN/month' },
        { label: 'Instalment · 4G', value: '0 AZN connection · 32.50 AZN/month for 6 months, then 11 AZN/month' }
      ]),
      auditCopy('Features', [], ['Precise vehicle position', 'Speed monitoring and limits', 'Fuel-efficiency monitoring', 'Driving alerts', 'Maintenance and site-visit notifications', 'Temporary tracking, reports and notifications']),
      auditTable('Included connectivity', [
        { label: 'Domestic data', value: '300MB' }, { label: 'Pay-as-you-go data', value: '0.05 AZN' }, { label: 'Roaming data', value: '10MB' }
      ])
    ], ['https://www.azercell.com/en/corporate/iot/biznesim-neqliyyat/biznesim-neqliyyat-paketi.html']);

  P['/business/mobile/mobile-marketing/talking-minutes-and-internet-packages/'] = page('/business/mobile/mobile-marketing/talking-minutes-and-internet-packages/', 'Talking minutes and internet packages', '/business/mobile/mobile-marketing/',
    'A Mobile Marketing reward product for customer-loyalty campaigns.', 'site', [
      auditCopy('General information', ['Shops, banks, travel agencies and other organisations can reward customers with Azercell on-net calling minutes or internet packages. The allowances are uploaded directly to subscriber balances.']),
      auditTable('Partner contacts', [
        { label: 'DSC', value: '+994 12 404 31 30' }, { label: 'MSMT', value: '+994 12 441 55 11' },
        { label: 'LSIM', value: '+994 12 598 88 44' }, { label: 'Smile', value: '+994 12 505 48 38' },
        { label: 'ATA Technology / MOBIS', value: '+994 12 441 62 57' }, { label: 'Figensoft', value: '+994 12 597 48 72' },
        { label: 'ATL', value: '+994 12 210 00 99' }
      ])
    ], ['https://www.azercell.com/en/corporate/mobile-communications/special-services/mobile-marketing/danishiq-deqiqeleri-ve-internet.html']);

  global.BusinessPagesData = P;
})(window);
