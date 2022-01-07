var display = document.getElementById("displayArea")

document.querySelector('.foundershall').addEventListener('click', function() {
    displayVideo("Founders Hall", "https://drive.google.com/file/d/15CpU9-cGNo8V41U_Gut8pltGx9BegIv9/preview");
    document.getElementById("field").style.display = "none";
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.chapel').addEventListener('click', function() {
    displayVideo("Chapel", "https://drive.google.com/file/d/1mnrlTDVTtUgM8nj647L8aSGJ4eZYHA7h/preview");
    document.getElementById("field").style.display = "none";
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.foyer').addEventListener('click', function() {
    displayVideo("Foyer", "https://drive.google.com/file/d/1NMxKb11jHASX_GQXXBFPiGWiy5_ZIDMp/preview");
    document.getElementById("field").style.display = "none";
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.ibblock').addEventListener('click', function() {
    displayVideo("IB Block", "https://drive.google.com/file/d/1SNZOcHvYUHLHXDG9uoiFv58aibEsq5aa/preview");
    document.getElementById("field").style.display = "none";
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.ish').addEventListener('click', function() {
    displayVideo("ISH", "https://drive.google.com/file/d/1feRwQuBrHZTeePhgyD3s2akEMytilMVn/preview");
    document.getElementById("field").style.display = "none";
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.library').addEventListener('click', function() {
    displayVideo("Library", "https://drive.google.com/file/d/1g6Q_hTZfg7m3Enq0UhnaoedZOooZddY6/preview");
    document.getElementById("field").style.display = "none";
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.track').addEventListener('click', function() {
    displayVideo("Track", "https://drive.google.com/file/d/1XhR2QY0epwnpEQHQg6AG0syUKYV4aaIu/preview");
    document.getElementById("field").style.display = "block";
    display.scrollIntoView({
        behavior: 'smooth'
    });
});


const displayVideo = (locationTitle, videoLink) => {
    document.querySelector('#locationTitle').innerHTML = locationTitle;
    document.querySelector('#tour_video').src = videoLink
}