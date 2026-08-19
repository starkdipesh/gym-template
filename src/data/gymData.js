// TITAN FORGE - Master Data File

export const gymStats = [
  { label: "Active Members", value: "5,200+", description: "Dedicated athletes & fitness enthusiasts" },
  { label: "Member Rating", value: "4.95 / 5", description: "Based on 1,400+ verified reviews" },
  { label: "Master Coaches", value: "35+", description: "NSCA, CSCS & NASM certified elite trainers" },
  { label: "Pro Equipment", value: "150+", description: "Eleiko, Hammer Strength & Rogue Arsenal" },
  { label: "Transformations", value: "3,800+", description: "Documented 12-week body triumphs" },
];

export const whyChooseUs = [
  {
    id: 1,
    title: "Biometric & AI Progress Tracking",
    description: "Every member gets 3D Body Scanning and monthly DEXA-grade composition analysis to measure exact fat loss and muscle gain.",
    icon: "Activity"
  },
  {
    id: 2,
    title: "Olympic & Commercial Grade Arsenal",
    description: "Train with Eleiko competition barbells, Hammer Strength iso-lateral machines, and Rogue monster rigs built for peak performance.",
    icon: "Dumbbell"
  },
  {
    id: 3,
    title: "1-on-1 Master Coach Support",
    description: "No generic templates. Every workout plan is custom tailored to your biomechanics, injury history, and target lifestyle.",
    icon: "Award"
  },
  {
    id: 4,
    title: "Cryotherapy & Executive Recovery Suite",
    description: "Accelerate recovery with infrared saunas, cold plunge tubs, and hyperbaric oxygen chambers designed to optimize physical output.",
    icon: "Zap"
  },
  {
    id: 5,
    title: "Zero-Intimidation Elite Culture",
    description: "From day-one beginners to elite pro athletes, our community inspires growth, discipline, and unconditional support.",
    icon: "ShieldCheck"
  },
  {
    id: 6,
    title: "Flexible VIP Access & Locker Suites",
    description: "Open 5:00 AM to Midnight, 365 days a year. Private executive showers, complimentary towel service, and healthy smoothie bar.",
    icon: "Clock"
  }
];

export const facilityZones = [
  {
    id: "strength",
    name: "Heavy Iron & Power Dungeon",
    tagline: "Unleash Raw Strength & Muscle Hypertrophy",
    description: "Equipped with 10 power racks, Eleiko calibrated plates, specialty barbells (Safety Squat, Trap Bar, Swiss Bar), and 100lb+ dumbbell racks.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    specs: ["10 Power Racks", "Eleiko Calibrated Plates", "Dumbbells up to 150 lbs", "Deadlift Platforms"]
  },
  {
    id: "cardio",
    name: "Cardio & HIIT Endurance Deck",
    tagline: "Maximize VO2 Max & Fat Oxidation",
    description: "Features Woodway curved treadmills, Concept2 rowers, SkiErgs, Assault bikes, and heart-rate telemetry screens.",
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80",
    specs: ["Woodway Curve Treadmills", "Concept2 Rowers & SkiErgs", "Assault AirBikes", "Heart Rate Telemetry"]
  },
  {
    id: "turf",
    name: "Functional Athletic Turf Zone",
    tagline: "Agility, Speed & Explosive Conditioning",
    description: "40-meter indoor sprint turf equipped with heavy sleds, battle ropes, plyometric boxes, kettlebells, and wall ball targets.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    specs: ["40m Prowler Sled Track", "Custom Rig & Wall Balls", "Battle Ropes & Rings", "Plyo Box Matrix"]
  },
  {
    id: "recovery",
    name: "Cryo & Infrared Recovery Suite",
    tagline: "Restore, Rejuvenate & Dominate Next Session",
    description: "Dedicated recovery room featuring 39°F cold plunges, 175°F Finnish sauna, Normatec compression boots, and Theragun massage stations.",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    specs: ["Cold Plunge Tubs (39°F)", "Infrared Sauna Room", "Normatec Compression Boots", "Theragun Recovery Zone"]
  },
  {
    id: "lockers",
    name: "Executive Luxury Locker Suites",
    tagline: "Five-Star Comfort Before & After Workouts",
    description: "Keyless RFID lockers, rain shower heads, Malin+Goetz bath amenities, dyson hair dryers, and complimentary key-card entry.",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
    specs: ["RFID Keyless Lockers", "Rain Showers & Sauna", "Luxury Bath Amenities", "Fresh Towel Service"]
  }
];

