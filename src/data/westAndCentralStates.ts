import { StateHeritage } from '../types';

export const WEST_CENTRAL_STATES: StateHeritage[] = [
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    capital: 'Mumbai',
    region: 'West',
    coordinates: [19.7515, 75.7139],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Land of Chhatrapati Shivaji Maharaj, Ajanta-Ellora Caves & Sahyadri Forts',
    overview: 'Maharashtra is a powerhouse of Indian heritage and economic dynamism. From the ancient rock-cut marvels of Ajanta and Ellora to the rugged Sahyadri hill forts of Chhatrapati Shivaji Maharaj, Paithani silks, energetic Lavani dance, and the grand Ganesh Chaturthi festival.',
    officialLanguage: 'Marathi',
    spokenLanguages: ['Marathi', 'Konkani', 'Hindi', 'Gujarati', 'English'],
    stateAnimal: 'Indian Giant Squirrel (Shekru)',
    stateBird: 'Yellow-footed Green Pigeon (Hariyal)',
    funFact: 'The Kailasa Temple at Ellora (Cave 16) is the largest monolithic rock-cut monument in the world, carved vertically downwards out of a single volcanic basalt cliff, removing 200,000 tonnes of rock.',
    monuments: [
      {
        name: 'Ellora Caves (Kailasa Temple)',
        type: 'Monolithic Rock-Cut Temple',
        century: '8th Century AD (Rashtrakuta Dynasty / Krishna I)',
        location: 'Chhatrapati Sambhajinagar (Aurangabad)',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'World\'s largest monolithic rock-cut temple carved from top to bottom out of a single basalt cliff, depicting cosmic Shiva legends with multi-story galleries.',
        coordinates: [20.0268, 75.1780]
      },
      {
        name: 'Ajanta Caves',
        type: 'Buddhist Rock-Cut Cave Murals',
        century: '2nd Century BCE - 5th Century CE',
        location: 'Ajanta, Sambhajinagar',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
        description: 'Horse-shoe cliff housing 30 rock-cut Buddhist caves world-renowned for exquisite tempera murals depicting Jataka tales, Bodhisattva Padmapani, and Vajrapani.',
        coordinates: [20.5519, 75.7033]
      },
      {
        name: 'Raigad Fort',
        type: 'Maratha Hill Citadel Capital',
        century: '1674 AD (Coronation Capital of Chhatrapati Shivaji Maharaj)',
        location: 'Mahad, Raigad District',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
        description: 'Perched 2,700 feet in the Sahyadri range with sheer drop cliffs, site of Shivaji Maharaj\'s royal Rajyabhisheka coronation and royal palace.',
        coordinates: [18.2347, 73.4414]
      },
      {
        name: 'Chhatrapati Shivaji Maharaj Terminus (CSMT)',
        type: 'Victorian Gothic-Revival Railway Terminal',
        century: '1887 AD (Designed by F.W. Stevens)',
        location: 'Mumbai',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
        description: 'Monumental railway terminus blending Victorian Italianate Gothic style with traditional Indian palace domes, gargoyles, and stone vaults.',
        coordinates: [18.9400, 72.8354]
      }
    ],
    artAndDance: [
      {
        name: 'Lavani',
        type: 'Dance',
        origin: 'Peshwa Era Maharashtra',
        description: 'High-energy, sensuous rhythm-packed folk dance performed to the rapid tempo of the Dholki drum with storytelling of romance and social satire.',
        instruments: ['Dholki', 'Manjira', 'Tuntune', 'Daph'],
        costumeHighlight: '9-yard Nauvari Paithani silk saree, golden Ghungroos, and crescent Maharashtrian Nath (nose ring).'
      },
      {
        name: 'Powada',
        type: 'Music',
        origin: 'Maratha Era (Shahir Tradition)',
        description: 'Inspiring martial ballad singing narrating the heroic military conquests of Chhatrapati Shivaji Maharaj and Maratha warriors.',
        instruments: ['Daph (Tambourine)', 'Tuntune', 'Manjira']
      },
      {
        name: 'Warli Folk Painting',
        type: 'Theatre',
        origin: 'Sahyadri Tribal Belt (Palghar)',
        description: 'Ancient tribal pictorial art using geometric shapes (circles, triangles) drawn with white rice paste on ochre cow-dung plastered mud walls.',
        giTag: true
      }
    ],
    cuisines: [
      {
        name: 'Misal Pav & Vada Pav',
        category: 'Street Food',
        description: 'Fiery sprouted moth bean curry topped with farsan, onions, and lemon, eaten with soft pav; and deep-fried spiced potato dumpling inside pav with garlic chutney.',
        keyIngredients: ['Sprouted Matki (Moth Beans)', 'Tari/Rassa (Spicy Gravy)', 'Farsan', 'Potatoes', 'Pav Bread', 'Dry Garlic Chutney']
      },
      {
        name: 'Puran Poli & Katachi Amti',
        category: 'Dessert',
        description: 'Auspicious festive flatbread stuffed with sweet cooked chana dal, jaggery, cardamom, and nutmeg, served drenched in desi ghee and spicy dal broth.',
        keyIngredients: ['Chana Dal', 'Jaggery (Gul)', 'Nutmeg (Jaiphal)', 'Cardamom', 'Wheat Flour', 'Desi Ghee']
      },
      {
        name: 'Malvani Fish Curry & Solkadhi',
        category: 'Non-Vegetarian',
        description: 'Coastal Konkan fish curry made with freshly grated coconut, Malvani masala, and sour Kokum fruit, paired with refreshing pink Kokum-coconut milk digestif.',
        keyIngredients: ['Surmai (Kingfish) / Pomfret', 'Kokum (Amsul)', 'Fresh Coconut', 'Malvani Spices', 'Coconut Milk', 'Garlic']
      },
      {
        name: 'Pithla Bhakri with Thecha',
        category: 'Vegetarian',
        description: 'Rustic Maharashtrian comfort meal of seasoned gram flour porridge with coarse jowar flatbread and fiery pounded green chili-garlic paste.',
        keyIngredients: ['Besan (Gram Flour)', 'Jowar Flour', 'Green Chilies', 'Garlic', 'Mustard Seeds', 'Coriander']
      }
    ],
    festivals: [
      {
        name: 'Ganesh Chaturthi',
        timing: 'Bhadrapada Shukla Chaturthi (August - September / 10 Days)',
        significance: 'Grand state festival initiated as a public community movement by Lokmanya Tilak in 1893 to unite citizens against colonial rule.',
        keyRitual: 'Pranapratishtha of Ganpati idols, daily Aarti with Dhol-Tasha Pathaks, and Visarjan processions into the Arabian Sea.',
        highlight: 'Lalbaugcha Raja and thousands of drum troupes drumming simultaneously in Mumbai & Pune.'
      },
      {
        name: 'Gudi Padwa (Marathi New Year)',
        timing: 'Chaitra Shukla Pratipada (March - April)',
        significance: 'Commemoration of the new harvest and victory of Shalivahana, hoisted as a Gudi (decorated copper pot on silk cloth atop bamboo).',
        keyRitual: 'Hoisting the auspicious Gudi at sunrise, grand Shobha Yatras with traditional Nauvari attire and Lezim drills.',
        highlight: 'Women riding vintage bikes in Nauvari turbans.'
      },
      {
        name: 'Pandharpur Wari Pilgrimage',
        timing: 'Ashadhi Ekadashi (June - July)',
        significance: '800-year-old 250-km walking pilgrimage where over a million Varkari devotees walk on foot carrying the Padukas of Sant Dnyaneshwar and Sant Tukaram.',
        keyRitual: 'Chanting "Gyanba Tukaram", singing Abhangs with Taal and Chipli drums to see Lord Vitthal.',
        highlight: 'Ringan ceremony where sacred horses race through devotee circles.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Paithani Silk Sarees (Muni & Peacock Zari borders)', 'Narayan Peth Sarees', 'Kolhapuri Feta (Turbans)', 'Himroo Weaves of Sambhajinagar'],
      handicrafts: ['Kolhapuri Chappals (Handcrafted Tanned Leather)', 'Warli Tribal Wall Paintings', 'Sawantwadi Lacquered Wooden Toys', 'Bidriware of Nanded'],
      traditionalMenAttire: 'Dhotar with Kurta, Bandi (waistcoat), and orange or red Puneri/Kolhapuri Pheta (Turban).',
      traditionalWomenAttire: '9-yard Nauvari Saree draped in Kashta style with pearl-and-ruby Maharashtrian Kolhapuri Saaj and pearl Nath.',
      giTaggedCrafts: ['Paithani Sarees & Fabrics', 'Kolhapuri Chappal', 'Warli Painting', 'Alphonso Mango (Ratnagiri/Devgad)', 'Solapur Chaddar', 'Puneri Pagadi', 'Nashik Valley Wine']
    },
    historyTimeline: [
      {
        era: '2nd Century BCE - 3rd Century CE',
        title: 'Satavahana Empire & Caves',
        description: 'Ruled from Paithan (Pratishthana); excavated ancient cave shrines at Karla, Bhaja, and Kanheri.'
      },
      {
        era: '1630 - 1680 AD',
        title: 'Chhatrapati Shivaji Maharaj & Hindavi Swarajya',
        description: 'Shivaji Maharaj established an independent Maratha sovereign state through guerrilla warfare (Ganimi Kava), building naval forts and just administration.'
      },
      {
        era: '1713 - 1818 AD',
        title: 'Maratha Empire Expansion under Peshwas',
        description: 'Bajirao I and the Maratha confederacy expanded rule across the subcontinent from Attock to Cuttack.'
      },
      {
        era: '1960 AD',
        title: 'Formation of Maharashtra State',
        description: 'Formed on 1st May 1960 following the Samyukta Maharashtra Movement with Mumbai as capital.'
      }
    ]
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    capital: 'Gandhinagar',
    region: 'West',
    coordinates: [22.2587, 71.1924],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Land of Mahatma Gandhi, White Rann of Kutch & Navratri Garba',
    overview: 'Gujarat boasts India\'s longest coastline, the ancient Indus Valley port of Lothal, the sprawling salt desert of the Rann of Kutch, the Asiatic Lions of Gir, the Statue of Unity, Patola double-ikat silks, and the world\'s largest dance festival (Navratri).',
    officialLanguage: 'Gujarati',
    spokenLanguages: ['Gujarati', 'Kutchi', 'Hindi', 'Sindhi', 'English'],
    stateAnimal: 'Asiatic Lion (Gir)',
    stateBird: 'Greater Flamingo',
    funFact: 'Gujarat\'s Statue of Unity, standing at 182 meters (597 ft), is the tallest statue in the world, built in tribute to Iron Man of India Sardar Vallabhbhai Patel.',
    monuments: [
      {
        name: 'Statue of Unity',
        type: 'Colossal Monumental Sculpture',
        century: '2018 AD (21st Century)',
        location: 'Kevadia, Narmada',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
        description: '182-meter tall statue of Sardar Vallabhbhai Patel overlooking the Sardar Sarovar Dam, designed by legendary master sculptor Ram V. Sutar.',
        coordinates: [21.8380, 73.7191]
      },
      {
        name: 'Rani ki Vav (The Queen\'s Stepwell)',
        type: 'Maru-Gurjara Subterranean Stepwell',
        century: '1063 AD (11th Century / Queen Udayamati)',
        location: 'Patan',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1600100397608-f010e4299955?auto=format&fit=crop&w=800&q=80',
        description: 'Seven-level subterranean stepped water reservoir featuring over 500 principal sculptures of Lord Vishnu\'s Dashavatara carved into stone galleries.',
        coordinates: [23.8589, 72.1017]
      },
      {
        name: 'Sun Temple Modhera',
        type: 'Solanki Dynasty Sun Temple Complex',
        century: '1026 AD (11th Century / King Bhima I)',
        location: 'Modhera, Mehsana',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80',
        description: 'Architectural wonder engineered so the first rays of the rising sun during solar equinoxes illuminate the diamond on the crown of the Sun God.',
        coordinates: [23.5836, 72.1331]
      },
      {
        name: 'Dholavira: A Harappan City',
        type: 'Indus Valley Civilisation Metropolis',
        century: 'c. 3000 - 1500 BCE',
        location: 'Khadir Bet, Kutch',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        description: 'One of the most advanced Harappan cities featuring massive stone fortifications, world\'s earliest water reservoir cascades, and a 10-letter ancient signboard.',
        coordinates: [23.8864, 70.2131]
      }
    ],
    artAndDance: [
      {
        name: 'Garba & Dandiya Raas',
        type: 'Dance',
        origin: 'Traditional Gujarat (Navratri)',
        description: 'UNESCO Intangible Cultural Heritage circular clapping dance performed around a Garbhadip (earthen lamp) symbolizing eternal life and Shakti.',
        instruments: ['Dhol', 'Dholak', 'Shehnai', 'Cymbals', 'Dandiya Sticks'],
        costumeHighlight: 'Chaniya Choli adorned with mirror work (Abhala), cowrie shells, and heavy silver oxidized jewelry.'
      },
      {
        name: 'Bhavai Folk Theatre',
        type: 'Theatre',
        origin: '14th Century (Asaita Thakar)',
        description: 'Energetic satirical street theatre blending music, acrobatics, balance drills (balancing 8 metal pots on the head), and social messages.',
        instruments: ['Bhungal (Long Copper Trumpet)', 'Pakhawaj', 'Jhanjh']
      },
      {
        name: 'Rogan Art of Kutch',
        type: 'Theatre',
        origin: 'Nirona Village, Kutch',
        description: 'Rare 400-year-old art where boiled castor oil and natural pigments are painted using a thin metal stylus onto fabric without touching the cloth.',
        giTag: true
      }
    ],
    cuisines: [
      {
        name: 'Gujarati Thali with Dhokla & Khandvi',
        category: 'Vegetarian',
        description: 'Masterfully balanced sweet, sour, and spicy thali with steamed fermented gram flour Dhokla, rolled gram flour Khandvi tempered with mustard and coconut, and Kadhi.',
        keyIngredients: ['Gram Flour (Besan)', 'Curd', 'Mustard Seeds', 'Green Chilies', 'Curry Leaves', 'Asafoetida', 'Jaggery']
      },
      {
        name: 'Undhiyu & Puri',
        category: 'Vegetarian',
        description: 'Traditional winter one-pot delicacy of winter vegetables, purple yam, raw banana, and fenugreek dumplings (Muthias) slow-cooked in earthen pots with peanut paste.',
        keyIngredients: ['Surti Papdi (Beans)', 'Purple Yam (Kand)', 'Sweet Potatoes', 'Fenugreek Muthias', 'Fresh Coconut', 'Peanuts', 'Sesame']
      },
      {
        name: 'Fafda Jalebi',
        category: 'Street Food',
        description: 'Crispy crunchy chickpea flour ribbon crackers served with sweet saffron jalebis, raw papaya Sambharo salad, and fried green chilies (famous Dussehra breakfast).',
        keyIngredients: ['Besan', 'Carom Seeds (Ajwain)', 'Papaya Sambharo', 'Saffron Jalebi', 'Green Chilies']
      },
      {
        name: 'Mohanthal & Shrikhand',
        category: 'Dessert',
        description: 'Rich roasted besan and ghee royal fudge infused with saffron, mawa, and nuts, paired with strained hung-curd flavored with cardamom and pistachios.',
        keyIngredients: ['Coarse Besan', 'Pure Desi Ghee', 'Hung Curd', 'Saffron (Kesar)', 'Cardamom', 'Pistachios']
      }
    ],
    festivals: [
      {
        name: 'Navratri Mahotsav',
        timing: 'Ashvin (September - October / 9 Nights)',
        significance: 'The world\'s longest dance festival where millions dance Garba in vibrant circles across cities for nine consecutive nights honoring Goddess Durga.',
        keyRitual: 'Maha Aarti to Goddess Amba followed by all-night Garba and Raas circles.',
        highlight: 'Hypnotic synchronized swirling of thousands in mirror-work Chaniya Cholis.'
      },
      {
        name: 'Rann Utsav (White Desert Festival)',
        timing: 'November to February (Winter Full Moons)',
        significance: 'Carnival of Kutchi music, crafts, and culture set amidst the gleaming white salt desert under the full moon.',
        keyRitual: 'Folk music concerts, camel safaris, stargazing, and artisans showcasing Kutchi embroidery.',
        highlight: 'Endless white expanse glowing under starlit and moonlit skies.'
      },
      {
        name: 'International Kite Festival (Uttarayan)',
        timing: 'January 14 (Makar Sankranti)',
        significance: 'Sun transition into Capricorn celebrated with millions flying colorful kites from rooftops shouting "Kai Po Che!".',
        keyRitual: 'Dawn to dusk kite duels, night illumination with Tukkal lanterns, and eating Undhiyu-Chikki.',
        highlight: 'Sky blanketed with millions of vibrant battling kites.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Patan Patola (Double Ikat Silk)', 'Bandhani (Tie-and-Dye)', 'Ajrakh Natural Dye Block Printing', 'Kutch Embroidery (Rabari, Ahir, Mutwa)', 'Ashavali Brocade Sarees'],
      handicrafts: ['Rogan Castor Oil Painting of Nirona', 'Sankheda Lacquered Wooden Furniture', 'Agates of Cambay (Khambhat)', 'Tangaliya Weaves'],
      traditionalMenAttire: 'Kediyu (flared pleated jacket) with Chorno (draped pants) and colorful embroidered turban.',
      traditionalWomenAttire: 'Chaniya Choli (flared mirror-work skirt, embroidered blouse) and Odhani with silver jewelry.',
      giTaggedCrafts: ['Patan Patola', 'Bandhani of Gujarat', 'Ajrakh of Kutch', 'Sankheda Furniture', 'Agates of Cambay', 'Kutch Embroidery', 'Tangaliya Shawl']
    },
    historyTimeline: [
      {
        era: 'c. 2500 - 1900 BCE',
        title: 'Harappan Maritime Trade at Lothal',
        description: 'Lothal operated the world\'s earliest known tidal dockyard, trading beads, gems, and cotton with ancient Mesopotamia and Egypt.'
      },
      {
        era: '10th - 13th Century AD',
        title: 'Solanki (Chaulukya) Golden Age',
        description: 'Known as the Golden Age of Gujarati architecture, constructing the Sun Temple at Modhera, Rani ki Vav, and Dilwara Temples.'
      },
      {
        era: '1915 - 1947 AD',
        title: 'Mahatma Gandhi & Sabarmati Ashram',
        description: 'Mahatma Gandhi launched the Non-Violent Freedom Movement, Dandi Salt March (1930), and constructive village upliftment from Gujarat.'
      },
      {
        era: '1960 AD',
        title: 'Statehood & The White Revolution',
        description: 'Carved out of Bombay State; birthed the Amul dairy cooperative movement (Operation Flood), making India the world\'s largest milk producer.'
      }
    ]
  },
  {
    id: 'goa',
    name: 'Goa',
    capital: 'Panaji',
    region: 'West',
    coordinates: [15.2993, 74.1240],
    zoomLevel: 9,
    bannerImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Pearl of the Orient, Golden Shores, Baroque Basílicas & Indo-Portuguese Heritage',
    overview: 'Goa is a coastal jewel where Latin Portuguese architectural heritage seamlessly integrates with ancient Konkani coastal traditions. Famed for sun-kissed Arabian beaches, UNESCO Baroque churches, spice plantations, soulful Fado music, and fiery seafood vindaloo.',
    officialLanguage: 'Konkani',
    spokenLanguages: ['Konkani', 'Marathi', 'English', 'Portuguese', 'Hindi'],
    stateAnimal: 'Gaur (Indian Bison)',
    stateBird: 'Flame-throated Bulbul',
    funFact: 'Goa has the unique distinction of having the Uniform Civil Code in force since 1867, applicable to all citizens regardless of religion.',
    monuments: [
      {
        name: 'Basilica of Bom Jesus',
        type: 'Baroque Jesuit Cathedral',
        century: '1605 AD (17th Century)',
        location: 'Old Goa (Velha Goa)',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
        description: 'Masterpiece of Baroque architecture in unplastered laterite stone, holding the sacred incorrupt mortal remains of St. Francis Xavier in a silver casket.',
        coordinates: [15.5008, 73.9116]
      },
      {
        name: 'Shanta Durga Temple',
        type: 'Indo-Portuguese Konkani Temple',
        century: '1738 AD (18th Century / King Shahu of Satara)',
        location: 'Kavlem, Ponda',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
        description: 'Unique architectural fusion of Hindu temple dome with European arched windows and a seven-story Deepastambha (lamp tower).',
        coordinates: [15.3618, 73.9877]
      },
      {
        name: 'Aguada Fort & Lighthouse',
        type: '17th Century Portuguese Coastal Fortress',
        century: '1612 AD',
        location: 'Sinquerim, Candolim',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
        description: 'Built to defend against the Marathas and Dutch, equipped with an underground freshwater cistern holding 2,376,000 gallons for passing ships.',
        coordinates: [15.4926, 73.7736]
      }
    ],
    artAndDance: [
      {
        name: 'Fugdi & Dhalo',
        type: 'Dance',
        origin: 'Indigenous Konkani Folk Culture',
        description: 'Joyous folk dances performed exclusively by women during Shigmo and Dhalo festivals, dancing in circles and making rhythmic breathless sounds (Foo).',
        instruments: ['Ghumot (Clay Percussion with Lizard skin / synthetic head)', 'Mhadalem', 'Zanj']
      },
      {
        name: 'Mando & Fado',
        type: 'Music',
        origin: 'Indo-Portuguese Catholic Tradition',
        description: 'Soulful musical ballads blending Konkani love poetry with European violin harmonies and the melancholic Portuguese Fado.',
        instruments: ['Violin', 'Guitar', 'Ghumot']
      },
      {
        name: 'Shigmo Lamp Dance (Divli Dance)',
        type: 'Dance',
        origin: 'Goan Hindu Villages',
        description: 'Acrobatic dance where performers balance illuminated brass lamps (Divli) atop their heads while keeping complex steps.',
        instruments: ['Dhol', 'Tasha', 'Kansale']
      }
    ],
    cuisines: [
      {
        name: 'Goan Fish Curry & Rice',
        category: 'Non-Vegetarian',
        description: 'Staple dish of fresh Kingfish or Pomfret simmered in a coconut, Kashmiri chili, garlic, and sour Kokum or Tirphal (Sichuan pepper) gravy.',
        keyIngredients: ['Kingfish / Pomfret', 'Fresh Coconut', 'Kokum / Tirphal', 'Kashmiri Red Chilies', 'Coriander Seeds', 'Garlic']
      },
      {
        name: 'Pork Vindaloo & Chicken Xacuti',
        category: 'Non-Vegetarian',
        description: 'Iconic spicy-sour Goan curry marinating meat in palm vinegar, garlic, and red chilies; and Xacuti with complex roasted coconut and poppy seeds.',
        keyIngredients: ['Meat', 'Goan Toddy Vinegar', 'Garlic', 'White Poppy Seeds (Khus Khus)', 'Star Anise', 'Roasted Coconut']
      },
      {
        name: 'Bebinca (Queen of Goan Desserts)',
        category: 'Dessert',
        description: 'Traditional 7 to 16 layered Indo-Portuguese pudding made with coconut milk, egg yolks, sugar, nutmeg, and clarified butter, baked layer by layer.',
        keyIngredients: ['Coconut Milk', 'Egg Yolks', 'Flour', 'Sugar', 'Ghee', 'Nutmeg'],
        giTag: true
      },
      {
        name: 'Goan Cashew Feni',
        category: 'Beverage',
        description: 'Triple-distilled indigenous spirit fermented from crushed cashew apples in traditional copper pots.',
        keyIngredients: ['Cashew Apple Juice (Niroo)', 'Copper Pot Distillation'],
        giTag: true
      }
    ],
    festivals: [
      {
        name: 'Goa Carnival',
        timing: 'February (4 Days preceding Lent)',
        significance: 'Centuries-old festival of music, revelry, street parades, and masquerades led by the mythological King Momo proclaiming "Eat, drink, and make merry".',
        keyRitual: 'Grand float parades through Panaji, Margao, and Vasco with brass bands and costumed dancers.',
        highlight: 'Electrifying samba music, street dancing, and multi-colored floats.'
      },
      {
        name: 'Shigmo Festival (Shigmotsav)',
        timing: 'Phalguna (March / 14 Days)',
        significance: 'Goan spring festival welcoming the return of warrior troops from battles with colorful street parades, Romat-Talam drills, and gulal.',
        keyRitual: 'Parade of towering mythological floats depicting episodes from the Ramayana and Mahabharata.',
        highlight: 'Traditional folk dancers in vibrant attire performing Fugdi and Ghode Modni.'
      },
      {
        name: 'Feast of St. Francis Xavier',
        timing: 'December 3',
        significance: 'Annual solemn feast in Old Goa drawing global pilgrims to honor the patron saint of the Indies (Goencho Saib).',
        keyRitual: 'Open-air solemn Novena masses and veneration of the sacred relics in Bom Jesus Basilica.',
        highlight: 'Old Goa transformed into a spiritual pilgrimage city with fairgrounds.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Kunbi Saree (Checkered Cotton Draped Saree with tribal pleats)'],
      handicrafts: ['Azulejos Painted Ceramic Tiles', 'Coconut Shell Carvings', 'Terracotta Pottery of Bicholim', 'Brass Metal Lamps'],
      traditionalMenAttire: 'Kashti (loincloth wrap) historically, or western cotton shorts and shirts.',
      traditionalWomenAttire: 'Kunbi Red-checkered cotton saree tied around the shoulder without blouse.',
      giTaggedCrafts: ['Goa Cashew Feni', 'Goan Khaje', 'Harmal Chili', 'Myndoli Banana (Moira)', 'Goa Bebinca', 'Goan Mankurad Mango']
    },
    historyTimeline: [
      {
        era: '10th - 14th Century AD',
        title: 'Kadambas of Goa & Chandor Capital',
        description: 'Built flourishing ports at Chandor and Gopakapattana, patronizing Shaivism and international maritime trade.'
      },
      {
        era: '1510 - 1961 AD',
        title: '451 Years of Portuguese Colonial Rule',
        description: 'Afonso de Albuquerque captured Goa, making it the capital of the Portuguese Estado da Índia and introducing Renaissance architecture.'
      },
      {
        era: '1961 AD',
        title: 'Operation Vijay & Liberation of Goa',
        description: 'Indian Armed Forces liberated Goa on 19 December 1961, reuniting it with the Republic of India.'
      },
      {
        era: '1987 AD',
        title: 'Full Statehood of Goa',
        description: 'Conferred full statehood as India\'s 25th state with Konkani in Devanagari script declared as official language.'
      }
    ]
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    capital: 'Bhopal',
    region: 'Central',
    coordinates: [22.9734, 78.6569],
    zoomLevel: 6,
    bannerImage: 'https://images.unsplash.com/photo-1600100397608-f010e4299955?auto=format&fit=crop&w=1200&q=80',
    tagline: 'The Heart of Incredible India, Khajuraho Erotica & Sanchi Stupas',
    overview: 'Madhya Pradesh is the geographical and archaeological heart of India. It preserves the 10,000-year-old rock art of Bhimbetka, the Great Stupa of Sanchi, the world-famous Chandela temples of Khajuraho, dense tiger sanctuaries, and the exquisite handlooms of Chanderi and Maheshwar.',
    officialLanguage: 'Hindi',
    spokenLanguages: ['Hindi', 'Bundeli', 'Malwi', 'Nimadi', 'Bagheli', 'Gondi'],
    stateAnimal: 'Barasingha (Swamp Deer of Kanha)',
    stateBird: 'Asian Paradise Flycatcher (Dudhraj)',
    funFact: 'Madhya Pradesh is India\'s "Tiger State", home to the highest tiger population in the country (>785 tigers) across Kanha, Bandhavgarh, and Pench national parks (inspiration for Kipling\'s Jungle Book).',
    monuments: [
      {
        name: 'Khajuraho Group of Monuments',
        type: 'Chandela Nagara Style Temples',
        century: '950 - 1050 AD (10th - 11th Century)',
        location: 'Chhatarpur District',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1600100397608-f010e4299955?auto=format&fit=crop&w=800&q=80',
        description: 'World-famous sandstone temples celebrating life, human passion, divine cosmic union (Kandariya Mahadeva), and exquisite sculptural friezes.',
        coordinates: [24.8318, 79.9199]
      },
      {
        name: 'Great Stupa at Sanchi',
        type: 'Ancient Buddhist Stupa & Toranas',
        century: '3rd Century BCE (Emperor Ashoka)',
        location: 'Raisen District',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1565019001157-1ff1a91e5d3c?auto=format&fit=crop&w=800&q=80',
        description: 'The oldest stone structure in India commissioned by Emperor Ashoka, featuring four monumental carved Torana gateways narrating the life of Gautama Buddha.',
        coordinates: [23.4795, 77.7397]
      },
      {
        name: 'Bhimbetka Rock Shelters',
        type: 'Paleolithic & Mesolithic Cave Art',
        century: 'c. 10,000 BCE - 8,000 BCE',
        location: 'Raisen District',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=800&q=80',
        description: 'Over 750 rock shelters showcasing some of the oldest cave paintings in human history in natural red, white, and ochre mineral pigments.',
        coordinates: [22.9372, 77.6128]
      },
      {
        name: 'Gwalior Fort',
        type: 'Hill Fortress (The Pearl of Indian Forts)',
        century: '8th Century AD (Man Singh Tomar 15th Century)',
        location: 'Gwalior',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'Towering hill fort known for Man Mandir Palace with turquoise-tiled peacock mosaics, monumental rock-cut Jain Tirthankara statues, and Teli ka Mandir.',
        coordinates: [26.2300, 78.1695]
      }
    ],
    artAndDance: [
      {
        name: 'Gond Tribal Painting',
        type: 'Theatre',
        origin: 'Gond Tribe (Dindori & Mandla)',
        description: 'Vibrant tribal art characterized by rhythmic dots, dashes, and lines depicting animals, sacred Mahua trees, and forest spirits.',
        giTag: true
      },
      {
        name: 'Matki Dance',
        type: 'Dance',
        origin: 'Malwa Region',
        description: 'Graceful solo and group folk dance performed by women balancing several earthen pots on their heads to the beat of the Dhol.',
        instruments: ['Dhol', 'Thali']
      },
      {
        name: 'Gwalior Gharana Classical Music',
        type: 'Music',
        origin: 'Court of Akbar / Tansen',
        description: 'Oldest Hindustani classical vocal Gharana emphasizing expansive Khayal singing and Meend, celebrated during Tansen Samaroh.',
        instruments: ['Tanpura', 'Tabla', 'Harmonium', 'Rudra Veena']
      }
    ],
    cuisines: [
      {
        name: 'Indori Poha & Jalebi with Sev',
        category: 'Street Food',
        description: 'Steamed flattened rice flavored with fennel seeds, turmeric, and Jeeravan spice powder, topped with crispy Ratlami Sev and served with hot jalebi.',
        keyIngredients: ['Flattened Rice (Poha)', 'Jeeravan Masala', 'Ratlami Laung Sev', 'Pomegranate', 'Fennel Seeds', 'Jalebi']
      },
      {
        name: 'Bhopali Gosht Korma & Biryan',
        category: 'Non-Vegetarian',
        description: 'Nawabi slow-simmered mutton korma with bone marrow, brown onion paste, yogurt, and aromatic garam masala.',
        keyIngredients: ['Mutton', 'Brown Onions (Birista)', 'Curd', 'Mace (Javitri)', 'Cardamom', 'Cashew Paste']
      },
      {
        name: 'Dal Bafla with Churma',
        category: 'Vegetarian',
        description: 'Boiled and then ghee-roasted wheat dough balls paired with spiced tuvar dal, garlic chutney, and sweet crumbled churma.',
        keyIngredients: ['Wheat Flour', 'Tuvar Dal', 'Desi Ghee', 'Garlic Chutney', 'Ajwain', 'Coriander']
      },
      {
        name: 'Mawa Bati & Bhutte Ka Kees',
        category: 'Dessert',
        description: 'Khoya-stuffed fried mawa balls in cardamom sugar syrup, and savory grated corn cooked with milk, coconut, and mustard tempering.',
        keyIngredients: ['Fresh Sweet Corn (Bhutte)', 'Milk', 'Mawa (Khoya)', 'Sugar Syrup', 'Mustard Seeds', 'Green Chilies']
      }
    ],
    festivals: [
      {
        name: 'Khajuraho Dance Festival',
        timing: 'February (One Week)',
        significance: 'World-renowned classical dance festival set against the illuminated backdrop of the Western Group of Khajuraho temples.',
        keyRitual: 'Performances of classical Indian dance forms (Kathak, Bharatanatyam, Odissi, Kuchipudi, Mohiniyattam) by maestros under open night skies.',
        highlight: 'Temple facades glowing with warm lights as dancers perform classical Natya.'
      },
      {
        name: 'Bhagoria Haat Festival',
        timing: 'March (Week preceding Holi)',
        significance: 'Colorful tribal harvest and match-making festival celebrated by the Bhil and Bhilala tribes in Jhabua and Alirajpur.',
        keyRitual: 'Young men and women courting by offering betel leaves (Paan) and smearing Gulal powder.',
        highlight: 'Huge tribal fairs with wooden ferris wheels, flute music, and silver ornaments.'
      },
      {
        name: 'Ujjain Simhastha Kumbh Mela',
        timing: 'Every 12 Years (Kshipra River, Ujjain)',
        significance: 'One of the four sacred Kumbh Melas held at Mahakaleshwar Jyotirlinga on the banks of River Kshipra.',
        keyRitual: 'Shahi Snan of Naga Sadhus and millions of pilgrims in the sacred Kshipra river.',
        highlight: 'Congregation of millions at the Mahakal Corridor.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Chanderi Sarees (Silk Cotton with Zari motifs)', 'Maheshwari Sarees (Geometric borders by Ahilyabai Holkar)', 'Bagh Print (Hand Block Print with Vegetable Dyes)'],
      handicrafts: ['Bastar/Dhokra Bell Metal Craft (shared tribal)', 'Gond Paintings', 'Tikamgarh Bell Metal', 'Bhopal Zardozi Embroidery', 'Leather Toys of Indore'],
      traditionalMenAttire: 'Dhoti with Bandi or Kurta, draped with a Safa (Turban).',
      traditionalWomenAttire: 'Chanderi or Maheshwari Silk Saree with distinctive reversible border and silver jewelry.',
      giTaggedCrafts: ['Chanderi Fabric', 'Maheshwari Sarees', 'Bagh Prints', 'Gond Painting of MP', 'Leather Toys of Indore', 'Ratlami Sev', 'Kadaknath Black Chicken Meat']
    },
    historyTimeline: [
      {
        era: '3rd Century BCE',
        title: 'Mauryan Empire & Sanchi Stupa',
        description: 'Emperor Ashoka served as governor of Ujjain, married Devi of Vidisha, and established the Great Stupa of Sanchi.'
      },
      {
        era: '10th - 11th Century AD',
        title: 'Chandela Dynasty & Khajuraho',
        description: 'Chandela kings constructed the 85 stone temples of Khajuraho at the peak of medieval architectural refinement.'
      },
      {
        era: '1765 - 1795 AD',
        title: 'Queen Ahilyabai Holkar of Malwa',
        description: 'Philosopher queen ruled from Maheshwar, rebuilding destroyed temples across India (Kashi, Somnath, Gaya) and founding Maheshwari handlooms.'
      },
      {
        era: '1956 AD',
        title: 'Formation of Madhya Pradesh',
        description: 'Reorganized merging Madhya Bharat, Vindhya Pradesh, and Bhopal with Bhopal as capital.'
      }
    ]
  },
  {
    id: 'chhattisgarh',
    name: 'Chhattisgarh',
    capital: 'Raipur',
    region: 'Central',
    coordinates: [21.2787, 81.8661],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    tagline: 'The Rice Bowl of India, Bastar Tribal Heritage & Chitrakote Niagara',
    overview: 'Chhattisgarh is a land of dense sal and teak forests, ancient tribal kingdoms, the horseshoe-shaped Chitrakote Falls ("The Niagara of India"), 4,000-year-old Dhokra lost-wax bell metal craft, and the legendary 75-day Bastar Dussehra.',
    officialLanguage: 'Chhattisgarhi, Hindi',
    spokenLanguages: ['Chhattisgarhi', 'Gondi', 'Halbi', 'Bhatri', 'Hindi'],
    stateAnimal: 'Wild Water Buffalo (Ban Bhainsa)',
    stateBird: 'Bastar Hill Myna',
    funFact: 'Bastar Dussehra in Chhattisgarh lasts for 75 consecutive days, making it the longest festival celebration in the world, dedicated to Goddess Danteshwari rather than Rama\'s victory.',
    monuments: [
      {
        name: 'Chitrakote Falls',
        type: 'Horseshoe Waterfall (Niagara of India)',
        century: 'Natural Geological Formation',
        location: 'Indravati River, Bastar',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
        description: '300-meter wide horseshoe-shaped waterfall tumbling 95 feet into the misty gorge of the Indravati River.',
        coordinates: [19.2017, 81.7011]
      },
      {
        name: 'Laxman Temple Sirpur',
        type: 'Ancient Red Brick Temple',
        century: '7th Century AD (Queen Vasata / Panduvamshi Dynasty)',
        location: 'Sirpur, Mahasamund',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1590740608753-f7a35cbdfaa3?auto=format&fit=crop&w=800&q=80',
        description: 'One of the finest surviving carved brick temples in India dedicated to Lord Vishnu, featuring exquisite Krishnaleela doorframe carvings.',
        coordinates: [21.3436, 82.1764]
      },
      {
        name: 'Danteshwari Temple Dantewada',
        type: 'Shakti Peetha Temple',
        century: '14th Century AD (Kakatiya Dynasty of Bastar)',
        location: 'Dantewada',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
        description: 'Sacred 52nd Shakti Peetha where Goddess Sati\'s tooth fell, revered as the patron deity of the Bastar tribal royal house.',
        coordinates: [18.8953, 81.3522]
      }
    ],
    artAndDance: [
      {
        name: 'Pandavani (Teejan Bai Tradition)',
        type: 'Theatre',
        origin: 'Rural Chhattisgarh',
        description: 'Electrifying solo folk ballad storytelling the Mahabharata with a decorated Tambura strummed as a veena, mace, sword, or chariot bow.',
        instruments: ['Tambura', 'Kartal (Cymbals)', 'Harmonium', 'Dholak'],
        costumeHighlight: 'Vibrant saree with peacock feathers tied to the tambura.'
      },
      {
        name: 'Panthi Dance',
        type: 'Dance',
        origin: 'Satnami Community',
        description: 'Acrobatic devotional dance forming human pyramids with high-speed jumping to the teachings of Guru Ghasidas.',
        instruments: ['Mandar', 'Jhanjh']
      },
      {
        name: 'Raut Nacha',
        type: 'Dance',
        origin: 'Yaduvanshi (Cowherd) Community',
        description: 'Folk warrior dance performed after Diwali carrying decorated bamboo sticks and shields depicting Krishna\'s battles.',
        instruments: ['Dholak', 'Singhabaja', 'Shehnai']
      }
    ],
    cuisines: [
      {
        name: 'Chila & Faraa (Rice Steamed Dumplings)',
        category: 'Vegetarian',
        description: 'Crispy rice flour pancakes with green coriander-tomato chutney, and steamed rice rolls tempered with mustard seeds and curry leaves.',
        keyIngredients: ['Rice Flour', 'Urad Dal', 'Green Chilies', 'Mustard Seeds', 'Curry Leaves', 'Coriander']
      },
      {
        name: 'Muthia & Dubki Kadi',
        category: 'Vegetarian',
        description: 'Steamed spiced rice flour dumplings tossed in sesame and mustard seeds, and soft urad-dal vadas submerged in spiced buttermilk curry.',
        keyIngredients: ['Rice Flour', 'Urad Dal', 'Buttermilk', 'Sesame Seeds', 'Turmeric', 'Green Chilies']
      },
      {
        name: 'Bafauri & Dehrori',
        category: 'Street Food',
        description: 'Healthy oil-free chana dal steamed balls, and traditional Diwali sweet made of fermented rice-curd dumplings fried in ghee and dipped in cardamom syrup.',
        keyIngredients: ['Chana Dal', 'Rice', 'Curd', 'Sugar Syrup', 'Desi Ghee', 'Cardamom']
      }
    ],
    festivals: [
      {
        name: 'Bastar Dussehra',
        timing: 'Shravana to Ashvin (75 Continuous Days)',
        significance: 'World\'s longest festival celebrating the divine power of Goddess Danteshwari and the unity of 84 tribal communities in Jagdalpur.',
        keyRitual: 'Construction of a massive 8-wheeled wooden chariot pulled by thousands of tribal devotees through the streets of Jagdalpur.',
        highlight: 'Tribal high priests and headmen dressed in peacock feather headdresses.'
      },
      {
        name: 'Madai Festival',
        timing: 'December to March (Traveling Tribal Carnival)',
        significance: 'Vibrant traveling festival celebrated from Narayanpur to Dantewada where village deities meet and trade crafts.',
        keyRitual: 'Procession carrying sacred deity bamboo poles (Chhatri) and sacrifice of goats/poultry.',
        highlight: 'All-night drumming, folk dances, and tribal haats.'
      },
      {
        name: 'Hareli Festival',
        timing: 'Shravana Amavasya (July - August)',
        significance: 'First agrarian festival of the year when farmers wash and worship agricultural tools, cattle, and walk on tall bamboo stilts (Gedi).',
        keyRitual: 'Worship of farm plows, planting bhelwa tree branches in paddy fields, and Gedi stilt racing.',
        highlight: 'Youth balancing effortlessly on 10-foot bamboo poles.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Kosa Silk Sarees (Tussar Silk from Mulberry cocoons)', 'Champa Silk Weaves'],
      handicrafts: ['Bastar Dhokra (Lost-wax Bell Metal Casting)', 'Bastar Wrought Iron Craft (Loha Shilp)', 'Bastar Terracotta & Wooden Masks', 'Sisal Bark Fiber Craft'],
      traditionalMenAttire: 'Pichhouri (cotton loin wrap) with Saluka (shirt) and Patka headwrap.',
      traditionalWomenAttire: 'Lugda (cotton or Kosa silk drape) worn knee-length with Polkha blouse and silver Sutiya collar.',
      giTaggedCrafts: ['Bastar Dhokra', 'Bastar Wooden Craft', 'Bastar Iron Craft', 'Champa Silk Sarees', 'Jeeraphool Rice (Aromatic)']
    },
    historyTimeline: [
      {
        era: 'c. 1000 BCE - Ancient Era',
        title: 'Dakshina Kosala & Dandakaranya',
        description: 'Mentioned in the Ramayana as Dandakaranya where Lord Rama spent a major portion of his 14-year exile (Ram Van Gaman Path).'
      },
      {
        era: '6th - 10th Century AD',
        title: 'Sharabhapuriya & Somavamshi Dynasties',
        description: 'Established the cosmopolitan trade city of Sirpur visited by Chinese traveler Xuanzang in 639 AD.'
      },
      {
        era: '14th - 20th Century AD',
        title: 'Kakatiya Rulers of Bastar',
        description: 'Descendants of Kakatiya dynasty founded the princely state of Bastar, instituting the 75-day Bastar Dussehra traditions.'
      },
      {
        era: '2000 AD',
        title: 'Creation of Chhattisgarh State',
        description: 'Carved out of eastern Madhya Pradesh on 1 November 2000 as India\'s 26th state with Raipur as capital.'
      }
    ]
  }
];
