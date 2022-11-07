const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});

function iniciarMap(){
    var coord = {lat: -37.82095092569096, lng: -57.4871357181054 };
    var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 14,
    center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}