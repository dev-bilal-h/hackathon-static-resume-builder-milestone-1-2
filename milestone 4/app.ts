interface resumeDetail {
  objective: string;
  personalInfoContent: string;
  skills: string;
  experience: string;
  education: string;
  profilePic: File | null;
}

// Initialize user data with empty/default values
let userData: resumeDetail = {
  objective: "",
  personalInfoContent: "",
  skills: "",
  experience: "",
  education: "",
  profilePic: null,
};

// Function to generate the resume from user input
function generateResume(event: Event) {
  event.preventDefault();

  // Retrieve user inputs from the form and update userData
  userData = {
    personalInfoContent: (
      document.getElementById("personalInfoContent") as HTMLTextAreaElement
    ).value,
    objective: (document.getElementById("objective") as HTMLTextAreaElement)
      .value,
    skills: (document.getElementById("skills") as HTMLTextAreaElement).value,
    experience: (document.getElementById("experience") as HTMLTextAreaElement)
      .value,
    education: (document.getElementById("education") as HTMLTextAreaElement)
      .value,
    profilePic:
      (document.getElementById("profilePic") as HTMLInputElement).files?.[0] ||
      null,
  };

  // display the objective section
  const objectiveContainer = document.getElementById(
    "generatedObjective"
  ) as HTMLElement;
  const objectiveLines = userData.objective.split("\n");
  objectiveContainer.innerHTML = "";
  objectiveLines.forEach((line) => {
    const lineElement = document.createElement("p");
    lineElement.innerHTML = `◆ ${line.trim()}`;
    objectiveContainer.appendChild(lineElement);
  });

  // Display personal information
  const personalInfoContent = document.getElementById(
    "generatedPersonalInfo"
  ) as HTMLElement;
  personalInfoContent.innerHTML = userData.personalInfoContent
    .trim()
    .replace(/\n/g, "<br>");

  // Format and show education details
  const educationContent = document.getElementById(
    "generatedEducation"
  ) as HTMLElement;
  educationContent.innerHTML = userData.education.trim().replace(/\n/g, "<br>");

  const skillsArray: string[] = userData.skills.split(/[\n,]+/);
  const skillsList: HTMLElement = document.getElementById(
    "generatedSkills"
  ) as HTMLElement;
  skillsList.innerHTML = "";

  skillsArray.forEach((skill: string) => {
    if (skill.trim()) {
      const li: HTMLLIElement = document.createElement("li");
      li.textContent = skill.trim();
      skillsList.appendChild(li);
    }
  });

  // Format and show work experience
  const experienceContent = document.getElementById(
    "generatedExperience"
  ) as HTMLElement;
  experienceContent.innerHTML = userData.experience
    .trim()
    .replace(/\n/g, "<br>");

  // Handle profile picture display
  const profilePicElement = document.getElementById(
    "generatedProfilePic"
  ) as HTMLImageElement;
  if (userData.profilePic) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profilePicElement.src = e.target?.result as string;
    };
    reader.readAsDataURL(userData.profilePic);
  }

  // section visible and show the edit button
  const resumeContainer = document.getElementById(
    "resumeContainer"
  ) as HTMLElement;
  resumeContainer.style.display = "block";

  const editButton = document.getElementById("editButton") as HTMLButtonElement;
  editButton.style.display = "inline-block";
}

// Function to handle the Edit button click
function handleEdit() {
  // form with the existing user data
  (
    document.getElementById("personalInfoContent") as HTMLTextAreaElement
  ).value = userData.personalInfoContent;
  (document.getElementById("objective") as HTMLTextAreaElement).value =
    userData.objective;
  (document.getElementById("skills") as HTMLTextAreaElement).value =
    userData.skills;
  (document.getElementById("experience") as HTMLTextAreaElement).value =
    userData.experience;
  (document.getElementById("education") as HTMLTextAreaElement).value =
    userData.education;

  // Hide the resume display section and Edit button
  const resumeContainer = document.getElementById(
    "resumeContainer"
  ) as HTMLElement;
  resumeContainer.style.display = "none";

  const editButton = document.getElementById("editButton") as HTMLButtonElement;
  editButton.style.display = "none";
}

//  Edit button
const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
resumeForm.addEventListener("submit", generateResume);

const editButton = document.getElementById("editButton") as HTMLButtonElement;
editButton.addEventListener("click", handleEdit);
