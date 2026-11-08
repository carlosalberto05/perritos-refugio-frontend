import { create } from "zustand";

export type AdoptionStatus =
  | "solicitud_recibida"
  | "en_revision"
  | "entrevista_pendiente"
  | "visita_agendada"
  | "aprobada"
  | "completada";

export interface AdoptionRequest {
  id: string;
  dogId: string;
  dogName: string;
  dogImage: string;
  dogBreed: string;
  shelterName: string;
  applicationDate: string;
  status: AdoptionStatus;
  statusLabel: string;
  currentStep: number;
  totalSteps: number;
  nextActionNote?: string;
}

export interface Contribution {
  id: string;
  type: "economica" | "especie" | "apadrinamiento";
  title: string;
  targetName: string; // Nombre del refugio o perrito
  targetImage?: string;
  date: string;
  details: string; // "$500 MXN", "15kg Alimento adultos + 3 mantas", "$300 MXN / mes"
  status: "Completado" | "En camino" | "Activo";
  impactMessage?: string;
}

export interface UserPreferences {
  phone: string;
  city: string;
  address: string;
  housingType: "Casa" | "Departamento" | "Finca";
  hasPets: boolean;
  interests: ("adoptar" | "apadrinar" | "donar_especie" | "donar_dinero" | "voluntariado")[];
}

interface UserDashboardState {
  activeAdoptions: AdoptionRequest[];
  contributions: Contribution[];
  preferences: UserPreferences;
  // Control para alternar entre vista con datos y vista vacía motivacional (Modo Demo)
  isDemoEmptyMode: boolean;
  
  // Acciones
  toggleDemoEmptyMode: () => void;
  updatePreferences: (updates: Partial<UserPreferences>) => void;
  addAdoptionRequest: (request: AdoptionRequest) => void;
  addContribution: (contribution: Contribution) => void;
}

const mockAdoptions: AdoptionRequest[] = [
  {
    id: "adopt-101",
    dogId: "5",
    dogName: "Coco",
    dogImage:
      "https://images.unsplash.com/photo-1710530911048-dd0acc539612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHx8fHNtYWxsJTIwZG9nJTIwc2hlbHRlcnxlbnwxfHx8fDE3NjE5MzEzMDJ8MA&lib=rb-4.1.0&q=80&w=1080",
    dogBreed: "Mestizo",
    shelterName: "Huellitas Felices",
    applicationDate: "12 de Agosto, 2026",
    status: "entrevista_pendiente",
    statusLabel: "Entrevista Agendada",
    currentStep: 2,
    totalSteps: 5,
    nextActionNote: "Llamada virtual agendada para el Viernes 18 de Agosto a las 4:00 PM con la rescatista Laura.",
  },
];

const mockContributions: Contribution[] = [
  {
    id: "contrib-1",
    type: "apadrinamiento",
    title: "Apadrinamiento Mensual",
    targetName: "Luna",
    targetImage:
      "https://images.unsplash.com/photo-1591160690555-5debfba289f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHx8fHB1cHB5JTIwZG9nfGVufDF8fHwxNzYxOTMxMzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "1 de Agosto, 2026",
    details: "$350 MXN / mes",
    status: "Activo",
    impactMessage: "¡Luna recibió sus vacunas de refuerzo y alimento especializado este mes gracias a tu padrinazgo! 🐾",
  },
  {
    id: "contrib-2",
    type: "especie",
    title: "Donación en Especie",
    targetName: "Refugio San Roque",
    date: "28 de Julio, 2026",
    details: "20kg alimento cachorros + 4 cobijas térmicas",
    status: "Completado",
    impactMessage: "Entregado directamente en las instalaciones de la CDMX.",
  },
  {
    id: "contrib-3",
    type: "economica",
    title: "Donación Económica Directa",
    targetName: "Caninos 911",
    date: "15 de Junio, 2026",
    details: "$500 MXN",
    status: "Completado",
    impactMessage: "Fondo utilizado para cirugía veterinaria de emergencia.",
  },
];

export const useUserDashboardStore = create<UserDashboardState>((set) => ({
  activeAdoptions: mockAdoptions,
  contributions: mockContributions,
  preferences: {
    phone: "+52 55 1234 5678",
    city: "Ciudad de México, CDMX",
    address: "Av. Insurgentes Sur 1200, Col. Del Valle",
    housingType: "Casa",
    hasPets: true,
    interests: ["adoptar", "apadrinar", "donar_especie"],
  },
  isDemoEmptyMode: false,

  toggleDemoEmptyMode: () =>
    set((state) => ({ isDemoEmptyMode: !state.isDemoEmptyMode })),

  updatePreferences: (updates) =>
    set((state) => ({
      preferences: { ...state.preferences, ...updates },
    })),

  addAdoptionRequest: (request) =>
    set((state) => ({
      activeAdoptions: [request, ...state.activeAdoptions],
    })),

  addContribution: (contribution) =>
    set((state) => ({
      contributions: [contribution, ...state.contributions],
    })),
}));
