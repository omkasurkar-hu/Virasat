import { RareInstrument, VanishingTradition } from '../types';

export const RARE_INSTRUMENTS_DATA: RareInstrument[] = [
  {
    id: 'rudra-veena',
    name: 'Rudra Veena',
    originRegion: 'North & Central India (Dhrupad Tradition)',
    category: 'String (Tata)',
    description: 'The ancient mother of all Indian stringed instruments, associated with Lord Shiva. Characterized by two colossal resonant dried gourd resonators (tumbas) connected by a hollow tubular wooden dandi with 24 movable raised frets.',
    structureAndMaking: 'Crafted from rare 100-year-old teak or tun wood with giant round dried pumpkin gourds specially grown in Maharashtra, bound with peacock quill frets fixed with beeswax and coal ash.',
    whyEndangered: 'Only a handful of master makers (ustads) survive in Miraj and Kolkata. Playing it requires rigorous lifelong training in the slow meditative Dhrupad microtonal tradition.',
    acousticNote: 'Deep, resonant, low-register sustained bass hum with rich subharmonics that vibrate through the player’s chest.',
    frequencyRange: 'Low register (65 Hz – 520 Hz)',
    soundType: 'veena',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kamaicha',
    name: 'Kamaicha',
    originRegion: 'Thar Desert, Western Rajasthan (Manganiyar Community)',
    category: 'String (Tata)',
    description: 'One of the oldest surviving bowed instruments in the world, played exclusively by the hereditary Manganiyar folk bards of Jaisalmer and Barmer to narrate tales of desert kings, Sufi mysticism, and monsoon clouds.',
    structureAndMaking: 'Carved from a single solid block of seasoned mango or sheesham wood with a circular spherical bowl covered in goat parchment hide, featuring 3 main gut strings made from sheep intestines and 14 steel sympathetic resonance strings.',
    whyEndangered: 'Sheep gut string manufacturing is nearly extinct; younger generations are migrating away from traditional folk patronage to city occupations.',
    acousticNote: 'Haunting, earthy, desert-toned cry resembling human vocal micro-inflections.',
    frequencyRange: 'Middle-high register (220 Hz – 1100 Hz)',
    soundType: 'kamaicha',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'esraj',
    name: 'Esraj',
    originRegion: 'Bengal & Bihar (Santiniketan Rabindra Sangeet)',
    category: 'String (Tata)',
    description: 'A delicate bowed string instrument created by combining the frets of a Sitar with the skin-covered belly and bow of a Sarangi. Made famous by Rabindranath Tagore at Visva-Bharati University, Santiniketan.',
    structureAndMaking: 'Tun wood soundbox covered with goat hide skin, a sitar-like fingerboard with brass frets, 4 main playing strings and 15 sympathetic resonance wire strings bowed with horsehair.',
    whyEndangered: 'Replaced in contemporary orchestras by electronic keyboards and violins; fewer than 15 authentic master craftsmen remain in West Bengal.',
    acousticNote: 'Mellow, sweet, singing vocal timbre with subtle weeping slides.',
    frequencyRange: 'Medium register (196 Hz – 880 Hz)',
    soundType: 'esraj',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ravanhatha',
    name: 'Ravanhatha',
    originRegion: 'Rajasthan & Gujarat (Bhopa Epic Singers)',
    category: 'String (Tata)',
    description: 'According to legend, invented by King Ravana of Lanka using his own arm, hair, and sinews to please Shiva. Played by Rajasthani Bhopa bards while narrating the Pabuji Ki Phad scroll epics in village squares.',
    structureAndMaking: 'Half a coconut shell resonator covered with goat hide, fixed onto a bamboo stalk with two main strings (one horsehair, one steel) and a curved bow with metallic ghungroo bells that jingle on every stroke.',
    whyEndangered: 'Often relegated to tourist street souvenirs rather than recognized as a profound historical folk instrument; few master players master the full classical repertoire.',
    acousticNote: 'Rustic, spirited, rhythmically punctuated bowed sound with rhythmic bell jingles.',
    frequencyRange: 'Medium-high register (290 Hz – 1000 Hz)',
    soundType: 'ravanhatha',
    image: 'https://images.unsplash.com/photo-1600100397608-f010e4299955?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'surbahar',
    name: 'Surbahar (Bass Sitar)',
    originRegion: 'Hindustani Classical (Lucknow / Senia Gharana)',
    category: 'String (Tata)',
    description: 'Invented in the early 19th century by Ustad Ghulam Mohammad Khan to perform grand meditative Alap sections of Dhrupad with deep acoustic sustain. Often nicknamed the "Bass Sitar".',
    structureAndMaking: 'Massive flat dried pumpkin resonator with a wide teak neck spanning over 1.5 meters, permitting deep sideways string bending (meend) up to 5 full musical intervals on a single fret.',
    whyEndangered: 'Its sheer weight, colossal size, and demanding fingering techniques led many students to prefer the lighter standard Sitar.',
    acousticNote: 'Thunderous, dark, meditative resonance with extraordinary 8-second sustained harmonics.',
    frequencyRange: 'Deep bass register (55 Hz – 390 Hz)',
    soundType: 'surbahar',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'yazh',
    name: 'Yazh (Ancient Tamil Harp)',
    originRegion: 'Ancient Tamil Nadu (Sangam Literature)',
    category: 'String (Tata)',
    description: 'The celestial open-string bowed/plucked harp documented in the 2,000-year-old Tamil Sangam epic Silappadikaram and temple sculptures of Mahabalipuram and Thanjavur.',
    structureAndMaking: 'Carved wooden body shaped like an arching Makara mythical sea creature or peacock, with a curved arm holding 14 to 21 twisted plant-fiber strings stretched across a leather soundboard.',
    whyEndangered: 'Virtually extinct after the 10th century CE as the fretted Vina became dominant; today painstakingly reconstructed by dedicated ethnomusicologists.',
    acousticNote: 'Crystal clear, ethereal, bell-like harp timbre with pure natural overtone scales.',
    frequencyRange: 'Wide open scale (130 Hz – 1050 Hz)',
    soundType: 'yazh',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pung',
    name: 'Pung (Manipuri Cylindrical Drum)',
    originRegion: 'Manipur (Pung Cholom Martial Dance)',
    category: 'Percussion (Avanaddha)',
    description: 'The sacred heart of Manipuri Sankirtana devotional music and classical Rasleela. Drummers leap, spin, and perform acrobatic martial jumps in mid-air while maintaining intricate rhythmic cycles (talas).',
    structureAndMaking: 'Cylindrical hollow body made of seasoned jackfruit or cedar wood, laced tightly with leather thongs, with clay-treated circular tuning paste (gab) applied to both drumheads.',
    whyEndangered: 'Requires rigorous combined physical martial gymnastics and complex classical percussion training; modern stage shows frequently use electronic drum machines.',
    acousticNote: 'Crisp, resonant, soaring percussive syllables with deep acoustic bounce.',
    frequencyRange: 'Percussive multi-tonal (80 Hz – 3500 Hz attack)',
    soundType: 'pung',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dilruba',
    name: 'Dilruba',
    originRegion: 'Punjab & Delhi (Sikh Shabad Kirtan Tradition)',
    category: 'String (Tata)',
    description: 'Commissioned in the 17th century by the 10th Sikh Guru, Guru Gobind Singh Ji, so warrior-poets could carry a light, portable bowed instrument on horseback during travels while preserving rich acoustic resonance for Gurmat Sangeet.',
    structureAndMaking: 'Lightweight boxwood frame with goat skin parchment over the sound chamber, 18-20 metallic frets, 4 main melody strings and up to 22 sympathetic resonance strings played with a curved horsehair bow.',
    whyEndangered: 'Harmonium overtook strings in gurudwaras in the 20th century, though a youth revival is actively bringing back the traditional string kirtan.',
    acousticNote: 'Rich, compassionate, expressive singing voice that effortlessly captures the pathos and joy of sacred hymns.',
    frequencyRange: 'Medium-high register (220 Hz – 950 Hz)',
    soundType: 'dilruba',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
  }
];

