// Select form, buttons, and project container
const addProjectButton = document.getElementById('addProjectButton');
const projectFormContainer = document.getElementById('projectFormContainer');
const projectForm = document.getElementById('projectForm');
const projectsContainer = document.querySelector('.projects');

// Show form when "+" button is clicked
addProjectButton.addEventListener('click', () => {
  projectFormContainer.classList.remove('hidden');
});

// Handle form submission
projectForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form values
  const projectImageInput = document.getElementById('projectImage');
  const projectLink = document.getElementById('projectLink').value;

  // Ensure an image file is selected
  if (projectImageInput.files.length > 0) {
    const projectImageFile = projectImageInput.files[0];

    // Create an image element
    const projectImageElement = document.createElement('img');
    projectImageElement.classList.add('project-thumbnail');

    // Convert image to a URL and set it as the image source
    const reader = new FileReader();
    reader.onload = function (e) {
      projectImageElement.src = e.target.result;

      // Add click event to redirect to project link
      projectImageElement.addEventListener('click', () => {
        window.open(projectLink, '_blank');
      });

      projectsContainer.insertBefore(projectImageElement, addProjectButton);
    };

    reader.readAsDataURL(projectImageFile);
  }

  // Hide the form after submission and reset form fields
  projectFormContainer.classList.add('hidden');
  projectForm.reset();
});
