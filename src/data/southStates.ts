import { StateHeritage } from '../types';

export const SOUTH_STATES: StateHeritage[] = [
  {
    id: 'kerala',
    name: 'Kerala',
    capital: 'Thiruvananthapuram',
    region: 'South',
    coordinates: [10.8505, 76.2711],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    tagline: 'God\'s Own Country, Backwaters, Kathakali & Spice Coast',
    overview: 'Kerala is celebrated for its lush palm-fringed Arabian backwaters, 5,000-year-old Ayurvedic heritage, classical Kathakali dance-theatre, Kalaripayattu martial traditions, and exquisite spice-scented cuisine.',
    officialLanguage: 'Malayalam',
    spokenLanguages: ['Malayalam', 'Tamil', 'English'],
    stateAnimal: 'Indian Elephant',
    stateBird: 'Great Hornbill',
    funFact: 'Kerala boasts India\'s highest Human Development Index (HDI), highest literacy rate (>96%), and is the birthplace of the world\'s oldest martial art, Kalaripayattu.',
    monuments: [
      {
        name: 'Sree Padmanabhaswamy Temple',
        type: 'Chera & Dravidian Royal Sanctum',
        century: '8th Century AD (Rebuilt 1731 AD)',
        location: 'Thiruvananthapuram',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
        description: 'World\'s wealthiest religious institution, featuring a 100-foot 7-tier gopuram and a sanctum where Lord Vishnu rests on the serpent Anantha in Ananthasayanam posture.',
        coordinates: [8.4828, 76.9436]
      },
      {
        name: 'Bekal Fort',
        type: 'Coastal Keyhole Fort',
        century: '1650 AD (17th Century)',
        location: 'Kasaragod',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        description: 'Largest keyhole-shaped fort in Kerala rising directly from the Arabian Sea, featuring observation towers used by Tipu Sultan.',
        coordinates: [12.3925, 75.0317]
      },
      {
        name: 'Mattancherry Palace (Dutch Palace)',
        type: 'Kerala-Dutch Colonial Palace',
        century: '1555 AD (16th Century)',
        location: 'Kochi',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        description: 'Built by the Portuguese and renovated by the Dutch, housing some of the best preserved Hindu mythological murals depicting the Ramayana.',
        coordinates: [9.9583, 76.2592]
      }
    ],
    artAndDance: [
      {
        name: 'Kathakali',
        type: 'Dance',
        origin: '17th Century Travancore',
        description: 'Classical dance-drama combining elaborate facial makeup (Pacha, Kathi, Minukku), dynamic eye movements (Navarasas), mudras, and epic storytelling.',
        instruments: ['Chenda', 'Maddalam', 'Chengila', 'Ilathalam'],
        costumeHighlight: 'Kireedam (towering crown), billowing multi-layered white skirts, and painted face masks.'
      },
      {
        name: 'Kalaripayattu',
        type: 'Martial Art',
        origin: 'Ancient Kerala (3rd Century BCE)',
        description: 'The mother of all martial arts, focusing on body agility, animal-inspired postures, flexible swords (Urumi), and pressure point strikes (Marmam).',
        instruments: ['Chenda']
      },
      {
        name: 'Theyyam',
        type: 'Theatre',
        origin: 'North Malabar (Kolathunadu)',
        description: 'Ancient ritualistic dance where the performer transcends into a living divine deity with towering ornamental headdresses and fire torches.',
        instruments: ['Chenda', 'Kuzhal', 'Ilathalam']
      },
      {
        name: 'Mohiniyattam',
        type: 'Dance',
        origin: 'Classical Kerala',
        description: 'Graceful feminine classical dance embodying the enchantress Mohini, performed with subtle swaying body movements mimicking palm fronds.',
        costumeHighlight: 'Kasavu white and golden border saree with side hair bun (Kuduma) adorned with jasmine.'
      }
    ],
    cuisines: [
      {
        name: 'Kerala Sadya on Banana Leaf',
        category: 'Vegetarian',
        description: 'Grand vegetarian feast of 24+ dishes served on a plantain leaf, including Avial, Sambar, Olan, Thoran, Kalan, and sweet Palada Payasam.',
        keyIngredients: ['Coconut', 'Curd', 'Curry Leaves', 'Coconut Oil', 'Raw Banana', 'Tamarind', 'Jaggery']
      },
      {
        name: 'Malabar Parotta & Beef/Chicken Roast',
        category: 'Non-Vegetarian',
        description: 'Flaky, spiral-layered griddle flatbread served with slow-roasted meat seasoned with browned shallots, crushed black pepper, and curry leaves.',
        keyIngredients: ['Maida/Flour', 'Meat', 'Shallots', 'Black Pepper', 'Coconut Oil', 'Curry Leaves']
      },
      {
        name: 'Appam with Stew & Karimeen Pollichathu',
        category: 'Non-Vegetarian',
        description: 'Lacy fermented rice batter hoppers with creamy coconut milk vegetable/meat stew, paired with Pearl Spot fish wrapped in banana leaves and pan-grilled.',
        keyIngredients: ['Fermented Rice Flour', 'Coconut Milk', 'Pearl Spot Fish (Karimeen)', 'Shallots', 'Green Chilies'],
        giTag: true
      }
    ],
    festivals: [
      {
        name: 'Onam & Vallam Kali (Snake Boat Race)',
        timing: 'Chingam (August - September)',
        significance: 'State festival welcoming the mythological King Mahabali, featuring the breathtaking Nehru Trophy Boat Race in Punnamada Lake.',
        keyRitual: 'Pookkalam floral carpets at doorways, Thiruvathira dance, and sumptuous Onam Sadya.',
        highlight: 'Chundan Vallams (100-foot snake boats) rowed by 100+ oarsmen chanting Vanchipattu boat songs.'
      },
      {
        name: 'Thrissur Pooram',
        timing: 'Medam (April - May)',
        significance: 'The mother of all temple festivals held at Vadakkunnathan Temple, featuring competitive displays between Paramekkavu and Thiruvambadi temples.',
        keyRitual: 'Ilanjithara Melam (250+ percussionists), Kudamattam (rapid exchange of sequined silk umbrellas atop 30 caparisoned elephants).',
        highlight: 'All-night temple drumming and colossal fireworks.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Kasavu Handloom Mundu & Sarees (Balaramapuram, Chendamangalam)', 'Kuthampully Weaves'],
      handicrafts: ['Aranmula Kannadi (Handmade Metal Mirror with secret alloy)', 'Nettur Petti Wooden Jewel Boxes', 'Kathakali Wooden Masks', 'Bell Metal Lamps (Nilavilakku)'],
      traditionalMenAttire: 'Mundu (white cotton garment with golden Kasavu border) with shirt or Angavastram.',
      traditionalWomenAttire: 'Set Mundu (Mundum Neriyathum) woven with pure golden Kasavu border.',
      giTaggedCrafts: ['Aranmula Kannadi', 'Balaramapuram Sarees', 'Kasargod Sarees', 'Chendamangalam Dhoties', 'Pokkali Rice', 'Palakkadan Matta Rice']
    },
    historyTimeline: [
      {
        era: '3000 BCE - 14th Century AD',
        title: 'Muziris & Spice Route Trade',
        description: 'Ancient port of Muziris traded black pepper, cardamom, and timber with ancient Rome, Egypt, Greece, Arabia, and China.'
      },
      {
        era: '9th - 12th Century AD',
        title: 'Kulasekhara (Second Chera) Empire',
        description: 'Revival of Malayalam language, temple arts, astronomy, and unified maritime governance from Mahodayapuram (Kodungallur).'
      },
      {
        era: '1741 AD',
        title: 'Battle of Colachel',
        description: 'King Marthanda Varma of Travancore defeated the Dutch East India Company, the only time an Asian power decisively routed a European naval fleet in India.'
      },
      {
        era: '1956 AD',
        title: 'Formation of Modern Kerala',
        description: 'Unified the Malayalam-speaking regions of Travancore, Cochin, and Malabar on linguistic lines.'
      }
    ]
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    capital: 'Chennai',
    region: 'South',
    coordinates: [11.1271, 78.6569],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Land of Temples, Classical Tamil Antiquity, Carnatic Music & Chola Bronzes',
    overview: 'Tamil Nadu is home to one of the world\'s oldest classical civilizations and living languages (Tamil). It is famed for towering Chola granite temples, Bharatanatyam, Kanchipuram silk, Carnatic music, and culinary mastery from Chettinad to Madurai.',
    officialLanguage: 'Tamil',
    spokenLanguages: ['Tamil', 'Telugu', 'Kannada', 'English'],
    stateAnimal: 'Nilgiri Tahr',
    stateBird: 'Emerald Dove',
    funFact: 'Tamil is officially recognized as the world\'s oldest living classical language, with Sangam literature dating back over 2,500 years.',
    monuments: [
      {
        name: 'Brihadisvara Temple (Big Temple)',
        type: 'Great Living Chola Temple',
        century: '1010 AD (11th Century) / Raja Raja Chola I',
        location: 'Thanjavur',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'Granite wonder featuring a 216-foot Vimana (sanctum tower) topped by an 80-tonne single granite capstone, with monumental Nandi bull statue.',
        coordinates: [10.7828, 79.1318]
      },
      {
        name: 'Meenakshi Amman Temple',
        type: 'Dravidian Gopuram Complex',
        century: '6th Century BCE / Nayak Golden Age 16th Century',
        location: 'Madurai',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
        description: 'Epicenter of Madurai featuring 14 soaring gopurams decorated with thousands of colorful stucco sculptures, the Hall of 1000 Pillars, and musical pillars.',
        coordinates: [9.9195, 78.1193]
      },
      {
        name: 'Shore Temple & Shore Reliefs',
        type: 'Pallava Monolithic Rock-Cut Temple',
        century: '700 - 728 AD / Narasimhavarman II',
        location: 'Mahabalipuram',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
        description: 'Overlooks the Bay of Bengal, accompanied by the world\'s largest open-air bas-relief sculpture: "Descent of the Ganga / Arjuna\'s Penance".',
        coordinates: [12.6169, 80.1983]
      }
    ],
    artAndDance: [
      {
        name: 'Bharatanatyam',
        type: 'Dance',
        origin: 'Temples of Tamil Nadu (Natya Shastra)',
        description: 'Oldest classical dance tradition of India characterized by fixed upper torso, bent legs (Aramandi), rhythmic footwork (Adavus), and expressive eyes (Abhinaya).',
        instruments: ['Mridangam', 'Nadaswaram', 'Violin', 'Veena', 'Cymbals (Nattuvangam)'],
        costumeHighlight: 'Pleated silk saree with fan that spreads during knee bends, golden temple jewelry, and floral veni.'
      },
      {
        name: 'Carnatic Music',
        type: 'Music',
        origin: 'Classical South India / Trinity of Tyagaraja, Muthuswami Dikshitar, Syama Sastri',
        description: 'Intricate modal musical system based on Ragas and Talas celebrated during the Chennai December Music Season.',
        instruments: ['Veena', 'Mridangam', 'Ghatam', 'Kanjira', 'Nadaswaram']
      },
      {
        name: 'Silambam',
        type: 'Martial Art',
        origin: 'Ancient Tamil Nadu (Sangam Period)',
        description: 'Traditional weapon-based martial art using a flexible bamboo staff spun at lightning speeds.',
        instruments: ['Parai (Drum)']
      }
    ],
    cuisines: [
      {
        name: 'Chettinad Chicken & Pepper Mutton',
        category: 'Non-Vegetarian',
        description: 'World-famous spicy aromatic curry from the merchant Chettiar community, made with freshly stone-ground roasted spices, kalpasi (stone flower), and star anise.',
        keyIngredients: ['Chicken/Mutton', 'Kalpasi (Black Stone Flower)', 'Maratti Mokku', 'Shallots', 'Black Pepper', 'Curry Leaves']
      },
      {
        name: 'Idli, Sambar & Filter Coffee (Degree Coffee)',
        category: 'Vegetarian',
        description: 'Pillowy steamed fermented rice-lentil cakes with drumstick-shallot sambar, four chutneys, and frothy chicory-blended filter coffee in brass Davarah-tumbler.',
        keyIngredients: ['Parboiled Rice', 'Urad Dal', 'Drumsticks', 'Shallots', 'Tamarind', 'Coffee Beans', 'Milk']
      },
      {
        name: 'Madurai Jigarthanda & Pongal',
        category: 'Dessert',
        description: '"Heart-cooling" dessert drink made of almond gum (badam pisin), nannari root syrup, reduced milk, and ice cream; paired with ghee-laden Ven Pongal.',
        keyIngredients: ['Badam Pisin', 'Reduced Milk', 'Nannari Syrup', 'Raw Rice', 'Moong Dal', 'Black Peppercorns', 'Cashews', 'Ghee'],
        giTag: true
      }
    ],
    festivals: [
      {
        name: 'Pongal & Jallikattu',
        timing: 'Thai (Mid-January - 4 Days)',
        significance: 'Four-day solar harvest festival thanking the Sun God, cattle, and agrarian nature (Bhogi, Surya Pongal, Mattu Pongal, Kaanum Pongal).',
        keyRitual: 'Boiling fresh rice and milk in clay pots until it spills over shouting "Pongalo Pongal!", followed by heroic Jallikattu bull taming.',
        highlight: 'Kolam rice-powder drawings and decorated cattle.'
      },
      {
        name: 'Chithirai Festival Madurai',
        timing: 'Chithirai (April - May)',
        significance: 'Month-long reenactment of the celestial wedding of Goddess Meenakshi to Lord Sundareswarar.',
        keyRitual: 'Lord Kallazhagar entering the Vaigai River mounted on a golden horse.',
        highlight: 'Million devotees in celebratory procession with water spraying.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Kanchipuram Mulberry Silk Sarees (Pure Zari)', 'Madurai Sungudi Sarees', 'Bhavani Jamakkalam Carpets', 'Salem White Silk'],
      handicrafts: ['Thanjavur Gold Foil Paintings', 'Swamimalai Chola Bronze Idols (Lost-wax method)', 'Thanjavur Dancing Dolls (Thalayatti Bommai)', 'Nachiyar Koil Brass Lamps'],
      traditionalMenAttire: 'Veshti / Dhoti with Angavastram draped over shoulder.',
      traditionalWomenAttire: 'Pure Kanchipuram Silk Saree with heavy golden zari pallu.',
      giTaggedCrafts: ['Kanchipuram Silk', 'Thanjavur Paintings', 'Swamimalai Bronze Icons', 'Madurai Sungudi', 'Thanjavur Doll', 'Nachiyarkoil Lamp']
    },
    historyTimeline: [
      {
        era: '6th Century BCE - 3rd Century CE',
        title: 'Sangam Era & Ancient Tamil Academies',
        description: 'Golden age of Tamil literature, poetry, and overseas trade with Roman Empire from ports of Poompuhar and Korkai.'
      },
      {
        era: '9th - 13th Century AD',
        title: 'Imperial Chola Maritime Empire',
        description: 'Raja Raja Chola and Rajendra Chola built grand granite temples, blue-water navies, and established cultural influence over Southeast Asia (Srivijaya).'
      },
      {
        era: '16th - 17th Century AD',
        title: 'Madurai & Thanjavur Nayak Renaissance',
        description: 'Construction of magnificent pillared temple corridors, palace complexes, and patronization of Carnatic music and Bharatanatyam.'
      },
      {
        era: '1969 AD',
        title: 'Madras State Renamed Tamil Nadu',
        description: 'Officially named Tamil Nadu ("Tamil Country") celebrating linguistic classical heritage.'
      }
    ]
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    capital: 'Bengaluru',
    region: 'South',
    coordinates: [15.3173, 75.7139],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1600100397608-f010e4299955?auto=format&fit=crop&w=1200&q=80',
    tagline: 'One State, Many Worlds — Vijayanagara Gold, Mysore Palace & Hoysala Gems',
    overview: 'Karnataka is a cultural superpower spanning the boulder-strewn ruins of the Vijayanagara Empire in Hampi, the intricate star-shaped Hoysala stone temples, royal Mysore Dasara pageantry, and Bengaluru\'s modern tech innovation.',
    officialLanguage: 'Kannada',
    spokenLanguages: ['Kannada', 'Tulu', 'Kodava', 'Konkani', 'Telugu', 'Urdu'],
    stateAnimal: 'Asian Elephant',
    stateBird: 'Indian Roller',
    funFact: 'Hampi in Karnataka was the second-largest city in the medieval world after Beijing around 1500 AD, trading precious gems by the kilogram in open bazaars.',
    monuments: [
      {
        name: 'Hampi (Vijayanagara Ruins & Stone Chariot)',
        type: 'Vijayanagara Imperial Capital',
        century: '1336 - 1565 AD (14th - 16th Century)',
        location: 'Vijayanagara District',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1600100397608-f010e4299955?auto=format&fit=crop&w=800&q=80',
        description: 'Sprawling UNESCO world heritage site along the Tungabhadra River, featuring the iconic Stone Chariot at Vittala Temple and musical pillars.',
        coordinates: [15.3350, 76.4600]
      },
      {
        name: 'Mysore Palace (Amba Vilas)',
        type: 'Indo-Saracenic Royal Palace',
        century: '1912 AD (Designed by Henry Irwin)',
        location: 'Mysuru',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?auto=format&fit=crop&w=800&q=80',
        description: 'Seat of the Wadiyar dynasty, illuminated by nearly 100,000 electric bulbs every Sunday, housing the golden Ambari throne.',
        coordinates: [12.3051, 76.6551]
      },
      {
        name: 'Hoysaleswara & Chennakeshava Temples',
        type: 'Hoysala Star-Shaped Soapstone Temples',
        century: '12th Century AD (Halebidu & Belur)',
        location: 'Hassan District',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1609137144822-0797300f8dc4?auto=format&fit=crop&w=800&q=80',
        description: 'Masterpieces of Hoysala architecture carved from chloritic schist soapstone featuring thousands of non-repeating friezes of celestial dancers and war elephants.',
        coordinates: [13.2136, 75.9934]
      },
      {
        name: 'Gol Gumbaz',
        type: 'Deccan Sultanate Mausoleum',
        century: '1656 AD (17th Century)',
        location: 'Vijayapura (Bijapur)',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
        description: 'Tomb of Mohammed Adil Shah with the second-largest unsupported dome in the world and an acoustic Whispering Gallery where a whisper echoes 11 times.',
        coordinates: [16.8306, 75.7362]
      }
    ],
    artAndDance: [
      {
        name: 'Yakshagana',
        type: 'Theatre',
        origin: 'Coastal Karnataka (Udupi & Uttara Kannada)',
        description: 'Vibrant traditional dance-theatre combining dialogue, classical music, improvised verses, and acrobatic twirls based on epics.',
        instruments: ['Chande', 'Maddale', 'Taala', 'Harmonium'],
        costumeHighlight: 'Towering ornate headgear (Mundasu), painted face makeup, and winged shoulder ornaments.'
      },
      {
        name: 'Dollu Kunitha',
        type: 'Dance',
        origin: 'Kuruba Gowda Community',
        description: 'High-energy rhythmic drum dance performed by athletic men carrying large decorated drums slung around their necks.',
        instruments: ['Dollu (Large Drum)', 'Cymbals', 'Flute']
      },
      {
        name: 'Bhoota Kola',
        type: 'Theatre',
        origin: 'Tulu Nadu',
        description: 'Sacred spirit worship ritual performance characterized by trance, fiery torch play, and elaborate face paint invoking local Daivas.',
        costumeHighlight: 'Palm frond skirts, bronze ornaments, and glowing makeup.'
      }
    ],
    cuisines: [
      {
        name: 'Bisi Bele Bath & Mysore Masala Dosa',
        category: 'Vegetarian',
        description: 'Spicy tamarind and lentil rice hotpot with vegetables and cashews in pure ghee, and crisp red chili-garlic chutney smeared dosa.',
        keyIngredients: ['Rice', 'Toor Dal', 'Bisi Bele Bath Masala', 'Ghee', 'Cashews', 'Urad Dal', 'Red Chutney']
      },
      {
        name: 'Mysore Pak',
        category: 'Dessert',
        description: 'Melt-in-mouth royal sweet invented in the royal kitchens of Mysore Palace using roasted gram flour, generous pure desi ghee, and sugar.',
        keyIngredients: ['Gram Flour (Besan)', 'Desi Ghee', 'Sugar', 'Cardamom'],
        giTag: true
      },
      {
        name: 'Coorg Pandi Curry & Akki Roti',
        category: 'Non-Vegetarian',
        description: 'Signature dark Kodava spiced curry flavored with Kachampuli (wild Garcinia vinegar) and roasted black pepper, paired with soft rice flatbreads.',
        keyIngredients: ['Pork/Mutton', 'Kachampuli Vinegar', 'Black Pepper', 'Coriander Seeds', 'Rice Flour (Akki Roti)']
      },
      {
        name: 'Udupi Sambar & Mangalore Neer Dosa',
        category: 'Vegetarian',
        description: 'Delicate paper-thin lacy rice crepes served with coconut chutney and sweet-spicy coconut-roasted Udupi temple sambar.',
        keyIngredients: ['Soaked Rice', 'Grated Coconut', 'Jaggery', 'Coriander Seeds', 'Curry Leaves']
      }
    ],
    festivals: [
      {
        name: 'Mysuru Dasara (Jumboo Savari)',
        timing: 'Ashvin (September - October)',
        significance: 'Grand 10-day state festival celebrating Goddess Chamundeshwari\'s victory over the demon Mahishasura.',
        keyRitual: 'Jumboo Savari royal procession where a lead elephant carries the 750-kg golden Chamundeshwari idol through Mysuru.',
        highlight: 'Palace illuminated with 100,000 bulbs with torchlight parades.'
      },
      {
        name: 'Kambala (Buffalo Race)',
        timing: 'November to March',
        significance: 'Traditional annual buffalo race held in slushy paddy fields across coastal Dakshina Kannada and Udupi.',
        keyRitual: 'Jockeys sprinting through muddy tracks steering a pair of whipped racing buffaloes.',
        highlight: 'Thrilling displays of speed and rural sportsmanship.'
      },
      {
        name: 'Hampi Utsav',
        timing: 'November / January',
        significance: 'State cultural festival recreating the grandeur and artistic heritage of the Vijayanagara Empire.',
        keyRitual: 'Illumination of ruins, music recitals, puppet shows, and fireworks against monolithic boulders.',
        highlight: 'Performances on illuminated stages set before Virupaksha Temple.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Mysore Silk Sarees (Pure Zari)', 'Ilkal Sarees (Kasuti Embroidered Pallu)', 'Molakalmuru Silk', 'Udupi Cotton Sarees'],
      handicrafts: ['Channapatna Wooden Lacquerware Toys', 'Mysore Sandalwood & Rosewood Inlay', 'Bidriware Silver Inlay on Metal', 'Ganjifa Playing Cards', 'Kinhal Wood Toys'],
      traditionalMenAttire: 'Panche / Dhoti with Angavastram and Mysore Peta (Turban).',
      traditionalWomenAttire: 'Mysore Silk Saree with gold jewelry, or Coorgi style saree tucked at the back.',
      giTaggedCrafts: ['Mysore Silk', 'Channapatna Toys', 'Bidriware', 'Mysore Sandalwood Oil', 'Ilkal Sarees', 'Coorg Orange', 'Mysore Pak']
    },
    historyTimeline: [
      {
        era: '3rd Century BCE',
        title: 'Mauryan Influence & Chandragupta Maurya',
        description: 'Emperor Chandragupta Maurya spent his final days at Shravanabelagola with Jain acharya Bhadrabahu.'
      },
      {
        era: '4th - 10th Century AD',
        title: 'Kadambas, Badami Chalukyas & Rashtrakutas',
        description: 'Pioneered rock-cut architecture in Aihole, Badami, and Pattadakal; Rashtrakutas ruled one of the four greatest contemporary empires in the world.'
      },
      {
        era: '1336 - 1565 AD',
        title: 'Vijayanagara Empire & Krishnadevaraya',
        description: 'Fortified the Deccan against invasions, patronized art, Sanskrit and Kannada literature, and governed the wealthiest trading hub in the East.'
      },
      {
        era: '1799 - 1947 AD',
        title: 'Kingdom of Mysore under Wadiyars',
        description: 'Model progressive state pioneering hydroelectricity, irrigation dams (KRS), universities, and aerospace industries.'
      }
    ]
  },
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    capital: 'Amaravati',
    region: 'South',
    coordinates: [15.9129, 79.7400],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1565019001157-1ff1a91e5d3c?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Land of Venkateswara, Kuchipudi Classical Dance & Kalamkari Art',
    overview: 'Andhra Pradesh is the rice bowl of India, graced by the sacred Krishna and Godavari rivers, the world\'s most visited spiritual shrine at Tirupati, classical Kuchipudi dance, and centuries-old hand-painted Kalamkari textiles.',
    officialLanguage: 'Telugu',
    spokenLanguages: ['Telugu', 'Urdu', 'Tamil', 'Kannada', 'Hindi'],
    stateAnimal: 'Blackbuck',
    stateBird: 'Rose-ringed Parakeet',
    funFact: 'The Tirumala Venkateswara Temple in Tirupati receives an average of 50,000 to 100,000 pilgrims daily, making it the most visited pilgrimage center in the world.',
    monuments: [
      {
        name: 'Tirumala Venkateswara Temple',
        type: 'Dravidian Sacred Hill Sanctum',
        century: 'Ancient Antiquity (Pandaranga / Chola / Vijayanagara Patronage)',
        location: 'Tirupati, Seshachalam Hills',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1565019001157-1ff1a91e5d3c?auto=format&fit=crop&w=800&q=80',
        description: 'Perched on the 7th peak of Venkatadri, dedicated to Lord Venkateswara (Balaji) featuring the gold-plated Ananda Nilayam vimana tower.',
        coordinates: [13.6833, 79.3472]
      },
      {
        name: 'Lepakshi Veerabhadra Temple',
        type: 'Vijayanagara Monolithic & Fresco Temple',
        century: '1530 AD (16th Century) / Virupanna & Veeranna',
        location: 'Lepakshi, Anantapur',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1590740608753-f7a35cbdfaa3?auto=format&fit=crop&w=800&q=80',
        description: 'Renowned for the gravity-defying Hanging Pillar, the giant monolithic Nandi carved from a single granite boulder, and vivid ceiling frescoes.',
        coordinates: [13.8042, 77.6072]
      },
      {
        name: 'Amaravati Stupa & Buddhist Site',
        type: 'Ancient Mahayana Buddhist Stupa',
        century: '3rd Century BCE - 2nd Century CE',
        location: 'Amaravati, Guntur',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=800&q=80',
        description: 'The great Mahachaitya adorned with limestone sculptural relief panels depicting Jataka tales, founded during the reign of Emperor Ashoka and the Satavahanas.',
        coordinates: [16.5744, 80.3556]
      }
    ],
    artAndDance: [
      {
        name: 'Kuchipudi',
        type: 'Dance',
        origin: 'Kuchipudi Village, Krishna District',
        description: 'Classical Indian dance-drama combining intricate footwork, vocalized speech, and Tarangam (balancing on the rim of a brass plate while holding a pot of water on the head).',
        instruments: ['Mridangam', 'Cymbals', 'Veena', 'Flute', 'Tambura'],
        costumeHighlight: 'Kanchipuram pleated silk costume with katcham drape and golden belt.'
      },
      {
        name: 'Burra Katha',
        type: 'Theatre',
        origin: 'Coastal Andhra',
        description: 'Dynamic oral storytelling art performed by a trio using double-headed brass drums (Burra) and andelu rings narrating folk legends.',
        instruments: ['Burra', 'Gummeta', 'Andelu']
      },
      {
        name: 'Tholu Bommalata',
        type: 'Theatre',
        origin: 'Nimmalakunta & Coastal Andhra',
        description: 'UNESCO-recognized traditional leather shadow puppetry projecting translucent colored mythological figures against white backlit screens.',
        giTag: true
      }
    ],
    cuisines: [
      {
        name: 'Gongura Mutton & Andhra Meals',
        category: 'Non-Vegetarian',
        description: 'Fiery mutton curry simmered with sour roselle leaves (Gongura), paired with steamed rice, ghee, spicy Podis, Pappu, and Avakaya mango pickle.',
        keyIngredients: ['Mutton', 'Gongura (Roselle) Leaves', 'Guntur Red Chilies', 'Garlic', 'Mustard Seeds', 'Desi Ghee']
      },
      {
        name: 'Tirupati Laddu (Srivari Laddu)',
        category: 'Dessert',
        description: 'World-famous sacred temple offering prepared with gram flour, sugar candy, cashew nuts, raisins, pure desi ghee, and cardamom.',
        keyIngredients: ['Besan', 'Desi Ghee', 'Sugar', 'Cashews', 'Raisins', 'Cardamom', 'Camphor (Pachha Karpooram)'],
        giTag: true
      },
      {
        name: 'Pesarattu & Upma',
        category: 'Vegetarian',
        description: 'Crispy green gram (moong dal) crepe stuffed with savory semolina upma, served with spicy ginger-tamarind chutney (Allam Pachadi).',
        keyIngredients: ['Whole Green Moong', 'Ginger', 'Green Chilies', 'Cumin', 'Semolina (Upma)', 'Tamarind']
      },
      {
        name: 'Pootharekulu (Paper Sweet)',
        category: 'Dessert',
        description: 'Delicate edible wafer-thin rice starch wrappers rolled with ghee, powdered sugar, and dry fruits from Atreyapuram village.',
        keyIngredients: ['Jaya Rice Starch', 'Desi Ghee', 'Powdered Sugar / Jaggery', 'Pistachios', 'Almonds'],
        giTag: true
      }
    ],
    festivals: [
      {
        name: 'Sankranti (Pedda Panduga)',
        timing: 'January 14 - 17 (4 Days)',
        significance: 'Grand four-day harvest festival (Bhogi, Makara Sankranti, Kanuma, Mukkanuma) with flying kites, Rangoli with Gobbi balls, and Haridasu singers.',
        keyRitual: 'Making freshly harvested rice payasam, cockfights in delta regions, and honoring livestock.',
        highlight: 'Intricate Muggu (chalk and flower floor art) decorating every village threshold.'
      },
      {
        name: 'Tirupati Brahmotsavam',
        timing: 'September - October (9 Days during Navratri)',
        significance: 'Nine-day celestial festival honoring Lord Venkateswara, initiated by Lord Brahma.',
        keyRitual: 'Procession of the Lord on different Vahanas (Garuda Vahanam, Hanumantha Vahanam, Rathotsavam).',
        highlight: 'Millions witnessing the grand Garuda Seva under starry skies.'
      },
      {
        name: 'Ugadi (Telugu New Year)',
        timing: 'Chaitra Shuddha Padyami (March - April)',
        significance: 'Telugu New Year celebrating life\'s diverse experiences with Ugadi Pachadi.',
        keyRitual: 'Panchanga Sravanam (listening to astrological forecasts) and drinking the six-taste Ugadi Pachadi.',
        highlight: 'Tasting the dish that blends sweet, sour, bitter, tangy, salty, and pungent flavors.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Srikalahasti Hand-painted Kalamkari (Tree of Life)', 'Mangalagiri Pure Cotton Sarees & Nizam Borders', 'Uppada Jamdani Silk Sarees', 'Venkatagiri Zari Sarees', 'Dharmavaram Silk Sarees'],
      handicrafts: ['Kondapalli Toys (Soft Poniki wood)', 'Etikoppaka Lacquer Toys', 'Machilipatnam Block-Printed Kalamkari', 'Budithi Brass & Bell Metal Craft'],
      traditionalMenAttire: 'Pancha (Dhoti) with Kurta or Kanduva (shoulder cloth) with golden borders.',
      traditionalWomenAttire: 'Uppada or Dharmavaram pure silk saree, or Langa Voni (Half Saree) for young women.',
      giTaggedCrafts: ['Srikalahasti Kalamkari', 'Kondapalli Bommallu', 'Machilipatnam Kalamkari', 'Etikoppaka Toys', 'Uppada Jamdani Sarees', 'Tirupati Laddu', 'Atreyapuram Pootharekulu']
    },
    historyTimeline: [
      {
        era: '2nd Century BCE - 3rd Century CE',
        title: 'Satavahana Dynasty & Amaravati Art',
        description: 'First major Deccan empire ruling from Dharanikota; patronized Amaravati Buddhist art and maritime trade with Rome.'
      },
      {
        era: '11th - 14th Century AD',
        title: 'Kakatiya & Eastern Chalukya Renaissance',
        description: 'Flourishing of Telugu literature (Nannaya, Tikkana translating the Mahabharata) and construction of massive irrigation tanks.'
      },
      {
        era: '1336 - 1565 AD',
        title: 'Vijayanagara Golden Age',
        description: 'Emperor Sri Krishnadevaraya championed Telugu as "Desa Bhashalandu Telugu Lessa" (The Sweetest among all languages).'
      },
      {
        era: '1953 AD',
        title: 'First Linguistic State of Independent India',
        description: 'Formed following the historic fast of Potti Sreeramulu, sparking the reorganization of Indian states on linguistic lines.'
      }
    ]
  },
  {
    id: 'telangana',
    name: 'Telangana',
    capital: 'Hyderabad',
    region: 'South',
    coordinates: [17.8743, 78.1008],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Land of Kakatiyas, Charminar Splendor, Dum Biryani & Tech Vanguard',
    overview: 'Telangana is a dynamic historic region where ancient Kakatiya stone engineering meets the Nizam\'s Persianate courtly culture in Hyderabad. It is celebrated for the UNESCO-inscribed Ramappa Temple, Golconda Diamond Fort, Pochampally Ikat silks, and world-famous Hyderabadi Dum Biryani.',
    officialLanguage: 'Telugu, Urdu',
    spokenLanguages: ['Telugu', 'Urdu', 'Hindi', 'Lambadi', 'Gondi'],
    stateAnimal: 'Spotted Deer (Jinka)',
    stateBird: 'Indian Roller (Pala Pitta)',
    funFact: 'The Golconda Fort in Hyderabad was the world\'s only known source of diamonds until the 18th century, producing the Koh-i-Noor, Hope Diamond, and Daria-i-Noor.',
    monuments: [
      {
        name: 'Charminar',
        type: 'Indo-Islamic Arch & Mosque',
        century: '1591 AD (16th Century) / Muhammad Quli Qutb Shah',
        location: 'Old City, Hyderabad',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80',
        description: 'Global symbol of Hyderabad featuring four 56-meter minarets, intricate stucco ornamentation, and an open upper-floor mosque built to commemorate the eradication of plague.',
        coordinates: [17.3616, 78.4747]
      },
      {
        name: 'Ramappa Temple (Rudreswara)',
        type: 'Kakatiya Floating Brick Stone Temple',
        century: '1213 AD (13th Century) / General Recharla Rudra',
        location: 'Palampet, Mulugu District',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'UNESCO World Heritage wonder built on a 6-foot star platform using light-weight floating bricks, sandbox foundation engineering, and carved basalt bracket dancers.',
        coordinates: [18.2600, 79.9430]
      },
      {
        name: 'Golconda Fort',
        type: 'Medieval Hill Citadel & Diamond Vault',
        century: '13th Century (Kakatiya) / 16th Century (Qutb Shahi)',
        location: 'Hyderabad',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
        description: 'Fortress city spanning 11 km of outer wall with acoustic engineering where a hand clap at the main Fateh Darwaza gate can be heard at the hilltop Bala Hissar pavilion 1 km away.',
        coordinates: [17.3833, 78.4011]
      },
      {
        name: 'Warangal Fort & Thousand Pillar Temple',
        type: 'Kakatiya Granite Monolithic Toranas',
        century: '1163 AD (12th Century) / King Rudradeva',
        location: 'Hanamkonda, Warangal',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1600100397608-f010e4299955?auto=format&fit=crop&w=800&q=80',
        description: 'Famous for the monolithic Kakatiya Kala Thoranam gateways (Telangana state emblem) and Trikuta stone shrine dedicated to Shiva, Vishnu, and Surya.',
        coordinates: [17.9558, 79.6008]
      }
    ],
    artAndDance: [
      {
        name: 'Perini Shivatandavam',
        type: 'Dance',
        origin: 'Kakatiya Dynasty (13th Century)',
        description: 'Ancient warrior dance dedicated to Lord Shiva, performed by male dancers to invigorate soldiers before heading to the battlefield.',
        instruments: ['Mridangam', 'Ghatam', 'Ransingha', 'Bells'],
        costumeHighlight: 'Silk dhotis with bare chest, rudraksha beads, and heavy ankle bells.'
      },
      {
        name: 'Oggu Katha',
        type: 'Theatre',
        origin: 'Kuruma & Golla Pastoral Communities',
        description: 'Vibrant ballad performance narrating the stories of Lord Mallanna (Shiva) and Beerappa, accompanied by the large brass Jaggu drum.',
        instruments: ['Oggu (Brass Drum)', 'Thalam', 'Kanji']
      },
      {
        name: 'Gussadi Dance',
        type: 'Dance',
        origin: 'Raj Gond Adivasis of Adilabad',
        description: 'Sacred tribal dance performed during Dandari festival wearing towering peacock feather crowns.',
        costumeHighlight: 'Giant peacock feather headgear (Mal Gussadi), animal skins, and black waistcoats.'
      }
    ],
    cuisines: [
      {
        name: 'Hyderabadi Dum Biryani & Mirchi Ka Salan',
        category: 'Non-Vegetarian',
        description: 'Kacchi dum biryani where marinated raw goat meat and aged Basmati rice are sealed in an earthen handi with dough and slow-cooked over glowing charcoal with saffron and mint.',
        keyIngredients: ['Mutton/Chicken', 'Basmati Rice', 'Saffron', 'Brown Onions (Birista)', 'Mint-Coriander', 'Yogurt', 'Potli Garam Masala']
      },
      {
        name: 'Hyderabadi Haleem',
        category: 'Non-Vegetarian',
        description: 'GI-tagged royal stew of pounded meat, broken wheat, lentils, ghee, and roasted spices slow-beaten for 12 hours into a silky, savory puree during Ramadan.',
        keyIngredients: ['Mutton', 'Broken Wheat (Dalia)', 'Lentils', 'Pure Desi Ghee', 'Fried Cashews', 'Rose Petals'],
        giTag: true
      },
      {
        name: 'Sarva Pindi & Sakinalu',
        category: 'Street Food',
        description: 'Savory circular rice-flour pancake with peanuts, sesame, and chana dal shallow-fried in copper pans; and crunchy spiral festive snacks.',
        keyIngredients: ['Rice Flour', 'Peanuts', 'White Sesame Seeds', 'Chana Dal', 'Green Chilies', 'Curry Leaves']
      },
      {
        name: 'Double Ka Meetha & Qubani Ka Meetha',
        category: 'Dessert',
        description: 'Fried bread soaked in saffron-cardamom condensed milk rabri, and stewed sweet Turkish apricots topped with clotted cream and apricot kernels.',
        keyIngredients: ['Bread / Dried Apricots (Qubani)', 'Condensed Milk', 'Desi Ghee', 'Saffron', 'Almonds']
      }
    ],
    festivals: [
      {
        name: 'Bathukamma Festival',
        timing: 'Bhadrapada Amavasya to Durgashtami (September - October)',
        significance: 'State floral festival honoring Goddess Gauri (Mother of Nature), celebrated by women across Telangana for nine days.',
        keyRitual: 'Arranging seasonal wild flowers (Gunugu, Tangedu, Gummadi) in concentric cone stacks, dancing in circles, and immersing them in lakes.',
        highlight: 'Colorful sea of flower pyramids floating on illuminated water bodies.'
      },
      {
        name: 'Bonalu Festival',
        timing: 'Ashada Masam (July - August)',
        significance: 'Thanksgiving festival dedicated to Goddess Mahakali for protection against diseases.',
        keyRitual: 'Women carrying painted earthen pots filled with rice, curd, and jaggery balanced on heads, led by whip-wielding Pothuraju.',
        highlight: 'Rangam trance prophecy and vibrant processions through Old City Hyderabad.'
      },
      {
        name: 'Sammakka Saralamma Jatara (Medaram)',
        timing: 'Every 2 Years (Magha Purnima - February)',
        significance: 'Asia\'s largest tribal pilgrimage gathering over 10 million people in the forests of Medaram commemorating mother-daughter martyrs.',
        keyRitual: 'Devotees offering jaggery equal to their own body weight (Bangaram) to the tribal goddesses.',
        highlight: 'Forest gathering of millions celebrating tribal resistance against Kakatiya taxation.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Pochampally Ikat Weaves (Tie-and-dye Silk & Cotton)', 'Gadwal Zari Sarees', 'Narayanpet Handloom Sarees', 'Gollabhama Sarees of Siddipet'],
      handicrafts: ['Bidriware Silver Inlay Art', 'Nirmal Painted Furniture & Wooden Toys', 'Pembarthi Sheet Metal Brass Craft', 'Cheriyal Scroll Paintings (Nakashi Art)'],
      traditionalMenAttire: 'Dhoti with Kurta and Kanduva, or classic Sherwani / Achkan in Hyderabadi circles.',
      traditionalWomenAttire: 'Pochampally Ikat or Gadwal Silk Saree with rich gold zari borders.',
      giTaggedCrafts: ['Pochampally Ikat', 'Hyderabadi Haleem', 'Gadwal Sarees', 'Nirmal Toys and Craft', 'Pembarthi Metal Craft', 'Cheriyal Paintings']
    },
    historyTimeline: [
      {
        era: '12th - 14th Century AD',
        title: 'Kakatiya Dynasty of Warangal',
        description: 'Ruled by great monarchs including Queen Rudrama Devi and Prataparudra; engineered lake irrigation systems and built Ramappa Temple.'
      },
      {
        era: '1518 - 1687 AD',
        title: 'Qutb Shahi Dynasty of Golconda',
        description: 'Established the fortress capital of Golconda and founded Hyderabad in 1591, patronizing Telugu and Dakhni Urdu literature.'
      },
      {
        era: '1724 - 1948 AD',
        title: 'Asaf Jahi Nizam Rule',
        description: 'The Nizams of Hyderabad presided over the wealthiest princely state in India, constructing universities (Osmania), palaces (Chowmahalla), and rail networks.'
      },
      {
        era: '2014 AD',
        title: 'Formation of Telangana State',
        description: 'Created as the 29th state of India following a historic people\'s statehood movement.'
      }
    ]
  }
];
