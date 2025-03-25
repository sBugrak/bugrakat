async function loadContent(contentName) {
    try {
        const response = await fetch(`components/index/${contentName}.php`);
        const content = await response.text();
        document.getElementById('content').innerHTML = content;

        document.getElementById('menu-toggle').checked = false;
    } catch (error) {
        console.error('Error loading content:', error);
        document.getElementById('content').innerHTML = '<p>Error loading content.</p>';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');
    const title = document.querySelector('.title');
    const menuToggle = document.getElementById('menu-toggle');
    
    // Function to load startup content
    async function loadStartupContent() {
        try {
            const response = await fetch('components/index/startup.php');
            const content = await response.text();
            contentDiv.innerHTML = content;
            // Close the hamburger menu after loading content
            menuToggle.checked = false;
        } catch (error) {
            console.error('Error loading startup content:', error);
        }
    }

    // Load startup content on page load
    loadStartupContent();

    // Load startup content when title is clicked
    title.addEventListener('click', function(e) {
        e.preventDefault();
        loadStartupContent();
        // Close the hamburger menu when title is clicked
        menuToggle.checked = false;
    });

    // Add click event listeners to all links in the link-list
    const links = document.querySelectorAll('.link-list a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            // Close the hamburger menu when a link is clicked
            menuToggle.checked = false;
        });
    });
});