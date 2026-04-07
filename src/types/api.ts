// Respuesta genérica de la API
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  errors?: Array<{ field: string; message: string }>;
}

export type AdoptionStatus = 'En adopción' | 'Adoptado' | 'Reservado';

export interface Dog {
  id: string;
  name: string;
  age: string;
  size: string;
  breed: string;
  adoptionStatus: AdoptionStatus;
  image: string;
  description: string;
  color: string | null;
  distance: number | null;
  shelterId: string | null;
  shelter?: Shelter;
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
  urgentNeeds: string | null;
  dogs?: Dog[];
}

export interface SuccessStory {
  id: string;
  dogName: string;
  ownerName: string;
  story: string;
  image: string;
  date: string;
  shelterId: string | null;
  shelter?: Shelter;
}