export const programs = [
  {
    id: "fat-loss",
    title: "12-Week Body Shred & Recomp",
    goal: "Maximum Fat Loss & Lean Muscle Retention",
    difficulty: "All Levels",
    duration: "12 Weeks",
    sessionsPerWeek: "4-5 Days / Week",
    description: "A scientifically structured metabolic conditioning and hypertrophy program engineered to shed 8-15 lbs of fat while sculpting lean physique definition.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    features: ["Personalized Macro Plan", "Heart Rate Zone Tracking", "Weekly InBody Scans", "HIIT + Resistance Blend"],
    trainer: "Marcus Vance"
  },
  {
    id: "muscle-hypertrophy",
    title: "Hypertrophy Blueprint",
    goal: "Pure Muscle Size & Symmetrical Growth",
    difficulty: "Intermediate to Advanced",
    duration: "16 Weeks",
    sessionsPerWeek: "5 Days / Week",
    description: "Progressive overload protocols targeting mechanical tension, metabolic stress, and muscle damage for maximal hypertrophy across all muscle groups.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    features: ["Push-Pull-Legs Split", "Mechanical Tension Tracking", "Post-Workout Protein Bar Perk", "Advanced Technique Coaching"],
    trainer: "Sarah Jenkins"
  },
  {
    id: "powerlifting",
    title: "Strength & Power Matrix",
    goal: "Squat, Bench & Deadlift PR Dominance",
    difficulty: "Intermediate",
    duration: "12 Weeks",
    sessionsPerWeek: "4 Days / Week",
    description: "Periodized strength training focused on lifting heavy compound movements, improving nervous system efficiency, and shattering personal records.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    features: ["Percentage-Based Periodization", "Bar Speed Velocity Analysis", "Deload Protocol Integration", "1-on-1 Form Audits"],
    trainer: "David 'Titan' Miller"
  },
  {
    id: "functional-athletic",
    title: "Athletic Performance & Speed",
    goal: "Explosiveness, Mobility & Injury Resistance",
    difficulty: "Advanced",
    duration: "8 Weeks",
    sessionsPerWeek: "4 Days / Week",
    description: "Designed for competitive athletes and active individuals to build rotational power, vertical jump, sprint speed, and joint durability.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
    features: ["Sprint Turf Drills", "Plyometric Shock Training", "Joint Mobility Routines", "Agility Ladder Protocols"],
    trainer: "Elena Rostova"
  },
  {
    id: "beginner-foundations",
    title: "Beginner Fitness Foundations",
    goal: "Build Confidence, Habit & Form Fundamentals",
    difficulty: "Beginner",
    duration: "6 Weeks",
    sessionsPerWeek: "3 Days / Week",
    description: "Intimidated by gyms? Learn proper lifting form, equipment setup, nutrition basics, and build a lasting habit in a supportive, zero-pressure setting.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    features: ["Small Dedicated Group", "Equipment Orientation", "Injury Prevention Focus", "Dedicated Coach Guidance"],
    trainer: "James Sterling"
  },
  {
    id: "longevity-mobility",
    title: "Longevity, Core & Joint Rehab",
    goal: "Posture Correction, Pain-Free Movement & Core Strength",
    difficulty: "All Levels",
    duration: "Ongoing",
    sessionsPerWeek: "3-4 Days / Week",
    description: "Target posture flaws, lower back stiffness, and joint mobility issues using corrective exercises, yoga-inspired stretches, and core stability drills.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    features: ["Spinal Decompression", "Hip & Shoulder Mobility", "Pilates & Core Integration", "Kinesiologist Approved"],
    trainer: "Maya Lin"
  }
];

