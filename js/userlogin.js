// File: js/userlogin.js

    // Only add form submit handler if form exists (login or signup page)
    var form = document.querySelector('.form-area form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Simulate login/signup success
        var emailInput = form.querySelector('input[type="email"]');
        var passwordInput = form.querySelector('input[type="password"]');
        var email = emailInput ? emailInput.value : '';
        localStorage.setItem('aunipath_logged_in', 'true');
        localStorage.setItem('aunipath_user_email', email);
        updateNavBar();
        // Empty form fields
        if (emailInput) emailInput.value = '';
        if (passwordInput) passwordInput.value = '';
        // Also clear other fields (for signup)
        var otherInputs = form.querySelectorAll('input:not([type="email"]):not([type="password"])');
        otherInputs.forEach(function(input) { input.value = ''; });
      });
    }

    function updateNavBar() {
      const navRight = document.querySelector('.nav-right');
      const email = localStorage.getItem('aunipath_user_email') || '';
      if (navRight) {
        // Determine correct relative path for icons based on current page location
        // Use correct relative links and image paths for each page
        // Determine depth (root, AUNIPATH coursepage, or AUNIPATH unipage)
        let path = window.location.pathname.replace(/\\/g, '/');
        let isCoursePage = path.includes('coursepage.html');
        let isUniPage = path.includes('universitypage.html');
        let isRoot = !isCoursePage && !isUniPage;

        // For links
        let rootPrefix = isRoot ? '' : '../';
        let coursePrefix = isCoursePage ? '' : (isUniPage ? '../AUNIPATH coursepage/' : 'AUNIPATH coursepage/');
        let uniPrefix = isUniPage ? '' : (isCoursePage ? '../AUNIPATH unipage/' : 'AUNIPATH unipage/');

        // For images
        let iconPrefix = isRoot ? 'Elements/Components/' : '../Elements/Components/';
        let unipageImgPrefix = iconPrefix;

        // Only show Home, About, Login, Signup on login/signup pages
        let isLoginPage = path.endsWith('/login.html') || path.endsWith('login.html');
        let isSignupPage = path.endsWith('/signup.html') || path.endsWith('signup.html');
        const isLoggedIn = localStorage.getItem('aunipath_logged_in') === 'true';
        if (isLoginPage || isSignupPage) {
          navRight.innerHTML =
            '<a href="' + rootPrefix + 'index.html" class="nav-link">Home</a>' +
            '<a href="' + rootPrefix + 'about.html" class="nav-link">About</a>' +
            '<a href="' + rootPrefix + 'login.html" class="nav-btn login-btn">Log In</a>' +
            '<a href="' + rootPrefix + 'signup.html" class="nav-btn signup-btn">Sign Up</a>';
        } else {
          // Show Courses & Universities tabs on both coursepage.html and universitypage.html
          let navLinks = `<a href="${rootPrefix}index.html" class="nav-link">Home</a>
            <a href="${rootPrefix}about.html" class="nav-link">About</a>`;
          if (path.includes('coursepage.html')) {
            navLinks += `\n<a href="${coursePrefix}coursepage.html" class="nav-link">Courses</a>`;
          }
          if (path.includes('universitypage.html')) {
            navLinks += `\n<a href="${uniPrefix}universitypage.html" class="nav-link">Universities</a>`;
          }
          let icons = '';
          if (isLoggedIn) {
            icons = `\n<div class="nav-icon notifs" style="position:relative;display:inline-block;">
              <img src="${iconPrefix}notifs.png" alt="Notifications" style="height:44px;width:44px;margin-right:18px;vertical-align:middle;cursor:pointer;" />
              <div class="notifs-dropdown" style="display:none;position:absolute;top:120%;right:0;background:#fff;border:1px solid #ddd;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,0.13);min-width:320px;z-index:30;">
                <div class="notif-item" data-univ="FEU Institute of Technology" style="display:flex;align-items:center;padding:12px 16px;cursor:pointer;gap:12px;">
                  <img src="${iconPrefix}AUniPath Logo 1.png" alt="FEU Tech Logo" style="width:40px;height:40px;border-radius:50%;border:2px solid #8b5cf6;object-fit:cover;" />
                  <div>
                    <div style="font-weight:600;color:#3F118B;">FEU Institute of Technology</div>
                    <div style="color:#8b5cf6;">Scholarship applications open!</div>
                  </div>
                </div>
                <div class="notif-item" data-univ="University of Santo Tomas" style="display:flex;align-items:center;padding:12px 16px;cursor:pointer;gap:12px;">
                  <img src="${iconPrefix}AUniPath Logo 1.png" alt="UST Logo" style="width:40px;height:40px;border-radius:50%;border:2px solid #8b5cf6;object-fit:cover;" />
                  <div>
                    <div style="font-weight:600;color:#3F118B;">University of Santo Tomas</div>
                    <div style="color:#8b5cf6;">Entrance exams announced!</div>
                  </div>
                </div>
                <div class="notif-item" data-univ="De La Salle University" style="display:flex;align-items:center;padding:12px 16px;cursor:pointer;gap:12px;">
                  <img src="${iconPrefix}AUniPath Logo 1.png" alt="DLSU Logo" style="width:40px;height:40px;border-radius:50%;border:2px solid #8b5cf6;object-fit:cover;" />
                  <div>
                    <div style="font-weight:600;color:#3F118B;">De La Salle University</div>
                    <div style="color:#8b5cf6;">Open registration now available!</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="nav-icon profile" style="position:relative;display:inline-block;cursor:pointer;margin-right:48px;">
              <img src="${iconPrefix}profile.png" alt="Profile" style="height:44px;width:44px;vertical-align:middle;border-radius:50%;" />
              <span class="profile-tooltip" style="display:none;position:absolute;top:110%;left:50%;transform:translateX(-50%);background:#fff;color:#3F118B;padding:6px 14px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.12);font-size:0.98rem;white-space:nowrap;z-index:10;">${email}</span>
              <div class="profile-dropdown" style="display:none;position:absolute;top:120%;right:0;background:#fff;border:1px solid #ddd;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,0.13);min-width:180px;z-index:20;">
                <a href="#" class="dropdown-item account-settings" style="display:block;padding:12px 18px;color:#3F118B;text-decoration:none;">Account Settings</a>
                <a href="#" class="dropdown-item view-save" style="display:block;padding:12px 18px;color:#3F118B;text-decoration:none;">View My Save</a>
              </div>
            </div>`;
          } else {
            icons = `\n<a href="${rootPrefix}login.html" class="nav-btn login-btn">Log In</a>\n<a href="${rootPrefix}signup.html" class="nav-btn signup-btn">Sign Up</a>`;
          }
          navRight.innerHTML = navLinks + icons;
        }
        // End of navRight.innerHTML logic
        // Tooltip hover
        const profile = navRight.querySelector('.profile');
        const tooltip = navRight.querySelector('.profile-tooltip');
        if (profile && tooltip) {
          profile.addEventListener('mouseenter', function() {
            tooltip.style.display = 'block';
          });
          profile.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
          });
        }
        // Profile Dropdown logic
        if (profile) {
          const dropdown = navRight.querySelector('.profile-dropdown');
          profile.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
          });
          document.addEventListener('click', function() {
            dropdown.style.display = 'none';
          });
          // Hide dropdown on mouseleave from icon or dropdown
          profile.addEventListener('mouseleave', function() {
            setTimeout(function() {
              if (!dropdown.matches(':hover') && !profile.matches(':hover')) {
                dropdown.style.display = 'none';
              }
            }, 120);
          });
          dropdown.addEventListener('mouseleave', function() {
            setTimeout(function() {
              if (!dropdown.matches(':hover') && !profile.matches(':hover')) {
                dropdown.style.display = 'none';
              }
            }, 120);
          });
        }
        // Notification Dropdown logic
        const notifs = navRight.querySelector('.notifs');
        if (notifs) {
          const notifsDropdown = navRight.querySelector('.notifs-dropdown');
          notifs.addEventListener('click', function(e) {
            e.stopPropagation();
            notifsDropdown.style.display = notifsDropdown.style.display === 'block' ? 'none' : 'block';
          });
          document.addEventListener('click', function() {
            notifsDropdown.style.display = 'none';
          });
          // Hide dropdown on mouseleave from icon or dropdown
          notifs.addEventListener('mouseleave', function() {
            setTimeout(function() {
              if (!notifsDropdown.matches(':hover') && !notifs.matches(':hover')) {
                notifsDropdown.style.display = 'none';
              }
            }, 120);
          });
          notifsDropdown.addEventListener('mouseleave', function() {
            setTimeout(function() {
              if (!notifsDropdown.matches(':hover') && !notifs.matches(':hover')) {
                notifsDropdown.style.display = 'none';
              }
            }, 120);
          });
          // Notification item click
          notifsDropdown.querySelectorAll('.notif-item').forEach(function(item) {
            item.addEventListener('click', function(ev) {
              ev.stopPropagation();
              showNotifErrorModal();
              notifsDropdown.style.display = 'none';
            });
          });
        }
        // Dropdown item actions
        const accountSettings = navRight.querySelector('.account-settings');
        const viewSave = navRight.querySelector('.view-save');
        if (accountSettings) {
          accountSettings.addEventListener('click', function(e) {
            e.preventDefault();
            showAccountSettingsModal();
          });
        }
        if (viewSave) {
          viewSave.addEventListener('click', function(e) {
            e.preventDefault();
            showViewSaveModal();
          });
        }
      }
    }

    // Account Settings Modal
    function showAccountSettingsModal() {
      let modal = document.getElementById('accountSettingsModal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'accountSettingsModal';
        modal.innerHTML = `
          <div class="modal-overlay" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.18);z-index:1000;"></div>
          <div class="modal-content" style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;padding:32px 28px 24px 28px;border-radius:16px;box-shadow:0 8px 32px rgba(63,17,139,0.18);min-width:320px;z-index:1001;max-width:95vw;">
            <button id="closeModalBtn" style="position:absolute;top:12px;right:18px;background:none;border:none;font-size:1.5rem;color:#8b5cf6;cursor:pointer;z-index:1100;">&times;</button>
            <div id="modalDefault">
              <h3 style="color:#3F118B;margin-bottom:18px;">Account Settings</h3>
              <button id="editProfileBtn" style="width:100%;margin-bottom:12px;padding:10px 0;background:#8b5cf6;color:#fff;border:none;border-radius:6px;font-size:1rem;cursor:pointer;">Edit Profile</button>
              <button id="logoutBtn" style="width:100%;padding:10px 0;background:#fff;color:#8b5cf6;border:1.5px solid #8b5cf6;border-radius:6px;font-size:1rem;cursor:pointer;">Logout</button>
            </div>
            <form id="editProfileForm" style="display:none;flex-direction:column;gap:12px;">
              <h3 style="color:#3F118B;margin-bottom:8px;">Edit Profile</h3>
              <input type="text" id="editFirstName" placeholder="First Name" required style="padding:8px 10px;border:1px solid #ccc;border-radius:5px;" />
              <input type="text" id="editLastName" placeholder="Last Name" required style="padding:8px 10px;border:1px solid #ccc;border-radius:5px;" />
              <input type="email" id="editEmail" placeholder="Email Address" required style="padding:8px 10px;border:1px solid #ccc;border-radius:5px;" />
              <input type="password" id="editPassword" placeholder="Password" required style="padding:8px 10px;border:1px solid #ccc;border-radius:5px;" />
              <input type="text" id="editStatus" placeholder="Status (Personalization)" style="padding:8px 10px;border:1px solid #ccc;border-radius:5px;" />
              <button id="confirmEditBtn" type="submit" style="margin-top:10px;padding:10px 0;background:#8b5cf6;color:#fff;border:none;border-radius:6px;font-size:1rem;cursor:not-allowed;opacity:0.6;" disabled>Confirm</button>
              <button id="cancelEditBtn" type="button" style="margin-top:0;padding:10px 0;background:#fff;color:#8b5cf6;border:1.5px solid #8b5cf6;border-radius:6px;font-size:1rem;cursor:pointer;">Cancel</button>
            </form>
          </div>
        `;
        document.body.appendChild(modal);
      }
      modal.style.display = 'block';
      // Modal close on overlay click
      modal.querySelector('.modal-overlay').onclick = function() { modal.style.display = 'none'; };
      // Close modal with X button
      modal.querySelector('#closeModalBtn').onclick = function() { modal.style.display = 'none'; };
      // Edit Profile logic
      const editBtn = modal.querySelector('#editProfileBtn');
      const logoutBtn = modal.querySelector('#logoutBtn');
      const editForm = modal.querySelector('#editProfileForm');
      const modalDefault = modal.querySelector('#modalDefault');
      const confirmBtn = modal.querySelector('#confirmEditBtn');
      const cancelBtn = modal.querySelector('#cancelEditBtn');
      // Show edit form
      editBtn.onclick = function() {
        modalDefault.style.display = 'none';
        editForm.style.display = 'flex';
        // Reset form
        editForm.reset();
        confirmBtn.disabled = true;
        confirmBtn.style.cursor = 'not-allowed';
        confirmBtn.style.opacity = 0.6;
      };
      // Cancel edit
      cancelBtn.onclick = function() {
        editForm.style.display = 'none';
        modalDefault.style.display = 'block';
      };
      // Enable confirm only if all required fields are filled
      editForm.addEventListener('input', function() {
        const allFilled = [...editForm.querySelectorAll('input[required]')].every(input => input.value.trim() !== '');
        confirmBtn.disabled = !allFilled;
        confirmBtn.style.cursor = allFilled ? 'pointer' : 'not-allowed';
        confirmBtn.style.opacity = allFilled ? 1 : 0.6;
      });
      // Confirm edit
      editForm.onsubmit = function(e) {
        e.preventDefault();
        const newEmail = editForm.querySelector('#editEmail').value;
        localStorage.setItem('aunipath_user_email', newEmail);
        updateNavBar();
        // Return to default modal view
        editForm.style.display = 'none';
        modalDefault.style.display = 'block';
      };
      // Logout
      logoutBtn.onclick = function() {
        localStorage.removeItem('aunipath_logged_in');
        localStorage.removeItem('aunipath_user_email');
        // Restore nav bar to original state
        const navRight = document.querySelector('.nav-right');
        if (navRight) {
          navRight.innerHTML =
            '<a href="index.html" class="nav-link">Home</a>' +
            '<a href="about.html" class="nav-link">About</a>' +
            '<a href="login.html" class="nav-btn login-btn">Log In</a>' +
            '<a href="signup.html" class="nav-btn signup-btn">Sign Up</a>';
        }
        // Optionally close modal
        const modal = document.getElementById('accountSettingsModal');
        if (modal) modal.style.display = 'none';
      };
    }

    // View My Save Modal
    function showViewSaveModal() {
      let modal = document.getElementById('viewSaveModal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'viewSaveModal';
        modal.innerHTML = `
          <div class="modal-overlay" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.18);z-index:1000;"></div>
          <div class="modal-content" style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;padding:32px 28px 24px 28px;border-radius:16px;box-shadow:0 8px 32px rgba(63,17,139,0.18);min-width:320px;z-index:1001;max-width:95vw;">
            <h3 style="color:#3F118B;margin-bottom:18px;">View My Save</h3>
            <p style="color:#3F118B;font-size:1.08rem;">This feature is unavailable, please wait for updates.</p>
            <button id="closeViewSaveBtn" style="margin-top:18px;padding:10px 0;width:100%;background:#8b5cf6;color:#fff;border:none;border-radius:6px;font-size:1rem;cursor:pointer;">Close</button>
          </div>
        `;
        document.body.appendChild(modal);
      }
      modal.style.display = 'block';
      modal.querySelector('.modal-overlay').onclick = function() { modal.style.display = 'none'; };
      modal.querySelector('#closeViewSaveBtn').onclick = function() { modal.style.display = 'none'; };
    }

    // Add notification error modal
    function showNotifErrorModal() {
      let modal = document.getElementById('notifErrorModal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'notifErrorModal';
        modal.innerHTML = `
          <div class="modal-overlay" style="position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.18);z-index:1000;"></div>
          <div class="modal-content" style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;padding:32px 28px 24px 28px;border-radius:16px;box-shadow:0 8px 32px rgba(63,17,139,0.18);min-width:320px;z-index:1001;max-width:95vw;">
            <h3 style="color:#3F118B;margin-bottom:18px;">Error Loading page</h3>
            <p style="color:#3F118B;font-size:1.08rem;">Try again after update.</p>
            <button id="closeNotifErrorBtn" style="margin-top:18px;padding:10px 0;width:100%;background:#8b5cf6;color:#fff;border:none;border-radius:6px;font-size:1rem;cursor:pointer;">Cancel</button>
          </div>
        `;
        document.body.appendChild(modal);
      }
      modal.style.display = 'block';
      modal.querySelector('.modal-overlay').onclick = function() { modal.style.display = 'none'; };
      modal.querySelector('#closeNotifErrorBtn').onclick = function() { modal.style.display = 'none'; };
    }

    // On page load, check login state
    if (localStorage.getItem('aunipath_logged_in') === 'true') {
      updateNavBar();
    }