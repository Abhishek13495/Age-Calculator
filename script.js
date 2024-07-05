function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    
    const resultElement = document.getElementById('result');
    if (isNaN(age)) {
        resultElement.textContent = "Please enter a valid birthdate.";
        resultElement.style.color = "#e74c3c";
    } else {
        resultElement.textContent = `Your age is ${age} years.`;
        resultElement.style.color = "#333";
    }
}

// Set max date to today
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('birthdate').setAttribute('max', today);
});