// student-info.js

// Define student information
const student = {
    name: "Katelyn Sturtz",
    major: "ACS",
    email: "katsturt@uat.edu",
    graduationDate: "April 2026",
    
};

// Function to display student information
function displayStudentInfo() {
    const infoDiv = document.getElementById('student-info');
    
    const studentInfoHTML = `
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Major:</strong> ${student.major}</p>
        <p><strong>Email:</strong> <a href="mailto:${student.email}">${student.email}</a></p>
        <p><strong>Expected Graduation Date:</strong> ${student.graduationDate}</p>
        <p><strong>Additional Information:</strong> ${student.additionalInfo}</p>
    `;
    
    infoDiv.innerHTML = studentInfoHTML;
}

// Call the function to display student info
displayStudentInfo();
