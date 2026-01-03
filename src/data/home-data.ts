import { Heart, Users, PawPrint, Home as IconHome, Building2 } from "lucide-react";

export interface MetricElement {
  IconComponent: React.ElementType;
  value: string;
  label: string;
  iconColorClass: string;
}

export const METRIC_CARD_ELEMENTS: MetricElement[] = [
  {
    IconComponent: Building2,
    value: "500+",
    label: "Rescatistas",
    iconColorClass: "text-cyan-300",
  },
  {
    IconComponent: Heart,
    value: "450+",
    label: "Adoptados",
    iconColorClass: "text-pink-300",
  },
  {
    IconComponent: Users,
    value: "50+",
    label: "Voluntarios",
    iconColorClass: "text-blue-300",
  },
  {
    IconComponent: PawPrint,
    value: "30",
    label: "Disponibles",
    iconColorClass: "text-green-300",
  },
];

export interface Dog {
  id: string;
  name: string;
  age: string;
  size: string;
  breed: string;
  adoptionStatus: "En adopción" | "Adoptado" | "Reservado";
  image: string;
  description: string;
  color?: string; // Added for filtering
  distance?: number; // Added for location simulation
  shelter?: {
    id: string;
    name: string;
    logo?: string;
  };
}

export const DOGS: Dog[] = [
  {
    id: "1",
    name: "Luna",
    age: "2 años",
    size: "Mediano",
    breed: "Mestizo",
    adoptionStatus: "En adopción",
    image:
      "https://images.unsplash.com/photo-1706745262357-5ecaa3154433?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcHVwcHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE4OTU4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Luna es una perrita muy cariñosa y juguetona, perfecta para familias con niños.",
    color: "Blanco",
    distance: 2.5,
    shelter: {
      id: "refugio-san-roque",
      name: "Refugio San Roque",
    },
  },
  {
    id: "2",
    name: "Max",
    age: "3 años",
    size: "Grande",
    breed: "Golden Retriever",
    adoptionStatus: "Adoptado",
    image:
      "https://images.unsplash.com/photo-1689185083033-fd8512790d29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBkb2d8ZW58MXx8fHwxNzYxODI2NTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Max es un perro tranquilo y leal, ideal para personas activas que disfruten de paseos.",
    color: "Dorado",
    distance: 5.0,
    shelter: {
      id: "huellitas-felices",
      name: "Huellitas Felices",
    },
  },
  {
    id: "3",
    name: "Bella",
    age: "1 año",
    size: "Pequeño",
    breed: "Beagle",
    adoptionStatus: "Reservado",
    image:
      "https://images.unsplash.com/photo-1631048905843-88f82fba8fd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiZWFnbGUlMjBkb2d8ZW58MXx8fHwxNzYxOTI4NzE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Bella es muy energética y le encanta jugar. Perfecta para hogares con espacio.",
    color: "Tricolor",
    distance: 1.2,
    shelter: {
      id: "refugio-san-roque",
      name: "Refugio San Roque",
    },
  },
  {
    id: "4",
    name: "Rocky",
    age: "4 años",
    size: "Grande",
    breed: "Husky",
    adoptionStatus: "En adopción",
    image:
      "https://images.unsplash.com/photo-1590419690008-905895e8fe0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxodXNreSUyMGRvZ3xlbnwxfHx8fDE3NjE5MjIwODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Rocky es un perro noble y protector, ideal para personas con experiencia.",
    color: "Gris",
    distance: 10.5,
    shelter: {
      id: "amigos-cuatro-patas",
      name: "Amigos de Cuatro Patas",
    },
  },
  {
    id: "5",
    name: "Coco",
    age: "2 años",
    size: "Pequeño",
    breed: "Mestizo",
    adoptionStatus: "En adopción",
    image:
      "https://images.unsplash.com/photo-1710530911048-dd0acc539612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGRvZyUyMHNoZWx0ZXJ8ZW58MXx8fHwxNzYxOTMxMzAyfDA&lib=rb-4.1.0&q=80&w=1080",
    description:
      "Coco es muy dulce y se lleva bien con otros perros. Ideal para cualquier hogar.",
    color: "Café",
    distance: 3.8,
    shelter: {
      id: "huellitas-felices",
      name: "Huellitas Felices",
    },
  },
  {
    id: "6",
    name: "Charlie",
    age: "5 años",
    size: "Mediano",
    breed: "Mestizo",
    adoptionStatus: "En adopción",
    image:
      "https://images.unsplash.com/photo-1641349067134-245df2efdc95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxoYXBweSUyMHJlc2N1ZSUyMGRvZ3xlbnwxfHx8fDE3NjE5MzEzMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Charlie es un perro maduro y calmado, perfecto para personas mayores o tranquilas.",
    color: "Negro",
    distance: 0.8,
    shelter: {
      id: "rescate-animal",
      name: "Rescate Animal",
    },
  },
];