export const membershipPlans = [
  {
    id: "basic",
    name: "CORE ACCESS",
    tagline: "Essential Access for Self-Driven Fitness",
    popular: false,
    monthlyPrice: 59,
    quarterlyPrice: 155,
    annualPrice: 560,
    billingNote: "Billed monthly. Cancel anytime with 30-day notice.",
    features: [
      "Full Access to Gym Floor & Equipment",
      "Standard Locker Room & Showers Access",
      "Complimentary Initial Body Scan",
      "Titan Forge Fitness Tracking App",
      "Free High-Speed Wi-Fi & Hydration Station",
      "Access Hours: 5:00 AM - 11:00 PM"
    ],
    ctaText: "Start 3-Day Free Trial",
    ctaVariant: "btn-secondary"
  },
  {
    id: "plus",
    name: "TITAN PLUS",
    tagline: "Full Access + Unlimited Group Classes & Recovery",
    popular: true,
    monthlyPrice: 99,
    quarterlyPrice: 265,
    annualPrice: 950,
    billingNote: "Most Popular. Includes 1-on-1 Coach Consultation.",
    features: [
      "All CORE ACCESS Features Included",
      "Unlimited Access to 30+ Group Classes/wk",
      "Unlimited Infrared Sauna & Cold Plunge Suite",
      "Monthly InBody DEXA Biometric Analysis",
      "1 Monthly 1-on-1 Personal Training Session",
      "2 Monthly VIP Guest Passes for Friends",
      "15% Discount at Titan Fuel Smoothie Bar"
    ],
    ctaText: "CLAIM VIP PLUS PASS",
    ctaVariant: "btn-primary"
  },
  {
    id: "elite",
    name: "ELITE VIP COACHING",
    tagline: "The Ultimate Transformation & Private Coaching VIP Experience",
    popular: false,
    monthlyPrice: 199,
    quarterlyPrice: 530,
    annualPrice: 1890,
    billingNote: "Full VIP Concierge & Personal Coaching.",
    features: [
      "All TITAN PLUS Features Included",
      "4 Weekly 1-on-1 Personal Coaching Sessions",
      "Custom Macro & Meal Plan by Nutritionist",
      "24/7 WhatsApp Direct Access to Your Coach",
      "Dedicated Reserved Lockers & Laundry Service",
      "Normatec Compression & Cryotherapy Priority Access",
      "Unlimited Guest Passes Any Time"
    ],
    ctaText: "BOOK VIP CONSULTATION",
    ctaVariant: "btn-secondary"
  }
];

export const transformations = [
  {
    id: 1,
    name: "Alex Rivera",
    age: 32,
    gender: "Male",
    occupation: "Software Engineer",
    program: "12-Week Body Shred",
    trainer: "Marcus Vance",
    timeline: "12 Weeks",
    metrics: { weightChange: "-16 lbs Fat", muscleGain: "+4.5 lbs Muscle", bodyFatBefore: "26%", bodyFatAfter: "14%" },
    quote: "I thought my busy tech job meant I couldn't get in shape. TITAN FORGE changed my entire mindset. The trainers and structured macro plan gave me energy I haven't felt since college!",
    beforeImage: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Samantha Wright",
    age: 28,
    gender: "Female",
    occupation: "Marketing Director",
    program: "Hypertrophy Blueprint",
    trainer: "Sarah Jenkins",
    timeline: "16 Weeks",
    metrics: { weightChange: "-8 lbs Fat", muscleGain: "+7 lbs Muscle", bodyFatBefore: "28%", bodyFatAfter: "18%" },
    quote: "I used to be terrified of entering the weight room. Sarah guided me step-by-step. Now I can deadlift 225 lbs and feel more confident in my body than ever before!",
    beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "David Chen",
    age: 41,
    gender: "Male",
    occupation: "Architect",
    program: "Strength & Power Matrix",
    trainer: "David 'Titan' Miller",
    timeline: "20 Weeks",
    metrics: { weightChange: "-22 lbs Fat", muscleGain: "+9 lbs Muscle", bodyFatBefore: "31%", bodyFatAfter: "16%" },
    quote: "At 41, I was having chronic lower back pain. Titan Forge rebuilt my core, fixed my posture, and helped me drop 4 waist sizes. Best investment of my life.",
    beforeImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Jessica Hayes",
    age: 31,
    gender: "Female",
    occupation: "Graphic Designer",
    program: "12-Week Body Shred",
    trainer: "Elena Rostova",
    timeline: "12 Weeks",
    metrics: { weightChange: "-20 lbs Fat", muscleGain: "+6 lbs Muscle", bodyFatBefore: "30%", bodyFatAfter: "17%" },
    quote: "The group MetCon sessions combined with the cold plunge completely restored my physical stamina after having two kids!",
    beforeImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
  }
];

