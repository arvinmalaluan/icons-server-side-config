const dummyUsers = [
  {
    organization: "Muxo",
    category: "partner",
    email: "msail0@ft.com",
    last_logged_in: "2/2/2006",
    status: "restricted",
  },
  {
    organization: "Browsecat",
    category: "startup",
    email: "krivelon1@shop-pro.jp",
    last_logged_in: "8/1/2012",
    status: "allowed",
  },
  {
    organization: "Roombo",
    category: "startup",
    email: "ajeune2@utexas.edu",
    last_logged_in: "8/10/2006",
    status: "allowed",
  },
  {
    organization: "Teklist",
    category: "startup",
    email: "gclutterbuck3@msn.com",
    last_logged_in: "2/15/2013",
    status: "restricted",
  },
  {
    organization: "Edgepulse",
    category: "startup",
    email: "ienrico4@wikimedia.org",
    last_logged_in: "4/15/2006",
    status: "allowed",
  },
  {
    organization: "Rhynoodle",
    category: "startup",
    email: "nrigglesford5@engadget.com",
    last_logged_in: "10/27/2003",
    status: "restricted",
  },
  {
    organization: "Quimba",
    category: "startup",
    email: "vscahill6@ibm.com",
    last_logged_in: "2/16/2017",
    status: "allowed",
  },
  {
    organization: "Quinu",
    category: "partner",
    email: "callott7@themeforest.net",
    last_logged_in: "10/4/2000",
    status: "restricted",
  },
  {
    organization: "Jaxbean",
    category: "startup",
    email: "bloyns8@state.gov",
    last_logged_in: "7/20/2017",
    status: "restricted",
  },
  {
    organization: "Nlounge",
    category: "partner",
    email: "nesgate9@uiuc.edu",
    last_logged_in: "11/24/2006",
    status: "allowed",
  },
  {
    organization: "Skipstorm",
    category: "partner",
    email: "smendesa@t-online.de",
    last_logged_in: "9/18/2014",
    status: "restricted",
  },
  {
    organization: "Jabberbean",
    category: "startup",
    email: "mpenhaleurackb@youtu.be",
    last_logged_in: "10/23/2002",
    status: "allowed",
  },
  {
    organization: "Browsecat",
    category: "startup",
    email: "cdufourc@illinois.edu",
    last_logged_in: "4/10/2018",
    status: "allowed",
  },
  {
    organization: "Mita",
    category: "partner",
    email: "thacaudd@shop-pro.jp",
    last_logged_in: "8/24/2013",
    status: "allowed",
  },
  {
    organization: "Flipstorm",
    category: "startup",
    email: "bdegoye@moonfruit.com",
    last_logged_in: "6/20/2020",
    status: "restricted",
  },
  {
    organization: "Devpulse",
    category: "partner",
    email: "mbarnhamf@dyndns.org",
    last_logged_in: "6/4/2010",
    status: "allowed",
  },
  {
    organization: "Vidoo",
    category: "startup",
    email: "hbarrattg@aol.com",
    last_logged_in: "11/13/2011",
    status: "restricted",
  },
  {
    organization: "Browsebug",
    category: "partner",
    email: "halliboneh@dagondesign.com",
    last_logged_in: "11/26/2022",
    status: "restricted",
  },
  {
    organization: "Meetz",
    category: "partner",
    email: "cemlini@prnewswire.com",
    last_logged_in: "6/6/2011",
    status: "restricted",
  },
  {
    organization: "Zoomcast",
    category: "partner",
    email: "lbumpassj@paypal.com",
    last_logged_in: "4/21/2001",
    status: "allowed",
  },
  {
    organization: "Vipe",
    category: "startup",
    email: "lpietrzykk@google.de",
    last_logged_in: "5/11/2017",
    status: "allowed",
  },
  {
    organization: "Topiczoom",
    category: "partner",
    email: "plefleyl@un.org",
    last_logged_in: "7/2/2003",
    status: "restricted",
  },
  {
    organization: "Yacero",
    category: "partner",
    email: "vattwoollm@google.com",
    last_logged_in: "5/26/2001",
    status: "restricted",
  },
  {
    organization: "Mita",
    category: "startup",
    email: "baiersn@archive.org",
    last_logged_in: "9/2/2012",
    status: "restricted",
  },
  {
    organization: "Realmix",
    category: "startup",
    email: "babrashkino@miitbeian.gov.cn",
    last_logged_in: "2/18/2019",
    status: "restricted",
  },
  {
    organization: "Zoomcast",
    category: "partner",
    email: "lsmuthp@taobao.com",
    last_logged_in: "3/30/2009",
    status: "allowed",
  },
  {
    organization: "Eabox",
    category: "partner",
    email: "vbellhamq@quantcast.com",
    last_logged_in: "1/6/2005",
    status: "allowed",
  },
  {
    organization: "Bubblemix",
    category: "startup",
    email: "whavisr@opensource.org",
    last_logged_in: "3/8/2016",
    status: "allowed",
  },
  {
    organization: "Blognation",
    category: "startup",
    email: "drosanders@netvibes.com",
    last_logged_in: "4/6/2014",
    status: "restricted",
  },
  {
    organization: "Meetz",
    category: "partner",
    email: "mcawtherayt@photobucket.com",
    last_logged_in: "9/13/2009",
    status: "allowed",
  },
  {
    organization: "Flashset",
    category: "partner",
    email: "rdunkerku@va.gov",
    last_logged_in: "10/12/2018",
    status: "allowed",
  },
  {
    organization: "Npath",
    category: "partner",
    email: "ajenkinsv@tumblr.com",
    last_logged_in: "10/17/2021",
    status: "allowed",
  },
  {
    organization: "DabZ",
    category: "partner",
    email: "wbeinkew@geocities.com",
    last_logged_in: "2/12/2009",
    status: "allowed",
  },
  {
    organization: "Thoughtstorm",
    category: "partner",
    email: "lburchattx@nyu.edu",
    last_logged_in: "10/6/2017",
    status: "restricted",
  },
  {
    organization: "Fanoodle",
    category: "partner",
    email: "lfrosdicky@independent.co.uk",
    last_logged_in: "10/22/2020",
    status: "allowed",
  },
  {
    organization: "Pixope",
    category: "partner",
    email: "chassewellz@webnode.com",
    last_logged_in: "2/12/2016",
    status: "restricted",
  },
  {
    organization: "Quaxo",
    category: "startup",
    email: "gwintersgill10@google.co.uk",
    last_logged_in: "10/3/2022",
    status: "restricted",
  },
  {
    organization: "Vidoo",
    category: "partner",
    email: "fboothjarvis11@google.co.jp",
    last_logged_in: "6/30/2000",
    status: "restricted",
  },
  {
    organization: "Wikizz",
    category: "partner",
    email: "smacneely12@homestead.com",
    last_logged_in: "5/6/2016",
    status: "restricted",
  },
  {
    organization: "Jabberbean",
    category: "partner",
    email: "igimblet13@blogger.com",
    last_logged_in: "1/18/2011",
    status: "allowed",
  },
  {
    organization: "Kayveo",
    category: "partner",
    email: "fsymons14@nba.com",
    last_logged_in: "5/29/2022",
    status: "restricted",
  },
  {
    organization: "Thoughtworks",
    category: "partner",
    email: "myitshak15@cpanel.net",
    last_logged_in: "10/14/2018",
    status: "restricted",
  },
  {
    organization: "Livetube",
    category: "startup",
    email: "btuffell16@fotki.com",
    last_logged_in: "4/22/2000",
    status: "allowed",
  },
  {
    organization: "Yambee",
    category: "partner",
    email: "jsinton17@adobe.com",
    last_logged_in: "7/30/2004",
    status: "restricted",
  },
  {
    organization: "Yodel",
    category: "partner",
    email: "mkeniwell18@seesaa.net",
    last_logged_in: "1/6/2007",
    status: "restricted",
  },
  {
    organization: "Zoomzone",
    category: "partner",
    email: "dwoolen19@artisteer.com",
    last_logged_in: "5/10/2005",
    status: "allowed",
  },
  {
    organization: "Twitterwire",
    category: "partner",
    email: "mbonhill1a@biglobe.ne.jp",
    last_logged_in: "12/30/2007",
    status: "restricted",
  },
  {
    organization: "Teklist",
    category: "partner",
    email: "mnorthbridge1b@unc.edu",
    last_logged_in: "5/5/2015",
    status: "restricted",
  },
  {
    organization: "Riffpath",
    category: "partner",
    email: "wyakushkev1c@4shared.com",
    last_logged_in: "11/23/2009",
    status: "allowed",
  },
  {
    organization: "Realbuzz",
    category: "startup",
    email: "dbenford1d@princeton.edu",
    last_logged_in: "6/22/2004",
    status: "allowed",
  },
  {
    organization: "Flashspan",
    category: "startup",
    email: "mferminger1e@alibaba.com",
    last_logged_in: "12/12/2012",
    status: "restricted",
  },
  {
    organization: "Quinu",
    category: "startup",
    email: "bkingham1f@google.de",
    last_logged_in: "6/23/2005",
    status: "restricted",
  },
  {
    organization: "Photolist",
    category: "partner",
    email: "balexandrescu1g@pinterest.com",
    last_logged_in: "9/12/2001",
    status: "allowed",
  },
  {
    organization: "Roomm",
    category: "startup",
    email: "iattow1h@quantcast.com",
    last_logged_in: "11/20/2022",
    status: "allowed",
  },
  {
    organization: "JumpXS",
    category: "startup",
    email: "ody1i@toplist.cz",
    last_logged_in: "6/18/2017",
    status: "restricted",
  },
  {
    organization: "InnoZ",
    category: "startup",
    email: "psterre1j@walmart.com",
    last_logged_in: "6/22/2016",
    status: "allowed",
  },
  {
    organization: "Gevee",
    category: "startup",
    email: "msprasen1k@wired.com",
    last_logged_in: "5/9/2005",
    status: "restricted",
  },
  {
    organization: "Edgeblab",
    category: "startup",
    email: "rspinage1l@utexas.edu",
    last_logged_in: "1/11/2022",
    status: "allowed",
  },
  {
    organization: "Fanoodle",
    category: "partner",
    email: "mgwillyam1m@yellowbook.com",
    last_logged_in: "4/5/2001",
    status: "restricted",
  },
  {
    organization: "Tagopia",
    category: "startup",
    email: "mredolfi1n@samsung.com",
    last_logged_in: "4/14/2003",
    status: "restricted",
  },
  {
    organization: "Feedbug",
    category: "partner",
    email: "jleaming1o@blogs.com",
    last_logged_in: "10/4/2020",
    status: "restricted",
  },
  {
    organization: "Jayo",
    category: "startup",
    email: "tuttley1p@psu.edu",
    last_logged_in: "10/9/2004",
    status: "allowed",
  },
  {
    organization: "Innojam",
    category: "startup",
    email: "kdowd1q@reuters.com",
    last_logged_in: "1/19/2004",
    status: "allowed",
  },
  {
    organization: "Dynava",
    category: "startup",
    email: "mmosdell1r@shutterfly.com",
    last_logged_in: "7/31/2004",
    status: "restricted",
  },
  {
    organization: "Twimm",
    category: "startup",
    email: "lfortey1s@meetup.com",
    last_logged_in: "3/14/2002",
    status: "restricted",
  },
  {
    organization: "Voolia",
    category: "partner",
    email: "hrichardin1t@ask.com",
    last_logged_in: "11/20/2001",
    status: "allowed",
  },
  {
    organization: "Yodel",
    category: "partner",
    email: "tshoute1u@creativecommons.org",
    last_logged_in: "9/12/2018",
    status: "allowed",
  },
  {
    organization: "Plajo",
    category: "startup",
    email: "roda1v@rakuten.co.jp",
    last_logged_in: "5/30/2016",
    status: "restricted",
  },
  {
    organization: "Dynava",
    category: "startup",
    email: "wlorimer1w@webmd.com",
    last_logged_in: "7/7/2002",
    status: "allowed",
  },
  {
    organization: "Quaxo",
    category: "partner",
    email: "mwhinray1x@businesswire.com",
    last_logged_in: "1/29/2018",
    status: "restricted",
  },
  {
    organization: "Jamia",
    category: "startup",
    email: "cdake1y@chron.com",
    last_logged_in: "4/5/2004",
    status: "restricted",
  },
  {
    organization: "Ntags",
    category: "startup",
    email: "nbeatey1z@vistaprint.com",
    last_logged_in: "12/19/2013",
    status: "allowed",
  },
  {
    organization: "Skalith",
    category: "startup",
    email: "gmcgibbon20@baidu.com",
    last_logged_in: "6/20/2011",
    status: "restricted",
  },
  {
    organization: "Thoughtsphere",
    category: "partner",
    email: "tesel21@sogou.com",
    last_logged_in: "7/13/2020",
    status: "allowed",
  },
  {
    organization: "Edgeclub",
    category: "startup",
    email: "dgarter22@clickbank.net",
    last_logged_in: "1/7/2018",
    status: "allowed",
  },
  {
    organization: "Lajo",
    category: "partner",
    email: "mprew23@xrea.com",
    last_logged_in: "8/16/2007",
    status: "restricted",
  },
  {
    organization: "Tazz",
    category: "partner",
    email: "ddrane24@free.fr",
    last_logged_in: "6/21/2013",
    status: "restricted",
  },
  {
    organization: "Bubblebox",
    category: "partner",
    email: "ddymond25@yandex.ru",
    last_logged_in: "12/22/2013",
    status: "allowed",
  },
  {
    organization: "Thoughtmix",
    category: "partner",
    email: "nswiggs26@github.io",
    last_logged_in: "5/3/2003",
    status: "restricted",
  },
  {
    organization: "Youspan",
    category: "startup",
    email: "alabbett27@ifeng.com",
    last_logged_in: "2/1/2022",
    status: "allowed",
  },
  {
    organization: "Zoovu",
    category: "startup",
    email: "rnutten28@webeden.co.uk",
    last_logged_in: "8/6/2001",
    status: "allowed",
  },
  {
    organization: "Meejo",
    category: "startup",
    email: "rmontacute29@princeton.edu",
    last_logged_in: "2/5/2005",
    status: "restricted",
  },
  {
    organization: "Kimia",
    category: "partner",
    email: "aholligan2a@google.com.au",
    last_logged_in: "10/11/2005",
    status: "allowed",
  },
  {
    organization: "Tagtune",
    category: "partner",
    email: "mduchart2b@icio.us",
    last_logged_in: "3/1/2001",
    status: "allowed",
  },
  {
    organization: "Thoughtstorm",
    category: "startup",
    email: "thubbis2c@godaddy.com",
    last_logged_in: "7/17/2010",
    status: "allowed",
  },
  {
    organization: "Wikivu",
    category: "startup",
    email: "bbalke2d@google.com",
    last_logged_in: "11/24/2018",
    status: "allowed",
  },
  {
    organization: "Realbridge",
    category: "startup",
    email: "bkeston2e@nhs.uk",
    last_logged_in: "3/13/2021",
    status: "restricted",
  },
  {
    organization: "Skippad",
    category: "startup",
    email: "dgrimston2f@state.gov",
    last_logged_in: "12/4/2018",
    status: "allowed",
  },
  {
    organization: "Mynte",
    category: "startup",
    email: "rlittleton2g@delicious.com",
    last_logged_in: "9/29/2002",
    status: "allowed",
  },
  {
    organization: "Kwilith",
    category: "startup",
    email: "arigolle2h@tmall.com",
    last_logged_in: "1/29/2014",
    status: "allowed",
  },
  {
    organization: "Yoveo",
    category: "partner",
    email: "agrinley2i@timesonline.co.uk",
    last_logged_in: "1/8/2006",
    status: "restricted",
  },
  {
    organization: "Twimbo",
    category: "partner",
    email: "spillinger2j@skyrock.com",
    last_logged_in: "11/22/2003",
    status: "allowed",
  },
  {
    organization: "Topicware",
    category: "startup",
    email: "atunnicliff2k@baidu.com",
    last_logged_in: "1/13/2014",
    status: "restricted",
  },
  {
    organization: "Meedoo",
    category: "startup",
    email: "ksamme2l@census.gov",
    last_logged_in: "3/14/2011",
    status: "allowed",
  },
  {
    organization: "Tavu",
    category: "partner",
    email: "wknottley2m@ask.com",
    last_logged_in: "7/17/2002",
    status: "restricted",
  },
  {
    organization: "Voonder",
    category: "startup",
    email: "kwickie2n@wikimedia.org",
    last_logged_in: "11/3/2012",
    status: "restricted",
  },
  {
    organization: "Oyoba",
    category: "startup",
    email: "ktosney2o@cbslocal.com",
    last_logged_in: "9/11/2012",
    status: "allowed",
  },
  {
    organization: "Ntags",
    category: "partner",
    email: "ahardey2p@intel.com",
    last_logged_in: "4/24/2010",
    status: "restricted",
  },
  {
    organization: "Brainsphere",
    category: "partner",
    email: "bcomizzoli2q@google.com.au",
    last_logged_in: "12/30/2008",
    status: "allowed",
  },
  {
    organization: "Jabberstorm",
    category: "startup",
    email: "challt2r@eepurl.com",
    last_logged_in: "12/2/2006",
    status: "allowed",
  },
];

