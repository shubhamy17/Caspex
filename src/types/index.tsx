// Interface representing a character with basic details
export interface Character {
    id: number;
    name: string;
    image: string;
  }
  
// Interface representing an episode with its details and associated characters
export interface Episode {
    id: number;
    name: string;
    episode: string;
    characters: string[];
  }
