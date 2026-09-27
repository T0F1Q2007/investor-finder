export type Category = {
  id: string
  label: string
  aliases: string[]
  blurb: string
}

export const CATEGORIES: Category[] = [
  {
    id: 'climate',
    label: 'Climate',
    aliases: ['cleantech', 'energy', 'carbon'],
    blurb: 'Power, carbon, and physical climate tools.',
  },
  {
    id: 'consumer',
    label: 'Consumer',
    aliases: ['b2c', 'consumer internet', 'social'],
    blurb: 'Products people buy or use every week.',
  },
  {
    id: 'deep-tech',
    label: 'Deep tech',
    aliases: ['deeptech', 'hardware', 'semiconductor', 'robotics'],
    blurb: 'Long-cycle science and hardware.',
  },
  {
    id: 'fintech',
    label: 'Fintech',
    aliases: ['finance', 'payments', 'banking', 'crypto'],
    blurb: 'Money movement, credit, and markets software.',
  },
  {
    id: 'food',
    label: 'Food',
    aliases: ['agritech', 'agriculture', 'foodtech'],
    blurb: 'Farms, kitchens, and food logistics.',
  },
  {
    id: 'health',
    label: 'Health',
    aliases: ['biotech', 'medtech', 'healthcare'],
    blurb: 'Clinics, diagnostics, and life science tools.',
  },
  {
    id: 'marketplace',
    label: 'Marketplace',
    aliases: ['two sided', 'platform', 'gig'],
    blurb: 'Two-sided markets and logistics platforms.',
  },
  {
    id: 'media',
    label: 'Media',
    aliases: ['content', 'games', 'entertainment'],
    blurb: 'Studios, games, and distribution.',
  },
  {
    id: 'mobility',
    label: 'Mobility',
    aliases: ['auto', 'logistics', 'transport'],
    blurb: 'Vehicles, freight, and movement software.',
  },
  {
    id: 'software',
    label: 'Software',
    aliases: ['saas', 'b2b', 'enterprise', 'devtools'],
    blurb: 'B2B tools sold to teams.',
  },
]
