interface resumeDetail {
    objective: string;
    personalInfoContent: string;
    skills: string;
    experience: string;
    education: string;
    profilePic: File | null;
}

function generateResume(event: Event) {
    event.preventDefault(); 

    const userData: resumeDetail = {
        personalInfoContent: (document.getElementById('personalInfoContent') as HTMLTextAreaElement).value,
        objective: (document.getElementById('objective') as HTMLTextAreaElement).value,
        skills: (document.getElementById('skills') as HTMLTextAreaElement).value,
        experience: (document.getElementById('experience') as HTMLTextAreaElement).value,
        education: (document.getElementById('education') as HTMLTextAreaElement).value,
        profilePic: (document.getElementById('profilePic') as HTMLInputElement).files?.[0] || null,
    };

    // Adding decorative symbols to the Objective section
    const objectiveContainer = document.getElementById('generatedObjective') as HTMLElement;
    const objectiveLines = userData.objective.split('\n');
    objectiveContainer.innerHTML = ''; 
    objectiveLines.forEach(line => {
        const lineElement = document.createElement('p');
        lineElement.innerHTML = `◆ ${line.trim()}`; 
        objectiveContainer.appendChild(lineElement);
    });

    // Displaying Personal Information
    const personalInfoContent = document.getElementById('generatedPersonalInfo') as HTMLElement;
    personalInfoContent.innerHTML = userData.personalInfoContent.trim().replace(/\n/g, '<br>'); 

    // Displaying Education Information
    const educationContent = document.getElementById('generatedEducation') as HTMLElement;
    educationContent.innerHTML = userData.education.trim().replace(/\n/g, '<br>'); 

    // Populating Skills into an unordered list
    const skillsArray: string[] = userData.skills.split(/[\n,]+/); 
    const skillsList: HTMLElement = document.getElementById('generatedSkills') as HTMLElement;
    skillsList.innerHTML = ''; 

    skillsArray.forEach((skill: string) => {
        if (skill.trim()) { 
            const li: HTMLLIElement = document.createElement('li');
            li.textContent = skill.trim();
            skillsList.appendChild(li);
        }
    });

    // Displaying Work Experience with line breaks
    const experienceContent = document.getElementById('generatedExperience') as HTMLElement;
    experienceContent.innerHTML = userData.experience.trim().replace(/\n/g, '<br>');

    // Handling Profile Picture Upload
    const profilePicElement = document.getElementById('generatedProfilePic') as HTMLImageElement;
    if (userData.profilePic) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePicElement.src = e.target?.result as string;
        };
        reader.readAsDataURL(userData.profilePic);
    }

    // Making the resume container visible
    const resumeContainer = document.getElementById('resumeContainer') as HTMLElement;
    resumeContainer.style.display = 'block';
}

// Adding event listener to the form for submission
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
resumeForm.addEventListener('submit', generateResume);
