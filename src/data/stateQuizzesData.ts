import { StateQuizQuestion } from '../types';

export const STATE_QUIZZES_DATA: StateQuizQuestion[] = [
  // Rajasthan
  {
    id: 'raj-1',
    stateId: 'rajasthan',
    question: 'Which UNESCO World Heritage stepwell in Rajasthan is famed for having 3,500 narrow stone steps across 13 stories?',
    options: ['Rani ki Vav', 'Chand Baori (Abhaneri)', 'Adalaj Stepwell', 'Agrasen ki Baoli'],
    correctIndex: 1,
    explanation: 'Chand Baori in Abhaneri, Rajasthan is one of the deepest and most geometrically intricate stepwells in the world, built in the 9th century by King Chanda.',
    topic: 'Monuments'
  },
  {
    id: 'raj-2',
    stateId: 'rajasthan',
    question: 'What is the signature folk dance of Rajasthan performed by women in flowing Ghaghara skirts with fast twirls?',
    options: ['Garba', 'Ghoomar', 'Lavani', 'Bihu'],
    correctIndex: 1,
    explanation: 'Ghoomar was originally developed by the Bhil tribe and later embraced by Rajput royal courts, characterized by pirouetting circular movements.',
    topic: 'Dance & Music'
  },
  {
    id: 'raj-3',
    stateId: 'rajasthan',
    question: 'Which traditional Rajasthani dish consists of spiced baked wheat flour balls served with mixed lentils and sweetened crushed flour?',
    options: ['Litti Chokha', 'Dal Baati Churma', 'Puran Poli', 'Makki Roti Sarson Saag'],
    correctIndex: 1,
    explanation: 'Dal Baati Churma is the culinary cornerstone of Rajasthan, pairing slow-baked baatis dipped in desi ghee with spicy Panchmel dal and sweet churma.',
    topic: 'Cuisine'
  },

  // Maharashtra
  {
    id: 'mah-1',
    stateId: 'maharashtra',
    question: 'The Kailash Temple at Ellora Caves (Cave 16) is internationally celebrated for which engineering marvel?',
    options: ['Built entirely from wood', 'Carved top-to-bottom from a single monolithic basalt rock', 'Built underwater', 'Constructed with zero mortar and marble'],
    correctIndex: 1,
    explanation: 'The Kailash temple was carved vertically downwards from a single solid basalt cliff face by Rashtrakuta King Krishna I, excavating over 200,000 tons of rock.',
    topic: 'Monuments'
  },
  {
    id: 'mah-2',
    stateId: 'maharashtra',
    question: 'Which 2,500-year-old indigenous tribal wall painting tradition originating in the Sahyadri mountains uses geometric circles, triangles, and squares with rice flour paint?',
    options: ['Madhubani', 'Warli Art', 'Pattachitra', 'Pichwai'],
    correctIndex: 1,
    explanation: 'Warli art uses simple geometric forms to depict nature, community harvest celebrations, and the famous Tarpa circular community dance.',
    topic: 'Handicrafts'
  },
  {
    id: 'mah-3',
    stateId: 'maharashtra',
    question: 'Which vibrant 10-day public festival was transformed by freedom fighter Lokmanya Tilak in 1893 into a grand community celebration?',
    options: ['Ganesh Chaturthi', 'Gudi Padwa', 'Shivaji Jayanti', 'Kumbh Mela'],
    correctIndex: 0,
    explanation: 'Lokmanya Bal Gangadhar Tilak established Sarvajanik Ganeshotsav to unite all sections of Indian society and foster national solidarity.',
    topic: 'Festivals'
  },

  // Kerala
  {
    id: 'ker-1',
    stateId: 'kerala',
    question: 'Which classical dance-theatre of Kerala features elaborate green facial makeup (Paccha), towering headgear (Kireedam), and dramatic eye expressions?',
    options: ['Kathakali', 'Mohiniyattam', 'Theyyam', 'Koodiyattam'],
    correctIndex: 0,
    explanation: 'Kathakali is the world-renowned dance-drama of Kerala where actors use 24 root Mudras and vivid eye movements to portray celestial heroes and villains.',
    topic: 'Dance & Music'
  },
  {
    id: 'ker-2',
    stateId: 'kerala',
    question: 'The multi-course vegetarian feast served on a fresh green plantain leaf during the harvest festival of Onam is called what?',
    options: ['Wazwan', 'Onam Sadhya', 'Chappan Bhog', 'Kalyana Virundhu'],
    correctIndex: 1,
    explanation: 'Onam Sadhya consists of 24 to 28 traditional dishes including Avial, Olan, Thoran, Kalan, and Ada Pradhaman Payasam served in strict customary order.',
    topic: 'Cuisine'
  },
  {
    id: 'ker-3',
    stateId: 'kerala',
    question: 'Which ancient martial art form of Kerala is recognized as one of the oldest fighting systems in the world?',
    options: ['Thang-Ta', 'Silambam', 'Kalaripayattu', 'Gatka'],
    correctIndex: 2,
    explanation: 'Kalaripayattu incorporates dynamic kicks, animal stances, flexibility routines, and weapon combat with Urumi flexible swords.',
    topic: 'History'
  },

  // Tamil Nadu
  {
    id: 'tn-1',
    stateId: 'tamil-nadu',
    question: 'The Brihadisvara Temple at Thanjavur, built by Emperor Raja Raja Chola I in 1010 CE, is famous for having a single-stone granite capstone (Kumbam) weighing approximately how much?',
    options: ['8 tons', '20 tons', '80 tons', '150 tons'],
    correctIndex: 2,
    explanation: 'The monolithic granite dome crowning the 66-meter Vimana weighs approximately 80 tons, rolled up a 6-kilometer inclined ramp by elephants.',
    topic: 'Monuments'
  },
  {
    id: 'tn-2',
    stateId: 'tamil-nadu',
    question: 'Which classical Indian dance form originated in the temples of Tamil Nadu and is known for its geometric Araimandi posture and expressive Abhinaya?',
    options: ['Bharatanatyam', 'Kathak', 'Kuchipudi', 'Manipuri'],
    correctIndex: 0,
    explanation: 'Bharatanatyam is the ancient classical dance tradition of Tamil Nadu based on Bharata Muni’s Natyashastra, revived by Rukmini Devi Arundale and E. Krishna Iyer.',
    topic: 'Dance & Music'
  },
  {
    id: 'tn-3',
    stateId: 'tamil-nadu',
    question: 'Which GI-tagged handwoven silk sari from Tamil Nadu is renowned for its heavy gold Zari borders and Korvai interlocking weave technique?',
    options: ['Banarasi Silk', 'Kanjeevaram (Kanchipuram) Silk', 'Paithani Silk', 'Patan Patola'],
    correctIndex: 1,
    explanation: 'Kanjeevaram saris are woven from pure mulberry silk and pure silver threads dipped in gold in the temple town of Kanchipuram.',
    topic: 'Handicrafts'
  },

  // Uttar Pradesh
  {
    id: 'up-1',
    stateId: 'uttar-pradesh',
    question: 'Which iconic white Makrana marble monument in Agra was commissioned by Emperor Shah Jahan as a mausoleum for Mumtaz Mahal?',
    options: ['Buland Darwaza', 'Taj Mahal', 'Itmad-ud-Daulah', 'Akbar Tomb'],
    correctIndex: 1,
    explanation: 'The Taj Mahal was completed in 1648 CE and is celebrated worldwide as a pinnacle of symmetrical Mughal architecture and Pietra Dura gemstone inlay.',
    topic: 'Monuments'
  },
  {
    id: 'up-2',
    stateId: 'uttar-pradesh',
    question: 'Which world-renowned delicate shadow embroidery technique on fine muslin cloth originated in Lucknow under the Nawabs of Awadh?',
    options: ['Phulkari', 'Chikankari', 'Kantha', 'Kasuti'],
    correctIndex: 1,
    explanation: 'Lucknowi Chikankari incorporates 32 distinct hand-embroidery stitches (such as Bakhiya, Phanda, and Murri) creating sheer shadow patterns on fine fabrics.',
    topic: 'Handicrafts'
  },
  {
    id: 'up-3',
    stateId: 'uttar-pradesh',
    question: 'Which ancient city on the banks of the sacred Ganges is widely considered one of the oldest continuously inhabited cities in the world?',
    options: ['Prayagraj', 'Varanasi (Kashi)', 'Mathura', 'Ayodhya'],
    correctIndex: 1,
    explanation: 'Varanasi (Kashi/Benares) has been a sacred center of learning, philosophy, classical music, and spiritual pilgrimage for over 3,000 years.',
    topic: 'History'
  },

  // Gujarat
  {
    id: 'guj-1',
    stateId: 'gujarat',
    question: 'Which UNESCO World Heritage stepwell in Patan, built by Queen Udayamati in 1063 CE, is shaped like an inverted temple with over 500 major sculptures?',
    options: ['Chand Baori', 'Rani ki Vav', 'Dada Harir Vav', 'Modhera Kund'],
    correctIndex: 1,
    explanation: 'Rani ki Vav (The Queen’s Stepwell) represents the pinnacle of Maru-Gurjara subterranean architecture dedicated to Lord Vishnu’s avatars.',
    topic: 'Monuments'
  },
  {
    id: 'guj-2',
    stateId: 'gujarat',
    question: 'Which vibrant folk dance of Gujarat, performed in concentric circles with rhythmic claps or wooden sticks during Navratri, was inscribed as UNESCO Intangible Cultural Heritage in 2023?',
    options: ['Ghoomar', 'Garba & Dandiya Raas', 'Bhangra', 'Rouf'],
    correctIndex: 1,
    explanation: 'Garba celebrates divine feminine energy (Shakti) around an illuminated clay lamp (Garbha Deep) across 9 joyful nights of Navratri.',
    topic: 'Dance & Music'
  },

  // Punjab
  {
    id: 'pun-1',
    stateId: 'punjab',
    question: 'Which sacred spiritual shrine in Amritsar, lined with pure gold leaf and surrounded by the holy Amrit Sarovar lake, serves free meals to over 100,000 pilgrims daily in its Langar?',
    options: ['Anandpur Sahib', 'Sri Harmandir Sahib (Golden Temple)', 'Fatehgarh Sahib', 'Damdama Sahib'],
    correctIndex: 1,
    explanation: 'Sri Harmandir Sahib was founded by Guru Ram Das Ji and completed with the installation of Adi Granth by Guru Arjan Dev Ji with four open entrances symbolizing universal welcoming.',
    topic: 'Monuments'
  },
  {
    id: 'pun-2',
    stateId: 'punjab',
    question: 'Which vibrant embroidery craft of Punjab features brightly colored geometric silk floss threads stitched onto coarse khaddar fabric?',
    options: ['Phulkari ("Flower Work")', 'Zardozi', 'Sujani', 'Appliqué'],
    correctIndex: 0,
    explanation: 'Phulkari embroidery is traditionally gifted to brides during weddings, featuring dense motifs of gardens, mustard fields, and peacock feathers.',
    topic: 'Handicrafts'
  },

  // West Bengal
  {
    id: 'wb-1',
    stateId: 'west-bengal',
    question: 'Which grand 10-day cultural festival in Kolkata, celebrating Goddess Durga, was inscribed on the UNESCO Representative List of Intangible Cultural Heritage of Humanity?',
    options: ['Kali Puja', 'Durga Puja', 'Rath Yatra', 'Poush Mela'],
    correctIndex: 1,
    explanation: 'Durga Puja transforms Kolkata into the world’s largest open-air art gallery with handcrafted architectural pandals, Dhak drumming, and Dhunuchi dance.',
    topic: 'Festivals'
  },
  {
    id: 'wb-2',
    stateId: 'west-bengal',
    question: 'Which iconic sponge sweet of West Bengal, made from fresh cottage cheese (chhena) cooked in light boiling sugar syrup, holds a GI tag?',
    options: ['Rasgulla (Banglar Rosogolla)', 'Sandesh', 'Mishti Doi', 'Langcha'],
    correctIndex: 0,
    explanation: 'Banglar Rosogolla was perfected in Kolkata in 1868 by confectioner Nobin Chandra Das and secured Geographical Indication (GI) recognition.',
    topic: 'Cuisine'
  },

  // Odisha
  {
    id: 'odi-1',
    stateId: 'odisha',
    question: 'The 13th-century Sun Temple at Konark, designed as a colossal 24-wheeled stone chariot drawn by 7 horses, was built by which monarch?',
    options: ['Kharavela', 'King Narasimhadeva I (Ganga Dynasty)', 'Kapilendra Deva', 'Ashoka'],
    correctIndex: 1,
    explanation: 'King Narasimhadeva I commissioned the Konark Sun Temple in 1250 CE, where the 24 stone wheels function as accurate geometric sundials.',
    topic: 'Monuments'
  },
  {
    id: 'odi-2',
    stateId: 'odisha',
    question: 'Which classical dance of Odisha is distinguished by the rhythmic sculptural Tribhanga posture and fluid serpentine upper torso movements?',
    options: ['Odissi', 'Kathakali', 'Manipuri', 'Sattriya'],
    correctIndex: 0,
    explanation: 'Odissi originated in the temples of Puri and Konark, revived in the 20th century by Guru Kelucharan Mohapatra based on ancient Natyashastra poses.',
    topic: 'Dance & Music'
  },

  // Assam & Northeast
  {
    id: 'asm-1',
    stateId: 'assam',
    question: 'Assam is world-famous for producing which naturally golden-hued wild silk that increases in luster with every wash?',
    options: ['Mulberry Silk', 'Muga Silk (GI Tagged)', 'Eri Silk', 'Tussar Silk'],
    correctIndex: 1,
    explanation: 'Muga silk is an exclusive golden wild silk found only in the Brahmaputra valley of Assam, traditionally woven into ceremonial Mekhela Chador attires.',
    topic: 'Handicrafts'
  },
  {
    id: 'asm-2',
    stateId: 'assam',
    question: 'Which classical dance form of Assam was created in the 15th century by the Vaishnavite saint-scholar Srimanta Sankardeva in island monasteries (Sattras)?',
    options: ['Bihu', 'Sattriya', 'Manipuri', 'Chhau'],
    correctIndex: 1,
    explanation: 'Sattriya is one of the 8 classical dances of India, originating in the riverine monasteries of Majuli to depict stories of Lord Krishna through rhythmic footwork and Khol drums.',
    topic: 'Dance & Music'
  }
];
