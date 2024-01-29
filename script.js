document.addEventListener('DOMContentLoaded', function () {
    const userForm = document.getElementById('userForm');
    const userCard = document.getElementById('userCard');

    // Load user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData')) || {};

    // Display user data on page load
    displayUserData();

    // Event listener for form submission
    userForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Capture user input
        const name = document.getElementById('name').value;
        const last = document.getElementById('last').value;
        const con = document.getElementById('con').value;
        const sta = document.getElementById('sta').value;
        const phone = document.getElementById('phone').value;
        const village = document.getElementById('village').value;
        const city = document.getElementById('city').value;

        // Store user data in local storage
        userData.name = name;
        userData.last = last;
        userData.con = con;
        userData.sta = sta;
        userData.phone = phone;
        userData.village = village;
        userData.city = city;

        localStorage.setItem('userData', JSON.stringify(userData));

        // Display user data
        displayUserData();
    });

    // Function to display user data on the page
    function displayUserData() {
        userCard.innerHTML = `
            <h2>User Information</h2>
            <p><strong>Name:</strong> ${userData.name || 'N/A'}</p>
            <p><strong>Last Name:</strong> ${userData.last || 'N/A'}</p>
            <p><strong>Country:</strong> ${userData.con || 'N/A'}</p>
            <p><strong>State:</strong> ${userData.sta || 'N/A'}</p>
            <p><strong>Phone Number:</strong> ${userData.phone || 'N/A'}</p>
            <p><strong>Village:</strong> ${userData.village || 'N/A'}</p>
            <p><strong>City:</strong> ${userData.city || 'N/A'}</p>
        `;
    }
});
