export type Data = {
    name: string;
    url: string;
  }
  
  export type Details = {
    sprites: { front_default: string };
    name: string;
    height: number;
    weight: number;
    types: Slot[];
    order: number;
  }
  
  type Slot = {
    slot: number;
    type: Type;
  }
  
  type Type = {
    name: string;
    url: string;
  }
  