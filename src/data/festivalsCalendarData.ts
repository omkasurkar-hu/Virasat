import { DetailedFestival } from '../types';

export const FESTIVALS_CALENDAR_DATA: DetailedFestival[] = [
  // January
  {
    id: 'makar-sankranti-pongal',
    name: 'Makar Sankranti / Pongal / Lohri / Magh Bihu',
    monthIndex: 0,
    monthName: 'January',
    lunarOrGregorianDate: 'January 14–15 (Solar Transition into Capricorn)',
    primaryStates: ['Tamil Nadu', 'Punjab', 'Assam', 'Gujarat', 'Maharashtra', 'Karnataka', 'Andhra Pradesh'],
    tagline: 'Pan-Indian Solar Harvest Celebration of Light, Abundance & Gratitude',
    historyAndOrigin: 'Ancient Vedic harvest festival celebrating the Sun god (Surya) entering the northern hemisphere (Uttarayana). Known as Pongal in Tamil Nadu, Lohri in Punjab, Magh Bihu in Assam, and Uttarayan in Gujarat.',
    culturalSignificance: 'Marks the end of winter, the ripening of winter crops (sugarcane, sesame, paddy), and community thanksgiving to nature, cattle, and farm workers.',
    traditionalFood: [
      { name: 'Ven Pongal & Sakkarai Pongal', description: 'Freshly harvested rice boiled with milk, jaggery, cashews, and ghee in earthen pots overflowing to symbolize prosperity.' },
      { name: 'Til-Gud Laddoos & Revdi', description: 'Roasted sesame seeds mixed with melted jaggery ("Til-gud ghya, god god bola" — eat sweet sesame, speak sweet words).' },
      { name: 'Sarson da Saag & Makki di Roti', description: 'Fresh winter mustard greens tempered with garlic and served with cornmeal flatbreads and fresh white butter.' }
    ],
    traditionalClothing: 'Vibrant yellow and saffron silks, Kasavu gold-bordered mundus in the south, Phulkari dupattas and Kurta-pajamas in Punjab.',
    musicAndPrayers: 'Bhangra dhol rhythms around the Lohri bonfire, Bihu folk singing and Pepa buffalo horn playing in Assam, and Vedic Surya mantras.',
    decorationsAndArt: 'Kolam and Rangoli patterns drawn with rice flour at doorsteps; giant sky-filling colorful kites in Gujarat; Meji straw towers in Assam.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
    category: 'Harvest'
  },
  // February
  {
    id: 'maha-shivratri',
    name: 'Maha Shivratri & Vasant Panchami',
    monthIndex: 1,
    monthName: 'February',
    lunarOrGregorianDate: 'Phalguna Krishna Chaturdashi / Magha Shukla Panchami',
    primaryStates: ['Uttar Pradesh', 'Madhya Pradesh', 'Uttarakhand', 'Jammu & Kashmir', 'West Bengal', 'Odisha'],
    tagline: 'The Great Night of Shiva, Cosmic Stillness & the Advent of Spring',
    historyAndOrigin: 'Maha Shivratri commemorates the celestial wedding of Lord Shiva and Goddess Parvati and the night Shiva performed the cosmic Tandava dance. Vasant Panchami honors Goddess Saraswati as nature blooms.',
    culturalSignificance: 'A night of deep introspective meditation, fasting, and wakefulness overcoming darkness and ignorance; welcoming spring and wisdom.',
    traditionalFood: [
      { name: 'Thandai & Bhaang Peda', description: 'Spiced chilled almond and poppy seed milk flavored with green cardamom, saffron, and rose petals.' },
      { name: 'Kuttu & Sabudana Khichdi', description: 'Fasting delicacies prepared with buckwheat flour, sago pearls, peanuts, and rock salt (Sendha Namak).' },
      { name: 'Meethe Chawal (Kesar Rice)', description: 'Aromatic basmati rice cooked with saffron strands, sugar, dry fruits, and cloves to welcome spring.' }
    ],
    traditionalClothing: 'Bright canary yellow sarees and kurtas (symbolizing mustard blossoms of spring), ascetic white and rudraksha beads.',
    musicAndPrayers: 'Shiva Tandava Stotram, Rudram chanting, midnight classical dhrupad concerts, and veena recitals dedicated to Saraswati.',
    decorationsAndArt: 'Bel leaf (Bilva Patra) offerings, thousands of oil lamps illuminating ghats and Shivalingas, floral alpana art with marigolds.',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
    category: 'Spiritual / Devotional'
  },
  // March
  {
    id: 'holi',
    name: 'Holi — The Festival of Colors & Spring Renewal',
    monthIndex: 2,
    monthName: 'March',
    lunarOrGregorianDate: 'Phalguna Purnima (Full Moon of March)',
    primaryStates: ['Uttar Pradesh (Braj)', 'Rajasthan', 'Madhya Pradesh', 'Bihar', 'Delhi', 'Maharashtra'],
    tagline: 'Triumph of Goodness, Joyous Color Splashes & Breaking Social Barriers',
    historyAndOrigin: 'Celebrates the victory of devotee Prahlada over the demoness Holika (Holika Dahan bonfire) and the divine romance of Radha and Krishna in the Braj region (Mathura, Vrindavan, Barsana).',
    culturalSignificance: 'Dissolves all social divides of caste, age, and class as everyone embraces in clouds of colored herbal gulal; welcomes the spring harvest.',
    traditionalFood: [
      { name: 'Mawa Gujiya', description: 'Crisp deep-fried pastry dumplings stuffed with sweetened condensed milk solids (khoya), crushed pistachios, and saffron.' },
      { name: 'Dahi Bhalla / Dahi Vada', description: 'Lentil fritters soaked in spiced creamy yogurt topped with roasted cumin, rock salt, and sweet-sour tamarind chutney.' },
      { name: 'Puran Poli & Malpua', description: 'Sweet lentil-stuffed griddled flatbreads in Maharashtra and syrup-soaked spiced pancakes in Rajasthan.' }
    ],
    traditionalClothing: 'Crisp white cotton kurtas and chikan sarees that become vibrant canvases of splashed herbal pink, turquoise, and saffron powders.',
    musicAndPrayers: 'Daph and dholak folk beats, Braj Dhamar songs, Rasiya folk poetry, and lively Bollywood Holi anthems.',
    decorationsAndArt: 'Heaps of aromatic organic herbal Gulal (made from tesu/palash flowers and turmeric), evening Holika community bonfires.',
    image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80',
    category: 'Seasonal'
  },
  // April
  {
    id: 'ugadi-gudi-padwa-baisakhi',
    name: 'Ugadi / Gudi Padwa / Baisakhi / Bohag Bihu / Vishu',
    monthIndex: 3,
    monthName: 'April',
    lunarOrGregorianDate: 'Chaitra Shukla Pratipada / Mesha Sankranti (Mid-April)',
    primaryStates: ['Maharashtra', 'Karnataka', 'Andhra Pradesh', 'Punjab', 'Kerala', 'Assam', 'West Bengal'],
    tagline: 'Traditional New Year Celebrations & Bumper Golden Wheat Harvests',
    historyAndOrigin: 'Marks the creation of the cosmos according to Brahma Purana and the start of the Hindu Luni-Solar calendar (Chaitra Navratri). In Punjab, Baisakhi marks the founding of the Khalsa Panth by Guru Gobind Singh in 1699.',
    culturalSignificance: 'Embracing the bittersweet nature of life (Ugadi Pachadi); hoisting the victory flag (Gudi) for prosperity; energetic Baisakhi fairs and golden wheat reaping.',
    traditionalFood: [
      { name: 'Ugadi Pachadi (Six Tastes of Life)', description: 'Sacred chutney blending sweet (jaggery), sour (tamarind), bitter (neem flowers), salty (salt), spicy (chilli), and tangy (raw mango) symbolizing that life holds all emotions.' },
      { name: 'Shrikhand & Puri', description: 'Velvety hung curd dessert whipped with sugar, saffron, and cardamom served with piping hot puffed puris.' },
      { name: 'Vishu Kani Sadhya', description: 'Elaborate plantain-leaf feast with Avial, Thoran, Payasam, and viewing the golden auspicious arrangement (Vishu Kani).' }
    ],
    traditionalClothing: 'Paithani silk sarees and Gandhi topis in Maharashtra; Kasavu gold dhotis in Kerala; bright Patiala suits in Punjab.',
    musicAndPrayers: 'Panchanga Sravanam (astrological yearly reading), energetic Bhangra/Giddha routines, and Bihu dance with Pepa horns.',
    decorationsAndArt: 'Gudi flagposts hoisted with bright silk cloth, neem leaves, and an upturned silver/copper pot; intricate mango leaf torans.',
    image: 'https://images.unsplash.com/photo-1600100397608-f010e4299955?auto=format&fit=crop&w=800&q=80',
    category: 'Harvest'
  },
  // May
  {
    id: 'buddha-purnima-eid',
    name: 'Buddha Purnima & Thrissur Pooram',
    monthIndex: 4,
    monthName: 'May',
    lunarOrGregorianDate: 'Vaisakha Purnima / Medam Pooram',
    primaryStates: ['Bihar (Bodh Gaya)', 'Kerala (Thrissur)', 'Sikkim', 'Uttar Pradesh', 'Ladakh'],
    tagline: 'Enlightenment of the Buddha & The Festival of Festivals in Kerala',
    historyAndOrigin: 'Buddha Purnima commemorates the birth, supreme enlightenment under the Bodhi Tree, and Mahaparinirvana of Gautama Buddha. Thrissur Pooram was founded by Raja Rama Varma (Sakthan Thampuran) in the late 18th century.',
    culturalSignificance: 'Universal peace, mindfulness, compassion for all sentient life, and magnificent temple percussion spectacles with Ilanjithara Melam.',
    traditionalFood: [
      { name: 'Kheer / Payasam', description: 'Sweet milk rice pudding recalling Sujata’s offering of kheer to the Buddha before enlightenment.' },
      { name: 'Sikkimese Steamed Momos & Thukpa', description: 'Delicate vegetable momos and herb-infused noodle broth served at monastic community feasts.' }
    ],
    traditionalClothing: 'Immaculate white attire symbolizing purity and peace, monastic saffron robes, and traditional Kerala Settu Mundu.',
    musicAndPrayers: 'Dhammacakkappavattana Sutta chanting, Tibetan monastic long horns (Dungchen), and Kerala’s 250-musician Panchavadyam orchestra.',
    decorationsAndArt: 'Kudamattom (rapid display of colorful embroidered silk parasols), illumination of Bodhi temple stupas with butter lamps.',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    category: 'Spiritual / Devotional'
  },
  // June
  {
    id: 'rath-yatra-puri',
    name: 'Puri Rath Yatra & Ambubachi Mela',
    monthIndex: 5,
    monthName: 'June',
    lunarOrGregorianDate: 'Ashadha Shukla Dwitiya (June–July)',
    primaryStates: ['Odisha (Puri)', 'Assam (Kamakhya, Guwahati)', 'Gujarat (Ahmedabad)', 'West Bengal'],
    tagline: 'The Grand Chariot Procession of Lord Jagannath & Sacred Earth Fertility',
    historyAndOrigin: 'The world-famous chariot festival where Lord Jagannath, Balabhadra, and Subhadra emerge from the 12th-century Puri temple to journey 3 km to the Gundicha temple on colossal hand-carved wooden chariots.',
    culturalSignificance: 'The only festival where deities leave the sanctum to meet all devotees regardless of background; Ambubachi honors mother earth’s reproductive vitality.',
    traditionalFood: [
      { name: 'Khaja & Chhena Poda', description: 'Flaky layered caramelized sweet Khaja and wood-fired baked caramelized cheese cake from Odisha.' },
      { name: 'Mahaprasad (Chappan Bhog)', description: '56 sacred earthen pot cooked dishes prepared in the world’s largest temple kitchen using wood fires.' }
    ],
    traditionalClothing: 'Odisha Sambalpuri Ikat and Khandua silk drapes woven with Gita Govinda verses; saffron pilgrim robes.',
    musicAndPrayers: 'Ecstatic sankirtan with Ghanta (brass gongs), Mardala drums, conch shells, and Jai Jagannath chants resounding from 1 million pilgrims.',
    decorationsAndArt: 'Nandighosa, Taladhwaja, and Darpadalana chariots draped in 1,000+ meters of red, yellow, and green handloom fabrics; Appliqué craft of Pipili.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    category: 'Spiritual / Devotional'
  },
  // July
  {
    id: 'guru-purnima-teej',
    name: 'Guru Purnima & Haryali Teej',
    monthIndex: 6,
    monthName: 'July',
    lunarOrGregorianDate: 'Ashadha Purnima / Shravana Shukla Tritiya',
    primaryStates: ['Rajasthan', 'Haryana', 'Uttar Pradesh', 'Bihar', 'Madhya Pradesh'],
    tagline: 'Revering Mentors and Spiritual Masters & Green Monsoon Celebrations',
    historyAndOrigin: 'Dedicated to Maharshi Veda Vyasa who compiled the Vedas and composed the Mahabharata. Haryali Teej celebrates Goddess Parvati’s penance and reunion with Lord Shiva amidst green monsoon rains.',
    culturalSignificance: 'Deep gratitude to teachers, mentors, and parents who impart knowledge; celebration of marital love, rain showers, and swings hanging from banyan trees.',
    traditionalFood: [
      { name: 'Ghevar (Honeycomb Sweet)', description: 'Disc-shaped Rajasthani dessert made from flour, soaked in sugar syrup, and topped with rich rabri and slivered almonds.' },
      { name: 'Kheer Puri & Malpua', description: 'Monsoon delicacies fried in pure ghee and served with fragrant cardamom milk.' }
    ],
    traditionalClothing: 'Leheriya tie-dye sarees in emerald green and rainbow stripes, intricate Mehendi henna patterns on hands and feet.',
    musicAndPrayers: 'Guru Vandana chants ("Gurur Brahma Gurur Vishnu"), monsoon Teej folk songs sung on village swings.',
    decorationsAndArt: 'Floral rope swings decorated with marigolds on banyan and mango branches; green bangles and altar decorations.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80',
    category: 'Seasonal'
  },
  // August
  {
    id: 'raksha-bandhan-onam-janmashtami',
    name: 'Raksha Bandhan, Krishna Janmashtami & Onam',
    monthIndex: 7,
    monthName: 'August',
    lunarOrGregorianDate: 'Shravana Purnima / Bhadrapada Ashtami / Chingam Month',
    primaryStates: ['Kerala', 'Uttar Pradesh (Mathura)', 'Maharashtra', 'Gujarat', 'All Across India'],
    tagline: 'Bonds of Sibling Love, Birth of Krishna & King Mahabali’s Homecoming',
    historyAndOrigin: 'Raksha Bandhan celebrates sacred sibling protection. Janmashtami marks Krishna’s midnight birth. Onam celebrates the golden egalitarian reign of mythical King Mahabali in Kerala.',
    culturalSignificance: 'Reaffirming family protective bonds, human equality and abundance during Onam, and joyful Dahi Handi human pyramids.',
    traditionalFood: [
      { name: 'Onam Grand Sadhya (26+ Dishes)', description: 'Served on a banana leaf: Avial, Olan, Thoran, Kalan, Erissery, Sambar, Rasam, Banana Chips, and Ada Pradhaman Payasam.' },
      { name: 'Makhan Mishri & Panjiri', description: 'Freshly churned white butter mixed with rock sugar, and coriander-wheat herbal prasad for baby Krishna.' }
    ],
    traditionalClothing: 'Kasavu ivory-gold Kerala saris and dhotis; colorful traditional lehenga-cholis; silk rakhis adorned with zari threads.',
    musicAndPrayers: 'Vallam Kali boat race Vanchipattu songs, Sopana Sangeetham at Guruvayur, and midnight Krishna aartis.',
    decorationsAndArt: 'Pookkalam (intricate multi-ring floral carpets laid out for 10 days of Onam); butter pots suspended high for Dahi Handi.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    category: 'Harvest'
  },
  // September
  {
    id: 'ganesh-chaturthi',
    name: 'Ganesh Chaturthi — The Grand Elephant God Festival',
    monthIndex: 8,
    monthName: 'September',
    lunarOrGregorianDate: 'Bhadrapada Shukla Chaturthi (10 Days)',
    primaryStates: ['Maharashtra (Mumbai, Pune)', 'Goa', 'Karnataka', 'Telangana (Hyderabad)', 'Tamil Nadu'],
    tagline: 'Lord of Wisdom, Remover of Obstacles & Vibrant Community Dhol Tasha',
    historyAndOrigin: 'Celebrates the arrival of Lord Ganesha to Earth with his mother Parvati. Transformative national awakening led by Lokmanya Bal Gangadhar Tilak in 1893 who turned it into a grand public festival for unity.',
    culturalSignificance: 'Welcoming wisdom, intellect, new beginnings, and environmental consciousness through eco-friendly clay (Shadu mati) idols.',
    traditionalFood: [
      { name: 'Ukadiche Modak (Steamed Rice Dumplings)', description: 'Fragrant steamed rice flour dumplings filled with grated fresh coconut, organic jaggery, cardamom, and nutmeg, served hot with melted ghee.' },
      { name: 'Puran Poli & Poha Laddoos', description: 'Golden lentil flatbreads and flattened rice sweets offered during daily morning and evening aartis.' }
    ],
    traditionalClothing: 'Traditional 9-yard Nauvari sarees with Brahmi/Peshwai drape, orange Paithani turbans (Phetas), and dhoti-kurtas.',
    musicAndPrayers: 'Thunderous Dhol Tasha drum troupes (100+ percussionists synchronizing beats), "Sukh Karta Dukh Harta" aartis, and Ganpati Bappa Morya chants.',
    decorationsAndArt: 'Elaborate theme-based community pandals recreating historical forts and temples; eco-friendly clay idol immersions (Visarjan).',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    category: 'Spiritual / Devotional'
  },
  // October
  {
    id: 'durga-puja-navratri-dussehra',
    name: 'Durga Puja, Navratri & Dussehra (Vijayadashami)',
    monthIndex: 9,
    monthName: 'October',
    lunarOrGregorianDate: 'Ashwin Shukla Pratipada to Dashami (UNESCO Cultural Heritage)',
    primaryStates: ['West Bengal (Kolkata)', 'Gujarat', 'Karnataka (Mysuru)', 'Delhi', 'Assam', 'Odisha'],
    tagline: 'UNESCO-Inscribed Mother Goddess Celebration, Garba Nights & Victory of Light',
    historyAndOrigin: 'Celebrates Goddess Durga vanquishing the buffalo demon Mahishasura, symbolizing the triumph of divine feminine energy (Shakti) over tyranny. In Gujarat, 9 nights of ecstatic Garba dance; in Mysuru, 400-year-old royal Dasara.',
    culturalSignificance: 'Kolkata transforms into the world’s largest open-air art gallery with thousands of artistic pandals; Dussehra marks Lord Rama’s victory over Ravana.',
    traditionalFood: [
      { name: 'Bhoger Khichuri & Labra', description: 'Gobindobhog rice and roasted moong dal khichuri served with a medley of spiced autumn vegetables, tomato chutney, and payesh.' },
      { name: 'Kolkata Kathi Rolls & Sandesh', description: 'Street food delicacies and delicate Nolen Gur date-palm jaggery sweets.' },
      { name: 'Navratri Falahari Thali', description: 'Sabudana vadas, singhare ke aate ki puri, and aloo jeera prepared for fasting nights.' }
    ],
    traditionalClothing: 'Lal-Paad white sarees with red borders and Dhunuchi dance attires in Bengal; mirror-work Chaniya Cholis and Kediyu in Gujarat.',
    musicAndPrayers: 'Rhythmic Dhak drum rhythms with brass Dhunuchi fire censers, 9-beat Garba claps, and Chandipath Vedic recitations.',
    decorationsAndArt: 'Stunning architectural pandal art, life-sized clay Durga idols with 10 arms, and Mysore Palace illuminated by 100,000 golden bulbs.',
    image: 'https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?auto=format&fit=crop&w=800&q=80',
    category: 'Spiritual / Devotional'
  },
  // November
  {
    id: 'diwali-deepavali-chhath',
    name: 'Diwali (Deepavali), Chhath Puja & Dev Deepawali',
    monthIndex: 10,
    monthName: 'November',
    lunarOrGregorianDate: 'Kartik Amavasya to Kartik Purnima',
    primaryStates: ['All Across India', 'Bihar & Jharkhand (Chhath)', 'Uttar Pradesh (Varanasi)', 'Rajasthan'],
    tagline: 'The Ultimate Festival of Lights, Prosperity & Gratitude to the Sun',
    historyAndOrigin: 'Commemorates Lord Rama’s victorious return to Ayodhya after 14 years of exile, and Goddess Lakshmi’s blessings of wealth. Chhath Puja is an ancient Vedic solar ritual honoring the Sun (Surya) and Chhathi Maiya.',
    culturalSignificance: 'Lighting millions of earthen clay lamps (Diyas) to banish darkness and ignorance; house cleaning; sharing sweets with neighbors and family.',
    traditionalFood: [
      { name: 'Kaju Katli, Besan Laddoos & Chakli', description: 'Diamond silver-leaf cashew fudge, melt-in-mouth chickpea flour sweets, and crunchy spiral savory snacks.' },
      { name: 'Thekua (Chhath Prasad)', description: 'Crisp, aromatic deep-fried wheat cookies made with jaggery, ghee, fennel seeds, and grated dry coconut.' },
      { name: 'Anarsa & Chiroti', description: 'Traditional rice flour pastries dusted with poppy seeds and powdered cardamom sugar.' }
    ],
    traditionalClothing: 'Rich Banarasi brocade sarees, Kanjeevaram silks, embroidered Bandhgala suits, and sparkling festive kurtas.',
    musicAndPrayers: 'Lakshmi-Ganesha Puja aartis, serene Chhath folk hymns sung at river ghats during sunrise and sunset, and evening Ganga Aarti.',
    decorationsAndArt: 'Illuminated earthen clay Diyas at every doorway; colorful powder and flower Rangolis; paper sky lanterns (Kandils).',
    image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=800&q=80',
    category: 'Spiritual / Devotional'
  },
  // December
  {
    id: 'hornbill-christmas-rann-utsav',
    name: 'Hornbill Festival, Christmas & Rann Utsav',
    monthIndex: 11,
    monthName: 'December',
    lunarOrGregorianDate: 'December 1–10 (Hornbill) / December 25 (Christmas)',
    primaryStates: ['Nagaland (Kisama Village)', 'Goa', 'Meghalaya', 'Kerala', 'Gujarat (Kutch)'],
    tagline: 'The Festival of Festivals in Nagaland, White Desert Nights & Coastal Christmas',
    historyAndOrigin: 'Hornbill Festival unites all 17 indigenous tribes of Nagaland to showcase ancestral warrior traditions, folk songs, and crafts named after the revered Great Indian Hornbill. Christmas in Goa blends Portuguese baroque traditions with Indian coastal hospitality.',
    culturalSignificance: 'Preserving northeastern indigenous tribal unity, celebrating winter solstice, and moonlit glamping on the white salt marshes of Kutch.',
    traditionalFood: [
      { name: 'Naga Smoked Pork with Bamboo Shoot & Raja Mircha', description: 'Tender wood-smoked meat cooked with fermented bamboo shoots and world-famous fiery ghost peppers.' },
      { name: 'Goan Bebinca & Roast Feasts', description: 'Seven-layered traditional coconut milk and egg yolk pudding baked with nutmeg and ghee.' },
      { name: 'Kutchi Bajra Rotla with Ringan Bharta', description: 'Hand-patted pearl millet flatbreads with wood-roasted spiced eggplant and fresh white butter.' }
    ],
    traditionalClothing: 'Ceremonial Naga woven shawls, warrior feather headdresses with hornbill quills, and festive red velvet Christmas attires.',
    musicAndPrayers: 'Log drum tribal resonance, Naga choral harmonies, rock music concerts at Kisama, and midnight Latin-Konkani carols in Goa.',
    decorationsAndArt: 'Handcrafted Morung tribal village huts, giant illuminated bamboo Christmas stars hanging over Goan porches, and glowing white desert tent cities.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    category: 'National / Cultural'
  }
];
