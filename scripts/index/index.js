// Global function to load content
async function loadContent(contentName) {
    try {
        const response = await fetch(`components/index/${contentName}.php`);
        const content = await response.text();
        document.getElementById('content').innerHTML = content;
        // Save the last loaded component
        localStorage.setItem('lastLoadedComponent', contentName);
        // Close the hamburger menu after loading content
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

    // Check if there's a last loaded component
    const lastLoadedComponent = localStorage.getItem('lastLoadedComponent');
    if (lastLoadedComponent) {
        loadContent(lastLoadedComponent);
    } else {
        // Load startup content if no component was previously loaded
        loadStartupContent();
    }

    // Load startup content when title is clicked
    title.addEventListener('click', function(e) {
        e.preventDefault();
        loadStartupContent();
        // Clear the last loaded component when clicking the title
        localStorage.removeItem('lastLoadedComponent');
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

document.addEventListener('click', function(event) {
    const linkList = document.querySelector('.link-list');
    const menuToggle = document.getElementById('menu-toggle');
    const burgerMenu = document.querySelector('.burger-menu');
        
    // If click is on burger menu or menu-toggle checkbox, don't do anything
    if (burgerMenu.contains(event.target) || event.target === menuToggle) {
        return;
    }
    
    // If menu is open and click is outside both burger menu and link list
    if (menuToggle.checked && !linkList.contains(event.target)) {
        menuToggle.checked = false;
        console.log('clicked outside');
    }
});
