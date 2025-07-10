// Course Page - Direct Display (No Multi-Step)
document.addEventListener('DOMContentLoaded', function() {
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
        window.location.href = '../AUNIPATH unipage/universitypage.html';
    });
    
    function showCourseCards() {
        const universitiesTrack = document.getElementById('universitiesTrack');
        universitiesTrack.innerHTML = `
            <!-- Course Card 1 -->
            <div class="course-card">
                <div class="course-photo"></div>
                <div class="course-title">Computer Science</div>
                <div class="course-description">Bachelor of Science in Computer Science</div>
            </div>
            
            <!-- Course Card 2 -->
            <div class="course-card">
                <div class="course-photo"></div>
                <div class="course-title">Information Technology</div>
                <div class="course-description">Bachelor of Science in Information Technology</div>
            </div>
            
            <!-- Course Card 3 -->
            <div class="course-card">
                <div class="course-photo"></div>
                <div class="course-title">Business Administration</div>
                <div class="course-description">Bachelor of Science in Business Administration</div>
            </div>
            
            <!-- Course Card 4 -->
            <div class="course-card">
                <div class="course-photo"></div>
                <div class="course-title">Engineering</div>
                <div class="course-description">Bachelor of Science in Engineering</div>
            </div>
            
            <!-- Course Card 5 -->
            <div class="course-card">
                <div class="course-photo"></div>
                <div class="course-title">Psychology</div>
                <div class="course-description">Bachelor of Arts in Psychology</div>
            </div>
            
            <!-- Course Card 6 -->
            <div class="course-card">
                <div class="course-photo"></div>
                <div class="course-title">Nursing</div>
                <div class="course-description">Bachelor of Science in Nursing</div>
            </div>
        `;
    }
});
