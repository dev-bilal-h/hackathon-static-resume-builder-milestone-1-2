// Skills section ko toggle karne k liye button
var skillsBtn = document.getElementById('btn-skills');
// Skills section ka element
var skillsSection = document.getElementById('skills');
// Skills section ki visibility toggle karne ka function
function toggleSkillsSection() {
    if (skillsSection.classList.contains('hidden')) {
        skillsSection.classList.remove('hidden');
        skillsBtn.textContent = 'Hide';
    }
    else {
        skillsSection.classList.add('hidden');
        skillsBtn.textContent = 'Show';
    }
}
// Button k liye event listener
skillsBtn.addEventListener('click', toggleSkillsSection);
