var display = document.getElementById("displayArea")

document.querySelector('#JP').addEventListener('click', function() {
    description = "Japan placeholder description"
    countryDescription(description);

    displayVideo("Japan", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('#CN').addEventListener('click', function() {
    description = "China placeholder description"
    countryDescription(description);

    displayVideo("China", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('#TW').addEventListener('click', function() {
    description = "Taiwan placeholder description"
    countryDescription(description);

    displayVideo("Taiwan", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('.jerusalem').addEventListener('click', function() {
    description = "Jerusalem placeholder description"
    countryDescription(description);

    displayVideo("Jerusalem", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('#VN').addEventListener('click', function() {
    description = "Vietnam placeholder description"
    countryDescription(description);

    displayVideo("Vietnam", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('#KR').addEventListener('click', function() {
    description = "South Korea placeholder description"
    countryDescription(description);

    displayVideo("South Korea", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('#AU').addEventListener('click', function() {
    description = "Australia placeholder description"
    countryDescription(description);

    displayVideo("Australia", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('#PH').addEventListener('click', function() {
    description = "Phillipines placeholder description"
    countryDescription(description);

    displayVideo("Phlippines", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('#HK').addEventListener('click', function() {
    description = "Hong Kong placeholder description"
    countryDescription(description);

    displayVideo("Hong Kong", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('#LA').addEventListener('click', function() {
    description = "Laos placeholder description"
    countryDescription(description);

    displayVideo("Laos", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('#MY').addEventListener('click', function() {
    description = "Malaysia placeholder description"
    countryDescription(description);

    displayVideo("Malaysia", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('#ID').addEventListener('click', function() {
    description = "Indonesia placeholder description"
    countryDescription(description);

    displayVideo("Indonesia", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('#US').addEventListener('click', function() {
    description = "USA placeholder description"
    countryDescription(description);

    displayVideo("USA", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('#TH').addEventListener('click', function() {
    description = "Thailand placeholder description"
    countryDescription(description);

    displayVideo("Thailand", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('#MM').addEventListener('click', function() {
    description = "Myanmar placeholder description"
    countryDescription(description);

    displayVideo("Myanmar", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

document.querySelector('#KH').addEventListener('click', function() {
    description = "Cambodia placeholder description"
    countryDescription(description);

    displayVideo("Cambodia", "");
    display.scrollIntoView({
        behavior: 'smooth'
    });
});

const displayVideo = (locationTitle, imgName) => {
    document.querySelector('#locationTitle').innerHTML = locationTitle;
}

const countryDescription = (description) => {
    document.querySelector('#text_description').innerHTML = description
}