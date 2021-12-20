var display = document.getElementById("displayArea")

document.querySelector('.foundershall').addEventListener('click', function() {
    displayVideo("Founders Hall", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.chapel').addEventListener('click', function() {
    displayVideo("Chapel", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.foyer').addEventListener('click', function() {
    displayVideo("Foyer", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.ibblock').addEventListener('click', function() {
    displayVideo("IB Block", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.ish').addEventListener('click', function() {
    displayVideo("ISH", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.library').addEventListener('click', function() {
    displayVideo("Library", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.track').addEventListener('click', function() {
    displayVideo("Track", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});


const displayVideo = (locationTitle, videoName) => {
    document.querySelector('#locationTitle').innerHTML = locationTitle;
}