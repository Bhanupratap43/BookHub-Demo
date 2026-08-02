import { Book } from '../types';

export const BOOKS_DATA: Book[] = [
  {
    id: 'book-1',
    title: 'The Starlight Citadel',
    author: 'Aurelia Pendelton',
    category: 'Fantasy',
    rating: 4.9,
    reviewsCount: 1420,
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-purple-600 via-indigo-600 to-sky-500',
    description: 'Deep within the Celestial Spire lies a floating citadel guarded by star-weavers. When a young cartographer unlocks an ancient luminescent map, she awakens celestial spirits that hold the secrets of forgotten galaxies.',
    tags: ['Magical Realism', 'Dragons', 'Star Weavers', 'Bestseller'],
    pages: 412,
    publishYear: 2024,
    language: 'English',
    isTrending: true,
    isRecommended: true,
    readTime: '6 hrs 30 mins',
    sampleChapters: [
      {
        chapterNumber: 1,
        title: 'The Whisper of Celestial Parchment',
        content: `The sky above Mount Astraea shimmered with hues of amethyst and spun gold. Lyra adjusted her leather goggles, peering through the brass telescope at the floating spires of the Starlight Citadel. For three hundred years, the gates had remained sealed behind a barrier of shimmering stardust.

"It moves," she whispered to her mechanical owl companion, Barnaby. The brass bird gave a quiet whirring click, fluttered its feather-clockwork wings, and landed gently on her parchment draft.

Deep within the observatory's dusty alcoves, a velvet box began to hum with a soft violet resonance. Lyra stepped closer, holding her breath. The map inside was crafted from woven light—a constellation map that did not merely show paths, but drew the traveler toward them.`
      },
      {
        chapterNumber: 2,
        title: 'Across the Nebula Bridge',
        content: `Step by step, the stone tiles beneath Lyra's boots crystallized into translucent sapphire. Ahead of her stretched the Nebula Bridge, a luminous ribbon suspended over endless clouds of cosmic violet mist.

Barnaby circled above, casting a soft beam of golden light to guide her path. "Hold steady," Lyra reminded herself, clutching the glowing compass tightly against her chest.`
      }
    ]
  },
  {
    id: 'book-2',
    title: 'Chronicles of Quantum Velocity',
    author: 'Dr. Marcus Vance',
    category: 'Science Fiction',
    rating: 4.8,
    reviewsCount: 980,
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-blue-600 via-cyan-500 to-teal-400',
    description: 'When humanity bends gravity to create faster-than-light corridors, pilot Kai Nakamura discovers a temporal rift that loops his station through three distinct centuries simultaneously.',
    tags: ['Cyberpunk', 'Time Travel', 'AI Systems', 'Award Winner'],
    pages: 380,
    publishYear: 2025,
    language: 'English',
    isTrending: true,
    isRecommended: true,
    readTime: '5 hrs 45 mins',
    sampleChapters: [
      {
        chapterNumber: 1,
        title: 'The Tachyon Horizon',
        content: `The sub-atomic pulse engines thrummed at 99.4% light efficiency. On the primary holoscreen, the chronometer ticked backwards by three seconds.

"Command, this is Kai," he transmitted over the hyper-comm. "The tachyon readouts are shifting. Space isn't bending—it's echoing."`
      }
    ]
  },
  {
    id: 'book-3',
    title: 'React & AI Architectures',
    author: 'Elena Rostova',
    category: 'Programming',
    rating: 4.95,
    reviewsCount: 2150,
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-cyan-600 via-teal-500 to-emerald-400',
    description: 'Master modern frontend development combined with server-side LLM orchestration, streaming UI primitives, stateful graphs, and real-time interactive canvas applications.',
    tags: ['TypeScript', 'React 19', 'AI Agents', 'Top Rated'],
    pages: 520,
    publishYear: 2026,
    language: 'English',
    isTrending: true,
    isRecommended: true,
    readTime: '8 hrs 15 mins',
    sampleChapters: [
      {
        chapterNumber: 1,
        title: 'Foundations of Agentic Web Interfaces',
        content: `Building modern agentic interfaces requires moving beyond static client-state paradigms into reactive, streaming event loops. In this chapter, we explore how React's concurrent render model pairs seamlessly with server-sent event streams to deliver fluid user experiences.`
      }
    ]
  },
  {
    id: 'book-4',
    title: 'The Magic of Daily Habits',
    author: 'Seraphina Sun',
    category: 'Self Help',
    rating: 4.88,
    reviewsCount: 3100,
    coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-amber-500 via-orange-400 to-yellow-400',
    description: 'Transform your daily routine into an inspiring ritual of focus, joy, and creative momentum using neuroscience-backed habit loops and cheerful micro-goals.',
    tags: ['Mindfulness', 'Productivity', 'Growth', 'Bestseller'],
    pages: 290,
    publishYear: 2024,
    language: 'English',
    isTrending: true,
    isRecommended: true,
    readTime: '4 hrs 20 mins',
    sampleChapters: [
      {
        chapterNumber: 1,
        title: 'The Spark of Micro-Rituals',
        content: `Small, joyful sparks create monumental life shifts. When you link a new habit to a moment of genuine celebration, your brain releases dopamine that solidifies the neural pathway faster than willpower ever could.`
      }
    ]
  },
  {
    id: 'book-5',
    title: 'Whispers in Moonlit Manor',
    author: 'Gaspard Noir',
    category: 'Mystery',
    rating: 4.75,
    reviewsCount: 840,
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-indigo-700 via-purple-700 to-pink-600',
    description: 'An ancient clocktower in coastal Cornwall rings thirteen times at midnight. Detective Valerie Sterling arrives to solve an impossible locked-room puzzle involving a missing sapphire ring.',
    tags: ['Detective', 'Gothic', 'Suspense', 'Popular'],
    pages: 340,
    publishYear: 2023,
    language: 'English',
    isTrending: false,
    isRecommended: true,
    readTime: '5 hrs 10 mins',
    sampleChapters: [
      {
        chapterNumber: 1,
        title: 'The Thirteenth Chime',
        content: `The fog rolled over the jagged cliffs of Blackwood Bay like a silver velvet veil. Rain tapped frantically against the stained glass windows of the clocktower library as Detective Valerie unfolded the blood-sealed letter.`
      }
    ]
  },
  {
    id: 'book-6',
    title: 'The Little Dragon Who Saved Sunlit Valley',
    author: 'Clara Meadow',
    category: 'Children',
    rating: 4.98,
    reviewsCount: 1890,
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-yellow-400 via-amber-400 to-orange-400',
    description: 'Barnaby the baby dragon cannot breathe fire—he breathes rainbow sparkles! Join Barnaby on a delightful journey to light up the dark forest and make lasting woodland friends.',
    tags: ['Kids', 'Illustrated', 'Friendship', 'Bedtime'],
    pages: 64,
    publishYear: 2025,
    language: 'English',
    isTrending: true,
    isRecommended: true,
    readTime: '45 mins',
    sampleChapters: [
      {
        chapterNumber: 1,
        title: 'Barnaby’s Sparkly Hiccup',
        content: `High in the Emerald Treehouse, Barnaby the dragon let out a tiny hiccup. Instead of smoke, a cluster of glowing blue and pink star bubbles floated up into the morning sunshine!`
      }
    ]
  },
  {
    id: 'book-7',
    title: 'Silicon Dreams & Quantum Frontiers',
    author: 'Prof. David Thorne',
    category: 'Technology',
    rating: 4.82,
    reviewsCount: 1100,
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-sky-500 via-blue-600 to-indigo-600',
    description: 'An authoritative dive into quantum computing, neural chipsets, and how next-gen hardware architectures will reshape medicine, climate science, and exploration.',
    tags: ['Quantum Tech', 'Hardware', 'Future Science'],
    pages: 410,
    publishYear: 2025,
    language: 'English',
    isTrending: false,
    isRecommended: true,
    readTime: '6 hrs 00 mins',
    sampleChapters: [
      {
        chapterNumber: 1,
        title: 'Superposition in Action',
        content: `At absolute zero, trapped beryllium ions behave not as discrete particles, but as probabilistic clouds. This quantum coherence unlocks computational density millions of times beyond traditional silicon logic.`
      }
    ]
  },
  {
    id: 'book-8',
    title: 'The Silk Road Rediscovered',
    author: 'Dr. Amina Al-Hassan',
    category: 'History',
    rating: 4.79,
    reviewsCount: 760,
    coverImage: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-amber-600 via-orange-500 to-yellow-500',
    description: 'Unearthing forgotten caravanserais, royal trade decrees, and cultural exchange bridges across Samarkand, Dunhuang, and ancient Byzantium.',
    tags: ['Ancient History', 'Culture', 'Illustrated Maps'],
    pages: 460,
    publishYear: 2024,
    language: 'English',
    isTrending: false,
    isRecommended: true,
    readTime: '7 hrs 20 mins',
    sampleChapters: [
      {
        chapterNumber: 1,
        title: 'Gates of Samarkand',
        content: `Under the turquoise domes of the Registan, merchants from three continents gathered at dawn to exchange spices, woven lapis lazuli threads, and handwritten philosophy scrolls.`
      }
    ]
  },
  {
    id: 'book-9',
    title: 'Cosmic Defenders: Rebirth Vol. 1',
    author: 'Kenji Takahashi',
    category: 'Comics',
    rating: 4.91,
    reviewsCount: 2400,
    coverImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-violet-600 via-fuchsia-600 to-pink-500',
    description: 'Full-color high-octane graphic novel! When a cosmic crystal shatters over Neo-Tokyo, five high school academy students gain elemental mecha suits.',
    tags: ['Manga', 'Action', 'Graphic Novel', 'Full Color'],
    pages: 210,
    publishYear: 2026,
    language: 'English',
    isTrending: true,
    isRecommended: true,
    readTime: '2 hrs 30 mins',
    sampleChapters: [
      {
        chapterNumber: 1,
        title: 'Awakening of the Starlight Suit',
        content: `[Panel 1]: Siren blares across District 7. Ren looks up as the violet meteor cuts through the neon-lit sky.
[Panel 2]: The crystal fragment bonds with Ren's jacket, forming glowing golden armplates!`
      }
    ]
  },
  {
    id: 'book-10',
    title: 'Letters Under the Cherry Blossom',
    author: 'Chloe Laurent',
    category: 'Romance',
    rating: 4.86,
    reviewsCount: 1650,
    coverImage: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-pink-500 via-rose-400 to-red-400',
    description: 'A botanical artist in Kyoto discovers a stack of unsent 1950s love letters tucked inside a vintage wooden desk, sparking an unexpected romance with the grandson of the original letter writer.',
    tags: ['Cozy Romance', 'Kyoto', 'Heartwarming'],
    pages: 320,
    publishYear: 2024,
    language: 'English',
    isTrending: false,
    isRecommended: true,
    readTime: '4 hrs 50 mins',
    sampleChapters: [
      {
        chapterNumber: 1,
        title: 'A Secret Compartment in Kyoto',
        content: `The scent of rain-soaked cedar filled Hana's tea studio. As she polished the brass drawer handle of her grandfather's desk, a small wooden latch clicked softly, revealing a bundle tied with faded crimson ribbon.`
      }
    ]
  },
  {
    id: 'book-11',
    title: 'Zero to One Million: The Unicorn Playbook',
    author: 'Samantha Sterling',
    category: 'Business',
    rating: 4.87,
    reviewsCount: 1980,
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-emerald-600 via-teal-600 to-sky-500',
    description: 'Practical frameworks for product-market fit, unit economics, culture building, and scaling high-velocity tech startups from founder zero to global leader.',
    tags: ['Startups', 'Leadership', 'Strategy', 'Bestseller'],
    pages: 310,
    publishYear: 2025,
    language: 'English',
    isTrending: true,
    isRecommended: false,
    readTime: '4 hrs 40 mins',
    sampleChapters: [
      {
        chapterNumber: 1,
        title: 'Finding Your Unfair Advantage',
        content: `True competitive moats are rarely built on features alone. They stem from unique distribution loops, network effects, and deep product delight that turns early adopters into vocal champions.`
      }
    ]
  },
  {
    id: 'book-12',
    title: 'Leonardo: The Polymath Mind',
    author: 'Julian Croft',
    category: 'Biography',
    rating: 4.93,
    reviewsCount: 1320,
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-rose-500 via-purple-600 to-indigo-600',
    description: 'An intimate, richly illustrated look into Leonardo da Vinci’s personal notebooks—exploring how curiosity across anatomy, optics, flight, and art powered his genius.',
    tags: ['Art History', 'Genius', 'Illustrated'],
    pages: 480,
    publishYear: 2023,
    language: 'English',
    isTrending: false,
    isRecommended: true,
    readTime: '7 hrs 30 mins',
    sampleChapters: [
      {
        chapterNumber: 1,
        title: 'The Mirror-Written Notebooks',
        content: `In the quiet hours before dawn in Florence, Leonardo dipped his quill into oak-gall ink. Writing backward from right to left, he sketched the flight muscles of a swallow beside a hydraulic waterwheel.`
      }
    ]
  }
];
