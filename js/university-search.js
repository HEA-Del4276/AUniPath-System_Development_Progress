// University Page Search & Filter Functionality
// Filters universities by type (e.g., 'private', 'public') and name

document.addEventListener('DOMContentLoaded', function() {
  // University data array with type
  const universities = [
    {
      name: 'FEU Institute of Technology',
      type: 'private',
      logo: 'https://c.animaapp.com/nZYq2W0H/img/feutech-logo-1@2x.png',
      url: 'https://www.feutech.edu.ph/',
      info: [
        'Tech-driven, modern facilities',
        'Modern learning environment',
        'Strong industry internship links',
        'Innovation and research driven',
        'Various scholarships for achievers'
      ],
      keywords: [
        // Scholarship-related
        'merit scholarship', 'financial aid', 'academic scholar', 'grants', 'discount',
        // Tuition
        'private', 'tuition-based', 'moderate cost',
        // Specialty
        'technology', 'engineering', 'computer science', 'modern', 'tech-driven', 'innovation',
        // Location
        'Manila', 'Sampaloc', 'Metro Manila',
        // General
        'facilities', 'FEU Tech', 'FEU Institute of Technology'
      ]
    },
    {
      name: 'Polytechnic University of the Philippines',
      type: 'public',
      logo: 'https://www.pup.edu.ph/about/images/PUPLogo.png',
      url: 'https://www.pup.edu.ph/',
      info: [
        'Free quality public education',
        'Strong board exam performance',
        'Bold, active student life',
        'Mass comm, business excellence',
        'Massive student community'
      ],
      keywords: [
        // Scholarship-related
        'free tuition', 'Iskolar ng Bayan', 'CHED', 'government scholar', 'public scholarship', 'low-cost education',
        // Tuition
        'public', 'no tuition', 'affordable', 'government-funded',
        // Specialty
        'mass communication', 'education', 'business', 'engineering', 'board exam', 'activism',
        // Location
        'Sta. Mesa', 'Manila', 'Metro Manila',
        // General
        'mass-oriented', 'PUP', 'polytechnic', 'education for all', 'board exams', 'working student', 'Polytechnic University of the Philippines'
      ]
    },
    {
      name: 'University of Santo Tomas',
      type: 'private',
      logo: 'https://www.ashraeph.org/files/83a19939-bbd3-4b8c-9e35-0b722b9ca360.png',
      url: 'https://www.ust.edu.ph/',
      info: [
        'Oldest university in Asia',
        'Leading health science courses',
        'Catholic-based education',
        'Global academic partnerships',
        'Historic campus facilities'
      ],
      keywords: [
        // Scholarship-related
        'UST scholarship', 'San Martin scholar', 'need-based', 'academic scholar',
        // Tuition
        'private', 'Catholic', 'tuition fee',
        // Specialty
        'medicine', 'nursing', 'health sciences', 'oldest university', 'Catholic education', 'heritage',
        // Location
        'España', 'Manila', 'Sampaloc', 'Metro Manila',
        // General
        'UST', 'Dominican', "Asia's oldest", 'prestigious', 'University of Santo Tomas'
      ]
    },
    {
      name: 'Pamantasan ng Lungsod ng Maynila',
      type: 'public',
      logo: 'https://c.animaapp.com/nZYq2W0H/img/feutech-logo-1-3@2x.png',
      url: 'https://www.plm.edu.ph/',
      info: [
        'Free for Manileños',
        'High licensure exam rates',
        'Public service focus',
        'Competitive admission standards',
        'Central Intramuros campus'
      ],
      keywords: [
        // Scholarship-related
        'free for Manileños', 'city-funded', 'PLM scholarship', 'government-funded', 'Manila resident',
        // Tuition
        'public', 'free tuition', 'exclusive for Manila residents',
        // Specialty
        'law', 'public service', 'medicine', 'high licensure rates',
        // Location
        'Intramuros', 'Manila', 'Metro Manila',
        // General
        'PLM', 'scholarship', 'Pamantasan ng Lungsod ng Maynila'
      ]
    },
    {
      name: 'Ateneo de Manila University',
      type: 'private',
      logo: 'https://www.kayafc.com/wp-content/uploads/2022/11/Ateneo_de_Manila_University_seal.svg_.png',
      url: 'https://www.ateneo.edu/',
      info: [
        'Prestigious Jesuit education',
        'Excellence in liberal arts',
        'Strong alumni network',
        'Top-tier research programs',
        'Beautiful Katipunan campus'
      ],
      keywords: [
        // Scholarship-related
        'financial aid', 'Ateneo scholarship', 'Jesuit mission', 'need-based', 'merit scholarship', 'academic grants',
        // Tuition
        'private', 'high tuition', 'elite',
        // Specialty
        'liberal arts', 'humanities', 'law', 'business', 'Jesuit education',
        // Location
        'Katipunan', 'Quezon City', 'Metro Manila',
        // General
        'Ateneo', 'scholarship', 'social involvement', 'blue eagles', 'prestige', 'Ateneo de Manila University'
      ]
    },
    {
      name: 'De La Salle University',
      type: 'private',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/De_La_Salle_University_Seal.svg/360px-De_La_Salle_University_Seal.svg.png',
      url: 'https://www.dlsu.edu.ph/',
      info: [
        'Leading business education',
        'Strong engineering programs',
        'International partnerships',
        'Modern Taft campus',
        'Excellent sports programs'
      ],
      keywords: [
        // Scholarship-related
        'Star Scholars', 'financial assistance', 'Br. Andrew scholarship', 'academic grants', 'need-based', 'STEM scholarships',
        // Tuition
        'private', 'high tuition', 'exclusive',
        // Specialty
        'business', 'engineering', 'accountancy', 'Lasallian values', 'research',
        // Location
        'Taft', 'Manila', 'Metro Manila',
        // General
        'La Salle', 'Lasallian', 'international', 'DLSU', 'Catholic', 'green', 'De La Salle University'
      ]
    },
    {
      name: 'University of the Philippines Diliman',
      type: 'public',
      logo: 'https://images.seeklogo.com/logo-png/43/2/university-of-the-philippines-diliman-upd-logo-png_seeklogo-432785.png',
      url: 'https://upd.edu.ph/',
      info: [
        'Premier state university',
        'World-class research facilities',
        'Highly competitive admission',
        'Outstanding faculty members',
        'Free quality education'
      ],
      keywords: [
        // Scholarship-related
        'Iskolar ng Bayan', 'RA 10931', 'free tuition', 'government scholar', 'DOST', 'CHED',
        // Tuition
        'public', 'free', 'state university',
        // Specialty
        'research', 'science', 'law', 'engineering', 'liberal arts', 'competitive', 'board exams', 'national university',
        // Location
        'Diliman', 'Quezon City', 'Metro Manila',
        // General
        'UP', 'UPD', 'premier', 'University of the Philippines Diliman'
      ]
    },
    {
      name: 'Mapúa University',
      type: 'private',
      logo: 'https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/institutes/logo/170x170/806.jpg?v=1628747483',
      url: 'https://www.mapua.edu.ph/',
      info: [
        'Top engineering school',
        'Industry-relevant curriculum',
        'High board exam passing rates',
        'Strong industry connections',
        'Modern Intramuros campus'
      ],
      keywords: [
        // Scholarship-related
        'Mapua scholar', 'academic excellence', 'grants', 'board topnotcher scholarship',
        // Tuition
        'private', 'moderate tuition', 'merit-based',
        // Specialty
        'engineering', 'architecture', 'IT', 'board exam', 'technology-focused', 'digital innovation',
        // Location
        'Intramuros', 'Manila', 'Metro Manila',
        // General
        'Mapua', 'science', 'STEM', 'innovation', 'digital', 'Mapúa University'
      ]
    }
  ];

  // Filter and render recommended universities
  function filterUniversities(query) {
    query = query.trim().toLowerCase();
    if (!query) return universities;
    return universities.filter(u =>
      u.type.toLowerCase().includes(query) ||
      u.name.toLowerCase().includes(query) ||
      (u.keywords && u.keywords.some(k => k.toLowerCase().includes(query)))
    );
  }

  function renderRecommendedUniversities(filtered) {
    const container = document.getElementById('universitiesTrack');
    if (!container) return;
    container.innerHTML = '';
    filtered.forEach(u => {
      const card = document.createElement('div');
      card.className = 'university-card';
      card.innerHTML = `
        <div class="university-logo-container">
          <div class="university-logo-wrapper">
            <a href="${u.url}" target="_blank">
              <img class="university-logo" src="${u.logo}" alt="${u.name} Logo" />
            </a>
          </div>
        </div>
        <h3 class="university-name">${u.name}</h3>
        <div class="university-info">
          ${u.info.map(i => `<div class='info-item'><img class='checkmark-icon' src='https://c.animaapp.com/nZYq2W0H/img/vector-19.svg' alt='Checkmark' /><div class='info-text'>${i}</div></div>`).join('')}
        </div>
      `;
      container.appendChild(card);
    });
  }

  // Search bar and button
  const searchInput = document.querySelector('.course-search-input');
  const findUniversityBtn = document.getElementById('findUniversityBtn');

  if (findUniversityBtn && searchInput) {
    findUniversityBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const query = searchInput.value;
      const filtered = filterUniversities(query);
      // Show recommended section, hide browse-all
      document.getElementById('recommendedSection').style.display = 'block';
      document.getElementById('browseAllUniversitiesSection').style.display = 'none';
      renderRecommendedUniversities(filtered);
    });
  }
});
