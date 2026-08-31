import { StateHeritage } from '../types';

export const STATES_HERITAGE_DATA: StateHeritage[] = [
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    capital: 'Jaipur',
    region: 'North',
    coordinates: [26.9124, 75.7873],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    tagline: 'The Land of Kings, Forts, & Desert Folklore',
    overview: 'Rajasthan is globally renowned for its royal heritage, majestic sandstone forts, vibrant folk music, vibrant Bandhani textiles, and the Thar Desert. Its regal history reflects Rajput valor, ornate havelis, and desert caravans.',
    officialLanguage: 'Hindi',
    spokenLanguages: ['Hindi', 'Marwari', 'Mewari', 'Dhundhari', 'Harauti'],
    stateAnimal: 'Camel & Chinkara',
    stateBird: 'Great Indian Bustard (Godawan)',
    funFact: 'Jaipur, the Pink City of Rajasthan, is a designated UNESCO World Heritage City planned on Vedic Vastu Shastra principles in 1727.',
    monuments: [
      {
        name: 'Hawa Mahal (Palace of Winds)',
        type: 'Palace Architecture',
        century: '1799 AD (18th Century)',
        location: 'Jaipur',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        description: 'A 5-story pink-red sandstone screen with 953 intricately carved jharokhas (small windows) built by Maharaja Sawai Pratap Singh.',
        coordinates: [26.9239, 75.8267]
      },
      {
        name: 'Mehrangarh Fort',
        type: 'Hill Fort',
        century: '1459 AD (15th Century)',
        location: 'Jodhpur',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'Perched 410 feet above Jodhpur, this imposing fortress features burnished red sandstone battlements and pearl-white courtyards.',
        coordinates: [26.2978, 73.0185]
      },
      {
        name: 'Amber (Amer) Fort',
        type: 'Fortified Palace Complex',
        century: '1592 AD (16th Century)',
        location: 'Amer, Jaipur',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80',
        description: 'Overlooking Maota Lake, famous for Sheesh Mahal (Mirror Palace) where a single candle illuminates the entire hall.',
        coordinates: [26.9855, 75.8513]
      },
      {
        name: 'City Palace Udaipur',
        type: 'Lakeside Palace',
        century: '1559 AD',
        location: 'Udaipur (Lake Pichola)',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80',
        description: 'A monumental complex of 11 palaces built over 400 years with sweeping balconies overlooking shimmering Lake Pichola.',
        coordinates: [24.5764, 73.6835]
      }
    ],
    artAndDance: [
      {
        name: 'Ghoomar Dance',
        type: 'Dance',
        origin: 'Bhil Tribe & Rajput Royal Courts',
        description: 'Graceful twirling dance performed by women in flowing flared skirts (ghagra) to celebrate Teej, Holi, and weddings.',
        costumeHighlight: 'Vibrant embroidered Ghagra-Choli with glittering mirror work and translucent Odhni veil.',
        instruments: ['Dholak', 'Nagada', 'Shehnai', 'Kamayacha']
      },
      {
        name: 'Kalbelia (Snake Charmer Dance)',
        type: 'Dance',
        origin: 'Kalbelia Nomadic Community',
        description: 'UNESCO Intangible Cultural Heritage. Energetic serpentine movements performed to the hypnotic tune of the Poongi.',
        costumeHighlight: 'Black flared skirt embellished with silver ribbons and colorful block patches imitating a cobra.'
      },
      {
        name: 'Manganiyar & Langa Folk Music',
        type: 'Music',
        origin: 'Thar Desert Communities',
        description: 'Devotional and poetic ballad traditions passed orally through generations of hereditary musicians.',
        instruments: ['Kamayacha (bowed lute)', 'Khartal (wooden clappers)', 'Morchang (jaw harp)', 'Sarangi']
      },
      {
        name: 'Kathputli Puppetry',
        type: 'Theatre',
        origin: 'Nagaur & Marwar Region',
        description: 'Ancient string marionette theatre dramatizing legends of brave warriors like Amar Singh Rathore accompanied by whistling whistles.',
        instruments: ['Dholak', 'Boli (bamboo reed pipe)']
      }
    ],
    cuisines: [
      {
        name: 'Dal Baati Churma',
        category: 'Vegetarian',
        description: 'The iconic triumvirate: spiced multi-lentil curry (Dal), round baked whole wheat balls soaked in pure ghee (Baati), and crushed sweetened cardamom dough (Churma).',
        keyIngredients: ['Whole Wheat Flour', 'Ghee', 'Panchmel Dal (5 lentils)', 'Jaggery/Sugar', 'Cloves & Cardamom'],
        giTag: true
      },
      {
        name: 'Laal Maas',
        category: 'Non-Vegetarian',
        description: 'A fiery royal game meat curry simmered with Mathania red chilies, garlic paste, and smoked with glowing charcoal (Dhungar method).',
        keyIngredients: ['Mutton', 'Mathania Dry Red Chillies', 'Curd', 'Mustard Oil', 'Garlic']
      },
      {
        name: 'Ghevar',
        category: 'Dessert',
        description: 'Disc-shaped honeycomb sweet pastry made from fermented batter, deep-fried in ghee, steeped in saffron syrup, and topped with malai rabdi and silver vark.',
        keyIngredients: ['Refined Flour', 'Desi Ghee', 'Saffron Sugar Syrup', 'Rabdi', 'Pistachios & Almonds']
      },
      {
        name: 'Ker Sangri',
        category: 'Vegetarian',
        description: 'Wild desert capers (Ker) and desert bean pods (Sangri) sun-dried and sautéed with amchur (dry mango) and yogurt.',
        keyIngredients: ['Ker Berries', 'Sangri Pods', 'Dry Mango Powder', 'Whole Red Chillies', 'Fenugreek']
      },
      {
        name: 'Pyaaz Kachori',
        category: 'Street Food',
        description: 'Flaky deep-fried puff pastry stuffed with a zesty, spiced onion and fennel seed filling.',
        keyIngredients: ['Flour', 'Onions', 'Fennel Seeds', 'Coriander Seeds', 'Asafoetida (Hing)']
      }
    ],
    festivals: [
      {
        name: 'Pushkar Camel Fair',
        timing: 'Kartik Purnima (October/November)',
        significance: 'One of the world\'s largest livestock fairs combined with holy dips in sacred Pushkar Sarovar lake.',
        keyRitual: 'Dressed camels in colorful pompoms, turban-tying competitions, bridal dances, and Maha Aarti.',
        highlight: 'Hot air balloon rides over dunes and thousands of illuminated earthen oil lamps at dusk.'
      },
      {
        name: 'Desert Festival Jaisalmer',
        timing: 'February (Sam Sand Dunes)',
        significance: 'Celebration of golden desert lifestyle against the backdrop of Sonar Qila.',
        keyRitual: 'Camel polo, mustache championship, folk music by Manganiyars, and fire dancing under moonlit skies.',
        highlight: 'Gair & Kalbelia dances on shifting golden sands.'
      },
      {
        name: 'Teej Festival',
        timing: 'Shravan (July/August)',
        significance: 'Celebration of Goddess Parvati\'s union with Lord Shiva, welcoming the monsoon.',
        keyRitual: 'Women wear green lehengas, swing on floral swings under banyan trees, and apply intricate henna mehendi.',
        highlight: 'Royal procession of Teej Mata carried on golden palanquins in Jaipur.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Bandhani (Tie-dye)', 'Leheriya (Wave pattern)', 'Bagru Block Print', 'Sanganeri Print', 'Kota Doria Silk'],
      handicrafts: ['Jaipur Blue Pottery (GI)', 'Thewa Gold-on-Glass Art (Pratapgarh)', 'Molela Terracotta Plaques', 'Kathputli Puppets', 'Camel Leather Mojari Juttis'],
      traditionalMenAttire: 'Angrakha / Bandhgala jacket, Dhoti or Churidar Pajama, and brightly colored Pagri (Turban/Safaa).',
      traditionalWomenAttire: 'Embroidered Ghagra (flared skirt), Choli/Kanchali (blouse), and flowing Odhni (veil) with Gotapatti border.',
      giTaggedCrafts: ['Jaipur Blue Pottery', 'Kathputlis of Rajasthan', 'Kota Doria Saree', 'Bagru Hand Block Print', 'Bikaneri Bhujia']
    },
    historyTimeline: [
      {
        era: '6th - 12th Century AD',
        title: 'Gurjara-Pratihara & Rajput Clans',
        description: 'Rise of chivalric warrior dynasties: Sisodias of Mewar, Rathores of Marwar, and Kachhwahas of Amber.'
      },
      {
        era: '1303 - 1568 AD',
        title: 'Sieges of Chittorgarh & Mewar Resistance',
        description: 'Epic sagas of Maharana Pratap, Rani Padmini, and legendary defense of Mewar independence.'
      },
      {
        era: '1727 AD',
        title: 'Founding of Jaipur',
        description: 'Astronomer King Maharaja Sawai Jai Singh II founded Jaipur and built the astronomical Jantar Mantar observatories.'
      },
      {
        era: '1949 AD',
        title: 'Formation of United State of Rajasthan',
        description: 'Integration of 22 princely states and estates into modern Rajasthan following Indian Independence.'
      }
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala',
    capital: 'Thiruvananthapuram',
    region: 'South',
    coordinates: [10.8505, 76.2711],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    tagline: "God's Own Country: Backwaters, Classical Arts, & Ayurveda",
    overview: 'Flanked by the Arabian Sea and the Western Ghats, Kerala is celebrated for its lush palm backwaters, ancient spice trade ports, Kathakali classical dance-drama, Ayurveda healthcare, and harmonious pluralistic traditions.',
    officialLanguage: 'Malayalam',
    spokenLanguages: ['Malayalam', 'English', 'Tamil'],
    stateAnimal: 'Indian Elephant',
    stateBird: 'Great Hornbill',
    funFact: 'Kerala was the epicenter of the global ancient spice trade for 3,000+ years, exporting black pepper ("Black Gold") to ancient Rome, Greece, and Egypt.',
    monuments: [
      {
        name: 'Padmanabhaswamy Temple',
        type: 'Dravidian & Kerala Style Temple',
        century: '8th Century AD (expanded 18th Century)',
        location: 'Thiruvananthapuram',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
        description: 'Renowned for its Ananthasayanam posture of Lord Vishnu reclining on cosmic serpent Anantha, and vault treasures.',
        coordinates: [8.4828, 76.9436]
      },
      {
        name: 'Bekal Fort',
        type: 'Coastal Keyhole Fortress',
        century: '1650 AD (17th Century)',
        location: 'Kasaragod',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1590740608753-f7a35cbdfaa3?auto=format&fit=crop&w=800&q=80',
        description: 'The largest fort in Kerala, rising directly from the waves of the Arabian Sea with observation towers and water tanks.',
        coordinates: [12.3929, 75.0336]
      },
      {
        name: 'Mattancherry Dutch Palace & Synagogue',
        type: 'Colonial & Kerala Mural Palace',
        century: '1555 AD',
        location: 'Fort Kochi',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'Houses some of the finest Hindu mythological wall murals in India and hand-painted Chinese porcelain tiles.',
        coordinates: [9.9582, 76.2593]
      }
    ],
    artAndDance: [
      {
        name: 'Kathakali',
        type: 'Dance',
        origin: 'Temple & Royal Courtyards',
        description: 'World-famous classical dance-drama featuring elaborate facial makeup (Chutti), towering headgear (Kireetam), and micro-eye expressions (Navarasas).',
        costumeHighlight: 'Pachha (green face for noble heroes), Kathi (villainous knife character), flared white skirts.',
        instruments: ['Chenda drum', 'Maddalam', 'Chengila gong', 'Elathalam cymbals']
      },
      {
        name: 'Mohiniyattam',
        type: 'Dance',
        origin: 'Classical tradition of Kerala',
        description: 'The "Dance of the Enchantress", characterized by graceful swaying hip movements, delicate Lasya, and subtle emotional cadence.',
        costumeHighlight: 'Off-white Kasavu saree with shimmering gold zari borders, hair tied in a side bun encircled by jasmine flowers.'
      },
      {
        name: 'Theyyam (Divine Ritual Art)',
        type: 'Theatre',
        origin: 'North Malabar (Kannur & Kasaragod)',
        description: 'Ancient ritual dance where performer channels living deities, wearing 20-foot tall palm leaf crowns and fiery torches.',
        instruments: ['Chenda', 'Thudi', 'Kuzhal']
      },
      {
        name: 'Kalaripayattu',
        type: 'Martial Art',
        origin: 'Ancient Kerala (Sangam Era)',
        description: 'Considered among the oldest martial arts in the world, combining yogic flexibility, weapon combat, and marma vital point healing.',
        instruments: ['Urumi (flexible sword)', 'Vaad (shield)', 'Chuttuval']
      }
    ],
    cuisines: [
      {
        name: 'Kerala Sadya (Grand Feast)',
        category: 'Vegetarian',
        description: 'Elaborate banquet of 24 to 28 vegetarian delicacies served on a fresh plantain banana leaf, eaten with bare fingers.',
        keyIngredients: ['Red Matta Rice', 'Avial', 'Sambar', 'Thoran', 'Olan', 'Kaalan', 'Payasam', 'Pappadam'],
        giTag: false
      },
      {
        name: 'Appam with Vegetable / Stew',
        category: 'Vegetarian',
        description: 'Lacy, crispy-edged fermented rice batter pancakes with a soft spongy cloud center, served with fragrant coconut milk stew.',
        keyIngredients: ['Fermented Rice Flour', 'Coconut Milk', 'Shallots', 'Ginger', 'Curry Leaves', 'Black Peppercorns']
      },
      {
        name: 'Malabar Fish Curry & Porotta',
        category: 'Non-Vegetarian',
        description: 'Kingfish simmered in a tangy sauce of Kudampuli (Malabar tamarind), coconut milk, and curry leaves, paired with flaky layered flatbread.',
        keyIngredients: ['Seer Fish', 'Kudampuli', 'Coconut Oil', 'Curry Leaves', 'Green Chillies']
      },
      {
        name: 'Puttu and Kadala Curry',
        category: 'Vegetarian',
        description: 'Steamed cylinders of ground rice layered with fresh grated coconut shavings, served with spiced black chickpea gravy.',
        keyIngredients: ['Coarse Rice Flour', 'Grated Coconut', 'Black Chickpeas', 'Mustard Seeds', 'Coconut Oil']
      },
      {
        name: 'Palada Pradhaman',
        category: 'Dessert',
        description: 'The ultimate royal dessert made by slow-cooking cooked rice flakes (Ada) in reduced caramelized milk, cardamom, and roasted cashews.',
        keyIngredients: ['Rice Ada', 'Whole Cow Milk', 'Sugar', 'Cardamom', 'Cashews & Ghee']
      }
    ],
    festivals: [
      {
        name: 'Onam (Harvest & Homecoming Festival)',
        timing: 'Chingam (August/September)',
        significance: 'Welcoming the legendary benevolent Asura King Mahabali who visits his beloved kingdom once a year.',
        keyRitual: 'Intricate floral floor tapestries (Athapookkalam), Pulikali tiger dance, Snake Boat Races (Vallam Kali), and Grand Sadya.',
        highlight: 'Aranmula & Nehru Trophy boat races where hundreds of synchronized oarsmen chant vanchipattu.'
      },
      {
        name: 'Thrissur Pooram',
        timing: 'Medam (April/May)',
        significance: 'The "Festival of all Festivals" founded by Raja Rama Varma (Shakthan Thampuran) at Vadakkunnathan Temple.',
        keyRitual: 'Solemn face-off of caparisoned elephants holding peacock feather fans (Aalavattam) and yak hair fly whisks (Venchamarom).',
        highlight: 'Ilanjithara Melam featuring 250+ percussionists and midnight fireworks spectacle.'
      },
      {
        name: 'Vishu',
        timing: 'Medam 1st (Mid-April)',
        significance: 'Astronomical Malayalam New Year symbolizing prosperity and auspicious beginnings.',
        keyRitual: 'Viewing the Vishukkani first thing at dawn (golden cucumber, Kanikkonna flowers, betel leaves, coins, mirror, Krishna idol).',
        highlight: 'Giving Vishukkaineettam (token gift money) from elders to children.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Balaramapuram Kasavu Saree (GI)', 'Chendamangalam Dhotis (GI)', 'Kuthampully Handloom Sarees (GI)'],
      handicrafts: ['Aranmula Kannadi (Mirror made of mystery metal alloy, GI)', 'Nettur Petti (Jewelry Box)', 'Kathakali Wooden Masks', 'Coconut Shell Carvings', 'Bell Metal Nilavilakku Lamps'],
      traditionalMenAttire: 'Mundu (white cotton sarong with gold zari border) and Melmundu / Jubba worn over the shoulder.',
      traditionalWomenAttire: 'Mundum Neriyathum (two-piece garment) and Kasavu Saree woven from pure off-white cotton and gold threads.',
      giTaggedCrafts: ['Aranmula Kannadi', 'Palakkadan Matta Rice', 'Balaramapuram Sarees', 'Pokkali Rice', 'Alleppey Coir']
    },
    historyTimeline: [
      {
        era: '3rd Century BC - 12th Century AD',
        title: 'Chera Dynasty & Ancient Muziris Port',
        description: 'Flourishing trade with Romans, Phoenicians, and Chinese through the bustling ancient port of Muziris.'
      },
      {
        era: '1498 AD',
        title: 'Arrival of Vasco da Gama',
        description: 'Portuguese explorer landed at Kappad, Kozhikode, sparking the European colonial era in the spice maritime routes.'
      },
      {
        era: '1741 AD',
        title: 'Battle of Colachel',
        description: 'King Marthanda Varma of Travancore defeated the Dutch East India Company, the first major Asian victory over European naval power.'
      },
      {
        era: '1956 AD',
        title: 'State Reorganization Act',
        description: 'Unification of Travancore, Cochin, and Malabar regions based on Malayalam linguistic identity to form Kerala.'
      }
    ]
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    capital: 'Mumbai',
    region: 'West',
    coordinates: [19.7515, 75.7139],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Land of Maratha Valor, Rock-Cut Caves, & Saintly Heritage',
    overview: 'Maharashtra combines rugged Sahyadri mountain fortresses of Chhatrapati Shivaji Maharaj, UNESCO rock-cut cave monasteries at Ajanta & Ellora, lively Ganesh Chaturthi festivities, Bollywood cinema, and vibrant culinary flavors.',
    officialLanguage: 'Marathi',
    spokenLanguages: ['Marathi', 'Hindi', 'Konkani', 'English'],
    stateAnimal: 'Indian Giant Squirrel (Shekru)',
    stateBird: 'Yellow-footed Green Pigeon (Hariyal)',
    funFact: 'Lonar Crater Lake in Buldhana, Maharashtra is a 50,000-year-old hyper-velocity meteorite impact crater containing both saline and alkaline water.',
    monuments: [
      {
        name: 'Ajanta & Ellora Caves',
        type: 'Rock-Cut Cave Temples & Monasteries',
        century: '2nd Century BC to 10th Century AD',
        location: 'Chhatrapati Sambhaji Nagar',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1600100397608-f010e4299955?auto=format&fit=crop&w=800&q=80',
        description: 'Ellora\'s Kailash Temple (Cave 16) is the world\'s largest single monolithic rock excavation carved top-down from volcanic basalt cliff.',
        coordinates: [20.0268, 75.1793]
      },
      {
        name: 'Gateway of India & Taj Mahal Palace',
        type: 'Indo-Saracenic Monument',
        century: '1911 - 1924 AD',
        location: 'Mumbai Waterfront',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
        description: 'Erected overlooking Mumbai Harbour to commemorate King George V\'s landing, designed by architect George Wittet.',
        coordinates: [18.9220, 72.8347]
      },
      {
        name: 'Raigad Fort',
        type: 'Hill Fortress & Capital of Maratha Empire',
        century: '1674 AD',
        location: 'Mahad, Raigad',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'Impregnable mountain bastion situated 2,700 ft above sea level, coronation site of Chhatrapati Shivaji Maharaj.',
        coordinates: [18.2354, 73.4447]
      },
      {
        name: 'Chhatrapati Shivaji Maharaj Terminus (CST)',
        type: 'Victorian Gothic Revival Railway Station',
        century: '1888 AD',
        location: 'Mumbai',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=800&q=80',
        description: 'Masterpiece of Victorian Gothic architecture with Indian traditional palace features, carved stone gargoyles, and grand dome.',
        coordinates: [18.9401, 72.8354]
      }
    ],
    artAndDance: [
      {
        name: 'Lavani',
        type: 'Dance',
        origin: 'Solapur, Pune & Kolhapur regions',
        description: 'High-energy rhythmic folk dance performed to the thumping beats of the Dholki, combining sensuous expression, wit, and social storytelling.',
        costumeHighlight: '9-yard Nauvari saree tucked in front and back, heavy ghungroos (ankle bells), and Maharashtrian pearl nath (nose ring).',
        instruments: ['Dholki', 'Tuntune', 'Manjira', 'Daf']
      },
      {
        name: 'Koli Dance',
        type: 'Dance',
        origin: 'Coastal Fisherfolk of Konkan & Mumbai',
        description: 'Joyous sea-faring dance mimicking the rowing of fishing catamarans, net casting, and ocean tide waves.',
        costumeHighlight: 'Brightly colored knee-length wrap dhotis, caps, and vibrant printed blouses.'
      },
      {
        name: 'Powada (Maratha Ballads)',
        type: 'Music',
        origin: '17th Century Maratha Military Camps',
        description: 'Heroic narrative ballad genre praising the valor of warriors and historical triumphs of Chhatrapati Shivaji Maharaj.',
        instruments: ['Daf (tambourine)', 'Tuntune', 'Majira']
      },
      {
        name: 'Warli Painting',
        type: 'Theatre',
        origin: 'Warli Tribe (North Sahyadri / Palghar)',
        description: 'Indigenous tribal art using geometric circles, triangles, and white rice flour paste on ochre clay mud walls depicting communal tarpa dance.',
        instruments: ['Tarpa (gourd wind instrument)']
      }
    ],
    cuisines: [
      {
        name: 'Puran Poli with Katachi Amti',
        category: 'Vegetarian',
        description: 'Sweet whole wheat flatbread stuffed with a luscious filling of chana dal, jaggery, cardamom, and nutmeg, served alongside spicy lentil broth and milk ghee.',
        keyIngredients: ['Chana Dal', 'Jaggery (Gul)', 'Nutmeg & Cardamom', 'Ghee', 'Whole Wheat Flour'],
        giTag: false
      },
      {
        name: 'Misal Pav',
        category: 'Street Food',
        description: 'Spicy sprouted moth bean curry topped with crunchy farsan, chopped onions, lemon, and fiery red gravy (Tarri), eaten with soft pav buns.',
        keyIngredients: ['Sprouted Matki Beans', 'Kanda Lasun Masala', 'Farsan', 'Coconut Paste', 'Ladi Pav']
      },
      {
        name: 'Vada Pav',
        category: 'Street Food',
        description: 'The beloved "Burger of Mumbai": deep-fried spiced potato fritter batata vada nestled inside a fluffy bun with spicy dry garlic chutney and fried green chili.',
        keyIngredients: ['Boiled Potatoes', 'Mustard Seeds', 'Gram Flour (Besan)', 'Dry Garlic Chutney', 'Green Chillies']
      },
      {
        name: 'Kolhapuri Tambda & Pandhra Rassa',
        category: 'Non-Vegetarian',
        description: 'Signature duo from royal Kolhapur: fiery red broth made with Mathania chilies and mutton stock, alongside rich white broth cooked in coconut milk and poppy seeds.',
        keyIngredients: ['Mutton Bone Stock', 'Kolhapuri Kanda Lasun Masala', 'Fresh Coconut Milk', 'Khus-Khus (Poppy Seeds)', 'Spices']
      },
      {
        name: 'Modak (Ukadiche Modak)',
        category: 'Dessert',
        description: 'Steamed rice flour dumplings stuffed with grated fresh coconut, jaggery, and roasted poppy seeds, offered to Lord Ganesha.',
        keyIngredients: ['Rice Flour', 'Fresh Grated Coconut', 'Jaggery', 'Cardamom', 'Pure Ghee']
      }
    ],
    festivals: [
      {
        name: 'Ganesh Chaturthi (Ganeshotsav)',
        timing: 'Bhadrapada (August/September)',
        significance: '10-day mega festival popularized by Lokmanya Tilak in 1893 to unite people during the freedom struggle.',
        keyRitual: 'Pranapratishtha of Ganpati idols, Dhol-Tasha troop performances, modak offerings, and Visarjan processions into the sea with chanting.',
        highlight: 'Lalbaugcha Raja & Dagdusheth Ganpati processions with thundering rhythm of 100+ Dhol Tasha drums.'
      },
      {
        name: 'Gudi Padwa (Marathi New Year)',
        timing: 'Chaitra Shukla Pratipada (March/April)',
        significance: 'Commemorates the triumph of righteousness and beginning of the harvest season.',
        keyRitual: 'Hoisting the auspicious Gudi flag (bright silk cloth, neem leaves, sugar candy garland, and inverted copper pot) outside home entrances.',
        highlight: 'Grand Shobha Yatras with traditional saffron turbans and Royal Lezim performance.'
      },
      {
        name: 'Pandharpur Wari Pilgrimage',
        timing: 'Ashadhi Ekadashi (June/July)',
        significance: '800-year-old saintly walking pilgrimage (Wari) of 21 days honoring Lord Vithoba & Rukmini.',
        keyRitual: 'Over 1 million Warkaris walk singing Abhangs of Sant Dnyaneshwar and Sant Tukaram carrying their sacred footwear (Padukas) in silver palanquins.',
        highlight: 'Rhythmic chanting of "Gyanba Tukaram" with Chipli cymbals and orange flags across green Deccan fields.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Paithani Silk Saree (GI, woven with pure gold zari and peacock pallu)', 'Narayan Peth Saree', 'Solapur Chaddar (GI Blanket)', 'Himroo Shawls'],
      handicrafts: ['Warli Tribal Art', 'Kolhapuri Chappals (GI Leather Footwear)', 'Sawantwadi Lacquerware Wooden Toys', 'Bidriware (Brim of Deccan)'],
      traditionalMenAttire: 'Dhotar / Pyjama with Kurta, Nehru Jacket, and iconic Puneri Pagadi or saffron Feta (Turban).',
      traditionalWomenAttire: 'Nauvari Saree (9-yard Kashta style draping), Kolhapuri Saaj necklace, and Pearl-studded crescent Chandrakor / Nath.',
      giTaggedCrafts: ['Paithani Sarees & Fabrics', 'Kolhapuri Chappal', 'Mahabaleshwar Strawberry', 'Solapur Chaddar', 'Alphonso (Hapus) Mango']
    },
    historyTimeline: [
      {
        era: '2nd Century BC - 10th Century AD',
        title: 'Satavahanas, Vakatakas & Rashtrakutas',
        description: 'Golden epoch of rock-cut architecture, commissioning Buddhist caves at Ajanta and the monolithic Kailash Temple.'
      },
      {
        era: '1674 AD',
        title: 'Coronation of Chhatrapati Shivaji Maharaj',
        description: 'Establishment of Hindavi Swarajya and Maratha naval/military prowess based on guerrilla warfare (Ganimi Kava).'
      },
      {
        era: '18th Century AD',
        title: 'Peshwa Era & Maratha Confederacy',
        description: 'Expansion of Maratha empire across the Indian subcontinent under Bajirao I and successors.'
      },
      {
        era: 'May 1, 1960',
        title: 'Formation of Maharashtra State',
        description: 'Creation of Maharashtra with Mumbai as capital following the historic Samyukta Maharashtra Movement.'
      }
    ]
  },
  {
    id: 'tamil_nadu',
    name: 'Tamil Nadu',
    capital: 'Chennai',
    region: 'South',
    coordinates: [11.1271, 78.6569],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Cradle of Dravidian Temple Towers, Carnatic Music, & Sangam Literature',
    overview: 'Tamil Nadu possesses one of the world\'s longest surviving classical civilizations. Known for its soaring multi-tiered temple gopurams, Bharatnatyam classical dance, intricate Kanchipuram silks, bronze sculptures, and rich filter coffee culture.',
    officialLanguage: 'Tamil',
    spokenLanguages: ['Tamil', 'English', 'Telugu', 'Malayalam'],
    stateAnimal: 'Nilgiri Tahr',
    stateBird: 'Emerald Dove',
    funFact: 'The Tamil language has an unbroken literary history of over 2,500 years and was the first to be officially classified as a Classical Language of India.',
    monuments: [
      {
        name: 'Brihadisvara Temple (Big Temple)',
        type: 'Chola Dravidian Granite Architecture',
        century: '1010 AD (11th Century)',
        location: 'Thanjavur',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'Built by Raja Raja Chola I, featuring a 216-ft Vimana tower crowned by an 80-tonne single granite block dome (Kumbam).',
        coordinates: [10.7828, 79.1318]
      },
      {
        name: 'Meenakshi Amman Temple',
        type: 'Pandya / Nayakar Temple Complex',
        century: '6th Century AD (rebuilt 16th-17th Century)',
        location: 'Madurai',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80',
        description: 'Heart of ancient Madurai, famous for its 14 monumental Gopurams adorned with over 33,000 colorful mythological sculptures.',
        coordinates: [9.9195, 78.1193]
      },
      {
        name: 'Group of Monuments at Mahabalipuram',
        type: 'Pallava Rock-Cut Shore Temples & Reliefs',
        century: '7th - 8th Century AD',
        location: 'Mamallapuram (Mahabalipuram)',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80',
        description: 'Contains Descent of the Ganges (Arjuna\'s Penance), the monolithic Pancha Rathas (chariots), and the seaside Shore Temple.',
        coordinates: [12.6172, 80.1927]
      }
    ],
    artAndDance: [
      {
        name: 'Bharatanatyam',
        type: 'Dance',
        origin: 'Ancient Temples (Sadir Natyam)',
        description: 'The premier classical Indian dance form rooted in Bharata Muni\'s Natya Shastra, featuring crisp geometry (Aramandi), rhythmic footwork (Adavus), and expressive eyes (Abhinaya).',
        costumeHighlight: 'Pleated silk costume fan that flares like peacock feathers during knee bends, temple jewelry, and floral veni.',
        instruments: ['Nattuvangam (brass cymbals)', 'Mridangam', 'Carnatic Violin', 'Veena', 'Flute']
      },
      {
        name: 'Carnatic Classical Music',
        type: 'Music',
        origin: 'Ancient Tamil music & Trinity of Carnatic Music',
        description: 'Highly structured melodic system based on 72 Melakarta Ragas and complex rhythmic Tala cycles (Tyagaraja, Muthuswami Dikshitar, Syama Sastri).',
        instruments: ['Saraswati Veena', 'Mridangam', 'Ghatam (clay pot)', 'Kanjira', 'Nadaswaram']
      },
      {
        name: 'Karagattam & Karakattam',
        type: 'Dance',
        origin: 'Folk ritual honoring Goddess Mariamman',
        description: 'Acrobatic folk balance dance where dancers balance tiered brass pots decorated with floral canopies and wooden parrots on their heads.',
        instruments: ['Thavil drum', 'Nadaswaram', 'Pambai']
      },
      {
        name: 'Silambam',
        type: 'Martial Art',
        origin: 'Sangam Era (Ancient Tamilakam)',
        description: 'Ancient weapon-based martial art employing fast-spinning bamboo staff techniques, referenced in Tamil epics like Silappatikaram.',
        instruments: ['Silambam bamboo staff', 'Madu (deer horns)']
      }
    ],
    cuisines: [
      {
        name: 'Chettinad Chicken / Mushroom Gravy',
        category: 'Non-Vegetarian',
        description: 'Legendary cuisine of the merchant Chettiars, prepared with freshly roasted spice blend of star anise, stone flower (kalpasi), marathi mokku, and black pepper.',
        keyIngredients: ['Star Anise', 'Kalpasi (Black Stone Flower)', 'Fennel Seeds', 'Shallots (Chinnavengayam)', 'Curry Leaves'],
        giTag: false
      },
      {
        name: 'Crispy Medu Vada & Sambar Idli',
        category: 'Vegetarian',
        description: 'Steamed fluffy rice-lentil cakes and crispy golden urad dal donuts soaked in aromatic lentil-tamarind vegetable stew with freshly ground coconut chutney.',
        keyIngredients: ['Urad Dal', 'Idli Rice', 'Drumsticks', 'Tamarind', 'Curry Leaves', 'Asafoetida']
      },
      {
        name: 'Filter Kaapi (South Indian Degree Coffee)',
        category: 'Beverage',
        description: 'Dark roasted chicory-infused coffee decoction brewed in a brass metal drip filter, frothed with boiled buffalo milk, and served in a traditional Davarah-Tumbler.',
        keyIngredients: ['Dark Roast Peaberry / Plantation A Beans', 'Chicory Root', 'Whole Cream Milk', 'Sugar']
      },
      {
        name: 'Tirunelveli Halwa',
        category: 'Dessert',
        description: 'Silky, translucent golden-brown sweet made by extracting whole wheat milk, simmered continuously in pure ghee with water from the holy Thamirabarani river.',
        keyIngredients: ['Wheat Milk Extract', 'Desi Ghee', 'Cane Sugar / Jaggery', 'Thamirabarani River Water', 'Cashews'],
        giTag: true
      },
      {
        name: 'Kothu Parotta',
        category: 'Street Food',
        description: 'Flaky layered parotta shredded on a sizzling iron griddle with eggs, chicken or vegetables, curry salna, and chopped green chilies with musical spatulas.',
        keyIngredients: ['Layered Parotta', 'Egg/Meat/Veggies', 'Salna Gravy', 'Curry Leaves', 'Green Chillies']
      }
    ],
    festivals: [
      {
        name: 'Pongal (Thai Pongal)',
        timing: 'Thai (Mid-January, 4 Days)',
        significance: 'Grand 4-day thanksgiving harvest festival dedicated to the Sun God Surya, nature, and farm cattle.',
        keyRitual: 'Boiling freshly harvested rice and milk in clay pots until it overflows, joyful shouts of "Pongalo Pongal!" (May prosperity overflow!).',
        highlight: 'Mattu Pongal (honoring cattle with painted horns) and Jallikattu bull-embracing sport in Alanganallur.'
      },
      {
        name: 'Madurai Chithirai Festival',
        timing: 'Chithirai (April/May, 15 Days)',
        significance: 'Re-enactment of the celestial wedding of Goddess Meenakshi with Lord Sundareswarar (Shiva).',
        keyRitual: 'Procession of Lord Kallazhagar riding a golden horse chariot into the holy Vaigai River.',
        highlight: 'Over 1 million devotees assemble in Madurai streets carrying silver umbrellas and singing.'
      },
      {
        name: 'Margazhi Music & Dance Festival (Chennai)',
        timing: 'Margazhi (Mid-December to Mid-January)',
        significance: 'One of the world\'s largest classical music festivals featuring 2,000+ Carnatic vocal and Bharatanatyam concerts.',
        keyRitual: 'Singing Andal\'s Tiruppavai verses at sunrise, listening to concerts in Sabhas, and enjoying hot Ghee Pongal at Sabha canteens.',
        highlight: 'Non-stop kutcheris in historical Music Academy and Mylapore sabhas.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Kanchipuram Pure Mulberry Silk Saree (GI)', 'Madurai Sungudi Saree', 'Salem Silk', 'Chettinad Cotton Kandangi Saree'],
      handicrafts: ['Thanjavur Gold Leaf Paintings (GI)', 'Swamimalai Bronze Icons (GI, lost-wax casting since Chola times)', 'Thanjavur Dancing Bobblehead Dolls (GI)', 'Pattamadai Mats', 'Nachiyar Koil Brass Lamps'],
      traditionalMenAttire: 'Veshti (White silk or cotton dhoti with zari border) and Angavastram draped over shoulders with Kurta or Shirt.',
      traditionalWomenAttire: 'Grand Kanchipuram Silk Saree with contrasting Korvai temple borders, braided hair adorned with fresh Jasmine Mogra (Malli).',
      giTaggedCrafts: ['Kanchipuram Silk', 'Thanjavur Paintings', 'Swamimalai Bronze Icons', 'Thanjavur Art Plate', 'Madurai Sungudi']
    },
    historyTimeline: [
      {
        era: '300 BC - 300 AD',
        title: 'Sangam Period & Three Crowned Kings',
        description: 'Golden literary age under the Cheras, Cholas, and Pandyas, producing poetic masterpieces like Tirukkural and Silappatikaram.'
      },
      {
        era: '6th - 9th Century AD',
        title: 'Pallava Dynasty & Rock Architecture',
        description: 'Pallava kings Narasimhavarman I & II built Mamallapuram shore temples and spearheaded the Bhakti movement.'
      },
      {
        era: '850 - 1279 AD',
        title: 'Imperial Chola Empire',
        description: 'Raja Raja Chola and Rajendra Chola built a vast maritime empire across the Bay of Bengal, Sri Lanka, Malaya, and Java.'
      },
      {
        era: '1969 AD',
        title: 'Madras State Renamed to Tamil Nadu',
        description: 'Official renaming of the state to Tamil Nadu ("Land of the Tamils") under Chief Minister C. N. Annadurai.'
      }
    ]
  },
  {
    id: 'punjab',
    name: 'Punjab',
    capital: 'Chandigarh',
    region: 'North',
    coordinates: [31.1471, 75.3412],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Land of Five Rivers, Golden Sanctum, Bhangra & Big Hearts',
    overview: 'Punjab—named from Persian Panj (Five) and Aab (Water)—is the vibrant agrarian heartland of India. Famous for the serene Golden Temple, soul-stirring Gurbani hymns, energetic Bhangra and Giddha, colorful Phulkari embroidery, and lavish tandoori cuisine.',
    officialLanguage: 'Punjabi',
    spokenLanguages: ['Punjabi (Gurmukhi)', 'Hindi', 'English'],
    stateAnimal: 'Blackbuck',
    stateBird: 'Northern Goshawk (Baaz)',
    funFact: 'The Golden Temple in Amritsar runs the world\'s largest free community kitchen (Langar), serving over 100,000 hot wholesome meals daily to people of all faiths, free of cost.',
    monuments: [
      {
        name: 'Harmandir Sahib (The Golden Temple)',
        type: 'Sikh Sacred Gurdwara Complex',
        century: '1589 AD (Gold-gilded 1830 AD)',
        location: 'Amritsar',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80',
        description: 'Surrounded by the sacred Amrit Sarovar (Pool of Nectar), built with four entrances symbolizing openness to all humanity.',
        coordinates: [31.6200, 74.8765]
      },
      {
        name: 'Jallianwala Bagh Memorial',
        type: 'National Historic Memorial',
        century: '1919 AD (Memorial built 1951)',
        location: 'Amritsar',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        description: 'Sacred grounds honoring martyrs of the 1919 massacre, featuring the preserved Martyr\'s Well and bullet-marked brick walls.',
        coordinates: [31.6208, 74.8801]
      },
      {
        name: 'Qila Mubarak (Bathinda Fort)',
        type: 'Ancient Brick Fortress',
        century: '6th Century AD (Rebuilt 11th Century)',
        location: 'Bathinda',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'One of the oldest surviving forts in India where Razia Sultan, first female monarch of Delhi Sultanate, was imprisoned.',
        coordinates: [30.2110, 74.9455]
      }
    ],
    artAndDance: [
      {
        name: 'Bhangra',
        type: 'Dance',
        origin: 'Majha & Doaba farming regions',
        description: 'High-octane celebratory harvest folk dance characterized by vigorous leaps, arm thrusts, shoulder shrugs, and joyous shouts of "Balle Balle!".',
        costumeHighlight: 'Bright satin Chaadra (skirt-wrap), Kurta, glittering Jugni vest, and Turla-fanned Pagri turban.',
        instruments: ['Dhol drum', 'Algoza (twin flute)', 'Chimta (metal tongs with brass jingles)', 'Tumbi (single string lute)']
      },
      {
        name: 'Giddha',
        type: 'Dance',
        origin: 'Women folk tradition of Punjab',
        description: 'Enchanting, rhythmic clap dance where women form circles, clapping hands to humorous folk couplets (Boliyan) describing everyday life.',
        costumeHighlight: 'Heavy flared Salwar Kameez, Paranda (braided hair tassels with mirror work), and Maang Tikka.'
      },
      {
        name: 'Sufi & Qawwali Traditions',
        type: 'Music',
        origin: 'Sufi shrines of Baba Farid & Bulleh Shah',
        description: 'Mystical spiritual music expressing divine divine love, longing, and universal brotherhood through poetic Kafis.',
        instruments: ['Harmonium', 'Dholak', 'Tabla', 'Ektara']
      },
      {
        name: 'Gatka (Sikh Martial Art)',
        type: 'Martial Art',
        origin: '6th Sikh Guru Guru Hargobind Ji',
        description: 'Martial discipline of self-defense using wooden sticks (Soti), shields (Phari), curved swords (Kirpan), and chakra throwing.',
        instruments: ['Nagara drum', 'Dhad']
      }
    ],
    cuisines: [
      {
        name: 'Makki di Roti & Sarson da Saag',
        category: 'Vegetarian',
        description: 'The quintessential winter comfort: thick flatbread made of yellow cornmeal flour, served with slow-cooked mustard greens gravy, topped with white butter (Makhan) and raw jaggery.',
        keyIngredients: ['Fresh Mustard Greens (Sarson)', 'Spinach & Bathua', 'Maize Flour (Makki)', 'Desi White Butter', 'Ginger & Garlic'],
        giTag: false
      },
      {
        name: 'Amritsari Kulcha with Chole',
        category: 'Vegetarian',
        description: 'Crispy, multi-layered tandoor-baked flatbread stuffed with spiced crushed potatoes, onions, and pomegranate seeds, paired with spicy black chickpeas and tamarind-onion relish.',
        keyIngredients: ['Refined Flour', 'Spiced Mashed Potatoes', 'Anardana (Dry Pomegranate Seeds)', 'Kabuli Chana', 'Pure Ghee']
      },
      {
        name: 'Butter Chicken (Murgh Makhani)',
        category: 'Non-Vegetarian',
        description: 'Tender tandoor-roasted marinated chicken pieces simmered in a velvety sauce of ripe tomatoes, butter, fresh cream, and dried fenugreek leaves (Kasoori Methi).',
        keyIngredients: ['Chicken Tandoori', 'Tomato Puree', 'Kasoori Methi', 'Cashew Paste', 'Fresh Cream & Butter']
      },
      {
        name: 'Creamy Sweet Lassi in Clay Kulhad',
        category: 'Beverage',
        description: 'Thick, hand-churned yogurt drink sweetened with sugar, flavored with cardamom, and crowned with a thick dollop of fresh clotted cream (Malai).',
        keyIngredients: ['Whole Buffalo Milk Curd', 'Sugar', 'Cardamom', 'Kewra Water', 'Fresh Malai']
      },
      {
        name: 'Pinni',
        category: 'Dessert',
        description: 'Rich winter sweet balls prepared by roasting whole wheat flour in generous desi ghee, infused with edible gum (Gond), almonds, cashews, and raisins.',
        keyIngredients: ['Whole Wheat Flour', 'Desi Ghee', 'Gond (Edible Gum)', 'Jaggery/Sugar', 'Almonds & Khoya']
      }
    ],
    festivals: [
      {
        name: 'Baisakhi (Vaisakhi)',
        timing: 'April 13th / 14th',
        significance: 'Punjabi Solar New Year, celebrating the spring wheat harvest and the founding of the Khalsa Panth in 1699 by Guru Gobind Singh Ji.',
        keyRitual: 'Early morning dip at Amritsar Sarovar, Nagar Kirtan processions, Akhand Path, and exuberant Bhangra performances in wheat fields.',
        highlight: 'Community Langar and martial Gatka demonstrations.'
      },
      {
        name: 'Lohri (Bonfire Festival)',
        timing: 'January 13th (Eve of Makar Sankranti)',
        significance: 'Winter solstice celebration marking the end of peak winter and passing of the sun into the northern hemisphere.',
        keyRitual: 'Gathering around community bonfires tossing popcorn, revdi (sesame candy), and peanuts while singing folk tales of Dulla Bhatti.',
        highlight: 'Celebrating newborns and newlyweds with music, Sarson da Saag feasts, and flying kites.'
      },
      {
        name: 'Hola Mohalla',
        timing: 'March (Day after Holi, Anandpur Sahib)',
        significance: 'Established by Guru Gobind Singh Ji to demonstrate martial readiness and courage.',
        keyRitual: 'Thousands of Nihang warriors in royal blue robes and towering turbans stage mock battles, swordplay, and bareback horse-riding.',
        highlight: 'Spectacular tent-pegging and Gatka displays.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Phulkari Hand Embroidery (GI, vibrant silk floss floral needlework on khaddar cotton)', 'Punjabi Durries', 'Gurmukhi Script Tapestries'],
      handicrafts: ['Amritsari Juttis (Hand-stitched leather shoes with gold tilla work)', 'Brass & Copper Utensils of Jandiala Guru (UNESCO Intangible)', 'Wood inlay furniture (Hoshiarpur)', 'Mud mirror art'],
      traditionalMenAttire: 'Kurta-Chaadra or Kurta-Pajama with vibrant Pagri (Turban/Dastaar) and hand-embroidered Jutti.',
      traditionalWomenAttire: 'Salwar Kameez with matching Dupatta/Phulkari Chadar and Paranda hair braids.',
      giTaggedCrafts: ['Phulkari of Punjab', 'Traditional Brass and Copper Craft of Jandiala Guru (UNESCO)']
    },
    historyTimeline: [
      {
        era: '2500 - 1500 BC',
        title: 'Indus Valley Civilization in Punjab',
        description: 'Flourishing ancient urban settlements at Ropar (Rupnagar) along the Sutlej River.'
      },
      {
        era: '1469 - 1708 AD',
        title: 'Ten Sikh Gurus & Foundation of Sikhism',
        description: 'Guru Nanak Dev Ji founded Sikhism, and Guru Gobind Singh Ji established the Khalsa Panth.'
      },
      {
        era: '1799 - 1839 AD',
        title: 'Sikh Empire under Maharaja Ranjit Singh',
        description: 'Golden Age of Punjab: Maharaja Ranjit Singh (Sher-e-Punjab) established a secular, sovereign empire from Lahore to Kashmir.'
      },
      {
        era: '1966 AD',
        title: 'Modern Statehood',
        description: 'Reorganization of Punjab on linguistic basis, giving rise to the modern prosperous agrarian state.'
      }
    ]
  },
  {
    id: 'west_bengal',
    name: 'West Bengal',
    capital: 'Kolkata',
    region: 'East',
    coordinates: [22.9868, 87.8550],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80',
    tagline: 'City of Joy, Rabindrasangeet, Durga Puja & Intellectual Renaissance',
    overview: 'West Bengal is the cultural and literary nerve center of eastern India. Home to Nobel Laureate Rabindranath Tagore, the UNESCO-inscribed Durga Puja, serene Darjeeling tea estates, the Royal Bengal Tiger of Sundarbans, and delectable sweetmeats.',
    officialLanguage: 'Bengali',
    spokenLanguages: ['Bengali', 'English', 'Hindi', 'Santali', 'Nepali'],
    stateAnimal: 'Fishing Cat',
    stateBird: 'White-throated Kingfisher',
    funFact: 'Durga Puja in Kolkata was inscribed on the UNESCO Representative List of the Intangible Cultural Heritage of Humanity in 2021.',
    monuments: [
      {
        name: 'Victoria Memorial',
        type: 'Indo-Saracenic & Classical White Marble Monument',
        century: '1906 - 1921 AD',
        location: 'Kolkata',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80',
        description: 'Magnificent white Makrana marble monument with 64 acres of gardens, housing 25 galleries of art and colonial artifacts.',
        coordinates: [22.5448, 88.3426]
      },
      {
        name: 'Howrah Bridge (Rabindra Setu)',
        type: 'Balanced Cantilever Steel Bridge',
        century: '1943 AD',
        location: 'Hooghly River, Kolkata',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1600100397608-f010e4299955?auto=format&fit=crop&w=800&q=80',
        description: 'Iconic 705-meter cantilever bridge constructed without a single nut or bolt, held entirely by rivets, carrying 100,000+ vehicles daily.',
        coordinates: [22.5851, 88.3468]
      },
      {
        name: 'Bishnupur Terracotta Temples',
        type: 'Malla Terracotta Architecture',
        century: '17th - 18th Century AD',
        location: 'Bishnupur, Bankura',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'Remarkable brick temples (Rasmancha, Jor Bangla, Shyam Rai) adorned with thousands of intricate burnt clay panels depicting Ramayana and Mahabharata.',
        coordinates: [23.0760, 87.3197]
      }
    ],
    artAndDance: [
      {
        name: 'Chhau Dance (Purulia Chhau)',
        type: 'Dance',
        origin: 'Purulia & tribal belt',
        description: 'UNESCO Intangible Heritage. Vigorous martial dance-drama reenacting mythic battles with acrobatic somersaults and gigantic painted papier-mâché masks.',
        costumeHighlight: 'Expressive hand-painted Chhau masks with feathers and beadwork, dhoti tucked high.',
        instruments: ['Dhol', 'Dhumsa (giant kettle drum)', 'Shehnai']
      },
      {
        name: 'Baul Music (Mystic Minstrels)',
        type: 'Music',
        origin: 'Rural Bengal (Birbhum, Nadia, Murshidabad)',
        description: 'UNESCO Intangible Heritage. Ecstatic philosophical folk songs by wandering Baul mendicants celebrating the divine residing within every human soul (Moner Manush).',
        instruments: ['Ektara (one-string lute)', 'Dotara', 'Dubki (mini tambourine)', 'Ghungroo']
      },
      {
        name: 'Rabindra Sangeet & Classical Thumri',
        type: 'Music',
        origin: 'Santiniketan (Visva-Bharati)',
        description: 'Poetic musical compositions of Rabindranath Tagore blending Indian ragas with Western folk melodies.',
        instruments: ['Esraj', 'Harmonium', 'Tabla', 'Tanpura']
      },
      {
        name: 'Gaudiya Nritya',
        type: 'Dance',
        origin: 'Ancient Bengal temple courts',
        description: 'Classical dance tradition tracing back to 4th century Natya Shastra, revived with sculpturesque poses and devotion.',
        instruments: ['Khol drum', 'Kartal cymbals']
      }
    ],
    cuisines: [
      {
        name: 'Macher Jhol & Shorshe Ilish',
        category: 'Non-Vegetarian',
        description: 'Hilsa fish cooked in a sharp mustard and green chili paste with mustard oil, or light rohu fish curry with potatoes and kalonji seeds.',
        keyIngredients: ['Hilsa / Rohu Fish', 'Mustard Seed Paste', 'Pure Mustard Oil', 'Kalonji (Nigella Seeds)', 'Green Chillies'],
        giTag: false
      },
      {
        name: 'Kosha Mangsho with Luchi',
        category: 'Non-Vegetarian',
        description: 'Slow-roasted spicy dark mutton curry cooked with caramelized onions, mustard oil, and whole garam masala, paired with puffy, deep-fried refined flour luchis.',
        keyIngredients: ['Mutton (Goat Meat)', 'Mustard Oil', 'Yogurt', 'Caramelized Onions', 'Luchi (Maida Flatbread)']
      },
      {
        name: 'Banglar Rasogolla & Sandesh',
        category: 'Dessert',
        description: 'Porous, spongy balls of fresh cottage cheese (chhena) cooked in light sugar syrup (Rasogolla, GI tagged), alongside Nolen Gur Sandesh made with date palm jaggery.',
        keyIngredients: ['Fresh Cow Milk Chhena', 'Light Sugar Syrup', 'Nolen Gur (Date Palm Jaggery)', 'Cardamom', 'Pistachios'],
        giTag: true
      },
      {
        name: 'Shukto',
        category: 'Vegetarian',
        description: 'Traditional bittersweet opening dish of a Bengali feast, prepared with bitter gourd (korola), raw banana, drumsticks, and radishes simmered in milk with bori (lentil dumplings).',
        keyIngredients: ['Bitter Gourd', 'Plantain & Radish', 'Radhuni Spice & Ginger', 'Milk', 'Lentil Bori']
      },
      {
        name: 'Kolkata Kathi Roll & Phuchka',
        category: 'Street Food',
        description: 'The world\'s original street roll: flaky parotta wrapped around spicy skewered kebabs with onions, lime, and green chutney, alongside crispy hollow semolina balls filled with spicy spiced mashed potato and tangy tamarind-gondhoraj lime water.',
        keyIngredients: ['Parotta', 'Chicken/Paneer Kebab', 'Tamarind Pulp', 'Gondhoraj Lebu (Lime)', 'Boiled Potatoes & Black Salt']
      }
    ],
    festivals: [
      {
        name: 'Durga Puja (UNESCO Inscribed)',
        timing: 'Ashwin / Kartik (September/October, 5 Days)',
        significance: 'The greatest carnival of art, community, and devotion, celebrating Goddess Durga\'s triumph over Mahishasura.',
        keyRitual: 'Dhunuchi dance to the feverish rhythm of Dhak drums, visiting thousand-themed pandals, Sindoor Khela on Dashami, and immersion into the Ganga.',
        highlight: 'Spectacular architectural temporary art installations across Kolkata streets that turn the city into the world\'s largest open-air art gallery.'
      },
      {
        name: 'Basanta Utsav (Holi at Santiniketan)',
        timing: 'Phalguna Purnima (March)',
        significance: 'Spring festival founded by Rabindranath Tagore at Visva-Bharati University celebrating nature and literature.',
        keyRitual: 'Students and visitors dress in yellow (Basanti) attire, perform Tagore dance-dramas, sing Rabindrasangeet, and play with dry herbal abir powders.',
        highlight: 'Cultural procession in the shade of blossoming Palash trees.'
      },
      {
        name: 'Poush Mela',
        timing: 'Poush 7th (Late December, Santiniketan)',
        significance: 'Celebrates the foundation day of Santiniketan Ashram and rural artisan commerce.',
        keyRitual: 'All-night open-air Baul and tribal folk music performances, shopping for Dokra metal crafts and Kantha stitch shawls.',
        highlight: 'Intimate campfires with village musicians playing Ektara.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Baluchari Silk Saree (GI, woven with mythological scenes on the pallu)', 'Jamdani Muslin Saree', 'Kantha Embroidery (GI, running stitch quilting on tussar silk)', 'Santipore Saree (GI)', 'Dhaniakhali Saree'],
      handicrafts: ['Dokra Metal Casting (lost-wax brass casting, GI)', 'Bankura Terracotta Horses (GI, iconic long-eared clay horse)', 'Chhau Masks of Charida', 'Kalighat Paintings', 'Sholapith (Pith) Art'],
      traditionalMenAttire: 'Dhoti (silk or fine cotton with pleats tucked at the waist) and Kurta (Panjabi), draped with a fine Uttoriyo scarf.',
      traditionalWomenAttire: 'Laal Paar Saree (White/Cream saree with broad red border) draped in traditional Bengali eight-fold style, Shakha-Pola shell bangles, and large red Bindi.',
      giTaggedCrafts: ['Banglar Rasogolla', 'Darjeeling Tea (First GI of India)', 'Baluchari Saree', 'Santiniketan Leather Goods', 'Dokra Craft of Bengal']
    },
    historyTimeline: [
      {
        era: '3rd Century BC - 12th Century AD',
        title: 'Mauryan, Gupta & Pala Empire',
        description: 'Under the Pala Empire, Bengal was the epicenter of Mahayana Buddhism, funding Nalanda and building the Somapura Mahavihara.'
      },
      {
        era: '1757 AD',
        title: 'Battle of Plassey',
        description: 'Robert Clive\'s East India Company defeated Nawab Siraj-ud-Daulah, marking the beginning of British colonial rule in India.'
      },
      {
        era: '19th - Early 20th Century',
        title: 'Bengal Renaissance',
        description: 'Socio-cultural awakening led by Raja Ram Mohan Roy, Swami Vivekananda, Rabindranath Tagore, Netaji Subhash Chandra Bose, and Satyajit Ray.'
      },
      {
        era: '1947 AD',
        title: 'Partition & Formation of West Bengal',
        description: 'Partition of Bengal along religious lines during Indian Independence, establishing the modern democratic state of West Bengal.'
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
    bannerImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Land of Mahatma Gandhi, White Rann of Kutch, & Garba Festivities',
    overview: 'Gujarat boasts India\'s longest coastline, the ancient Indus Valley port of Lothal, the sprawling salt desert of the Rann of Kutch, the Asiatic Lions of Gir National Park, the Statue of Unity, and world-renowned 9-night Navratri Garba celebrations.',
    officialLanguage: 'Gujarati',
    spokenLanguages: ['Gujarati', 'Hindi', 'Kutchi', 'English'],
    stateAnimal: 'Asiatic Lion (Gir Forest)',
    stateBird: 'Greater Flamingo',
    funFact: 'The Statue of Unity in Kevadia, Gujarat, stands at 182 meters (597 ft), making it the tallest statue in the entire world.',
    monuments: [
      {
        name: 'Statue of Unity',
        type: 'Colossal Monument',
        century: '2018 AD (21st Century)',
        location: 'Kevadia, Narmada',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'Dedicated to Sardar Vallabhbhai Patel, the "Iron Man of India". Designed by sculptor Ram V. Sutar.',
        coordinates: [21.8380, 73.7191]
      },
      {
        name: 'Rani ki Vav (The Queen’s Stepwell)',
        type: 'Subterranean Stepwell Architecture',
        century: '1063 AD (11th Century)',
        location: 'Patan',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80',
        description: 'Built by Queen Udayamati in memory of King Bhima I. Seven levels of stairs with over 500 principal sculptures honoring Lord Vishnu.',
        coordinates: [23.8589, 72.1017]
      },
      {
        name: 'Sun Temple Modhera',
        type: 'Solanki (Māru-Gurjara) Temple Architecture',
        century: '1026 AD (11th Century)',
        location: 'Modhera, Mehsana',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80',
        description: 'Designed so that on solar equinoxes, the first rays of the rising sun illuminate the central sanctum jewel. Features the massive Surya Kund tank with 108 miniature shrines.',
        coordinates: [23.5836, 72.1331]
      },
      {
        name: 'Somnath Temple',
        type: 'Sacred Jyotirlinga Temple',
        century: 'Rebuilt 1951 AD (Origins 1st Millennium)',
        location: 'Prabhas Patan, Saurashtra',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        description: 'The first of the twelve sacred Jyotirlinga shrines of Lord Shiva, situated right at the edge of the Arabian Sea.',
        coordinates: [20.8880, 70.4012]
      }
    ],
    artAndDance: [
      {
        name: 'Garba & Dandiya Raas',
        type: 'Dance',
        origin: 'Navratri Folk Tradition',
        description: 'UNESCO Intangible Cultural Heritage. Thousands dance in concentric circles around an earthen lamp (Garbha Deep) clapping in sync and striking decorated wooden sticks (Dandiyas).',
        costumeHighlight: 'Chaniya Choli heavily embellished with mirror work, cowrie shells, and heavy silver oxidized jewelry (Kada, Hasli).',
        instruments: ['Dhol drum', 'Tabla', 'Dholak', 'Shehnai', 'Cymbals']
      },
      {
        name: 'Bhavai Folk Theatre',
        type: 'Theatre',
        origin: '14th Century (Asaita Thakar)',
        description: 'Vibrant musical folk theatre mixing socio-political satire, acrobatics, and balancing 8-9 brass water pots on the head.',
        instruments: ['Bhungal (long brass horn)', 'Pakhawaj', 'Manjira', 'Sarangi']
      },
      {
        name: 'Sugam Sangeet & Dayro',
        type: 'Music',
        origin: 'Saurashtra & Kutch regions',
        description: 'Spiritual and philosophical bardic story-singing gathering (Dayro) where saintly bhajans and moral folklore are recited under open night skies.',
        instruments: ['Harmonium', 'Tabla', 'Manjira', 'Ektaro']
      }
    ],
    cuisines: [
      {
        name: 'Gujarati Thali & Dhokla',
        category: 'Vegetarian',
        description: 'A harmonious balance of sweet, salty, sour, and spicy tastes: steamed fermented gram flour cake (Khaman Dhokla) tempered with mustard seeds, curry leaves, and green chilies.',
        keyIngredients: ['Gram Flour (Besan)', 'Mustard Seeds', 'Asafoetida', 'Green Chillies', 'Curry Leaves'],
        giTag: false
      },
      {
        name: 'Undhiyu with Puri',
        category: 'Vegetarian',
        description: 'Surati specialty prepared during Uttarayan: winter vegetables (surti papdi, purple yam, baby eggplants, sweet potatoes) and spiced fenugreek dumplings (Muthiya) slow-cooked in an earthen pot underground.',
        keyIngredients: ['Surti Papdi (Flat Beans)', 'Kand (Purple Yam)', 'Methi Muthiya', 'Fresh Coconut & Coriander', 'Sesame Seeds']
      },
      {
        name: 'Thepla with Chhundo',
        category: 'Vegetarian',
        description: 'Whole wheat flatbread kneaded with fresh fenugreek leaves (Methi), yogurt, and spices, eaten on travel with spicy sweet grated raw mango pickle (Chhundo).',
        keyIngredients: ['Whole Wheat Flour', 'Fresh Fenugreek Leaves', 'Curd', 'Turmeric & Ajwain', 'Ghee']
      },
      {
        name: 'Jalebi & Fafda',
        category: 'Street Food',
        description: 'The beloved Sunday breakfast: crispy chickpea flour ribbons (Fafda) served with piping hot coiled saffron sugar syrup spirals (Jalebi), raw papaya sambharo, and fried green chilies.',
        keyIngredients: ['Besan (Chickpea Flour)', 'Carom Seeds (Ajwain)', 'Saffron Sugar Syrup', 'Kadhi Chutney', 'Papaya Sambharo']
      },
      {
        name: 'Basundi & Shrikhand',
        category: 'Dessert',
        description: 'Thickened saffron-cardamom flavored hung curd (Shrikhand) or reduced sweet milk with pistachios and charoli seeds.',
        keyIngredients: ['Hung Curd (Chakka)', 'Saffron (Kesar)', 'Cardamom Powder', 'Charoli / Chironji Seeds', 'Almonds']
      }
    ],
    festivals: [
      {
        name: 'Navratri (9 Nights of Garba)',
        timing: 'Ashwin (September/October, 9 Nights)',
        significance: 'World\'s longest dance festival worshiping Goddess Durga in her nine divine manifestations (Navadurga).',
        keyRitual: 'Dressing in colorful traditional Chaniya Cholis, performing Aarti at midnight, and dancing Garba until the early hours of dawn.',
        highlight: 'Over 50,000 dancers moving in mesmerizing synchronization at GMDC grounds and United Way of Baroda.'
      },
      {
        name: 'International Kite Festival (Uttarayan)',
        timing: 'January 14th - 15th (Makar Sankranti)',
        significance: 'Welcoming the northward movement of the sun with millions of vibrant kites flying across every rooftop in Ahmedabad and Surat.',
        keyRitual: 'Rooftop kite battles shouting "Kai Po Che!", savoring hot Undhiyu, Jalebi, and Sesame Chikki (Til Laddu).',
        highlight: 'Night illuminated kites (Tukkals) floating like lanterns under starry skies.'
      },
      {
        name: 'Rann Utsav (White Desert Festival)',
        timing: 'November to February (Full Moon Nights)',
        significance: 'Celebration of Kutch handicrafts, desert folklore, and hospitality across the glittering white salt marsh of the Great Rann.',
        keyRitual: 'Camping in royal luxury tents, camel safaris on glowing salt flats during full moon, and watching Kutchi folk artists.',
        highlight: 'Watching sunset dissolve into silver moonlight across the endless horizon of white salt crystals.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Patan Patola Double Ikat Saree (GI, prized weaving taking 6 months per saree)', 'Bandhani of Jamnagar (Tie-dye)', 'Ajrakh Block Print (Natural vegetable dyes, Kutch)', 'Tangaliya Shawl (GI)', 'Ashavali Brocade'],
      handicrafts: ['Rogan Art (Castor oil paint on silk, Nirona, GI)', 'Kutch Lippan Kaam (Mud and mirror wall relief)', 'Sankheda Lacquered Wooden Furniture (GI)', 'Agates of Cambay (Khambhat beads)', 'Kutch Embroidery (Rabari, Ahir, Suf)'],
      traditionalMenAttire: 'Kediyu (Frilled frock-style top), Chorno (tight-fitting dhoti trousers), and colorful embroidered turban (Phento).',
      traditionalWomenAttire: 'Chaniya Choli with mirror-worked blouse, Kapdu, and Dupatta, with ivory/acrylic white chuda bangles.',
      giTaggedCrafts: ['Patan Patola', 'Gir Kesar Mango', 'Surat Zari Craft', 'Kutch Embroidery', 'Agates of Cambay']
    },
    historyTimeline: [
      {
        era: '2400 - 1900 BC',
        title: 'Indus Valley Port of Lothal & Dholavira',
        description: 'World\'s earliest tidal dockyard at Lothal and UNESCO World Heritage water engineering city at Dholavira.'
      },
      {
        era: '10th - 13th Century AD',
        title: 'Solanki (Chaulukya) Golden Age',
        description: 'King Siddharaj Jaisinh and Kumarapala built grand stepwells, Modhera Sun Temple, and Somnath monuments.'
      },
      {
        era: '1915 - 1947 AD',
        title: 'Mahatma Gandhi & Indian Independence Movement',
        description: 'Gandhi set up Sabarmati Ashram in Ahmedabad and launched the historic Salt Dandi March in 1930.'
      },
      {
        era: 'May 1, 1960',
        title: 'Birth of Gujarat State',
        description: 'Creation of Gujarat state on Gujarati linguistic identity after the Mahagujarat Movement.'
      }
    ]
  },
  {
    id: 'uttar_pradesh',
    name: 'Uttar Pradesh',
    capital: 'Lucknow',
    region: 'North',
    coordinates: [26.8467, 80.9462],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Heartland of the Ganga, Taj Mahal, Ayodhya & Varanasi Ghats',
    overview: 'Uttar Pradesh is the spiritual, mythological, and historical epicenter of northern India. Home to the immortal white marble Taj Mahal in Agra, sacred Ghats of Varanasi along the Ganges, the confluence at Prayagraj, and the nawabi adab culture of Lucknow.',
    officialLanguage: 'Hindi',
    spokenLanguages: ['Hindi', 'Urdu', 'Awadhi', 'Bhojpuri', 'Braj Bhasha'],
    stateAnimal: 'Swamp Deer (Barasingha)',
    stateBird: 'Sarus Crane',
    funFact: 'Varanasi (Kashi) in Uttar Pradesh is regarded as one of the oldest continuously inhabited cities in human history, dating back over 3,000 years.',
    monuments: [
      {
        name: 'Taj Mahal',
        type: 'Mughal White Marble Mausoleum',
        century: '1632 - 1648 AD (17th Century)',
        location: 'Agra (Yamuna Bank)',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
        description: 'One of the New Seven Wonders of the World, built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal using pure white Makrana marble and pietra dura gemstone inlays.',
        coordinates: [27.1751, 78.0421]
      },
      {
        name: 'Varanasi Ghats & Kashi Vishwanath Temple',
        type: 'Ancient Riverfront Ghats & Jyotirlinga',
        century: 'Ancient Antiquity (Corridor rebuilt 2021)',
        location: 'Varanasi',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
        description: '84 sacred stone ghats along the sacred Ganges river including Dashashwamedh, Manikarnika, and Assi Ghat where evening Ganga Aarti unfolds.',
        coordinates: [25.3109, 83.0107]
      },
      {
        name: 'Fatehpur Sikri',
        type: 'Mughal Imperial City Complex',
        century: '1571 - 1585 AD',
        location: 'Agra District',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        description: 'Red sandstone capital built by Emperor Akbar featuring Buland Darwaza (54m high Gate of Magnificence) and Salim Chishti\'s white marble tomb.',
        coordinates: [27.0945, 77.6679]
      },
      {
        name: 'Bara Imambara & Rumi Darwaza',
        type: 'Awadhi Nawabi Architecture',
        century: '1784 AD',
        location: 'Lucknow',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1600100397608-f010e4299955?auto=format&fit=crop&w=800&q=80',
        description: 'Built by Nawab Asaf-ud-Daula during a famine relief program; features a monumental unsupported vaulted hall and the famous labyrinth (Bhool Bhulaiya).',
        coordinates: [26.8689, 80.9129]
      }
    ],
    artAndDance: [
      {
        name: 'Kathak',
        type: 'Dance',
        origin: 'Temples and Royal Courts of Lucknow & Banaras',
        description: 'One of the eight classical Indian dances, famous for lightning-fast pirouettes (Chakkars), rhythmic footwork matched to tabla boles (Tatkar), and subtle emotional storytelling.',
        costumeHighlight: 'Anarkali flared dress or traditional ghagra-choli with 100+ brass ghungroos on each ankle.',
        instruments: ['Tabla', 'Pakhawaj', 'Sarangi', 'Harmonium', 'Padhant vocal bol']
      },
      {
        name: 'Banaras & Lucknow Gharana Music',
        type: 'Music',
        origin: 'Varanasi & Lucknow',
        description: 'Prestigious classical music lineage made legendary by Ustad Bismillah Khan (Shehnai), Pandit Ravi Shankar (Sitar), and Girija Devi (Thumri & Dadra).',
        instruments: ['Shehnai', 'Sitar', 'Sarod', 'Tabla', 'Santur']
      },
      {
        name: 'Nautanki & Raslila',
        type: 'Theatre',
        origin: 'Mathura, Vrindavan & Kanpur',
        description: 'Folk operatic musical theatre based on legends of Radha-Krishna (Raslila) and heroic folk tales (Nautanki) sung with high-pitched vocals.',
        instruments: ['Nagara drum', 'Dholak', 'Harmonium']
      }
    ],
    cuisines: [
      {
        name: 'Awadhi Dum Biryani & Galouti Kebab',
        category: 'Non-Vegetarian',
        description: 'Fragrant basmati rice slow-cooked in a sealed dough-pot (Dum Pukht) with saffron and marinated meat, paired with melt-in-mouth Galouti kebabs tenderized with raw papaya and 160 royal spices.',
        keyIngredients: ['Aged Basmati Rice', 'Mutton/Lamb', 'Saffron (Kesar)', 'Kewra Water', 'Cardamom & Rose Petals'],
        giTag: false
      },
      {
        name: 'Banarasi Paan & Malaiyo',
        category: 'Street Food',
        description: 'The legendary digestive betel leaf filled with sweet gulkand, kattha, supari, and silver vark, alongside winter morning Malaiyo (foamy saffron milk froth topped with pistachios).',
        keyIngredients: ['Maghai Betel Leaf', 'Gulkand', 'Saffron Milk Foam', 'Chuna & Kattha', 'Pistachios & Silver Vark']
      },
      {
        name: 'Bedmi Puri with Aloo Sabzi',
        category: 'Vegetarian',
        description: 'Deep-fried crispy whole wheat puries stuffed with spiced urad dal paste, served with tangy, spicy potato gravy cooked in mustard oil without onions.',
        keyIngredients: ['Whole Wheat Flour', 'Coarse Urad Dal', 'Fennel & Fenugreek', 'Potatoes & Amchur', 'Mustard Oil']
      },
      {
        name: 'Mathura Peda & Agra Petha',
        category: 'Dessert',
        description: 'Caramelized brown khoya milk sweets from holy Mathura, and translucent candied ash gourd cubes flavored with saffron and rose water from Agra (GI Tagged).',
        keyIngredients: ['Ash Gourd (White Pumpkin)', 'Sugar Syrup', 'Kewra Essence', 'Khoya / Mawa', 'Cardamom'],
        giTag: true
      },
      {
        name: 'Chaat (Tamatar Chaat & Basket Chaat)',
        category: 'Street Food',
        description: 'Varanasi\'s hot clay bowl spicy tomato chaat with crispy savory sev, or Lucknow\'s crunchy potato basket loaded with spiced chickpeas, yogurt, sweet tamarind, and spicy mint chutneys.',
        keyIngredients: ['Tomatoes & Boiled Potatoes', 'Sugar Syrup & Hing', 'Crispy Sev', 'Sweet Tamarind Chutney', 'Chaat Masala']
      }
    ],
    festivals: [
      {
        name: 'Dev Deepawali (Varanasi)',
        timing: 'Kartik Purnima (15 days after Diwali, Nov)',
        significance: 'Celebrates the victory of Lord Shiva over demon Tripurasura, when gods descend to earth to bathe in the Ganga.',
        keyRitual: 'Lighting over 1 million earthen clay diyas along all 84 riverfront ghats, accompanied by Vedic laser shows and monumental Maha Aarti.',
        highlight: 'Illuminated crescent riverfront glowing like a galaxy of golden stars.'
      },
      {
        name: 'Kumbh Mela & Maha Kumbh (Prayagraj)',
        timing: 'Every 12 Years (Maha Kumbh) at Triveni Sangam',
        significance: 'The world\'s largest human gathering, celebrating drops of Amrit (immortality nectar) fallen at the sacred confluence of Ganga, Yamuna, and Saraswati.',
        keyRitual: 'Holy Shahi Snan (royal dips) led by ancient Akharas of Naga Sadhus at Brahma Muhurta.',
        highlight: 'Over 100 million pilgrims singing bhajans in vast tented cities along the riverbanks.'
      },
      {
        name: 'Lathmar Holi (Barsana & Nandgaon)',
        timing: 'Phalguna (March, 4-5 days before Holi)',
        significance: 'Re-enacts Lord Krishna teasing Radha in Barsana.',
        keyRitual: 'Women of Barsana playfully strike men from Nandgaon with wooden lathis (sticks), while men protect themselves with leather shields amidst clouds of organic gulal.',
        highlight: 'Singing ancient Braj Bhasha Holi songs and drinking refreshing Thandai.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Banarasi Silk Brocade Sarees (GI, woven with gold and silver zari in intricate floral jall motifs)', 'Chikan Hand Embroidery of Lucknow (GI, delicate white shadow work on muslin/georgette)', 'Zardozi Embroidery (GI, metallic gold thread embroidery)', 'Bhadohi Hand-Knotted Carpets (GI)'],
      handicrafts: ['Moradabad Brassware (The Brass City)', 'Khurja Pottery (GI, glazed ceramics)', 'Firozabad Glass Bangles & Chandeliers', 'Saharanpur Wood Carvings (GI)', 'Kannauj Natural Attar (Perfume Capital of India, GI)'],
      traditionalMenAttire: 'Lucknowi Chikankari Kurta with Churidar, Nehru Jacket or Sherwani, and embroidered velvet Jutti.',
      traditionalWomenAttire: 'Grand Banarasi Silk Saree or Chikankari Salwar Suit draped with fine Dupatta and delicate gold jewelry.',
      giTaggedCrafts: ['Banaras Brocades and Sarees', 'Lucknow Chikan Craft', 'Kannauj Perfume', 'Khurja Pottery', 'Varanasi Wooden Lacquerware & Toys']
    },
    historyTimeline: [
      {
        era: '1500 - 500 BC',
        title: 'Vedic Civilization & Epic Epics',
        description: 'Setting for the Ramayana (Ayodhya) and Mahabharata (Hastinapur & Mathura) along the fertile Indo-Gangetic plains.'
      },
      {
        era: '6th Century BC',
        title: 'First Sermon of Gautama Buddha at Sarnath',
        description: 'Lord Buddha delivered his first sermon (Dhammacakkappavattana Sutta) at the Deer Park in Sarnath, Varanasi.'
      },
      {
        era: '16th - 18th Century',
        title: 'Mughal Capital & Awadh Nawabs',
        description: 'Agra became the imperial Mughal seat constructing the Taj Mahal, while Lucknow flourished as the cultural capital of music and culinary arts.'
      },
      {
        era: '1857 AD',
        title: 'First War of Indian Independence',
        description: 'Heroic uprisings across Meerut, Jhansi (Rani Lakshmibai), Kanpur (Nana Saheb), and Lucknow (Begum Hazrat Mahal).'
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
    tagline: 'One State, Many Worlds: Hampi Ruins, Mysore Palace & Yakshagana',
    overview: 'Karnataka blends the golden ruins of the Vijayanagara Empire at Hampi, the grand Indo-Saracenic Mysore Palace, lush Western Ghats coffee plantations in Coorg, classical Carnatic roots, and dynamic modern technology.',
    officialLanguage: 'Kannada',
    spokenLanguages: ['Kannada', 'Tulu', 'Kodava', 'Konkani', 'English'],
    stateAnimal: 'Asian Elephant',
    stateBird: 'Indian Roller',
    funFact: 'Hampi was the second largest city in the medieval world (after Beijing) in 1500 AD during the height of the Vijayanagara Empire.',
    monuments: [
      {
        name: 'Group of Monuments at Hampi',
        type: 'Vijayanagara Empire Ruins & Stone Chariot',
        century: '14th - 16th Century AD',
        location: 'Hampi, Vijayanagara',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1600100397608-f010e4299955?auto=format&fit=crop&w=800&q=80',
        description: 'Vittala Temple with its iconic monolithic Stone Chariot and musical pillars carved out of granite.',
        coordinates: [15.3350, 76.4600]
      },
      {
        name: 'Mysore Palace (Amba Vilas)',
        type: 'Indo-Saracenic Royal Palace',
        century: '1912 AD',
        location: 'Mysuru',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
        description: 'Illuminated by nearly 100,000 light bulbs during Dussehra, seat of the Wadiyar Dynasty.',
        coordinates: [12.3051, 76.6551]
      },
      {
        name: 'Gol Gumbaz',
        type: 'Deccan Sultanate Mausoleum',
        century: '1656 AD',
        location: 'Vijayapura (Bijapur)',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'Possesses one of the largest unsupported domes in the world and an acoustic Whispering Gallery where a whisper echoes 11 times.',
        coordinates: [16.8306, 75.7360]
      }
    ],
    artAndDance: [
      {
        name: 'Yakshagana',
        type: 'Theatre',
        origin: 'Coastal Karnataka (Udupi & Mangaluru)',
        description: 'All-night traditional folk theatre combining dramatic dance, dialogue, high-pitched singing, and towering ornate headgear.',
        costumeHighlight: 'Vibrant crown headgear (Mundasu/Kirita), face paint with red/white pigments, and flared colorful dhotis.',
        instruments: ['Chande drum', 'Maddale drum', 'Taala cymbals']
      },
      {
        name: 'Dollu Kunitha',
        type: 'Dance',
        origin: 'Kuruba Gowda community',
        description: 'High-energy drum dance dedicated to Lord Beereshwara where acrobatic dancers beat large decorated drums tied to their chests in rapid synchronization.',
        instruments: ['Dollu drum', 'Tala']
      }
    ],
    cuisines: [
      {
        name: 'Bisi Bele Bath & Mysore Masala Dosa',
        category: 'Vegetarian',
        description: 'A spicy, tangy one-pot meal of rice, lentils, tamarind, vegetables, and homemade aromatic masala roasted in pure ghee, alongside crisp red-chili garlic smeared fermented dosas.',
        keyIngredients: ['Rice', 'Toor Dal', 'Kapok Buds (Marati Moggu)', 'Fresh Coconut', 'Ghee & Tamarind']
      },
      {
        name: 'Mysore Pak',
        category: 'Dessert',
        description: 'Royal melt-in-mouth confection invented in the kitchens of Mysore Palace made from gram flour, copious amounts of desi ghee, and sugar syrup.',
        keyIngredients: ['Besan (Chickpea Flour)', 'Desi Ghee', 'Sugar Syrup', 'Cardamom'],
        giTag: true
      },
      {
        name: 'Mangalorean Ghee Roast & Neer Dosa',
        category: 'Non-Vegetarian',
        description: 'Fiery red Kundapur spice paste roasted in pure ghee with paneer or chicken, served with gossamer-thin, soft lacy rice pancakes.',
        keyIngredients: ['Byadagi Chillies', 'Pure Desi Ghee', 'Curry Leaves', 'Soaked Rice Batter', 'Fennel & Peppercorns']
      }
    ],
    festivals: [
      {
        name: 'Mysuru Dasara (Nada Habba)',
        timing: 'Ashwin (September/October, 10 Days)',
        significance: 'Celebrates Goddess Chamundeshwari slaying the demon Mahishasura.',
        keyRitual: 'Jumboo Savari: 750 kg golden howdah idol carried by a decorated royal elephant through Mysore streets.',
        highlight: 'Illumination of Mysore Palace with 100,000 glowing golden bulbs.'
      },
      {
        name: 'Kambala (Buffalo Water Race)',
        timing: 'November to March (Coastal Districts)',
        significance: 'Traditional annual buffalo race held in muddy paddy fields dedicated to Lord Kadri Manjunatha for rich harvest.',
        keyRitual: 'Farmers sprint alongside a pair of roaring water buffaloes across flooded slush tracks.',
        highlight: 'Electrifying speed and spectator chants in coastal villages.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Mysore Silk Sarees (GI, woven with 100% pure silk and 0.65% pure gold zari)', 'Ilkal Sarees (GI, with red Topi Teni pallu)', 'Khadi of Garag'],
      handicrafts: ['Channapatna Wooden Toys (GI, safe natural lacquered wooden toys of the Toy Town)', 'Mysore Rosewood Inlay (GI)', 'Bidriware (Silver inlay on blackened zinc alloy, GI)', 'Sandalwood Carvings'],
      traditionalMenAttire: 'Panche (Dhoti), Angavastra and Mysore Peta (traditional royal turban with gold lace border).',
      traditionalWomenAttire: 'Mysore Silk or Ilkal Saree with traditional Kasuti geometric embroidery.',
      giTaggedCrafts: ['Mysore Silk', 'Channapatna Toys and Dolls', 'Bidriware', 'Mysore Sandalwood Oil', 'Coorg Orange & Coffee']
    },
    historyTimeline: [
      {
        era: '3rd Century BC - 10th Century AD',
        title: 'Kadambas, Chalukyas & Rashtrakutas',
        description: 'Golden architectural epoch of Badami cave temples, Aihole cradle of Indian temple architecture, and Pattadakal.'
      },
      {
        era: '1336 - 1646 AD',
        title: 'Vijayanagara Empire',
        description: 'Founded by Harihara and Bukka, reaching supreme glory under Emperor Sri Krishnadevaraya.'
      },
      {
        era: '1399 - 1950 AD',
        title: 'Kingdom of Mysore & Wadiyar Dynasty',
        description: 'Patrons of classical Carnatic music, Sanskrit literature, and modern industrialization.'
      }
    ]
  },
  {
    id: 'odisha',
    name: 'Odisha',
    capital: 'Bhubaneswar',
    region: 'East',
    coordinates: [20.9517, 85.0985],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Soul of India: Sun Temple Konark, Jagannath Puri & Odissi Dance',
    overview: 'Odisha is celebrated for its Kalinga architectural marvels including the colossal chariot of the Konark Sun Temple, the Jagannath Rath Yatra in Puri, sculptured Odissi classical dance, Pattachitra scroll art, and pristine coastal ecosystems.',
    officialLanguage: 'Odia',
    spokenLanguages: ['Odia', 'Hindi', 'Santali', 'English'],
    stateAnimal: 'Sambar Deer',
    stateBird: 'Indian Roller',
    funFact: 'The Konark Sun Temple was designed as a 24-wheeled colossal stone chariot of the Sun God, where each wheel functions as an accurate solar sundial down to the exact minute.',
    monuments: [
      {
        name: 'Konark Sun Temple (Black Pagoda)',
        type: 'Kalinga Stone Chariot Temple',
        century: '1250 AD (13th Century)',
        location: 'Konark, Puri',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        description: 'Built by King Narasimhadeva I, featuring 24 carved stone wheels pulled by 7 galloping horses symbolizing days of the week.',
        coordinates: [19.8876, 86.0945]
      },
      {
        name: 'Jagannath Temple Puri',
        type: 'Sacred Kalinga Temple Complex',
        century: '1161 AD (12th Century)',
        location: 'Puri Beach Coast',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'One of the Char Dham pilgrimage sites, home to Lord Jagannath, Balabhadra, and Subhadra with wooden idols carved from neem trees.',
        coordinates: [19.8049, 85.8179]
      },
      {
        name: 'Lingaraj Temple',
        type: 'Deula Kalinga Architecture',
        century: '11th Century AD',
        location: 'Old Town, Bhubaneswar',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80',
        description: 'Towering 180-ft sandstone temple honoring Harihara (syncretic form of Vishnu and Shiva) surrounded by 108 subsidiary shrines.',
        coordinates: [20.2382, 85.8338]
      }
    ],
    artAndDance: [
      {
        name: 'Odissi Classical Dance',
        type: 'Dance',
        origin: 'Ancient Temples (Maharis and Gotipuas)',
        description: 'One of the oldest surviving classical dances in India, celebrated for its Tribhangi (three-bend posture), sculpturesque lyrical movements, and silver filigree ornaments.',
        costumeHighlight: 'Sambalpuri silk saree with pleated front apron, silver waist belt (Kardhani), and white floral crown (Tahiya).',
        instruments: ['Mardala drum', 'Bansuri (flute)', 'Manjira', 'Violin', 'Harmonium']
      },
      {
        name: 'Pattachitra Scroll Painting',
        type: 'Theatre',
        origin: 'Raghurajpur Heritage Village',
        description: 'UNESCO recognised traditional cloth-based scroll painting using 100% natural mineral and vegetable pigments depicting Krishna Leela and Jagannath narratives.',
        instruments: ['Gini cymbals']
      }
    ],
    cuisines: [
      {
        name: 'Odisha Rasagola & Chhena Poda',
        category: 'Dessert',
        description: 'The world\'s first baked cheese dessert: caramelized fresh cottage cheese (Chhena) mixed with cardamom and sugar, slow-baked wrapped in sal leaves until crust turns golden brown.',
        keyIngredients: ['Fresh Cow Chhena (Cottage Cheese)', 'Semolina (Suji)', 'Sugar', 'Cardamom', 'Sal Leaves'],
        giTag: true
      },
      {
        name: 'Dalma with Kanika',
        category: 'Vegetarian',
        description: 'Wholesome temple stew of split toor dal cooked with raw papaya, pumpkin, raw bananas, and brinjal, tempered with roasted cumin-dry chili powder (Bhaja Masala) and ghee.',
        keyIngredients: ['Toor Dal', 'Pumpkin & Raw Papaya', 'Panch Phoron', 'Bhaja Masala', 'Ghee']
      },
      {
        name: 'Chingudi Malai & Pakhala Bhata',
        category: 'Non-Vegetarian',
        description: 'Tiger prawns simmered in creamy coconut milk and mustard gravy, or fermented cooked rice soaked in water (Pakhala) served with fried fish, badi chura, and roasted green chillies.',
        keyIngredients: ['Tiger Prawns / Fresh Rice', 'Fresh Coconut Milk', 'Mustard Paste', 'Badi Chura', 'Lemon & Mint']
      }
    ],
    festivals: [
      {
        name: 'Rath Yatra of Puri (Chariot Festival)',
        timing: 'Ashadha Shukla Dwitiya (June/July, 9 Days)',
        significance: 'Lord Jagannath, Balabhadra, and Subhadra ride three colossal decorated wooden chariots (Nandighosha, Taladhwaja, Darpadalana) to Gundicha Temple.',
        keyRitual: 'Chhera Pahanra: The Gajapati King sweeps the chariot platforms with a gold-handled broom in a humble display of equality before God.',
        highlight: 'Over 1.5 million pilgrims pulling massive ropes of the sacred chariots together.'
      },
      {
        name: 'Konark Dance Festival',
        timing: 'December 1st - 5th (Open Air Konark Temple)',
        significance: 'Celebration of Indian classical dance disciplines set against the illuminated backdrop of the Sun Temple.',
        keyRitual: 'World-renowned dancers perform Odissi, Bharatanatyam, Kathak, and Kuchipudi under moonlight.',
        highlight: 'International Sand Art Festival on Chandrabhaga beach alongside the dance arena.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Sambalpuri Ikat Silk & Cotton Sarees (GI, intricate tie-dye Bandhakala technique)', 'Kotpad Handloom Fabric (GI, natural madder root vegetable dye)', 'Bomkai Silk Saree', 'Berhampuri Patta'],
      handicrafts: ['Tarakasi (Cuttack Silver Filigree, GI, gossamer-fine silver wire art)', 'Pattachitra of Raghurajpur', 'Pipili Applique Artwork (GI, colorful canopies for Rath Yatra)', 'Stone and Brass Dhokra Crafts'],
      traditionalMenAttire: 'Dhoti with Sambalpuri Ikat Kurta and Uttariya scarf.',
      traditionalWomenAttire: 'Sambalpuri Silk Saree with traditional temple border and silver filigree jewelry (Tarakasi).',
      giTaggedCrafts: ['Odisha Rasagola', 'Kotpad Handloom Fabrics', 'Sambalpuri Bandha Saree', 'Pipili Applique Work', 'Cuttack Tarakasi Silver Filigree']
    },
    historyTimeline: [
      {
        era: '261 BC',
        title: 'Kalinga War & Ashoka’s Transformation',
        description: 'The monumental battle along the Daya River that transformed Emperor Ashoka from a conqueror (Chandashoka) to a champion of peace and Buddhism (Dharmashoka).'
      },
      {
        era: '1st Century BC',
        title: 'Emperor Kharavela & Chedi Dynasty',
        description: 'Inscribed the historic rock-cut Hathigumpha inscription at Udayagiri Caves, expanding Kalinga maritime supremacy.'
      },
      {
        era: '11th - 13th Century',
        title: 'Eastern Ganga Dynasty & Temple Building',
        description: 'Constructed Jagannath Temple at Puri and the Sun Temple at Konark.'
      }
    ]
  },
  {
    id: 'assam',
    name: 'Assam',
    capital: 'Dispur',
    region: 'North-East',
    coordinates: [26.2006, 92.9376],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1590740608753-f7a35cbdfaa3?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Gateway to the North-East: Brahmaputra, Kaziranga Rhinos & Bihu Dance',
    overview: 'Assam is blessed by the mighty Brahmaputra river, emerald tea estates yielding rich malty Assam tea, the one-horned Indian rhinoceros of Kaziranga, gleaming golden Muga silk, and rhythmic Bihu celebrations.',
    officialLanguage: 'Assamese',
    spokenLanguages: ['Assamese', 'Bodo', 'Bengali', 'Mising', 'English'],
    stateAnimal: 'One-horned Rhinoceros (Kaziranga)',
    stateBird: 'White-winged Wood Duck (Deo Hah)',
    funFact: 'Assam\'s golden Muga Silk is found nowhere else in the world; its shimmering natural gold luster actually increases in brilliance with every single wash.',
    monuments: [
      {
        name: 'Kamakhya Temple',
        type: 'Ancient Tantric Shakti Peetha',
        century: '8th - 17th Century AD (Rebuilt 1565)',
        location: 'Nilachal Hill, Guwahati',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1590740608753-f7a35cbdfaa3?auto=format&fit=crop&w=800&q=80',
        description: 'One of the oldest Shakti Peethas honoring Goddess Kamakhya, featuring a beehive-shaped Shikhara and natural spring sanctum.',
        coordinates: [26.1663, 91.7054]
      },
      {
        name: 'Rang Ghar',
        type: 'Royal Amphitheatre of Ahom Kingdom',
        century: '1744 AD (18th Century)',
        location: 'Sivasagar',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'Two-storied royal sports pavilion shaped like an inverted Ahom royal longboat, where kings watched bullfights and Bihu dances.',
        coordinates: [26.9647, 94.6247]
      },
      {
        name: 'Majuli Island Satras',
        type: 'River Island Vaishnavite Monasteries',
        century: '15th - 16th Century (Founded by Srimanta Sankardev)',
        location: 'Majuli (Brahmaputra River)',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
        description: 'World\'s largest inhabited river island and center of Neo-Vaishnavite culture, famous for mask making and Sattriya dance.',
        coordinates: [26.9535, 94.2185]
      }
    ],
    artAndDance: [
      {
        name: 'Bihu Dance',
        type: 'Dance',
        origin: 'Agrarian Spring Festival (Rongali Bihu)',
        description: 'Lively, joyful folk dance of youth characterized by rapid hand movements, rhythmic hip swaying, and smiling vitality welcoming the spring monsoon.',
        costumeHighlight: 'Muga Silk Mekhela Sador with red floral motifs, Kopou Phool (orchid) in hair braids, and red Alta dye on palms.',
        instruments: ['Dhol drum', 'Pepa (buffalo horn pipe)', 'Gogona (bamboo reed jaw harp)', 'Toka (bamboo clapper)']
      },
      {
        name: 'Sattriya Classical Dance',
        type: 'Dance',
        origin: 'Vaishnavite Satras (Srimanta Sankardev)',
        description: 'Recognized as one of the 8 classical Indian dances, rooted in devotional Bhaona monastery plays honoring Lord Krishna.',
        instruments: ['Khol (terracotta drum)', 'Tala (bronze cymbals)', 'Flute']
      }
    ],
    cuisines: [
      {
        name: 'Khaar & Masor Tenga',
        category: 'Non-Vegetarian',
        description: 'Traditional opening course made by filtering raw water through sun-dried banana peel ash (Khaar), followed by refreshing sour fish broth (Masor Tenga) flavored with elephant apple (Ou Tenga) or tomatoes.',
        keyIngredients: ['Rohu Fish', 'Khaar (Alkaline Banana Extract)', 'Ou Tenga (Elephant Apple)', 'Mustard Oil', 'Fenugreek & Green Chillies']
      },
      {
        name: 'Pitha (Til Pitha & Ghila Pitha)',
        category: 'Dessert',
        description: 'Delicate cylindrical rice cakes made from sticky Bora Saul rice flour, rolled and stuffed with roasted black sesame seeds and molten jaggery.',
        keyIngredients: ['Bora Saul (Sticky Rice Flour)', 'Black Sesame Seeds', 'Liquid Jaggery (Gur)', 'Grated Coconut']
      },
      {
        name: 'Assam Orthodox & CTC Black Tea',
        category: 'Beverage',
        description: 'World-famous full-bodied, brisk, and malty golden tippy tea harvested from lush tea bushes in the Brahmaputra valley.',
        keyIngredients: ['Assam Camellia Sinensis var. Assamica Leaves', 'Fresh Milk', 'Cardamom/Ginger (Optional)'],
        giTag: true
      }
    ],
    festivals: [
      {
        name: 'Rongali Bihu (Bohag Bihu)',
        timing: 'Mid-April (7 Days, Assamese New Year)',
        significance: 'The greatest festival of Assam, celebrating the arrival of spring and sowing season.',
        keyRitual: 'Goru Bihu (washing and worshiping cows), gifting handwoven Gamosas to elders as a mark of reverence, and community Bihu dances.',
        highlight: 'Husori troupes visiting every household singing blessing songs.'
      },
      {
        name: 'Ambubachi Mela (Kamakhya)',
        timing: 'June (Ashaad, Monsoon)',
        significance: 'Celebrates the annual menstruation course of Mother Earth and Goddess Kamakhya.',
        keyRitual: 'Temple doors remain closed for 3 days; on the 4th day, millions of Sadhus and devotees receive the sacred Rakta Vastra cloth.',
        highlight: 'Enormous confluence of Baul singers, Tantric mystics, and sadhus.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Muga Golden Silk (GI, exclusive to Assam)', 'Eri Peace Silk (Non-violent silk, GI)', 'Pat Mulberry Silk', 'Assamese Gamosa (GI, white cotton towel with red embroidered borders)'],
      handicrafts: ['Assamese Japi (Conical woven bamboo and Tokou palm leaf hat with red felt motifs)', 'Majuli Bamboo & Mud Masks', 'Sarthebari Bell Metal Utensils (GI)', 'Cane and Bamboo Furnishings'],
      traditionalMenAttire: 'Dhoti, Kurta and Gamosa draped gracefully around the neck.',
      traditionalWomenAttire: 'Mekhela Sador (Two-piece garment draped gracefully, woven from pure golden Muga or Pat silk) with traditional Jonbiri and Gamkharu gold jewelry.',
      giTaggedCrafts: ['Muga Silk of Assam', 'Assam Orthodox Tea', 'Assamese Gamosa', 'Sarthebari Bell Metal Craft', 'Boka Saul (Mud Rice)']
    },
    historyTimeline: [
      {
        era: '4th - 12th Century AD',
        title: 'Kamapura Kingdom & Varman Dynasty',
        description: 'King Bhaskaravarman hosted Chinese pilgrim Xuanzang (Hiuen Tsang) in Guwahati.'
      },
      {
        era: '1228 - 1826 AD',
        title: 'Ahom Kingdom (600 Years Unbroken Rule)',
        description: 'King Chaolung Sukaphaa established the Ahom dynasty; General Lachit Borphukan defeated the Mughal army at the Battle of Saraighat in 1671.'
      },
      {
        era: '1826 AD',
        title: 'Treaty of Yandabo',
        description: 'Transition of Assam into British administration following the First Anglo-Burmese War.'
      }
    ]
  }
];

