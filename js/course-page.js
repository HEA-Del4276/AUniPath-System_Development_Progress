// Course Page - Direct Display (No Multi-Step)
document.addEventListener('DOMContentLoaded', function() {
    // University data array
    const universities = [
      {
        name: 'FEU Institute of Technology',
        logo: 'Elements/Images/feutech-logo.png',
        url: 'https://www.feutech.edu.ph/',
        info: 'FEU Tech is a top technology school in Manila, offering innovative programs in IT, engineering, and multimedia.',
        courses: [
          'Bachelor of Fine Arts in Animation',
          'Bachelor of Science in Digital Animation',
          'Bachelor of Arts in Multimedia Arts',
          'Bachelor in Game Design & Animation',
          'Bachelor of Science in Information Technology',
          'Bachelor of Science in Mechanical Engineering',
          'Bachelor of Science in Industrial Engineering',
          'Bachelor of Science in Accountancy',
          'Bachelor of Science in Management Accounting',
          'Bachelor of Science in Forensic Accounting',
          'Bachelor of Science in Public Accounting',
          'Bachelor of Science in Corporate Accounting'
        ]
      },
      {
        name: 'Polytechnic University of the Philippines (PUP)',
        logo: 'Elements/Images/pup-logo.png',
        url: 'https://www.pup.edu.ph/',
        info: 'PUP is a leading state university known for affordable, quality education in engineering, technology, and business.',
        courses: [
          'Bachelor of Science in Computer Science',
          'Bachelor of Science in Information Technology',
          'Bachelor of Science in Civil Engineering',
          'Bachelor of Science in Electrical Engineering',
          'Bachelor of Science in Industrial Engineering',
          'Bachelor of Science in Biology',
          'Bachelor of Science in Molecular Biology',
          'Bachelor of Science in Environmental Biology',
          'Bachelor of Science in Microbiology',
          'Bachelor of Science in Neurobiology',
          'Bachelor of Science in Accountancy',
          'Bachelor of Science in Management Accounting',
          'Bachelor of Science in Forensic Accounting',
          'Bachelor of Science in Public Accounting',
          'Bachelor of Science in Corporate Accounting'
        ]
      },
      {
        name: 'University of Santo Tomas (UST)',
        logo: 'Elements/Images/ust-logo.png',
        url: 'https://www.ust.edu.ph/',
        info: 'UST is the oldest university in Asia, offering a wide range of programs in science, engineering, and the arts.',
        courses: [
          'Bachelor of Science in Computer Science',
          'Bachelor of Science in Information Technology',
          'Bachelor of Science in Mechanical Engineering',
          'Bachelor of Science in Civil Engineering',
          'Bachelor of Science in Electrical Engineering',
          'Bachelor of Science in Industrial Engineering',
          'Bachelor of Science in Biology',
          'Bachelor of Science in Molecular Biology',
          'Bachelor of Science in Environmental Biology',
          'Bachelor of Science in Microbiology',
          'Bachelor of Science in Neurobiology',
          'Bachelor of Science in Accountancy',
          'Bachelor of Science in Management Accounting',
          'Bachelor of Science in Forensic Accounting',
          'Bachelor of Science in Public Accounting',
          'Bachelor of Science in Corporate Accounting'
        ]
      },
      {
        name: 'Pamantasan ng Lungsod ng Maynila (PLM)',
        logo: 'Elements/Images/plm-logo.png',
        url: 'https://www.plm.edu.ph/',
        info: 'PLM is a premier city university in Manila, known for excellence in engineering, science, and accountancy.',
        courses: [
          'Bachelor of Science in Computer Science',
          'Bachelor of Science in Information Technology',
          'Bachelor of Science in Civil Engineering',
          'Bachelor of Science in Biology',
          'Bachelor of Science in Molecular Biology',
          'Bachelor of Science in Environmental Biology',
          'Bachelor of Science in Microbiology',
          'Bachelor of Science in Neurobiology',
          'Bachelor of Science in Accountancy',
          'Bachelor of Science in Management Accounting',
          'Bachelor of Science in Forensic Accounting',
          'Bachelor of Science in Public Accounting',
          'Bachelor of Science in Corporate Accounting'
        ]
      },
      {
        name: 'Ateneo de Manila University (ADMU)',
        logo: 'Elements/Images/admu-logo.png',
        url: 'https://www.ateneo.edu/',
        info: 'Ateneo is a top private university in Quezon City, offering strong programs in science, engineering, and biology.',
        courses: [
          'Bachelor of Science in Computer Science',
          'Bachelor of Science in Biology',
          'Bachelor of Science in Molecular Biology',
          'Bachelor of Science in Environmental Biology',
          'Bachelor of Science in Microbiology',
          'Bachelor of Science in Neurobiology'
        ]
      },
      {
        name: 'De La Salle University (DLSU)',
        logo: 'Elements/Images/dlsu-logo.png',
        url: 'https://www.dlsu.edu.ph/',
        info: 'DLSU is a leading private university in Manila, known for its engineering, technology, and science programs.',
        courses: [
          'Bachelor of Science in Computer Science',
          'Bachelor of Science in Information Technology',
          'Bachelor of Science in Mechanical Engineering',
          'Bachelor of Science in Civil Engineering',
          'Bachelor of Science in Electrical Engineering',
          'Bachelor of Science in Industrial Engineering',
          'Bachelor of Science in Biology',
          'Bachelor of Science in Molecular Biology',
          'Bachelor of Science in Environmental Biology',
          'Bachelor of Science in Microbiology',
          'Bachelor of Science in Neurobiology',
          'Bachelor of Science in Accountancy',
          'Bachelor of Science in Management Accounting',
          'Bachelor of Science in Forensic Accounting',
          'Bachelor of Science in Public Accounting',
          'Bachelor of Science in Corporate Accounting'
        ]
      },
      {
        name: 'University of the Philippines Diliman (UP Diliman)',
        logo: 'Elements/Images/up-logo.png',
        url: 'https://upd.edu.ph/',
        info: 'UP Diliman is the flagship campus of the national university, offering top programs in engineering, science, and IT.',
        courses: [
          'Bachelor of Science in Computer Science',
          'Bachelor of Science in Information Technology',
          'Bachelor of Science in Mechanical Engineering',
          'Bachelor of Science in Civil Engineering',
          'Bachelor of Science in Electrical Engineering',
          'Bachelor of Science in Industrial Engineering',
          'Bachelor of Science in Biology',
          'Bachelor of Science in Molecular Biology',
          'Bachelor of Science in Environmental Biology',
          'Bachelor of Science in Microbiology',
          'Bachelor of Science in Neurobiology',
          'Bachelor of Science in Accountancy',
          'Bachelor of Science in Management Accounting',
          'Bachelor of Science in Forensic Accounting',
          'Bachelor of Science in Public Accounting',
          'Bachelor of Science in Corporate Accounting'
        ]
      },
      {
        name: 'Mapúa University',
        logo: 'Elements/Images/mapua-logo.png',
        url: 'https://www.mapua.edu.ph/',
        info: 'Mapúa is a top engineering and technology university in Manila, with strong programs in engineering and IT.',
        courses: [
          'Bachelor of Science in Computer Science',
          'Bachelor of Science in Information Technology',
          'Bachelor of Science in Mechanical Engineering',
          'Bachelor of Science in Civil Engineering',
          'Bachelor of Science in Electrical Engineering',
          'Bachelor of Science in Industrial Engineering',
          'Bachelor of Science in Biology',
          'Bachelor of Science in Molecular Biology',
          'Bachelor of Science in Environmental Biology',
          'Bachelor of Science in Microbiology',
          'Bachelor of Science in Neurobiology',
          'Bachelor of Science in Accountancy',
          'Bachelor of Science in Management Accounting',
          'Bachelor of Science in Forensic Accounting',
          'Bachelor of Science in Public Accounting',
          'Bachelor of Science in Corporate Accounting'
        ]
      }
    ];

    // Render university cards dynamically
    function renderUniversityCards(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
      container.innerHTML = '';
      universities.forEach(univ => {
        const card = document.createElement('div');
        card.className = 'university-card';
        card.innerHTML = `
          <div class="university-card-content">
            <a href="${univ.url}" target="_blank" class="university-logo-link">
              <img src="${univ.logo}" alt="${univ.name} Logo" class="university-logo" />
            </a>
            <div class="university-name">${univ.name}</div>
            <div class="university-info">${univ.info}</div>
            <div class="university-courses">
              <span class="courses-label">Courses:</span>
              <ul class="courses-list">
                ${univ.courses.map(course => `<li>${course}</li>`).join('')}
              </ul>
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    }
    console.log('Course page JavaScript loaded');
    
    // Get all necessary elements
    const courseSearchContainer = document.querySelector('.course-search-container');
    const findCourseBtn = document.querySelector('.course-btn');
    const findUniversityBtn = document.querySelector('.university-btn');
    const courseSearchInput = document.querySelector('.course-search-input');
    const recommendedSection = document.querySelector('.recommended-universities-section');
    const updatesSection = document.querySelector('.scholarship-updates-section');
    const universitySeparator = document.querySelector('.university-separator');
    const recommendedTitle = document.querySelector('.recommended-title');
    const updatesTitle = document.querySelector('.scholarship-updates-title');
    const footer = document.querySelector('.main-footer');
    
    // Check if elements exist
    if (!courseSearchContainer || !findCourseBtn || !findUniversityBtn) {
        console.error('Required elements not found');
        return;
    }
    
    console.log('Elements found, initializing...');
    
    // Show all sections directly since choice was made on homepage
    showAllSections();
    
    // Set up course content by default (since this is the course page)
    setupCourseContent();
    
    function showAllSections() {
        if (courseSearchContainer) courseSearchContainer.style.display = 'flex';
        if (recommendedSection) recommendedSection.style.display = 'block';
        if (updatesSection) updatesSection.style.display = 'block';
        if (universitySeparator) universitySeparator.style.display = 'block';
        if (footer) footer.style.display = 'block';
        console.log('All sections shown');
    }
    
    function setupCourseContent() {
        console.log('Setting up course content');
        
        // Update active button states
        findCourseBtn.classList.add('active');
        findUniversityBtn.classList.remove('active');
        
        // Update content for course mode
        if (courseSearchInput) courseSearchInput.placeholder = 'Search a course';
        if (recommendedTitle) recommendedTitle.textContent = 'Recommended Courses for you';
        if (updatesTitle) updatesTitle.textContent = 'Top Universities that offers the course';
        
        // Show course cards in recommended section
        showCourseCards();
    }
    
    // Event listener for course button (refresh functionality only)
    findCourseBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Find Course button clicked');
        setupCourseContent();
    });
    
    // Redirect to university page when university button is clicked
    findUniversityBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Find University button clicked - redirecting to university page');
        window.location.href = '../universitypage.html';
    });
    
    function showCourseCards() {
        renderUniversityCards('universitiesTrack');
    }
    
    // Recommended Courses Section Setup
    const browseAllCoursesSection = document.getElementById('browseAllCoursesSection');
    const recommendedSliderTrack = document.getElementById('recommendedSliderTrack');
    const recommendedPrevBtn = document.getElementById('recommendedPrevBtn');
    const recommendedNextBtn = document.getElementById('recommendedNextBtn');
    let recommendedSliderIndex = 0;
    let recommendedSliderCards = [];
    const recommendedCoursesDetailed = [
      { icon: '🎨', title: 'Bachelor of Fine Arts in Animation', specialization: '2D, 3D Animation, Character Design', keywords: ['animation', 'fine arts'] },
      { icon: '🌀', title: 'Bachelor of Science in Digital Animation', specialization: 'Visual Effects, CGI, Motion Graphics', keywords: ['animation', 'digital'] },
      { icon: '📽️', title: 'Bachelor of Arts in Multimedia Arts', specialization: 'Graphic Design, Interactive Media', keywords: ['multimedia', 'animation'] },
      { icon: '👾', title: 'Bachelor in Game Design & Animation', specialization: 'Game Animation, Rigging', keywords: ['game', 'animation'] },
      { icon: '💻', title: 'Bachelor of Science in Computer Science', specialization: 'Software, AI, Algorithms', keywords: ['computer', 'coding', 'technology'] },
      { icon: '🖥️', title: 'Bachelor of Science in Information Technology', specialization: 'Web/Mobile Development', keywords: ['information', 'technology', 'coding'] },
      { icon: '⚙️', title: 'Bachelor of Science in Mechanical Engineering', specialization: 'Thermodynamics, Robotics', keywords: ['mechanical', 'engineering'] },
      { icon: '🏗️', title: 'Bachelor of Science in Civil Engineering', specialization: 'Construction, Structural Design', keywords: ['civil', 'engineering'] },
      { icon: '💡', title: 'Bachelor of Science in Electrical Engineering', specialization: 'Circuits, Power Systems', keywords: ['electrical', 'engineering'] },
      { icon: '📚', title: 'Bachelor of Science in Forensic Accounting', specialization: 'Auditing, Investigation', keywords: ['forensic', 'accounting'] }
    ];
    
    function filterRecommendedSlider(filter) {
      if (!filter) return recommendedCoursesDetailed;
      filter = filter.toLowerCase();
      return recommendedCoursesDetailed.filter(card =>
        card.keywords.some(k => filter.includes(k))
      );
    }
    
    function renderRecommendedSlider(cards, startIdx = 0) {
      recommendedSliderTrack.innerHTML = '';
      for (let i = startIdx; i < Math.min(cards.length, startIdx + 3); i++) {
        const card = cards[i];
        const cardDiv = document.createElement('div');
        cardDiv.className = 'recommended-slider-card';
        cardDiv.innerHTML = `
          <div class="recommended-slider-icon-circle">${card.icon}</div>
          <div class="recommended-slider-title">${card.title}</div>
          <div class="recommended-slider-specialization">${card.specialization}</div>
        `;
        recommendedSliderTrack.appendChild(cardDiv);
      }
    }
    
    // Replace your current findCourseBtn click with this:
    findCourseBtn.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('Find Course button clicked');
  
      const filter = courseSearchInput.value.trim().toLowerCase();
      const filtered = filterRecommendedSlider(filter);
  
      if (!filter) {
        alert('Please type a course keyword to find a course.');
        return;
      }
  
      if (filtered.length === 0) {
        alert('No matching course found. Try another keyword.');
        return;
      }
  
      // Show recommended, hide browse-all
      if (recommendedSection) recommendedSection.style.display = 'block';
      if (browseAllCoursesSection) browseAllCoursesSection.style.display = 'none';
      if (updatesSection) updatesSection.style.display = 'block';
  
      recommendedSliderCards = filtered;
      recommendedSliderIndex = 0;
      renderRecommendedSlider(recommendedSliderCards, recommendedSliderIndex);
    });
    
    // Arrow nav
    if (recommendedPrevBtn) {
      recommendedPrevBtn.addEventListener('click', function () {
        if (recommendedSliderIndex > 0) {
          recommendedSliderIndex--;
          renderRecommendedSlider(recommendedSliderCards, recommendedSliderIndex);
        }
      });
    }
    if (recommendedNextBtn) {
      recommendedNextBtn.addEventListener('click', function () {
        if (recommendedSliderIndex < recommendedSliderCards.length - 3) {
          recommendedSliderIndex++;
          renderRecommendedSlider(recommendedSliderCards, recommendedSliderIndex);
        }
      });
    }
});

