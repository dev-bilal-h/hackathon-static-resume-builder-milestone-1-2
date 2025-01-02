"use strict";
function generateResume(event) {
    var _a;
    event.preventDefault();
    const userData = {
        personalInfoContent: document.getElementById('personalInfoContent').value,
        objective: document.getElementById('objective').value,
        skills: document.getElementById('skills').value,
        experience: document.getElementById('experience').value,
        education: document.getElementById('education').value,
        profilePic: ((_a = document.getElementById('profilePic').files) === null || _a === void 0 ? void 0 : _a[0]) || null,
    };
    // Adding decorative symbols to the Objective section
    const objectiveContainer = document.getElementById('generatedObjective');
    const objectiveLines = userData.objective.split('\n');
    objectiveContainer.innerHTML = '';
    objectiveLines.forEach(line => {
        const lineElement = document.createElement('p');
        lineElement.innerHTML = `◆ ${line.trim()}`;
        objectiveContainer.appendChild(lineElement);
    });
    // Displaying Personal Information
    const personalInfoContent = document.getElementById('generatedPersonalInfo');
    personalInfoContent.innerHTML = userData.personalInfoContent.trim().replace(/\n/g, '<br>');
    // Displaying Education Information
    const educationContent = document.getElementById('generatedEducation');
    educationContent.innerHTML = userData.education.trim().replace(/\n/g, '<br>');
    // Populating Skills into an unordered list
    const skillsArray = userData.skills.split(/[\n,]+/);
    const skillsList = document.getElementById('generatedSkills');
    skillsList.innerHTML = '';
    skillsArray.forEach((skill) => {
        if (skill.trim()) {
            const li = document.createElement('li');
            li.textContent = skill.trim();
            skillsList.appendChild(li);
        }
    });
    // Displaying Work Experience with line breaks
    const experienceContent = document.getElementById('generatedExperience');
    experienceContent.innerHTML = userData.experience.trim().replace(/\n/g, '<br>');
    // Handling Profile Picture Upload
    const profilePicElement = document.getElementById('generatedProfilePic');
    if (userData.profilePic) {
        const reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profilePicElement.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(userData.profilePic);
    }
    // Making the resume container visible
    const resumeContainer = document.getElementById('resumeContainer');
    resumeContainer.style.display = 'block';
}
// Adding event listener to the form for submission
const resumeForm = document.getElementById('resumeForm');
resumeForm.addEventListener('submit', generateResume);
