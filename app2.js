const menu = document.getElementById("menu-toggle")
const sidebar = document.getElementById("sidebar")



menu.onclick = function(){
    sidebar.classList.toggle("show")
    
}


flatpickr("#checkIn", {
    dateFormat: "Y-m-d",
    minDate: "today" // Prevent selection of past dates
});

flatpickr("#checkOut", {
    dateFormat: "Y-m-d",
    minDate: "today" // Prevent selection of past dates
});

// Initialize EmailJS with your public key
emailjs.init("yS2bsPWQQnpxgtMBL");

// Add event listener for form submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form1');
  
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Collect form data
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Send email using EmailJS
      emailjs.send("service_3qe7cdf", "template_ll1041d", data)
        .then(function(response) {
          console.log('Success:', response);
          // You can add code here to handle successful form submission (e.g., show a success message)
        }, function(error) {
          console.error('Error:', error);
          // You can add code here to handle form submission errors (e.g., show an error message)
        });
    });
  }
});