const dummyArticles = [
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "11/18/2023",
    views: 654779,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "3/9/2023",
    views: 945896,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "8/14/2023",
    views: 56134,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "4/29/2023",
    views: 313485,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "5/5/2023",
    views: 436760,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "11/8/2023",
    views: 455686,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "10/4/2023",
    views: 438503,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "10/24/2023",
    views: 284232,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "3/6/2024",
    views: 608644,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "7/27/2023",
    views: 167575,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "5/23/2023",
    views: 743581,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "4/26/2023",
    views: 804986,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "10/8/2023",
    views: 863298,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "6/13/2023",
    views: 293621,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "8/11/2023",
    views: 897267,
    content_assessment: "low",
    status: "archived",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "6/8/2023",
    views: 196713,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "7/9/2023",
    views: 162294,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "10/25/2023",
    views: 776223,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "4/1/2023",
    views: 483770,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "8/30/2023",
    views: 133042,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "2/24/2024",
    views: 519194,
    content_assessment: "high",
    status: "archived",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "5/10/2023",
    views: 851286,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "2/7/2024",
    views: 687069,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "7/2/2023",
    views: 180451,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "4/4/2023",
    views: 450152,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "4/19/2023",
    views: 166917,
    content_assessment: "high",
    status: "archived",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "10/31/2023",
    views: 794776,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "12/12/2023",
    views: 729717,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "7/28/2023",
    views: 983035,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "1/28/2024",
    views: 677588,
    content_assessment: "low",
    status: "archived",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "6/5/2023",
    views: 119202,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "6/3/2023",
    views: 803208,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "11/23/2023",
    views: 931777,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "1/31/2024",
    views: 86921,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "4/2/2023",
    views: 927785,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "12/12/2023",
    views: 462548,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "4/7/2023",
    views: 335685,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "9/27/2023",
    views: 283368,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "11/6/2023",
    views: 907786,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "8/14/2023",
    views: 769246,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "4/28/2023",
    views: 921238,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "11/29/2023",
    views: 608837,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "11/3/2023",
    views: 205063,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "9/24/2023",
    views: 146294,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "5/4/2023",
    views: 544356,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "9/9/2023",
    views: 767906,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "12/12/2023",
    views: 20627,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "2/5/2024",
    views: 935875,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "3/31/2023",
    views: 770523,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "10/26/2023",
    views: 697605,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "9/28/2023",
    views: 474901,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "11/27/2023",
    views: 324462,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "4/8/2023",
    views: 617450,
    content_assessment: "low",
    status: "archived",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "10/27/2023",
    views: 147048,
    content_assessment: "high",
    status: "archived",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "7/24/2023",
    views: 428606,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "4/13/2023",
    views: 994244,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "4/24/2023",
    views: 443367,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "4/28/2023",
    views: 18460,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "7/20/2023",
    views: 345836,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "5/25/2023",
    views: 117074,
    content_assessment: "low",
    status: "archived",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "6/19/2023",
    views: 994740,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "3/17/2023",
    views: 59254,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "10/14/2023",
    views: 363456,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "5/26/2023",
    views: 757690,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "10/13/2023",
    views: 700153,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "9/18/2023",
    views: 245645,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "6/2/2023",
    views: 801004,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "9/7/2023",
    views: 294448,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "5/29/2023",
    views: 809614,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "4/1/2023",
    views: 858361,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "7/24/2023",
    views: 251492,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "11/25/2023",
    views: 895309,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "7/30/2023",
    views: 750802,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "1/29/2024",
    views: 317303,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "6/28/2023",
    views: 41182,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "1/8/2024",
    views: 86041,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "9/23/2023",
    views: 851893,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "6/15/2023",
    views: 209538,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "5/1/2023",
    views: 321952,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "3/24/2023",
    views: 721018,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "8/24/2023",
    views: 75140,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "7/22/2023",
    views: 582950,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "3/6/2024",
    views: 391011,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "3/8/2023",
    views: 680772,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "6/28/2023",
    views: 176748,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "8/8/2023",
    views: 980877,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "5/10/2023",
    views: 306409,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "1/26/2024",
    views: 798536,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "3/29/2023",
    views: 541990,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Investors Eyeing Promising Startups for Future Growth",
    date_posted: "4/13/2023",
    views: 946216,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "10/21/2023",
    views: 990012,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "11/17/2023",
    views: 84062,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "8/19/2023",
    views: 61364,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "8/1/2023",
    views: 622606,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "9/1/2023",
    views: 942137,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "5/1/2023",
    views: 422179,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Top Startups Join Forces for Innovation",
    date_posted: "9/19/2023",
    views: 260857,
    content_assessment: "low",
    status: "archived",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "11/8/2023",
    views: 645691,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "New Partnership Aims to Revolutionize Startup Ecosystem",
    date_posted: "8/30/2023",
    views: 545541,
    content_assessment: "high",
    status: "archived",
  },
  {
    title:
      "Collaboration Between Startups and Established Companies on the Rise",
    date_posted: "10/29/2023",
    views: 147371,
    content_assessment: "low",
    status: "in feed",
  },
];

