import { Heart, Users, PawPrint, Home as IconHome } from "lucide-react";

export interface MetricElement {
  IconComponent: React.ElementType;
  value: string;
  label: string;
  iconColorClass: string;
}

export const METRIC_CARD_ELEMENTS: MetricElement[] = [
  {
    IconComponent: IconHome,
    value: "500+",
    label: "Rescatados",
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
  },
];

export interface SuccessStory {
  dogName: string;
  ownerName: string;
  story: string;
  image: string;
  date: string;
}

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    dogName: "Toby",
    ownerName: "Familia Rodríguez",
    story:
      "Toby llegó al refugio en condiciones difíciles, pero hoy es parte de una familia amorosa. Los Rodríguez no pueden imaginar su vida sin él.",
    image:
      "https://images.unsplash.com/photo-1654053284918-42dadb960669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBhZG9wdGlvbiUyMGZhbWlseXxlbnwxfHx8fDE3NjE5MzEzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "Adoptado en Septiembre 2024",
  },
  {
    dogName: "Nina",
    ownerName: "María González",
    story:
      "Nina fue rescatada de la calle con múltiples heridas. Después de su recuperación, encontró un hogar lleno de amor donde ahora vive feliz.",
    image:
      "https://images.unsplash.com/photo-1700665537604-412e89a285c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYWwlMjBzaGVsdGVyJTIwdm9sdW50ZWVyfGVufDF8fHx8MTc2MTg5NTg2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "Adoptado en Agosto 2024",
  },
];

export const CONTACT_INFO = {
  phone: "+52 55 1234 5678",
  email: "contacto@patitasfelices.org",
  adoptionEmail: "adopciones@patitasfelices.org",
  location: "Ciudad de México, CDMX",
};
