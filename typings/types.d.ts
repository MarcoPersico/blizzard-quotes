import { ReactNode } from 'react';

export interface NavigationProps {
  onMenuClicked: () => void;
  onItemSelected: () => void;
  isMenuVisible: boolean;
}

interface SectionData {
  title: string | undefined;
  background: string;
  type: 'blizzard' | 'warcraft' | 'overwatch' | 'diablo' | 'starcraft';
}

export interface QuoteSectionContainerProps {
  data: SectionData;
}

export interface QuoteSectionProps extends SectionData {
  isLoading: boolean;
  onLoad: () => void;
  quoteData: Quote | null;
  error: string | null;
}

export interface CardProps {
  header: ReactNode;
  body: ReactNode;
  footer: ReactNode;
  loader: ReactNode;
}

export interface Quote {
  id: number;
  quote: string;
  author: string;
  type: number;
}