const dummyPrograms = [
  {
    title: "Corporate Startup Integration",
    date_posted: "4/26/2023",
    views: 325539,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "2/2/2024",
    views: 862120,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "8/14/2023",
    views: 140768,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Startup Synergy Program",
    date_posted: "6/15/2023",
    views: 677576,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Synergy Solutions",
    date_posted: "7/13/2023",
    views: 515263,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Startup Synergy Program",
    date_posted: "5/14/2023",
    views: 410057,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "8/9/2023",
    views: 86591,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Startup Fusion",
    date_posted: "11/18/2023",
    views: 643723,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Startup Synergy Program",
    date_posted: "11/18/2023",
    views: 126945,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Synergy Solutions",
    date_posted: "1/12/2024",
    views: 529316,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "5/5/2023",
    views: 645410,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Startup Synergy Program",
    date_posted: "9/15/2023",
    views: 604683,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Startup Fusion",
    date_posted: "1/2/2024",
    views: 754090,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Startup Fusion",
    date_posted: "10/27/2023",
    views: 660146,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Startup Synergy Program",
    date_posted: "9/28/2023",
    views: 150822,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "2/6/2024",
    views: 86923,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "10/27/2023",
    views: 929805,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Synergy Solutions",
    date_posted: "1/12/2024",
    views: 864083,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "11/12/2023",
    views: 36594,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Startup Fusion",
    date_posted: "11/4/2023",
    views: 521914,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Startup Fusion",
    date_posted: "9/22/2023",
    views: 691038,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Startup Synergy Program",
    date_posted: "6/27/2023",
    views: 766611,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "Synergy Solutions",
    date_posted: "2/13/2024",
    views: 895177,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Synergy Solutions",
    date_posted: "1/29/2024",
    views: 135551,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "4/25/2023",
    views: 375845,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "7/21/2023",
    views: 916324,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "3/31/2023",
    views: 427949,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Synergy Solutions",
    date_posted: "6/1/2023",
    views: 614123,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "8/21/2023",
    views: 541965,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Startup Synergy Program",
    date_posted: "9/18/2023",
    views: 587685,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Startup Fusion",
    date_posted: "3/23/2023",
    views: 10388,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Startup Fusion",
    date_posted: "2/1/2024",
    views: 661776,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "Startup Synergy Program",
    date_posted: "12/18/2023",
    views: 134760,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "Startup Fusion",
    date_posted: "5/31/2023",
    views: 549350,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "10/31/2023",
    views: 282890,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Synergy Solutions",
    date_posted: "8/8/2023",
    views: 109679,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Startup Fusion",
    date_posted: "3/7/2023",
    views: 424317,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "9/16/2023",
    views: 322778,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "2/15/2024",
    views: 30405,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Startup Synergy Program",
    date_posted: "7/4/2023",
    views: 433341,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Synergy Solutions",
    date_posted: "1/11/2024",
    views: 401737,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "5/9/2023",
    views: 592525,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "7/22/2023",
    views: 996425,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Startup Fusion",
    date_posted: "11/28/2023",
    views: 831320,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "6/26/2023",
    views: 706635,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "3/20/2023",
    views: 159802,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Startup Fusion",
    date_posted: "5/15/2023",
    views: 183103,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "12/9/2023",
    views: 382189,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "Startup Synergy Program",
    date_posted: "12/13/2023",
    views: 945012,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "Synergy Solutions",
    date_posted: "6/13/2023",
    views: 140613,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "5/4/2023",
    views: 688746,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "10/13/2023",
    views: 413869,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "11/7/2023",
    views: 765980,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "11/15/2023",
    views: 625768,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "10/13/2023",
    views: 493969,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Synergy Solutions",
    date_posted: "9/10/2023",
    views: 713095,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Synergy Solutions",
    date_posted: "7/12/2023",
    views: 346014,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "4/15/2023",
    views: 161945,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "12/3/2023",
    views: 591433,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Startup Fusion",
    date_posted: "2/3/2024",
    views: 702198,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Startup Fusion",
    date_posted: "1/5/2024",
    views: 112160,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "8/23/2023",
    views: 835880,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "11/11/2023",
    views: 136240,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Synergy Solutions",
    date_posted: "10/7/2023",
    views: 237753,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "7/31/2023",
    views: 408948,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "1/17/2024",
    views: 79512,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "7/25/2023",
    views: 860516,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Synergy Solutions",
    date_posted: "2/2/2024",
    views: 220637,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "9/9/2023",
    views: 55591,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Startup Fusion",
    date_posted: "2/18/2024",
    views: 238345,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Startup Fusion",
    date_posted: "7/13/2023",
    views: 311163,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Startup Fusion",
    date_posted: "6/23/2023",
    views: 176931,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "11/28/2023",
    views: 860091,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "11/5/2023",
    views: 485665,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "11/20/2023",
    views: 9397,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "9/25/2023",
    views: 130649,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Startup Fusion",
    date_posted: "9/22/2023",
    views: 266162,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "10/15/2023",
    views: 338951,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Synergy Solutions",
    date_posted: "3/3/2024",
    views: 630905,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "Synergy Solutions",
    date_posted: "9/4/2023",
    views: 340837,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "1/22/2024",
    views: 918322,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "7/8/2023",
    views: 734102,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Startup Synergy Program",
    date_posted: "10/4/2023",
    views: 700417,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Synergy Solutions",
    date_posted: "8/6/2023",
    views: 335525,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Synergy Solutions",
    date_posted: "9/5/2023",
    views: 922097,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "Synergy Solutions",
    date_posted: "3/18/2023",
    views: 46961,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "Synergy Solutions",
    date_posted: "8/27/2023",
    views: 951957,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "2/21/2024",
    views: 98252,
    content_assessment: "low",
    status: "in feed",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "8/26/2023",
    views: 937200,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "3/16/2023",
    views: 726657,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Startup Synergy Program",
    date_posted: "4/5/2023",
    views: 339814,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Startup Fusion",
    date_posted: "7/24/2023",
    views: 760508,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Startup Synergy Program",
    date_posted: "11/13/2023",
    views: 22431,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "5/3/2023",
    views: 266216,
    content_assessment: "low",
    status: "archived",
  },
  {
    title: "Startup Synergy Program",
    date_posted: "4/10/2023",
    views: 548811,
    content_assessment: "medium",
    status: "in feed",
  },
  {
    title: "Startup Synergy Program",
    date_posted: "4/12/2023",
    views: 288609,
    content_assessment: "medium",
    status: "archived",
  },
  {
    title: "Startup Synergy Program",
    date_posted: "12/31/2023",
    views: 517498,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Startup Fusion",
    date_posted: "8/9/2023",
    views: 856552,
    content_assessment: "high",
    status: "in feed",
  },
  {
    title: "Innovate & Acquire",
    date_posted: "2/24/2024",
    views: 659288,
    content_assessment: "high",
    status: "archived",
  },
  {
    title: "Corporate Startup Integration",
    date_posted: "10/18/2023",
    views: 314250,
    content_assessment: "low",
    status: "archived",
  },
];

