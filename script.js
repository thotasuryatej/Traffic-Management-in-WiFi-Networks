// Function to toggle visibility of a section
function toggleSection(buttonId, sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
}

// Attach event listeners for buttons
document.getElementById('nodeCreationButton').addEventListener('click', function() {
    toggleSection('nodeCreationButton', 'nodeCreationSection');
});

document.getElementById('routingPerformanceButton').addEventListener('click', function() {
    toggleSection('routingPerformanceButton', 'content');
});
