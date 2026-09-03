export interface Monument {
  name: string;
  type: string;
  century: string;
  location: string;
  isUnesco: boolean;
  image: string;
  description: string;
  coordinates: [number, number]; // [lat, lng]
  id?: string;
  shortDesc?: string;
  detailedDescription?: string;
  imagePlaceholder?: string;
  highlights?: string[];
}

export interface ArtAndDance {
  name: string;
  type: 'Dance' | 'Music' | 'Theatre' | 'Martial Art' | 'Painting' | 'Folk Art';
  origin: string;
  description: string;
  id?: string;
  shortDesc?: string;
  detailedDescription?: string;
  highlights?: string[];
  imagePlaceholder?: string;
  instruments?: string[];
  costumeHighlight?: string;
  image?: string;
  giTag?: boolean;
  videoPreviewQuery?: string;
  audioTrackTitle?: string;
  audioMood?: string;
}

export interface CuisineItem {
  name: string;
  category: 'Vegetarian' | 'Non-Vegetarian' | 'Dessert' | 'Beverage' | 'Street Food';
  description: string;
  keyIngredients: string[];
  giTag?: boolean;
  id?: string;
  shortDesc?: string;
  detailedDescription?: string;
  highlights?: string[];
  origin?: string;
  flavorProfile?: string;
  bestPairedWith?: string;
  image?: string;
  imageUrl?: string;
  imagePlaceholder?: string;
  subcategory?: string;
}

export interface AttireItem {
  id: string;
  name: string;
  shortDesc: string;
  detailedDescription: string;
  highlights: string[];
  imagePlaceholder?: string;
  image?: string;
  origin?: string;
}

export interface Festival {
  name: string;
  timing: string;
  significance: string;
  keyRitual: string;
  highlight: string;
  image?: string;
  imageUrl?: string;
  month?: string;
  description?: string;
}

export interface CraftAndAttire {
  textiles: string[];
  handicrafts: string[];
  traditionalMenAttire: string;
  traditionalWomenAttire: string;
  traditionalMenAttireImage?: string;
  traditionalWomenAttireImage?: string;
  textileImages?: string[];
  handicraftImages?: string[];
  image?: string;
  images?: string[];
  giTaggedCrafts?: string[];
  attireItems?: AttireItem[];
}

export interface HistoryMilestone {
  era: string;
  title: string;
  description: string;
  image?: string;
  imageUrl?: string;
}

export interface StateHeritage {
  id: string;
  name: string;
  stateCode?: string;
  capital: string;
  region: 'North' | 'South' | 'West' | 'East' | 'Central' | 'North-East';
  coordinates: [number, number]; // [lat, lng]
  zoomLevel: number;
  bannerImage: string;
  tagline: string;
  overview: string;
  detailedDescription?: string;
  keyFacts?: string[];
  officialLanguage: string;
  spokenLanguages: string[];
  stateAnimal?: string;
  stateBird?: string;
  monuments: Monument[];
  artAndDance: ArtAndDance[];
  cuisines: CuisineItem[];
  festivals: Festival[];
  craftsAndAttire: CraftAndAttire;
  crafts?: {
    name: string;
    description: string;
    giTag?: boolean;
  }[];
  traditionalAttire?: {
    name: string;
    description: string;
    men: string;
    women: string;
    image?: string;
    imagePlaceholder?: string;
  };
  historyTimeline: HistoryMilestone[];
  historicalEras?: {
    era: string;
    period: string;
    description: string;
  }[];
  history?: string;
  funFact: string;
  folkStory?: {
    title: string;
    synopsis: string;
    characters: string[];
    moralOrSignificance: string;
  };
  folkMusicSnippet?: {
    songName: string;
    meaning: string;
    style: string;
    primaryInstrument: string;
  };
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
  | 'folk_lore'
  | 'ai_guide';

export type AppView = 
  | 'home'
  | 'map'
  | 'state_detail'
  | 'timeline'
  | 'heritage_risk'
  | 'ask_bharat'
  | 'festivals'
  | 'quiz';

// Timeline types
export interface TimelineEra {
  id: string;
  name: string;
  period: string;
  tagline: string;
  summary: string;
  bgGradient: string;
  architecture: {
    title: string;
    description: string;
    keyExamples: string[];
    image: string;
  };
  artAndCraft: {
    title: string;
    description: string;
    techniques: string[];
    image: string;
  };
  literatureAndPhilosophy: {
    title: string;
    description: string;
    notableWorks: string[];
  };
  scienceAndInventions: {
    title: string;
    description: string;
    breakthroughs: string[];
  };
  clothingAndAttire: {
    title: string;
    description: string;
    fabrics: string[];
  };
  musicAndPerformingArts: {
    title: string;
    description: string;
    traditions: string[];
  };
  religiousTraditions: {
    title: string;
    description: string;
    customs: string[];
  };
  historicalObjects: {
    name: string;
    significance: string;
    material: string;
    foundLocation: string;
  }[];
}

// Endangered Instruments & Traditions
export interface RareInstrument {
  id: string;
  name: string;
  originRegion: string;
  category: 'String (Tata)' | 'Wind (Sushira)' | 'Percussion (Avanaddha)' | 'Solid (Ghana)';
  description: string;
  structureAndMaking: string;
  whyEndangered: string;
  acousticNote: string;
  frequencyRange: string;
  soundType: 'veena' | 'esraj' | 'ravanhatha' | 'surbahar' | 'kamaicha' | 'yazh' | 'pung' | 'dilruba' | 'shehnai';
  image: string;
}

export interface VanishingTradition {
  id: string;
  name: string;
  type: 'Craft' | 'Painting / Visual Art' | 'Textile' | 'Performing Art' | 'Language / Script' | 'Ritual Practice';
  originState: string;
  region: string;
  history: string;
  whoPractices: string;
  howMade: string;
  challengesFaced: string;
  howYouthCanHelp: string[];
  image: string;
  status: 'Critical' | 'Vulnerable' | 'Endangered';
  activeArtisansEstimated: string;
}

export interface AdoptedTraditionRecord {
  id: string;
  traditionId: string;
  traditionName: string;
  studentName: string;
  studentRole: string;
  dateAdopted: string;
  notes: string;
  artworkDataUrl?: string;
  interviewNotes?: string;
  pledgeChecked: boolean;
}

// Festival Calendar Item
export interface DetailedFestival {
  id: string;
  name: string;
  monthIndex: number; // 0 = Jan, 11 = Dec
  monthName: string;
  lunarOrGregorianDate: string;
  primaryStates: string[];
  tagline: string;
  historyAndOrigin: string;
  culturalSignificance: string;
  traditionalFood: {
    name: string;
    description: string;
  }[];
  traditionalClothing: string;
  musicAndPrayers: string;
  decorationsAndArt: string;
  image: string;
  category: 'Harvest' | 'Spiritual / Devotional' | 'Seasonal' | 'National / Cultural';
}

// State Quiz Question
export interface StateQuizQuestion {
  id: string;
  stateId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: 'Monuments' | 'Dance & Music' | 'Cuisine' | 'History' | 'Festivals' | 'Handicrafts';
}

