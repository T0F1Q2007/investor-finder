export type SourcedFact = {
  text: string
  sourceUrl: string
  sourceLabel: string
}

export type Investor = {
  id: string
  name: string
  role: string
  countryCodes: string[]
  categoryIds: string[]
  firms: SourcedFact[]
  companies: SourcedFact[]
  investments: SourcedFact[]
  projects: SourcedFact[]
  worth: SourcedFact | null
  fileNote: string
  initials: string
}

export const INVESTORS: Investor[] = [
  {
    id: 'andreessen',
    name: 'Marc Andreessen',
    role: 'General partner, Andreessen Horowitz',
    countryCodes: ['US'],
    categoryIds: ['software', 'consumer', 'fintech', 'media'],
    initials: 'MA',
    fileNote: 'Public bio. Portrait on this desk is an initial plate, not a licensed photo.',
    firms: [
      {
        text: 'Andreessen Horowitz (a16z)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Marc_Andreessen',
        sourceLabel: 'Wikipedia: Marc Andreessen',
      },
    ],
    companies: [
      {
        text: 'Co-founded Netscape Communications',
        sourceUrl: 'https://en.wikipedia.org/wiki/Marc_Andreessen',
        sourceLabel: 'Wikipedia: Marc Andreessen',
      },
    ],
    investments: [
      {
        text: 'Facebook, Twitter, Groupon, Zynga, and Skype appear in published a16z / personal history summaries',
        sourceUrl: 'https://en.wikipedia.org/wiki/Andreessen_Horowitz',
        sourceLabel: 'Wikipedia: Andreessen Horowitz',
      },
    ],
    projects: [
      {
        text: 'Mosaic browser (NCSA) and Netscape Navigator',
        sourceUrl: 'https://en.wikipedia.org/wiki/Marc_Andreessen',
        sourceLabel: 'Wikipedia: Marc Andreessen',
      },
    ],
    worth: {
      text: 'Forbes publishes a live net-worth estimate; this desk does not copy a figure that goes stale.',
      sourceUrl: 'https://www.forbes.com/profile/marc-andreessen/',
      sourceLabel: 'Forbes profile',
    },
  },
  {
    id: 'hoffman',
    name: 'Reid Hoffman',
    role: 'Partner, Greylock Partners',
    countryCodes: ['US'],
    categoryIds: ['software', 'consumer', 'marketplace'],
    initials: 'RH',
    fileNote: 'Public bio. Portrait on this desk is an initial plate, not a licensed photo.',
    firms: [
      {
        text: 'Greylock Partners',
        sourceUrl: 'https://en.wikipedia.org/wiki/Reid_Hoffman',
        sourceLabel: 'Wikipedia: Reid Hoffman',
      },
    ],
    companies: [
      {
        text: 'Co-founded LinkedIn',
        sourceUrl: 'https://en.wikipedia.org/wiki/Reid_Hoffman',
        sourceLabel: 'Wikipedia: Reid Hoffman',
      },
    ],
    investments: [
      {
        text: 'Early Facebook investor; Airbnb and others listed in public Greylock / bio summaries',
        sourceUrl: 'https://en.wikipedia.org/wiki/Reid_Hoffman',
        sourceLabel: 'Wikipedia: Reid Hoffman',
      },
    ],
    projects: [
      {
        text: 'PayPal (executive) before LinkedIn',
        sourceUrl: 'https://en.wikipedia.org/wiki/Reid_Hoffman',
        sourceLabel: 'Wikipedia: Reid Hoffman',
      },
    ],
    worth: {
      text: 'Forbes publishes a live net-worth estimate; this desk does not copy a figure that goes stale.',
      sourceUrl: 'https://www.forbes.com/profile/reid-hoffman/',
      sourceLabel: 'Forbes profile',
    },
  },
  {
    id: 'meeker',
    name: 'Mary Meeker',
    role: 'General partner, Bond Capital',
    countryCodes: ['US'],
    categoryIds: ['software', 'consumer', 'fintech'],
    initials: 'MM',
    fileNote: 'Public bio. Portrait on this desk is an initial plate, not a licensed photo.',
    firms: [
      {
        text: 'Bond Capital (founded 2018)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Mary_Meeker',
        sourceLabel: 'Wikipedia: Mary Meeker',
      },
    ],
    companies: [
      {
        text: 'Kleiner Perkins (partner, internet practice) before Bond',
        sourceUrl: 'https://en.wikipedia.org/wiki/Mary_Meeker',
        sourceLabel: 'Wikipedia: Mary Meeker',
      },
    ],
    investments: [
      {
        text: 'Documented Kleiner / Bond internet investments include companies covered in her public Internet Trends work',
        sourceUrl: 'https://en.wikipedia.org/wiki/Mary_Meeker',
        sourceLabel: 'Wikipedia: Mary Meeker',
      },
    ],
    projects: [
      {
        text: 'Internet Trends report (annual, while at Kleiner Perkins and after)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Mary_Meeker',
        sourceLabel: 'Wikipedia: Mary Meeker',
      },
    ],
    worth: null,
  },
  {
    id: 'rimer',
    name: 'Danny Rimer',
    role: 'Partner, Index Ventures',
    countryCodes: ['GB', 'CH'],
    categoryIds: ['software', 'consumer', 'fintech', 'marketplace'],
    initials: 'DR',
    fileNote: 'Public bio. Portrait on this desk is an initial plate, not a licensed photo.',
    firms: [
      {
        text: 'Index Ventures (London / Geneva)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Index_Ventures',
        sourceLabel: 'Wikipedia: Index Ventures',
      },
    ],
    companies: [
      {
        text: 'Index Ventures partnership (not a personal operating company)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Danny_Rimer',
        sourceLabel: 'Wikipedia: Danny Rimer',
      },
    ],
    investments: [
      {
        text: 'Index portfolio names published on the firm site include Dropbox, Figma, Discord, and Revolut among others',
        sourceUrl: 'https://www.indexventures.com/companies/',
        sourceLabel: 'Index Ventures companies',
      },
    ],
    projects: [
      {
        text: 'Helped open Index’s London office (firm history)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Danny_Rimer',
        sourceLabel: 'Wikipedia: Danny Rimer',
      },
    ],
    worth: null,
  },
  {
    id: 'zennstrom',
    name: 'Niklas Zennström',
    role: 'Founding partner, Atomico',
    countryCodes: ['SE', 'GB'],
    categoryIds: ['software', 'consumer', 'fintech', 'climate'],
    initials: 'NZ',
    fileNote: 'Public bio. Portrait on this desk is an initial plate, not a licensed photo.',
    firms: [
      {
        text: 'Atomico',
        sourceUrl: 'https://en.wikipedia.org/wiki/Niklas_Zennstr%C3%B6m',
        sourceLabel: 'Wikipedia: Niklas Zennström',
      },
    ],
    companies: [
      {
        text: 'Co-founded Skype and Kazaa',
        sourceUrl: 'https://en.wikipedia.org/wiki/Niklas_Zennstr%C3%B6m',
        sourceLabel: 'Wikipedia: Niklas Zennström',
      },
    ],
    investments: [
      {
        text: 'Atomico publishes a public portfolio of European and global software companies',
        sourceUrl: 'https://www.atomico.com/companies/',
        sourceLabel: 'Atomico companies',
      },
    ],
    projects: [
      {
        text: 'Zennström Philanthropies (climate and human rights grantmaking)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Niklas_Zennstr%C3%B6m',
        sourceLabel: 'Wikipedia: Niklas Zennström',
      },
    ],
    worth: {
      text: 'Forbes publishes a live net-worth estimate; this desk does not copy a figure that goes stale.',
      sourceUrl: 'https://www.forbes.com/profile/niklas-zennstrom/',
      sourceLabel: 'Forbes profile',
    },
  },
  {
    id: 'hinrikus',
    name: 'Taavet Hinrikus',
    role: 'Co-founder, Plural',
    countryCodes: ['EE', 'GB'],
    categoryIds: ['fintech', 'software'],
    initials: 'TH',
    fileNote: 'Public bio. Portrait on this desk is an initial plate, not a licensed photo.',
    firms: [
      {
        text: 'Plural (with Sten Tamkivi)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Taavet_Hinrikus',
        sourceLabel: 'Wikipedia: Taavet Hinrikus',
      },
    ],
    companies: [
      {
        text: 'Co-founded Wise (formerly TransferWise)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Taavet_Hinrikus',
        sourceLabel: 'Wikipedia: Taavet Hinrikus',
      },
    ],
    investments: [
      {
        text: 'Plural lists European software and fintech companies on its public site',
        sourceUrl: 'https://www.pluralplatform.com/',
        sourceLabel: 'Plural',
      },
    ],
    projects: [
      {
        text: 'First employee at Skype before Wise',
        sourceUrl: 'https://en.wikipedia.org/wiki/Taavet_Hinrikus',
        sourceLabel: 'Wikipedia: Taavet Hinrikus',
      },
    ],
    worth: null,
  },
  {
    id: 'son',
    name: 'Masayoshi Son',
    role: 'Chairman and CEO, SoftBank Group',
    countryCodes: ['JP'],
    categoryIds: ['software', 'consumer', 'deep-tech', 'mobility'],
    initials: 'MS',
    fileNote: 'Public bio. Portrait on this desk is an initial plate, not a licensed photo.',
    firms: [
      {
        text: 'SoftBank Group; Vision Fund vehicles',
        sourceUrl: 'https://en.wikipedia.org/wiki/Masayoshi_Son',
        sourceLabel: 'Wikipedia: Masayoshi Son',
      },
    ],
    companies: [
      {
        text: 'SoftBank Group Corp.',
        sourceUrl: 'https://group.softbank/en',
        sourceLabel: 'SoftBank Group',
      },
    ],
    investments: [
      {
        text: 'Alibaba (historic), Arm, and Vision Fund holdings are documented in SoftBank filings and encyclopedic summaries',
        sourceUrl: 'https://en.wikipedia.org/wiki/SoftBank_Vision_Fund',
        sourceLabel: 'Wikipedia: SoftBank Vision Fund',
      },
    ],
    projects: [
      {
        text: 'Vision Fund I and II (late-stage technology investing)',
        sourceUrl: 'https://en.wikipedia.org/wiki/SoftBank_Vision_Fund',
        sourceLabel: 'Wikipedia: SoftBank Vision Fund',
      },
    ],
    worth: {
      text: 'Forbes publishes a live net-worth estimate; this desk does not copy a figure that goes stale.',
      sourceUrl: 'https://www.forbes.com/profile/masayoshi-son/',
      sourceLabel: 'Forbes profile',
    },
  },
  {
    id: 'anandan',
    name: 'Rajan Anandan',
    role: 'Managing director, Peak XV Partners',
    countryCodes: ['IN'],
    categoryIds: ['software', 'consumer', 'marketplace', 'fintech'],
    initials: 'RA',
    fileNote: 'Public bio. Portrait on this desk is an initial plate, not a licensed photo.',
    firms: [
      {
        text: 'Peak XV Partners (formerly Sequoia Capital India & SEA)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Rajan_Anandan',
        sourceLabel: 'Wikipedia: Rajan Anandan',
      },
    ],
    companies: [
      {
        text: 'Former VP & managing director, Google India',
        sourceUrl: 'https://en.wikipedia.org/wiki/Rajan_Anandan',
        sourceLabel: 'Wikipedia: Rajan Anandan',
      },
    ],
    investments: [
      {
        text: 'Peak XV publishes a public portfolio of India and SEA companies',
        sourceUrl: 'https://www.peakxv.com/companies/',
        sourceLabel: 'Peak XV companies',
      },
    ],
    projects: [
      {
        text: 'Google India leadership before venture investing',
        sourceUrl: 'https://en.wikipedia.org/wiki/Rajan_Anandan',
        sourceLabel: 'Wikipedia: Rajan Anandan',
      },
    ],
    worth: null,
  },
  {
    id: 'saverin',
    name: 'Eduardo Saverin',
    role: 'Co-founder, B Capital',
    countryCodes: ['SG', 'US', 'BR'],
    categoryIds: ['software', 'fintech', 'health', 'deep-tech'],
    initials: 'ES',
    fileNote: 'Public bio. Portrait on this desk is an initial plate, not a licensed photo.',
    firms: [
      {
        text: 'B Capital',
        sourceUrl: 'https://en.wikipedia.org/wiki/Eduardo_Saverin',
        sourceLabel: 'Wikipedia: Eduardo Saverin',
      },
    ],
    companies: [
      {
        text: 'Co-founded Facebook (now Meta Platforms)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Eduardo_Saverin',
        sourceLabel: 'Wikipedia: Eduardo Saverin',
      },
    ],
    investments: [
      {
        text: 'B Capital publishes funds and portfolio companies on its public site',
        sourceUrl: 'https://www.b.capital/',
        sourceLabel: 'B Capital',
      },
    ],
    projects: [
      {
        text: 'Facebook co-founder (2004)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Eduardo_Saverin',
        sourceLabel: 'Wikipedia: Eduardo Saverin',
      },
    ],
    worth: {
      text: 'Forbes publishes a live net-worth estimate; this desk does not copy a figure that goes stale.',
      sourceUrl: 'https://www.forbes.com/profile/eduardo-saverin/',
      sourceLabel: 'Forbes profile',
    },
  },
  {
    id: 'ghandour',
    name: 'Fadi Ghandour',
    role: 'Founder, Wamda Capital',
    countryCodes: ['AE', 'JO'],
    categoryIds: ['software', 'marketplace', 'fintech', 'mobility'],
    initials: 'FG',
    fileNote: 'Public bio. Portrait on this desk is an initial plate, not a licensed photo.',
    firms: [
      {
        text: 'Wamda Capital',
        sourceUrl: 'https://en.wikipedia.org/wiki/Fadi_Ghandour',
        sourceLabel: 'Wikipedia: Fadi Ghandour',
      },
    ],
    companies: [
      {
        text: 'Founded Aramex',
        sourceUrl: 'https://en.wikipedia.org/wiki/Fadi_Ghandour',
        sourceLabel: 'Wikipedia: Fadi Ghandour',
      },
    ],
    investments: [
      {
        text: 'Wamda Capital publishes MENA portfolio companies on its public site',
        sourceUrl: 'https://wamdacapital.com/',
        sourceLabel: 'Wamda Capital',
      },
    ],
    projects: [
      {
        text: 'Aramex public listing and regional logistics network',
        sourceUrl: 'https://en.wikipedia.org/wiki/Aramex',
        sourceLabel: 'Wikipedia: Aramex',
      },
    ],
    worth: null,
  },
  {
    id: 'baker',
    name: 'Rick Baker',
    role: 'Co-founder, Blackbird',
    countryCodes: ['AU'],
    categoryIds: ['software', 'deep-tech', 'climate', 'health'],
    initials: 'RB',
    fileNote: 'Public bio. Portrait on this desk is an initial plate, not a licensed photo.',
    firms: [
      {
        text: 'Blackbird (Australia)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Blackbird_Ventures',
        sourceLabel: 'Wikipedia: Blackbird Ventures',
      },
    ],
    companies: [
      {
        text: 'Blackbird partnership (venture firm)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Blackbird_Ventures',
        sourceLabel: 'Blackbird',
      },
    ],
    investments: [
      {
        text: 'Blackbird’s public portfolio includes Canva and other Australian technology companies',
        sourceUrl: 'https://en.wikipedia.org/wiki/Blackbird_Ventures',
        sourceLabel: 'Blackbird companies',
      },
    ],
    projects: [
      {
        text: 'Building an Australian early-stage fund (firm history)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Blackbird_Ventures',
        sourceLabel: 'Wikipedia: Blackbird Ventures',
      },
    ],
    worth: null,
  },
  {
    id: 'nagel',
    name: 'Christian Nagel',
    role: 'Co-founder, Earlybird',
    countryCodes: ['DE'],
    categoryIds: ['software', 'fintech', 'health', 'deep-tech'],
    initials: 'CN',
    fileNote: 'Public bio. Portrait on this desk is an initial plate, not a licensed photo.',
    firms: [
      {
        text: 'Earlybird Venture Capital',
        sourceUrl: 'https://en.wikipedia.org/wiki/Earlybird_Venture_Capital',
        sourceLabel: 'Wikipedia: Earlybird Venture Capital',
      },
    ],
    companies: [
      {
        text: 'Earlybird partnership',
        sourceUrl: 'https://earlybird.com/',
        sourceLabel: 'Earlybird',
      },
    ],
    investments: [
      {
        text: 'Earlybird publishes European portfolio companies on its public site',
        sourceUrl: 'https://earlybird.com/portfolio/',
        sourceLabel: 'Earlybird portfolio',
      },
    ],
    projects: [
      {
        text: 'Pan-European early-stage funds (Berlin / Munich / Paris, per firm site)',
        sourceUrl: 'https://earlybird.com/',
        sourceLabel: 'Earlybird',
      },
    ],
    worth: null,
  },
  {
    id: 'khosla',
    name: 'Vinod Khosla',
    role: 'Founder, Khosla Ventures',
    countryCodes: ['US'],
    categoryIds: ['climate', 'deep-tech', 'food', 'health', 'software'],
    initials: 'VK',
    fileNote: 'Public bio. Portrait on this desk is an initial plate, not a licensed photo.',
    firms: [
      {
        text: 'Khosla Ventures',
        sourceUrl: 'https://en.wikipedia.org/wiki/Vinod_Khosla',
        sourceLabel: 'Wikipedia: Vinod Khosla',
      },
    ],
    companies: [
      {
        text: 'Co-founded Sun Microsystems',
        sourceUrl: 'https://en.wikipedia.org/wiki/Vinod_Khosla',
        sourceLabel: 'Wikipedia: Vinod Khosla',
      },
    ],
    investments: [
      {
        text: 'Khosla Ventures publishes climate, food, health, and software portfolio companies',
        sourceUrl: 'https://www.khoslaventures.com/',
        sourceLabel: 'Khosla Ventures',
      },
    ],
    projects: [
      {
        text: 'Sun Microsystems (co-founder) before the venture firm',
        sourceUrl: 'https://en.wikipedia.org/wiki/Vinod_Khosla',
        sourceLabel: 'Wikipedia: Vinod Khosla',
      },
    ],
    worth: {
      text: 'Forbes publishes a live net-worth estimate; this desk does not copy a figure that goes stale.',
      sourceUrl: 'https://www.forbes.com/profile/vinod-khosla/',
      sourceLabel: 'Forbes profile',
    },
  },
  {
    id: 'green',
    name: 'Kirsten Green',
    role: 'Founder, Forerunner Ventures',
    countryCodes: ['US'],
    categoryIds: ['consumer', 'food', 'marketplace'],
    initials: 'KG',
    fileNote: 'Public bio. Portrait on this desk is an initial plate, not a licensed photo.',
    firms: [
      {
        text: 'Forerunner Ventures',
        sourceUrl: 'https://en.wikipedia.org/wiki/Kirsten_Green',
        sourceLabel: 'Wikipedia: Kirsten Green',
      },
    ],
    companies: [
      {
        text: 'Forerunner partnership (venture firm)',
        sourceUrl: 'https://www.forerunnerventures.com/',
        sourceLabel: 'Forerunner Ventures',
      },
    ],
    investments: [
      {
        text: 'Public coverage of Forerunner includes consumer companies such as Dollar Shave Club, Warby Parker, and Glossier',
        sourceUrl: 'https://en.wikipedia.org/wiki/Kirsten_Green',
        sourceLabel: 'Wikipedia: Kirsten Green',
      },
    ],
    projects: [
      {
        text: 'Building a consumer-focused early-stage fund (firm history)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Kirsten_Green',
        sourceLabel: 'Wikipedia: Kirsten Green',
      },
    ],
    worth: null,
  },
  {
    id: 'lee',
    name: 'Aileen Lee',
    role: 'Founder, Cowboy Ventures',
    countryCodes: ['US'],
    categoryIds: ['consumer', 'software', 'marketplace', 'media'],
    initials: 'AL',
    fileNote: 'Public bio. Portrait on this desk is an initial plate, not a licensed photo.',
    firms: [
      {
        text: 'Cowboy Ventures',
        sourceUrl: 'https://en.wikipedia.org/wiki/Aileen_Lee',
        sourceLabel: 'Wikipedia: Aileen Lee',
      },
    ],
    companies: [
      {
        text: 'Cowboy Ventures partnership',
        sourceUrl: 'https://www.cowboy.vc/',
        sourceLabel: 'Cowboy Ventures',
      },
    ],
    investments: [
      {
        text: 'Cowboy’s public story includes early checks in companies such as Dollar Shave Club and other consumer software firms',
        sourceUrl: 'https://en.wikipedia.org/wiki/Aileen_Lee',
        sourceLabel: 'Wikipedia: Aileen Lee',
      },
    ],
    projects: [
      {
        text: 'Coined “unicorn” for private companies valued over one billion dollars (2013 TechCrunch essay, widely cited)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Aileen_Lee',
        sourceLabel: 'Wikipedia: Aileen Lee',
      },
    ],
    worth: null,
  },
  {
    id: 'niel',
    name: 'Xavier Niel',
    role: 'Founder, Iliad; Kima Ventures',
    countryCodes: ['FR'],
    categoryIds: ['software', 'consumer', 'media', 'fintech'],
    initials: 'XN',
    fileNote: 'Public bio. Portrait on this desk is an initial plate, not a licensed photo.',
    firms: [
      {
        text: 'Kima Ventures',
        sourceUrl: 'https://en.wikipedia.org/wiki/Xavier_Niel',
        sourceLabel: 'Wikipedia: Xavier Niel',
      },
    ],
    companies: [
      {
        text: 'Founded Iliad (Free)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Xavier_Niel',
        sourceLabel: 'Wikipedia: Xavier Niel',
      },
    ],
    investments: [
      {
        text: 'Kima Ventures publishes a public list of early-stage investments',
        sourceUrl: 'https://www.kimaventures.com/',
        sourceLabel: 'Kima Ventures',
      },
    ],
    projects: [
      {
        text: 'Station F campus in Paris',
        sourceUrl: 'https://en.wikipedia.org/wiki/Station_F',
        sourceLabel: 'Wikipedia: Station F',
      },
    ],
    worth: {
      text: 'Forbes publishes a live net-worth estimate; this desk does not copy a figure that goes stale.',
      sourceUrl: 'https://www.forbes.com/profile/xavier-niel/',
      sourceLabel: 'Forbes profile',
    },
  },
  {
    id: 'wertz',
    name: 'Boris Wertz',
    role: 'Founding partner, Version One Ventures',
    countryCodes: ['CA'],
    categoryIds: ['software', 'marketplace', 'consumer', 'fintech'],
    initials: 'BW',
    fileNote: 'Public bio. Portrait on this desk is an initial plate, not a licensed photo.',
    firms: [
      {
        text: 'Version One Ventures',
        sourceUrl: 'https://en.wikipedia.org/wiki/Version_One_Ventures',
        sourceLabel: 'Wikipedia: Version One Ventures',
      },
    ],
    companies: [
      {
        text: 'AbeBooks (co-founder; acquired by Amazon)',
        sourceUrl: 'https://en.wikipedia.org/wiki/AbeBooks',
        sourceLabel: 'Wikipedia: AbeBooks',
      },
    ],
    investments: [
      {
        text: 'Version One publishes a public portfolio of software and marketplace companies',
        sourceUrl: 'https://versionone.vc/companies/',
        sourceLabel: 'Version One companies',
      },
    ],
    projects: [
      {
        text: 'AbeBooks marketplace before venture investing',
        sourceUrl: 'https://en.wikipedia.org/wiki/AbeBooks',
        sourceLabel: 'Wikipedia: AbeBooks',
      },
    ],
    worth: null,
  },
  {
    id: 'margalit',
    name: 'Erel Margalit',
    role: 'Founder, Jerusalem Venture Partners',
    countryCodes: ['IL'],
    categoryIds: ['software', 'deep-tech', 'media', 'health'],
    initials: 'EM',
    fileNote: 'Public bio. Portrait on this desk is an initial plate, not a licensed photo.',
    firms: [
      {
        text: 'Jerusalem Venture Partners (JVP)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Erel_Margalit',
        sourceLabel: 'Wikipedia: Erel Margalit',
      },
    ],
    companies: [
      {
        text: 'JVP partnership and related media / cyber holdings described in public bios',
        sourceUrl: 'https://en.wikipedia.org/wiki/Jerusalem_Venture_Partners',
        sourceLabel: 'Wikipedia: Jerusalem Venture Partners',
      },
    ],
    investments: [
      {
        text: 'JVP publishes portfolio companies across enterprise software, cyber, and media',
        sourceUrl: 'https://www.jvpvc.com/',
        sourceLabel: 'JVP',
      },
    ],
    projects: [
      {
        text: 'JVP Media Quarter in Jerusalem (firm / campus history)',
        sourceUrl: 'https://en.wikipedia.org/wiki/Jerusalem_Venture_Partners',
        sourceLabel: 'Wikipedia: Jerusalem Venture Partners',
      },
    ],
    worth: null,
  },
  {
    id: 'karabey',
    name: 'Ali Karabey',
    role: 'Managing partner, 212',
    countryCodes: ['TR'],
    categoryIds: ['software', 'fintech', 'marketplace', 'consumer'],
    initials: 'AK',
    fileNote: 'Public bio. Portrait on this desk is an initial plate, not a licensed photo.',
    firms: [
      {
        text: '212 (Istanbul)',
        sourceUrl: 'https://www.212.vc/',
        sourceLabel: '212',
      },
    ],
    companies: [
      {
        text: '212 partnership (venture firm)',
        sourceUrl: 'https://www.212.vc/',
        sourceLabel: '212',
      },
    ],
    investments: [
      {
        text: '212 publishes a public portfolio of Turkey and regional technology companies',
        sourceUrl: 'https://www.212.vc/',
        sourceLabel: '212',
      },
    ],
    projects: [
      {
        text: 'Early-stage funds based in Istanbul (firm site)',
        sourceUrl: 'https://www.212.vc/',
        sourceLabel: '212',
      },
    ],
    worth: null,
  },
]