const dummyQueries = [
  {
    sender: "InnoSolutions",
    subject: "password reset",
    content: "Update on software installation",
    status: "unread",
    date_received: "6/5/2023",
  },
  {
    sender: "TechGenius",
    subject: "password reset",
    content: "Inquiry about data backup",
    status: "read",
    date_received: "2/7/2024",
  },
  {
    sender: "StartupSpark",
    subject: "password reset",
    content: "Query about billing",
    status: "read",
    date_received: "11/9/2023",
  },
  {
    sender: "DataDynamo",
    subject: "billing issue",
    content: "Query about billing",
    status: "unread",
    date_received: "7/27/2023",
  },
  {
    sender: "InnoSolutions",
    subject: "password reset",
    content: "Inquiry about data backup",
    status: "unread",
    date_received: "5/28/2023",
  },
  {
    sender: "TechGenius",
    subject: "billing issue",
    content: "Inquiry about data backup",
    status: "unread",
    date_received: "8/4/2023",
  },
  {
    sender: "StartupSpark",
    subject: "account access",
    content: "Update on software installation",
    status: "read",
    date_received: "7/19/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "feature request",
    content: "Request for new user account",
    status: "unread",
    date_received: "12/6/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "billing issue",
    content: "Update on software installation",
    status: "read",
    date_received: "7/2/2023",
  },
  {
    sender: "InnoSolutions",
    subject: "technical problem",
    content: "Request for server maintenance",
    status: "unread",
    date_received: "3/9/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "account access",
    content: "Query about billing",
    status: "unread",
    date_received: "9/3/2023",
  },
  {
    sender: "StartupSpark",
    subject: "password reset",
    content: "Request for server maintenance",
    status: "unread",
    date_received: "6/20/2023",
  },
  {
    sender: "TechGenius",
    subject: "password reset",
    content: "Update on software installation",
    status: "read",
    date_received: "2/4/2024",
  },
  {
    sender: "InnoSolutions",
    subject: "account access",
    content: "Query about billing",
    status: "unread",
    date_received: "1/18/2024",
  },
  {
    sender: "TechGenius",
    subject: "account access",
    content: "Inquiry about data backup",
    status: "unread",
    date_received: "3/30/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "feature request",
    content: "Request for server maintenance",
    status: "unread",
    date_received: "2/29/2024",
  },
  {
    sender: "DataDynamo",
    subject: "account access",
    content: "Update on software installation",
    status: "read",
    date_received: "4/13/2023",
  },
  {
    sender: "DataDynamo",
    subject: "technical problem",
    content: "Update on software installation",
    status: "unread",
    date_received: "7/15/2023",
  },
  {
    sender: "DataDynamo",
    subject: "billing issue",
    content: "Request for new user account",
    status: "unread",
    date_received: "4/9/2023",
  },
  {
    sender: "InnoSolutions",
    subject: "feature request",
    content: "Query about billing",
    status: "unread",
    date_received: "7/24/2023",
  },
  {
    sender: "DataDynamo",
    subject: "billing issue",
    content: "Request for new user account",
    status: "read",
    date_received: "8/31/2023",
  },
  {
    sender: "DataDynamo",
    subject: "technical problem",
    content: "Inquiry about data backup",
    status: "read",
    date_received: "7/28/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "password reset",
    content: "Update on software installation",
    status: "read",
    date_received: "8/9/2023",
  },
  {
    sender: "DataDynamo",
    subject: "feature request",
    content: "Request for server maintenance",
    status: "read",
    date_received: "11/15/2023",
  },
  {
    sender: "DataDynamo",
    subject: "feature request",
    content: "Inquiry about data backup",
    status: "read",
    date_received: "6/10/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "feature request",
    content: "Update on software installation",
    status: "unread",
    date_received: "5/3/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "feature request",
    content: "Query about billing",
    status: "read",
    date_received: "1/24/2024",
  },
  {
    sender: "InnoSolutions",
    subject: "technical problem",
    content: "Request for server maintenance",
    status: "unread",
    date_received: "5/8/2023",
  },
  {
    sender: "DataDynamo",
    subject: "billing issue",
    content: "Inquiry about data backup",
    status: "unread",
    date_received: "3/6/2024",
  },
  {
    sender: "TechGenius",
    subject: "password reset",
    content: "Inquiry about data backup",
    status: "read",
    date_received: "3/25/2023",
  },
  {
    sender: "StartupSpark",
    subject: "feature request",
    content: "Inquiry about data backup",
    status: "read",
    date_received: "1/7/2024",
  },
  {
    sender: "InnoSolutions",
    subject: "billing issue",
    content: "Request for new user account",
    status: "read",
    date_received: "7/9/2023",
  },
  {
    sender: "InnoSolutions",
    subject: "technical problem",
    content: "Inquiry about data backup",
    status: "unread",
    date_received: "7/11/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "account access",
    content: "Request for server maintenance",
    status: "read",
    date_received: "8/11/2023",
  },
  {
    sender: "TechGenius",
    subject: "billing issue",
    content: "Request for server maintenance",
    status: "read",
    date_received: "10/19/2023",
  },
  {
    sender: "TechGenius",
    subject: "password reset",
    content: "Request for new user account",
    status: "read",
    date_received: "2/6/2024",
  },
  {
    sender: "InnoSolutions",
    subject: "password reset",
    content: "Request for new user account",
    status: "read",
    date_received: "10/17/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "password reset",
    content: "Request for new user account",
    status: "read",
    date_received: "12/31/2023",
  },
  {
    sender: "DataDynamo",
    subject: "account access",
    content: "Inquiry about data backup",
    status: "read",
    date_received: "9/8/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "password reset",
    content: "Request for new user account",
    status: "unread",
    date_received: "9/8/2023",
  },
  {
    sender: "StartupSpark",
    subject: "feature request",
    content: "Query about billing",
    status: "unread",
    date_received: "3/11/2023",
  },
  {
    sender: "DataDynamo",
    subject: "account access",
    content: "Inquiry about data backup",
    status: "read",
    date_received: "11/18/2023",
  },
  {
    sender: "DataDynamo",
    subject: "account access",
    content: "Query about billing",
    status: "unread",
    date_received: "2/24/2024",
  },
  {
    sender: "DataDynamo",
    subject: "feature request",
    content: "Query about billing",
    status: "read",
    date_received: "11/26/2023",
  },
  {
    sender: "TechGenius",
    subject: "feature request",
    content: "Update on software installation",
    status: "unread",
    date_received: "11/12/2023",
  },
  {
    sender: "TechGenius",
    subject: "technical problem",
    content: "Update on software installation",
    status: "read",
    date_received: "2/10/2024",
  },
  {
    sender: "DataDynamo",
    subject: "password reset",
    content: "Query about billing",
    status: "unread",
    date_received: "6/18/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "billing issue",
    content: "Request for server maintenance",
    status: "unread",
    date_received: "2/28/2024",
  },
  {
    sender: "DataDynamo",
    subject: "account access",
    content: "Request for new user account",
    status: "read",
    date_received: "5/13/2023",
  },
  {
    sender: "TechGenius",
    subject: "billing issue",
    content: "Inquiry about data backup",
    status: "unread",
    date_received: "9/23/2023",
  },
  {
    sender: "TechGenius",
    subject: "feature request",
    content: "Update on software installation",
    status: "read",
    date_received: "1/10/2024",
  },
  {
    sender: "StartupSpark",
    subject: "password reset",
    content: "Update on software installation",
    status: "unread",
    date_received: "8/15/2023",
  },
  {
    sender: "TechGenius",
    subject: "feature request",
    content: "Query about billing",
    status: "read",
    date_received: "11/6/2023",
  },
  {
    sender: "TechGenius",
    subject: "account access",
    content: "Request for server maintenance",
    status: "read",
    date_received: "11/5/2023",
  },
  {
    sender: "StartupSpark",
    subject: "technical problem",
    content: "Request for new user account",
    status: "unread",
    date_received: "9/22/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "feature request",
    content: "Request for new user account",
    status: "unread",
    date_received: "7/10/2023",
  },
  {
    sender: "DataDynamo",
    subject: "account access",
    content: "Update on software installation",
    status: "read",
    date_received: "4/13/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "feature request",
    content: "Update on software installation",
    status: "unread",
    date_received: "8/29/2023",
  },
  {
    sender: "StartupSpark",
    subject: "technical problem",
    content: "Inquiry about data backup",
    status: "unread",
    date_received: "9/4/2023",
  },
  {
    sender: "InnoSolutions",
    subject: "feature request",
    content: "Request for server maintenance",
    status: "read",
    date_received: "6/29/2023",
  },
  {
    sender: "StartupSpark",
    subject: "technical problem",
    content: "Update on software installation",
    status: "unread",
    date_received: "10/4/2023",
  },
  {
    sender: "DataDynamo",
    subject: "account access",
    content: "Update on software installation",
    status: "read",
    date_received: "3/18/2023",
  },
  {
    sender: "StartupSpark",
    subject: "feature request",
    content: "Request for new user account",
    status: "read",
    date_received: "5/11/2023",
  },
  {
    sender: "TechGenius",
    subject: "feature request",
    content: "Inquiry about data backup",
    status: "read",
    date_received: "5/28/2023",
  },
  {
    sender: "InnoSolutions",
    subject: "technical problem",
    content: "Update on software installation",
    status: "read",
    date_received: "3/22/2023",
  },
  {
    sender: "InnoSolutions",
    subject: "technical problem",
    content: "Update on software installation",
    status: "read",
    date_received: "3/27/2023",
  },
  {
    sender: "StartupSpark",
    subject: "feature request",
    content: "Update on software installation",
    status: "read",
    date_received: "10/29/2023",
  },
  {
    sender: "StartupSpark",
    subject: "account access",
    content: "Request for new user account",
    status: "unread",
    date_received: "9/17/2023",
  },
  {
    sender: "DataDynamo",
    subject: "account access",
    content: "Update on software installation",
    status: "read",
    date_received: "6/24/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "password reset",
    content: "Update on software installation",
    status: "unread",
    date_received: "2/5/2024",
  },
  {
    sender: "StartupSpark",
    subject: "account access",
    content: "Query about billing",
    status: "unread",
    date_received: "12/9/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "account access",
    content: "Request for server maintenance",
    status: "read",
    date_received: "5/8/2023",
  },
  {
    sender: "DataDynamo",
    subject: "account access",
    content: "Request for new user account",
    status: "read",
    date_received: "5/20/2023",
  },
  {
    sender: "StartupSpark",
    subject: "billing issue",
    content: "Update on software installation",
    status: "unread",
    date_received: "12/12/2023",
  },
  {
    sender: "InnoSolutions",
    subject: "billing issue",
    content: "Query about billing",
    status: "unread",
    date_received: "11/27/2023",
  },
  {
    sender: "DataDynamo",
    subject: "feature request",
    content: "Inquiry about data backup",
    status: "unread",
    date_received: "1/30/2024",
  },
  {
    sender: "InnoSolutions",
    subject: "password reset",
    content: "Request for server maintenance",
    status: "read",
    date_received: "8/31/2023",
  },
  {
    sender: "DataDynamo",
    subject: "technical problem",
    content: "Request for new user account",
    status: "read",
    date_received: "3/11/2023",
  },
  {
    sender: "InnoSolutions",
    subject: "password reset",
    content: "Request for new user account",
    status: "read",
    date_received: "3/14/2023",
  },
  {
    sender: "DataDynamo",
    subject: "technical problem",
    content: "Update on software installation",
    status: "read",
    date_received: "10/20/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "technical problem",
    content: "Request for new user account",
    status: "unread",
    date_received: "11/15/2023",
  },
  {
    sender: "TechGenius",
    subject: "billing issue",
    content: "Request for server maintenance",
    status: "read",
    date_received: "5/2/2023",
  },
  {
    sender: "DataDynamo",
    subject: "technical problem",
    content: "Request for server maintenance",
    status: "read",
    date_received: "6/8/2023",
  },
  {
    sender: "StartupSpark",
    subject: "billing issue",
    content: "Update on software installation",
    status: "unread",
    date_received: "11/25/2023",
  },
  {
    sender: "DataDynamo",
    subject: "technical problem",
    content: "Inquiry about data backup",
    status: "unread",
    date_received: "10/2/2023",
  },
  {
    sender: "InnoSolutions",
    subject: "billing issue",
    content: "Inquiry about data backup",
    status: "unread",
    date_received: "1/19/2024",
  },
  {
    sender: "StartupSpark",
    subject: "feature request",
    content: "Query about billing",
    status: "read",
    date_received: "5/19/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "technical problem",
    content: "Query about billing",
    status: "unread",
    date_received: "8/18/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "technical problem",
    content: "Query about billing",
    status: "read",
    date_received: "4/5/2023",
  },
  {
    sender: "StartupSpark",
    subject: "technical problem",
    content: "Request for server maintenance",
    status: "read",
    date_received: "5/26/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "password reset",
    content: "Request for server maintenance",
    status: "read",
    date_received: "10/21/2023",
  },
  {
    sender: "DataDynamo",
    subject: "technical problem",
    content: "Query about billing",
    status: "read",
    date_received: "9/14/2023",
  },
  {
    sender: "DataDynamo",
    subject: "technical problem",
    content: "Update on software installation",
    status: "read",
    date_received: "12/19/2023",
  },
  {
    sender: "InnoSolutions",
    subject: "password reset",
    content: "Request for server maintenance",
    status: "unread",
    date_received: "8/7/2023",
  },
  {
    sender: "StartupSpark",
    subject: "technical problem",
    content: "Update on software installation",
    status: "unread",
    date_received: "11/19/2023",
  },
  {
    sender: "CodeCrafters",
    subject: "technical problem",
    content: "Update on software installation",
    status: "unread",
    date_received: "3/22/2023",
  },
  {
    sender: "InnoSolutions",
    subject: "feature request",
    content: "Query about billing",
    status: "read",
    date_received: "7/15/2023",
  },
  {
    sender: "StartupSpark",
    subject: "billing issue",
    content: "Query about billing",
    status: "unread",
    date_received: "2/15/2024",
  },
  {
    sender: "TechGenius",
    subject: "billing issue",
    content: "Update on software installation",
    status: "read",
    date_received: "3/9/2023",
  },
  {
    sender: "InnoSolutions",
    subject: "billing issue",
    content: "Query about billing",
    status: "read",
    date_received: "7/7/2023",
  },
];

