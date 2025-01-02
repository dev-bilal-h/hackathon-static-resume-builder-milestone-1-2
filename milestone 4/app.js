"use strict";
// Initialize user data with empty/default values
let userData = {
    objective: "",
    personalInfoContent: "",
    skills: "",
    experience: "",
    education: "",
    profilePic: null,
};
// Function to generate the resume from user input
function generateResume(event) {
    var _a;
    event.preventDefault();
    // Retrieve user inputs from the form and update userData
    userData = {
        personalInfoContent: document.getElementById("personalInfoContent").value,
        objective: document.getElementById("objective")
            .value,
        skills: document.getElementById("skills").value,
        experience: document.getElementById("experience")
            .value,
        education: document.getElementById("education")
            .value,
        profilePic: ((_a = document.getElementById("profilePic").files) === null || _a === void 0 ? void 0 : _a[0]) ||
            null,
    };
    // display the objective section
    const objectiveContainer = document.getElementById("generatedObjective");
    const objectiveLines = userData.objective.split("\n");
    objectiveContainer.innerHTML = "";
    objectiveLines.forEach((line) => {
        const lineElement = document.createElement("p");
        lineElement.innerHTML = `◆ ${line.trim()}`;
        objectiveContainer.appendChild(lineElement);
    });
    // Display personal information
    const personalInfoContent = document.getElementById("generatedPersonalInfo");
    personalInfoContent.innerHTML = userData.personalInfoContent
        .trim()
        .replace(/\n/g, "<br>");
    // Format and show education details
    const educationContent = document.getElementById("generatedEducation");
    educationContent.innerHTML = userData.education.trim().replace(/\n/g, "<br>");
    const skillsArray = userData.skills.split(/[\n,]+/);
    const skillsList = document.getElementById("generatedSkills");
    skillsList.innerHTML = "";
    skillsArray.forEach((skill) => {
        if (skill.trim()) {
            const li = document.createElement("li");
            li.textContent = skill.trim();
            skillsList.appendChild(li);
        }
    });
    // Format and show work experience
    const experienceContent = document.getElementById("generatedExperience");
    experienceContent.innerHTML = userData.experience
        .trim()
        .replace(/\n/g, "<br>");
    // Handle profile picture display
    const profilePicElement = document.getElementById("generatedProfilePic");
    if (userData.profilePic) {
        const reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profilePicElement.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(userData.profilePic);
    }
    // section visible and show the edit button
    const resumeContainer = document.getElementById("resumeContainer");
    resumeContainer.style.display = "block";
    const editButton = document.getElementById("editButton");
    editButton.style.display = "inline-block";
}
// Function to handle the Edit button click
function handleEdit() {
    // form with the existing user data
    document.getElementById("personalInfoContent").value = userData.personalInfoContent;
    document.getElementById("objective").value =
        userData.objective;
    document.getElementById("skills").value =
        userData.skills;
    document.getElementById("experience").value =
        userData.experience;
    document.getElementById("education").value =
        userData.education;
    // Hide the resume display section and Edit button
    const resumeContainer = document.getElementById("resumeContainer");
    resumeContainer.style.display = "none";
    const editButton = document.getElementById("editButton");
    editButton.style.display = "none";
}
//  Edit button
const resumeForm = document.getElementById("resumeForm");
resumeForm.addEventListener("submit", generateResume);
const editButton = document.getElementById("editButton");
editButton.addEventListener("click", handleEdit);
