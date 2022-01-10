var display = document.getElementById("displayArea")

document.querySelector('.foundershall').addEventListener('click', function() {
    displayVideo("Founders Hall", "https://drive.google.com/file/d/1--kwATqPKx3jxvtlhwqUmhCZB1G4Wwyg/preview");
    document.getElementById("field").style.display = "none";
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.chapel').addEventListener('click', function() {
    displayVideo("Chapel", "https://drive.google.com/file/d/17F-ci0v0m-JIlWk25lbjsyWdc1LmE4QF/preview");
    document.getElementById("field").style.display = "none";
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.foyer').addEventListener('click', function() {
    displayVideo("Foyer", "https://drive.google.com/file/d/1--yH6kKq4NcYKJj3zjLgI-Idz0QlkmXa/preview");
    document.getElementById("field").style.display = "none";
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.ibblock').addEventListener('click', function() {
    displayVideo("IB Block", "https://drive.google.com/file/d/1LfDs6lnrCplllWo_epndGrWM-QEVkpPN/preview");
    document.getElementById("field").style.display = "none";
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.ish').addEventListener('click', function() {
    displayVideo("ISH", "https://drive.google.com/file/d/1-1b0i8d_kZi9irbgc4gqu578BhDTb672/preview");
    document.getElementById("field").style.display = "none";
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.library').addEventListener('click', function() {
    displayVideo("Library", "https://drive.google.com/file/d/1-186U-ejO6WyuH65iRKGwmxH-tDW2HPG/preview");
    document.getElementById("field").style.display = "none";
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.track').addEventListener('click', function() {
    displayVideo("Track", "https://drive.google.com/file/d/1--t_lO-JpKhowfiX-Z9GhtDC58AigBR8/preview");
    document.getElementById("field").style.display = "block";
    display.scrollIntoView({
        behavior: 'smooth'
    });
});


const displayVideo = (locationTitle, videoLink) => {
    document.querySelector('#locationTitle').innerHTML = locationTitle;
    document.querySelector('#tour_video').src = videoLink
}