export interface SuccessStory {
  dogName: string;
  ownerName: string;
  story: string;
  image: string;
  date: string;
  shelter?: {
    id: string;
    name: string;
  };
}

export interface Shelter {
  id: string;
  name: string;
  logo: string;
  image: string;
  rescuedCount: number;
  location: string;
  state: string; // Added state for filtering
  description: string;
  mission: string;
  contactEmail: string;
  contactPhone: string;
  urgentNeeds?: string;
}

export const SHELTERS: Shelter[] = [
  {
    id: "refugio-san-roque",
    name: "Refugio San Roque",
    logo: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=200&h=200&fit=crop",
    image:
      "https://images.unsplash.com/photo-1444212477490-ca407925329e?q=80&w=1080&fit=crop",
    rescuedCount: 45,
    location: "CDMX, México",
    state: "CDMX",
    description:
      "Dedicados al rescate y rehabilitación de perros en situación de calle desde hace 10 años.",
    mission:
      "Nuestra misión es erradicar el abandono y fomentar la adopción responsable a través de la educación y el rescate activo.",
    contactEmail: "contacto@sanroque.org",
    contactPhone: "+52 55 9876 5432",
    urgentNeeds: "Alimento para cachorros y cobijas.",
  },
  {
    id: "huellitas-felices",
    name: "Huellitas Felices",
    logo: "https://images.unsplash.com/photo-1556227191-d24277708304?q=80&w=200&h=200&fit=crop",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1080&fit=crop",
    rescuedCount: 32,
    location: "Guadalajara, Jalisco",
    state: "Jalisco",
    description:
      "Un hogar temporal lleno de amor para aquellos que no tienen voz.",
    mission:
      "Brindar atención médica y emocional a perros rescatados, preparándolos para encontrar su familia definitiva.",
    contactEmail: "hola@huellitasfelices.org",
    contactPhone: "+52 33 1234 5678",
    urgentNeeds: "Tratamientos para desparasitación.",
  },
  {
    id: "amigos-cuatro-patas",
    name: "Amigos de Cuatro Patas",
    logo: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=200&h=200&fit=crop",
    image:
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1080&fit=crop",
    rescuedCount: 28,
    location: "Monterrey, NL",
    state: "Nuevo León",
    description:
      "Comprometidos con el bienestar animal y la búsqueda de hogares amorosos.",
    mission:
      "Crear una comunidad de rescatistas unidos para salvar vidas y promover leyes de protección animal.",
    contactEmail: "info@amigoscuatropatas.mx",
    contactPhone: "+52 81 8765 4321",
  },
  {
    id: "rescate-animal",
    name: "Rescate Animal",
    logo: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=200&h=200&fit=crop",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1080&fit=crop",
    rescuedCount: 15,
    location: "Puebla, Puebla",
    state: "Puebla",
    description: "Pequeño pero con gran corazón, rescatando perritos en Puebla.",
    mission: "Convertir cada historia de maltrato en una de felicidad.",
    contactEmail: "contacto@rescateanimal.mx",
    contactPhone: "+52 22 1234 5678",
  },
  {
    id: "caninos-911",
    name: "Caninos 911",
    logo: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=200&h=200&fit=crop",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1080&fit=crop",
    rescuedCount: 60,
    location: "Villahermosa, Tabasco",
    state: "Tabasco",
    description: "El refugio más grande de Tabasco, salvando vidas desde hace años.",
    mission: "Nuestra prioridad es el rescate de perros en situaciones críticas de maltrato o abandono.",
    contactEmail: "ayuda@caninos911.org",
    contactPhone: "+52 993 123 4567",
    urgentNeeds: "Apoyo para cirugías ortopédicas.",
  },
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    dogName: "Toby",
    ownerName: "Familia Rodríguez",
    story:
      "Toby llegó al refugio en condiciones difíciles, pero hoy es parte de una familia amorosa. Los Rodríguez no pueden imaginar su vida sin él.",
    image:
      "https://images.unsplash.com/photo-1654053284918-42dadb960669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBhZG9wdGlvbiUyMGZhbWlseXxlbnwxfHx8fDE3NjE5MzEzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "Septiembre 2024",
    shelter: {
      id: "huellitas-felices",
      name: "Huellitas Felices",
    },
  },
  {
    dogName: "Nina",
    ownerName: "María González",
    story:
      "Nina fue rescatada de la calle con múltiples heridas. Después de su recuperación, encontró un hogar lleno de amor donde ahora vive feliz.",
    image:
      "https://images.unsplash.com/photo-1700665537604-412e89a285c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBzaGVsdGVyJTIwdm9sdW50ZWVyfGVufDF8fHx8MTc2MTg5NTg2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "Agosto 2024",
    shelter: {
      id: "refugio-san-roque",
      name: "Refugio San Roque",
    },
  },
];

export const CONTACT_INFO = {
  phone: "+52 55 1234 5678",
  email: "contacto@patitasfelices.org",
  adoptionEmail: "adopciones@patitasfelices.org",
  location: "Ciudad de México, CDMX",
};
