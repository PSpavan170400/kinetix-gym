import { Program, Trainer, MembershipPlan, Facility, DaySchedule, Testimonial, FAQItem } from '../types';

export const PROGRAMS: Program[] = [
  {
    id: 'prog-strength',
    name: 'Olympic Strength & Barbell',
    category: 'strength',
    tagline: 'Pure maximal power and neural recruitment.',
    description: 'Periodized barbell protocols designed to maximize your squat, bench, deadlift, and clean. Emphasizes force curve optimization, velocity-based training metrics, and CNS conditioning.',
    duration: '75 min',
    intensity: 'Elite',
    coach: 'Marcus Vance',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    features: ['Eleiko Competition Plates & Bars', 'Linear Velocity Transducer Tracking', '1-on-1 Biomechanical Video Review'],
    metrics: {
      caloriesBurn: '600–750 kcal',
      focus: 'CNS Neural Drive & Force',
      level: 'Intermediate to Advanced'
    }
  },
  {
    id: 'prog-hypertrophy',
    name: 'Mechanical Hypertrophy',
    category: 'hypertrophy',
    tagline: 'Scientific muscle architecture and volume control.',
    description: 'Evidence-based muscle building utilizing mechanical tension, standardized range of motion, and metabolic stress across tailored resistance profiles.',
    duration: '60 min',
    intensity: 'High',
    coach: 'Elena Rostova',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
    features: ['Prime & Arsenal Strength Pin-Loaded Units', 'Tension Angle Modulation', 'Intra-Workout Intra-Set Fatigue Audits'],
    metrics: {
      caloriesBurn: '550–650 kcal',
      focus: 'Contractile Tissue Mass',
      level: 'All Levels'
    }
  },
  {
    id: 'prog-functional',
    name: 'Athletic Conditioning & Turf',
    category: 'functional',
    tagline: 'Multi-planar power, agility, and rotational torque.',
    description: 'Move like a Tier-1 athlete. Sled sprints, medicine ball rotary throws, kettlebell complexes, and plyometrics on our 40-meter indoor turf.',
    duration: '50 min',
    intensity: 'High',
    coach: 'Tariq Al-Mansoor',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    features: ['40m High-Traction Sprint Turf', 'Heavy Torque Prowler Sleds', 'Keiser Pneumatic Cable Systems'],
    metrics: {
      caloriesBurn: '700–850 kcal',
      focus: 'Lactate Threshold & Agility',
      level: 'All Levels'
    }
  },
  {
    id: 'prog-boxing',
    name: 'Combat Conditioning & Boxing',
    category: 'boxing',
    tagline: 'Precision striking mechanics and anaerobic resilience.',
    description: 'Championship-grade heavy bag work, mitt drills, footwork kinetics, and round-based metabolic intervals designed by seasoned prizefighting coaches.',
    duration: '60 min',
    intensity: 'Elite',
    coach: 'Damian Cruz',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80',
    features: ['Cleto Reyes Water Bags & Heavy Bags', 'Punch Tracking Accelerometers', 'Dedicated Ring Movement Sessions'],
    metrics: {
      caloriesBurn: '800–950 kcal',
      focus: 'Rotational Power & Anaerobic Output',
      level: 'All Levels'
    }
  },
  {
    id: 'prog-hiit',
    name: 'Metabolic Engine (HIIT)',
    category: 'hiit',
    tagline: 'High-density anaerobic intervals and cardiovascular ceiling.',
    description: 'High-cadence assault bike intervals, Concept2 rowers, SkiErgs, and bodyweight plyometrics designed to expand VO2 max and accelerate post-exercise oxygen consumption (EPOC).',
    duration: '45 min',
    intensity: 'High',
    coach: 'Aria Chen',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    features: ['Heart Rate Zone Telemetry', 'Concept2 Ergometer Fleet', 'Short Rest Work-to-Rest Periodization'],
    metrics: {
      caloriesBurn: '650–850 kcal',
      focus: 'VO2 Max & Mitochondrial Density',
      level: 'All Levels'
    }
  },
  {
    id: 'prog-mobility',
    name: 'Kinstretch & Joint Resilience',
    category: 'mobility',
    tagline: 'Active range of motion and injury immunization.',
    description: 'Functional Range Conditioning (FRC) principles applied to expand articular margins of safety, eliminate chronic impingements, and bulletproof connective tissue.',
    duration: '50 min',
    intensity: 'Medium',
    coach: 'Dr. Sarah Lindqvist',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    features: ['Controlled Articular Rotations (CARs)', 'Isometric End-Range Loading', 'Spinal Decompression Protocols'],
    metrics: {
      caloriesBurn: '250–350 kcal',
      focus: 'Joint Capsular Space & Health',
      level: 'All Levels'
    }
  },
  {
    id: 'prog-recovery',
    name: 'Neuromuscular Contrast Recovery',
    category: 'recovery',
    tagline: 'Systemic parasympathetic reset and inflammation clearance.',
    description: 'Protocol-driven rotation between 4°C sub-zero cold plunge tubs, 90°C Finnish cedar infrared saunas, hyperbaric oxygen chambers, and NormaTec pneumatic compression.',
    duration: '45 min',
    intensity: 'Medium',
    coach: 'Dr. Sarah Lindqvist',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    features: ['Cold Water Immersion (4°C)', 'Near-Infrared Full Spectrum Sauna', 'Pneumatic Lymphatic Flushes'],
    metrics: {
      caloriesBurn: '150–200 kcal',
      focus: 'HRV Elevation & Vasodilation',
      level: 'All Levels'
    }
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'trainer-marcus',
    name: 'Marcus Vance',
    role: 'Head of Strength & Conditioning',
    specialization: 'Olympic Weightlifting & CNS Velocity',
    experience: '14 Years Elite Coaching',
    credentials: ['CSCS *D', 'USAW Senior International Coach', 'Ex-Olympic S&C Consultant'],
    bio: 'Former collegiate strength director who has prepared 30+ national champions and Olympic contenders. Specializes in periodized force plate diagnostics and power-to-weight optimization.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80',
    quote: 'Strength is not an attribute you inherit. It is a biological negotiation you win under the bar every morning.'
  },
  {
    id: 'trainer-elena',
    name: 'Elena Rostova',
    role: 'Director of Biomechanics',
    specialization: 'Hypertrophy Architecture & Kinematics',
    experience: '11 Years Coaching',
    credentials: ['M.Sc. Kinesiology', 'NSCA-CPT', 'FRC Mobility Specialist'],
    bio: 'Biomechanics researcher with multiple peer-reviewed publications on muscle fascicle behavior under loaded stretch. Designs precision physique architecture with zero joint wear.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    quote: 'Optimal hypertrophy is an engineering problem. Align the resistance with human leverage, and muscle growth is inevitable.'
  },
  {
    id: 'trainer-damian',
    name: 'Damian Cruz',
    role: 'Lead Combat & Conditioning Specialist',
    specialization: 'Rotational Power & Anaerobic Capacity',
    experience: '16 Years Professional Athletics',
    credentials: ['Golden Gloves Champion', 'EXOS Performance Specialist', 'Certified Conditioning Coach'],
    bio: 'Former professional boxer turned elite conditioning architect. Renowned for pushing metabolic thresholds and developing instantaneous explosive punching mechanics.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    quote: 'True conditioning begins the exact moment your lungs burn and your mind tries to convince you to drop your hands.'
  },
  {
    id: 'trainer-sarah',
    name: 'Dr. Sarah Lindqvist',
    role: 'Director of Athletic Recovery & Longevity',
    specialization: 'Neuromuscular Reset & Cryotherapy Science',
    experience: '9 Years Clinical & Sport Practice',
    credentials: ['DPT (Doctor of Physical Therapy)', 'CSCS', 'Heart Rate Variability Specialist'],
    bio: 'Integrates autonomic nervous system modulation, contrast therapy, and blood flow restriction to compress elite athlete recovery windows by up to 40%.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80',
    quote: 'You do not grow from the workout you survive; you adapt to the workout you successfully recover from.'
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'starter',
    name: 'ESSENTIAL',
    badge: 'Standard Access',
    monthlyPrice: 195,
    annualPrice: 165,
    description: 'Full uncompromised access to our Olympic weight room, cardio floor, and locker suites.',
    popular: false,
    features: [
      '24/7 Biometric access to main strength floor',
      'Eleiko competition platforms & Arsenal machinery',
      'Luxury locker suites with rain showers & Malin+Goetz',
      'Kinetix digital companion app with telemetry tracking',
      '2 Complimentary guest day passes per month'
    ],
    exclusivePerks: [
      'Standard locker privileges'
    ]
  },
  {
    id: 'performance',
    name: 'PERFORMANCE',
    badge: 'Most Popular',
    monthlyPrice: 295,
    annualPrice: 245,
    description: 'The complete athletic experience: full club access, unlimited coached classes, and weekly recovery suite sessions.',
    popular: true,
    features: [
      'Everything in Essential tier',
      'Unlimited group athletic & combat conditioning classes',
      'Weekly Contrast Therapy (Cold plunge + Infrared sauna)',
      'Quarterly DEXA body composition & InBody scans',
      'Complimentary workout apparel laundering service',
      'Priority booking window for private training pods'
    ],
    exclusivePerks: [
      'Permanent executive locker assignment',
      'Free cold-pressed post-workout smoothies'
    ]
  },
  {
    id: 'elite',
    name: 'BLACK LAB ELITE',
    badge: 'Private Concierge',
    monthlyPrice: 495,
    annualPrice: 415,
    description: 'The pinnacle of bespoke performance engineering. Dedicated personal coaching, full recovery lab, and private locker room.',
    popular: false,
    features: [
      'Everything in Performance tier',
      '4 Monthly 1-on-1 private coaching sessions with Master Coaches',
      'Unlimited Cryotherapy, Infrared Sauna & Hyperbaric oxygen',
      'Monthly full-panel biomechanical gait & force plate audit',
      'Custom bespoke nutrition protocols updated bi-weekly',
      'VIP lounge access & private secure valet parking'
    ],
    exclusivePerks: [
      'Private biometric locker suite',
      'Direct WhatsApp access to your designated performance director'
    ]
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'fac-weight',
    name: 'Olympic Free Weight Arena',
    category: 'Strength',
    description: 'Eight custom recessed Eleiko lifting platforms with calibrated competition plates, custom DBs ranging from 2.5kg to 80kg, and zero waiting time.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
    specifications: ['8x Eleiko Olympic Platforms', 'Arsenal Pin & Plate Loaded Suite', 'Custom Urethane Dumbbells (2.5–80kg)'],
    capacity: 'Up to 35 Athletes'
  },
  {
    id: 'fac-turf',
    name: '40m Indoor Sprint & Sled Turf',
    category: 'Conditioning',
    description: 'Seamless indoor sprint track engineered with high-grip shock absorption turf, heavy torque sleds, and high-velocity timing gates.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    specifications: ['40-Meter Multi-Lane Turf', 'Laser Timing System', 'Keiser Compressed-Air Cable Arrays'],
    capacity: 'Up to 25 Athletes'
  },
  {
    id: 'fac-recovery',
    name: 'Thermal Contrast Recovery Suite',
    category: 'Recovery',
    description: 'Architectural recovery sanctuary featuring chilled 4°C plunge tubs, 90°C custom Finnish cedar saunas, and red-light photobiomodulation beds.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    specifications: ['Sub-zero 4°C Plunge Tubs', 'Full-Spectrum Infrared Cedar Sauna', 'NormaTec 3 Compression Chambers'],
    capacity: 'Up to 12 Athletes'
  },
  {
    id: 'fac-cardio',
    name: 'Cardio Telemetry Mezzanine',
    category: 'Endurance',
    description: 'Elevated endurance laboratory equipped with Woodway curved motorless treadmills, Concept2 ergs, and live heart rate monitor projection.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80',
    specifications: ['Woodway 4Front & Curve Treadmills', 'Concept2 Rower, BikeErg & SkiErg Fleet', 'Wattbike AtomX Smart Trainers'],
    capacity: 'Up to 30 Athletes'
  },
  {
    id: 'fac-boxing',
    name: 'Combat & Striking Sanctuary',
    category: 'Combat',
    description: 'Purpose-built combat zone with authentic canvas boxing ring, leather teardrop bags, and shock-absorbent composite tatami mats.',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80',
    specifications: ['Full-size 18ft Elevated Boxing Ring', '12x Heavy & Water Bags', 'Speed Bags & Double-End Targets'],
    capacity: 'Up to 20 Athletes'
  },
  {
    id: 'fac-lounge',
    name: 'Member Fuel Bar & Hydrotherapy',
    category: 'Hospitality',
    description: 'Relax and refuel with custom nutrient-dense protein shakes, adaptogenic cold brews, and private marble locker suites with rainfall showers.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80',
    specifications: ['Artisanal Nutrition Bar', 'Private Marble Steam Rooms', 'Complimentary Dyson Styling Suites'],
    capacity: 'Full Member Lounge'
  }
];

