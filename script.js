// Function to handle menu item clicks
document.querySelectorAll('.menu ul li').forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all menu items
        document.querySelectorAll('.menu ul li').forEach(li => li.classList.remove('active'));
        // Add active class to the clicked menu item
        item.classList.add('active');
        
        // Show the corresponding section
        const target = item.getAttribute('data-target');
        document.querySelectorAll('.content .section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(target).classList.add('active');
    });
});

// Handle scroll behavior to change sections
document.querySelector('.content').addEventListener('scroll', () => {
    const content = document.querySelector('.content');
    const sections = document.querySelectorAll('.content .section');
    sections.forEach(section => {
        if (section.offsetTop <= content.scrollTop && (section.offsetTop + section.offsetHeight) > content.scrollTop) {
            const id = section.id;
            document.querySelectorAll('.menu ul li').forEach(li => {
                li.classList.remove('active');
                if (li.getAttribute('data-target') === id) {
                    li.classList.add('active');
                }
            });
        }
    });
});
