const menu = document.getElementById("menu-toggle")
const sidebar = document.getElementById("sidebar")
const slides = document.querySelectorAll(".sliderimg")
let slideIndex = 0;
let intervalId = null;


menu.onclick = function(){
    sidebar.classList.toggle("show")

    if (sidebar.classList.contains("show")) {
        // Hide slideshow with animation
        slideshow.classList.add("slide-out");
        slideshow.classList.remove("slide-in");
    } else {
        // Show slideshow with animation
        slideshow.classList.remove("slide-out");
        slideshow.classList.add("slide-in");
    }
    
}

const galleryImages = [
    'pics/inter1.jpg',
    'pics/inter2.jpg',
    'pics/inter3.jpg',
    'pics/inter4.jpg',
    'pics/inter5.jpg'
];

galleryImages.forEach((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
});


initializeSlider();


function initializeSlider(){
    slides[slideIndex].classList.add("displaySlide")
    //intervalId = setInterval(nextSlide, 5000)

}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    })
    slides[slideIndex].classList.add("displaySlide")

}
function prevSlide(){
    clearInterval(intervalId)
    slideIndex --;
    showSlide(slideIndex)

}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);

}


emailjs.init("yS2bsPWQQnpxgtMBL"); // Initialize EmailJS with your user ID

function sendEmail(event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.send("service_9kz5hgn", "template_u5wl2io", {
        message: document.querySelector('input[name="email"]').value // Use the email input as the message
    }).then(function() {
        console.log("Email sent successfully");
    }).catch(function(error) {
        console.error("Failed to send email", error);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('email-form');
    if (form) {
        form.addEventListener('submit', sendEmail);
    } else {
        console.error('Form element not found');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000, // Duration of the animation in milliseconds
        easing: 'ease-in-out', // Easing function
       
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('email-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the email input value
        const email = form.querySelector('input[name="email"]').value;

        // Example email sending logic (replace with actual email sending code)
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
});