const dummyCommunity = [
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "7/1/2023",
    times_reported: 11,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "6/9/2023",
    times_reported: 6,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "12/5/2023",
    times_reported: 7,
  },
  {
    title: "Navigating the Startup Ecosystem: Tips and Tricks",
    date_posted: "5/3/2023",
    times_reported: 0,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "2/15/2024",
    times_reported: 9,
  },
  {
    title: "Navigating the Startup Ecosystem: Tips and Tricks",
    date_posted: "11/13/2023",
    times_reported: 1,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "8/28/2023",
    times_reported: 11,
  },
  {
    title: "Navigating the Startup Ecosystem: Tips and Tricks",
    date_posted: "3/2/2024",
    times_reported: 16,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "4/4/2023",
    times_reported: 14,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "10/13/2023",
    times_reported: 20,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "6/4/2023",
    times_reported: 10,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "3/25/2023",
    times_reported: 14,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "10/11/2023",
    times_reported: 6,
  },
  {
    title: "Investors and Buyers Unite: The Ultimate Guide",
    date_posted: "12/17/2023",
    times_reported: 20,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "10/8/2023",
    times_reported: 7,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "5/20/2023",
    times_reported: 9,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "7/20/2023",
    times_reported: 2,
  },
  {
    title: "Investors and Buyers Unite: The Ultimate Guide",
    date_posted: "12/18/2023",
    times_reported: 7,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "8/27/2023",
    times_reported: 16,
  },
  {
    title: "Navigating the Startup Ecosystem: Tips and Tricks",
    date_posted: "7/29/2023",
    times_reported: 3,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "2/24/2024",
    times_reported: 1,
  },
  {
    title: "Investors and Buyers Unite: The Ultimate Guide",
    date_posted: "1/15/2024",
    times_reported: 10,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "7/11/2023",
    times_reported: 19,
  },
  {
    title: "Investors and Buyers Unite: The Ultimate Guide",
    date_posted: "7/4/2023",
    times_reported: 3,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "1/30/2024",
    times_reported: 3,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "8/19/2023",
    times_reported: 8,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "3/14/2023",
    times_reported: 5,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "2/4/2024",
    times_reported: 12,
  },
  {
    title: "Investors and Buyers Unite: The Ultimate Guide",
    date_posted: "11/25/2023",
    times_reported: 1,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "12/19/2023",
    times_reported: 18,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "2/21/2024",
    times_reported: 0,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "2/9/2024",
    times_reported: 0,
  },
  {
    title: "Investors and Buyers Unite: The Ultimate Guide",
    date_posted: "5/21/2023",
    times_reported: 20,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "1/14/2024",
    times_reported: 4,
  },
  {
    title: "Navigating the Startup Ecosystem: Tips and Tricks",
    date_posted: "8/7/2023",
    times_reported: 16,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "5/30/2023",
    times_reported: 14,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "4/23/2023",
    times_reported: 6,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "12/19/2023",
    times_reported: 15,
  },
  {
    title: "Navigating the Startup Ecosystem: Tips and Tricks",
    date_posted: "10/28/2023",
    times_reported: 18,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "3/16/2023",
    times_reported: 19,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "5/19/2023",
    times_reported: 10,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "7/8/2023",
    times_reported: 12,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "4/14/2023",
    times_reported: 9,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "9/17/2023",
    times_reported: 5,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "9/10/2023",
    times_reported: 18,
  },
  {
    title: "Investors and Buyers Unite: The Ultimate Guide",
    date_posted: "10/27/2023",
    times_reported: 8,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "5/10/2023",
    times_reported: 4,
  },
  {
    title: "Investors and Buyers Unite: The Ultimate Guide",
    date_posted: "2/15/2024",
    times_reported: 3,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "3/11/2023",
    times_reported: 12,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "5/29/2023",
    times_reported: 12,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "12/23/2023",
    times_reported: 1,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "10/21/2023",
    times_reported: 14,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "2/18/2024",
    times_reported: 7,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "6/22/2023",
    times_reported: 2,
  },
  {
    title: "Investors and Buyers Unite: The Ultimate Guide",
    date_posted: "6/15/2023",
    times_reported: 13,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "1/19/2024",
    times_reported: 4,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "6/22/2023",
    times_reported: 13,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "5/17/2023",
    times_reported: 17,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "8/18/2023",
    times_reported: 11,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "9/22/2023",
    times_reported: 4,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "8/17/2023",
    times_reported: 18,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "1/4/2024",
    times_reported: 19,
  },
  {
    title: "Navigating the Startup Ecosystem: Tips and Tricks",
    date_posted: "10/11/2023",
    times_reported: 18,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "3/22/2023",
    times_reported: 13,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "5/12/2023",
    times_reported: 12,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "7/18/2023",
    times_reported: 12,
  },
  {
    title: "Investors and Buyers Unite: The Ultimate Guide",
    date_posted: "3/12/2023",
    times_reported: 4,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "3/12/2023",
    times_reported: 7,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "10/20/2023",
    times_reported: 14,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "12/8/2023",
    times_reported: 8,
  },
  {
    title: "Investors and Buyers Unite: The Ultimate Guide",
    date_posted: "10/26/2023",
    times_reported: 17,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "4/1/2023",
    times_reported: 5,
  },
  {
    title: "Navigating the Startup Ecosystem: Tips and Tricks",
    date_posted: "11/9/2023",
    times_reported: 18,
  },
  {
    title: "Navigating the Startup Ecosystem: Tips and Tricks",
    date_posted: "6/17/2023",
    times_reported: 9,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "1/20/2024",
    times_reported: 13,
  },
  {
    title: "Navigating the Startup Ecosystem: Tips and Tricks",
    date_posted: "8/2/2023",
    times_reported: 20,
  },
  {
    title: "Navigating the Startup Ecosystem: Tips and Tricks",
    date_posted: "10/11/2023",
    times_reported: 12,
  },
  {
    title: "Navigating the Startup Ecosystem: Tips and Tricks",
    date_posted: "8/10/2023",
    times_reported: 10,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "9/14/2023",
    times_reported: 4,
  },
  {
    title: "Investors and Buyers Unite: The Ultimate Guide",
    date_posted: "6/9/2023",
    times_reported: 16,
  },
  {
    title: "Investors and Buyers Unite: The Ultimate Guide",
    date_posted: "12/12/2023",
    times_reported: 2,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "7/16/2023",
    times_reported: 13,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "7/20/2023",
    times_reported: 20,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "5/28/2023",
    times_reported: 10,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "12/3/2023",
    times_reported: 19,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "7/14/2023",
    times_reported: 5,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "5/14/2023",
    times_reported: 3,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "7/16/2023",
    times_reported: 20,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "8/9/2023",
    times_reported: 20,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "1/9/2024",
    times_reported: 7,
  },
  {
    title: "Investors and Buyers Unite: The Ultimate Guide",
    date_posted: "7/10/2023",
    times_reported: 19,
  },
  {
    title: "Top 10 Platforms for Startup Success",
    date_posted: "11/2/2023",
    times_reported: 2,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "5/2/2023",
    times_reported: 1,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "1/12/2024",
    times_reported: 18,
  },
  {
    title: "Investors and Buyers Unite: The Ultimate Guide",
    date_posted: "7/10/2023",
    times_reported: 0,
  },
  {
    title: "Startup Showcase: Innovations and Opportunities",
    date_posted: "11/6/2023",
    times_reported: 17,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "7/23/2023",
    times_reported: 7,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "12/2/2023",
    times_reported: 7,
  },
  {
    title: "Connecting Startups with Investors: A Comprehensive Guide",
    date_posted: "11/1/2023",
    times_reported: 11,
  },
  {
    title: "Investors and Buyers Unite: The Ultimate Guide",
    date_posted: "10/20/2023",
    times_reported: 12,
  },
];