export const VANISHING_TRADITIONS_DATA: VanishingTradition[] = [
  {
    id: 'rogan-art',
    name: 'Rogan Painting on Fabric',
    type: 'Painting / Visual Art',
    originState: 'Gujarat (Nirona Village, Kutch)',
    region: 'West',
    history: 'A 300-year-old Persian-origin craft preserved solely by the Khatri family in Nirona village. Wild castor oil is boiled over fires for 2 days until it turns into a thick elastic paste, then blended with natural mineral pigments.',
    whoPractices: 'Practiced almost exclusively by Padma Shri Abdul Gafur Khatri and his extended family in Kutch.',
    howMade: 'The artisan takes a small lump of colored castor paste on their palm, uses a blunt 6-inch iron stylus to stretch it into gossamer-thin threads in mid-air, and lays it onto dark silk or cotton fabric without ever touching the cloth with the stylus. The fabric is then folded in half to create a mirror-image symmetrical tree of life.',
    challengesFaced: 'Extreme labor intensity (takes 3 to 6 months for a single masterpiece), difficulty of sourcing pure castor oil, and high risk of extinction if future generations discontinue practice.',
    howYouthCanHelp: [
      'Commission authentic Rogan artwork directly from master artisans',
      'Feature Rogan motifs in contemporary fashion and textile design',
      'Document and share high-definition process videos on social media to build global awareness'
    ],
    image: 'https://images.unsplash.com/photo-1600100397608-f010e4299955?auto=format&fit=crop&w=800&q=80',
    status: 'Critical',
    activeArtisansEstimated: 'Under 25 master artisans'
  },
  {
    id: 'tholu-bommalata',
    name: 'Tholu Bommalata (Leather Shadow Puppetry)',
    type: 'Performing Art',
    originState: 'Andhra Pradesh & Telangana (Nimmalakunta)',
    region: 'South',
    history: 'A 2,000-year-old performing tradition where giant translucent leather shadow puppets enact all-night performances of the Ramayana and Mahabharata behind an illuminated white cloth screen in village fields.',
    whoPractices: 'Hereditary nomadic puppeteer families (Killekyatha community) based in Anantapur district.',
    howMade: 'Puppets up to 6 feet tall are crafted from cured goat and deer leather. Artisans perforate intricate lace-like pinholes with chisels and paint with brilliant translucent vegetable colors so colored light beams through the screen.',
    challengesFaced: 'Loss of village patron audiences to cinema and digital smartphones; low earnings forcing families to switch to manufacturing small lampshades.',
    howYouthCanHelp: [
      'Invite shadow puppetry troupes to schools, cultural festivals, and universities',
      'Integrate puppet storytelling into animated digital children’s literature and indie theatre',
      'Support fair-trade artisanal leather lamp shades and wall panels'
    ],
    image: 'https://images.unsplash.com/photo-1590740608753-f7a35cbdfaa3?auto=format&fit=crop&w=800&q=80',
    status: 'Endangered',
    activeArtisansEstimated: '~80 practicing families'
  },
  {
    id: 'sanjhi-art',
    name: 'Sanjhi Paper Stencil Art',
    type: 'Craft',
    originState: 'Uttar Pradesh (Mathura & Vrindavan)',
    region: 'North',
    history: 'A 16th-century temple devotional art form dedicated to Radha and Krishna. Masters cut extremely intricate filigree stencils by hand without preliminary pencil outlines, using them to create dry-color rangolis floating on temple water tanks.',
    whoPractices: 'Brahmin temple craftspeople and Vaishnava artisan lineages in Mathura.',
    howMade: 'Artisans hold specially curved scissors with ultra-fine blades, folding handmade paper and cutting delicate floral vines, peacocks, and mythological scenes freehand with breathtaking speed and geometric precision.',
    challengesFaced: 'Mechanized laser cutting producing cheap printed copies, lack of young apprentices willing to spend 10 years mastering scissor techniques.',
    howYouthCanHelp: [
      'Incorporate Sanjhi papercut designs in modern architectural partitions, stationery, and lamps',
      'Organize master workshops and digital archives of ancestral stencil designs',
      'Educate consumers on recognizing authentic hand-cut paper filigree versus machine laser cuts'
    ],
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    status: 'Vulnerable',
    activeArtisansEstimated: '~40 master craftsmen'
  },
  {
    id: 'toda-embroidery',
    name: 'Toda Buffalo-Horn Embroidery (Pukhoor)',
    type: 'Textile',
    originState: 'Tamil Nadu (Nilgiri Hills)',
    region: 'South',
    history: 'The sacred geometric embroidery practiced exclusively by women of the ancient Toda pastoralist tribe living in the high Nilgiri biosphere. The distinctive red and black patterns symbolize buffalo horns, stars, and sacred hills.',
    whoPractices: 'Toda tribal women in high-altitude Nilgiri hamlets (Munds).',
    howMade: 'Executed on unbleached white coarse cotton fabric without any pre-drawn markings. Women count the warp and weft threads manually using darning needles, creating a reversible raised woven tapestry effect that resembles woven brocade.',
    challengesFaced: 'Shrinking Toda tribal population (around 1,500 people total), imitation by commercial powerloom manufacturers, and migration of youth.',
    howYouthCanHelp: [
      'Buy only GI-certified Toda shawls (Poothkuli) directly from tribal cooperatives',
      'Support research and documentation of oral tribal motifs and sacred songs',
      'Promote eco-tourism visits that respect tribal autonomy and cultural privacy'
    ],
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    status: 'Critical',
    activeArtisansEstimated: '~200 tribal women'
  },
  {
    id: 'dhokra-art',
    name: 'Dhokra Lost-Wax Bell Metal Casting',
    type: 'Craft',
    originState: 'Chhattisgarh, Odisha & West Bengal (Bastar & Dhenkanal)',
    region: 'Central',
    history: 'A 4,000-year-old non-ferrous metal casting technique directly linked to the Indus Valley "Dancing Girl". Practiced by indigenous tribal metal-smiths (Ghadwa and Dhokra Damar clans).',
    whoPractices: 'Tribal artisans in Bastar, Raigarh, Mayurbhanj, and Bankura.',
    howMade: 'A clay core is sculpted, wrapped with thin strands of pure beeswax to create textured designs, covered in layers of clay, and baked in open earthen pit kilns where the molten brass or bell metal replaces the melted wax.',
    challengesFaced: 'Rising cost of scrap brass and raw beeswax, physical toll of open pit smoke kilns, and exploitation by middlemen.',
    howYouthCanHelp: [
      'Connect tribal artisan self-help groups directly with global buyers via e-commerce',
      'Introduce safe, fuel-efficient green kilns that reduce smoke inhalation',
      'Commission custom trophies, interior décor, and urban public art from tribal sculptors'
    ],
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
    status: 'Vulnerable',
    activeArtisansEstimated: '~1,200 practicing families'
  },
  {
    id: 'warli-art',
    name: 'Warli Indigenous Wall Murals',
    type: 'Painting / Visual Art',
    originState: 'Maharashtra (Palghar & Thane Sahyadri Foothills)',
    region: 'West',
    history: 'Dating back to 2500 BCE, Warli art is a tribal ritual art form depicting harmony between humans, nature, and the cosmos. Traditionally painted on mud walls during weddings (Lagnacho Chauk) and harvests using basic geometric shapes: circle (sun/moon), triangle (mountains/trees), and square (sacred enclosure).',
    whoPractices: 'Warli tribal women (Suhasinis) and master artists in the northern Sahyadri forests.',
    howMade: 'Painted on mud walls coated with cow dung and red ochre (Geru). The white paint is made from a paste of rice flour, water, and gum resin, applied with a chewed bamboo twig brush.',
    challengesFaced: 'Commercialization on cheap synthetic goods where original ritual meanings and indigenous artist royalties are lost.',
    howYouthCanHelp: [
      'Adopt Warli art: learn the indigenous philosophy behind the Tarpa circular dance',
      'Support genuine Warli indigenous artist cooperatives in Palghar',
      'Help schools create authentic Warli biodiversity murals'
    ],
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    status: 'Vulnerable',
    activeArtisansEstimated: '~800 practicing artists'
  }
];
