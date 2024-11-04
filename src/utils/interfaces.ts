export interface Doctor {
  id_doctor: number;
  name: string;
  specialty: string;
  icon: string;
}

export interface Service {
  id_service: number;
  service?: string;
  description?: string,
  price: number;
}

export interface Appointment {
  id_appointment: number;
  service: string;
  doctor: string;
  specialty: string;
  booking_date: string;
  booking_hour: string;
}

export interface UserProfile {
  name: string;
  email: string;
}

export interface Booking {
  id_doctor: number;
  id_service: number;
  booking_date: string;
  booking_hour: string;
}