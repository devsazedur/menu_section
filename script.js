// Function to handle menu item clicks
document.querySelectorAll('.menu ul li').forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all menu items
        document.querySelectorAll('.menu ul li').forEach(li => li.classList.remove('active'));
        // Add active class to the clicked menu item
        item.classList.add('active');

        // Scroll to the corresponding section smoothly
        const target = document.getElementById(item.getAttribute('data-target'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Check if it's mobile and make active item visible
        if (window.innerWidth <= 768) {
            item.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        }
    });
});

// Function to update active menu item on scroll using Intersection Observer
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const activeMenuItem = document.querySelector(`.menu ul li[data-target="${id}"]`);

            // Remove active class from all menu items
            document.querySelectorAll('.menu ul li').forEach(li => li.classList.remove('active'));

            // Add active class to the visible section's menu item
            if (activeMenuItem) {
                activeMenuItem.classList.add('active');

                // Auto-scroll in mobile view to keep active item in center
                if (window.innerWidth <= 768) {
                    activeMenuItem.scrollIntoView({ behavior: 'smooth', inline: 'center' });
                }
            }
        }
    });
}, { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 });

sections.forEach(section => observer.observe(section));
