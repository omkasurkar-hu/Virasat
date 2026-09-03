import { StateHeritage } from '../types';

export const EAST_NORTHEAST_STATES: StateHeritage[] = [
  {
    id: 'west-bengal',
    name: 'West Bengal',
    capital: 'Kolkata',
    region: 'East',
    coordinates: [22.9868, 87.8550],
    zoomLevel: 7,
    bannerImage: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Cultural Capital of India, Durga Puja & Bengal Renaissance',
    overview: 'West Bengal is the intellectual and cultural vanguard of modern India. From Kolkata\'s colonial grandeur and Nobel laureates (Rabindranath Tagore) to Bishnupur\'s terracotta temples, Darjeeling\'s Himalayan tea estates, and the UNESCO-inscribed mega-carnival of Durga Puja.',
    officialLanguage: 'Bengali',
    spokenLanguages: ['Bengali', 'English', 'Hindi', 'Nepali', 'Santhali'],
    stateAnimal: 'Fishing Cat (Baghdash)',
    stateBird: 'White-throated Kingfisher',
    funFact: 'Durga Puja in Kolkata is inscribed on the UNESCO Intangible Cultural Heritage of Humanity list, transforming the city into the world\'s largest open-air public art installation for 10 days.',
    monuments: [
      {
        name: 'Victoria Memorial',
        type: 'Indo-Saracenic & Renaissance White Marble Monument',
        century: '1921 AD (Built in Makrana Marble)',
        location: 'Kolkata',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80',
        description: 'Colossal white marble monument topped by a 16-foot rotating bronze Angel of Victory, housing rare colonial paintings and royal artifacts.',
        coordinates: [22.5448, 88.3426]
      },
      {
        name: 'Terracotta Temples of Bishnupur (Rasmancha)',
        type: 'Malla Kingdom Terracotta Brick Temples',
        century: '1600 AD (17th Century / King Bir Hambir)',
        location: 'Bishnupur, Bankura',
        isUnesco: false,
        image: 'https://rangandatta.wordpress.com/wp-content/uploads/2012/04/shyamrahi-bishnupur.jpg',
        description: 'Unique pyramidical stepped temple adorned with thousands of intricate burnt-clay terracotta panels depicting the Ramayana, Mahabharata, and Krishna Raslila.',
        coordinates: [23.0754, 87.3197]
      },
      {
        name: 'Howrah Bridge (Rabindra Setu)',
        type: 'Balanced Cantilever Steel Bridge',
        century: '1943 AD (20th Century)',
        location: 'Hooghly River, Kolkata',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?auto=format&fit=crop&w=800&q=80',
        description: 'World-famous 705-meter cantilever bridge constructed without a single nut and bolt, held together purely by 26,500 tonnes of high-tensile riveted steel.',
        coordinates: [22.5851, 88.3468]
      },
      {
        name: 'Sundarbans National Park',
        type: 'World\'s Largest Mangrove Forest',
        century: 'Natural Biosphere Reserve',
        location: 'Sundarbans Delta',
        isUnesco: true,
        image: 'https://www.naturetravelagency.com/uploads/1698823201tourism%20in%20sundarbans.jpg',
        description: 'Tidal mangrove forest formed by the confluence of Ganga, Brahmaputra, and Meghna rivers, home to the swimming Royal Bengal Tigers and saltwater crocodiles.',
        coordinates: [21.9497, 89.1833]
      }
    ],
    artAndDance: [
      {
        name: 'Baul Sangeet (Mystic Minstrels of Bengal)',
        image: 'https://caleidoscope.in/wp-content/uploads/2019/11/Baul-culture-of-Bengal-01.jpg',
        type: 'Music',
        origin: 'Birbhum & Nadia (UNESCO Intangible Heritage)',
        description: 'Soul-stirring philosophical folk music sung by wandering mystic minstrels expressing devotion beyond religious boundaries.',
        instruments: ['Ektara (Single-stringed lute)', 'Dotara', 'Khamak', 'Dhubki'],
        costumeHighlight: 'Saffron / patchwork robe (Alkhalla) with rudraksha and long unbraided hair.'
      },
      {
        name: 'Purulia Chhau Dance',
        image: 'https://api.banglanatak.com/wp-content/uploads/2025/07/Chhau-Dance-performance-2-scaled.jpg',
        type: 'Martial Art',
        origin: 'Purulia District',
        description: 'Vigorous acrobatic masked martial dance reenacting battles between gods and demons from epics, featuring high jumps and somersaults.',
        instruments: ['Dhol', 'Dhumsa', 'Shehnai'],
        costumeHighlight: 'Giant hand-painted papier-mâché masks adorned with feathers and tinsel.'
      },
      {
        name: 'Dhunuchi Nach (Durga Puja)',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHHHwrWczEzCSTcMkkJm-XMZRxXFsh_-NgynIEAM2o68rNQCb2D0dkHdU&s=10',
        type: 'Dance',
        origin: 'Durga Puja Pandals',
        description: 'Fervent devotional dance performed during evening Aarti holding clay censers burning with coconut husk and fragrant frankincense (Dhuno).',
        instruments: ['Dhaak (Giant Two-headed Drum)', 'Kashor (Gong)']
      }
    ],
    cuisines: [
      {
        name: 'Shorshe Ilish & Kosha Mangsho',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--93V6iilLCB9ApIUX8Ja1A3USwYD7iCtkZeFf621ci-yZHNtvlv1G08&s=10',
        category: 'Non-Vegetarian',
        description: 'Tender Hilsa fish steamed in pungent yellow mustard-poppy seed paste and green chilies, and slow-braised velvety dark mutton curry with luchi.',
        keyIngredients: ['Hilsa (Ilish) / Mutton', 'Mustard Paste (Shorshe Bata)', 'Mustard Oil', 'Green Chilies', 'Nolen Gur', 'Luchi (Fried Maida Bread)']
      },
      {
        name: 'Rasgulla & Sandesh (Mishti)',
        image: 'https://static.toiimg.com/thumb/msid-113972025,width-1280,height-720,imgsize-56994,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
        category: 'Dessert',
        description: 'Spongy cottage cheese (chhena) spheres boiled in light sugar syrup (invented by Nobin Chandra Das in 1868), and date-palm jaggery (Nolen Gur) Sandesh.',
        keyIngredients: ['Fresh Cow Milk Chhena', 'Sugar Syrup', 'Nolen Gur (Date Palm Jaggery)', 'Cardamom', 'Pistachios'],
        giTag: true
      },
      {
        name: 'Kolkata Kathi Roll & Phuchka',
        image: 'https://static2.tripoto.com/media/filter/tst/img/1446686/TripDocument/1566304969_lrm_export_57267472762996_20190206_152011017_copy.jpg',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Kolkata_Rolls.jpg/500px-Kolkata_Rolls.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
        category: 'Street Food',
        description: 'Flaky paratha layered with fried egg, skewered kebab meat, onions, and lime juice (invented at Nizam\'s in 1932); and crisp semolina puchkas with spiced potato mash and tangy tamarind-gondhoraj water.',
        keyIngredients: ['Paratha', 'Egg', 'Chicken/Mutton Seekh', 'Gondhoraj Lime', 'Puchka Puris', 'Tamarind Water']
      },
      {
        name: 'Shukto & Chholar Dal',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYKqTWfI6Fm7q1s3FgH-PRTr10UTV-202Fdi5g30bEBYYtkzzgY3yJOTY&s=10',
        image: 'https://holycowvegan.net/wp-content/uploads/2014/06/bengali-cholar-dal-recipe.jpg',
        category: 'Vegetarian',
        description: 'Traditional multi-vegetable bitter-sweet stew with bitter gourd, raw banana, and lentil dumplings (bori) in milk-radhuni broth; paired with coconut chholar dal.',
        keyIngredients: ['Bitter Gourd (Uchhe)', 'Drumsticks', 'Raw Banana', 'Radhuni Spice', 'Chana Dal', 'Fried Coconut Bits']
      }
    ],
    festivals: [
      {
        name: 'Kolkata Durga Puja',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/%E0%A6%AC%E0%A6%BE%E0%A6%97%E0%A6%AC%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0_%E0%A6%B8%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%9C%E0%A6%A8%E0%A7%80%E0%A6%A8_%E0%A6%A6%E0%A7%81%E0%A6%B0%E0%A7%8D%E0%A6%97%E0%A7%8B%E0%A7%8E%E0%A6%B8%E0%A6%AC_%E0%A7%A8%E0%A7%A6%E0%A7%A7%E0%A7%AE.jpg/500px-%E0%A6%AC%E0%A6%BE%E0%A6%97%E0%A6%AC%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0_%E0%A6%B8%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%9C%E0%A6%A8%E0%A7%80%E0%A6%A8_%E0%A6%A6%E0%A7%81%E0%A6%B0%E0%A7%8D%E0%A6%97%E0%A7%8B%E0%A7%8E%E0%A6%B8%E0%A6%AC_%E0%A7%A8%E0%A7%A6%E0%A7%A7%E0%A7%AE.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
        timing: 'Ashvin (September - October / 6-10 Days)',
        significance: 'UNESCO World Heritage socio-cultural mega carnival welcoming Goddess Durga\'s annual homecoming with her four divine children.',
        keyRitual: 'Maha Saptami to Dashami, Dhunuchi Nach, Sandhi Puja with 108 lotuses, and Sindoor Khela where married women smear vermilion on each other.',
        highlight: 'Thousands of awe-inspiring themed art pandals transforming Kolkata into an illuminated wonderland.'
      },
      {
        name: 'Poush Mela Santiniketan',
        image: 'https://www.santiniketan.com/wp-content/uploads/FB_IMG_1514040553100.jpg',
        timing: 'December (Poush 7 - 9)',
        significance: 'Celebration of Bengal\'s rural arts, Baul singers, and Visva-Bharati university founded by Rabindranath Tagore.',
        keyRitual: 'Dawn prayers at Chhatimtala, open-air Baul and folk concerts, and tribal Santhal dance performances.',
        highlight: 'Artisans from all villages selling Kantha quilts, Dokra metal, and clay pottery.'
      },
      {
        name: 'Ganga Sagar Mela',
        image: 'https://www.theindia.co.in/blog/wp-content/uploads/2021/12/GangaSagar-Mela.jpg',
        timing: 'Makar Sankranti (January)',
        significance: 'Second largest spiritual gathering after Kumbh Mela, where pilgrims take a sacred dip at the confluence of the holy Ganga and Bay of Bengal.',
        keyRitual: 'Holy bath at Sagar Island followed by prayers at Kapil Muni Temple.',
        highlight: 'Famous proverb: "Shob teertho baar baar, Ganga Sagar ekbar".'
      }
    ],
    craftsAndAttire: {
      textiles: ['Baluchari Silk Sarees (Depicting Mythological scenes on Pallu)', 'Jamdani Muslin Sarees', 'Kantha Embroidery (Stitched patchwork)'],
      image: 'https://aditri.co.in/wp-content/uploads/2024/06/7-10.jpg',
      image: 'https://anvicouture.com/cdn/shop/files/3_22_202512_35_23AM.jpg?v=1742756575',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5Q1EiS92r_xPWAchedGZU1SpHAXtHpq56b9cl4jrKLh6WK-_mFMEQl9p&s=10',
      handicrafts: ['Bankura Terracotta Horses', 'Bishnupur Dokra Metal Art', 'Kalighat Folk Paintings', 'Sholapith (Pith carving) Durga crowns', 'Darjeeling Orthodox Tea'],
      traditionalMenAttire: 'Dhoti with silk or cotton Kurta (Panjabi), often accompanied by an Uttoriyo (shoulder scarf).',
      image: 'https://i.pinimg.com/474x/96/4c/b0/964cb001078f83cbb80e9e50cd5328ed.jpg',
      traditionalWomenAttire: 'Lal-Paad Saree (white/cream saree with bright red border) draped in traditional Bengali eight-fold style with a bunch of keys at the pallu.',
      image: 'https://i.pinimg.com/736x/78/ab/39/78ab394961465c8879e52cebf6926294.jpg',
      giTaggedCrafts: ['Banglar Rasogolla', 'Baluchari Saree', 'Santiniketan Leather Goods', 'Bankura Panchmura Terracotta Craft', 'Purulia Chhau Mask', 'Bengal Patachitra', 'Darjeeling Tea']
    },
    historyTimeline: [
      {
        era: '8th - 12th Century AD',
        title: 'Pala & Sena Dynasties',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Map_of_the_Pala_Empire.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
        description: 'The Buddhist Pala Empire patronized Nalanda and Vikramashila universities, exporting Mahayana art across East Asia.'
      },
      {
        era: '1757 AD',
        title: 'Battle of Plassey',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lord_Clive_meeting_with_Mir_Jafar_after_the_Battle_of_Plassey.jpg/960px-Lord_Clive_meeting_with_Mir_Jafar_after_the_Battle_of_Plassey.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
        description: 'Robert Clive defeated Nawab Siraj-ud-Daulah, beginning the British East India Company\'s territorial dominion over the Indian subcontinent.'
      },
      {
        era: '19th - Early 20th Century AD',
        title: 'The Bengal Renaissance & Freedom Struggle',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRukgtScC0viUCqYvPizqr2d0cQlWuiWnwLqiGN3I8ybqf42NB3hpqiUx1y&s=10',
        description: 'Cultural, artistic, and philosophical rebirth led by Raja Ram Mohan Roy, Ishwar Chandra Vidyasagar, Swami Vivekananda, Rabindranath Tagore, and Subhas Chandra Bose.'
      },
      {
        era: '1947 AD',
        title: 'Partition & Modern State of West Bengal',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqw5K3IWnBBayQsVWu0XG_ZDjtP8ifQx7kF6AxI0VPKxo8svR0X4z7BwA&s=10',
        image: 'https://cdn.thecultural.me/sob/bengalpartition1905-map_7d37018a63a04228937247825bbb99da_g.jpg',
        description: 'Following Indian independence and partition, West Bengal was integrated into the Indian Union with Kolkata as capital.'
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
    bannerImage: 'https://hblimg.mmtcdn.com/content/hubble/img/puri/mmt/destination/m_destination_puri_landscape_l_327_523.jpg',
    tagline: 'Soul of Incredible India, Konark Sun Temple & Jagannath Ratha Yatra',
    overview: 'Odisha is the land of sublime architectural grandeur, pristine Bay of Bengal coastline, and profound spiritual devotion. It is famed for the colossal stone chariot of the Konark Sun Temple, the divine Rath Yatra of Puri Jagannath, classical Odissi dance, Sambalpuri tie-and-dye ikats, and Pattachitra scrolls.',
    officialLanguage: 'Odia',
    spokenLanguages: ['Odia', 'Hindi', 'Santali', 'Kui', 'English'],
    stateAnimal: 'Sambar Deer',
    stateBird: 'Indian Roller (Blue Jay)',
    funFact: 'The kitchen at the Jagannath Temple in Puri is the largest traditional kitchen in the world, where 56 varieties of sacred food (Mahaprasad) are prepared daily for tens of thousands of devotees in 7 earthen pots stacked over a single firewood hearth.',
    monuments: [
      {
        name: 'Konark Sun Temple (Black Pagoda)',
        image:'https://tds.indianeagle.com/wp-content/uploads/2026/02/Konark-temple.png',
        type: 'Kalinga Architectural Colossus',
        century: '1250 AD (13th Century / King Narasimhadeva I)',
        location: 'Konark, Puri Coast',
        isUnesco: true,
        description: 'A colossal stone chariot with 24 carved sundial wheels pulled by seven horses celebrating Surya the Sun God, adorned with intricate erotic friezes and war elephants.',
        coordinates: [19.8876, 86.0945]
      },
      {
        name: 'Shree Jagannath Temple Puri',
        type: 'Kalinga Sacred Temple Citadel',
        century: '1161 AD (12th Century / Anantavarman Chodaganga Deva)',
        location: 'Puri',
        isUnesco: false,
        image: 'https://i.pinimg.com/736x/51/a2/ab/51a2ab09cc39e2deb1d9f482b673e9dc.jpg',
        description: 'One of the four sacred Char Dham shrines, where wooden idols of Lord Jagannath, Balabhadra, and Subhadra are worshipped and periodically reborn (Nabakalebara).',
        coordinates: [19.8048, 85.8179]
      },
      {
        name: 'Lingaraj Temple',
        type: 'Kalinga Deula Architecture',
        century: '11th Century AD (Somavamshi Dynasty)',
        location: 'Old Town, Bhubaneswar',
        isUnesco: false,
        image: 'https://temple.yatradham.org/public/Product/temple/temple_9JHrEaxc_202506301423160.webp',
        description: '180-foot towering sandstone temple dedicated to Harihara (combined form of Shiva and Vishnu), centerpiece of Bhubaneswar\'s 1,000 temple skyline.',
        coordinates: [20.2382, 85.8336]
      },
      {
        name: 'Udayagiri & Khandagiri Caves',
        type: 'Jain Rock-Cut Monastic Caves',
        century: '2nd Century BCE (King Kharavela of Chedi Dynasty)',
        location: 'Bhubaneswar',
        isUnesco: false,
        image: 'https://compass.rauias.com/wp-content/uploads/2024/07/image-24.png',
        description: 'Twin hills with 33 carved monastic cells containing the famous 17-line Hathigumpha inscription recording Kharavela\'s military campaigns.',
        coordinates: [20.2589, 85.7867]
      }
    ],
    artAndDance: [
      {
        name: 'Odissi Dance',
        image:'https://upload.wikimedia.org/wikipedia/commons/e/e7/Odissi_Performance_DS.jpg?utm_source=sa.wikipedia.org&utm_campaign=index&utm_content=original',
        type: 'Dance',
        origin: 'Temples of Odisha (Mahari & Gotipua traditions)',
        description: 'Classical Indian dance celebrated for its fluid torso movements, Tribhangi (three-bend sculptural body posture), and Chauka (grounded masculine stance).',
        instruments: ['Mardala (Pakhawaj)', 'Flute', 'Violin', 'Manjira', 'Sitar'],
        costumeHighlight: 'Sambalpuri / Bomkai silk saree with pleated front fan, silver filigree belt (Bengapatia), and Tahiya headpiece.'
      },
      {
        name: 'Gotipua & Chhau (Mayurbhanj)',
        image:'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-faqgiquug3cfb6n0a99pi04rj4-20180612030935.Medi.jpeg',
        type: 'Dance',
        origin: 'Raghurajpur & Mayurbhanj',
        description: 'Acrobatic temple dance by young boys in female attire, and martial Mayurbhanj Chhau performed without masks with dynamic sword maneuvers.',
        instruments: ['Mardala', 'Gini', 'Dhol', 'Dhumsa']
      },
      {
        name: 'Pattachitra & Palm Leaf Engraving (Tala Pattachitra)',
        image:'https://i.pinimg.com/736x/78/2d/a7/782da7a45a55f851c3b368da6c2cd4bc.jpg',
        type: 'Theatre',
        origin: 'Raghurajpur Heritage Crafts Village',
        description: 'Ancient scroll painting on treated cloth/palm leaves using natural stone pigments and tamarind gum depicting Jagannath legends.',
        giTag: true
      }
    ],
    cuisines: [
      {
        name: 'Puri Jagannath Mahaprasad (Chhappan Bhog)',
        image:'https://res.cloudinary.com/vgoh5qrn/image/upload/v1786985018/why-jagannath-temple-prasad-is-called-mahaprasad.jpg',
        category: 'Vegetarian',
        description: 'Sacred temple feast cooked in earthen pots including Kanika (sweet saffron rice), Dalma (lentils slow-cooked with pumpkin, raw banana, and roasted cumin), and Besara.',
        keyIngredients: ['Raw Banana', 'Pumpkin', 'Toor Dal', 'Panch Phoron', 'Desi Ghee', 'Grated Coconut', 'Roasted Cumin Powder']
      },
      {
        name: 'Pakhala Bhata with Machha Bhaja',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQokUTbwWcPduxT_rz6NgUPGaUv2MDDN3C_c5mWdQSUbnIKhG3BM7f8rWw&s=10',
        category: 'Vegetarian',
        description: 'Fermented water rice tempered with roasted cumin, mustard seeds, curry leaves, and green chilies, served with crispy fried fish, saga bhaja, and badi chura.',
        keyIngredients: ['Cooked Rice', 'Water', 'Curd', 'Mustard Seeds', 'Curry Leaves', 'Badi (Urad Dal Crisp Crumbles)']
      },
      {
        name: 'Chhena Poda (Burnt Cheese Cake)',
        image:'https://www.vidhyashomecooking.com/wp-content/uploads/2020/11/chennapoda-683x1024.jpg',
        category: 'Dessert',
        description: 'India\'s first native cheesecake, made by kneading fresh chhena with sugar, cardamom, and cashews, wrapped in sal leaves and slow-baked over coal until caramelized brown.',
        keyIngredients: ['Fresh Cottage Cheese (Chhena)', 'Sugar / Jaggery', 'Semolina (Suji)', 'Cardamom', 'Cashews', 'Ghee'],
        giTag: true
      },
      {
        name: 'Rasabali & Khira Gaja',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAi7mrtM_jlP46lAZj0TdGZhwre8_Nw91fTUphiIaonudknVGpEKLMOQ0&s=10',
        category: 'Dessert',
        description: 'Deep-fried flattened chhena patties soaked in thick cardamom-infused reduced milk (from Baladevjew Temple, Kendrapara).',
        keyIngredients: ['Chhena', 'Reduced Milk (Rabri)', 'Cardamom', 'Sugar', 'Flour'],
        giTag: true
      }
    ],
    festivals: [
      {
        name: 'Puri Rath Yatra (Chariot Festival)',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2U744D9fAMRHAtVWzl8d9gKEqVtd0wU4-6oI_bqs0YyI2tAv39PTeO4lB&s=10',
        timing: 'Ashadha Shukla Dwitiya (June - July)',
        significance: 'World\'s oldest and grandest chariot festival where Lord Jagannath, Balabhadra, and Subhadra emerge from the temple on massive hand-built wooden chariots.',
        keyRitual: 'Chhera Pahanra (King of Puri sweeping the chariot floors with a golden broom) and pulling of the 45-foot Nandighosha chariot by millions.',
        highlight: 'Sea of millions pulling massive colorful wooden chariots to Gundicha Temple.'
      },
      {
        name: 'Konark Dance Festival & Sand Art Festival',
        image:'https://www.tourmyindia.com/states/odisha/images/konark-dance-festival1-1.jpg',
        timing: 'December 1 - 5',
        significance: 'Open-air classical dance festival against the illuminated backdrop of the Sun Temple, accompanied by international sand art on Chandrabhaga Beach.',
        keyRitual: 'Nightly recitals by world masters of Odissi, Bharatanatyam, Kathak, and Kuchipudi.',
        highlight: 'Intricate sand sculptures crafted by Padmashree Sudarsan Pattnaik and global artists.'
      },
      {
        name: 'Bali Jatra Cuttack',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmviWSn_aFBdnbBVWqGSPm8azVPq7S9hm_LiuD-aK-05zV1QDnGD-xRDm5&s=10',
        timing: 'Kartik Purnima (November)',
        significance: 'Celebration of ancient Kalinga\'s maritime merchants (Sadhabas) who sailed in Boitas to Bali, Java, and Sumatra for trade.',
        keyRitual: 'Floating colorful paper and bark boats (Boita Bandana) at sunrise in the Mahanadi River.',
        highlight: 'Asia\'s largest open-air trade fair on the banks of the Mahanadi.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Sambalpuri Bandha Saree (Double Ikat)', 'Bomkai Silk & Cotton', 'Berhampuri Patta (Kumbha borders)'],
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXLTakHaofr_lsa_4n9QQt2T7uFyVKOhybrWFPIafg0NxaOsUxLRYpL94&s=10',
      image:'https://content-d11d.kxcdn.com/media/catalog/product/a/d/adi492.5342.jpg',
      image:'https://cdn.shopaccino.com/nirguna/products/tri3dnirguna-2021071514silkset290sowmyasriside2021-7-15-19-28-491600x2400-173281_m.jpg?v=731',
      handicrafts: ['Pattachitra Paintings of Raghurajpur', 'Cuttack Tarakasi (Silver Filigree Jewelry)', 'Pipili Appliqué Work (Chandua)', 'Dhokra Metal Casting'],
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWNZ6786fYWxoWTVwRrfBT5Sqf-9JLFNnWsxDXe9X7Rq31h2kSm0rlYob&s=10',
      image:'https://static.toiimg.com/thumb/msid-108183267,width-1280,height-720,resizemode-4/108183267.jpg',
      image:'https://gaatha.org/wp-content/uploads/puri-applique-craft.jpg.webp',
      image:'https://vajiramias.sgp1.cdn.digitaloceanspaces.com/wp/current-affairs/2025/03/what_is_dokra_metal_crafts.jpg?v=2',
      traditionalMenAttire: 'Dhoti with Kurta and Gamucha draped over the shoulder.',
      image:'https://www.indiatravel.app/wp-content/uploads/2024/10/Pata-Dhoti-227x300.png',
      traditionalWomenAttire: 'Sambalpuri Ikat or Bomkai Silk Saree with distinctive temple border and silver filigree ornaments.',
      image:'https://www.bunkarvalley.com/wp-content/uploads/2025/02/Tribal-Fashion-of-Odisha.jpg',
      giTaggedCrafts: ['Odisha Rasagola', 'Sambalpuri Bandha Saree', 'Kotpad Handloom', 'Odisha Pattachitra', 'Pipili Applique Work', 'Cuttack Silver Filigree (Tarakasi)', 'Kandhamal Haldi (Turmeric)']
    },
    historyTimeline: [
      {
        era: '261 BCE',
        title: 'The Kalinga War & Emperor Ashoka',
        image:'https://cdn.britannica.com/02/247602-004-F3D2F0F0.jpg',
        description: 'The monumental battle fought along the Daya River near Dhauli prompted Emperor Ashoka to renounce violence and adopt Buddhism.'
      },
      {
        era: '1st Century BCE',
        title: 'Empire of Mahameghavahana Kharavela',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6tRoDcav_oMf1eviZkH-fsnHmByori42svBkgui8myQ&s=10',
        description: 'Kalinga became a dominant military and commercial empire with expeditions across India and deep maritime ties with Southeast Asia.'
      },
      {
        era: '11th - 13th Century AD',
        title: 'Eastern Ganga Empire & Golden Temple Age',
        image:'https://upload.wikimedia.org/wikipedia/commons/6/6d/Eastern_Ganga_fanam_Chodaganga.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
        description: 'Constructed the Jagannath Temple at Puri and the Sun Temple at Konark, defeating foreign incursions and patronizing Sanskrit and Odia poetry.'
      },
      {
        era: '1936 AD',
        title: 'First Province Formed on Linguistic Basis',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPuH9EyG08oxQ2gT88v6dvVX3YDW6Q6MW3dq1ivmJYek0tlP5EqAr_UG7N&s=10',
        description: 'Odisha was constituted as a separate province in British India on 1 April 1936 through the efforts of Utkal Gourav Madhusudan Das (celebrated as Utkal Divas).'
      }
    ]
  },
  {
    id: 'bihar',
    name: 'Bihar',
    capital: 'Patna',
    region: 'East',
    coordinates: [25.0961, 85.3131],
    zoomLevel: 7,
    bannerImage: 'https://static.toiimg.com/thumb/95509969/Bodhi-Tree-in-Bodh-Gaya-Bihar.jpg?width=1200&height=900',
    tagline: 'Cradle of Religions, Nalanda University & Sacred Mahabodhi Bodhi Tree',
    overview: 'Bihar is one of the greatest civilizational centers in world history. It is the sacred land where Siddhartha Gautama attained enlightenment beneath the Bodhi Tree in Bodh Gaya, where Lord Mahavira attained Nirvana, where Nalanda—the world\'s first residential university—flourished, and where Emperor Ashoka ruled ancient Magadha.',
    officialLanguage: 'Hindi, Maithili',
    spokenLanguages: ['Bhojpuri', 'Maithili', 'Magahi', 'Angika', 'Hindi', 'Urdu'],
    stateAnimal: 'Gaur (Mithun)',
    stateBird: 'House Sparrow',
    funFact: 'Nalanda University in Bihar, founded in the 5th century AD, housed over 10,000 international students and 2,000 teachers with a nine-story library called "Dharmaganja" containing millions of manuscripts.',
    monuments: [
      {
        name: 'Mahabodhi Temple Complex',
        type: 'Ancient Brick Buddhist Sanctum',
        century: '3rd Century BCE (Ashoka) / Rebuilt 5th - 6th Century CE',
        location: 'Bodh Gaya',
        isUnesco: true,
        image: 'https://cdn.britannica.com/12/94612-050-B4EEB84A/temple-Buddhist-Mahabodhi-Bihar-India-Bodh-Gaya.jpg',
        description: 'One of the earliest and best-preserved brick temples in India marking the holy spot where Lord Buddha attained supreme enlightenment under the sacred Bodhi Tree.',
        coordinates: [24.6960, 84.9914]
      },
      {
        name: 'Ruins of Nalanda Mahavihara',
        type: 'Ancient International Residential University',
        century: '5th - 12th Century CE (Gupta & Pala Dynasties)',
        location: 'Nalanda District',
        isUnesco: true,
        image: 'https://deih43ym53wif.cloudfront.net/nalanda-india-shutterstock_308393690_936165c6cc.jpeg',
        description: 'Vast archaeological excavation revealing 11 monasteries and 6 brick temples where Xuanzang, Aryabhata, and Nagarjuna taught and studied.',
        coordinates: [25.1357, 85.4452]
      },
      {
        name: 'Barabar Caves',
        type: 'Oldest Surviving Rock-Cut Caves in India',
        century: '3rd Century BCE (Emperor Ashoka & Dasharatha)',
        location: 'Jehanabad District',
        isUnesco: false,
        image: 'https://organiser.org/wp-content/uploads/2026/07/whatsapp-image-2026-07-21-at-4.30.00-pm.webp',
        description: 'Granite caves featuring mirror-like Mauryan wall polish and acoustic resonance constructed for the ancient Ajivika sect.',
        coordinates: [25.0050, 85.0620]
      },
      {
        name: 'Golghar',
        type: 'Beehive Shaped Granary',
        century: '1786 AD (Captain John Garstin)',
        location: 'Patna',
        isUnesco: false,
        image: 'https://cdn.yatrigo.com/wb5us2os9u.webp',
        description: 'Colossal pillarless hemispherical grain silo with two spiral staircases of 145 steps winding to the summit overlooking the River Ganga.',
        coordinates: [25.6200, 85.1436]
      }
    ],
    artAndDance: [
      {
        name: 'Madhubani (Mithila) Painting',
        image: 'https://tse4.mm.bing.net/th/id/OIP.nKY9YqBJ-MAoI3JUPjrETgHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        type: 'Theatre',
        origin: 'Mithila Region (Jitwarpur & Ranti)',
        description: 'UNESCO-celebrated folk art created using twigs, matchsticks, and fingers with natural dyes, characterized by eye-catching geometrical patterns depicting Hindu deities.',
        giTag: true
      },
      {
        name: 'Bidesia Folk Theatre',
        image: 'https://tse2.mm.bing.net/th/id/OIP.wZkH2m4VM5dtCCCsG7zOaQHaEO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        type: 'Theatre',
        origin: 'Bhojpur (Bhikhari Thakur)',
        description: 'Poignant musical folk theatre created by "Shakespeare of Bhojpuri" Bhikhari Thakur, depicting the emotional pains of rural migrant laborers and women.',
        instruments: ['Dholak', 'Harmonium', 'Jhal']
      },
      {
        name: 'Jat-Jatin Dance',
        image: 'https://3.bp.blogspot.com/-uxK38rJBKU0/WsnEb0B6CaI/AAAAAAAAI-A/IRvBSfjHmCA-2gc3f5upDiBfYYNVgHfgwCLcBGAs/w1600/jat%2Bjatin%2Bdance.jpg',
        type: 'Dance',
        origin: 'Mithila & Koshi',
        description: 'Monsoon drama-dance performed by women under moonlit nights narrating the trials and love of legendary lovers Jat and Jatin.',
        instruments: ['Dholak', 'Manjira']
      }
    ],
    cuisines: [
      {
        name: 'Litti Chokha with Desi Ghee',
        image: 'https://tse1.explicit.bing.net/th/id/OIP.UQuR-bK_P6Af_JyMpa6o-gHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        category: 'Vegetarian',
        description: 'Whole wheat dough balls stuffed with spiced roasted gram flour (Sattu), ajwain, kalonji, and mustard oil, roasted over cow dung charcoal and dipped in pure ghee; served with roasted eggplant-tomato-potato mash (Chokha).',
        keyIngredients: ['Sattu (Roasted Gram Flour)', 'Wheat Flour', 'Mustard Oil', 'Ajwain & Kalonji', 'Eggplant', 'Tomatoes', 'Desi Ghee']
      },
      {
        name: 'Champaran Ahuna Mutton (Handi Meat)',
        image: 'https://ranveerbrar.com/wp-content/uploads/2021/10/Handi-Gosht-scaled.jpg',
        category: 'Non-Vegetarian',
        description: 'Tender goat meat slow-cooked in sealed earthen clay handis over glowing coal without water, simmering in mustard oil, whole garlic pods, and robust spices.',
        keyIngredients: ['Mutton', 'Whole Garlic Pods', 'Mustard Oil', 'Earthen Pot Seal', 'Whole Roasted Spices', 'Onions']
      },
      {
        name: 'Khaja of Silao & Thekua',
        image: 'https://exotikalhub.com/wp-content/uploads/2021/09/Khaja-2-1.jpg',
        category: 'Dessert',
        description: 'Silao Khaja: 52-layered crispy multi-layered wafer sweet dipped in sugar syrup; and Thekua: auspicious Chhath Puja cookie made of whole wheat, jaggery, ghee, and coconut.',
        keyIngredients: ['Wheat Flour / Maida', 'Jaggery (Gud)', 'Desi Ghee', 'Dry Coconut', 'Fennel Seeds', 'Cardamom'],
        giTag: true
      },
      {
        name: 'Sattu Sharbat',
        image: 'https://res.cloudinary.com/roundglass/image/upload/w_1600,ar_16:9,c_fill,g_face,f_auto/v1693395945/rg/collective/media/rg-sattu-sharbat-livingapp-16x9-1693395944398.jpg',
        category: 'Beverage',
        description: 'Nutritious cooling energy beverage of roasted gram flour mixed with cold water, roasted cumin, black salt, lemon juice, and green chilies.',
        keyIngredients: ['Sattu', 'Roasted Cumin Powder', 'Black Salt (Kala Namak)', 'Lemon Juice', 'Green Chilies']
      }
    ],
    festivals: [
      {
        name: 'Chhath Puja',
        image: 'https://img.republicworld.com/all_images/chhath-pooja-2025-1761213211934-16_9.webp',
        timing: 'Kartik Shukla Shashthi (October - November / 4 Days)',
        significance: 'Most sacred, ancient, and austere festival of Bihar dedicated to Surya (The Sun God) and Chhathi Maiya for longevity and prosperity.',
        keyRitual: 'Nahay-Khay, Kharna (fasting), Sandhya Arghya (standing chest-deep in rivers offering Arghya to setting Sun), and Usha Arghya to rising Sun.',
        highlight: 'Illuminated Ganga ghats filled with millions holding soop baskets laden with Thekua, sugarcane, and seasonal fruits in total purity.'
      },
      {
        name: 'Sonepur Cattle Fair (Harihar Kshetra Mela)',
        image: 'https://www.india-tours.com/images/festivals/sonepur-mela/sonepur-mela1.jpg',
        timing: 'Kartik Purnima (November - December)',
        significance: 'Asia\'s largest traditional animal and cultural fair held at the confluence of holy rivers Ganga and Gandak since Mauryan times.',
        keyRitual: 'Holy bath at Harihar Nath temple and livestock exhibitions.',
        highlight: 'Historic carnival with decorated elephants, horses, folk theatres, and circus pavilions.'
      },
      {
        name: 'Buddha Jayanti (Bodh Gaya)',
        image: 'https://patnapress.com/wp-content/uploads/2026/05/Buddha-Purnima-@Procession-Final-1.jpg',
        timing: 'Vaisakha Purnima (May)',
        significance: 'Celebration of the birth, enlightenment, and Mahaparinirvana of Gautama Buddha under the sacred Bodhi Tree.',
        keyRitual: 'Monastic processions of international Buddhist monks, lighting of thousands of butter lamps, and chanting of Tripitaka sutras.',
        highlight: 'Global congregation of Buddhist monks from 30+ nations in saffron robes.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Bhagalpuri Tussar Silk (The Silk City)', 'Sujani Embroidery (Storytelling Quilts)', 'Bawan Buti Handloom Weaves'],
      image: 'https://th.bing.com/th/id/R.953a0e2ad04ccd65c0f95c7f9764622c?rik=whki%2fyft0nSv7Q&riu=http%3a%2f%2fwww.banarasee.in%2fcdn%2fshop%2ffiles%2fIMG_9878.jpg%3fv%3d1685679822&ehk=h3tiwinpvxjCxGCcqVbU%2b0UzHKP7rHPANdqUfxoKMxc%3d&risl=&pid=ImgRaw&r=0',
      image: 'https://anjushree.co.in/assets/sujani-embroidery.CA1u4jgF.jpg',
      image: 'https://tse1.mm.bing.net/th/id/OIP.M5rpVUDCLB_58aV5UWfvSAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      handicrafts: ['Madhubani Paintings on Handmade Paper', 'Sikki Grass Craft (Golden Grass woven boxes)', 'Manjusha Angika Art (Snake Paintings)', 'Khatwa Appliqué Work', 'Stone Carvings of Gaya'],
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/332467286/EK/OO/QW/80080160/painting-p-3-1000x1000.jpeg',
      image: 'https://th.bing.com/th/id/R.296bb2940902dbdf97721da7134c8af3?rik=RM2ZOBInd2M5kQ&riu=http%3a%2f%2fpunarnawa.com%2fcdn%2fshop%2ffiles%2fpunarnawa-soul-of-artistry-kauna-grass-basket-default-title-moonj-grass-storage-box-32440494063673.jpg%3fv%3d1705104468&ehk=GLP1drjlS96UZQNyVWFQ05raQZPcFj%2bTM2SrPUbONdc%3d&risl=&pid=ImgRaw&r=0',
      image: 'https://tse3.mm.bing.net/th/id/OIP.gNjJBGdZkXfaKdkwBY0mCAHaFb?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      image: 'https://tse3.mm.bing.net/th/id/OIP.qvGUkB8rZpKWttowhnAAEgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      image:'https://c8.alamy.com/comp/2SRDC3C/carved-buddha-on-mahabodhi-temple-wall-bodh-gaya-bihar-india-asia-2SRDC3C.jpg',
      traditionalMenAttire: 'Dhoti-Kurta with Mirjai jacket and Angavastram (Gamchha) draped around the neck.',
      image: 'https://tse4.mm.bing.net/th/id/OIP.qM_gjhMTPlZnjedTLX7BYQHaJ3?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      traditionalWomenAttire: 'Bhagalpuri Tussar Silk Saree or Seedha-Pallu cotton saree with traditional Tikli and Bichhiya jewelry.',
      image: 'https://www.loomfolks.com/wp-content/uploads/2021/01/Pleasing-Pearl-White-Pure-Desi-Bhagalpuri-Tussar-Silk-Saree.jpg',
      giTaggedCrafts: ['Madhubani Paintings', 'Bhagalpur Silk', 'Silao Khaja', 'Sujani Embroidery', 'Khatwa Craft', 'Shahi Litchi of Muzaffarpur', 'Zardalu Mango', 'Katarni Rice', 'Magahi Paan']
    },
    historyTimeline: [
      {
        era: '6th - 3rd Century BCE',
        title: 'Magadha Empire, Lord Buddha & Lord Mahavira',
        image: 'https://thumbs.dreamstime.com/b/statue-lord-mahavira-ascetic-posture-detailed-illustration-lord-mahavira-jain-tirthankara-ascetic-posture-365315354.jpg',
        description: 'Magadha unified northern India from Pataliputra; Siddhartha Gautama attained Enlightenment at Bodh Gaya, and Vardhamana Mahavira founded Jainism.'
      },
      {
        era: '321 - 185 BCE',
        title: 'Maurya Empire & Emperor Ashoka',
        image: 'https://img.freepik.com/photos-premium/ashoka-ancien-empereur-empire-maurya_938807-619.jpg',
        description: 'Chandragupta Maurya and Chanakya established the empire from Pataliputra; Ashoka the Great spread Dhamma and the Lion Capital emblem across Asia.'
      },
      {
        era: '320 - 550 CE',
        title: 'Gupta Empire & Nalanda Mahavihara',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Nalanda%2C_Buddhist_university_04.jpg/500px-Nalanda%2C_Buddhist_university_04.jpg',
        description: 'The Golden Age of Indian science, astronomy (Aryabhata), and establishment of the world\'s greatest residential university at Nalanda.'
      },
      {
        era: '1917 AD',
        title: 'Champaran Satyagraha',
        image: 'https://tse3.mm.bing.net/th/id/OIP.0h84L3iTb3nP2r1U73i8owHaEZ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        description: 'Mahatma Gandhi launched India\'s first civil disobedience movement in Champaran, Bihar, protesting the forced cultivation of Indigo (Tinkathia system).'
      }
    ]
  },
  {
    id: 'jharkhand',
    name: 'Jharkhand',
    capital: 'Ranchi',
    region: 'East',
    coordinates: [23.6102, 85.2799],
    zoomLevel: 7,
    bannerImage: 'https://s7ap1.scene7.com/is/image/incredibleindia/jonha-falls-ranchi-jharkhand-new?qlt=82&ts=1727010871094',
    tagline: 'Land of Forests, Mineral Wealth, Birsa Munda & Sohrai Tribal Murals',
    overview: 'Jharkhand ("Land of Forests") is a mineral-rich highland celebrated for its sacred Sal tree groves, roaring waterfalls (Hundru & Jonha), revolutionary tribal heroes like Bhagwan Birsa Munda, the sacred Jain hill at Parasnath, and prehistoric Sohrai and Khovar cave murals.',
    officialLanguage: 'Hindi',
    spokenLanguages: ['Santhali', 'Mundari', 'Ho', 'Khortha', 'Kurukh', 'Nagpuri', 'Hindi'],
    stateAnimal: 'Indian Elephant',
    stateBird: 'Asian Koel',
    funFact: 'Shikharji (Parasnath Hill) in Giridih district, Jharkhand, is the most sacred pilgrimage destination for Jainism, where 20 out of the 24 Tirthankaras attained Moksha (Nirvana).',
    monuments: [
      {
        name: 'Baidyanath Dham (Deoghar)',
        image:'https://upload.wikimedia.org/wikipedia/commons/e/e2/Baba_Dham.jpg?utm_source=hi.wikipedia.org&utm_campaign=index&utm_content=original',
        type: 'Ancient Shiva Jyotirlinga Complex',
        century: 'Ancient Antiquity (Rebuilt 1596 AD)',
        location: 'Deoghar',
        isUnesco: false,
        description: 'One of the 54 Shakti Peethas and 12 sacred Jyotirlingas where Ravana worshipped Lord Shiva; epicenter of the world-famous Shravani Mela.',
        coordinates: [24.4925, 86.7001]
      },
      {
        name: 'Parasnath Hill (Shikharji)',
        image:'https://www.tourmyindia.com/images/shikharji-temple-jharkhand.jpg',
        type: 'Sacred Jain Summit & Temples',
        century: 'Ancient Antiquity',
        location: 'Giridih District',
        isUnesco: false,
        description: 'Highest peak in Jharkhand (1,365 m), sacred summit adorned with white marble Jain Tirthankara shrines overlooking the Chota Nagpur plateau.',
        coordinates: [23.9628, 86.1308]
      },
      {
        name: 'Jagannath Temple Ranchi',
        type: '17th Century Kalinga Style Hilltop Temple',
        century: '1691 AD (King Barkagarh Jagannathpur)',
        location: 'Dhurwa, Ranchi',
        isUnesco: false,
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/17th_century_Jagannath_temple_Ranchi_Jharkhand_-_9.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
        description: 'Perched on a scenic hillock overlooking Ranchi city, built in the architectural pattern of Puri Jagannath Temple, holding annual Rath Yatra.',
        coordinates: [23.3283, 85.2817]
      }
    ],
    artAndDance: [
      {
        name: 'Sohrai & Khovar Painting',
        image:'https://indianfolkart.org/wp-content/uploads/2025/10/Sohrai-Painting-Renuka-01.jpg',
        type: 'Theatre',
        origin: 'Hazaribagh District',
        description: 'GI-tagged indigenous mural art painted on mud walls using natural ochre, black manganese, and white clay depicting wildlife, birds, and fertility trees.',
        giTag: true
      },
      {
        name: 'Seraikella Chhau Dance',
        image:'https://www.sahapedia.org/sites/default/files/styles/sp_page_banner_800x800/public/Gopal-Prasad-Dubey---Chandrabhaga_0.jpg?itok=_fgaWVVR',
        type: 'Dance',
        origin: 'Seraikela Princely State',
        description: 'UNESCO-inscribed classical masked dance known for subtle body tilts (Chalis) and expressive pastel-colored papier-mâché masks depicting nature and myth.',
        instruments: ['Dhol', 'Nagada', 'Shehnai', 'Bansi']
      },
      {
        name: 'Paika & Jhumar Dance',
        image:'https://jharkhandculture.com/sites/default/files/inline-images/paika.jpg',
        type: 'Martial Art',
        origin: 'Munda & Santhal Warriors',
        description: 'Martial dance where men brandishing shields and glittering swords perform battle drills with towering feathered crests to fast-paced beats.',
        instruments: ['Mandar', 'Dhol', 'Kartal', 'Thali']
      }
    ],
    cuisines: [
      {
        name: 'Dhuska with Ghugni & Aloo Chana',
        image:'https://i0.wp.com/indroyc.com/wp-content/uploads/2024/11/dhuska-fp.jpg?fit=686%2C386&ssl=1&w=640',
        category: 'Street Food',
        description: 'Crispy golden deep-fried savory pancakes made from soaked rice and chana dal batter, served with spicy black chickpea curry and green chutney.',
        keyIngredients: ['Rice', 'Chana Dal', 'Urad Dal', 'Black Chickpeas (Kala Chana)', 'Garlic', 'Green Chilies', 'Mustard Oil']
      },
      {
        name: 'Rugra & Bamboo Shoot Curry (Karil)',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YwMMXW7Gq3J0hc-6-YSnAdpN-5CsSDTTzy7xwGcEIOuWiQbhNUcUEzBZ&s=10',
        category: 'Vegetarian',
        description: 'Rare wild forest mushroom (Rugra) and tender fermented bamboo shoot curry slow-cooked with whole spices during the monsoons.',
        keyIngredients: ['Wild Forest Mushrooms (Rugra)', 'Bamboo Shoots (Karil)', 'Mustard Paste', 'Garlic', 'Coriander Seeds']
      },
      {
        name: 'Arsa Roti & Handia',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSRLJCb9IbWBLz0d0G9HMiuFYE8PllqDGNAzLMF8RX8hXKyl_IJLxXeAC8&s=10',
        category: 'Dessert',
        description: 'Traditional festive sweet made of powdered soaked rice flour cooked with melted jaggery syrup and fried until golden and chewy.',
        keyIngredients: ['Rice Flour', 'Jaggery', 'Fennel Seeds', 'Sesame Seeds', 'Mustard Oil / Ghee']
      }
    ],
    festivals: [
      {
        name: 'Sarhul Festival',
        image:'https://www.bunkarvalley.com/wp-content/uploads/2025/07/Sarhul-Festival.jpg';
        timing: 'Chaitra Shukla Tritiya (Spring - March/April)',
        significance: 'Most important nature festival of the Adivasis (Oraon, Munda, Ho, Santhal) celebrating the blooming of the sacred Sal tree (Sarjom ba).',
        keyRitual: 'Village priest (Pahan) conducts prayers at the sacred grove (Jaher / Sarna), distributing Sal blossoms to every household.',
        highlight: 'Community dancing in traditional red-bordered white clothes with Sal flowers in hair.'
      },
      {
        name: 'Shravani Mela Deoghar',
        image:'https://judgementsincriminallaw.wordpress.com/wp-content/uploads/2020/07/images-33.jpeg?w=743',
        timing: 'Shravana (July - August / One Month)',
        significance: 'World\'s longest continuous religious procession where millions of Kanwariyas in saffron walk 105 km barefoot carrying holy Ganga water from Sultanganj to Baba Baidyanath temple.',
        keyRitual: 'Chanting "Bol Bam" along the 105-km pedestrian pilgrimage path and offering Ganga Jal to the Jyotirlinga.',
        highlight: 'Sea of millions in saffron attire walking day and night with decorated bamboo Kanwars.'
      },
      {
        name: 'Karma Festival',
        image:'https://www.sahapedia.org/sites/default/files/styles/sp_inline_images/public/inline-images/Karma_Pooja%20-%20Gurpreet%20Singh%20Ranchi%2C%20Wikimedia%20commons_0.jpg?itok=_b6kbL2r',
        timing: 'Bhadra Shukla Ekadashi (August - September)',
        significance: 'Celebration of fertility, sisterly love, and the sacred Karam tree that protects wealth and harvest.',
        keyRitual: 'Planting branches of the Karam tree in the village courtyard, all-night singing of Karam geet, and dancing around the branch.',
        highlight: 'Sisters offering sprouted barley grains (Jawa) to their brothers for long life.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Kuchai Silk (Wild Organic Tussar Silk)', 'Santhali Panchi and Parhan Handwoven Attire'],
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvrKGmw32cCyN-lrVD0Iy9TQ40qepZkdkN70VgVQHpiXT2Cf-7xlQsPx3&s=10',
      image:'https://www.utsavpedia.com/wp-content/uploads/2013/07/Traditional-Costume-of-Jharkhand3.jpg',
      handicrafts: ['Sohrai and Khovar Wall Paintings', 'Dhokra Brass Craft (Malhor tribe)', 'Bamboo & Sal Wood Carvings', 'Seraikela Chhau Masks'],
      image:'https://imp-art.org/wp-content/uploads/2025/07/sohrai-painting-10L.jpg',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxwcpSfhRrMLcRffoOmKoHLV0hT9hdX9AkYCkCkxOzKY1sn_WptkzZxci&s=10',
      image:'https://img1.exportersindia.com/product_images/bc-full/dir_148/4431941/bamboo-handicrafts-1499766381-3121014.jpeg',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRle2Kvp9jKRP82quSWF5EHeXUnrlunVrYBl5dCsEOhmhiIMC-aAFV4LkA&s=10',
      traditionalMenAttire: 'Bhagwan (cotton loinwrap) or Kurta-Pajama with traditional gamcha.',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71au6mhAxJjAfvmjN-2RFXLcAlMYCjq7LYgPD2EPPAbxmNgb44UJyzk25&s=10',
      traditionalWomenAttire: 'Panchi-Parhan (traditional red and white woven two-piece cotton drape) with silver Hansuli necklace and brass armlets.',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSagH19JquwUKjkpDVlPd15bmJ8Dc7LQ_iCBRYe-yup9VBB_ZwrIaNlizoX&s=10',
      giTaggedCrafts: ['Sohrai - Khovar Painting', 'Kuchai Silk']
    },
    historyTimeline: [
      {
        era: 'Prehistoric Era',
        title: 'Isko Rock Art & Ancient Megaliths',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMA6GFkh_2fVpMU-9eujduOzMACprgzC2h4YmL9ZbnCAAelzVsKZV98HkR&s=10',
        description: 'Hazaribagh caves reveal rock art dating back over 10,000 years depicting bulls, deer, and ancient geometric sun symbols.'
      },
      {
        era: '1855 - 1856 AD',
        title: 'Santhal Hool (Rebellion)',
        image:'https://upload.wikimedia.org/wikipedia/commons/2/2c/Attack_by_600_Santhals_upon_a_party_of_50_sepoys%2C_40th_regiment_native_infantry.jpg?utm_source=hi.wikipedia.org&utm_campaign=index&utm_content=original',
        description: 'Brothers Sidhu and Kanhu Murmu mobilized over 60,000 Santhals in one of the fiercest armed rebellions against British colonial exploitation.'
      },
      {
        era: '1899 - 1900 AD',
        title: 'Ulgulan (The Great Tumult) of Birsa Munda',
        image:'https://i0.wp.com/iascurrentaffairs.com/wp-content/uploads/2026/06/Birsa-Munda-and-His-Legacy.png?fit=600%2C400&ssl=1',
        description: 'Bhagwan Birsa Munda mobilized tribal warriors demanding "Munda Raj" and autonomy, leading to the landmark Chota Nagpur Tenancy Act.'
      },
      {
        era: '2000 AD',
        title: 'Statehood of Jharkhand',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ZnxOSzoqAT3BO7uLKVQyNZlIlmpjlVh9LA-Md7H_WZuadvVl64e_0BI&s=10',
        description: 'Carved out of southern Bihar on 15 November 2000 (birth anniversary of Birsa Munda) as India\'s 28th state.'
      }
    ]
  },
  {
    id: 'assam',
    name: 'Assam',
    capital: 'Dispur (Guwahati)',
    region: 'North-East',
    coordinates: [26.2006, 92.9376],
    zoomLevel: 7,
    bannerImage: 'https://www.ibef.org/assets/images/states/Assam-2.jpg',
    tagline: 'Gateway to the Northeast, One-Horned Rhino & Golden Muga Silk',
    overview: 'Assam is the scenic gateway to Northeast India, nourished by the majestic Brahmaputra River. It is celebrated for the one-horned rhinoceros of Kaziranga, the mystical Kamakhya Devi temple, the high-energy Bihu harvest dance, golden Muga silk, and world-renowned malty Assam black tea.',
    officialLanguage: 'Assamese, Bodo',
    spokenLanguages: ['Assamese', 'Bodo', 'Bengali', 'Mising', 'Karbi', 'Hindi', 'English'],
    stateAnimal: 'One-horned Rhinoceros',
    stateBird: 'White-winged Wood Duck (Deo Hah)',
    funFact: 'Majuli on the Brahmaputra River in Assam is the largest river island in the world and the historic center of Vaishnavite Satra monastic culture founded by Srimanta Sankardev in the 15th century.',
    monuments: [
      {
        name: 'Kamakhya Temple',
        image:'https://upload.wikimedia.org/wikipedia/commons/4/48/Kamakhya_Temple_-_DEV_8829.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
        type: 'Nilachal Style Tantric Shakti Peetha',
        century: '8th Century AD (Rebuilt 1565 AD / King Nara Narayana)',
        location: 'Nilachal Hill, Guwahati',
        isUnesco: false,
        description: 'One of the oldest and most revered of the 51 Shakti Peethas celebrating the power of creation; epicenter of the annual Ambubachi Mela.',
        coordinates: [26.1664, 91.7054]
      },
      {
        name: 'Kaziranga National Park',
        type: 'UNESCO Natural World Heritage Site',
        image: 'https://www.insideindianjungles.com/wp-content/uploads/2019/07/kaziranga.jpg',
        century: 'Conservation Reserve since 1905',
        location: 'Golaghat & Nagaon Districts',
        isUnesco: true,
        description: 'Sanctuary hosting two-thirds of the world\'s great one-horned rhinoceroses, alongside wild water buffaloes, swamp deer, and elephants in the Brahmaputra floodplains.',
        coordinates: [26.5775, 93.1711]
      },
      {
        name: 'Rang Ghar & Talatal Ghar',
        type: 'Ahom Royal Amphitheatre & Multi-Story Palace',
        century: '1744 - 1751 AD (Ahom Dynasty / King Pramatta Singha)',
        location: 'Sivasagar',
        isUnesco: false,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYyjqJ17oqYZdVjwT_AUXSwFxSWIYvJ4YrOcWn-asVwsCSwBNxPhqEY-g&s=10',
        description: 'Two-story royal sports pavilion with an inverted boat-shaped roof used by Ahom kings to watch buffalo fights; and underground secret tunnel networks.',
        coordinates: [26.9631, 94.6319]
      }
    ],
    artAndDance: [
      {
        name: 'Bihu Dance',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHxQ6hTJisrPkGDkmmrmbe5EZwYazkKvEdb4S7-MuaFpLgl1kEkl2Ns8&s=10',
        type: 'Dance',
        origin: 'Indigenous Assamese Agrarian Culture',
        description: 'Energetic spring harvest dance characterized by rapid hand movements, waist swaying (Bihu Hiyar), and singing love ballads to the beats of the Dhol and Pepa horn.',
        instruments: ['Assamese Dhol', 'Pepa (Buffalo Horn Trumpet)', 'Gogona (Reed Mouth Harp)', 'Toka (Bamboo Clapper)', 'Bahi (Flute)'],
        costumeHighlight: 'Golden Muga silk Mekhela Chador with red Kingkhap floral embroidery and Kopou Phool (orchid) in hair.'
      },
      {
        name: 'Sattriya Classical Dance',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQywsx0PrANu7maRYcy3prTIrrk_NvwAckSTFa1__MDjyBXo3pKB-6GhKXJ&s=10',
        type: 'Dance',
        origin: 'Srimanta Sankardev (15th Century Vaishnava Monasteries)',
        description: 'One of the eight classical dances of India, originating in Vaishnavite Satras combining devotional mime, footwork (Mati-Akhara), and cymbal rhythms.',
        instruments: ['Khol (Two-headed drum)', 'Taal (Cymbals)', 'Flute'],
        costumeHighlight: 'Pat silk attire with waist drape and Paguri headgear.'
      },
      {
        name: 'Ankiya Naat & Bhaona (Mask Theatre)',
        image:'https://meghalayamonitor.com/wp-content/uploads/2024/04/IMG-20240428-WA00411.jpg',
        type: 'Theatre',
        origin: 'Majuli Island Satras',
        description: 'One-act devotional musical plays created by Sankardev using Brajavali language and large handcrafted bamboo-clay masks (Mukha).',
        instruments: ['Khol', 'Taal']
      }
    ],
    cuisines: [
      {
        name: 'Khaar with Rice & Masor Tenga',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4vgv3fz9F0yRMa_ea19SK28aGjOd0a8HPr2F6jVmKxCwAy-s0daCJTE&s=10',
        category: 'Non-Vegetarian',
        description: 'Traditional alkaline digestive starter made by filtering water through sun-dried roasted banana peel ash; and light, sour Rohu fish broth flavored with Thekera or elephant apple.',
        keyIngredients: ['Kola Khaar (Banana Peel Ash Water)', 'Fresh River Fish (Rohu)', 'Thekera / Tomatoes', 'Mustard Oil', 'Panch Phoron', 'Green Chilies']
      },
      {
        name: 'Duck with Ash Gourd (Kumura Diya Hah)',
        image:'https://pbs.twimg.com/media/FNPU-PZacAM-mH2.png',
        category: 'Non-Vegetarian',
        description: 'Royal Assamese winter delicacy of tender duck meat cooked with sweet ash gourd chunks, black pepper, and whole ginger-garlic paste.',
        keyIngredients: ['Duck Meat', 'Ash Gourd (Kumura)', 'Black Peppercorns', 'Ginger-Garlic', 'Mustard Oil']
      },
      {
        name: 'Pitha & Laru (Bihu Sweets)',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHNIvC8JFLS3aazPq6y2vM-sEZC_JIfwiGYu0YzQDv_Ib2XIfSnj0gDMo&s=10',
        category: 'Dessert',
        description: 'Bora rice rolls stuffed with sweet toasted black sesame and jaggery (Til Pitha), crispy Ghila Pitha, and sweet grated coconut laddus.',
        keyIngredients: ['Sticky Bora Rice', 'Black Sesame Seeds', 'Jaggery (Gud)', 'Fresh Coconut', 'Cardamom']
      },
      {
        name: 'Assam Orthodox Black Tea',
        image:'https://www.assamicaagro.in/cdn/shop/products/Organic-Assam-Orthodox-Tea_1200x1200.jpg?v=1678253170',
        category: 'Beverage',
        description: 'Strong, bright, malty black tea with a deep amber color, cultivated in the lush river valleys of upper Assam since 1823.',
        keyIngredients: ['Camellia sinensis var. assamica Leaves'],
        giTag: true
      }
    ],
    festivals: [
      {
        name: 'Rongali Bihu (Bohag Bihu)',
        image:'https://www.indianarrative.com/wp-content/uploads/2026/04/20260414427L.webp',
        timing: 'Mid-April (Assamese New Year / 7 Days)',
        significance: 'Grandest Assamese festival celebrating the arrival of spring and agricultural sowing with community feast and youth dancing.',
        keyRitual: 'Goru Bihu (bathing and honoring cattle with turmeric and gourd), Husori singing from house to house, and gifting handwoven Gamosas.',
        highlight: 'Spirited open-air Bihu dancing under flowering banyan and orchid trees.'
      },
      {
        name: 'Ambubachi Mela (Kamakhya Temple)',
        image:'https://i.pinimg.com/736x/31/3c/2d/313c2d5e16c998320e8a6c63279def75.jpg',
        timing: 'Ashaad (June / 4 Days)',
        significance: 'Celebration of the annual menstruation cycle of Mother Earth and Goddess Kamakhya; temple doors remain closed for 3 days before grand reopening.',
        keyRitual: 'Tantric sadhus and pilgrims chanting outside closed sanctum doors, distributing holy red Raktavastra cloth as prasad.',
        highlight: 'Gathering of thousands of sadhus, Baul singers, and devotees from across the globe.'
      },
      {
        name: 'Majuli Raas Mahotsav',
        image:'https://assaminfo.com/files/touristplaces/m_31.jpg',
        timing: 'Kartik Purnima (November)',
        significance: 'Four-day theatrical carnival across the Satras of Majuli depicting the celestial life and divine Raslila of Lord Krishna.',
        keyRitual: 'All-night Bhaona theatre performances where all island villagers participate as actors, musicians, and mask makers.',
        highlight: 'Intricately painted animal and demon masks brought to life under starlit river skies.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Muga Silk (Golden Silk found only in Assam)','Pat Silk', 'Gamosa (White and Red Embroidered Cotton Scarf of Respect)'],
      image:'https://upload.wikimedia.org/wikipedia/commons/c/c0/Assamese_Muga_With_Japi.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
      image:'https://ethnohues.com/wp-content/uploads/2026/02/saree-p1.webp',
      image:'https://images.meesho.com/images/products/1002512707/wxyt6_512.webp?width=512',
      handicrafts: ['Assamese Jaapi (Conical Woven Bamboo Hat with floral motifs)', 'Majuli Handcrafted Bamboo Masks (Mukha)', 'Sarthebari Bell Metal Utensils','Assamese Gold Jewelry (Dholbiri, Jonbiri, Gamkharu)'],
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbs4DfwKrZqwH4RD4Z_mkORtTB-J3oL-VX6hQWDXM1qGtCql2NOlxb2IQJ&s=10',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4W6UJ-Dk7favZb3EIvoLj_oHGCy0-XL0oiGGviM-qwanQ4aLX8E03AT8&s=10',
      image:'https://yehaindia.com/wp-content/uploads/2021/08/cover-1.jpg',
      image:'https://zangfai.in/image/cache/catalog/products/mainset/IMG_JZNB2907-550x550.jpg',
      traditionalMenAttire: 'Dhoti-Kurta with Seleng Chador and Gamosa worn around the neck.',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTejrlVLqIlJhewyyGNpXIsrMUcnCynCmE66kvbNa232BjOYYY43KHc-X65&s=10',
      traditionalWomenAttire: 'Mekhela Chador (two-piece garment of Muga or Eri silk with golden Kingkhap motifs) and Riha drape.',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwrdb8qcxJUH3PjR8MzP7dOCnu1ukAG7czpK6c4gL-3ny-U_Oq-gPmzjf&s=10',
      giTaggedCrafts: ['Muga Silk of Assam', 'Assam Karbi Anglong Ginger', 'Tezpur Litchi', 'Jhotiya Pitha', 'Assam Gamosa', 'Assam Orthodox Tea', 'Chokuwa Rice (Soft Magic Rice)']
    },
    historyTimeline: [
      {
        era: '4th - 12th Century AD',
        image:'https://upload.wikimedia.org/wikipedia/commons/f/ff/Kamarupa_map.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
        title: 'Kingdom of Kamarupa',
        description: 'Ruled by Varman, Mlechchha, and Pala dynasties with capital at Pragjyotishpura; King Bhaskaravarman formed an alliance with Emperor Harshavardhana.'
      },
      {
        era: '1228 - 1826 AD',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRMF2Mzt-ThnelmDpLLy0y18_BQ6NliLsCp2mUETHtI8Seyo6T7kK_5CUJ&s=10',
        title: '600-Year Reign of the Ahom Kingdom',
        description: 'Founded by Chaolung Sukaphaa; famously routed the imperial Mughal army 17 times, including the Battle of Saraighat (1671) under General Lachit Borphukan.'
      },
      {
        era: '15th - 16th Century AD',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Qc-Xs10QatmuvYAqOTeJTM_xQh_MtYVte59MRkUJc57SMWFmAZohbec&s=10',
        title: 'Srimanta Sankardev & Neo-Vaishnavite Renaissance',
        description: 'Saint-philosopher Sankardev unified Assamese society through music (Borgeet), dance (Sattriya), and monastery institutions (Satras).'
      },
      {
        era: '1826 AD',
        title: 'Treaty of Yandabo & Modern Assam',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFOqDGYmHTdkKxYnlJ7dc1t3E-7jVuFyODyjHfhjQ4YjVuDN-OLy8HZfrm&s=10',
        description: 'Annexed by the British after the First Anglo-Burmese War, introducing commercial tea plantations, oil fields in Digboi (Asia\'s first), and coal mines.'
      }
    ]
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    capital: 'Gangtok',
    region: 'North-East',
    coordinates: [27.5330, 88.5122],
    zoomLevel: 8,
    bannerImage: 'https://assets.vogue.in/photos/5ce44893ba773d71660b5bfc/1:1/w_1080,h_1080,c_limit/Sikkim.jpg',
    tagline: 'Land of Kanchenjunga, Organic Haven, Rumtek Monastery & Orchid Valleys',
    overview: 'Sikkim is India\'s jewel state nestled beneath the world\'s third-highest mountain, Mount Kanchenjunga (Khangchendzonga). Recognized as the world\'s first 100% organic state, it blends ancient Tibetan Buddhist monasteries, serene sacred lakes (Gurudongmar & Tsomgo), alpine rhododendron sanctuaries, and the peaceful harmony of Lepcha, Bhutia, and Nepali communities.',
    officialLanguage: 'Nepali, Sikkimese (Bhutia), Lepcha, English',
    spokenLanguages: ['Nepali', 'Bhutia', 'Lepcha', 'Limbu', 'Hindi', 'English'],
    stateAnimal: 'Red Panda',
    stateBird: 'Blood Pheasant',
    funFact: 'Sikkim is the world\'s first 100% certified organic state (awarded the UN Future Policy Gold Award in 2018), with all its agricultural farmland completely free of chemical pesticides and synthetic fertilizers.',
    monuments: [
      {
        name: 'Rumtek Monastery (Dharma Chakra Centre)',
        image:'https://upload.wikimedia.org/wikipedia/commons/3/38/Dharmachakra_Centre%2C_Rumtek_Monastery.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original',
        type: 'Tibetan Kagyu Monastic Seat',
        century: '16th Century / Rebuilt 1966 by 16th Karmapa',
        location: 'Rumtek, near Gangtok',
        isUnesco: false,
        description: 'The main seat of the Karma Kagyu lineage in exile, housing rare golden stupas, ancient thangkas, and sacred Buddhist relics.',
        coordinates: [27.3039, 88.5528]
      },
      {
        name: 'Khangchendzonga National Park',
        type: 'Mixed UNESCO World Heritage Site',
        century: 'Natural & Sacred Cultural Biosphere',
        location: 'North & West Sikkim',
        isUnesco: true,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2yRdH4eEpQeVkBi4h70NvtEufw_ugNwqXn6nB06X6SqdiHy70swxCKxY&s=10',
        description: 'India\'s first Mixed UNESCO World Heritage Site, encompassing Mt. Kanchenjunga (8,586 m), 18 glaciers, and sacred Buddhist pilgrimage lakes (Beyul).',
        coordinates: [27.7000, 88.3500]
      },
      {
        name: 'Pemayangtse Monastery & Rabdentse Ruins',
        type: 'Ancient Nyingma Monastery & Royal Palace Ruins',
        century: '1705 AD (Lhatsun Chempo)',
        location: 'Pelling, West Sikkim',
        isUnesco: false,
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/spiritual-spots-in-pelling-popular?qlt=82&ts=1726655959297',
        description: 'One of the oldest premier monasteries in Sikkim, famous for the exquisite 7-tiered hand-carved wooden model of Zandok Palri (Guru Rinpoche\'s celestial palace).',
        coordinates: [27.3033, 88.2433]
      }
    ],
    artAndDance: [
      {
        name: 'Singhi Chham (Snow Lion Dance)',
        image:'https://pbs.twimg.com/media/Ekmjz-uVMAADSFI.jpg',
        type: 'Dance',
        origin: 'Bhutia Monastic Tradition',
        description: 'Vibrant masked dance where dancers in furry white snow lion costumes leap and tumble, honoring Mt. Kanchenjunga as the state\'s guardian deity.',
        instruments: ['Gyaling (Monastic Trumpets)', 'Cymbals', 'Drums'],
        costumeHighlight: 'Furred white and blue snow lion outfits with fearsome wooden face masks.'
      },
      {
        name: 'Maruni & Chu Faat Dance',
        image:'https://blogmedia.testbook.com/blog/wp-content/uploads/2023/03/image-217c4cd6.png',
        type: 'Dance',
        origin: 'Nepali & Lepcha Traditions',
        description: 'Maruni (joyful Nepali dance celebrating Diwali with a clown character called Dhatu Waray) and Chu Faat (sacred Lepcha dance paying homage to snowy peaks).',
        instruments: ['Madal', 'Flute', 'Murchunga']
      },
      {
        name: 'Thangka Scroll & Lepcha Weaving',
        image:'https://asiainch.org/wp-content/uploads/2018/11/3-2-768x1024.jpg',
        type: 'Theatre',
        origin: 'Sikkimese Handicraft Centers',
        description: 'Intricate Buddhist silk scroll painting and geometric backstrap loom weaving by the indigenous Lepcha tribe.',
        giTag: true
      }
    ],
    cuisines: [
      {
        name: 'Sikkimese Momos & Thukpa with Churpi Soup',
        image:'https://www.clubmahindra.com/blog/media/section_images/bannerlarg-a3b2d550ed98d17.jpg',
        image:'https://i0.wp.com/mayuris-jikoni.com/wp-content/uploads/2019/09/thukpa-1.jpg?fit=3024%2C4032&ssl=1',
        category: 'Vegetarian',
        description: 'Delicate steamed flour dumplings filled with organic vegetables or minced meat and local spices, paired with fiery Dalle Khursani chili chutney and rich yak cheese soup.',
        keyIngredients: ['Flour', 'Minced Meat / Vegetables', 'Dalle Khursani (Cherry Peppers)', 'Churpi (Fermented Yak Cheese)', 'Garlic']
      },
      {
        name: 'Gundruk & Sinki Soup',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFrb3GyNy_q6kedVrezTfuWDRtxwRIAe0zbocr5kcrcJJ-BAZ3bXrFxGs&s=10',
        category: 'Vegetarian',
        description: 'Traditional fermented mustard and radish leaf soup cooked with tomatoes, ginger, and roasted spices, offering a distinct wholesome sour aroma.',
        keyIngredients: ['Fermented Mustard Leaves (Gundruk)', 'Fermented Radish Taproots (Sinki)', 'Tomatoes', 'Green Chilies', 'Garlic']
      },
      {
        name: 'Phagshapa & Sel Roti',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0shjnLK2hNe4eu_RBXOukQhlMLldOCYt_MYTRKbT8-8_vx_7u6YbWIRYK&s=10',
        category: 'Non-Vegetarian',
        description: 'Tender pork fat strips stewed with radishes and dried red chilies (cooked without oil); served alongside crispy ring-shaped fried Nepali sweet rice bread.',
        keyIngredients: ['Pork Strips', 'Radish (Mula)', 'Dry Red Chilies', 'Rice Flour (Sel Roti)', 'Cardamom', 'Ghee']
      },
      {
        name: 'Chaang (Tongba)',
        image:'https://i.pinimg.com/736x/d4/e7/de/d4e7de3ca7b317d39e715c0755e26fd7.jpg',
        category: 'Beverage',
        description: 'Traditional warm fermented millet beer served in a cylindrical bamboo canister (Tongba) and sipped through a perforated bamboo straw (Pipsing).',
        keyIngredients: ['Fermented Finger Millet', 'Hot Spring Water', 'Bamboo Tongba Flask']
      }
    ],
    festivals: [
      {
        name: 'Pang Lhabsol',
        image:'https://i0.wp.com/travelshoebum.com/wp-content/uploads/2018/09/dsc3215.jpg?resize=1200%2C1812&ssl=1',
        timing: '15th Day of 7th Tibetan Month (August - September)',
        significance: 'Unique festival commemorating the historic blood brotherhood treaty between Lepchas and Bhutias witnessed by Mt. Kanchenjunga.',
        keyRitual: 'Chogyal royal prayers and the electrifying warrior dance (Dzongkhor Chham) in full military armor.',
        highlight: 'Dramatic battle reenactments under the fluttering prayer flags.'
      },
      {
        name: 'Losoong / Namsoong (Sikkimese New Year)',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYugSTnhU6e08Lg5vq33ngiGSLfnXpoxM23P7iM9lKhn80cOl3ENTQ4Jc&s=10',
        timing: 'December (End of Harvest)',
        significance: 'Traditional New Year celebrated across Phodong and Rumtek monasteries marking the end of the agricultural harvest cycle.',
        keyRitual: 'Sacred Black Hat mask dances (Kagyed), archery tournaments, and feasts with home-brewed Chaang.',
        highlight: 'Colorful monk dances banishing evil spirits of the outgoing year.'
      },
      {
        name: 'Saga Dawa',
        image:'https://www.tusktravel.com/blog/wp-content/uploads/2024/05/saga-dawa-festival-tour.jpg',
        timing: 'Full Moon of 4th Tibetan Month (May - June)',
        significance: 'Triple-blessed Buddhist festival commemorating the Birth, Enlightenment, and Parinirvana of Lord Buddha.',
        keyRitual: 'Holy procession of monks carrying the sacred Kangyur and Tengyur scriptures across Gangtok.',
        highlight: 'Butter lamp illuminations at all gompas.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Lepcha Handwoven Fabrics (Dumdem)', 'Bhutia Hand-knotted Woolen Carpets', 'Sikkim Silk Weaves'],
      image:'https://asiainch.org/wp-content/uploads/2017/11/0003977_handmade-lepcha-weave-hardcover-toiletry-bag.jpeg',
      image:'https://5.imimg.com/data5/SELLER/Default/2024/5/421611941/RA/JN/AI/120435373/img-20240103-181237.jpg',
      image:'https://cdn.exoticindia.com/images/products/original/textiles/sea94-rumbared.jpg',
      handicrafts: ['Carved Wood Choktse Folding Tables', 'Thangka Paintings', 'Bamboo & Cane Baskets', 'Buddhist Prayer Wheels (Mani)'],
      image:'https://blogmedia.oaklores.com/uploads/2026/01/Screenshot-2026-01-04-015507.png',
      image:'https://cdn.shopify.com/s/files/1/2545/2216/files/Lucky_Thanka_3.jpg?v=1690267890',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVdpTPKRgSzrdK-qNc9gBgneDcph01mWhuNTcP0U4_-wmX7o7PJlq7LUQ&s=10',
      image:'https://cdn.britannica.com/76/137776-050-6CB215D1/Prayer-wheels-Swayambhunath-Temple-Nepal-Kathmandu.jpg',
      traditionalMenAttire: 'Bakhu / Kho (long loose-fitting cloak tied at the waist with a silk sash) with Yenthatse shirt and Gyathok hat.',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmfu75B4EbISJ5oe0U9E3b1umSIWDa5Y27LC__-HQv5OBkpq5rL1KorWxn&s=10',
      traditionalWomenAttire: 'Full-length Bakhu with Honju (long-sleeved silk blouse) and Pangden (vibrant striped apron for married women) adorned with turquoise and gold.',
      image:'https://i.etsystatic.com/10690294/r/il/9622cb/3526784934/il_fullxfull.3526784934_70ad.jpg',
      giTaggedCrafts: ['Sikkim Large Cardamom', 'Dalle Khursani (Fire Red Cherry Pepper)', 'Sikkim Handknotted Carpets']
    },
    historyTimeline: [
      {
        era: '8th Century AD',
        title: 'Guru Padmasambhava (Guru Rinpoche)',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1tJ6yY8EOmk1PzdKXhEj7uWsL8rELVNW10wQToJajDVliw1MCYhUQf8&s=10',
        description: 'The patron saint of Sikkim blessed the sacred land, hidden valleys (Beyuls), and prophesied the coming of the Chogyal monarchs.'
      },
      {
        era: '1642 AD',
        title: 'Consecration of First Chogyal at Yuksom',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYjWLz0gwPIvdPJ2nKBu3MwXCOeQLPfgP2XyGGyR1qwjT_kBw3qH46-Ds&s=10',
        description: 'Three venerated lamas from Tibet consecrated Phuntsog Namgyal as the first Chogyal (Spiritual King) of the Namgyal dynasty at Norbugang, Yuksom.'
      },
      {
        era: '1890 - 1947 AD',
        title: 'British Protectorate Era',
        image:'https://iasgyan.sgp1.digitaloceanspaces.com/images/Sikkim_integration_with_India.png',
        description: 'Sikkim maintained internal autonomy as a princely state with administrative reforms under British resident John Claude White.'
      },
      {
        era: '1975 AD',
        title: 'Integration as the 22nd State of India',
        image:'https://d18x2uyjeekruj.cloudfront.net/wp-content/uploads/2022/05/sikk.jpg',
        description: 'Following a democratic referendum overwhelmingly supported by the people, Sikkim officially joined the Republic of India on 16 May 1975.'
      }
    ]
  },
  {
    id: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    capital: 'Itanagar',
    region: 'North-East',
    coordinates: [28.2180, 94.7278],
    zoomLevel: 7,
    bannerImage: 'https://boutindia.s3.us-east-2.amazonaws.com/images/blog/images/2025-01-08-16-33-35-677e5b87eb6a8-tawang.jpg',
    tagline: 'Land of Dawn-lit Mountains, Tawang Monastery & 26 Indigenous Tribes',
    overview: 'Arunachal Pradesh is the easternmost frontier of India—the first place in the country to greet the rising sun. A pristine biodiversity haven of snow peaks, misty orchid valleys, the majestic 400-year-old Tawang Monastery (birthplace of the 6th Dalai Lama), and 26 distinct indigenous tribes celebrating nature.',
    officialLanguage: 'English',
    spokenLanguages: ['Monpa', 'Nyishi', 'Adi', 'Apatani', 'Mishmi', 'Tangsa', 'Hindi', 'English'],
    stateAnimal: 'Gayal (Mithun)',
    stateBird: 'Great Hornbill',
    funFact: 'Arunachal Pradesh receives the first sunrise in India at Dong Valley in Anjaw district, where dawn breaks around 4:30 AM.',
    monuments: [
      {
        name: 'Tawang Monastery (Galden Namgey Lhatse)',
        type: 'Mahayana Buddhist Monastic Citadel',
        century: '1680 - 1681 AD (Merak Lama Lodre Gyatso)',
        location: 'Tawang',
        isUnesco: false,
        image: 'https://tse3.mm.bing.net/th/id/OIP.hxjbCrIW5R3eo30AFsbAcwHaEq?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        description: 'Largest monastery in India and second largest in the world after the Potala Palace, perched at 10,000 feet, housing an 18-foot gilded Buddha and priceless manuscripts.',
        coordinates: [27.5861, 91.8600]
      },
      {
        name: 'Sela Pass & Sela Lake',
        type: 'High Altitude Mountain Pass & Glacial Lake',
        century: '13,700 Feet Altitude (Memorial to Jaswant Singh Rawat)',
        location: 'Tawang - West Kameng Border',
        isUnesco: false,
        image: 'https://as2.ftcdn.net/v2/jpg/04/27/14/43/1000_F_427144345_u9WSASQWJiVMehKW0TpSXCIePSTAsSLc.jpg',
        description: 'Snow-clad mountain pass named after Sela, a tribal Monpa woman who assisted rifleman Jaswant Singh Rawat in the 1962 war; surrounded by 101 sacred lakes.',
        coordinates: [27.5036, 92.1039]
      },
      {
        name: 'Ita Fort (Fort of Bricks)',
        type: 'Medieval Brick Citadel',
        century: '14th - 15th Century AD (Chutiya Kingdom)',
        location: 'Itanagar, Papum Pare',
        isUnesco: false,
        image: 'https://itanagar.in/images/ita-fort.jpg',
        description: 'Historic irregular fort built with over 8 million kiln-burnt bricks, from which the state capital Itanagar derives its name.',
        coordinates: [27.0945, 93.6267]
      }
    ],
    artAndDance: [
      {
        name: 'Aji Lhamu & Lion Dance',
        image: 'https://kalapeet.com/wp-content/uploads/2020/10/aji.jpg',
        type: 'Dance',
        origin: 'Monpa Tribe of Tawang',
        description: 'Tibetan-style mythological masked dance narrating the Tibetan epic of King Norzang, performed during the Losar New Year festival.',
        instruments: ['Drums', 'Cymbals', 'Bells'],
        costumeHighlight: 'Elaborate silk robes and wooden animal and divine masks.'
      },
      {
        name: 'Bardo Chham & Ponung',
        image: 'https://tse1.mm.bing.net/th/id/OIP.YnpV1N8nvu071I7af_3a9AHaEk?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        type: 'Dance',
        origin: 'Sherdukpen & Adi Tribes',
        description: 'Bardo Chham (dance of the zodiac animals depicting victory of good over evil) and Ponung (graceful women\'s community harvest dance led by a Miri priest).',
        instruments: ['Yoksha (Sword with brass bells)', 'Gong']
      },
      {
        name: 'Monpa Handmade Wood & Paper Craft',
        image: 'https://tse3.mm.bing.net/th/id/OIP.gIMKyL-a8wsh9DwZ0CKYPwHaGM?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        type: 'Theatre',
        origin: 'Tawang & West Kameng',
        description: 'Ancient tree-bark paper making (Sukso from Shugu Sheng plant) and wood turning (hand-carved painted cups and bowls).',
        giTag: true
      }
    ],
    cuisines: [
      {
        name: 'Thukpa, Zan & Lukter',
        image: 'https://c.ndtvimg.com/2023-05/740b45a8_thupka_625x300_16_May_23.jpg',
        category: 'Non-Vegetarian',
        description: 'Zan: porridge of roasted millet flour with forest vegetables and smoked meat; served with Lukter: fiery dry chili paste with smoked beef/pork.',
        keyIngredients: ['Millet Flour', 'Smoked Meat', 'Bhut Jolokia (King Chili)', 'Local Himalayan Herbs', 'Fermented Bamboo Shoots']
      },
      {
        name: 'Pika Pila & Bamboo Shoot Pork',
        image: 'https://tse3.mm.bing.net/th/id/OIP.V753ce4vg5UKscN6eq0gbAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        category: 'Non-Vegetarian',
        description: 'Iconic Apatani pickle prepared from pork fat, bamboo shoot vinegar, and fiery green chilies; and pork cooked in hollow green bamboo poles over open embers.',
        keyIngredients: ['Pork Fat', 'Fermented Bamboo Shoots', 'Green Chilies', 'Garlic', 'Mustard Oil']
      },
      {
        name: 'Apong (Millet / Rice Beer)',
        image: 'https://oddessemania.in/wp-content/uploads/2024/12/Apong-rice-beer-food-of-Arunachal-Pradesh.jpg',
        category: 'Beverage',
        description: 'Organic traditional fermented beer brewed using roasted paddy husk and yeast cultures, served in bamboo cups during Solung and Nyokum festivals.',
        keyIngredients: ['Rice / Finger Millet', 'Roasted Paddy Husk', 'Natural Herbal Yeast (Epo)']
      }
    ],
    festivals: [
      {
        name: 'Losar Festival',
        image: 'https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/02/Losar-Festival-Ladakh.jpg?fit=1024%2C683&ssl=1',
        timing: 'February - March (5 to 15 Days)',
        significance: 'Monpa New Year festival in Tawang celebrated with prayers, hoisting colorful prayer flags, and masked monastic dances.',
        keyRitual: 'Cleaning homes, offering Guthuk porridge, and visiting Tawang Monastery for Losar prayers.',
        highlight: 'Aji Lhamu mask dances and archery contests in traditional robes.'
      },
      {
        name: 'Nyokum Yullo',
        image: 'https://cdn.guidetour.in/wp-content/uploads/2023/04/Nyokum-Yullo.jpg.webp',
        timing: 'February 26',
        significance: 'Grand agricultural festival of the Nyishi tribe invoking Goddess Nyokum for communal harmony, bumper harvest, and health.',
        keyRitual: 'Priest (Nyibu) performs sacred chanting and animal sacrifice at the Yugang altar decorated with bamboo shavings.',
        highlight: 'Community dancing in traditional black-striped white robes and hornbill headdresses.'
      },
      {
        name: 'Dree Festival (Apatani Valley)',
        image: 'https://tse4.mm.bing.net/th/id/OIP.4yK7yE71kYI0b4i9u5D9sQHaEZ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        timing: 'July 5',
        significance: 'Agricultural festival of the Apatani tribe in the lush Ziro Valley praying for pest protection and rich paddy yields.',
        keyRitual: 'Traditional priests offer sacrifices to agricultural deities (Tamu, Harniang, Danyi), followed by cucumber distribution.',
        highlight: 'Folk songs, sports, and Apatani women wearing traditional cane ear ornaments and nose plugs.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Apatani Geometric Weaves', 'Monpa Woolen Carpets', 'Mishmi Diamond-pattern Jackets', 'Adi Gale Weaves (Wraparound skirts)'],
      image: 'https://img.perniaspopupshop.com/store-locator-v2/uploads/PWA_Main_Image_Apatani_6fd6e4aca0.jpg',
      image: 'https://tse1.mm.bing.net/th/id/OIP.g713D0Wrf7uZB7cgSWWT-gHaD4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      image: 'https://tse2.mm.bing.net/th/id/OIP.kPGs6lYX92kl2rgIsQHovAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      image: 'https://tse3.mm.bing.net/th/id/OIP.Cfv9bOpZ5Ms8V4gGANSezwHaEt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      handicrafts: ['Monpa Handmade Shugu Paper', 'Cane and Bamboo Helmets (Bopa)', 'Wood Carvings of Wancho and Tangsa', 'Silver and Brass Amulet Jewelry'],
      image: 'https://nagalandtribune.in/wp-content/uploads/2022/12/Arunachals-Monpas-look-up-to-e-platforms-for-preserving-hand-made-paper-1-1024x489.jpg',
      image: 'https://tse2.mm.bing.net/th/id/OIP.PFoCKiQO3RJ2AD5dhZsZ-AHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      image: 'https://preview.redd.it/traditional-filipino-wood-carving-art-v0-vlljsjsofiv91.jpg?width=1080&format=pjpg&auto=webp&s=09300e5dadfe49dd46cce7877709c03ed3c840de',
      image: 'https://i.pinimg.com/736x/ba/c8/5c/bac85c50e19b70679d0c563220cefe85.jpg',
      traditionalMenAttire: 'Cane hat decorated with Great Hornbill beak and feathers, handwoven sleeveless jacket, and Daos (traditional sword).',
      image: 'https://thumbs.dreamstime.com/b/nishi-man-tribesman-wearing-traditional-head-dress-having-great-hornbill-beak-36775786.jpg',
      traditionalWomenAttire: 'Gale (vibrant handwoven wraparound skirt) with embroidered blouse and heavy turquoise, amber, and coral bead necklaces.',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlpwB9s_GL0xhssJLxWNWRCUZa55VkOsC6qu6GMF2aFmxEPzPOABHpw-Ct5uD24yygxVvsuLL1hksAlRe72uQXNsWsd7WvUb32VXelaenb7m5nkjLF2kZSl-G_3g111Fka35XOz_fy380/s1600/5ff43333d1c589d1ff865698e41655b7.jpg',
      giTaggedCrafts: ['Arunachal Yak Churpi (Cheese)', 'Arunachal Wakro Orange', 'Idumishmi Textiles', 'Monpa Handmade Paper', 'Wancho Wooden Craft', 'Khamti Rice']
    },
    historyTimeline: [
      {
        era: 'Ancient Era - 16th Century',
        title: 'Chutiya Kingdom & Bhismaknagar',
        image: 'https://tse2.mm.bing.net/th/id/OIP.EWfBV85XDOuC4jnymU1ZuwHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        description: 'Built fortified brick cities like Bhismaknagar and Ita Fort, engaging in trans-Himalayan trade along the Brahmaputra tributaries.'
      },
      {
        era: '1680 AD',
        title: 'Foundation of Tawang Monastery',
        image: 'https://tse4.mm.bing.net/th/id/OIP.x2Hj5oPciUntj2qSnCeoZwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        description: 'Merak Lama founded Tawang Monastery on the instructions of the 5th Dalai Lama; birthplace of the 6th Dalai Lama, Tsangyang Gyatso (1683).'
      },
      {
        era: '1914 AD',
        title: 'McMahon Line & NEFA',
        image: 'https://nenow.in/wp-content/uploads/2023/03/mac-mohan-line.jpg',
        description: 'The Indo-Tibetan boundary (McMahon Line) was drawn at the Simla Convention, later administered as the North-East Frontier Agency (NEFA).'
      },
      {
        era: '1987 AD',
        title: 'Full Statehood of Arunachal Pradesh',
        image: 'https://spmiasacademy.com/currentaffairs/wp-content/uploads/2026/02/image-18.jpeg',
        description: 'Elevated from Union Territory to full statehood as the 24th state of India on 20 February 1987 with Itanagar as capital.'
      }
    ]
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    capital: 'Shillong',
    region: 'North-East',
    coordinates: [25.4670, 91.3662],
    zoomLevel: 8,
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Abode of Clouds, Living Root Bridges, Cherrapunji Rains & Matrilineal Harmony',
    overview: 'Meghalaya is a lush cloud-crowned paradise home to the wettest places on planet Earth (Mawsynram & Cherrapunji), crystalline rivers (Umngot in Dawki), the architectural bio-engineering marvel of Living Root Bridges, Scotland of the East (Shillong), and the world\'s largest surviving matrilineal society (Khasi, Garo, Jaintia).',
    officialLanguage: 'English',
    spokenLanguages: ['Khasi', 'Garo', 'Pnar (Jaintia)', 'Hindi', 'English'],
    stateAnimal: 'Clouded Leopard',
    stateBird: 'Hill Myna',
    funFact: 'Meghalaya is one of the world\'s only societies practicing a matrilineal system, where lineage, family surname, and ancestral property pass from mother to the youngest daughter (Khadduh).',
    monuments: [
      {
        name: 'Jingkieng Jri (Double Decker Living Root Bridge)',
        type: 'Living Plant Bio-Engineering Architecture',
        century: 'Centuries-old Indigenous Ficus elastica Craft',
        location: 'Nongriat, Cherrapunji (Sohra)',
        isUnesco: true,
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
        description: 'Two-tier bridge grown over centuries by indigenous Khasi villagers by guiding the aerial roots of rubber fig trees across raging river gorges; grows stronger with age.',
        coordinates: [25.2505, 91.6708]
      },
      {
        name: 'Nohkalikai Falls',
        type: 'Plunge Waterfall (Tallest in India)',
        century: 'Natural Geological Formation',
        location: 'Cherrapunji (Sohra)',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
        description: 'Tallest plunge waterfall in India dropping 1,115 feet (340 m) off the verdant Sohra plateau into an emerald-green natural water pool.',
        coordinates: [25.2757, 91.6853]
      },
      {
        name: 'Umngot River (Dawki Glass Water)',
        type: 'Pristine Crystalline River',
        century: 'Natural Biosphere',
        location: 'Dawki, West Jaintia Hills',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        description: 'Crystal-clear river along the Indo-Bangladesh border where water is so transparent that wooden boats appear to float in mid-air above the riverbed.',
        coordinates: [25.1878, 92.0208]
      }
    ],
    artAndDance: [
      {
        name: 'Nongkrem Dance (Shad Nongkrem)',
        type: 'Dance',
        origin: 'Khasi Kingdom of Hima Khyrim (Smit)',
        description: 'Sacred 5-day harvest and thanksgiving festival dance performed by virgin maidens in heavy gold and silver ornaments, accompanied by male warriors wielding swords and fly whisks.',
        instruments: ['Tangmuri (Wooden Flute)', 'Nakra (Large Drum)', 'Ksing (Small Drum)'],
        costumeHighlight: 'Pure Muga silk Jainsem, golden crown (Pansngiat), and massive coral-gold necklaces.'
      },
      {
        name: 'Wangala (100 Drums Festival)',
        type: 'Dance',
        origin: 'Garo Tribe (Asanang, Tura)',
        description: 'Post-harvest thanksgiving dance honoring Saljong (Sun God of Fertility), featuring 100 synchronized drummers and feathered headgears.',
        instruments: ['Kram (Garo Long Drum)', 'Nagra', 'Buffalo Horn Trumpet'],
        costumeHighlight: 'Cotton Dakmanda wrap with feather plume headbands (Kotip).'
      },
      {
        name: 'Behdienkhlam Festival Dance',
        type: 'Theatre',
        origin: 'Jaintia (Pnar) Tribe of Jowai',
        description: 'Spectacular ritual where tall, vibrantly decorated wooden towers (Rot) are carried into the sacred pool of Aitnar to drive away plague and evil spirits.',
        instruments: ['Bomba', 'Ksing', 'Tangmuri']
      }
    ],
    cuisines: [
      {
        name: 'Jadoh with Dohneiiong (Black Sesame Pork)',
        category: 'Non-Vegetarian',
        description: 'Signature Khasi dish of short-grain aromatic rice cooked in rich meat broth, paired with succulent pork braised in roasted black sesame seed paste (Neiiong).',
        keyIngredients: ['Minikit Rice', 'Pork / Chicken', 'Roasted Black Sesame Paste', 'Ginger-Garlic', 'Bay Leaves', 'Onions']
      },
      {
        name: 'Dohkhlieh & Tungrymbai',
        category: 'Non-Vegetarian',
        description: 'Pork salad tossed with finely chopped onions, ginger, green chilies, and pork brains; paired with fermented soybean paste (Tungrymbai) cooked with black sesame.',
        keyIngredients: ['Boiled Pork', 'Fresh Ginger', 'Fermented Soybeans (Tungrymbai)', 'Black Sesame', 'Green Chilies']
      },
      {
        name: 'Pukhlein & Cha Khoo',
        category: 'Dessert',
        description: 'Crispy deep-fried sweet bread made of pounded rice flour and melted sugarcane jaggery, enjoyed with steaming red hill tea.',
        keyIngredients: ['Rice Powder', 'Sugarcane Jaggery', 'Mustard Oil']
      }
    ],
    festivals: [
      {
        name: 'Wangala Festival (100 Drums Festival)',
        timing: 'November (Post-Harvest)',
        significance: 'Grandest harvest festival of the Garo tribe paying homage to Misi Saljong, the Great Sun God of Agrarian Fertility.',
        keyRitual: 'Village elders perform the Rugala incense ceremony, followed by 100 male drummers and female dancers dancing in synchronized lines.',
        highlight: 'Thundering beat of 100 long drums reverberating across the green Garo Hills.'
      },
      {
        name: 'Shad Suk Mynsiem (Dance of Joyful Hearts)',
        timing: 'April (Spring / 3 Days)',
        significance: 'Annual Khasi thanksgiving dance celebrating the rebirth of nature, fertility, and community brotherhood.',
        keyRitual: 'Unmarried women dance in the inner circle representing purity and modesty, while men dance in the outer ring protecting them.',
        highlight: 'Glittering golden crowns and silk robes glistening under the spring sunshine in Shillong.'
      },
      {
        name: 'Cherry Blossom Festival Shillong',
        timing: 'November (Autumn)',
        significance: 'Unique autumn flowering festival celebrating the blooming of wild Himalayan cherry blossoms across Shillong.',
        keyRitual: 'International music concerts, cosplay, local wine tasting, and illuminated night walks.',
        highlight: 'Shillong blanketed in soft pastel pink blooms reminiscent of Kyoto.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Ryndia Silk (Organic Eri Eco-Silk colored with plant dyes)', 'Dakmanda (Garo handwoven wraparound with eye borders)', 'Jainsem & Dhara (Khasi silk draped attire)'],
      handicrafts: ['Tlieng (Waterproof Khasi Cane Mats)', 'Bamboo Rain Shields (Knup)', 'Cane & Bamboo Stools (Mora)', 'Black Clay Pottery of Larnai'],
      traditionalMenAttire: 'Jymphong (sleeveless cotton jacket open in front) with Dhoti and turban (Spong).',
      traditionalWomenAttire: 'Jainsem (two-piece silk garment pinned at both shoulders) covered by a Dhara or Jainkup woolen mantle with 24k gold Kynjri chains.',
      giTaggedCrafts: ['Meghalaya Memang Narang (Wild Orange)', 'Khasi Mandarin', 'Lakadong Turmeric (World\'s highest curcumin content ~7-12%)']
    },
    historyTimeline: [
      {
        era: 'Ancient Times - 19th Century',
        title: 'Khasi Syiemships & Matrilineal System',
        description: 'Independent Khasi democratic confederacies (Syiemships) ruled through village councils (Durbar Shnong), preserving pristine sacred forests (Law Kyntang).'
      },
      {
        era: '1829 - 1833 AD',
        title: 'U Tirot Sing & Anglo-Khasi War',
        description: 'Heroic Khasi king of Nongkhlaw, U Tirot Sing, fought the British East India Company using guerrilla warfare in the rugged gorges.'
      },
      {
        era: '1874 AD',
        title: 'Shillong Made Capital of Chief Commissionership of Assam',
        description: 'Chosen as the administrative headquarters due to its pleasant temperate climate, earning the moniker "Scotland of the East".'
      },
      {
        era: '1972 AD',
        title: 'Statehood of Meghalaya',
        description: 'Carved out of Assam as a full-fledged autonomous state on 21 January 1972 under the North-Eastern Areas Reorganisation Act.'
      }
    ]
  },
  {
    id: 'nagaland',
    name: 'Nagaland',
    capital: 'Kohima',
    region: 'North-East',
    coordinates: [26.1584, 94.5624],
    zoomLevel: 8,
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Land of Festivals, 16 Naga Warrior Tribes, Hornbill Carnival & Dzüko Valley',
    overview: 'Nagaland is the rugged, mist-shrouded frontier of 16 distinct Naga tribes, celebrated for their warrior lore, intricate tribal shawls, the world-famous Hornbill Festival, the emerald serenity of Dzüko Valley, and the historic WWII Battle of Kohima.',
    officialLanguage: 'English',
    spokenLanguages: ['Ao', 'Angami', 'Sumi', 'Lotha', 'Konyak', 'Nagamese', 'English'],
    stateAnimal: 'Mithun (Gayal)',
    stateBird: 'Blyth\'s Tragopan',
    funFact: 'Every Naga tribe weaves distinct patterns on their shawls (e.g. Angami Loramhoushü, Ao Tsüngkotepsü) that historically signaled the wearer\'s tribe, clan, village status, and valor in battle.',
    monuments: [
      {
        name: 'Kohima War Cemetery & Battle of Tennis Court',
        type: 'Historic WWII Battlefield Memorial',
        century: '1944 AD (Battle of Kohima)',
        location: 'Garrison Hill, Kohima',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'Memorial marking the turning point of WWII where British and Indian forces halted the Japanese invasion; features the famous Kohima Epitaph: "When you go home, tell them of us and say, For your tomorrow, we gave our today".',
        coordinates: [25.6700, 94.1060]
      },
      {
        name: 'Dzüko Valley & Japfü Peak',
        type: 'High Altitude Valley of Flowers',
        century: 'Natural Biosphere (2,452 m Altitude)',
        location: 'Nagaland - Manipur Border',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        description: 'Rolling emerald valley famous for its endemic Dzüko Lily, sweeping bamboo brush landscapes, and the world\'s tallest rhododendron tree on Mt. Japfü (108 ft).',
        coordinates: [25.5500, 94.0667]
      },
      {
        name: 'Khonoma Green Village',
        type: 'Ancient Angami Fortified Village',
        century: '700+ Years Old (First Green Village of Asia)',
        location: 'Kohima District',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
        description: 'Historic village renowned for resisting British expeditions in 1879, now celebrated as India\'s pioneer community conservation village with terraced paddy fields.',
        coordinates: [25.6469, 94.0208]
      }
    ],
    artAndDance: [
      {
        name: 'Hornbill Festival Warrior Dances',
        type: 'Dance',
        origin: 'Kisama Heritage Village',
        description: 'Grand congregation of 16 Naga tribes performing high-kicking warrior victory dances, war cries, spear-spinning drills, and fire-making rituals.',
        instruments: ['Log Drum (Tsungren)', 'Horn Trumpets', 'Bamboo Flutes', 'Gongs'],
        costumeHighlight: 'Hornbill feather headdresses, boar tusk neckpieces, red goat-hair armlets, and woven warrior shawls.'
      },
      {
        name: 'Log Drumming of Konyak & Ao Tribes',
        type: 'Music',
        origin: 'Mon & Mokokchung Morungs',
        description: 'Sacred community drumming where 30+ men beat rhythmically on a massive hollowed tree trunk (Log Drum) installed in the youth dormitory (Morung).',
        instruments: ['Giant Hollow Log Drum', 'Wooden Mallets']
      },
      {
        name: 'Naga Folk Ballads & Choirs',
        type: 'Music',
        origin: 'Naga Churches & Traditional Morungs',
        description: 'Soulful multi-part vocal harmonies blending indigenous oral poetry with four-part choral mastery.',
        instruments: ['Asem (Drum)', 'Tati (Single-stringed gourd instrument)']
      }
    ],
    cuisines: [
      {
        name: 'Smoked Pork with Axone (Fermented Soybeans)',
        category: 'Non-Vegetarian',
        description: 'Woodsmoke-cured pork braised with pungent fermented soybean paste (Axone), crushed Raja Mircha (Bhut Jolokia), ginger, and wild mustard leaves.',
        keyIngredients: ['Smoked Pork', 'Axone (Fermented Soybeans)', 'Raja Mircha (King Chili)', 'Tomatoes', 'Ginger', 'Mustard Greens']
      },
      {
        name: 'Anishi Pork (Fermented Yam Leaves)',
        category: 'Non-Vegetarian',
        description: 'Ao tribe specialty of smoked pork cooked with sun-dried fermented yam leaf cakes (Anishi) and fiery chilies into a dark, savory stew.',
        keyIngredients: ['Smoked Pork', 'Anishi (Fermented Yam Cakes)', 'King Chili', 'Ginger-Garlic', 'Salt']
      },
      {
        name: 'Galho & Zutho (Naga Rice Beer)',
        category: 'Vegetarian',
        description: 'Comforting soupy rice porridge with wild forest herbs and greens; paired with frothy, sweet-sour unpasteurized white rice beer (Zutho).',
        keyIngredients: ['Rice', 'Wild Seasonal Greens', 'Fermented Bamboo Shoots', 'Yeast Culture (Zutho)']
      }
    ],
    festivals: [
      {
        name: 'Hornbill Festival (Festival of Festivals)',
        timing: 'December 1 - 10 (Kisama Heritage Village)',
        significance: 'Grand state carnival uniting all 16 Naga tribes under one roof, showcasing indigenous tribal crafts, music, dance, and food.',
        keyRitual: 'Traditional Naga Morung village displays, Naga King Chili eating championship, rock festivals, and traditional wrestling.',
        highlight: '16 tribes in full authentic ceremonial regalia dancing around bonfires in Kisama.'
      },
      {
        name: 'Moatsu Mong (Ao Naga Festival)',
        timing: 'May 1 - 3 (Post-Sowing)',
        significance: 'Spring festival of the Ao tribe celebrated in Mokokchung after completing the clearing and sowing of Jhum fields.',
        keyRitual: 'Sangpangtu ceremony where men and women sit around large bonfires eating and singing poetic love songs.',
        highlight: 'Community feasts with rice beer and high jump warrior competitions.'
      },
      {
        name: 'Sekrenyi (Angami Purification Festival)',
        timing: 'February (Phousnyi / 10 Days)',
        significance: 'Annual purification festival of the Angami tribe to cleanse body, spirit, and village from past sins before the agricultural season.',
        keyRitual: 'Young men bathe in sacred village wells at dawn (Kizie) and make new fires using ancient friction sticks.',
        highlight: 'Villagers singing traditional ballads dressed in royal Angami Loramhoushü shawls.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Tsüngkotepsü (Ao Warrior Shawl with tiger/mithun motifs)', 'Loramhoushü (Angami Black-Red-Green Shawl)', 'Sumi Peacock Shawls', 'Chakhesang Rira Shawls'],
      handicrafts: ['Konyak Wood Carvings', 'Naga Bamboo & Cane Baskets', 'Naga Spears with Red Dyed Goat Hair', 'Boar Tusk & Carnelian Bead Necklaces'],
      traditionalMenAttire: 'Embroidered warrior kilt with feathered hornbill crown, boar tusk neckband, brass armlets, and woven tribal shawl.',
      traditionalWomenAttire: 'Neikhro (wraparound skirt) with embroidered blouse and multi-layered red carnelian and yellow glass bead necklaces.',
      giTaggedCrafts: ['Naga King Chili (Bhut Jolokia / Raja Mircha)', 'Naga Tree Tomato', 'Naga Sweet Cucumber', 'Chakhesang Shawls']
    },
    historyTimeline: [
      {
        era: 'Ancient Era - 19th Century',
        title: 'Morung Village Republics & Headhunting Lore',
        description: 'Independent fortified hill villages with sovereign democratic councils; youth trained in martial defense, customs, and art inside Morungs.'
      },
      {
        era: '1879 AD',
        title: 'Battle of Khonoma',
        description: 'Angami warriors of Khonoma fought British military forces, resulting in treaties respecting Naga customary laws and land rights.'
      },
      {
        era: '1944 AD',
        title: 'Battle of Kohima (World War II)',
        description: 'Decisive battle fought at the Tennis Court in Kohima where Allied troops halted the Japanese 31st Division advance.'
      },
      {
        era: '1963 AD',
        title: 'Statehood of Nagaland',
        description: 'Inaugurated as the 16th state of the Indian Union on 1 December 1963 with special constitutional protections under Article 371A.'
      }
    ]
  },
  {
    id: 'manipur',
    name: 'Manipur',
    capital: 'Imphal',
    region: 'North-East',
    coordinates: [24.6637, 93.9063],
    zoomLevel: 8,
    bannerImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Jewel of India, Classical Manipuri Raas, Loktak Floating Phumdis & Sangai Deer',
    overview: 'Manipur ("Land of Jewels", so christened by Lord Mountbatten) is a breathtaking valley kingdom surrounded by nine hill ranges. Famed for classical Manipuri Raas Leela, the world\'s only floating national park on Loktak Lake, the dancing Sangai brow-antlered deer, Thang-Ta martial arts, and the modern birthplace of Polo (Sagol Kangjei).',
    officialLanguage: 'Meitei (Manipuri)',
    spokenLanguages: ['Meitei (Manipuri)', 'Tangkhul', 'Thadou', 'Rongmei', 'Hindi', 'English'],
    stateAnimal: 'Sangai (Brow-antlered Dancing Deer)',
    stateBird: 'Mrs. Hume\'s Pheasant (Nongin)',
    funFact: 'Modern Polo originated in Manipur as "Sagol Kangjei", played on indigenous Manipuri ponies since at least the 14th century BCE, which British officers codified in Silchar in 1859.',
    monuments: [
      {
        name: 'Loktak Lake & Keibul Lamjao National Park',
        type: 'World\'s Only Floating National Park',
        century: 'Natural Biosphere (Ramsar Wetland)',
        location: 'Bishnupur District',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        description: 'Largest freshwater lake in Northeast India, famous for its circular floating vegetative biomass islands (Phumdis) and the last natural sanctuary of the endangered Sangai dancing deer.',
        coordinates: [24.5000, 93.8000]
      },
      {
        name: 'Kangla Fort',
        type: 'Ancient Royal Citadel & Sanamahi Holy Seat',
        century: 'Ancient Antiquity (Rebuilt by King Khagemba 1608 AD)',
        location: 'Imphal',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'Historic seat of the Meitei royal kingdom situated on the banks of the Imphal River, housing the sacred Kangla Sha dragon statues and ancient coronation halls.',
        coordinates: [24.8108, 93.9417]
      },
      {
        name: 'Ima Keithel (Mother\'s Market)',
        type: 'Asia\'s Largest All-Women Run Market',
        century: '500+ Years Old (16th Century)',
        location: 'Khwairamband Bazaar, Imphal',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1590740608753-f7a35cbdfaa3?auto=format&fit=crop&w=800&q=80',
        description: 'Vibrant historic commercial market run exclusively by over 5,000 married women (Imas), selling fresh local vegetables, fish, handloom Phaneks, and handicrafts.',
        coordinates: [24.8075, 93.9358]
      }
    ],
    artAndDance: [
      {
        name: 'Manipuri Classical Dance (Raas Leela)',
        type: 'Dance',
        origin: 'King Bhagyachandra (18th Century)',
        description: 'One of the eight classical Indian dances, famous for gentle curved movements, soft floating footwork, and devotion depicting the divine love of Radha and Krishna.',
        instruments: ['Pung (Mridang drum)', 'Kartal (Cymbals)', 'Flute', 'Pena (Bowed string instrument)'],
        costumeHighlight: 'Kumil (stiff cylindrical barrel skirt embroidered with mirrors and gold zari), translucent veil, and Koktumbi crown.'
      },
      {
        name: 'Thang-Ta (Huyen Langlon)',
        type: 'Martial Art',
        origin: 'Ancient Meitei Military Tradition',
        description: 'Graceful martial art combining sword (Thang), spear (Ta), and shield drills with breath control and spiritual meditation.',
        instruments: ['Pena', 'Pung']
      },
      {
        name: 'Pung Cholom & Pena Singing',
        type: 'Dance',
        origin: 'Sankirtana of Manipur (UNESCO Intangible Heritage)',
        description: 'Acrobatic drumming dance where male performers leap, twirl, and play the cylindrical Pung drum simultaneously.',
        instruments: ['Pung', 'Kartal']
      }
    ],
    cuisines: [
      {
        name: 'Eromba & Kangshoi',
        category: 'Vegetarian',
        description: 'Wholesome mash of boiled seasonal vegetables, red potatoes, and fermented fish (Ngari) garnished with fresh coriander and chameleon leaves (Toningkhok).',
        keyIngredients: ['Boiled Vegetables', 'Ngari (Fermented Fish)', 'King Chili (U-Morok)', 'Coriander', 'Spring Onions']
      },
      {
        name: 'Chak-Hao Kheer (Black Rice Pudding)',
        category: 'Dessert',
        description: 'Royal purple dessert made from GI-tagged organic Manipuri black sticky rice (Chak-Hao) simmered slowly with milk, cardamom, bay leaves, and cashews.',
        keyIngredients: ['Manipuri Black Rice (Chak-Hao)', 'Full Cream Milk', 'Sugar', 'Cardamom', 'Cashews', 'Bay Leaf'],
        giTag: true
      },
      {
        name: 'Singju Salad',
        category: 'Street Food',
        description: 'Crisp spicy salad prepared with finely shredded cabbage, lotus stems, banana blossoms, roasted perilla seeds (Thoiding), and roasted pea powder.',
        keyIngredients: ['Finely Shredded Cabbage', 'Banana Flower', 'Roasted Gram Powder', 'Roasted Perilla Seeds', 'Ngari / Salt', 'Green Chilies']
      }
    ],
    festivals: [
      {
        name: 'Lai Haraoba',
        timing: 'April - May (Cheiraoba Season)',
        significance: 'Ancient religious festival celebrating the creation of the universe and honoring the ancestral Umang Lai deities.',
        keyRitual: 'Ritualistic dances performed by female priests (Maibis) depicting the cosmic creation of life, weaving, and house-building.',
        highlight: 'Intricate Maibi dance sequences accompanied by the haunting music of the Pena fiddle.'
      },
      {
        name: 'Sangai Festival',
        timing: 'November 21 - 30',
        significance: 'Grand state cultural carnival named after the state animal, celebrating Manipuri arts, handlooms, adventure sports, and Sagol Kangjei (Polo).',
        keyRitual: 'International Polo tournament on Manipuri ponies, Raas Leela performances, and floating water sports at Loktak.',
        highlight: 'Opening ceremony with hundreds of dancers in cylindrical Kumil skirts.'
      },
      {
        name: 'Yaoshang (Manipuri Holi / 5 Days)',
        timing: 'Phalguna Purnima (March)',
        significance: 'Five-day festival blending Vaishnavism with indigenous Meitei traditions, featuring sports festivals and Thabal Chongba.',
        keyRitual: 'Burning the straw Yaoshang hut on the first night, followed by Thabal Chongba (moonlight community circle dance by youth).',
        highlight: 'Boys and girls holding hands dancing the Thabal Chongba under full moonlight.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Shaphee Lanphee (Warrior Shawl with astronomical motifs)', 'Moirang Phee (Temple border design)', 'Wangkei Phee (Fine sheer cotton)', 'Phanek Mayek Naiba (Striped skirt)'],
      handicrafts: ['Longpi Black Pottery (Stone-clay made without potter\'s wheel)', 'Kauna Grass Mats and Baskets', 'Wood and Bamboo Sculptures'],
      traditionalMenAttire: 'Khamen Chatpa Dhoti (royal printed silk) with white Kurta and turban.',
      traditionalWomenAttire: 'Phanek (handwoven wraparound skirt) with Innaphi (sheer embroidered shawl) draped around the upper body.',
      giTaggedCrafts: ['Chak-Hao (Black Rice)', 'Shaphee Lanphee', 'Moirang Phee', 'Wangkei Phee', 'Kachai Lemon', 'Sirarakhong Hathei Chili']
    },
    historyTimeline: [
      {
        era: '33 AD',
        title: 'Reign of Nongda Lairen Pakhangba',
        description: 'Coronation of the first historical ruler of the Ningthouja dynasty at Kangla Fort, establishing the Cheitharol Kumbaba royal chronicle.'
      },
      {
        era: '1764 - 1798 AD',
        title: 'Golden Age of Maharaja Bhagyachandra',
        description: 'Created the classical Manipuri Raas Leela dance-drama and established the Govindaji Temple following visions of Lord Krishna.'
      },
      {
        era: '1891 AD',
        title: 'Anglo-Manipur War & Battle of Khongjom',
        description: 'Major Paona Brajabasi fought valiantly against British forces at Khongjom to safeguard Manipuri independence.'
      },
      {
        era: '1972 AD',
        title: 'Full Statehood of Manipur',
        description: 'Conferred full statehood on 21 January 1972 with Imphal as capital.'
      }
    ]
  },
  {
    id: 'mizoram',
    name: 'Mizoram',
    capital: 'Aizawl',
    region: 'North-East',
    coordinates: [23.1645, 92.9376],
    zoomLevel: 8,
    bannerImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Land of Blue Mountains, Cheraw Bamboo Dance & High Literacy Haven',
    overview: 'Mizoram ("Land of the Mizo People") is a tranquil paradise of serrated blue mountain ridges, deep bamboo valleys, high literacy (>91%), the world-renowned Cheraw bamboo dance, and an egalitarian society governed by the ethics of "Tlawmngaihna" (selfless service to others).',
    officialLanguage: 'Mizo, English',
    spokenLanguages: ['Mizo', 'English', 'Hindi', 'Mara', 'Lai'],
    stateAnimal: 'Serow (Saza)',
    stateBird: 'Mrs. Hume\'s Pheasant (Vavu)',
    funFact: 'Mizoram has practically zero crime rates and boasts roadside unmanned "Nghah Lou Dawr" shops, where shopkeepers leave goods and a cash box with prices written, relying entirely on the honesty of buyers.',
    monuments: [
      {
        name: 'Solomon\'s Temple Aizawl',
        type: 'Marble Church Cathedral',
        century: '1996 - 2017 AD (21st Century)',
        location: 'Chawlhhmun, Aizawl',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
        description: 'Magnificent white marble church complex built with four towers and twelve main doors symbolizing the twelve tribes of Israel, seating 3,000 people.',
        coordinates: [23.7547, 92.6883]
      },
      {
        name: 'Phawngpui (Blue Mountain National Park)',
        type: 'Highest Peak in Mizoram (Blue Mountain)',
        century: 'Natural Mountain Biosphere (2,157 m Altitude)',
        location: 'Lawngtlai District',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
        description: 'Sacred abode of the mountain goddess Sangau, known for sheer cliff faces (Thlazuang Kham), rare orchids, clouded leopards, and panoramic views of Myanmar.',
        coordinates: [22.6317, 93.0567]
      },
      {
        name: 'Vantawng Falls',
        type: 'Two-Tiered Waterfall (Highest in Mizoram)',
        century: 'Natural Waterfall (750 ft / 229 m)',
        location: 'Thenzawl, Serchhip District',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
        description: 'Breathtaking two-tiered waterfall cascading 750 feet amidst dense bamboo and pine forests along the Vanva River.',
        coordinates: [23.3289, 92.7933]
      }
    ],
    artAndDance: [
      {
        name: 'Cheraw (Bamboo Dance)',
        type: 'Dance',
        origin: 'Ancient Mizo Cultural Heritage',
        description: 'World-famous synchronized dance where men rhythmically clap pairs of long horizontal bamboo poles on the ground while agile female dancers step in and out of the closing grids.',
        instruments: ['Khuang (Mizo Drum)', 'Gongs (Dar)', 'Clapping Bamboos'],
        costumeHighlight: 'Vakiria (bamboo headband with parrot feathers and beetle wings) and Puanchei handwoven skirt.'
      },
      {
        name: 'Khuallam & Chheihlam',
        type: 'Dance',
        origin: 'Mizo Celebrations',
        description: 'Khuallam ("Dance of the Guests" performed in Puandum shawls) and Chheihlam (exuberant seated circle dance with clapping and chanting).',
        instruments: ['Khuang', 'Dar (Brass Gongs)']
      },
      {
        name: 'Mizo Choral Music',
        type: 'Music',
        origin: 'Mizo Churches & Cultural Troupes',
        description: 'World-class four-part gospel and folk choral harmony characterized by pitch perfection and rich resonance.',
        instruments: ['Acoustic Guitar', 'Khuang', 'Keyboard']
      }
    ],
    cuisines: [
      {
        name: 'Bai with Rice & Vawksa Rep',
        category: 'Non-Vegetarian',
        description: 'Nutritious boiling vegetable and bamboo shoot stew with pork fat and cooking soda, paired with woodsmoked tender pork with mustard greens.',
        keyIngredients: ['Seasonal Green Vegetables', 'Bamboo Shoots', 'Chingal (Wood Ash Soda)', 'Smoked Pork (Vawksa Rep)', 'Ginger']
      },
      {
        name: 'Sanpiau & Sawhchiar',
        category: 'Non-Vegetarian',
        description: 'Popular street food rice porridge garnished with ground spices, coriander, onion, and fish sauce; and fragrant rice-meat stew.',
        keyIngredients: ['Rice Porridge', 'Pork / Chicken', 'Fish Sauce', 'Crisp Garlic Flakes', 'Black Pepper']
      },
      {
        name: 'Mizo Zu (Traditional Rice Beer)',
        category: 'Beverage',
        description: 'Indigenous fermented rice beverage brewed for community feasts and festive celebrations.',
        keyIngredients: ['Rice', 'Natural Yeast Cake']
      }
    ],
    festivals: [
      {
        name: 'Chapchar Kut',
        timing: 'First Friday of March (Spring)',
        significance: 'Most joyous and premier harvest festival of Mizoram celebrated after the grueling clearing of bamboo jhum forests.',
        keyRitual: 'Chai dance with everyone forming circles singing folk songs, feasting on meat banquets, and Cheraw dance displays.',
        highlight: 'Thousands performing Cheraw in colorful Puanchei attire in Aizawl stadium.'
      },
      {
        name: 'Mim Kut & Pawl Kut',
        timing: 'August & December',
        significance: 'Maize harvest (Mim Kut) remembering departed ancestors with bread offerings, and post-harvest winter festival (Pawl Kut).',
        keyRitual: 'Family feasts, sharing of harvested crops with neighbors, and community choir singing.',
        highlight: 'Traditional sports, balancing games, and musical storytelling.'
      },
      {
        name: 'Thalfavang Kut',
        timing: 'November',
        significance: 'Pre-harvest festival celebrated when weeding of paddy fields is completed.',
        keyRitual: 'Cultural dances by youth organizations showcasing Mizo heritage.',
        highlight: 'Exhibitions of handloom Puans and bamboo artifacts.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Puanchei (Magnificent Festive Handwoven Wraparound)', 'Puandum (Black, red, and yellow striped shawl of honor)', 'Ngotekherh (Checkered traditional Puan)', 'Tawlhlohpuan (Bravery shawl)'],
      handicrafts: ['Mizo Bamboo Hats (Khumbeu made from waterproof wild leaves)', 'Thul Bamboo Storage Baskets', 'Handmade Cane Furniture'],
      traditionalMenAttire: 'Plain white cotton coat with colorful Puandum shawl draped across the shoulders.',
      traditionalWomenAttire: 'Kawrchei (embroidered blouse) with Puanchei skirt and Vakiria feather headdress.',
      giTaggedCrafts: ['Mizo Puanchei', 'Tawlhlohpuan', 'Puandum', 'Ngotekherh', 'Mizo Chilli (Bird\'s Eye Chili)', 'Mizo Ginger']
    },
    historyTimeline: [
      {
        era: '16th - 18th Century AD',
        title: 'Migration & Autonomous Chieftainships',
        description: 'Mizo clans migrated from the Chin Hills into the Lushai Hills, establishing autonomous villages governed by Lal (Village Chiefs).'
      },
      {
        era: '1894 AD',
        title: 'Arrival of Christian Missionaries & Education',
        description: 'Missionaries developed the written Mizo alphabet in Roman script, establishing schools that created one of the highest literacy rates in India.'
      },
      {
        era: '1986 AD',
        title: 'Historic Mizo Peace Accord',
        description: 'Prime Minister Rajiv Gandhi and MNF leader Laldenga signed the Mizo Peace Accord, ending decades of insurgency and establishing enduring peace.'
      },
      {
        era: '1987 AD',
        title: 'Full Statehood of Mizoram',
        description: 'Inaugurated as the 23rd state of India on 20 February 1987 with Aizawl as capital.'
      }
    ]
  },
  {
    id: 'tripura',
    name: 'Tripura',
    capital: 'Agartala',
    region: 'North-East',
    coordinates: [23.8315, 91.2868],
    zoomLevel: 8,
    bannerImage: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Land of Manikya Kings, Neermahal Water Palace, Unakoti Rock Carvings & 14 Gods',
    overview: 'Tripura is an enchanting historic kingdom bordered by Bangladesh on three sides. It preserves the colossal 8th-century rock-cut Shiva bas-reliefs of Unakoti, the floating white marble Neermahal water palace, the sacred Tripura Sundari Shakti Peetha temple, and the intricate bamboo craft of 19 indigenous tribes.',
    officialLanguage: 'Bengali, Kokborok, English',
    spokenLanguages: ['Bengali', 'Kokborok', 'Hindi', 'Mog', 'Chakma', 'English'],
    stateAnimal: 'Phayre\'s Leaf Monkey (Chashma Bandar)',
    stateBird: 'Green Imperial Pigeon',
    funFact: 'Unakoti in Tripura features nearly one crore (10 million minus one) giant rock-cut stone carvings of Lord Shiva and deities sculpted directly onto a forested mountain cliff.',
    monuments: [
      {
        name: 'Neermahal (Water Palace of Twijilik)',
        type: 'Lake Palace Complex (Rudrasagar Lake)',
        century: '1930 - 1938 AD (Maharaja Bir Bikram Kishore Manikya)',
        location: 'Melaghar, Sepahijala District',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80',
        description: 'Largest water palace in Eastern India blending Hindu and Mughal architecture, rising gracefully from the center of the 6-sq-km Rudrasagar Lake.',
        coordinates: [23.4900, 91.3200]
      },
      {
        name: 'Unakoti Heritage Rock Carvings',
        type: 'Ancient Bas-Relief Mountain Sculpture',
        century: '8th - 9th Century AD',
        location: 'Kailashahar, Unakoti District',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
        description: 'Colossal 30-foot carved rock head of Unakotiswara Kal Bhairava and giant Ganeshas carved into stone cliffs surrounded by waterfalls in deep forests.',
        coordinates: [24.3217, 92.0167]
      },
      {
        name: 'Tripura Sundari Temple (Matabari)',
        type: '51 Shakti Peethas Sanctum (Tortoise Shaped)',
        century: '1501 AD (Maharaja Dhanya Manikya)',
        location: 'Udaipur, Gomati District',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80',
        description: 'Ancient square sanctum resembling a tortoise (Kurma Pitha) where Goddess Sati\'s right foot fell, dedicated to Goddess Kali / Tripurasundari.',
        coordinates: [23.5117, 91.4983]
      },
      {
        name: 'Ujjayanta Palace',
        type: 'Neoclassical Royal Palace',
        century: '1901 AD (Maharaja Radha Kishore Manikya)',
        location: 'Agartala',
        isUnesco: false,
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
        description: 'Majestic white palace with tiled domes and Mughal gardens (named by Rabindranath Tagore), now functioning as the state heritage museum.',
        coordinates: [23.8378, 91.2819]
      }
    ],
    artAndDance: [
      {
        name: 'Hojagiri Dance',
        type: 'Dance',
        origin: 'Reang (Bru) Tribe',
        description: 'Acrobatic balance dance where young women balance an earthen lamp or bottle on their heads and stand on the edge of a spinning brass plate (Kansha).',
        instruments: ['Kham (Drum)', 'Sumui (Bamboo Flute)', 'Cymbals'],
        costumeHighlight: 'Rignai and Risa handwoven wrap with heavy silver coin necklaces (Rangbatang).'
      },
      {
        name: 'Garia & Lebang Boomani Dance',
        type: 'Dance',
        origin: 'Tripuri Indigenous Tribes',
        description: 'Garia (devotional dance with bamboo pole deities) and Lebang Boomani (harvest dance catching colorful chirping insects using clappers).',
        instruments: ['Kham', 'Sumui', 'Sarinda']
      },
      {
        name: 'Tripuri Bamboo & Cane Craft',
        type: 'Theatre',
        origin: 'Indigenous Villages across Tripura',
        description: 'World-renowned fine bamboo weaving creating lampshades, folding screens, umbrellas, and delicate woven wall hangings.',
        giTag: true
      }
    ],
    cuisines: [
      {
        name: 'Mui Borok & Berma Chakhwi',
        category: 'Non-Vegetarian',
        description: 'Authentic Tripuri traditional dish cooked without oil, featuring fermented dried fish (Berma), bamboo shoots, green chilies, and wood ash alkaline water.',
        keyIngredients: ['Berma (Fermented Fish)', 'Bamboo Shoots', 'Baking Soda / Wood Ash', 'King Chilies', 'Garlic']
      },
      {
        name: 'Gudok & Wahan Mosdeng',
        category: 'Non-Vegetarian',
        description: 'Mashed potato, yardlong bean, and berma delicacy prepared in hollow green bamboo; and grilled pork salad tossed with charred green chilies and onions.',
        keyIngredients: ['Pork / Fish', 'Berma', 'Charred Green Chilies', 'Ginger', 'Coriander']
      },
      {
        name: 'Chakhwi & Awandru',
        category: 'Vegetarian',
        description: 'Aromatic rice flour gravy soup cooked with bamboo shoots, jackfruit seeds, and local green herbs.',
        keyIngredients: ['Rice Flour Batter', 'Bamboo Shoots', 'Jackfruit Seeds', 'Green Leaves', 'Chili Paste']
      }
    ],
    festivals: [
      {
        name: 'Kharchi Puja (Worship of the 14 Gods)',
        timing: 'Ashadha (July / 7 Days)',
        significance: 'Historic state festival in Old Agartala where 14 royal dynasty deities (Chaturdasha Devata) are worshipped to cleanse Mother Earth.',
        keyRitual: 'Procession of 14 brass deity heads to the sacred Howrah River for morning bathing, followed by royal palace rituals.',
        highlight: 'Confluence of tribal and non-tribal communities in week-long festive fairgrounds.'
      },
      {
        name: 'Garia Puja',
        timing: 'Baisakh (April / 7 Days)',
        significance: 'Post-Jhum harvest festival honoring Baba Garia, the deity of livestock, peace, and agricultural abundance.',
        keyRitual: 'Worshipping a decorated green bamboo pole representing Lord Garia with fowl, cotton thread, and rice beer.',
        highlight: 'Community dancing from house to house with the holy Garia bamboo deity.'
      },
      {
        name: 'Diwali at Matabari (Tripura Sundari)',
        timing: 'Kartik Amavasya (October - November)',
        significance: 'Grand religious gathering of over 500,000 pilgrims at the historic Tripura Sundari Temple in Udaipur.',
        keyRitual: 'Illumination of the Kalyan Sagar lake with thousands of earthen lamps and holy dip with sacred tortoises.',
        highlight: 'Temple and lake glowing with golden lights throughout the night.'
      }
    ],
    craftsAndAttire: {
      textiles: ['Risa (Traditional Narrow Handwoven Chest Drape)', 'Rignai (Indigenous Loincloth Wraparound)', 'Rikutu (Upper Body Drape)'],
      handicrafts: ['Tripura Bamboo & Cane Furniture', 'Bamboo Lampshades and Screens', 'Carved Wooden Masks', 'Sitalpati Cold Bamboo Mats'],
      traditionalMenAttire: 'Dhoti with Rikutu scarf and Pagri (Turban).',
      traditionalWomenAttire: 'Rignai (patterned wraparound) tied with a colorful handwoven Risa across the chest and multi-strand silver coin necklaces.',
      giTaggedCrafts: ['Tripura Queen Pineapple', 'Tripura Risa Handloom (Textile)']
    },
    historyTimeline: [
      {
        era: 'c. 1400 - 1949 AD',
        title: 'The Manikya Dynasty of Tripura',
        description: 'Longest continuous ruling royal dynasty in Indian history (over 180 successive kings recorded in the Sanskrit chronicle Rajmala).'
      },
      {
        era: '1890 - 1940 AD',
        title: 'Rabindranath Tagore & Tripura Monarchy',
        description: 'Nobel laureate Rabindranath Tagore was patronized by Maharaja Bir Chandra and Radha Kishore Manikya, setting novels like Rajarshi in Tripura.'
      },
      {
        era: '1947 - 1949 AD',
        title: 'Integration into Indian Union',
        description: 'Maharani Kanchan Prabha Devi signed the Tripura Merger Agreement on 9 September 1949, joining the Indian Union.'
      },
      {
        era: '1972 AD',
        title: 'Full Statehood of Tripura',
        description: 'Granted full statehood on 21 January 1972 under the North-Eastern Areas Reorganisation Act with Agartala as capital.'
      }
    ]
  }
];
