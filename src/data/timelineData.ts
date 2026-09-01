import { TimelineEra } from '../types';

export const TIMELINE_ERAS: TimelineEra[] = [
  {
    id: 'ancient',
    name: 'Ancient India',
    period: 'c. 3300 BCE – 600 CE',
    tagline: 'Birth of Civilizations, Vedic Philosophy, the Concept of Zero & Golden Age Arts',
    summary: 'Spanning the Harappan grid cities, the composition of the Vedas and Upanishads, the Mauryan empire of Ashoka, and the Gupta Golden Age where Indian science, mathematics, and Sanskrit literature flourished.',
    bgGradient: 'from-amber-900/40 via-amber-800/20 to-stone-900/50',
    architecture: {
      title: 'Monolithic Rock-Cut Caves & Ashokan Pillars',
      description: 'Engineered planned grid cities with subterranean drainage (Mohenjo-daro & Dholavira), monumental rock-cut stupas (Sanchi, Karle), and carved cave sanctuaries (Ajanta & Ellora caves).',
      keyExamples: ['Great Stupa of Sanchi (3rd c. BCE)', 'Dholavira Water Cascades', 'Ajanta Cave Murals & Chaitya Halls', 'Ashokan Lion Capital at Sarnath'],
      image: 'https://images.unsplash.com/photo-1565019001157-1ff1a91e5d3c?auto=format&fit=crop&w=800&q=80'
    },
    artAndCraft: {
      title: 'Terracotta, Bronze Castings & Ajanta Frescoes',
      description: 'Lost-wax casting (the Dancing Girl of Mohenjo-daro), natural mineral tempera wall murals depicting Jataka tales, and high-relief sandstone sculptures of Mathura and Gandhara schools.',
      techniques: ['Lost-wax (Cire-perdue) bronze', 'Mud-plaster mineral tempera murals', 'Sandstone carving', 'Steatite seal engraving'],
      image: 'https://images.unsplash.com/photo-1600100397608-f010e4299955?auto=format&fit=crop&w=800&q=80'
    },
    literatureAndPhilosophy: {
      title: 'Vedas, Upanishads, Epics & Classical Sanskrit',
      description: 'Oral tradition of Rigveda, foundational philosophies of Vedanta, Samkhya, and Buddhism, plus the grand epics Ramayana, Mahabharata, and Kalidasa’s drama Abhijnanasakuntalam.',
      notableWorks: ['Rigveda & Samaveda (Chanted oral transmission)', 'Upanishads & Bhagavad Gita', 'Panini’s Ashtadhyayi (First formal linguistic grammar)', 'Kalidasa’s Meghaduta & Shakuntala']
    },
    scienceAndInventions: {
      title: 'Invention of Zero, Plastic Surgery & Heliocentric Astronomy',
      description: 'Aryabhata calculated Pi to 4 decimal places and proposed the Earth’s rotation. Sushruta pioneered rhinoplasty and surgical tools in Sushruta Samhita, and Charaka systematized Ayurveda.',
      breakthroughs: ['The numeral Zero (Shunya) and decimal place-value system', 'Sushruta Samhita surgical techniques and 121 steel instruments', 'Ayurvedic pharmacology & herbal medicine', 'Calculation of the solar year & Earth diameter by Aryabhata']
    },
    clothingAndAttire: {
      title: 'Antariya, Uttariya & Pure Unstitched Cottons',
      description: 'Fine muslin cottons and Ahimsa tussar silks worn as draped waistcloths (Antariya) and shoulder wraps (Uttariya), secured with gold filigree Mekhala girdles.',
      fabrics: ['Varanasi fine muslin cotton', 'Wild tussar and muga silk', 'Natural vegetable dyes (Madder red, Indigo blue)', 'Gold wire woven borders']
    },
    musicAndPerformingArts: {
      title: 'Bharata Muni’s Natyashastra & Gandharva Veda',
      description: 'Codification of the Navarasa (9 emotional essences), classical drama, and microtonal musical notes (22 Shrutis) played on the ancient Yazh harp and reed pipes.',
      traditions: ['Natyashastra dance-theatre treatise', 'Samavedic tonal chanting', 'Koodiyattam Sanskrit temple theatre', 'Ancient Yazh & Vina instruments']
    },
    religiousTraditions: {
      title: 'Dharma, Ahimsa & Yogic Meditative Systems',
      description: 'Coexistence of Sanatana Dharma, Jainism (Mahavira), and Buddhism (Gautama Buddha), establishing monastic universities at Nalanda, Takshashila, and Vallabhi.',
      customs: ['Nalanda University philosophical debates', 'Ashoka’s rock edicts on religious tolerance & wildlife protection', 'Yogic meditation (Patanjali Yoga Sutras)', 'Temple Agamas and Yajna rituals']
    },
    historicalObjects: [
      {
        name: 'Dancing Girl of Mohenjo-daro',
        significance: 'World’s oldest surviving bronze masterwork created via cire-perdue method.',
        material: 'Cast Bronze',
        foundLocation: 'Indus Valley (National Museum, New Delhi)'
      },
      {
        name: 'Lion Capital of Ashoka',
        significance: 'Polished sandstone sculpture with four Asiatic lions, the official National Emblem of India.',
        material: 'Chunar Sandstone',
        foundLocation: 'Sarnath Archaeological Museum, UP'
      },
      {
        name: 'Iron Pillar of Delhi',
        significance: 'Rust-resistant 7-meter metallurgical wonder from the Chandragupta II era (Gupta Empire).',
        material: 'High-purity Wrought Iron',
        foundLocation: 'Qutb Complex, New Delhi'
      }
    ]
  },
  {
    id: 'medieval',
    name: 'Medieval India',
    period: 'c. 600 CE – 1526 CE',
    tagline: 'Temple Towers, Maritime Empires, Bhakti Saints & Classical Synthesis',
    summary: 'The era of soaring granite Dravidian temples of the Cholas, the Rashtrakutas’ monolithic rock cutting, the Rajput hill citadels, the maritime spice trade spanning Southeast Asia, and the egalitarian Bhakti poet-saint movement.',
    bgGradient: 'from-orange-950/40 via-amber-900/20 to-stone-900/50',
    architecture: {
      title: 'Dravidian Vimanas, Stepwells & Hill Forts',
      description: 'The world’s first all-granite skyscraper at Brihadisvara, the subterranean stepped water reservoirs of Gujarat (Rani ki Vav), and the massive hilltop fortifications of Chittorgarh and Gwalior.',
      keyExamples: ['Brihadisvara Temple, Thanjavur (1010 CE)', 'Kailash Temple, Ellora (Single rock carved from top down)', 'Rani ki Vav, Patan', 'Konark Sun Temple Stone Chariot'],
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
    },
    artAndCraft: {
      title: 'Chola Lost-Wax Bronzes & Palm Leaf Manuscripts',
      description: 'Iconic Nataraja bronzes depicting the cosmic dance of creation and destruction, Odisha palm-leaf etchings (Tala Patra Chitra), and Thanjavur gold-foil paintings.',
      techniques: ['Chola Bronze casting using sacred ratio shilpa shastras', 'Palm-leaf stylus incising', 'Granite high-relief sculptural friezes', 'Bidri metal inlay work'],
      image: 'https://images.unsplash.com/photo-1609137144822-0797300f8dc4?auto=format&fit=crop&w=800&q=80'
    },
    literatureAndPhilosophy: {
      title: 'Bhakti Poetry, Regional Epics & Commentaries',
      description: 'The soulful verses of Kabir, Mirabai, Andal, Basaveshwara (Vachanas), and Kamban’s Ramavatharam in Tamil, making philosophy accessible in vernacular tongues.',
      notableWorks: ['Kabir’s Dohe & Bijak', 'Andal’s Thiruppavai & Divya Prabandham', 'Shankaracharya’s Advaita Vedanta commentaries', 'Basavanna’s Vachana literature in Kannada']
    },
    scienceAndInventions: {
      title: 'Kerala School of Astronomy & Wootz Crucible Steel',
      description: 'Madhava of Sangamagrama discovered infinite series for trigonometric functions 250 years before calculus was invented in Europe. Wootz steel was exported to make Damascus swords.',
      breakthroughs: ['Madhava-Leibniz infinite series calculus approximations', 'Wootz crucible steel technology with carbon nanotubes', 'Astronomical treatises of Bhaskara II (Lilavati)', 'Complex hydraulic stepwell water harvesting grids']
    },
    clothingAndAttire: {
      title: 'Kanjeevaram Weaves, Jamdani & Bandhani Tie-Dye',
      description: 'Heavy silk sarees with interlocking Korvai weaving and temple borders in the south; Bandhani resist-dyeing in the desert kingdoms; and airy Dhaka-style Jamdani weaves.',
      fabrics: ['Pure mulberry silk with real silver-gold Zari', 'Bandhani tie-dyed cambric', 'Patola double-ikat silk of Patan', 'Pashmina goat fleece from Kashmir']
    },
    musicAndPerformingArts: {
      title: 'Birth of Carnatic & Hindustani Traditions',
      description: 'Purandara Dasa systematized the pedagogy of Carnatic music; Amir Khusrau pioneered the Khayal vocal style, Qawwali, and the Sitar/Tabla prototypes.',
      traditions: ['Purandara Dasa’s Carnatic music curriculum', 'Khayal and Tarana vocal forms', 'Odissi temple Mahari dance tradition', 'Kathak storytelling in court and temple']
    },
    religiousTraditions: {
      title: 'Bhakti-Sufi Synthesis & Temple Economy',
      description: 'Sufi orders (Chishti) and Bhakti movements unified communities through love and music; temple complexes served as educational, agricultural, and cultural hubs.',
      customs: ['Langars (Community community dining in Sikhism founded by Guru Nanak)', 'Sufi Sama gatherings & Qawwalis at Nizamuddin', 'Rath Yatra of Puri Jagannath', 'Vithoba pilgrimage (Wari) of Pandharpur']
    },
    historicalObjects: [
      {
        name: 'Chola Nataraja Bronze',
        significance: 'World masterpiece depicting the cosmic Panchakritya (creation, preservation, destruction, illusion, grace).',
        material: 'Panchaloha (5-Metal Sacred Alloy)',
        foundLocation: 'Thanjavur, Tamil Nadu'
      },
      {
        name: 'Sun Temple Konark Stone Wheel',
        significance: 'Functioning sundial showing time accurate to minutes through shadow geometry.',
        material: 'Khondalite Stone',
        foundLocation: 'Konark, Odisha'
      }
    ]
  },
  {
    id: 'mughal',
    name: 'Mughal Era',
    period: 'c. 1526 – 1757 CE',
    tagline: 'Imperial Architecture, Pietra Dura Inlays, Charbagh Gardens & Court Arts',
    summary: 'An era of sublime architectural synthesis blending Persian, Central Asian, and indigenous Indian traditions, resulting in the Taj Mahal, Fatehpur Sikri, miniature painting ateliers, and the Golden Age of Hindustani classical music.',
    bgGradient: 'from-amber-950/40 via-red-950/20 to-stone-900/50',
    architecture: {
      title: 'Marble Monuments, Pietra Dura & Charbagh Gardens',
      description: 'Double-domed symmetrical mausoleums, red sandstone palace fortresses with Jharokha balconies, and water cascade gardens engineered with geometric perfection.',
      keyExamples: ['Taj Mahal, Agra (White Makrana marble)', 'Fatehpur Sikri & Buland Darwaza', 'Red Fort & Jama Masjid, Delhi', 'Humayun’s Tomb, Delhi'],
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80'
    },
    artAndCraft: {
      title: 'Mughal & Rajput Miniature Paintings, Meenakari & Jaali',
      description: 'Meticulous court miniatures painted using single-hair squirrel brushes with crushed lapis lazuli and gold leaf; vibrant Meenakari enamel on jewelry; and geometric marble Jaali screens.',
      techniques: ['Gouache miniatures with crushed gemstone pigments', 'Pietra Dura (Parchin Kari) marble gemstone inlay', 'Meenakari enamel work of Jaipur', 'Zardozi metallic bullion thread embroidery'],
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'
    },
    literatureAndPhilosophy: {
      title: 'Tulsidas Ramcharitmanas, Ain-i-Akbari & Dara Shikoh',
      description: 'Tulsidas composed the Ramcharitmanas in Awadhi; Dara Shikoh translated 50 Upanishads into Persian (Sirr-i-Akbar); and Ain-i-Akbari documented the administration and culture.',
      notableWorks: ['Tulsidas’ Ramcharitmanas', 'Dara Shikoh’s Majma-ul-Bahrain (Mingling of Two Oceans)', 'Abul Fazl’s Akbarnama', 'Mirza Ghalib & Zauq’s early Urdu poetry roots']
    },
    scienceAndInventions: {
      title: 'Jantar Mantar Astronomical Observatories & Seamless Metal Globes',
      description: 'Maharaja Sawai Jai Singh II built five colossal stone observatories to measure planetary orbits with arc-second precision. Metallurgists invented seamless celestial globes without seams.',
      breakthroughs: ['Samrat Yantra (World’s largest stone sundial, measuring time to 2-second accuracy)', 'Invention of seamless hollow celestial globes in Kashmir', 'Waterworks systems using Persian wheels and gravity siphon aqueducts', 'Distillation of Attar (Ittr) perfumes in Kannauj']
    },
    clothingAndAttire: {
      title: 'Angrakha, Choga, Peshwaz & Jamdani Muslins',
      description: 'Flowing asymmetric Angrakhas, velvet embroidered Chogas, sheer mulmul turbans with Sarpech jewels, and Dhaka Jamdani sarees light enough to pass through a signet ring.',
      fabrics: ['Chanderi & Maheshwari cotton-silk', 'Dhaka Ab-e-Rawan (Running Water) Muslin', 'Pashmina Kani shawls with paisley motifs', 'Pure silver Zardozi velvet coats']
    },
    musicAndPerformingArts: {
      title: 'Tansen, Dhrupad Vocalism & Kathak Flourish',
      description: 'Mian Tansen performed in Akbar’s court, creating ragas like Darbari Kanada and Megh Malhar; Kathak dancers integrated rapid Chakkars (pirouettes) and complex Tatkar footwork.',
      traditions: ['Dhrupad vocal traditions (Dagarbani & Bishnupur)', 'Creation of Ragas Darbari, Miyan ki Malhar, and Todi', 'Kathak court performances in Lucknow and Jaipur', 'Sitar and Surbahar evolution from the Tritantri Veena']
    },
    religiousTraditions: {
      title: 'Sulh-i-Kul, Ganga-Jamuni Tehzeeb & Sikh Gurus',
      description: 'Akbar’s philosophy of universal harmony (Sulh-i-Kul); Guru Arjan Dev compiled the Adi Granth and built Sri Harmandir Sahib (Golden Temple) in Amritsar.',
      customs: ['Compilation of Guru Granth Sahib at Harmandir Sahib', 'Ganga-Jamuni Tehzeeb (Syncretic North Indian lifestyle)', 'Urs festivals of Sufi shrines (Ajmer Sharif)', 'Navroz and Diwali celebrations in the imperial court']
    },
    historicalObjects: [
      {
        name: 'Samrat Yantra of Jantar Mantar',
        significance: '27-meter tall equinoctial sundial calculating local solar time to 2 seconds precision.',
        material: 'Local Stone and Marble Plaster',
        foundLocation: 'Jaipur, Rajasthan'
      },
      {
        name: 'Peacock Throne (Takht-i-Taus) Legends',
        significance: 'Legendary jewel-encrusted imperial seat housing the Koh-i-Noor and Timur Ruby.',
        material: 'Solid Gold and Precious Gemstones',
        foundLocation: 'Originally Diwan-i-Khas, Red Fort'
      }
    ]
  },
  {
    id: 'colonial',
    name: 'Colonial Era',
    period: 'c. 1757 – 1947 CE',
    tagline: 'Resistance, Bengal Renaissance, Indo-Saracenic Architecture & National Awakening',
    summary: 'A time of profound transformation marked by the struggle for freedom, the revival of Indian classical arts, the Bengal Renaissance, the spread of the printing press, and the synthesis of Victorian and Indian aesthetics.',
    bgGradient: 'from-slate-900/40 via-red-950/20 to-stone-900/50',
    architecture: {
      title: 'Indo-Saracenic & Victorian Gothic Revival',
      description: 'A striking architectural blend combining British Victorian geometry with Mughal domes, Rajasthani Jharokhas, and Dravidian pillars.',
      keyExamples: ['Chhatrapati Shivaji Maharaj Terminus (Victoria Terminus), Mumbai', 'Victoria Memorial, Kolkata', 'Gateway of India, Mumbai', 'Rashtrapati Bhavan & Lutyens’ Delhi'],
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80'
    },
    artAndCraft: {
      title: 'Raja Ravi Varma & The Bengal School of Art',
      description: 'Raja Ravi Varma combined European oil realism with Indian mythological themes, printing accessible lithographs. Abanindranath Tagore founded the swadeshi Bengal School of Art.',
      techniques: ['Oleograph and lithographic printing', 'Bengal wash technique watercolor', 'Kalighat patachitra folk paintings', 'Company School documentation drawings'],
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    },
    literatureAndPhilosophy: {
      title: 'Tagore’s Gitanjali, Swadeshi Writings & Bharati’s Poetry',
      description: 'Rabindranath Tagore won the Nobel Prize for Gitanjali (1913); Bankim Chandra composed Vande Mataram; Subramania Bharati in Tamil and Premchand in Hindi ignited social consciousness.',
      notableWorks: ['Rabindranath Tagore’s Gitanjali', 'Bankim Chandra Chattopadhyay’s Anandamath (Vande Mataram)', 'Swami Vivekananda’s Chicago Addresses on Universal Brotherhood', 'Munshi Premchand’s Godan & Nirmala']
    },
    scienceAndInventions: {
      title: 'Raman Effect, Bose-Einstein Statistics & Crescograph',
      description: 'Sir C.V. Raman discovered the Raman Effect (Nobel Prize 1930); J.C. Bose pioneered millimeter-wave radio physics and plant sensitivity; Srinivasa Ramanujan formulated modular forms and infinite series.',
      breakthroughs: ['Raman Effect in light scattering (C.V. Raman)', 'Invention of Crescograph and wireless radio communication (J.C. Bose)', 'Ramanujan’s Mock Theta functions and number theory formulas', 'Saha Ionization Equation in astrophysics (Meghnad Saha)']
    },
    clothingAndAttire: {
      title: 'The Swadeshi Khadi Revolution & Sherwani Evolution',
      description: 'Mahatma Gandhi popularized handspun Khadi as a symbol of self-reliance; the classic Achkan/Sherwani and Nehru jacket emerged alongside the modern Nivi drape saree.',
      fabrics: ['Handspun and handwoven Khadi cotton', 'Swadeshi cotton handlooms', 'Mulmul sarees with Nivi pleating drape', 'Silk Bandhgala jackets']
    },
    musicAndPerformingArts: {
      title: 'Madras Music Academy, All India Radio & Classical Revival',
      description: 'Rukmini Devi Arundale revived Bharatanatyam from devadasis to the concert stage (Kalakshetra); Bhatkhande systematized the 10 Hindustani Thaat scale system.',
      traditions: ['Establishment of Madras Music Academy & Margazhi Season', 'Bhatkhande’s Hindustani classical notation and Thaat classification', 'Rabindra Sangeet music movement in Bengal', 'Gramophone recording of classical masters (Gauhar Jaan)']
    },
    religiousTraditions: {
      title: 'Reform Movements: Brahmo Samaj, Arya Samaj & Ramakrishna Mission',
      description: 'Social reform movements abolished oppressive customs, championed women’s education, and presented Vedanta to the modern global world.',
      customs: ['Sarvajanik Ganeshotsav in Maharashtra (popularized by Lokmanya Tilak for national unity)', 'Ramakrishna Mission humanitarian service as worship (Shiva Jnane Jiva Seva)', 'Inter-community Swadeshi gatherings and Prabhat Pheris']
    },
    historicalObjects: [
      {
        name: 'Mahatma Gandhi’s Charkha (Spinning Wheel)',
        significance: 'Symbol of economic self-reliance, non-violent resistance, and swadeshi cottage industry.',
        material: 'Teak Wood and Cotton Yarn',
        foundLocation: 'Sabarmati Ashram, Ahmedabad'
      },
      {
        name: 'Original Nobel Prize Citation of Tagore (1913)',
        significance: 'First Nobel Prize awarded to an Asian writer for literature (Gitanjali).',
        material: 'Vellum Scroll and Gold Medal',
        foundLocation: 'Visva-Bharati University, Santiniketan'
      }
    ]
  },
  {
    id: 'independent',
    name: 'Independent India',
    period: 'c. 1947 – 2000 CE',
    tagline: 'Constitution, Green Revolution, Space Program & Cultural Renaissance',
    summary: 'A golden chapter of nation-building: crafting the world’s most comprehensive democratic constitution, achieving food self-sufficiency through the Green Revolution, launching satellites with indigenous technology, and institutionalizing classical arts.',
    bgGradient: 'from-emerald-950/40 via-amber-900/20 to-stone-900/50',
    architecture: {
      title: 'Modernist Temples of Modern India & Chandigarh',
      description: 'Le Corbusier planned the capital of Chandigarh with brutalist concrete elegance; Charles Correa and B.V. Doshi integrated vernacular courtyards and climate-responsive stone arches.',
      keyExamples: ['Chandigarh Capitol Complex (Le Corbusier)', 'Gandhi Smarak Sangrahalaya, Ahmedabad (Charles Correa)', 'Lotus Temple (Bahá\'í House of Worship), Delhi', 'IIM Bangalore Campus (B.V. Doshi)'],
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    },
    artAndCraft: {
      title: 'Progressive Artists’ Group & National Handloom Revival',
      description: 'M.F. Husain, F.N. Souza, and S.H. Raza formed the Progressive Artists’ Group in Bombay, while Pupul Jayakar spearheaded national preservation of rural weaves and crafts.',
      techniques: ['Modern Indian acrylic and oil expressions', 'National Handloom Board master weavers revival', 'Ceramic studio pottery (Delhi Blue)', 'Kalamkari & Warli global recognition'],
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
    },
    literatureAndPhilosophy: {
      title: 'Sahitya Akademi, Post-Colonial Masterpieces & Dalit Voices',
      description: 'Post-independence literature addressed identity and social transformation, featuring R.K. Narayan’s Malgudi Days, Mahasweta Devi, and Namdeo Dhasal’s transformative poetry.',
      notableWorks: ['R.K. Narayan’s Malgudi Days & The Guide', 'Constitution of India (Calligraphed by Prem Behari Narain Raizada)', 'Sri Aurobindo’s Savitri: A Legend and a Symbol', 'Harivansh Rai Bachchan’s Madhushala']
    },
    scienceAndInventions: {
      title: 'ISRO Space Program, Green Revolution & Supercomputing',
      description: 'Dr. Vikram Sarabhai and Dr. Homi Bhabha built India’s space and atomic programs; M.S. Swaminathan led the Green Revolution; CDAC engineered the PARAM supercomputer.',
      breakthroughs: ['Aryabhata Satellite launch (1975)', 'Development of indigenous PSLV launch vehicles', 'Green Revolution HYV wheat and rice self-reliance', 'PARAM 8000 supercomputer engineered by C-DAC (1991)']
    },
    clothingAndAttire: {
      title: 'Handloom Revival, Fabindia Movement & Indian Haute Couture',
      description: 'Government emporiums (Central Cottage Industries) and pioneering designers like Ritu Kumar revived antique zardozi, handblock Ajrakh, and Pochampally ikats on global runways.',
      fabrics: ['Pochampally and Sambalpuri Ikat', 'Chanderi and Tussar silk saris', 'Handblocked Bagru and Dabu prints', 'Kashmiri walnut-dyed crewel embroidery']
    },
    musicAndPerformingArts: {
      title: 'Global Sitar Sensation, Sangeet Natak Akademi & SPIC MACAY',
      description: 'Pandit Ravi Shankar and Ustad Bismillah Khan brought Indian classical ragas to Woodstock and Carnegie Hall; MS Subbulakshmi sang at the UN General Assembly.',
      traditions: ['Pandit Ravi Shankar & Pandit Hariprasad Chaurasia global concerts', 'M.S. Subbulakshmi’s 1966 historic United Nations concert', 'Sangeet Natak Akademi preservation of 8 classical dance forms', 'Doordarshan cultural broadcasting (Surabhi)']
    },
    religiousTraditions: {
      title: 'Constitutional Secularism & Unity in Diversity',
      description: 'India enshrined fundamental rights safeguarding freedom of religion for all faiths, continuing centuries of composite living and festival sharing.',
      customs: ['Republic Day Cultural Pageants showcasing state tableaus', 'Kumbh Mela as the world’s largest peaceful gathering of millions', 'National festivals (Independence Day, Gandhi Jayanti)', 'Interfaith communal harmony traditions']
    },
    historicalObjects: [
      {
        name: 'The Calligraphed Constitution of India',
        significance: 'Handwritten in flowing italic style with pages illuminated by Nandalal Bose with historic scenes.',
        material: 'Parchment and Black Ink (Helium-preserved in Parliament)',
        foundLocation: 'Parliament Library, New Delhi'
      },
      {
        name: 'First Sounding Rocket Nike-Apache Transported on Bicycle',
        significance: 'Iconic photograph of ISRO’s humble origins in Thumba (1963) to becoming a global space giant.',
        material: 'Archival Photograph and Rocket Casing',
        foundLocation: 'VSSC Museum, Thiruvananthapuram'
      }
    ]
  },
  {
    id: 'modern',
    name: 'Modern India',
    period: 'c. 2000 – Present',
    tagline: 'Digital Heritage, Moon & Mars Expeditions, 42+ UNESCO Sites & Global Resonance',
    summary: 'A vibrant era where 5,000 years of civilization seamlessly meets 21st-century innovation: lunar landings at the South Pole, AI preservation of endangered languages, 42+ UNESCO World Heritage treasures, and a thriving youth renaissance celebrating roots.',
    bgGradient: 'from-sky-950/40 via-amber-950/20 to-stone-900/50',
    architecture: {
      title: 'Statue of Unity, Sustainable Eco-Architecture & Temple Revivals',
      description: 'World’s tallest statue (Statue of Unity, 182m), state-of-the-art green-certified modern airports (Bengaluru Terminal 2 bamboo garden), and heritage restoration of Kashi Vishwanath Corridor and Ram Mandir.',
      keyExamples: ['Statue of Unity, Kevadia (182m World Record)', 'Bengaluru Kempegowda Airport Terminal 2 "Terminal in a Garden"', 'Kashi Vishwanath Cultural Corridor, Varanasi', 'Chenab Rail Bridge (World’s highest railway arch bridge)'],
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80'
    },
    artAndCraft: {
      title: 'GI-Tag Registrations, Kochi-Muziris Biennale & Digital Art',
      description: 'Over 500+ indigenous crafts secured Geographical Indication (GI) protection. Kochi-Muziris Biennale stands as South Asia’s largest contemporary art festival.',
      techniques: ['Geographical Indication (GI) certified authenticity', 'Contemporary fusion with traditional Warli/Madhubani/Pichwai', '3D laser scanning and AR/VR monument preservation', 'Eco-friendly natural indigo and zero-waste handlooms'],
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    },
    literatureAndPhilosophy: {
      title: 'Jaipur Literature Festival, International Booker Prize & Digital Publishing',
      description: 'Geetanjali Shree won the International Booker Prize for Tomb of Sand (Ret Samadhi, first Hindi novel); Jaipur Literature Festival became the "Greatest Literary Show on Earth".',
      notableWorks: ['Geetanjali Shree’s Tomb of Sand (Tomb of Sand / Ret Samadhi)', 'Aravind Adiga’s The White Tiger', 'Amish Tripathi’s Shiva Trilogy and Ram Chandra Series', 'Shashi Tharoor’s Inglorious Empire & An Era of Darkness']
    },
    scienceAndInventions: {
      title: 'Chandrayaan-3 South Pole Landing, UPI Digital Payments & Vaccine Maitri',
      description: 'India became the first nation to land near the lunar South Pole (Chandrayaan-3) and sent Aditya-L1 to study the Sun; Unified Payments Interface (UPI) processes 14+ billion transactions monthly.',
      breakthroughs: ['Chandrayaan-3 landing at Shiv Shakti point near the Moon’s South Pole (2023)', 'Unified Payments Interface (UPI) real-time open payment architecture', 'Aditya-L1 Solar Mission at Lagrange Point 1', 'Indigenous NavIC satellite navigation constellation']
    },
    clothingAndAttire: {
      title: 'Conscious Handloom Movement, Saree Renaissance & Global Red Carpets',
      description: 'Young generations embracing #NationalHandloomDay, handcrafted Khadi jackets, sustainable Ahimsa silk gowns, and traditional drapes worn at Cannes and Met Gala.',
      fabrics: ['Organic wild Eri and Muga Ahimsa silk', 'Handspun Khadi denim', 'Paithani, Jamdani and Banarasi heirloom saris', 'Handmade recycled sustainable botanic textiles']
    },
    musicAndPerformingArts: {
      title: 'Oscar-Winning Naatu Naatu, Coke Studio Bharat & Indie Folk Fusion',
      description: 'Naatu Naatu won the Academy Award for Best Original Song; indie artists and folk musicians collaborate across regional dialects on global streaming platforms.',
      traditions: ['Academy Award & Golden Globe winning Naatu Naatu (MM Keeravani)', 'Coke Studio Bharat and regional folk revival', 'International Day of Yoga observed globally on June 21', 'A.R. Rahman’s pioneering fusion of symphonic orchestras with sufi and carnatic ragas']
    },
    religiousTraditions: {
      title: 'Global Celebration of Indian Festivals & UNESCO Inscriptions',
      description: 'Durga Puja in Kolkata, Kumbh Mela, and Vedic Chanting inscribed on the UNESCO Representative List of the Intangible Cultural Heritage of Humanity.',
      customs: ['Durga Puja in Kolkata (UNESCO Intangible Cultural Heritage)', 'International Day of Yoga across 190+ countries', 'Diwali recognized as official school holidays in world capitals', 'Garba of Gujarat inscribed as UNESCO Intangible Cultural Heritage (2023)']
    },
    historicalObjects: [
      {
        name: 'Chandrayaan-3 Pragyan Rover Wheel Imprint',
        significance: 'Embossed the National Emblem of India (Ashokan Lion Capital) and ISRO logo onto lunar soil.',
        material: 'Aerospace-grade Aluminum Alloy and Lunar Soil',
        foundLocation: 'Shiv Shakti Point, Moon’s Lunar South Pole'
      },
      {
        name: 'UNESCO Inscription Plaque of Garba & Durga Puja',
        significance: 'Recognized by humanity as living treasures of collective cultural celebration and social inclusion.',
        material: 'Official UNESCO Parchment & Bronze Commemorative Plaque',
        foundLocation: 'New Delhi & Paris Headquarters'
      }
    ]
  }
];
