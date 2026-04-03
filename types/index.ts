export interface Program {
  num: string;
  ghost: string;
  name: string;
  desc: string;
}

export interface TimelineItem {
  time: string;
  name: string;
  desc: string;
}

export interface Ticket {
  tier: string;
  name: string;
  price: string;
  perks: string[];
  featured: boolean;
}

export interface SponsorTier {
  name: string;
  amount: string;
  slots: number;
}
