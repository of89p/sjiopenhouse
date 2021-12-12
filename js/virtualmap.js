document.querySelector('.foundershall').addEventListener('click', function() {
    displayVideo("Founders Hall", "");
});

document.querySelector('.chapel').addEventListener('click', function() {
    displayVideo("Chapel", "");
});

document.querySelector('.foyer').addEventListener('click', function() {
    displayVideo("Foyer", "");
});

document.querySelector('.ibblock').addEventListener('click', function() {
    displayVideo("IB Block", "");
});

document.querySelector('.ish').addEventListener('click', function() {
    displayVideo("ISH", "");
});

document.querySelector('.library').addEventListener('click', function() {
    displayVideo("Library", "");
});

document.querySelector('.track').addEventListener('click', function() {
    displayVideo("Track", "");
});


const displayVideo = (locationTitle, videoName) => {
    document.querySelector('#locationTitle').innerHTML = locationTitle;
}