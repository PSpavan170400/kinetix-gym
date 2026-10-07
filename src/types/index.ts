export interface Program {
  id: string;
  name: string;
  category: 'strength' | 'hypertrophy' | 'functional' | 'hiit' | 'boxing' | 'mobility' | 'recovery';
  tagline: string;
  description: string;
  duration: string;
  intensity: 'Medium' | 'High' | 'Elite';
  coach: string;
  image: string;
  features: string[];
  metrics: {
    caloriesBurn: string;
    focus: string;
    level: string;
  };
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  credentials: string[];
  bio: string;
  image: string;
  quote: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  badge?: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  popular?: boolean;
  features: string[];
  exclusivePerks: string[];
}

export interface Facility {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specifications: string[];
  capacity: string;
}

export interface ClassSession {
  id: string;
  time: string;
  name: string;
  category: 'strength' | 'cardio' | 'hiit' | 'mobility' | 'boxing';
  coach: string;
  room: string;
  duration: string;
  spotsTotal: number;
  spotsLeft: number;
}

export interface DaySchedule {
  day: string;
  shortDay: string;
  classes: ClassSession[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  metric: string;
  quote: string;
  program: string;
  duration: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'membership' | 'training' | 'facilities' | 'beginners';
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  visitType: 'day_pass' | 'facility_tour' | 'coach_consultation' | 'membership_trial';
  preferredDate: string;
  primaryGoal: 'strength' | 'fat_loss' | 'athletic_performance' | 'longevity' | 'rehabilitation';
  notes?: string;
}
