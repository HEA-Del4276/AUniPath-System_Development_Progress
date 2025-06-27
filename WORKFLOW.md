# AUniPath Team Development Workflow

## For Team Members

### 1. Start working on a new feature:
```bash
# Get latest changes
git pull

# Create new branch for your feature
git checkout -b your-feature-name

# Example: git checkout -b add-navigation-menu
```

### 2. Make your changes:
```bash
# Edit your files
# Save your work

# Add changes
git add .

# Commit with clear message
git commit -m "Add navigation menu with responsive design"
```

### 3. Push your branch:
```bash
git push origin your-feature-name
```

### 4. Create Pull Request:
1. Go to GitHub repository
2. Click "Compare & pull request"
3. Write description of what you changed
4. Request review from HEA-Del4276
5. Wait for approval

## For Team Lead (HEA-Del4276)

### Review Process:
1. Check email notifications for new PRs
2. Review code changes on GitHub
3. Test if needed
4. Either:
   - Approve and merge
   - Request changes with comments
   - Ask questions

### After merging:
```bash
git pull  # Get the newly merged changes
```

## Important Rules:
- ❌ Never push directly to main branch
- ✅ Always create branches for features
- ✅ Always pull before starting work
- ✅ Write clear commit messages
- ✅ Test your code before creating PR

## Branch Naming Convention:
- `add-feature-name` (e.g., add-login-page)
- `fix-issue-name` (e.g., fix-navbar-responsive)
- `update-component` (e.g., update-homepage-design)