const currentPath = window.location.pathname.split("/");
const lastPath = currentPath[currentPath.length - 1];

let currentPage = 1;
let rowsPerPage = 25;

function tableSearch() {
  let input, filter, table, tr, td, txtValue;

  // Initialization of variables
  input = document.querySelector("#search-user");
  filter = input.value.toUpperCase();
  table = document.querySelector("#table-user");
  tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");

    for (let j = 0; j < td.length; j++) {
      // Access each specific td element in the loop
      txtValue = td[j].textContent || td[j].innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        break; // Break out of the inner loop once a match is found
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function defineDropdownContent(dropdownMenuContent) {
  // Add dropdown menu items here (replace with your desired actions)
  const dropdownItem1 = document.createElement("a");
  dropdownItem1.classList.add("dropdown-item");
  dropdownItem1.href = "#";

  const dropdownItem2 = document.createElement("a");
  dropdownItem2.classList.add("dropdown-item");
  dropdownItem2.href = "#";

  if (lastPath.includes("users.template.html")) {
    dropdownItem1.textContent = "Edit User";
    dropdownItem2.textContent = "Delete User";
  }

  if (lastPath.includes("articles.template.html")) {
    dropdownItem1.textContent = "Edit Articles";
    dropdownItem2.textContent = "Delete Articles";
  }

  if (lastPath.includes("programs.template.html")) {
    dropdownItem1.textContent = "Edit Programs";
    dropdownItem2.textContent = "Delete Programs";
  }

  if (lastPath.includes("queries.template.html")) {
    dropdownItem1.textContent = "View Query";
    dropdownItem2.textContent = "Delete Query";
  }

  dropdownMenuContent.appendChild(dropdownItem1);
  dropdownMenuContent.appendChild(dropdownItem2);
}

function populateLogic(data) {
  const tbody = document.getElementById("users-tbl-body");
  tbody.innerHTML = "";

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  for (let i = startIndex; i < endIndex && i < data.length; i++) {
    const rowData = data[i];
    const row = document.createElement("tr");

    Object.values(rowData).forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    const buttonCell = document.createElement("td");
    buttonCell.className = "text-center";

    const button = document.createElement("button");
    button.classList.add("text-xs", "border", "rounded", "bg-white");
    button.setAttribute("data-bs-toggle", "dropdown");
    button.setAttribute("id", `button_${i}`);

    // Create img element
    const img = document.createElement("img");
    img.src = "../assets/svgs/More.svg";
    img.className = "h-4 w-4 p-1";
    img.alt = "";

    button.appendChild(img);

    const dropdownMenu = document.createElement("div");
    dropdownMenu.classList.add("dropdown");

    const dropdownMenuContent = document.createElement("div");
    dropdownMenuContent.classList.add("dropdown-menu");
    dropdownMenuContent.setAttribute("aria-labelledby", `button_${i}`); // Link to the current button's ID

    defineDropdownContent(dropdownMenuContent);

    dropdownMenu.appendChild(dropdownMenuContent);
    buttonCell.appendChild(button); // Append button to cell
    buttonCell.appendChild(dropdownMenu); // Also append dropdown to cell (acts as the button)

    button.onclick = function () {
      dropdownMenu.classList.toggle("show"); // Toggle visibility of the current dropdown
    };

    row.appendChild(buttonCell);
    tbody.appendChild(row);
  }
}

function populateTableBody() {
  lastPath === "users.template.html" && populateLogic(dummyUsers);
  lastPath === "articles.template.html" && populateLogic(dummyArticles);
  lastPath === "programs.template.html" && populateLogic(dummyPrograms);
  lastPath === "queries.template.html" && populateLogic(dummyQueries);
  lastPath === "community.template.html" && populateLogic(dummyCommunity);
}

function updatePagination() {
  const pagination = document.getElementById("pagination");
  const totalPages = Math.ceil(dummyArticles.length / rowsPerPage);

  pagination.innerHTML = "";

  for (let page = 1; page <= totalPages; page++) {
    const li = document.createElement("li");
    li.textContent = page;
    li.addEventListener("click", () => showPage(page));

    if (page === currentPage) {
      li.classList.add("page-number-active");
    }

    pagination.appendChild(li);
  }
}

function changePagePerRow() {
  const perRowSelect = document.querySelector("#page-per-row");

  if (perRowSelect) {
    rowsPerPage = parseInt(perRowSelect.value);

    showPage(currentPage);
  }
}

function showPage(page) {
  currentPage = page;
  updatePagination();
  populateTableBody();
}

// Initial pagination and table population
lastPath !== "messenger.template.html" && updatePagination();
lastPath !== "messenger.template.html" && populateTableBody();