export const trainers = [
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    role: "Head Performance Coach & Fat Loss Specialist",
    certifications: ["CSCS", "NASM-CPT", "Precision Nutrition Level 2"],
    experience: "11+ Years",
    bio: "Specializing in metabolic body re-composition and fat loss for busy professionals. Marcus has guided over 800+ clients to life-changing physical transformations.",
    specialties: ["Fat Loss Shred", "Metabolic Conditioning", "Contest Prep"],
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
    rating: 4.98,
    clientsTrained: "850+"
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Master Strength & Women's Hypertrophy Coach",
    certifications: ["NSCA-CPT", "USA Weightlifting Level 2", "Post-Rehab Specialist"],
    experience: "8+ Years",
    bio: "Passionate about empowering women through heavy resistance training, posture alignment, and functional muscle building without bulk.",
    specialties: ["Glute Hypertrophy", "Strength Foundations", "Posture & Core"],
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
    rating: 4.96,
    clientsTrained: "620+"
  },
  {
    id: "david-miller",
    name: "David 'Titan' Miller",
    role: "Head Powerlifting & Biomechanics Specialist",
    certifications: ["USAPL Senior Coach", "Kinesiology B.S.", "FMS Level 2"],
    experience: "14+ Years",
    bio: "Competitive powerlifter and biomechanics researcher. David focuses on lifting efficiency, joint longevity, and heavy compound progression.",
    specialties: ["Powerlifting PRs", "Biomechanics Audits", "Joint Rehab"],
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    clientsTrained: "1,100+"
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "HIIT & Athletic Mobility Specialist",
    certifications: ["EXOS Performance Specialist", "CrossFit L2", "Yoga Alliance RYT-500"],
    experience: "7+ Years",
    bio: "Combines high-octane cardiovascular drills with deep athletic mobility work to increase speed, stamina, and recovery capacity.",
    specialties: ["Athletic HIIT", "Flexibility & Mobility", "Endurance"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    rating: 4.94,
    clientsTrained: "540+"
  }
];

export const groupClasses = [
  {
    id: "hiit-burn",
    title: "METCON SHRED 45",
    category: "HIIT & Cardio",
    intensity: "High Intensity",
    duration: "45 Mins",
    caloriesBurned: "600-800 kcal",
    instructor: "Marcus Vance",
    description: "Fast-paced circuit using assault bikes, kettlebells, and bodyweight drills to blast calories and spike EPOC metabolic rate.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    spotsLeft: 4,
    maxCapacity: 18
  },
  {
    id: "heavy-iron-circuit",
    title: "TITAN STRENGTH 101",
    category: "Strength & Hypertrophy",
    intensity: "Moderate to High",
    duration: "60 Mins",
    caloriesBurned: "450-600 kcal",
    instructor: "David 'Titan' Miller",
    description: "Focus on barbell fundamentals (Squat, Press, Row) with personal form corrections and progressive resistance loading.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    spotsLeft: 2,
    maxCapacity: 12
  },
  {
    id: "power-yoga-mobility",
    title: "POWER MOBILITY & FLOW",
    category: "Recovery & Yoga",
    intensity: "Low to Moderate",
    duration: "50 Mins",
    caloriesBurned: "250-350 kcal",
    instructor: "Elena Rostova",
    description: "Deep tissue myofascial release paired with athletic yoga flow to unlock tight hips, improve spinal health, and reduce injury risk.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    spotsLeft: 6,
    maxCapacity: 20
  },
  {
    id: "boxing-ring-fit",
    title: "TITAN BOXING & CONDITIONING",
    category: "Combat Fitness",
    intensity: "High Intensity",
    duration: "55 Mins",
    caloriesBurned: "700-900 kcal",
    instructor: "Sarah Jenkins",
    description: "Heavy bag combinations, footwork drills, speed bag work, and core conditioning for total body stamina and stress relief.",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80",
    spotsLeft: 3,
    maxCapacity: 15
  }
];

