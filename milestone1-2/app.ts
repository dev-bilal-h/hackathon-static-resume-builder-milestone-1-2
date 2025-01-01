// Skills section ko toggle karne k liye button
const skillsBtn = document.getElementById('btn-skills') as HTMLButtonElement;

// Skills section ka element
const skillsSection = document.getElementById('skills') as HTMLElement;

// Skills section ki visibility toggle karne ka function
function toggleSkillsSection(): void {
    if (skillsSection.classList.contains('hidden')) {
        skillsSection.classList.remove('hidden');  
        skillsBtn.textContent = 'Hide';  
    } else {
        skillsSection.classList.add('hidden'); 
        skillsBtn.textContent = 'Show';  
    }
}

// Button k liye event listener
skillsBtn.addEventListener('click', toggleSkillsSection);
