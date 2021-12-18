var display = document.getElementById("displayArea")

document.querySelector('#JP').addEventListener('click', function() {
    header1 = "Ikeda Junior High School, Kagoshima, Japan"
    header2 = "Morioka Chuo High School, Japan"
    header3 = "Niigata Minami High School, Japan"
    description1 = "Throughout the GEP that spanned a course of four months, students engaged in meaningful and fun interactions with the students from Ikeda Junior High School, through games such as Skribblio and Online Bingo. Participants from both schools also shared about their culture through powerpoint presentations. Josephians were introduced to Japanese food, pop music, anime and much more, while they shared about the local Singaporean delicacies, our school and favourite movies with their Japanese counterparts. Before their last GEP session, the team had the opportunity to participate in the Global Science Award (GSA), a prestigious science competition held by Ikeda Junior High School and supported by the Japanese Ministry of Education. During the competition, SJI’s five teams presented their science projects to a panel of judges. Against a tough fight with 64 other teams, one of SJI’s teams received the “Excellence” Award for their investigation on ant tunnelling."
    description2 = ""
    description3 = ""
    imgName1 = "../img/logo.png"
    imgName2 = ""
    imgName3 = ""
    countryDescription(description1, description2, description3, header1, header2, header3);

    displayVideo("Japan", imgName1, imgName2, imgName3);
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

const displayVideo = (locationTitle, imgName1, imgName2, imgName3) => {
    document.querySelector('#locationTitle').innerHTML = locationTitle;
    document.querySelector('#gep_image1').src = imgName1;
    document.querySelector('#gep_image2').src = imgName2;
    document.querySelector('#gep_image3').src = imgName3;
}

const countryDescription = (description1, description2, description3, header1, header2, header3) => {
    document.querySelector('#text_description1').innerHTML = description1
    document.querySelector('#text_description2').innerHTML = description2
    document.querySelector('#text_description3').innerHTML = description3
    document.querySelector('#text_header1').innerHTML = header1
    document.querySelector('#text_header2').innerHTML = header2
    document.querySelector('#text_header3').innerHTML = header3
}