document.addEventListener('DOMContentLoaded', function() {
    // Example project data
    const projects = [
        { title: "Project 1", description: "Description of project 1", link: "#" },
        { title: "Project 2", description: "Description of project 2", link: "#" },
        { title: "Project 3", description: "Description of project 3", link: "#" }
    ];

    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        projectItem.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p><a href="${project.link}">View Project</a>`;
        projectList.appendChild(projectItem);
    });
});