export const weeklySchedule = [
  { day: "Monday", time: "06:30 AM", class: "METCON SHRED 45", trainer: "Marcus Vance", category: "HIIT & Cardio", room: "Turf Zone" },
  { day: "Monday", time: "05:30 PM", class: "TITAN STRENGTH 101", trainer: "David Miller", category: "Strength", room: "Heavy Iron Room" },
  { day: "Tuesday", time: "07:00 AM", class: "POWER MOBILITY & FLOW", trainer: "Elena Rostova", category: "Yoga", room: "MindBody Studio" },
  { day: "Tuesday", time: "06:00 PM", class: "TITAN BOXING & CONDITIONING", trainer: "Sarah Jenkins", category: "Combat Fitness", room: "Combat Ring" },
  { day: "Wednesday", time: "06:30 AM", class: "METCON SHRED 45", trainer: "Marcus Vance", category: "HIIT & Cardio", room: "Turf Zone" },
  { day: "Wednesday", time: "06:30 PM", class: "HYPERSTROPHY LEG DAY", trainer: "Sarah Jenkins", category: "Strength", room: "Heavy Iron Room" },
  { day: "Thursday", time: "07:00 AM", class: "POWER MOBILITY & FLOW", trainer: "Elena Rostova", category: "Yoga", room: "MindBody Studio" },
  { day: "Thursday", time: "06:00 PM", class: "TITAN BOXING & CONDITIONING", trainer: "Sarah Jenkins", category: "Combat Fitness", room: "Combat Ring" },
  { day: "Friday", time: "06:30 AM", class: "METCON SHRED 45", trainer: "Marcus Vance", category: "HIIT & Cardio", room: "Turf Zone" },
  { day: "Friday", time: "05:30 PM", class: "TITAN STRENGTH 101", trainer: "David Miller", category: "Strength", room: "Heavy Iron Room" },
  { day: "Saturday", time: "09:00 AM", class: "SATURDAY WARRIOR BOOTCAMP", trainer: "All Coaches", category: "HIIT & Cardio", room: "Main Turf" },
  { day: "Sunday", time: "10:00 AM", class: "SUNDAY RECOVERY & PLUNGE", trainer: "Elena Rostova", category: "Recovery", room: "Recovery Suite" }
];

export const blogArticles = [
  {
    id: "fat-loss-science",
    title: "The Fat Loss Fallacy: Why Cardio Alone Isn't Enough (And What Actually Works)",
    category: "Fat Loss & Nutrition",
    readTime: "5 Min Read",
    date: "Aug 15, 2026",
    summary: "Discover why hours on the treadmill often lead to plateaus and how progressive resistance training paired with calorie deficit creates lasting metabolic transformation.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    author: "Marcus Vance",
    content: `
      Many fitness beginners believe that endless hours of low-intensity steady-state cardio is the holy grail of fat loss. However, exercise science reveals a completely different picture.

      ### 1. The Power of EPOC (Excess Post-Exercise Oxygen Consumption)
      High-intensity resistance training and interval sessions trigger EPOC—meaning your body continues to burn calories at an elevated rate for up to 36 hours after leaving the gym.

      ### 2. Preserving Lean Muscle Mass
      When you cut calories without lifting weights, your body burns muscle tissue alongside fat. Muscle tissue is metabolically active; losing it lowers your basal metabolic rate (BMR). Resistance training signals to your body that muscle is essential, forcing fat stores to supply the energy deficit.

      ### 3. Protein & Macro Precision
      Aim for 0.8g - 1.0g of protein per pound of bodyweight daily. Protein has the highest thermic effect of food (TEF), requiring your body to expend 20-30% of its caloric value just to digest it!
    `
  },
  {
    id: "deadlift-form-mastery",
    title: "5 Deadlift Mistakes Destroying Your Lower Back (And How to Fix Them)",
    category: "Strength Training",
    readTime: "7 Min Read",
    date: "Aug 10, 2026",
    summary: "Deadlifts build unmatched posterior chain strength when executed correctly. Learn to hinge properly, pack your lats, and protect your spine.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    author: "David 'Titan' Miller",
    content: `
      The deadlift is the king of all compound exercises, engaging your hamstrings, glutes, lats, traps, and core. Yet, improper execution is a common source of lower back strain.

      ### Fix 1: Hip Hinge vs. Squatting the Weight
      The conventional deadlift is a pull, not a squat. Initiate the movement by pushing your hips backward while maintaining a neutral spine.

      ### Fix 2: 'Packing' Your Lats
      Before lifting, imagine squeezing an orange in your armpits. Engagement of the latissimus dorsi stabilizes your upper back and prevents spinal rounding.

      ### Fix 3: Pulling the 'Slack' Out of the Bar
      Never jerk the barbell off the floor! Apply gradual tension until you hear the bar click against the plates before driving your feet into the floor.
    `
  },
  {
    id: "recovery-sleep-protocol",
    title: "Cold Plunges, Sleep & Recovery: How Elite Athletes Rebuild Faster",
    category: "Recovery & Wellness",
    readTime: "4 Min Read",
    date: "Aug 02, 2026",
    summary: "Workout sessions trigger muscle breakages; recovery is where real adaptation happens. Learn how cold exposure and deep sleep optimize growth hormone.",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
    author: "Elena Rostova",
    content: `
      Hard work in the gym is only 50% of the transformation equation. Without strategic recovery, chronic fatigue, elevated cortisol, and overtraining quickly set in.

      ### Cold Water Immersion (39°F - 50°F)
      Submerging in cold water post-workout reduces systemic inflammation, flushes metabolic waste, and activates brown adipose fat tissue.

      ### Non-Negotiable 7-9 Hours of Quality Sleep
      Stage 3 & 4 slow-wave sleep is when the pituitary gland releases maximum Human Growth Hormone (HGH) for tissue repair. Keep your room dark and at 65°F for peak sleep efficiency.
    `
  }
];

