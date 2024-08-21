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