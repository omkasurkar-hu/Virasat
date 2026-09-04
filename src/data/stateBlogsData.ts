import { StateExperienceBlog } from '../types';

export const INITIAL_STATE_BLOGS: StateExperienceBlog[] = [
  {
    id: 'blog-odisha-raghurajpur',
    title: 'The Whispering Walls of Raghurajpur: Walking Through Odisha’s Living Canvas',
    stateId: 'odisha',
    stateName: 'Odisha',
    authorName: 'Priyadarshini Jena',
    authorBio: 'Heritage researcher & cultural documentarian',
    date: 'February 18, 2026',
    readTime: '4 min read',
    coverImage: 'https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&w=1200&q=80',
    content: `Tucked amid groves of coconut, betel nut, and jackfruit in the Puri district lies Raghurajpur—a village where time has chosen to pause. From the moment you step onto its quiet central lane, every single household reveals itself as an active atelier. Outer walls are washed in lime and painted with intricate murals depicting the celestial pastimes of Lord Jagannath, Radha-Krishna, and episodes from the Ramayana.\n\nI sat on the veranda of a master Chitrakar, Shri Banamali Mohapatra. As he ground volcanic stones and burned coconut shells to extract pitch black, he showed me the patient discipline of preparing dried palm leaves (Tala Patra). With an iron stylus called a Lekhani, his fingers moved with microscopic precision, incising fluid verses into leaves that had soaked in turmeric water for months.\n\n"We do not paint with synthetic dyes," he told me, softly blowing dust from the leaf. "The conch shell gives us white, Hingula mineral gives red, and Harital gives yellow. When nature gives the color, the painting breathes for three hundred years." Leaving Raghurajpur, you realize heritage isn't preserved in glass cases; it lives in the steady pulse of village artisans who refuse to let centuries of memory fade.`,
    tags: ['Artisans', 'Pattachitra', 'Craft Village', 'Living Heritage'],
    preservationTip: 'Always purchase directly from the artisan household in the village rather than third-party souvenir resellers in commercial markets. This guarantees fair artisan wages and keeps the craft viable for the next generation.',
    likes: 42,
    isUserAuthored: false
  },
  {
    id: 'blog-rajasthan-jaisalmer',
    title: 'Night in the Living Fort: Golden Sandstone and Kamaicha Ballads of Jaisalmer',
    stateId: 'rajasthan',
    stateName: 'Rajasthan',
    authorName: 'Kabir Malhotra',
    authorBio: 'Architect & desert nomad',
    date: 'January 28, 2026',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?auto=format&fit=crop&w=1200&q=80',
    content: `Sonar Qila, the Golden Fort of Jaisalmer, is one of the very few surviving 'living forts' on earth. Nearly 4,000 residents still eat, pray, weave, and sleep within its 99 honey-colored bastions. Arriving at dusk, the entire fort glowed like ignited amber against the Thar desert horizon.\n\nIn a cobblestone cul-de-sac near the Laxminath Temple, I was drawn to the haunting, bowed melodies of a 17-stringed Kamaicha played by an elderly Manganiyar ustad. His voice, weathered by desert dust, sang of rainy clouds and royal valor with an acoustic purity that echoed across the stone alleyways.\n\nThe intricate Jharokha balconies overhead are carved with such lace-like delicacy from yellow Jurassic sandstone that they appear weightless. Yet modern tourism and altered drainage systems place severe stress on these foundations. Walking these ramparts teaches you that preservation requires deep responsibility from every traveler who steps into living history.`,
    tags: ['Architecture', 'Folk Music', 'Desert Heritage', 'Forts'],
    preservationTip: 'Be strictly conscious of water conservation inside Jaisalmer Fort. The medieval sewage conduits were engineered for dry climates; excessive water drainage seeps into the sandstone foundations, risking structural collapses.',
    likes: 68,
    isUserAuthored: false
  },
  {
    id: 'blog-kerala-theyyam',
    title: 'Awakening of the Sacred Fire: A Night with Kannur’s Theyyam Dancers',
    stateId: 'kerala',
    stateName: 'Kerala',
    authorName: 'Ananya Menon',
    authorBio: 'Anthropology graduate & documentary photographer',
    date: 'December 12, 2025',
    readTime: '4 min read',
    coverImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80',
    content: `At 3:00 AM inside a dense sacred grove (Kavu) in Kannur, the tropical darkness was shattered by the roaring thunder of Chenda drums. The smell of burning camphor and crackling dry palm leaves filled the moist night air. Soon, the performer emerged—not as a human actor, but as the living embodiment of the deity Muchilot Bhagavathi.\n\nHis face had been transformed by four hours of meticulous botanical face painting using rice paste, vermilion, and turmeric. Atop his head balanced an astonishing 25-foot crown crafted from fresh areca nut bark and palm fronds. As he leaped across glowing embers with eyes fixed in a divine trance, the entire village community bowed their heads in reverent silence.\n\nTheyyam is an extraordinary egalitarian ritual where marginalized caste performers become revered deities whom even village elders approach for blessings and arbitration. It is a spiritual and artistic tradition that dates back millennia, rooted in nature worship, ancestor reverence, and fearless artistic endurance.`,
    tags: ['Rituals', 'Sacred Groves', 'Performing Art', 'Malabar'],
    preservationTip: 'Never use intrusive strobe or camera flash when attending sacred Theyyam shrines. The performers enter deep psychological and spiritual states, and bright flashes disorient them while dancing near open pyres.',
    likes: 54,
    isUserAuthored: false
  },
  {
    id: 'blog-himachal-tabo',
    title: 'Silent Chants in the Cold Desert: Winter Morning at Tabo Monastery',
    stateId: 'himachal-pradesh',
    stateName: 'Himachal Pradesh',
    authorName: 'Tenzin Dorjee & Maya Sen',
    authorBio: 'High-altitude trail explorers',
    date: 'November 4, 2025',
    readTime: '3 min read',
    coverImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    content: `Perched 10,000 feet above sea level in the windswept Spiti Valley, Tabo Monastery has stood uninterrupted since 996 CE. Unlike the whitewashed cliff-side gompas common in Ladakh, Tabo is built directly from mud, straw, and sun-baked earth, blending seamlessly into the arid scree slopes of the Himalayas.\n\nStepping inside the Tsug Lha-khang (assembly hall) required letting my eyes adjust to the darkness. When they did, a breathtaking sight appeared: 33 life-sized clay sculptures of Buddhist deities mounted directly on the mud walls, surrounded by millennium-old frescoes painted with crushed lapis lazuli, malachite, and gold leaf. These murals represent an artistic bridge between ancient Kashmir and western Tibet.\n\nWe sat on wool rugs as a young lama poured salted butter tea into wooden bowls. The morning chants vibrated through the earth-walled chamber with a resonant hum that felt older than memory itself. Here, in the quietest pocket of India, heritage is guarded not by armies, but by altitude and sacred dedication.`,
    tags: ['Monasteries', 'Mural Art', 'Spiti Valley', 'Ancient Manuscripts'],
    preservationTip: 'Inside mud-brick shrines, do not touch century-old earthen walls or frescos. The natural oils and moisture from human hands cause irreversible chemical degradation to mineral pigments.',
    likes: 37,
    isUserAuthored: false
  }
];

export const STATE_PRESET_IMAGES: Record<string, string> = {
  'odisha': 'https://images.unsplash.com/photo-1590077428593-a55bb07c4665?auto=format&fit=crop&w=1200&q=80',
  'rajasthan': 'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?auto=format&fit=crop&w=1200&q=80',
  'kerala': 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80',
  'himachal-pradesh': 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
  'uttar-pradesh': 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
  'tamil-nadu': 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
  'karnataka': 'https://images.unsplash.com/photo-1600100397608-f010f443905f?auto=format&fit=crop&w=1200&q=80',
  'west-bengal': 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80',
  'jammu-and-kashmir': 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
  'gujarat': 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80',
  'assam': 'https://images.unsplash.com/photo-1604537466158-719b1972edd8?auto=format&fit=crop&w=1200&q=80',
  'madhya-pradesh': 'https://images.unsplash.com/photo-1600100397608-f010f443905f?auto=format&fit=crop&w=1200&q=80',
  'default': 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80'
};