export const WEEKLY_SCHEDULE: DaySchedule[] = [
  {
    day: 'Monday',
    shortDay: 'MON',
    classes: [
      { id: 'm1', time: '06:00 AM', name: 'Barbell Strength Protocol', category: 'strength', coach: 'Marcus Vance', room: 'Strength Arena', duration: '75 min', spotsTotal: 16, spotsLeft: 3 },
      { id: 'm2', time: '07:30 AM', name: 'Metabolic Engine (HIIT)', category: 'hiit', coach: 'Aria Chen', room: 'Turf Lab', duration: '45 min', spotsTotal: 20, spotsLeft: 6 },
      { id: 'm3', time: '09:00 AM', name: 'Kinetic Joint Mobility', category: 'mobility', coach: 'Dr. Sarah Lindqvist', room: 'Studio B', duration: '50 min', spotsTotal: 15, spotsLeft: 8 },
      { id: 'm4', time: '12:00 PM', name: 'Cardio Endurance Sprint', category: 'cardio', coach: 'Aria Chen', room: 'Mezzanine', duration: '45 min', spotsTotal: 18, spotsLeft: 4 },
      { id: 'm5', time: '05:30 PM', name: 'Heavy Bag Combat Conditioning', category: 'boxing', coach: 'Damian Cruz', room: 'Combat Zone', duration: '60 min', spotsTotal: 14, spotsLeft: 2 },
      { id: 'm6', time: '07:00 PM', name: 'Mechanical Hypertrophy: Upper', category: 'strength', coach: 'Elena Rostova', room: 'Strength Arena', duration: '60 min', spotsTotal: 16, spotsLeft: 5 }
    ]
  },
  {
    day: 'Tuesday',
    shortDay: 'TUE',
    classes: [
      { id: 't1', time: '06:30 AM', name: 'Athletic Conditioning & Turf', category: 'hiit', coach: 'Tariq Al-Mansoor', room: 'Sprint Turf', duration: '50 min', spotsTotal: 20, spotsLeft: 4 },
      { id: 't2', time: '08:00 AM', name: 'Olympic Snatch & Clean Workshop', category: 'strength', coach: 'Marcus Vance', room: 'Platforms', duration: '75 min', spotsTotal: 12, spotsLeft: 2 },
      { id: 't3', time: '10:00 AM', name: 'Deep Fascial Mobility', category: 'mobility', coach: 'Dr. Sarah Lindqvist', room: 'Studio B', duration: '50 min', spotsTotal: 16, spotsLeft: 7 },
      { id: 't4', time: '05:30 PM', name: 'Fight Camp Boxing Rounds', category: 'boxing', coach: 'Damian Cruz', room: 'Combat Zone', duration: '60 min', spotsTotal: 14, spotsLeft: 1 },
      { id: 't5', time: '07:00 PM', name: 'Posterior Chain Hypertrophy', category: 'strength', coach: 'Elena Rostova', room: 'Strength Arena', duration: '60 min', spotsTotal: 18, spotsLeft: 8 }
    ]
  },
  {
    day: 'Wednesday',
    shortDay: 'WED',
    classes: [
      { id: 'w1', time: '06:00 AM', name: 'Maximal Deadlift & Pull Dynamics', category: 'strength', coach: 'Marcus Vance', room: 'Strength Arena', duration: '75 min', spotsTotal: 16, spotsLeft: 5 },
      { id: 'w2', time: '07:30 AM', name: 'Aerobic Capacity & Row Intervals', category: 'cardio', coach: 'Aria Chen', room: 'Mezzanine', duration: '45 min', spotsTotal: 18, spotsLeft: 3 },
      { id: 'w3', time: '09:00 AM', name: 'Spinal Decompression & Core', category: 'mobility', coach: 'Dr. Sarah Lindqvist', room: 'Studio B', duration: '50 min', spotsTotal: 15, spotsLeft: 9 },
      { id: 'w4', time: '05:30 PM', name: 'Sled Sprints & Explosive Power', category: 'hiit', coach: 'Tariq Al-Mansoor', room: 'Sprint Turf', duration: '50 min', spotsTotal: 20, spotsLeft: 4 },
      { id: 'w5', time: '07:00 PM', name: 'Boxing Technical Mittwork', category: 'boxing', coach: 'Damian Cruz', room: 'Combat Zone', duration: '60 min', spotsTotal: 12, spotsLeft: 3 }
    ]
  },
  {
    day: 'Thursday',
    shortDay: 'THU',
    classes: [
      { id: 'th1', time: '06:30 AM', name: 'Hypertrophy: Quad & Hamstring Focus', category: 'strength', coach: 'Elena Rostova', room: 'Strength Arena', duration: '60 min', spotsTotal: 18, spotsLeft: 6 },
      { id: 'th2', time: '08:00 AM', name: 'Rotary Core & Medicine Ball Power', category: 'hiit', coach: 'Tariq Al-Mansoor', room: 'Sprint Turf', duration: '45 min', spotsTotal: 16, spotsLeft: 5 },
      { id: 'th3', time: '12:00 PM', name: 'Midday Contrast Recovery Guided Flow', category: 'mobility', coach: 'Dr. Sarah Lindqvist', room: 'Spa Suite', duration: '45 min', spotsTotal: 10, spotsLeft: 2 },
      { id: 'th4', time: '05:30 PM', name: 'Cardio Threshold 5K Simulation', category: 'cardio', coach: 'Aria Chen', room: 'Mezzanine', duration: '50 min', spotsTotal: 16, spotsLeft: 7 },
      { id: 'th5', time: '07:00 PM', name: 'Heavy Bag Strike Intervals', category: 'boxing', coach: 'Damian Cruz', room: 'Combat Zone', duration: '60 min', spotsTotal: 14, spotsLeft: 4 }
    ]
  },
  {
    day: 'Friday',
    shortDay: 'FRI',
    classes: [
      { id: 'f1', time: '06:00 AM', name: 'Squat & Overhead Press Matrix', category: 'strength', coach: 'Marcus Vance', room: 'Strength Arena', duration: '75 min', spotsTotal: 16, spotsLeft: 4 },
      { id: 'f2', time: '07:30 AM', name: 'Metabolic Friday Gauntlet', category: 'hiit', coach: 'Aria Chen', room: 'Sprint Turf', duration: '50 min', spotsTotal: 22, spotsLeft: 2 },
      { id: 'f3', time: '09:00 AM', name: 'FRC Hip & Shoulder Unlock', category: 'mobility', coach: 'Dr. Sarah Lindqvist', room: 'Studio B', duration: '50 min', spotsTotal: 15, spotsLeft: 8 },
      { id: 'f4', time: '05:00 PM', name: 'Friday Sparring & Ring Craft', category: 'boxing', coach: 'Damian Cruz', room: 'Combat Zone', duration: '75 min', spotsTotal: 12, spotsLeft: 1 },
      { id: 'f5', time: '06:30 PM', name: 'Friday Night Club Lift & Beats', category: 'strength', coach: 'Elena Rostova', room: 'Strength Arena', duration: '75 min', spotsTotal: 24, spotsLeft: 9 }
    ]
  },
  {
    day: 'Saturday',
    shortDay: 'SAT',
    classes: [
      { id: 's1', time: '08:00 AM', name: 'Weekend Warrior Sled & Sandbag', category: 'hiit', coach: 'Tariq Al-Mansoor', room: 'Sprint Turf', duration: '60 min', spotsTotal: 25, spotsLeft: 5 },
      { id: 's2', time: '09:30 AM', name: 'Olympic Lifting Mastery Clinic', category: 'strength', coach: 'Marcus Vance', room: 'Platforms', duration: '90 min', spotsTotal: 14, spotsLeft: 3 },
      { id: 's3', time: '11:00 AM', name: 'Championship Boxing Rounds', category: 'boxing', coach: 'Damian Cruz', room: 'Combat Zone', duration: '60 min', spotsTotal: 16, spotsLeft: 6 },
      { id: 's4', time: '01:00 PM', name: 'Systemic Contrast Reset & Cold Plunge', category: 'mobility', coach: 'Dr. Sarah Lindqvist', room: 'Spa Suite', duration: '60 min', spotsTotal: 12, spotsLeft: 2 }
    ]
  },
  {
    day: 'Sunday',
    shortDay: 'SUN',
    classes: [
      { id: 'su1', time: '09:00 AM', name: 'Full Body Mobility & Breathwork', category: 'mobility', coach: 'Dr. Sarah Lindqvist', room: 'Studio B', duration: '60 min', spotsTotal: 18, spotsLeft: 7 },
      { id: 'su2', time: '10:30 AM', name: 'Zone 2 Long Aerobic Engine', category: 'cardio', coach: 'Aria Chen', room: 'Mezzanine', duration: '60 min', spotsTotal: 16, spotsLeft: 8 },
      { id: 'su3', time: '12:00 PM', name: 'Structural Balance & Recovery Lift', category: 'strength', coach: 'Elena Rostova', room: 'Strength Arena', duration: '60 min', spotsTotal: 16, spotsLeft: 4 }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Alexander Wright',
    role: 'Venture Capitalist & Master Athlete',
    metric: '+45kg Deadlift & -8% Body Fat',
    quote: 'KINETIX is the antithesis of the generic commercial gym. The coaches treat your biomechanics with clinical precision. In 6 months, my chronic back pain vanished, and I pulled a 230kg deadlift PR at age 42.',
    program: 'Olympic Strength Protocol',
    duration: 'Member for 2 Years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'test-2',
    name: 'Nadia Rostova',
    role: 'Competitive Triathlete & Architect',
    metric: 'Sub-3hr Marathon PR & +18% Power',
    quote: 'The synergy between high-velocity turf training and the cold plunge recovery suite is unmatched. My resting heart rate dropped to 41 bpm, and I shattered my marathon record by eleven minutes.',
    program: 'Athletic Conditioning & Contrast Suite',
    duration: 'Member for 18 Months',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'test-3',
    name: 'Julian Sterling',
    role: 'Founder & Tech Executive',
    metric: '+6.2kg Lean Muscle Mass in 24 Weeks',
    quote: 'The level of equipment is what you usually only see in professional sports franchises. Eleiko calibrated discs, Keiser pneumatic cables, and coaches who understand work-rest cycles for high-stress executives.',
    program: 'Mechanical Hypertrophy & Black Lab',
    duration: 'Member for 1 Year',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'membership',
    question: 'How does the trial day pass and club admission work?',
    answer: 'We provide prospective members with a guided private club walkthrough and full complimentary training day pass upon application review. Because our member-to-floor ratio is strictly capped to guarantee zero equipment wait times, day passes must be reserved at least 24 hours in advance.'
  },
  {
    id: 'faq-2',
    category: 'training',
    question: 'Is KINETIX suitable for ambitious beginners or only elite athletes?',
    answer: 'Every new member undergoes our proprietary Biomechanical Baseline Assessment with a Master Coach. We assess movement quality, joint mobility, muscular balance, and cardiovascular threshold before programming begins. Whether you are squatting for the first time or competing nationally, training loads are dialed to your exact physiology.'
  },
  {
    id: 'faq-3',
    category: 'facilities',
    question: 'What are the club hours and 24/7 biometric access policies?',
    answer: 'The club is open 24/7/365 for active members via high-speed encrypted facial/biometric scanners. Professional coaches and recovery staff are on the floor Monday through Friday from 05:30 to 22:00, and weekends from 07:00 to 20:00.'
  },
  {
    id: 'faq-4',
    category: 'membership',
    question: 'Can I freeze or cancel my membership if traveling or relocating?',
    answer: 'Yes. Members may pause their membership for up to 90 consecutive days per calendar year with zero penalty fees. Month-to-month memberships can be canceled with a simple 30-day written notice; there are no hidden cancellation fees or locking contracts.'
  },
  {
    id: 'faq-5',
    category: 'facilities',
    question: 'What amenities are included in the recovery suite and locker rooms?',
    answer: 'All memberships include access to executive locker rooms stocked with Malin+Goetz luxury bath amenities, rainfall showers, steam rooms, private vanity stations, and Dyson Supersonic dryers. Performance and Elite tiers include the Contrast Therapy suite (4°C cold plunge, Finnish infrared sauna, and NormaTec compression).'
  },
  {
    id: 'faq-6',
    category: 'training',
    question: 'How do I book small group classes and private coaching?',
    answer: 'Class spots can be reserved up to 7 days in advance via our interactive web dashboard or the KINETIX mobile companion. Private 1-on-1 coaching sessions are scheduled directly with your designated performance director according to your weekly availability.'
  }
];

export const PERFORMANCE_STATS = [
  { value: 12, suffix: '+', label: 'Years of Conditioning', context: 'Refining elite training protocols' },
  { value: 2500, suffix: '+', label: 'Active Club Athletes', context: 'Strictly capped capacity' },
  { value: 48, suffix: '', label: 'Master Coaches', context: 'Olympic & CSCS certified' },
  { value: 99.4, suffix: '%', label: 'Goal Attainment Rate', context: 'Measured across 12-week cycles' }
];

export const CLUB_LOCATION = {
  name: 'KINETIX Flagship Performance Club',
  address: '480 Performance Boulevard, District 7, Metropolis, 94107',
  phone: '+1 (800) 546-3849',
  email: 'concierge@kinetixperformance.club',
  hours: {
    weekdays: '24/7 Biometric Access (Staffed: 05:30 – 22:00)',
    weekends: '24/7 Biometric Access (Staffed: 07:00 – 20:00)'
  }
};
