export type ActiveSection = 'inicio' | 'nosotros' | 'soluciones' | 'tecnologia' | 'contacto';

export interface ContactFormData {
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

export type ModalType = 'privacy' | 'terms' | 'solution-detail' | null;

export interface SolutionDetail {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  extendedDesc: string;
}
