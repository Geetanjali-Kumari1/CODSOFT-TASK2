document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('check');
    const navLinks = document.querySelectorAll('ul li a');
    const profileImage = document.querySelector('.image img');
    const webDeveloperText = document.querySelector('.title span');

    // Toggle navigation menu when checkbox changes
    checkbox.addEventListener('change', function () {
        const ul = document.querySelector('nav ul');
        if (this.checked) {
            ul.style.left = '0';
        } else {
            ul.style.left = '-100%';
        }
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust for fixed navigation bar
                behavior: 'smooth'
            });
            // Close the navigation menu on mobile
            if (checkbox.checked) {
                checkbox.checked = false;
                document.querySelector('nav ul').style.left = '-100%';
            }
        });
    });

    // Add animation to buttons on hover
    const buttons = document.querySelectorAll('.action_btns button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        button.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Add interactivity to profile image
    profileImage.addEventListener('mouseenter', function () {
        this.style.border = '4px solid var(--primary-color)';
        this.style.transition = 'border 0.3s ease';
    });
    profileImage.addEventListener('mouseleave', function () {
        this.style.border = 'none';
    });

    // Add animation to "Web Developer" text
    webDeveloperText.classList.add('animate');

});