export const faqs = [
  {
    category: "Free Trial & Registration",
    q: "Do you offer a free trial pass?",
    a: "Yes! We offer a complimentary 3-Day VIP All-Access Pass for first-time visitors. This includes access to our gym floor, group classes, sauna, and a free InBody DEXA composition scan."
  },
  {
    category: "Beginners & Culture",
    q: "Is TITAN FORGE beginner-friendly? I feel intimidated.",
    a: "100%! Over 40% of our members started as complete beginners. Our staff and members foster an encouraging, zero-ego culture. Every new member receives a complimentary orientation with a Master Coach to walk through equipment usage safely."
  },
  {
    category: "Personal Training",
    q: "How does 1-on-1 Personal Training work?",
    a: "After an initial biometric assessment and movement screen, we pair you with a coach matching your specific goals (fat loss, strength, body building, rehab). Workouts, nutrition plans, and progress scans are customized specifically for you."
  },
  {
    category: "Amenities & Lockers",
    q: "What amenities are included with membership?",
    a: "All members get access to executive lockers, rain showers, Malin+Goetz bath products, high-speed Wi-Fi, and hydration stations. TITAN PLUS and ELITE members also enjoy unlimited sauna, cold plunge, and smoothie bar discounts."
  },
  {
    category: "Billing & Contracts",
    q: "Can I freeze or cancel my membership?",
    a: "Yes! We believe in transparent membership policies. You can freeze your membership for up to 60 days per year for travel or injury. Cancellations require a simple 30-day notice with zero hidden cancellation penalties."
  },
  {
    category: "Operating Hours",
    q: "What are your opening hours and parking options?",
    a: "We are open 365 days a year from 5:00 AM to 12:00 Midnight. Free multi-level validated parking is available directly under our building with over 200 spacious parking stalls."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Dr. Robert Vance",
    role: "Orthopedic Surgeon & Member",
    rating: 5,
    comment: "As a surgeon, posture and spinal health are vital. Titan Forge's equipment biomechanics are second to none. The coaches understand anatomical safety and performance better than any gym I've ever visited.",
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Jessica Hayes",
    role: "Graphic Designer & Plus Member",
    rating: 5,
    comment: "I lost 20 lbs in 12 weeks after joining the Shred program! The atmosphere is electrifying, clean, and welcoming. The cold plunge after morning MetCon classes is my absolute favorite reward.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Michael Chang",
    role: "Marathon Runner & Athlete",
    rating: 5,
    comment: "The athletic turf and recovery suite took 15 minutes off my marathon PR. Being able to go from heavy squat racks directly into the cold plunge has completely eliminated knee soreness.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }
];

export const galleryImages = [
  { id: 1, category: "Equipment", title: "Eleiko Power Platforms", url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80" },
  { id: 2, category: "Turf", title: "Indoor Sprint Track", url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80" },
  { id: 3, category: "Recovery", title: "Infrared Sauna Suite", url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80" },
  { id: 4, category: "Classes", title: "MetCon Circuit Training", url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80" },
  { id: 5, category: "Equipment", title: "Hammer Strength Arsenal", url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80" },
  { id: 6, category: "Recovery", title: "39°F Cryo Cold Plunge", url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80" }
];
