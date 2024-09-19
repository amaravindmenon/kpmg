var swiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.getElementById('learning-module').addEventListener('click', function() {
    toggleModuleContent('learning-module', 'Here is your progress in various learning modules. You are currently enrolled in courses such as HTML, CSS, JavaScript, and more!');
});

document.getElementById('history-module').addEventListener('click', function() {
    toggleModuleContent('history-module', 'This is your learning history. You’ve completed courses like Python Basics, Web Development, and Data Science Foundations.');
});

function toggleModuleContent(moduleId, content) {
    const clickedModule = document.getElementById(moduleId);
    const expandableContent = clickedModule.querySelector('.expandable-content');

    const otherModuleId = moduleId === 'learning-module' ? 'history-module' : 'learning-module';
    const otherModule = document.getElementById(otherModuleId);
    const otherContent = otherModule.querySelector('.expandable-content');

    if (otherModule.classList.contains('open')) {
        otherModule.classList.remove('open');
        otherContent.style.display = 'none';
    }

    if (clickedModule.classList.contains('open')) {
        clickedModule.classList.remove('open');
        expandableContent.style.display = 'none';
    } else {
        clickedModule.classList.add('open');
        expandableContent.innerHTML = `<p>${content}</p>`;
        expandableContent.style.display = 'block';
    }
}

let notifications = [
    'Assignment due tomorrow',
    'New course available: JavaScript Fundamentals',
    'Your profile was updated successfully',
];

function updateNotificationCount() {
    const notificationCount = document.getElementById('notification-count');
    notificationCount.textContent = notifications.length;
}

function populateNotifications() {
    const notificationList = document.getElementById('notification-list');
    notificationList.innerHTML = ''; // Clear existing list

    if (notifications.length === 0) {
        const noNotificationItem = document.createElement('li');
        noNotificationItem.textContent = 'No new notifications';
        notificationList.appendChild(noNotificationItem);
    } else {
        notifications.forEach((notification) => {
            const li = document.createElement('li');
            li.textContent = notification;
            notificationList.appendChild(li);
        });
    }
}

updateNotificationCount();
populateNotifications();

document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const query = document.getElementById('search-input').value.toLowerCase();
    const courses = [
        'JavaScript Basics',
        'HTML & CSS Fundamentals',
        'Advanced Python',
        'Data Structures in Java',
    ];

    const filteredCourses = courses.filter(course => course.toLowerCase().includes(query));

    if (filteredCourses.length > 0) {
        alert('Search Results:\n' + filteredCourses.join('\n'));
    } else {
        alert('No courses found for "' + query + '"');
    }
});