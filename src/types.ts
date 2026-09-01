export interface Monument {
  name: string;
  type: string;
  century: string;
  location: string;
  isUnesco: boolean;
  image: string;
  description: string;
  coordinates: [number, number]; // [lat, lng]
}

export interface ArtAndDance {
  name: string;
  type: 'Dance' | 'Music' | 'Theatre' | 'Martial Art';
  origin: string;
  description: string;
  instruments?: string[];
  costumeHighlight?: string;
  image?: string;
  giTag?: boolean;
}

export interface CuisineItem {
  name: string;
  category: 'Vegetarian' | 'Non-Vegetarian' | 'Dessert' | 'Beverage' | 'Street Food';
  description: string;
  keyIngredients: string[];
  giTag?: boolean;
}

export interface Festival {
  name: string;
  timing: string;
  significance: string;
  keyRitual: string;
  highlight: string;
}

export interface CraftAndAttire {
  textiles: string[];
  handicrafts: string[];
  traditionalMenAttire: string;
  traditionalWomenAttire: string;
  giTaggedCrafts?: string[];
}

export interface HistoryMilestone {
  era: string;
  title: string;
  description: string;
}

export interface StateHeritage {
  id: string;
  name: string;
  capital: string;
  region: 'North' | 'South' | 'West' | 'East' | 'Central' | 'North-East';
  coordinates: [number, number]; // [lat, lng]
  zoomLevel: number;
  bannerImage: string;
  tagline: string;
  overview: string;
  officialLanguage: string;
  spokenLanguages: string[];
  stateAnimal?: string;
  stateBird?: string;
  monuments: Monument[];
  artAndDance: ArtAndDance[];
  cuisines: CuisineItem[];
  festivals: Festival[];
  craftsAndAttire: CraftAndAttire;
  historyTimeline: HistoryMilestone[];
  funFact: string;
}

export type MapLayerStyle = 'streets' | 'satellite' | 'terrain' | 'heritage';

export type HeritageTab = 
  | 'overview' 
  | 'monuments' 
  | 'dance_music' 
  | 'cuisines' 
  | 'festivals' 
  | 'crafts_attire' 
  | 'history' 
  | 'ai_guide';
