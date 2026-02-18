export interface Dog {
  id: string;
  name: string;
  age: string;
  size: string;
  breed: string;
  adoptionStatus: 'En adopción' | 'Adoptado' | 'Reservado';
  image: string;
  description: string;
  color?: string;
  distance?: number;
  shelterId: string;
}

export interface Shelter {
  id: string;
  name: string;
  logo: string;
  image: string;
  rescuedCount: number;
  location: string;
  state: string;
  description: string;
  mission: string;
  contactEmail: string;
  contactPhone: string;
  urgentNeeds?: string;
}

export interface SuccessStory {
  id: string;
  dogName: string;
  ownerName: string;
  story: string;
  image: string;
  date: string;
  shelterId?: string;
}
