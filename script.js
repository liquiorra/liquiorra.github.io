const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        const sunIcon = themeToggle.querySelector('.fa-sun');
        const moonIcon = themeToggle.querySelector('.fa-moon');

        // Проверяем сохраненную тему
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-theme');
            sunIcon.style.display = 'inline';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline';
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            if (body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
                sunIcon.style.display = 'inline';
                moonIcon.style.display = 'none';
            } else {
                localStorage.setItem('theme', 'light');
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'inline';
            }
        });