// Log deployment message when page loads
console.log("Application deployed using Jenkins CI/CD pipeline and Docker.");

// Add button click handler
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.demo-button');
    
    button.addEventListener('click', function() {
        alert('This application was deployed using Jenkins and Docker!');
        console.log('Button clicked! CI/CD pipeline is working perfectly.');
    });
});
