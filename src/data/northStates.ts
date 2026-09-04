import { StateHeritage } from '../types';

export const NORTH_STATES: StateHeritage[] = [
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    capital: 'Jaipur',
    region: 'North',
    coordinates: [26.9124, 75.7873],
    zoomLevel: 7,
    bannerImage: 'https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-city-1-hero?qlt=82&ts=1742200253577',
    tagline: 'The Land of Kings, Desert Forts & Royal Splendor',
    overview: 'Rajasthan is globally renowned for its invincible hill forts, vibrant desert culture, Thar sand dunes, opulent Rajput palaces, intricate Haveli frescoes, and colorful celebrations of royalty.',
    officialLanguage: 'Hindi',
    spokenLanguages: ['Marwari', 'Mewari', 'Dhundhari', 'Harauti', 'Hindi'],
    stateAnimal: 'Camel & Chinkara (Indian Gazelle)',
    stateBird: 'Great Indian Bustard (Godawan)',
    funFact: 'Jaipur, the Pink City, was painted pink in 1876 to welcome Queen Victoria\'s son, Albert Edward, Prince of Wales.',
    monuments: [
      {
        name: 'Hawa Mahal (Palace of Winds)',
        type: 'Rajput Architecture Palace',
        century: '1799 AD (18th Century)',
        location: 'Jaipur',
        isUnesco: true,
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Hawa_Mahal_Palace_%28Palace_of_Winds%29%2C_famous_landmark_of_Jaipur.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
        description: 'Five-story red and pink sandstone honeycomb façade with 953 jharokhas (small casements) engineered for royal ladies to view street festivals.',
        coordinates: [26.9239, 75.8267]
      },
      {
        name: 'Mehrangarh Fort',
        type: 'Hill Fort Fortress',
        century: '1459 AD (15th Century)',
        location: 'Jodhpur',
        isUnesco: true,
        image: 'https://media1.thrillophilia.com/filestore/33kyjezwxbqo5jlvp5eolr115cry_Mehrangarh-fortress-Jodhpur-Rajasthan-India.png',
        description: 'Perched 410 feet above the Blue City of Jodhpur, enclosed by formidable thick walls preserving burnished cannonballs and ornate Rajput royal palanquins.',
        coordinates: [26.2978, 73.0185]
      },
      {
        name: 'Amber (Amer) Fort',
        type: 'Rajput-Mughal Hill Citadel',
        century: '1592 AD (16th Century)',
        location: 'Amer, Jaipur',
        isUnesco: true,
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/d3/a8/57/images-30-largejpg.jpg?w=700&h=400&s=1',
        description: 'Overlooking Maota Lake, famous for its Sheesh Mahal (Mirror Palace) where a single candle flame illuminates the entire chamber through convex glass mirrors.',
        coordinates: [26.9855, 75.8513]
      },
      {
        name: 'City Palace Udaipur',
        type: 'Lake Palace Complex',
        century: '1559 AD (16th Century)',
        location: 'Udaipur',
        isUnesco: false,
        image: 'https://udaipurtourism.co.in/images/v2/places-to-visit/city-palace-udaipur-tourism-header.jpg',
        description: 'Towering marble and granite monumental palace complex perched on the banks of Lake Pichola, showcasing Mewar dynasty royal artifacts.',
        coordinates: [24.5764, 73.6835]
      }
    ],
    artAndDance: [
      {
        name: 'Ghoomar',
        image:'https://upload.wikimedia.org/wikipedia/commons/d/dc/Ghoomar_dancers_%28Rajasthan%2C_India%2C_2023%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
        type: 'Dance',
        origin: 'Bhil Tribe & Rajput Royalty',
        description: 'Traditional folk dance where women in colorful swirling Ghaghras twirl gracefully to rhythmic clapping and songs.',
        instruments: ['Dholak', 'Nagada', 'Shehnai', 'Sarangi'],
        costumeHighlight: 'Swirling flared Ghaghra-Choli with glittering Gotta-Patti work.'
      },
      {
        name: 'Kalbelia',
        image:'https://www.swantour.com/blogs/wp-content/uploads/2019/02/Kalbelia-Dance-Festival-Rajasthan.jpg',
        type: 'Dance',
        origin: 'Kalbelia Snake Charmer Community',
        description: 'Sensuous, agile UNESCO-inscribed folk dance mimicking serpent movements with rhythmic black embroidered skirts.',
        instruments: ['Pungi (Been)', 'Dafli', 'Khanjari', 'Morchang'],
        costumeHighlight: 'Black flared attire with silver mirrors, cowrie shells, and threadwork.'
      },
      {
        name: 'Kathputli Puppetry',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7D-9thLZcYslphQSkYnuUxtVHek8s1sanPd_Hkp1ZEQNDUaCn-7L8eo&s=10',
        type: 'Theatre',
        origin: 'Bhat Community',
        description: 'Centuries-old string marionette storytelling depicting legends of warrior heroes like Amar Singh Rathore.',
        instruments: ['Dholak', 'Whistle (Boli)']
      }
    ],
    cuisines: [
      {
        name: 'Dal Baati Churma',
        image:'https://www.secondrecipe.com/wp-content/uploads/2020/11/dal-bati-churma.jpg',
        category: 'Vegetarian',
        description: 'Hard wheat flour dough balls baked over charcoal, dipped in pure desi ghee, served with five-lentil Panchmel dal and sweet powdered jaggery Churma.',
        keyIngredients: ['Whole Wheat Flour', 'Ghee', 'Panchmel Dal (5 Lentils)', 'Jaggery/Sugar', 'Cardamom'],
        giTag: true
      },
      {
        name: 'Laal Maas',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CrhJV1v1mxhfhQWh_GcOOG6OrpDjcsmMhFvnJ--Kuo3QlAKD2McAB3tU&s=10',
        category: 'Non-Vegetarian',
        description: 'Fiery royal Rajasthani mutton curry simmered with Mathania red chilies, garlic, yogurt, and whole roasted spices.',
        keyIngredients: ['Mutton', 'Mathania Red Chilies', 'Mustard Oil', 'Garlic', 'Yogurt', 'Coriander']
      },
      {
        name: 'Ghevar',
        image:'https://www.cookwithmanali.com/wp-content/uploads/2016/08/Ghevar-Indian-Sweet-500x375.jpg',
        category: 'Dessert',
        description: 'Honeycomb-disc pastry soaked in saffron-cardamom sugar syrup, topped with thick reduced milk (rabri) and slivered almonds.',
        keyIngredients: ['Refined Flour', 'Ghee', 'Milk', 'Saffron', 'Pistachios'],
        giTag: true
      },
      {
        name: 'Pyaaz Kachori',
        image:'https://static.toiimg.com/thumb/59606392.cms?imgsize=319995&width=800&height=800',
        category: 'Street Food',
        description: 'Crisp, flaky deep-fried pastry stuffed with a spiced onion-fennel-gram flour mixture, served with sweet tamarind and mint chutneys.',
        keyIngredients: ['Flour', 'Onions', 'Fennel Seeds', 'Coriander Seeds', 'Asafoetida']
      }
    ],
    festivals: [
      {
        name: 'Pushkar Camel Fair',
        image:'https://visit-apac.com/wp-content/uploads/2024/11/PushkarCamelFair.jpg',
        timing: 'Kartik Purnima (October - November)',
        significance: 'World\'s largest traditional livestock and cultural fair set alongside the holy Pushkar Lake.',
        keyRitual: 'Holy dip in Pushkar Sarovar, camel beauty contests, and Rajasthani folk music competitions.',
        highlight: 'Thousands of colorfully decorated camels and turbans against golden dunes.'
      },
      {
        name: 'Desert Festival Jaisalmer',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwYYB0hx4BoucikL0zfvg7ubIUMCdz0haMk1xnia2hJovpF7b6rasQLd0&s=10',
        timing: 'February (Magh Shukla Trayodashi)',
        significance: 'Celebration of Thar desert traditions with camel races, turban tying, and Mr. Desert contests.',
        keyRitual: 'Folk performances at Sam Sand Dunes under the full moon.',
        highlight: 'Gair & Kalbelia dances with fire performances.'
      },
      {
        name: 'Teej Festival',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXu0eQOYEtPNfs-0MKWavZl5IyWW9gbg4_V81YTTR-M8CyIoS2gAGFms&s=10',
        timing: 'Shravana (July - August)',
        significance: 'Welcoming the monsoon and celebrating the sacred union of Goddess Parvati and Lord Shiva.',
        keyRitual: 'Women dress in green leheriya sarees, apply henna, and ride flower-decorated swings.',
        highlight: 'Royal Teej Mata procession through Jaipur\'s historic walled city.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Bandhani (Tie & Dye)', 'Bagru Block Printing', 'Sanganeri Print', 'Kota Doria Weaves', 'Leheriya Sarees'],
      textileImages: [
        'https://apkamart.com/cdn/shop/articles/Bandhni-tie-and-dye.jpg?v=1586947526&width=2048',
        'https://gaatha.org/wp-content/uploads/h3.jpg',
        'https://m.media-amazon.com/images/I/919FfsSFB3L._AC_UF1000,1000_QL80_.jpg',
        'https://images.squarespace-cdn.com/content/v1/5961c8ce3e00be4fb1decc32/1549791909754-V2ZHPMD0DEAIH55HTZ62/kota-doria-sari-weaving-in-kaithun-rajasthan-india+crop+7.jpg',
        'https://yuvti.co.in/cdn/shop/files/0H8A3721.jpg?v=1748523989'
      ],
      handicrafts: ['Jaipur Blue Pottery', 'Thewa Gold-on-Glass Jewelry', 'Meenakari Enamel Work', 'Molded Camel Leather Mojaris', 'Marble Inlay Sculptures'],
      handicraftImages: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrHU2fig_c1e5zcnjOAHtR4LMj78jf2RmYPKPU6yV-H1qs5w1wgs33sxA&s=10',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFwJxGmgXAqD6yilKwF5wCN3nNdIbZRiHSIrmUVBQJlDYDgXn3x892h1z&s=10',
        'https://www.archedu.org/blog/wp-content/uploads/2018/06/Florals-Peacock-Meenakari-1015x1024.jpg',
        'https://rajasthaneshop.com/wp-content/uploads/2025/05/Jaipuri-juti.webp',
        'https://theindiacrafthouse.com/cdn/shop/products/MarbleInlayRoundPlateCuriowithStand-AN07TB.jpg?v=1601572054'
      ],
      traditionalMenAttire: 'Angrakha or Kurta with Dhoti and vibrant 9-meter Safa / Pagri (Turban).',
      traditionalMenAttireImage: 'https://i.pinimg.com/originals/32/9e/94/329e941e2b73ae564cc10f832a933d68.jpg?nii=t',
      traditionalWomenAttire: 'Ghaghra (swirling pleated skirt), Choli (blouse), and Odhani (veil with Gotta-Patti work).',
      traditionalWomenAttireImage: 'https://images.meesho.com/images/products/868415789/vxvop_512.webp?width=512',
      giTaggedCrafts: ['Jaipur Blue Pottery', 'Kota Doria', 'Bagru Hand Block Printing', 'Sanganeri Block Printing', 'Kathputlis of Rajasthan']
    },
    historyTimeline: [
      {
        era: 'Ancient Era (c. 2500 BCE)',
        title: 'Indus Valley Civilisation at Kalibangan',
        image:'https://cdn.britannica.com/22/196822-050-0E40EBC2/Ruins-city-Harappa-Pakistan-Punjab.jpg',
        description: 'Excavations in northern Rajasthan revealed planned ploughed agricultural fields and fire altars from the Harappan age.'
      },
      {
        era: '6th - 12th Century AD',
        title: 'Rise of Gurjara-Pratihara & Rajput Clans',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Map_of_the_Gurjara-Pratiharas_%28circa_800-950_CE%29.png/330px-Map_of_the_Gurjara-Pratiharas_%28circa_800-950_CE%29.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
        description: 'Emergence of chivalric Rajput dynasties including the Chauhans, Rathores, Sisodias, and Kachwahas who built fortified hilltop citadels.'
      },
      {
        era: '1568 - 1576 AD',
        title: 'Mewar Resistance under Maharana Pratap',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGW6hlQwHSv0NlGBblxOhbTZ4jYEOVH_XO2VkMz5jD4A&s=10',
        description: 'Historic Battle of Haldighati where Maharana Pratap fought against the imperial Mughal army to safeguard Rajput independence.'
      },
      {
        era: '1949 AD',
        title: 'Integration into United State of Rajasthan',
        image:'https://rajras.in/wp-content/uploads/2025/07/image159-1024x937.png',
        description: '22 princely states and estates voluntarily unified under Sardar Vallabhbhai Patel to form modern Rajasthan with Jaipur as capital.'
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
    bannerImage: 'https://cdn.britannica.com/06/162706-050-E566DC89/Harmandir-Sahib-Teja-Singh-Samudri-Hall-Clock.jpg',
    tagline: 'Land of Five Rivers, Golden Sanctum, Bhangra & Big Hearts',
    overview: 'Punjab—named from Persian Panj (Five) and Aab (Water)—is the vibrant agrarian heartland of India. Famous for the serene Golden Temple, soul-stirring Gurbani hymns, energetic Bhangra and Giddha, colorful Phulkari embroidery, and lavish tandoori cuisine.',
    officialLanguage: 'Punjabi',
    spokenLanguages: ['Punjabi (Gurmukhi)', 'Hindi', 'English'],
    stateAnimal: 'Blackbuck',
    stateBird: 'Northern Goshawk (Baaz)',
    funFact: 'The Golden Temple in Amritsar serves free hot meals (Langar) to over 100,000 devotees and visitors every single day regardless of caste, faith, or background.',
    monuments: [
      {
        name: 'Sri Harmandir Sahib (Golden Temple)',
        type: 'Sikh Architecture Holy Shrine',
        century: '1589 AD (16th Century)',
        location: 'Amritsar',
        isUnesco: false,
        image: 'https://cdn.bega.com/cdn-cgi/image/w=600,h=900,fit=cover,gravity=0.66x0.54,f=auto/https://images.ctfassets.net/w2xcep4i3dcd/uJw9iRWCVxDGecgB1NFdg/39ccbf8cfaaad6399ed8170f982b13d6/Harmandir_Sahib-HERO.jpg',
        description: 'The holiest Gurdwara of Sikhism, plated with pure gold foil in 1830 by Maharaja Ranjit Singh, surrounded by the holy Amrit Sarovar lake.',
        coordinates: [31.6200, 74.8765]
      },
      {
        name: 'Jallianwala Bagh',
        type: 'Historic Memorial',
        century: '1919 AD (20th Century)',
        location: 'Amritsar',
        isUnesco: false,
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/jallianwala-bagh-amritsar-punjab-1-attr-hero?qlt=82&ts=1726662275638',
        description: 'National memorial honoring hundreds of innocent freedom fighters and citizens martyred on Baisakhi Day in 1919; bullet marks still preserved.',
        coordinates: [31.6208, 74.8801]
      },
      {
        name: 'Qila Mubarak Bathinda',
        type: 'Ancient Brick Fort',
        century: '6th Century AD (Rebuilt 11th Century)',
        location: 'Bathinda',
        isUnesco: false,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQip2T2gjmkjE-rPcDY4QXj3LfD4DOBwrGPWehkVfzqXXy08GK-HQSokgY&s=10',
        description: 'One of the oldest surviving forts in India where Razia Sultan, first female monarch of Delhi Sultanate, was imprisoned.',
        coordinates: [30.2110, 74.9455]
      }
    ],
    artAndDance: [
      {
        name: 'Bhangra',
        image:'https://asiasamachar.com/wp-content/uploads/2018/06/RedDot-Singapore-Bhangra-Dance-Competition-4a.jpg',
        type: 'Dance',
        origin: 'Majha & Malwa Regions',
        description: 'Energetic, acrobatic harvest dance performed with high-energy kicks, arm pumps, and shoulder rolls to the thumping beat of the Dhol.',
        instruments: ['Dhol', 'Chimta', 'Algoza', 'Tumbi', 'Bugchu'],
        costumeHighlight: 'Bright Kurta, Chadar (Lungi), embellished waistcoat (Wasket), and majestic Turla (stiff fanned Pagri).'
      },
      {
        name: 'Giddha',
        image:'https://cultureandheritage.org/wp-content/uploads/2021/05/11-12.jpg',
        type: 'Dance',
        origin: 'Punjab',
        description: 'Graceful, rhythmic clap-dance by women accompanied by humorous and emotional couplets called Boliyaan.',
        instruments: ['Dholki', 'Hand Claps'],
        costumeHighlight: 'Colorful Salwar Kameez, Paranda tassels in long braided hair, and golden Tikka.'
      },
      {
        name: 'Gatka',
        image:'https://akm-img-a-in.tosshub.com/aajtak/images/story/201503/punjabi_gatka_s_650_031015105918.jpg?size=948:533',
        type: 'Martial Art',
        origin: 'Sikh Martial Tradition',
        description: 'Sacred Sikh martial art of weapon-handling, agility, and spiritual defense associated with Guru Hargobind Ji.',
        instruments: ['Nagara', 'Dhol']
      }
    ],
    cuisines: [
      {
        name: 'Makki di Roti & Sarson da Saag',
        image:'https://www.secondrecipe.com/wp-content/uploads/2019/11/makke-ki-roti.jpg',
        category: 'Vegetarian',
        description: 'Slow-cooked spiced mustard greens and bathua simmered in earthen pots, served with yellow cornmeal flatbread, homemade white butter (Makhan), and jaggery.',
        keyIngredients: ['Mustard Leaves (Sarson)', 'Bathua', 'Cornmeal Flour (Makki)', 'Desi White Butter', 'Ginger-Garlic', 'Green Chilies']
      },
      {
        name: 'Amritsari Kulcha & Chole',
        image:'https://i.redd.it/5ea5tweohm851.jpg',
        category: 'Vegetarian',
        description: 'Crispy layered tandoor-baked flatbread stuffed with spiced potatoes and onions, served with tangy dark chickpea curry and onion-tamarind chutney.',
        keyIngredients: ['Flour', 'Potatoes', 'Chickpeas', 'Anardana (Pomegranate Seeds)', 'Ghee', 'Kasuri Methi']
      },
      {
        name: 'Butter Chicken & Tandoori Chicken',
        image:'https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken--600x600.jpg',
        category: 'Non-Vegetarian',
        description: 'Succulent yogurt-marinated chicken grilled in clay tandoor and simmered in a silky, sweet-spiced tomato, cashew, butter, and cream gravy.',
        keyIngredients: ['Chicken', 'Tomatoes', 'Butter', 'Fresh Cream', 'Cashew Paste', 'Kashmiri Chilies']
      },
      {
        name: 'Pinni',
        image:'https://www.cookwithmanali.com/wp-content/uploads/2023/01/Atta-Pinni.jpg',
        category: 'Dessert',
        description: 'Winter specialty roasted whole wheat and urad dal sweet loaded with desi ghee, dry fruits, gond (edible gum), and cardamom.',
        keyIngredients: ['Whole Wheat Flour', 'Desi Ghee', 'Gond', 'Almonds', 'Cashews', 'Jaggery']
      }
    ],
    festivals: [
      {
        name: 'Baisakhi',
        image:'https://www.thestatesman.com/wp-content/uploads/2023/04/5E1C6DA0-4687-4272-A912-6F5434D00AF3.jpeg',
        timing: 'April 13 or 14',
        significance: 'Spring harvest festival marking the founding of the Khalsa Panth by Guru Gobind Singh Ji in 1699.',
        keyRitual: 'Nagar Kirtan processions, early morning Ardas at Gurdwaras, and spirited Bhangra performances.',
        highlight: 'Community langar feeds millions across every village and town.'
      },
      {
        name: 'Lohri',
        image:'https://c.ndtvimg.com/2025-01/iojkrvu_lohri-celebrations_625x300_08_January_25.jpeg',
        timing: 'January 13',
        significance: 'Bonfire harvest festival celebrating the winter solstice and the agrarian abundance of sugarcane and mustard.',
        keyRitual: 'Circling community bonfires, offering rewri, peanuts, and popcorn to the fire, singing Dulha Bhatti folk songs.',
        highlight: 'Celebration of newly wedded couples and newborns.'
      },
      {
        name: 'Hola Mohalla',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09FDkOIBqOKp71bTnW0vza0qSJRgSI6tNIMszj665TmhfCDwy1_JMjjU&s=10',
        timing: 'March (Day after Holi)',
        significance: 'Grand three-day military martial festival instituted by Guru Gobind Singh Ji at Anandpur Sahib.',
        keyRitual: 'Displays of Gatka swordsmanship, tent-pegging, horse-riding, and devotional poetry.',
        highlight: 'Nihang warriors in majestic royal blue robes and towering dumallas.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Phulkari (Embroidered Silk on Khaddar)', 'Bagh Embroidery', 'Punjabi Durries', 'Gotta Patti Borders'],
      textileImages: [
        'https://masakalee.com/cdn/shop/files/handmade-designer-phulkari-dupatta-in-khaddar-cotton-2385227.jpg?v=1779433455',
        'https://imp-art.org/wp-content/uploads/1970/01/bagh.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrtqyxqeO8USfTPlrUYiuE4WXX9NujGNsA7vlQOnZsmh73_yfVuxizr-c&s=10',
        'https://i.etsystatic.com/42779058/r/il/75826a/6088662867/il_570xN.6088662867_l0ji.jpg'
      ],
      handicrafts: ['Hand-stitched Amritsari Tilla Juttis', 'Brass & Copper Utensils of Jandiala Guru (UNESCO Intangible Heritage)', 'Inlaid Wooden Furniture'],
      handicraftImages: [
        'https://sandoori.com/wp-content/uploads/2025/05/IMG_4812-scaled-e1748711272549.jpeg',
        'https://asiainch.org/wp-content/uploads/2014/07/IMG_20210831_195806-1024x695.jpg',
        'https://www.inlayworld.co/images/products/Furniture-Items/futniture-05.png'
      ],
      traditionalMenAttire: 'Kurta-Pyjama or Chadar with a royal Punjabi Pagri / Turban.',
      traditionalMenAttireImage: 'https://blog.indianweddingsaree.com/wp-content/uploads/2018/05/Eid-Special-Punjabi-Kurta-Pajama.jpg',
      traditionalWomenAttire: 'Punjabi Salwar Suit with bright Phulkari Dupatta and braided Paranda.',
      traditionalWomenAttireImage: 'https://i.pinimg.com/736x/0b/de/34/0bde34dd039d0e9f785c5fce9bb00068.jpg',
      giTaggedCrafts: ['Phulkari Embroidery', 'Handcrafted Metal Utensils of Jandiala Guru']
    },
    historyTimeline: [
      {
        era: 'c. 1500 BCE',
        title: 'Composition of the Rigveda in Saptasindhu',
        image:'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rigvedic_geography.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
        description: 'Vedic hymns were composed along the river valleys of ancient Punjab (the land of seven sacred rivers).'
      },
      {
        era: '1469 - 1708 AD',
        title: 'The Sikh Gurus & Foundation of Khalsa',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fVaxEyhXYP3QyIkvkq83p6buW3yNN_cxjH9dbsWVea5rSIVUIEpm3Kw&s=10',
        description: 'Guru Nanak Dev Ji founded Sikhism promoting equality, culminating in Guru Gobind Singh Ji creating the Khalsa brotherhood in 1699.'
      },
      {
        era: '1799 - 1839 AD',
        title: 'The Sikh Empire under Maharaja Ranjit Singh',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLuUS532IaIjLtAp0BkchMQ2pR0IHxbPFOlcqwCI5Xxg&s=10',
        description: 'Lion of Punjab united the misls into a sovereign, secular, and powerful empire extending from the Khyber Pass to Tibet.'
      },
      {
        era: '1966 AD',
        title: 'Modern Statehood & Green Revolution',
        image:'https://imgv2-2-f.scribdassets.com/img/document/51708614/original/1323532db9/1?v=1',
        description: 'Reorganized on linguistic lines, Punjab spearheaded India\'s Green Revolution, becoming the nation\'s primary breadbasket.'
      }
    ]
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    stateCode: 'UP',
    capital: 'Lucknow',
    region: 'North',
    coordinates: [26.8467, 80.9462],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Heartland of Indian Civilization, Ganga-Jamuni Tehzeeb & Timeless Epics',
    overview: 'Uttar Pradesh is the spiritual and cultural cradle of India, home to the sacred river Ganga, holy Varanasi ghats, the Taj Mahal, Ayodhya, Mathura, and the refined Awadhi court culture of Lucknow.',
    officialLanguage: 'Hindi',
    spokenLanguages: ['Hindi', 'Urdu', 'Bhojpuri', 'Awadhi', 'Braj Bhasha'],
    stateAnimal: 'Swamp Deer (Barasingha)',
    stateBird: 'Sarus Crane',
    funFact: 'Varanasi (Kashi) in Uttar Pradesh is widely regarded as one of the oldest continuously inhabited cities on Earth, with history spanning over 3,000 years.',
    monuments: [
      {
        id: 'taj_mahal',
        name: 'Taj Mahal',
        type: 'Mughal Marble Mausoleum',
        century: '1632 - 1653 AD (17th Century)',
        location: 'Agra',
        isUnesco: true,
        shortDesc: 'UNESCO World Heritage site and one of the Seven Wonders of the World.',
        detailedDescription: 'Built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. It stands as an epitome of ivory-white marble symmetry, calligraphy, and pietra dura gemstone inlays.',
        description: 'UNESCO World Heritage wonder of ivory-white marble commissioned by Mughal Emperor Shah Jahan for Mumtaz Mahal, renowned for symmetry and pietra dura inlay.',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
        imagePlaceholder: 'assets/images/up/monument_taj_mahal.jpg',
        coordinates: [27.1751, 78.0421],
        highlights: [
          'UNESCO World Heritage Site & 7 Wonder of the World',
          'Pietra Dura marble inlay gemstone craftsmanship',
          'Symmetrical Persian Charbagh garden setting'
        ]
      },
      {
        id: 'ram_mandir',
        name: 'Shri Ram Janmabhoomi Mandir',
        type: 'Nagara Style Sacred Temple',
        century: '2024 AD (21st Century)',
        location: 'Ayodhya',
        isUnesco: false,
        shortDesc: 'Grand Nagara-style Hindu temple in the holy city of Ayodhya.',
        detailedDescription: 'Located at the sacred birth site of Lord Rama in Ayodhya. Built in the classical Nagara architectural style with pink Bansi Paharpur sandstone from Rajasthan, featuring carved stone pillars, mandapas, and towering shikhara.',
        description: 'Grand Nagara-style Hindu temple in Ayodhya dedicated to Lord Rama, crafted with intricately carved pink Bansi Paharpur sandstone.',
        image: 'https://images.unsplash.com/photo-1705861145898-3860b240212f?auto=format&fit=crop&w=800&q=80',
        imagePlaceholder: 'assets/images/up/monument_ram_mandir.jpg',
        coordinates: [26.7922, 82.1998],
        highlights: [
          'Architecture: Classical Nagara temple style',
          'Material: Carved pink Bansi Paharpur stone',
          'Significance: Birthplace of Lord Rama on Sarayu river'
        ]
      },
      {
        id: 'kashi_vishwanath',
        name: 'Kashi Vishwanath & Dashashwamedh Ghat',
        type: 'Sacred Hindu Temple & Holy Riverfront',
        century: 'Ancient / Rebuilt 1780 AD by Ahilyabai Holkar',
        location: 'Varanasi',
        isUnesco: false,
        shortDesc: 'Spiritual epicenter of Shiva worship and holy Ganga ghats.',
        detailedDescription: 'One of the twelve sacred Jyotirlingas of Lord Shiva. Dashashwamedh Ghat hosts the nightly Maha Ganga Aarti with brass lamps and Vedic chants.',
        image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80',
        description: 'Spiritual epicenter of Shiva worship and the sacred Ganga Aarti where thousands gather nightly at illuminated stone ghats.',
        coordinates: [25.3109, 83.0107]
      },
      {
        id: 'fatehpur_sikri',
        name: 'Fatehpur Sikri',
        type: 'Red Sandstone Mughal Capital',
        century: '1571 AD (16th Century)',
        location: 'Agra District',
        isUnesco: true,
        shortDesc: 'Akbar\'s fortified royal capital with Buland Darwaza.',
        detailedDescription: 'Imperial city founded by Emperor Akbar featuring Buland Darwaza—the highest gateway in the world—and the white marble tomb of Salim Chishti.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'Imperial city founded by Emperor Akbar featuring Buland Darwaza—the highest gateway in the world—and the white marble tomb of Salim Chishti.',
        coordinates: [27.0945, 77.6679]
      },
      {
        id: 'bara_imambara',
        name: 'Bara Imambara & Rumi Darwaza',
        type: 'Awadhi Architectural Marvel',
        century: '1784 AD (18th Century)',
        location: 'Lucknow',
        isUnesco: false,
        shortDesc: 'Nawabi architectural complex with unsupported arched hall and maze.',
        detailedDescription: 'Built by Nawab Asaf-ud-Daula with an unsupported central arched hall and the intricate Bhulbhulaiya labyrinth.',
        image: 'https://images.unsplash.com/photo-1590740608753-f7a35cbdfaa3?auto=format&fit=crop&w=800&q=80',
        description: 'Built by Nawab Asaf-ud-Daula with an unsupported central arched hall and the intricate Bhulbhulaiya labyrinth.',
        coordinates: [26.8689, 80.9129]
      }
    ],
    artAndDance: [
      {
        id: 'kathak',
        name: 'Kathak (Classical Dance)',
        type: 'Dance',
        origin: 'Varanasi & Lucknow Gharanas',
        shortDesc: 'Classical dance form known for rapid spins and storytelling.',
        detailedDescription: 'Kathak is one of the eight major forms of Indian classical dance. Originating from ancient traveling bards (Kathakars), it evolved through Lucknow and Banaras Gharanas into a refined dance of intricate footwork (Tatkar), rapid spins (Chakkars), abhinaya mime, and expressiveness.',
        description: 'Major classical Indian dance form characterized by rapid footwork (Tatkar), pirouettes (Chakkars), and mime depicting Radha-Krishna romances and court poetry.',
        image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
        imagePlaceholder: 'assets/images/up/dance_kathak.jpg',
        instruments: ['Tabla', 'Pakhawaj', 'Sarangi', 'Ghungroos (Anklet Bells)'],
        costumeHighlight: 'Anarkali flared dress or Lehenga with 100+ chiming brass Ghungroos.',
        highlights: [
          'Form: Classical Indian Dance (8 Major Forms)',
          'Key Gharanas: Lucknow & Varanasi',
          'Technique: Rapid Chakkars (pirouettes) & complex Tatkar footwork'
        ]
      },
      {
        id: 'charkula',
        name: 'Charkula Dance',
        type: 'Dance',
        origin: 'Braj Region (Mathura & Vrindavan)',
        shortDesc: 'Spectacular folk dance balancing heavy multi-tiered oil lamps on the head.',
        detailedDescription: 'Charkula is a dramatic folk dance from the Braj region performed on the third day after Holi (believed to be Radha\'s birthday). Female dancers balance large circular multi-tiered wooden pyramids (Charkulas) carrying up to 108 lit oil lamps on their heads while dancing gracefully to Rasiya songs.',
        description: 'Spectacular folk dance from the Braj region where women balance a multi-tiered wooden pyramid with 108 lit oil lamps on their heads.',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
        imagePlaceholder: 'assets/images/up/dance_charkula.jpg',
        instruments: ['Nagada', 'Dholak', 'Manjira', 'Harmonium'],
        costumeHighlight: 'Traditional colorful Braj Ghagra-Choli with head veil securing the pyramid.',
        highlights: [
          'Origin: Braj region (Mathura, Vrindavan, Barsana)',
          'Prop: 108 illuminated oil lamps on a wooden pyramid',
          'Occasion: Celebrated on Dooj (3rd day after Holi)'
        ]
      },
      {
        id: 'kajri',
        name: 'Kajri',
        type: 'Music',
        origin: 'Eastern Uttar Pradesh (Mirzapur & Varanasi)',
        shortDesc: 'Melancholic monsoon folk song expressing longing and joy.',
        detailedDescription: 'Kajri is a popular folk music genre sung during the monsoon season (Shravan) in eastern UP, particularly Mirzapur and Varanasi. It evokes the fragrance of moist earth, dark rain clouds, the peacocks dancing, and the poignant longing (viraha) of a woman waiting for her beloved.',
        description: 'Monsoon folk song genre celebrating the onset of Shravan rains, swaying swings, and poetic themes of love and separation.',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
        imagePlaceholder: 'assets/images/up/music_kajri.jpg',
        instruments: ['Dholak', 'Harmonium', 'Manjira', 'Flute (Bansuri)'],
        audioTrackTitle: 'Barsan Laagi Badariya (Kajri)',
        audioMood: 'Monsoon Devotion & Classical Folk',
        highlights: [
          'Season: Monsoon (Shravana month)',
          'Origin: Mirzapur & Varanasi',
          'Mood: Romantic longing (Viraha) and joy of monsoon rains'
        ]
      },
      {
        id: 'raslila_ramlila',
        name: 'Raslila & Ramlila',
        type: 'Theatre',
        origin: 'Braj & Ayodhya',
        description: 'UNESCO-inscribed dramatic reenactments of the life of Lord Krishna and the epic Ramayana during Dussehra.',
        instruments: ['Harmonium', 'Manjira', 'Pakhawaj']
      },
      {
        id: 'nautanki',
        name: 'Nautanki',
        type: 'Theatre',
        origin: 'Hathras & Kanpur',
        description: 'Popular operatic folk theatre featuring vibrant musical dialogues, comedic interludes, and social satire.',
        instruments: ['Nagara', 'Dholak', 'Harmonium']
      }
    ],
    cuisines: [
      // Iconic Non-Vegetarian Dishes
      {
        id: 'tunday_kebab',
        name: 'Tunday Kebab',
        category: 'Non-Vegetarian',
        subcategory: 'Iconic Non-Vegetarian Dishes',
        shortDesc: 'Spiced, melt-in-your-mouth minced meat kebabs from Tunday Kababi in Lucknow.',
        detailedDescription: 'Originating from Lucknow, Tunday Kebabs are world-famous for their soft, melt-in-your-mouth texture. Marinated with over 100 aromatic spices, they are traditionally prepared using finely minced meat cooked to perfection on a flat griddle.',
        description: 'World-famous soft, melt-in-your-mouth minced meat kebabs marinated with over 100 aromatic spices.',
        keyIngredients: ['Minced Mutton/Buff', 'Raw Papaya Tenderizer', 'Potli Masala (100+ Spices)', 'Desi Ghee', 'Saffron', 'Rose Essence'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Tunday_Kebabs.jpg/250px-Tunday_Kebabs.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Tunday_Kebabs.jpg/250px-Tunday_Kebabs.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
        highlights: [
          'Origin: Lucknow',
          'Key Feature: Melt-in-your-mouth texture',
          'Best Paired With: Paratha or Roomali Roti'
        ],
        origin: 'Lucknow',
        flavorProfile: 'Mildly spiced, velvety texture',
        bestPairedWith: 'Paratha or Roomali Roti'
      },
      {
        id: 'galouti_kebab',
        name: 'Galouti Kebab',
        category: 'Non-Vegetarian',
        subcategory: 'Iconic Non-Vegetarian Dishes',
        shortDesc: 'Delicate, ultra-soft mutton kebabs made with a rich blend of spices.',
        detailedDescription: 'Crafted for the royal Nawabs of Awadh, Galouti Kebabs are delicate mutton patties infused with green papaya tenderizer and an exotic blend of spices. They offer an ultra-soft texture that literally dissolves on the tongue.',
        description: 'Delicate royal Awadhi mutton patties infused with raw papaya and exotic aromatic spices that dissolve on the tongue.',
        keyIngredients: ['Finely Minced Mutton', 'Green Papaya', 'Mughlai Spice Blend', 'Pure Ghee', 'Kewra Water'],
        image: 'https://i0.wp.com/savorytales.com/wp-content/uploads/2022/04/IMG_6354-scaled.jpg?fit=1920%2C2560&ssl=1',
        imageUrl: 'https://i0.wp.com/savorytales.com/wp-content/uploads/2022/04/IMG_6354-scaled.jpg?fit=1920%2C2560&ssl=1',
        highlights: [
          'Origin: Awadh / Lucknow',
          'Flavor Profile: Aromatic, rich, and mildly spiced',
          'Occasion: Royal Nawabi feasts'
        ],
        origin: 'Awadh / Lucknow',
        flavorProfile: 'Aromatic, rich, and mildly spiced',
        bestPairedWith: 'Ulte Tawe ka Paratha'
      },
      {
        id: 'awadhi_biryani',
        name: 'Awadhi Biryani',
        category: 'Non-Vegetarian',
        subcategory: 'Iconic Non-Vegetarian Dishes',
        shortDesc: 'Slow-cooked aromatic rice and meat dish prepared using the traditional dum method.',
        detailedDescription: "Awadhi Biryani is a classic regal dish cooked using the 'Dum' style of slow cooking. Layers of fragrant basmati rice and marinated meat are sealed in a handi (clay pot) with saffron, kewra, and subtle spices to lock in aroma and flavor.",
        description: 'Regal slow-cooked Dum Pukht rice dish with tender marinated meat, saffron, and subtle Awadhi aromatics.',
        keyIngredients: ['Aged Long-grain Basmati Rice', 'Mutton/Chicken', 'Kashmiri Saffron', 'Kewra Water', 'Green Cardamom', 'Desi Ghee'],
        image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/07/awadhi-chicken-biryani-.jpg',
        imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/07/awadhi-chicken-biryani-.jpg',
        highlights: [
          'Origin: Lucknow',
          'Cooking Technique: Dum Pukht (slow sealing)',
          'Aroma: Saffron, cardamom, and kewra water'
        ],
        origin: 'Lucknow',
        flavorProfile: 'Delicate, fragrant, and mildly spiced'
      },
      {
        id: 'nihari',
        name: 'Nihari',
        category: 'Non-Vegetarian',
        subcategory: 'Iconic Non-Vegetarian Dishes',
        shortDesc: 'A slow-cooked meat stew often eaten with soft kulcha bread for breakfast.',
        detailedDescription: 'Nihari is a rich, velvety slow-cooked stew made with tender shank meat, marrow, and whole spices. Traditionally simmered overnight in large cauldrons, it is popular as a hearty morning breakfast served alongside hot Kulchas.',
        description: 'Velvety slow-cooked shank meat stew simmered overnight in aromatic cauldrons, served for royal breakfasts.',
        keyIngredients: ['Mutton/Beef Shank', 'Bone Marrow', 'Nihari Masala', 'Ginger Juliennes', 'Wheat Flour Roux', 'Fresh Coriander'],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Nalli_Nihari_India.jpg/250px-Nalli_Nihari_India.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Nalli_Nihari_India.jpg/250px-Nalli_Nihari_India.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
        highlights: [
          'Meal Type: Royal Breakfast',
          'Best Paired With: Kulcha or Khamiri Roti',
          'Key Flavor: Deeply spiced broth with ginger & coriander garnishes'
        ],
        origin: 'Lucknow & Old Delhi',
        bestPairedWith: 'Kulcha or Khamiri Roti'
      },

      // Savory Snacks & Breads
      {
        id: 'chaat',
        name: 'Chaat',
        category: 'Street Food',
        subcategory: 'Savory Snacks & Breads',
        shortDesc: 'Spicy and tangy potato and crisp-fried dough snacks originating from the region.',
        detailedDescription: 'Uttar Pradesh is the heartland of Indian Chaat culture. Featuring fried potatoes (Aloo Tikki), crispy dough wafers (Papdi), tangy tamarind chutney, mint yogurt, pomegranate seeds, and spicy masala, it delivers an explosive mix of sweet, tangy, and spicy flavors.',
        description: 'Explosive sweet, tangy, and spicy street snack featuring crispy potato tikkis, spiced curd, and tamarind chutneys.',
        keyIngredients: ['Crispy Aloo Tikki', 'Papdi Wafers', 'Tamarind Saunth Chutney', 'Mint-Coriander Chutney', 'Sweet Curd', 'Sev & Pomegranate'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGGGVvJEyyIIUu6Qj-vYJgbiU2jDNpVHr60kOUWaYRZsdKoIALDxvt3jmH_fD7kDLbXPfBLVDTlCDH95ZhYmovNe6-jFtXqmUq_3ACmiEm&s=10',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGGGVvJEyyIIUu6Qj-vYJgbiU2jDNpVHr60kOUWaYRZsdKoIALDxvt3jmH_fD7kDLbXPfBLVDTlCDH95ZhYmovNe6-jFtXqmUq_3ACmiEm&s=10',
        highlights: [
          'Varieties: Aloo Tikki, Basket Chaat, Matar Chaat',
          'Flavor Profile: Tangy, sweet, spicy, and crunchy',
          'Culture: Street food benchmark of UP'
        ],
        origin: 'Varanasi, Lucknow & Kanpur'
      },
      {
        id: 'bedmi_poori',
        name: 'Bedmi Poori',
        category: 'Vegetarian',
        subcategory: 'Savory Snacks & Breads',
        shortDesc: 'Spiced lentil-stuffed fried bread paired with a tangy potato gravy, popular in Agra and Mathura.',
        detailedDescription: 'A beloved breakfast item in Agra, Mathura, and Varanasi. Bedmi Poori is made with coarse wheat flour mixed with spiced urad dal (black gram). Deep-fried crisp, it is served with a fiery, unmashed potato curry (Aloo Rasa).',
        description: 'Crisp deep-fried bread stuffed with spiced urad dal, paired with tangy Mathura-style potato gravy.',
        keyIngredients: ['Coarse Wheat Flour', 'Spiced Urad Dal paste', 'Boiled Potatoes', 'Fenugreek Seeds (Methi)', 'Fennel & Hing', 'Amchur (Dry Mango)'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7PtDUHluKjA4iw739pvXKDumANbd14CTbAJ3WAc90jBvKjUUPr_DT9eXkUTHTLJsX7O7595ZoRz22c985NKfae9ouab09xvM4UqY7frM&s=10',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7PtDUHluKjA4iw739pvXKDumANbd14CTbAJ3WAc90jBvKjUUPr_DT9eXkUTHTLJsX7O7595ZoRz22c985NKfae9ouab09xvM4UqY7frM&s=10',
        highlights: [
          'Origin: Agra & Mathura',
          'Type: Spiced fried bread',
          'Accompaniment: Tangy Mathura Aloo Sabzi'
        ],
        origin: 'Agra & Mathura',
        bestPairedWith: 'Tangy Mathura Aloo Sabzi & Methi Chutney'
      },
      {
        id: 'baati_chokha',
        name: 'Baati Chokha',
        category: 'Vegetarian',
        subcategory: 'Savory Snacks & Breads',
        shortDesc: 'A rustic dish of baked wheat dough balls served with a smoky roasted eggplant and tomato mash.',
        detailedDescription: 'A traditional, rustic dish originating from Eastern UP (Purvanchal). Baati consists of hard wheat balls stuffed with sattu (roasted gram flour) baked over wood fires, while Chokha is a flavorful mash made of fire-roasted brinjal, tomatoes, and potatoes seasoned with mustard oil.',
        description: 'Rustic wood-fire baked sattu-stuffed dough balls drenched in pure ghee, served with smoky fire-roasted eggplant chokha.',
        keyIngredients: ['Whole Wheat Dough', 'Spiced Sattu (Roasted Gram Flour)', 'Fire-roasted Eggplant (Baingan)', 'Tomatoes', 'Raw Mustard Oil', 'Garlic & Green Chilies'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibRH9gx9ufiizCz2h9LyDKhtp5thNPO7Zda9Px3zMdisz_iRDmfpAu8mrsNTry-D-VddACXX331VqP31Uz0AZ8dpclttRLbx6GcHJ86mLEw&s=10',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibRH9gx9ufiizCz2h9LyDKhtp5thNPO7Zda9Px3zMdisz_iRDmfpAu8mrsNTry-D-VddACXX331VqP31Uz0AZ8dpclttRLbx6GcHJ86mLEw&s=10',
        highlights: [
          'Region: Eastern UP / Purvanchal',
          'Preparation: Wood-fire baked',
          'Flavor Profile: Earthy, smoky, and garlic-infused'
        ],
        origin: 'Eastern UP (Purvanchal)',
        flavorProfile: 'Earthy, smoky, and garlic-infused'
      },

      // Traditional Sweets
      {
        id: 'agra_petha',
        name: 'Agra Petha',
        category: 'Dessert',
        subcategory: 'Traditional Sweets',
        shortDesc: 'Translucent, chewy candy made from white pumpkin.',
        detailedDescription: 'Agra Petha is a famous translucent sweet created by boiling ash gourd (white pumpkin) cubes in sweetened sugar syrup. Available in classic dry styles as well as flavored options like Kesar (Saffron), Angoori, and Paan Petha.',
        description: 'World-renowned translucent candy crafted from ash gourd steeped in flavored sugar syrup, carrying a GI tag.',
        keyIngredients: ['Ash Gourd (White Pumpkin)', 'Sugar Syrup', 'Cardamom', 'Kesar (Saffron)', 'Rose Water', 'Lime Water'],
        giTag: true,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsRgKRIO4TEbk-xcEzsVQd1pg98LMj7W4Rhk1s-yGurnV9TFMXPAuPAeC9ZiqZCyv2BUTMwW0o-PnGLStBN6qYRLv4eQTJVgO2HZPxUH1a&s=10',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsRgKRIO4TEbk-xcEzsVQd1pg98LMj7W4Rhk1s-yGurnV9TFMXPAuPAeC9ZiqZCyv2BUTMwW0o-PnGLStBN6qYRLv4eQTJVgO2HZPxUH1a&s=10',
        highlights: [
          'Origin: Agra',
          'Key Ingredient: Ash gourd & Sugar syrup',
          'GI Tag: Geographical Indication of Agra'
        ],
        origin: 'Agra'
      },
      {
        id: 'mathura_peda',
        name: 'Mathura Peda',
        category: 'Dessert',
        subcategory: 'Traditional Sweets',
        shortDesc: 'Dense, slow-roasted caramelized milk fudge.',
        detailedDescription: 'Synonymous with the holy city of Mathura, these pedas are made by slow-cooking khoya (thickened milk solids) with sugar and cardamom until caramelized into a rich brown hue, then garnished with pistachios or cardamom powder.',
        description: 'Slow-roasted caramelized milk fudge infused with cardamom and desi ghee, famous as sacred temple prasadam.',
        keyIngredients: ['Khoya / Mawa (Milk Solids)', 'Bura / Sugar', 'Green Cardamom Powder', 'Pure Desi Ghee', 'Pistachio slivers'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWK_Kcfh-XKa5ICZvxnkC5Bq-irZrIiU0rrhcjxTLjUY5D1MMm3uhbTFaY5c13SuBYiP902zGovWKRKXB8G_fRU1t98d01MAKFPUkZExXb&s=10',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWK_Kcfh-XKa5ICZvxnkC5Bq-irZrIiU0rrhcjxTLjUY5D1MMm3uhbTFaY5c13SuBYiP902zGovWKRKXB8G_fRU1t98d01MAKFPUkZExXb&s=10',
        highlights: [
          'Origin: Mathura',
          'Key Ingredient: Caramelized Khoya & Cardamom',
          'Cultural Link: Prasadam at Lord Krishna temples'
        ],
        origin: 'Mathura'
      },
      {
        id: 'imarti',
        name: 'Imarti',
        category: 'Dessert',
        subcategory: 'Traditional Sweets',
        shortDesc: 'Deep-fried, flower-shaped lentil batter soaked in saffron sugar syrup from Jaunpur.',
        detailedDescription: 'Imarti is a mesmerizing sweet made from urad dal (black gram) batter piped into geometric, flower-like loops, fried to golden crispness, and dipped in saffron-infused sugar syrup. Jaunpur in UP is famous for crafting some of the finest Imartis in India.',
        description: 'Crisp geometrical flower loops of piped urad dal batter fried in desi ghee and steeped in fragrant saffron sugar syrup.',
        keyIngredients: ['Urad Dal Batter', 'Saffron (Kesar)', 'Sugar Syrup', 'Cardamom', 'Pure Desi Ghee'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthEuDkrJdAzXEuFZdhoS-0oOGrhiytCGwk8vWjUdJFS3-8fQp8SpJjKk2YtDfFAr36RykhhigAEMeY-l0zbu2YR4P_Rv6USemj5NXhJY&s=10',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthEuDkrJdAzXEuFZdhoS-0oOGrhiytCGwk8vWjUdJFS3-8fQp8SpJjKk2YtDfFAr36RykhhigAEMeY-l0zbu2YR4P_Rv6USemj5NXhJY&s=10',
        highlights: [
          'Famous Hub: Jaunpur',
          'Batter Base: Urad Dal flour',
          'Appearance: Intricate flower geometrical loops soaked in saffron syrup'
        ],
        origin: 'Jaunpur'
      }
    ],
    festivals: [
      {
        name: 'Kumbh Mela',
        timing: 'Every 12 Years (Prayagraj)',
        significance: 'The world\'s largest peaceful gathering of humanity (UNESCO World Heritage) at the sacred Triveni Sangam.',
        keyRitual: 'Shahi Snan (Royal Holy Bath) by sadhus and millions of pilgrims in the Ganga-Yamuna-Saraswati confluence.',
        highlight: 'Sea of humanity, illuminated river camps, and spiritual discourses.'
      },
      {
        name: 'Lathmar Holi (Barsana & Nandgaon)',
        timing: 'Phalguna (February - March)',
        significance: 'Unique recreation of Lord Krishna teasing Radha, where women playfully beat men with sticks while men defend with shields.',
        keyRitual: 'Smearing herbal Gulal, traditional Braj folk songs, and Thandai celebrations.',
        highlight: 'Explosion of vibrant pink and golden colors across historic temple courtyards.'
      },
      {
        name: 'Dev Deepawali (Varanasi)',
        timing: 'Kartik Purnima (15 days after Diwali)',
        significance: 'Night of the Gods, when over a million earthen diyas illuminate all 84 ghats of Kashi.',
        keyRitual: 'Mega Maha Aarti on the ghats and floating clay lamps on the holy Ganga.',
        highlight: 'Golden reflections transforming the entire riverbank into a celestial galaxy.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Banarasi Brocade Silk Sarees', 'Lucknowi Chikankari Hand Embroidery', 'Zardozi Gold-thread Embroidery', 'Varanasi Zari Weaving'],
      handicrafts: ['Moradabad Brassware', 'Firozabad Glass Bangles & Chandeliers', 'Saharanpur Wood Carvings', 'Gorakhpur Terracotta', 'Kannauj Natural Attar (Perfume)'],
      traditionalMenAttire: 'Kurta-Churidar with Nehru jacket or embroidered Sherwani, topped with a topi or angavastram.',
      traditionalWomenAttire: 'Banarasi Silk Saree with heavy golden zari border or Chikankari embroidered Georgette/Kurta suit.',
      giTaggedCrafts: ['Banaras Brocades and Sarees', 'Lucknow Chikan Craft', 'Kannauj Perfume', 'Moradabad Metal Craft', 'Firozabad Glassware', 'Agra Petha'],
      attireItems: [
        {
          id: 'chikankari',
          name: 'Chikankari',
          shortDesc: 'Delicate and artful hand embroidery from Lucknow.',
          detailedDescription: 'Chikankari is a traditional embroidery style from Lucknow, India. Believed to have been introduced by Nur Jahan, the wife of Mughal Emperor Jahangir, it involves intricate handwork executed on light fabrics like muslin, silk, organza, and chiffon with over 36 distinct stitch styles such as Bakhiya, Phanda, and Tepchi.',
          highlights: [
            'Origin: Lucknow',
            'Technique: White-on-white hand embroidery',
            'Popular Items: Kurta, Sarees, Dupattas'
          ],
          origin: 'Lucknow',
          image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
          imagePlaceholder: 'assets/images/up/attire_chikankari.jpg'
        },
        {
          id: 'banarasi_silk',
          name: 'Banarasi Silk Saree',
          shortDesc: 'Luxurious silk sarees woven with gold and silver brocade.',
          detailedDescription: 'Banarasi silk sarees are among the finest sarees in India, originating from the holy city of Varanasi (Banaras). Known for their gold and silver brocade or zari, fine silk, and opulent embroidery featuring Persian-inspired floral motifs (Jhallar), Kalga, and Bel patterns.',
          highlights: [
            'Origin: Varanasi',
            'Feature: Real Zari gold/silver threadwork',
            'Occasion: Weddings & Royal Festivities'
          ],
          origin: 'Varanasi',
          image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
          imagePlaceholder: 'assets/images/up/attire_banarasi.jpg'
        }
      ]
    },
    historyTimeline: [
      {
        era: 'c. 1500 - 500 BCE',
        title: 'Vedic Civilization & Mahajanapadas',
        description: 'Flourishing of Kashi, Kosala, and Panchala kingdoms; birthland of epics Ramayana (Ayodhya) and Mahabharata (Hastinapur).'
      },
      {
        era: '528 BCE & 3rd Century BCE',
        title: 'Lord Buddha at Sarnath & Ashoka\'s Pillars',
        description: 'Gautama Buddha preached his first sermon at Sarnath (Dhammacakkappavattana Sutta); Emperor Ashoka erected the Lion Capital (India\'s national emblem).'
      },
      {
        era: '16th - 18th Century AD',
        title: 'Mughal & Awadhi Splendor',
        description: 'Agra served as imperial capital producing the Taj Mahal, while the Nawabs of Awadh established Lucknow as the cultural capital of poetry, dance, and gastronomy.'
      },
      {
        era: '1857 AD',
        title: 'First War of Indian Independence',
        description: 'Historic rebellion ignited at Meerut, spreading through Jhansi (Rani Lakshmibai), Kanpur (Nana Saheb), and Lucknow (Begum Hazrat Mahal).'
      }
    ]
  },
  {
    id: 'delhi',
    name: 'Delhi (NCR)',
    isUnionTerritory: true,
    capital: 'New Delhi',
    region: 'North',
    coordinates: [28.6139, 77.2090],
    zoomLevel: 9,
    bannerImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Heart of India, Seat of Empires & Cosmopolitan Capital',
    overview: 'Delhi stands as the political and historic nerve center of India, layered with 8 historic cities, grand sultanate minarets, red stone citadels, lush Mughal gardens, and bustling bazaars like Chandni Chowk.',
    officialLanguage: 'Hindi',
    spokenLanguages: ['Hindi', 'Punjabi', 'Urdu', 'English'],
    stateAnimal: 'Nilgai',
    stateBird: 'House Sparrow',
    funFact: 'Delhi has been rebuilt at least eight distinct times throughout history by different empires including the Tomars, Chauhans, Khaljis, Tughlaqs, Mughals, and British.',
    monuments: [
      {
        name: 'Qutub Minar',
        type: 'Victory Tower & Mosque Complex',
        century: '1192 AD (12th Century)',
        location: 'Mehrauli',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1545129139-1beb780cf337?auto=format&fit=crop&w=800&q=80',
        description: '72.5-meter towering minaret of fluted red sandstone and marble featuring intricate Quranic inscriptions and the rust-resistant 4th-century Iron Pillar of Chandragupta II.',
        coordinates: [28.5244, 77.1855]
      },
      {
        name: 'Red Fort (Lal Qila)',
        type: 'Imperial Mughal Fortress',
        century: '1648 AD (17th Century)',
        location: 'Old Delhi',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?auto=format&fit=crop&w=800&q=80',
        description: 'Majestic red sandstone fortress built by Emperor Shah Jahan when moving the capital from Agra to Shahjahanabad; site of the Prime Minister’s Independence Day address.',
        coordinates: [28.6562, 77.2410]
      },
      {
        name: 'Humayun\'s Tomb',
        type: 'Mughal Garden Tomb',
        century: '1570 AD (16th Century)',
        location: 'Nizamuddin East',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
        description: 'The first grand garden-tomb on the Indian subcontinent, featuring symmetrical Charbagh Persian water channels and precursor design to the Taj Mahal.',
        coordinates: [28.5933, 77.2507]
      },
      {
        name: 'India Gate',
        type: 'War Memorial Arch',
        century: '1931 AD (20th Century)',
        location: 'Rajpath (Kartavya Path)',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1585136917197-a7224213a890?auto=format&fit=crop&w=800&q=80',
        description: '42-meter triumphal arch designed by Sir Edwin Lutyens honoring 84,000 soldiers of the British Indian Army who died in World War I, with the eternal Amar Jawan Jyoti.',
        coordinates: [28.6129, 77.2295]
      }
    ],
    artAndDance: [
      {
        name: 'Qawwali of Hazrat Nizamuddin',
        type: 'Music',
        origin: 'Sufi Tradition of Amir Khusrau',
        description: 'Soulful devotional Sufi music performed every Thursday evening in the courtyard of the Nizamuddin Dargah.',
        instruments: ['Harmonium', 'Tabla', 'Dholak', 'Clapping']
      },
      {
        name: 'Dastangoi',
        type: 'Theatre',
        origin: '13th Century Persian/Urdu Storytelling',
        description: 'Traditional Urdu oral storytelling art revived in Delhi, narrating adventures of Tilism-e-Hoshruba and contemporary literature.',
        costumeHighlight: 'White Kurta-Pajama with muslin angavastram.'
      }
    ],
    cuisines: [
      {
        name: 'Butter Chicken & Dal Makhani (Moti Mahal origin)',
        category: 'Non-Vegetarian',
        description: 'Global culinary icons invented in post-partition Daryaganj, featuring slow-simmered black lentils with cream and tandoori chicken in velvety tomato-butter gravy.',
        keyIngredients: ['Whole Black Urad', 'Rajma', 'Butter', 'Cream', 'Chicken', 'Kasuri Methi']
      },
      {
        name: 'Chandni Chowk Paranthe & Chaat',
        category: 'Street Food',
        description: 'Crisp deep-fried stuffed flatbreads (rabri, paneer, khoya) from Paranthe Wali Gali and iconic Dahi Bhalle tossed with roasted spices and sweet pomegranate.',
        keyIngredients: ['Whole Wheat Flour', 'Ghee', 'Lentil Vadas', 'Sweet Yogurt', 'Saunth Chutney']
      },
      {
        name: 'Nihari with Khamiri Roti',
        category: 'Non-Vegetarian',
        description: 'Slow-cooked overnight beef/mutton shank stew infused with bone marrow, ginger juliennes, and green chilies, eaten with pillowy yeast-leavened flatbread.',
        keyIngredients: ['Mutton/Beef Shank', 'Nihari Masala', 'Bone Marrow', 'Ginger', 'Khamir (Yeast) Flatbread']
      }
    ],
    festivals: [
      {
        name: 'Republic Day Parade',
        timing: 'January 26',
        significance: 'Spectacular national celebration along Kartavya Path showcasing India\'s defense capability, state tableaux, and cultural diversity.',
        keyRitual: 'Presidential flag hoisting, 21-gun salute, flypast by the Indian Air Force.',
        highlight: 'Grand cultural dance troupes and camel mounted regiments.'
      },
      {
        name: 'Phool Walon Ki Sair',
        timing: 'Autumn (October)',
        significance: 'Unique 3-day secular festival of flower sellers celebrating communal harmony in Mehrauli.',
        keyRitual: 'Offering floral fans (Pankhas) to the shrine of Khwaja Qutbuddin Bakhtiyar Kaki and Yogmaya Temple.',
        highlight: 'Processions with shehnai players and Kathak performances.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Zardozi Gold-Thread Embroidery', 'Delhi Meenakari Borders', 'Designer Contemporary Handlooms'],
      handicrafts: ['Parchinkari Marble Inlay', 'Old Delhi Calligraphy & Bookbinding', 'Brass & Silver Filigree from Dariba Kalan'],
      traditionalMenAttire: 'Achkan / Sherwani with Churidar or refined Kurta-Pajama with Nehru jacket.',
      traditionalWomenAttire: 'Embroidered Salwar Kameez, Anarkali suit, or heirloom silk saree.',
      giTaggedCrafts: ['Basmati Rice (Regional)', 'Zardozi Embroidery']
    },
    historyTimeline: [
      {
        era: 'c. 1000 BCE',
        title: 'Indraprastha of the Mahabharata',
        description: 'Excavations at Purana Qila revealed painted grey ware pottery linked to the capital of the Pandavas.'
      },
      {
        era: '1192 - 1526 AD',
        title: 'The Delhi Sultanate',
        description: 'Five successive dynasties (Mamluk, Khalji, Tughlaq, Sayyid, Lodi) established Delhi as the dominant political center of medieval South Asia.'
      },
      {
        era: '1638 - 1857 AD',
        title: 'Mughal Shahjahanabad & Red Fort',
        description: 'Shah Jahan built the walled city of Shahjahanabad, serving as the cultural epicenter of Urdu poetry (Ghalib, Mir) and art.'
      },
      {
        era: '1911 - Present',
        title: 'Capital of Modern India',
        description: 'King George V announced the transfer of imperial capital from Calcutta; redesigned by Lutyens & Baker into the seat of modern Indian democracy.'
      }
    ]
  },
  {
    id: 'haryana',
    name: 'Haryana',
    capital: 'Chandigarh',
    region: 'North',
    coordinates: [29.0588, 76.0856],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1597047084897-51e81819a499?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Cradle of Vedic Wisdom, Land of Kurukshetra & Champion Athletes',
    overview: 'Haryana is a prosperous agrarian and industrial state with deep civilizational roots. It is the sacred land where the Bhagavad Gita was delivered at Kurukshetra, home to ancient Harappan mounds at Rakhigarhi, and powerhouse of Indian sports.',
    officialLanguage: 'Hindi',
    spokenLanguages: ['Haryanvi', 'Hindi', 'Punjabi', 'Ahirwati'],
    stateAnimal: 'Blackbuck',
    stateBird: 'Black Francolin (Kala Teetar)',
    funFact: 'Rakhigarhi in Hisar district, Haryana, is the largest Indus Valley Civilization site in the world, spanning over 350 hectares.',
    monuments: [
      {
        name: 'Brahma Sarovar & Jyotisar',
        type: 'Sacred Water Body & Gita Epicenter',
        century: 'Ancient Antiquity',
        location: 'Kurukshetra',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1597047084897-51e81819a499?auto=format&fit=crop&w=800&q=80',
        description: 'Sacred water tank mentioned in Mahabharata; nearby Jyotisar marks the holy banyan tree where Lord Krishna expounded the Bhagavad Gita to Arjuna.',
        coordinates: [29.9657, 76.8373]
      },
      {
        name: 'Rakhigarhi Archaeological Site',
        type: 'Harappan Metropolis Mounds',
        century: 'c. 2600 - 1900 BCE',
        location: 'Hisar District',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        description: 'Largest known Indus Valley settlement revealing planned brick drainage networks, granaries, terracotta seals, and gold jewelry workshops.',
        coordinates: [29.2889, 76.1158]
      },
      {
        name: 'Sheikh Chilli\'s Tomb',
        type: 'Mughal Persian Mausoleum',
        century: '1650 AD (17th Century)',
        location: 'Thanesar, Kurukshetra',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1597047084897-51e81819a499?auto=format&fit=crop&w=800&q=80',
        description: 'Octagonal beige sandstone and marble tomb of Sufi saint Abd-ur-Rahim (mentor to Prince Dara Shikoh), surrounded by Mughal gardens.',
        coordinates: [29.9790, 76.8228]
      }
    ],
    artAndDance: [
      {
        name: 'Dhamal Dance',
        type: 'Dance',
        origin: 'Ancient Ahirwal Region',
        description: 'Vibrant folk dance dating back to the Mahabharata era, performed by men with large tambourines (Daphli) celebrating good harvest.',
        instruments: ['Daphli', 'Dholak', 'Been', 'Chimta']
      },
      {
        name: 'Saang (Swang) Theatre',
        type: 'Theatre',
        origin: 'Rural Haryana',
        description: 'Open-air musical folk theatre combining mythology, satire, verse, and dance on a raised wooden platform (Akhara).',
        instruments: ['Sarangi', 'Harmonium', 'Dholak', 'Khanjari']
      },
      {
        name: 'Ghoomar of Haryana',
        type: 'Dance',
        origin: 'Southern Haryana',
        description: 'Circular twirling dance by women during festivals, clapping hands and singing traditional Haryanvi ballads.'
      }
    ],
    cuisines: [
      {
        name: 'Bajra Khichdi & Kadi Pakoda',
        category: 'Vegetarian',
        description: 'Wholesome pearl millet and moong dal porridge cooked with desi ghee, served with tangy sour curd and gram flour dumpling curry.',
        keyIngredients: ['Bajra (Pearl Millet)', 'Moong Dal', 'Desi Ghee', 'Besan', 'Sour Curd (Chhach)']
      },
      {
        name: 'Gond Ladoo & Churma',
        category: 'Dessert',
        description: 'Nutritious winter sweet prepared from edible gum crystals, whole wheat, desi ghee, almonds, and raw khand sugar.',
        keyIngredients: ['Gond (Edible Gum)', 'Wheat Flour', 'Desi Ghee', 'Almonds', 'Cardamom']
      },
      {
        name: 'Hara Chholia & Bathua Raita',
        category: 'Vegetarian',
        description: 'Fresh green chickpeas sautéed with spices and garlic, paired with cooling wild spinach (bathua) beaten curd.',
        keyIngredients: ['Fresh Green Chickpeas', 'Bathua Leaves', 'Curd', 'Roasted Cumin', 'Mustard Oil']
      }
    ],
    festivals: [
      {
        name: 'Surajkund International Crafts Mela',
        timing: 'February (First Fortnight)',
        significance: 'World\'s largest crafts fair held in Faridabad featuring thousands of indigenous artisans, weavers, and folk artists worldwide.',
        keyRitual: 'Rural craft displays, traditional folk performances, and indigenous culinary pavillions.',
        highlight: 'Vibrant kaleidoscope of rural Indian arts set against the historic Surajkund amphitheater.'
      },
      {
        name: 'Gita Jayanti Mahotsav',
        timing: 'Mokshada Ekadashi (December)',
        significance: 'Global commemoration of the birth of Srimad Bhagavad Gita in Kurukshetra.',
        keyRitual: 'Chanting of 700 Gita shlokas by thousands of scholars, Maha Aarti at Brahma Sarovar, and international seminars.',
        highlight: 'Illuminated floating lamps and sand art exhibits.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Panipat Handloom Weaves (Weavers City)', 'Haryanvi Phulkari', 'Lungi / Dhoti Weaves'],
      handicrafts: ['Terracotta Pottery of Jhajjar', 'Brassware of Rewari', 'Punja Durries of Rohtak'],
      traditionalMenAttire: 'Kameez with Dhoti and white Khandwa (traditional headgear / turban).',
      traditionalWomenAttire: 'Daaman (flared heavy skirt), Kurti (blouse), and Chunder (printed veil with silver gota).',
      giTaggedCrafts: ['Basmati Rice', 'Phulkari (shared with Punjab)']
    },
    historyTimeline: [
      {
        era: 'c. 2600 BCE',
        title: 'Rakhigarhi & Saraswati Basin Culture',
        description: 'Prominent Harappan settlements along the dry paleochannels of the sacred ancient Saraswati River.'
      },
      {
        era: 'c. 1000 BCE',
        title: 'Mahabharata War & Gita Enlightenment',
        description: 'The epic Kurukshetra War fought between the Pandavas and Kauravas; philosophical foundation of the Bhagavad Gita.'
      },
      {
        era: '1526, 1556, 1761 AD',
        title: 'Three Historic Battles of Panipat',
        description: 'Pivotal battles that decided the fate of Indian empires: Babur founding the Mughal Empire, Akbar consolidating power, and the Maratha-Afghan clash.'
      },
      {
        era: '1966 AD',
        title: 'Carved as a Separate State',
        description: 'Formed from the Hindi-speaking southern parts of East Punjab, rapidly developing into an agricultural and automobile hub.'
      }
    ]
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    capital: 'Shimla (Summer), Dharamshala (Winter)',
    region: 'North',
    coordinates: [31.1048, 77.1734],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Devbhoomi — Abode of the Gods, Snow Peaks & Pine Valleys',
    overview: 'Himachal Pradesh is a breathtaking Himalayan paradise known for cedar-scented valleys, ancient wooden pagoda temples, vibrant Tibetan Buddhist monasteries, handwoven Kullu shawls, and rich festive dham banquets.',
    officialLanguage: 'Hindi',
    spokenLanguages: ['Pahari', 'Kangri', 'Mandeali', 'Kulvi', 'Hindi', 'Tibetan'],
    stateAnimal: 'Snow Leopard',
    stateBird: 'Western Tragopan (Jujurana)',
    funFact: 'The Kalka-Shimla Toy Train railway, built in 1903 with 102 operational tunnels and 864 bridges, is a UNESCO World Heritage engineering marvel.',
    monuments: [
      {
        name: 'Hidimba Devi Temple',
        type: 'Kathkuni Style Wooden Pagoda',
        century: '1553 AD (16th Century)',
        location: 'Manali',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
        description: 'Four-tiered wooden pagoda temple surrounded by towering deodar cedar forests, built over an ancient rock cave dedicated to Hidimba Devi.',
        coordinates: [32.2483, 77.1802]
      },
      {
        name: 'Tabo Monastery',
        type: 'Tibetan Buddhist Monastic Complex',
        century: '996 AD (10th Century)',
        location: 'Spiti Valley',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        description: 'Oldest continuously operating Buddhist enclave in India and the Himalayas, known as the "Ajanta of the Himalayas" for ancient mud-plaster frescoes.',
        coordinates: [32.0924, 78.3813]
      },
      {
        name: 'Kangra Fort',
        type: 'Ancient Hill Citadel',
        century: '4th Century BCE / Katoch Dynasty',
        location: 'Kangra',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
        description: 'The oldest dated fort in India and the largest in the Himalayas, strategically built at the confluence of the Banganga and Majhi rivers.',
        coordinates: [32.0998, 76.2558]
      }
    ],
    artAndDance: [
      {
        name: 'Nati',
        type: 'Dance',
        origin: 'Kullu & Sirmaur Valleys',
        description: 'Guinness World Record holding synchronized slow-circular folk dance performed during Kullu Dussehra to the music of Karnal trumpets.',
        instruments: ['Dhol', 'Nagada', 'Shehnai', 'Karnal', 'Narsingha'],
        costumeHighlight: 'Embroidered woolen Chola, Dora waistband, and colorful Kullu Topi.'
      },
      {
        name: 'Chham Mask Dance',
        type: 'Dance',
        origin: 'Spiti & Kinnaur Buddhist Monasteries',
        description: 'Sacred tantric monastic ritual dance where Lamas wear elaborate demonic and divine animal masks to ward off evil spirits.',
        instruments: ['Dungchen (Long Horns)', 'Cymbals', 'Drums']
      },
      {
        name: 'Kangra Miniature Painting',
        type: 'Theatre',
        origin: 'Kangra Valley (Guler School)',
        description: 'Delicate miniature art depicting Radha-Krishna divine love using natural mineral colors and fine squirrel-hair brushes.',
        giTag: true
      }
    ],
    cuisines: [
      {
        name: 'Himachali Dham (Kangri / Madra)',
        category: 'Vegetarian',
        description: 'Traditional multi-course satvik feast cooked without onion and garlic by hereditary Brahmin chefs (Botis), featuring Chana Madra in yogurt, Mah Dal, and Meetha Chawal.',
        keyIngredients: ['Kabuli Chana', 'Curd', 'Mustard Oil', 'Cardamom', 'Raisins', 'Saffron']
      },
      {
        name: 'Siddu with Ghee & Walnut Chutney',
        category: 'Vegetarian',
        description: 'Steamed fermented wheat flour bun stuffed with a spiced paste of crushed poppy seeds (khus-khus), walnuts, and green chilies, dipped in hot desi ghee.',
        keyIngredients: ['Whole Wheat Flour', 'Yeast', 'Poppy Seeds', 'Walnuts', 'Desi Ghee', 'Green Chilies']
      },
      {
        name: 'Chha Gosht',
        category: 'Non-Vegetarian',
        description: 'Tender marinated mutton slowly braised in a spiced gram flour, sour buttermilk, cardamom, and coriander gravy.',
        keyIngredients: ['Mutton', 'Buttermilk (Chha)', 'Besan', 'Bay Leaves', 'Hing', 'Ginger']
      }
    ],
    festivals: [
      {
        name: 'International Kullu Dussehra',
        timing: 'Ashvin (October - 7 Days)',
        significance: 'Week-long festival beginning when the rest of India concludes Dussehra; over 200 local valley village deities assemble at Dhalpur Ground.',
        keyRitual: 'Rath Yatra of Lord Raghunath Ji and congregation of traditional Devtas.',
        highlight: 'Thousands dancing the Nati in unison under illuminated pine slopes.'
      },
      {
        name: 'Minjar Fair Chamba',
        timing: 'Shravana (July - August)',
        significance: 'Celebration of the flowering of maize shoots (Minjar) and monsoon arrival along the Ravi River.',
        keyRitual: 'Offering silk and golden tasselled Minjar shoots into the Ravi River.',
        highlight: 'Procession led by traditional Kunjari-Malhar singers and brass bands.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Kullu Shawls (Geometric Borders)', 'Kinnauri Shawls (Complex Patterns)', 'Pashmina Weaves', 'Chamba Rumal (Needle Painting Embroidery)'],
      handicrafts: ['Chamba Metal Sculptures', 'Hand-carved Deodar Woodwork', 'Kangra Tea'],
      traditionalMenAttire: 'Woolen Chola or Kurta with Suthan, waist tied with Dora and round Kullu/Kinnauri Cap.',
      traditionalWomenAttire: 'Pattu (handwoven tweed wrap), Dhaatu (headscarf), and silver Chandrahar necklace.',
      giTaggedCrafts: ['Kullu Shawl', 'Kangra Tea', 'Chamba Rumal', 'Kinnauri Shawl', 'Kangra Paintings']
    },
    historyTimeline: [
      {
        era: 'Ancient Era',
        title: 'Audumbaras, Trigarta & Kuluta Republics',
        description: 'Ancient Himalayan republics recorded in Panini\'s Ashtadhyayi and Mahabharata occupying the Beas and Ravi valleys.'
      },
      {
        era: '10th - 18th Century AD',
        title: 'Princely Hill States & Art Patronage',
        description: 'Clans of Katoch, Suket, Bushahr, and Chamba ruled hill valleys, patronizing miniature painting and Kathkuni architecture.'
      },
      {
        era: '1864 AD',
        title: 'Shimla Named Summer Capital of British India',
        description: 'The British Raj shifted imperial administration to the pine hills of Shimla during summer months.'
      },
      {
        era: '1971 AD',
        title: 'Full Statehood of Himachal Pradesh',
        description: 'Himachal Pradesh officially became the 18th state of the Indian Union with Shimla as its capital.'
      }
    ]
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    capital: 'Dehradun (Winter), Gairsain (Summer)',
    region: 'North',
    coordinates: [30.0668, 79.0193],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Land of Gods, Char Dham Sanctums, Glacial Origins & Yoga Capital',
    overview: 'Uttarakhand is the sacred Himalayan state where the holy Ganga and Yamuna originate. It encompasses the high-altitude Char Dham pilgrimage (Badrinath, Kedarnath, Gangotri, Yamunotri), Garhwal and Kumaon valleys, and the world yoga capital of Rishikesh.',
    officialLanguage: 'Hindi',
    spokenLanguages: ['Garhwali', 'Kumaoni', 'Jaunsari', 'Hindi', 'Sanskrit'],
    stateAnimal: 'Alpine Musk Deer',
    stateBird: 'Himalayan Monal',
    funFact: 'Uttarakhand is the only state in India that declared Sanskrit as its second official language.',
    monuments: [
      {
        name: 'Kedarnath Temple',
        type: 'High Altitude Stone Shiva Sanctum',
        century: '8th Century AD (Revitalized by Adi Shankara)',
        location: 'Rudraprayag District',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?auto=format&fit=crop&w=800&q=80',
        description: 'One of the 12 sacred Jyotirlingas standing at 3,583 meters against the snowy Kedarnath peak, built of giant interlocking gray granite slabs.',
        coordinates: [30.7352, 79.0669]
      },
      {
        name: 'Badrinath Temple',
        type: 'Sacred Vishnu Dham',
        century: 'Ancient / 9th Century AD',
        location: 'Chamoli District',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1600100397608-f010e4299955?auto=format&fit=crop&w=800&q=80',
        description: 'Primary shrine of the Char Dham pilgrimage situated along the Alaknanda River, featuring a brightly painted facade and black stone Badrinarayan idol.',
        coordinates: [30.7447, 79.4930]
      },
      {
        name: 'Jageshwar Dham Temple Complex',
        type: 'Nagara Style Stone Temples',
        century: '7th - 12th Century AD / Katyuri Dynasty',
        location: 'Almora District',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        description: 'Enchanting cluster of 124 ancient stone temples nestled amidst dense deodar cedar forests dedicated to Lord Shiva.',
        coordinates: [29.6416, 79.8497]
      }
    ],
    artAndDance: [
      {
        name: 'Choliya Dance',
        type: 'Martial Art',
        origin: 'Kumaon Region',
        description: 'Vibrant Rajput sword and shield martial folk dance dating back over 1,000 years, performed during weddings and royal processions.',
        instruments: ['Turi', 'Nagphani', 'Dhol', 'Damau', 'Ransingha'],
        costumeHighlight: 'White Chola, Chudidar, orange turban, and brass sword-shields.'
      },
      {
        name: 'Jhora & Chhapeli',
        type: 'Dance',
        origin: 'Garhwal & Kumaon',
        description: 'Community ring dance where men and women hold hands, swaying gracefully to rhythmic songs praising nature and love.',
        instruments: ['Hurka', 'Dholak', 'Bansuri']
      },
      {
        name: 'Aipan Folk Art',
        type: 'Theatre',
        origin: 'Kumaon Region',
        description: 'Traditional ritualistic floor painting created on ochre-red Geru backgrounds using white rice paste (Biswar).',
        giTag: true
      }
    ],
    cuisines: [
      {
        name: 'Kafuli & Chainsoo',
        category: 'Vegetarian',
        description: 'Nutritious Garhwali curry made with tender spinach and fenugreek leaves slow-cooked in iron kadhai, paired with toasted black gram dal soup.',
        keyIngredients: ['Spinach', 'Fenugreek Leaves', 'Black Urad Dal', 'Garlic', 'Mustard Oil', 'Jakhya Seeds']
      },
      {
        name: 'Singori & Bal Mithai',
        category: 'Dessert',
        description: 'Iconic Kumaoni roasted brown khoya fudge coated with sugar white balls, and sweet mawa wrapped in fragrant Malu leaves.',
        keyIngredients: ['Khoya / Mawa', 'Cane Sugar', 'Cardamom', 'Malu Leaves'],
        giTag: true
      },
      {
        name: 'Aloo ke Gutke with Bhang Chutney',
        category: 'Vegetarian',
        description: 'Spiced pahadi potato chunks tempered with aromatic Himalayan Jakhya seeds and served with tangy hemp-seed (Bhang) mint chutney.',
        keyIngredients: ['Pahadi Potatoes', 'Jakhya Seeds', 'Roasted Hemp Seeds (Bhang)', 'Lemon Juice', 'Green Chilies']
      }
    ],
    festivals: [
      {
        name: 'Nanda Devi Raj Jat Yatra',
        timing: 'Every 12 Years (Chamoli)',
        significance: 'Historic 280-kilometer Himalayan pilgrimage escorting Goddess Nanda Devi from Nauti village to Homkund lake with a four-horned ram (Chausingha Khadu).',
        keyRitual: 'Trekking through high-altitude meadows (Bugyals) and glacial lakes.',
        highlight: 'Thousands carrying sacred golden Chhatris (umbrellas).'
      },
      {
        name: 'Phool Dei Festival',
        timing: 'First Day of Chaitra (March)',
        significance: 'Harvest spring festival where young children place wild yellow flowers (Pyoli and Buransh) on the doorsteps of every house for prosperity.',
        keyRitual: 'Blessings from elders with rice, jaggery, and Dei sweets.',
        highlight: 'Celebration of blooming Himalayan rhododendrons.'
      },
      {
        name: 'Ganga Dussehra (Haridwar & Rishikesh)',
        timing: 'Jyeshtha (May - June)',
        significance: 'Commemoration of the sacred descent of River Ganga from the heavens to Earth.',
        keyRitual: 'Maha Aarti at Har Ki Pauri and floating millions of earthen diyas.',
        highlight: 'Illuminated Ganga ghats with chanting of Vedic hymns.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Panchachuli Handwoven Shawls', 'Thulma & Chutka Woolen Blankets', 'Ringaal Bamboo Weaves'],
      handicrafts: ['Almora Copperware (Tamta craft)', 'Aipan Folk Paintings', 'Wood Carvings of Garhwal'],
      traditionalMenAttire: 'Kurta-Churidar with woolen waistcoat (Sadri) and Pahadi Topi.',
      traditionalWomenAttire: 'Ghagra-Choli with Rangwali Pichora (auspicious yellow-red dotted veil) and large golden Tehri Nath (nose ring).',
      giTaggedCrafts: ['Kumaon Chyura Oil', 'Munsyari White Kidney Beans', 'Aipan Art', 'Ringaal Craft', 'Thulma Blanket']
    },
    historyTimeline: [
      {
        era: 'c. 250 BCE',
        title: 'Rock Edicts of Ashoka at Kalsi',
        description: 'Emperor Ashoka inscribed moral edicts on quartz rock at Kalsi near Dehradun along the Yamuna river.'
      },
      {
        era: '7th - 11th Century AD',
        title: 'Katyuri & Chand Dynasties of Kumaon',
        description: 'Katyuris and Chands established grand stone temple architecture and defended hill passes.'
      },
      {
        era: '8th Century AD',
        title: 'Adi Shankaracharya\'s Revival of Char Dham',
        description: 'The great philosopher traveled across the Himalayas, establishing Badrinath and Kedarnath before attaining Samadhi.'
      },
      {
        era: '2000 AD',
        title: 'Formation of Uttarakhand (Uttaranchal)',
        description: 'Created as the 27th state of India following a historic grassroots hill-state movement.'
      }
    ]
  },
  {
    id: 'jammu-and-kashmir',
    name: 'Jammu & Kashmir',
    isUnionTerritory: true,
    capital: 'Srinagar (Summer), Jammu (Winter)',
    region: 'North',
    coordinates: [34.0837, 74.7973],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Paradise on Earth, Dal Lake Houseboats, Pashmina & Saffron Meadows',
    overview: 'Jammu & Kashmir is world-famous as the crown jewel of India. It blends the spiritual temples of Jammu (Vaishno Devi), the sublime alpine meadows of Kashmir, shikaras gliding on Dal Lake, saffron fields of Pampore, and world-class Pashmina weaves.',
    officialLanguage: 'Kashmiri, Dogri, Urdu, Hindi',
    spokenLanguages: ['Kashmiri', 'Dogri', 'Gojri', 'Pahari', 'Urdu', 'Hindi'],
    stateAnimal: 'Hangul (Kashmir Stag)',
    stateBird: 'Kalij Pheasant',
    funFact: 'Pampore in Jammu & Kashmir is one of the very few places in the world that produces the finest grade of Saffron (Kesar), cultivated since 500 BCE.',
    monuments: [
      {
        name: 'Mata Vaishno Devi Shrine',
        type: 'Sacred Cave Temple',
        century: 'Ancient Antiquity',
        location: 'Katra, Trikuta Hills',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80',
        description: 'Holy shrine nestled at 5,200 feet in Trikuta Mountains housing the holy Pindis representing Mahakali, Mahalakshmi, and Mahasaraswati.',
        coordinates: [33.0308, 74.9490]
      },
      {
        name: 'Mughal Gardens of Srinagar (Shalimar & Nishat)',
        type: 'Terraced Persian Charbagh Gardens',
        century: '1619 - 1633 AD / Emperor Jahangir & Asif Khan',
        location: 'Srinagar',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80',
        description: 'Terraced imperial garden complex overlooking Dal Lake with cascading fountains, chinar trees, and marble pavilions.',
        coordinates: [34.1501, 74.8727]
      },
      {
        name: 'Martand Sun Temple',
        type: 'Ancient Stone Sun Temple',
        century: '8th Century AD / Lalitaditya Muktapida',
        location: 'Anantnag',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
        description: 'Monumental Kashmiri architectural marvel built by the Karkota dynasty, blending Greek, Roman, and Gandhara colonnaded styles.',
        coordinates: [33.7461, 75.2014]
      }
    ],
    artAndDance: [
      {
        name: 'Rouf Dance',
        type: 'Dance',
        origin: 'Kashmir Valley',
        description: 'Graceful rhythmic folk dance performed by women in two facing rows during Eid, Ramzan, and harvest seasons.',
        instruments: ['Tumbaknari', 'Noet (Earthen Pot)', 'Rabab'],
        costumeHighlight: 'Embroidered Pheran, Kasaba headgear, and silver Dejhoor earrings.'
      },
      {
        name: 'Kud Dance & Dogri Folk',
        type: 'Dance',
        origin: 'Jammu Hills',
        description: 'Night-long celebratory ritual dance performed around a bonfire by villagers honoring local Gram Devtas.',
        instruments: ['Narsingha', 'Flute', 'Dholak']
      },
      {
        name: 'Sufiyana Kalam & Santoor',
        type: 'Music',
        origin: 'Kashmir',
        description: 'Classical spiritual music featuring the 100-stringed Kashmiri Santoor, Rabab, and Sehtar accompanying mystic poetry.',
        instruments: ['Santoor', 'Saz-e-Kashmir', 'Rabab']
      }
    ],
    cuisines: [
      {
        name: 'Kashmiri Wazwan & Rogan Josh',
        category: 'Non-Vegetarian',
        description: 'Royal 36-course banquet prepared by master chefs (Wazas), featuring Rogan Josh, Gushtaba (velvety meatballs in yogurt), and Rista in saffron-chili broth.',
        keyIngredients: ['Mutton', 'Kashmiri Mawal (Cockscomb flower)', 'Pran (Shallots)', 'Fennel Powder', 'Saffron', 'Mustard Oil']
      },
      {
        name: 'Dum Aloo & Nadru Yakhni',
        category: 'Vegetarian',
        description: 'Baby potatoes simmered in fiery fennel-cardamom red chili gravy, and crunchy lotus stems cooked in delicate yogurt-mint broth.',
        keyIngredients: ['Baby Potatoes', 'Lotus Stem (Nadru)', 'Yogurt', 'Fennel Powder', 'Dry Ginger (Sonth)', 'Hing']
      },
      {
        name: 'Kahwa (Kashmiri Saffron Green Tea)',
        category: 'Beverage',
        description: 'Aromatic green tea brewed in a copper Samovar infused with saffron strands, crushed green cardamom, cinnamon, and slivered almonds.',
        keyIngredients: ['Green Tea Leaves', 'Kashmir Saffron', 'Green Cardamom', 'Cinnamon', 'Almonds']
      }
    ],
    festivals: [
      {
        name: 'Tulip Festival Srinagar',
        timing: 'April (Spring)',
        significance: 'Asia\'s largest tulip garden (Indira Gandhi Memorial Tulip Garden) in full bloom at the foothills of the Zabarwan range.',
        keyRitual: 'Cultural musical performances, Kashmiri handicraft exhibitions, and photography.',
        highlight: 'Over 1.5 million tulips blooming in 60+ vibrant varieties overlooking Dal Lake.'
      },
      {
        name: 'Herath (Maha Shivratri in Kashmir)',
        timing: 'Phalguna (February - March)',
        significance: 'Most important religious festival of Kashmiri Pandits celebrating the wedding of Lord Shiva and Goddess Parvati.',
        keyRitual: 'Vatuk Puja using brass/clay pots filled with water and walnuts, distributed as prasad on Dun Mavas.',
        highlight: 'Grand family feasts and traditional Herath prayers.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Kashmiri Pashmina Shawls', 'Kani Shawl (Loomed with wooden needles)', 'Sozni & Tilla Hand Embroidery', 'Shahtoosh & Woolen Blankets'],
      handicrafts: ['Papier-mâché Painted Artifacts', 'Walnut Wood Carving', 'Kashmiri Silk Carpets', 'Khatamband Wooden Ceilings', 'Basohli Miniature Paintings'],
      traditionalMenAttire: 'Woolen Pheran with Kangri (earthen brazier) and Karakul cap or turban.',
      traditionalWomenAttire: 'Intricately embroidered Pheran, Kasaba or Taranga headgear, and golden Dejhoor ear ornaments.',
      giTaggedCrafts: ['Kashmir Pashmina', 'Kani Shawl', 'Kashmir Paper Machie', 'Kashmir Walnut Wood Carving', 'Kashmir Saffron', 'Basohli Paintings']
    },
    historyTimeline: [
      {
        era: '8th Century AD',
        title: 'Golden Age of Karkota Empire',
        description: 'Emperor Lalitaditya Muktapida expanded the empire across Central Asia and constructed the grand Martand Sun Temple.'
      },
      {
        era: '10th - 11th Century AD',
        title: 'Kashmir Shaivism & Abhinavagupta',
        description: 'Flourishing of the non-dual philosophical tradition of Trika Kashmir Shaivism with world-renowned treatises on aesthetics and philosophy.'
      },
      {
        era: '14th - 16th Century AD',
        title: 'Zain-ul-Abidin (Budshah) & Mughal Period',
        description: 'Sultan Zain-ul-Abidin introduced carpet-weaving, papier-mâché, and silk arts from Persia; Jahangir created world-renowned terraced gardens.'
      },
      {
        era: '1846 - 1947 AD',
        title: 'Dogra Dynasty of Jammu & Kashmir',
        description: 'Maharaja Gulab Singh unified the princely state of Jammu, Kashmir, and Ladakh under the Treaty of Amritsar.'
      }
    ]
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    isUnionTerritory: true,
    capital: 'Leh',
    region: 'North',
    coordinates: [34.1526, 77.5771],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Land of High Passes, Ancient Gompas, Pangong Lake & Starlit Skies',
    overview: 'Ladakh is the trans-Himalayan high-altitude desert known as "Little Tibet". It features snow-clad peaks, turquoise glacial lakes (Pangong & Tso Moriri), dramatic rock-perched Buddhist monasteries, and vibrant mask dances.',
    officialLanguage: 'Ladakhi, Hindi, English',
    spokenLanguages: ['Ladakhi (Bhoti)', 'Balti', 'Tibetan', 'Hindi', 'English'],
    stateAnimal: 'Snow Leopard',
    stateBird: 'Black-necked Crane',
    funFact: 'Umling La Pass in Ladakh, at an altitude of 19,024 feet (5,798 m), is the highest motorable road in the world.',
    monuments: [
      {
        name: 'Thiksey Monastery',
        type: 'Gelug Buddhist Gompa',
        century: '1430 AD (15th Century)',
        location: 'Leh District',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        description: 'Twelve-story whitewashed complex resembling Tibet\'s Potala Palace, housing a breathtaking 49-foot Maitreya (Future Buddha) statue.',
        coordinates: [34.0583, 77.6667]
      },
      {
        name: 'Leh Palace',
        type: 'Tibetan Medieval Fortress Palace',
        century: '1600 AD (17th Century) / King Sengge Namgyal',
        location: 'Leh',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        description: 'Nine-story royal fortress modeled after the Potala Palace of Lhasa, offering panoramic views of the Stok Kangri peaks.',
        coordinates: [34.1650, 77.5856]
      },
      {
        name: 'Hemis Monastery',
        type: 'Drukpa Lineage Tibetan Gompa',
        century: '11th Century / Rebuilt 1672 AD',
        location: 'Hemis',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        description: 'The wealthiest and largest monastery in Ladakh, home to a priceless collection of ancient thangkas, gold statues, and Buddhist manuscripts.',
        coordinates: [33.9125, 77.7067]
      }
    ],
    artAndDance: [
      {
        name: 'Chham Mask Dance of Hemis',
        type: 'Dance',
        origin: 'Hemis Monastery',
        description: 'Mystical masked monastic dance accompanied by horns and drums celebrating the victory of Guru Padmasambhava over dark forces.',
        instruments: ['Dungchen (Tibetan Horns)', 'Gyaling (Oboes)', 'Nga (Drums)', 'Rolmo (Cymbals)'],
        costumeHighlight: 'Silk robes with hand-carved painted wooden demon/deity masks.'
      },
      {
        name: 'Jabro & Shondol Dance',
        type: 'Dance',
        origin: 'Changthang & Leh',
        description: 'Shondol (the royal dance of Ladakh performed for kings) and nomadic Jabro dance performed with stepping and clapping.',
        instruments: ['Daman', 'Surna']
      },
      {
        name: 'Thangka Silk Painting',
        type: 'Theatre',
        origin: 'Ladakhi Monasteries',
        description: 'Sacred scroll paintings depicting Buddhist deities on cotton or silk appliqué using natural stone pigments and 24-carat gold powder.',
        giTag: true
      }
    ],
    cuisines: [
      {
        name: 'Thukpa & Tingmo',
        category: 'Vegetarian',
        description: 'Steaming hot hand-pulled noodle soup loaded with mountain herbs and vegetables, paired with fluffy flower-shaped steamed bread.',
        keyIngredients: ['Wheat Noodles', 'Vegetables / Yak Meat', 'Ginger-Garlic', 'Tingmo Steamed Bread', 'Sichuan Pepper']
      },
      {
        name: 'Skyu & Butter Tea (Gur Gur Chai)',
        category: 'Vegetarian',
        description: 'Traditional thumb-pressed wheat pasta stew slow-simmered with root vegetables, served with salty pink yak-butter churned tea.',
        keyIngredients: ['Wheat Pasta (Skyu)', 'Yak Butter', 'Green Tea Leaves', 'Himalayan Salt', 'Milk']
      },
      {
        name: 'Chhurpi (Yak Cheese) & Tsampa',
        category: 'Vegetarian',
        description: 'Nutritious roasted barley flour mixed with butter tea, accompanied by hard dried dried yak milk cheese.',
        keyIngredients: ['Roasted Barley (Tsampa)', 'Yak Milk Cheese (Chhurpi)', 'Butter Tea']
      }
    ],
    festivals: [
      {
        name: 'Hemis Tsechu Festival',
        timing: 'June - July (10th Day of Tibetan Lunar Month)',
        significance: 'Annual monastic carnival celebrating the birth anniversary of Guru Padmasambhava in the courtyard of Hemis Gompa.',
        keyRitual: 'Sacred Chham mask dances by lamas and unfurling of the giant four-story silk Thangka.',
        highlight: 'Spectacle of color, trumpet blasts, and international travelers in traditional attire.'
      },
      {
        name: 'Losar (Ladakhi New Year)',
        timing: 'December (Winter Solstice)',
        significance: 'Two-week Ladakhi New Year celebrated with oil lamps, Metho fire processions, and Ibex dance.',
        keyRitual: 'Making symbolic dough animals and offering prayers at Gompas for peace and prosperity.',
        highlight: 'Illumination of every rooftop and castle across Leh.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Ladakh Pashmina (Changthangi Goat Wool)', 'Sabu Tweed', 'Camel Hair Blankets', 'Namda Felt Rugs'],
      handicrafts: ['Thangka Scroll Paintings', 'Clay Deity Statues of Choglamsar', 'Carved Wood Choktse Tables', 'Silver Amulet Boxes (Ga\'u)'],
      traditionalMenAttire: 'Goncha (thick woolen robe tied with a bright sash) and velvet hat.',
      traditionalWomenAttire: 'Pleated Goncha robe with Perak (turquoise and coral studded headpiece) and Bok cloak.',
      giTaggedCrafts: ['Ladakh Pashmina', 'Ladakh Wood Carving', 'Raktsey Karpo Apricot']
    },
    historyTimeline: [
      {
        era: '1st - 2nd Century CE',
        title: 'Kushan Empire & Silk Route Trade',
        description: 'Ladakh served as a crucial trans-Himalayan crossroads connecting the Silk Route between India, Tibet, and Central Asia.'
      },
      {
        era: '10th Century AD',
        title: 'Establishment of Maryul (Ladakh Kingdom)',
        description: 'Descendants of the Tibetan royal house founded the independent kingdom of Ladakh, establishing Naropa\'s monastic traditions.'
      },
      {
        era: '17th Century AD',
        title: 'Golden Age of King Sengge Namgyal',
        description: 'The Lion King built the Leh Palace, Hemis Gompa, and secured Ladakhi sovereignty against foreign invasions.'
      },
      {
        era: '2019 AD',
        title: 'Union Territory of Ladakh',
        description: 'Created as a distinct Union Territory of India, preserving its unique cultural, environmental, and strategic identity.'
      }
    ]
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    isUnionTerritory: true,
    capital: 'Chandigarh',
    region: 'North',
    coordinates: [30.7333, 76.7794],
    zoomLevel: 10,
    bannerImage: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80',
    tagline: 'The City Beautiful — Modernist Architecture, Rock Garden & Shivalik Foothills',
    overview: 'Chandigarh is India\'s premier planned city, globally renowned for the modernist architecture of Swiss-French master Le Corbusier (a UNESCO World Heritage site), the wondrous outsider art creations of Nek Chand\'s Rock Garden, serene Sukhna Lake, and vibrant Punjabi-Haryanvi cultural confluence.',
    officialLanguage: 'English, Hindi, Punjabi',
    spokenLanguages: ['Punjabi', 'Hindi', 'English'],
    stateAnimal: 'Indian Grey Mongoose',
    stateBird: 'Indian Grey Hornbill',
    funFact: 'Nek Chand secretly sculpted the 40-acre Rock Garden over 18 years using industrial waste, broken ceramic chinaware, discarded bangles, and electrical fittings before it was discovered and declared a national heritage park.',
    monuments: [
      {
        name: 'Rock Garden of Chandigarh',
        type: 'Outsider Art Sculpture Kingdom',
        century: '1957 AD (20th Century / Nek Chand)',
        location: 'Sector 1, Chandigarh',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80',
        description: 'World-famous 40-acre sculpture park crafted entirely from recycled urban ceramics, industrial salvage, glass bangles, and pottery, framed by multi-tiered waterfalls.',
        coordinates: [30.7525, 76.8066]
      },
      {
        name: 'Le Corbusier Capitol Complex',
        type: 'Modernist Architectural Ensemble',
        century: '1952 - 1965 AD (Le Corbusier)',
        location: 'Sector 1, Chandigarh',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        description: 'UNESCO World Heritage monument complex featuring the monumental Open Hand Monument (symbol of peace and unity), the Legislative Assembly, High Court, and Secretariat.',
        coordinates: [30.7589, 76.8038]
      },
      {
        name: 'Sukhna Lake Promenade',
        type: 'Scenic Himalayan Reservoir & Wetland',
        century: '1958 AD (Designed by Le Corbusier & P.L. Verma)',
        location: 'Sector 1, Chandigarh',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        description: 'Picturesque 3-sq-km rainfed reservoir at the foothills of the Shivalik range, celebrated for rowing regattas, migratory bird watching, and tranquil sunrise walking tracks.',
        coordinates: [30.7421, 76.8188]
      },
      {
        name: 'Government Museum and Art Gallery',
        type: 'Modernist Museum of Ancient Art',
        century: '1968 AD (Designed by Le Corbusier)',
        location: 'Sector 10, Chandigarh',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'Houses one of the world\'s finest collections of ancient Gandhara Buddhist stone sculptures and exquisite Pahari and Rajasthani miniature paintings.',
        coordinates: [30.7483, 76.7869]
      }
    ],
    artAndDance: [
      {
        name: 'Giddha & Bhangra of the North',
        type: 'Dance',
        origin: 'Punjab & Chandigarh Region',
        description: 'Energetic celebratory folk dances performed with clapping clappers (Chimta), Algoza flutes, and Dholak during festivals and cultural gatherings.',
        instruments: ['Dhol', 'Chimta', 'Algoza', 'Dholak'],
        costumeHighlight: 'Vibrant Salwar Kameez with embroidered Phulkari dupattas and colorful Kurta-Chadra.'
      },
      {
        name: 'Modernist Architectural Art & Murals',
        type: 'Folk Art',
        origin: 'Le Corbusier & Pierre Jeanneret Era',
        description: 'Iconic brutalist concrete bas-reliefs, geometric tapestries, and handcrafted teakwood furniture designed for the Capitol Complex.',
        highlights: ['Open Hand Philosophy', 'Modular Proportioning', 'Raw Cast-Concrete Formwork']
      }
    ],
    cuisines: [
      {
        name: 'Chandigarh Chole Bhature & Kulcha',
        category: 'Street Food',
        description: 'Golden puffy deep-fried bhaturas served with spicy dark Punjabi chickpea curry, pickled onions, and sweet chilled lassi in clay kulhads.',
        keyIngredients: ['Kabuli Chana', 'Refined Flour', 'Anardana (Pomegranate Seeds)', 'Ginger', 'Green Chilies', 'Curd']
      },
      {
        name: 'Butter Naan with Tandoori Paneer Tikka',
        category: 'Vegetarian',
        description: 'Charred clay-oven paneer cubes marinated in hung yogurt, mustard oil, and carom seeds, served with garlic-herb butter naan.',
        keyIngredients: ['Fresh Paneer', 'Hung Curd', 'Ajwain', 'Mustard Oil', 'Kashmiri Red Chili', 'Butter']
      },
      {
        name: 'Pinni & Makhana Kheer',
        category: 'Dessert',
        description: 'Nutritious roasted wheat flour, gond, and dry-fruit laddoos pan-fried in pure desi ghee, paired with fragrant saffron foxnut kheer.',
        keyIngredients: ['Whole Wheat Flour', 'Ghee', 'Edible Gum (Gond)', 'Almonds', 'Foxnuts (Makhana)', 'Cardamom']
      }
    ],
    festivals: [
      {
        name: 'Chandigarh Rose Festival',
        timing: 'February (Last Weekend)',
        significance: 'Asia\'s premier floral carnival hosted at Zakir Hussain Rose Garden, displaying over 50,000 rose bushes in 1,600 varieties.',
        keyRitual: 'Flower arrangement competitions, musical concerts, folk dance troupes, and helicopter rides over the Shivalik foothills.',
        highlight: 'Sea of blooming multicolored roses with cultural stage shows.'
      },
      {
        name: 'Chandigarh Carnival',
        timing: 'November',
        significance: 'Annual three-day cultural and youth festival celebrating artistic diversity, vintage car rallies, and community street theatre.',
        keyRitual: 'Procession of vibrant themed floats, live performances by leading Punjabi musicians, and craft pavilions.',
        highlight: 'Parade of handmade giant puppets and illuminated night concerts.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Phulkari Hand Embroidery', 'Kashmiri & Pahari Loomed Shawls', 'Khadi Handloom Weaves'],
      handicrafts: ['Recycled Sculpture Art', 'Terracotta Flower Pottery', 'Pierre Jeanneret Heritage Teak Furniture', 'Brass Embellishments'],
      traditionalMenAttire: 'Crisp Kurta-Pajama with Nehru jacket or tailored urban smart-casual attire.',
      traditionalWomenAttire: 'Graceful Punjabi Salwar Kameez with intricate Phulkari dupatta and Punjabi Juttis.',
      giTaggedCrafts: ['Phulkari (Shared Punjab/Haryana/Chandigarh)']
    },
    historyTimeline: [
      {
        era: '1947 - 1950 AD',
        title: 'Post-Independence Vision for a New Capital',
        description: 'Prime Minister Jawaharlal Nehru commissioned a forward-looking, uninhibited modern city to serve as the new capital following the partition of Punjab.'
      },
      {
        era: '1951 - 1965 AD',
        title: 'Master Plan of Le Corbusier',
        description: 'Swiss-French architect Le Corbusier created the sector grid layout, Capitol Complex, and landscaped green belts across the city.'
      },
      {
        era: '1966 AD',
        title: 'Designation as a Union Territory',
        description: 'Upon the linguistic reorganization of Punjab and Haryana, Chandigarh was declared a Union Territory under central administration serving as joint capital.'
      },
      {
        era: '2016 AD',
        title: 'UNESCO World Heritage Inscription',
        description: 'The Capitol Complex of Chandigarh was inscribed as a UNESCO World Heritage Site as part of Le Corbusier\'s outstanding architectural contribution.'
      }
    ]
  }
];
