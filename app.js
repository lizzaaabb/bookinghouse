document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    menu.onclick = function() {
        sidebar.classList.toggle("show");
    };

    // Initialize Flatpickr
    flatpickr("#checkIn", {
        dateFormat: "Y-m-d",
        minDate: "today"
    });

    flatpickr("#checkOut", {
        dateFormat: "Y-m-d",
        minDate: "today"
    });

    // Initialize EmailJS with your public key
    emailjs.init("yS2bsPWQQnpxgtMBL");

    // Form 1 submission handler
    const form1 = document.getElementById('form1');
    if (form1) {
        form1.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Collect form data
            const formData = new FormData(form1);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Send email using EmailJS
            emailjs.send("service_3qe7cdf", "template_ll1041d", data)
                .then(function(response) {
                    console.log('Success:', response);
                    // Add success handling code here (e.g., success message)
                }, function(error) {
                    console.error('Error:', error);
                    // Add error handling code here (e.g., error message)
                });
        });
    }

    // Email form submission handler
    const emailForm = document.getElementById('email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get the email input value
            const email = emailForm.querySelector('input[name="email"]').value;

            // Send email using EmailJS
            emailjs.send("service_3qe7cdf", "template_ll1041d", { email: email })
                .then(function(response) {
                    // Show success notification
                    new Noty({
                        text: 'Your email has been sent successfully!',
                        type: 'success',
                        layout: 'topRight',
                        timeout: 3000
                    }).show();
                })
                .catch(function(error) {
                    // Show error notification
                    new Noty({
                        text: 'There was a problem sending your email.',
                        type: 'error',
                        layout: 'topRight',
                        timeout: 3000
                    }).show();
                });
        });
    }
});
