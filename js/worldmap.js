var display = document.getElementById("displayArea")

document.querySelector('#JP').addEventListener('click', function() {
    header1 = "Ikeda Junior High School, Kagoshima, Japan"
    header2 = "Morioka Chuo High School, Japan"
    header3 = "Niigata Minami High School, Japan"
    description1 = "Throughout the GEP that spanned a course of four months, students engaged in meaningful and fun interactions with the students from Ikeda Junior High School, through games such as Skribblio and Online Bingo. Participants from both schools also shared about their culture through powerpoint presentations. Josephians were introduced to Japanese food, pop music, anime and much more, while they shared about the local Singaporean delicacies, our school and favourite movies with their Japanese counterparts.<br><br>Before their last GEP session, the team had the opportunity to participate in the Global Science Award (GSA), a prestigious science competition held by Ikeda Junior High School and supported by the Japanese Ministry of Education. During the competition, SJI’s five teams presented their science projects to a panel of judges. Against a tough fight with 64 other teams, one of SJI’s teams received the “Excellence” Award for their investigation on ant tunnelling."
    description2 = "This GEP exchange with SJI’s sister school Morioka Chuo High School in Northern Japan  has been a fruitful one for the SJI team. They forged new friendships and also learned more about the Iwate prefecture. Initially, there was some difficulty communicating because of the language barrier. However, over time the team adapted and got around this issue with the aid of translating apps and subtitles for their videos. Most of the foreign students the team conversed with are in the science stream, many of whom are aspiring to be doctors. The similarities between these common aspirations also made it easier to connect.<br><br>The main medium the teams chose to share about Singapore with the Japanese students was through (subtitled) videos. The teams wanted to showcase Singapore’s version of the Japanese hot springs (onsen) at Sembawang but unfortunately they were closed due to the pandemic. Despite this, through the many awkward and sometimes endearing breakout room sessions, the team also learnt more about local heritage, and the value of communication. Japanese high school students - Anna Tanaka and Chisato Mukaida filmed and shared Instagram videos of Morioka city with the SJI team. "
    description3 = "The 2021 Niigata connection was an eventful experience where the SJI team learnt how to connect with and understand the culture and viewpoints with their Japanese friends. It was an eye-opening experience coming from two different Asian countries with similar ways of life and yet culturally diverse perspectives.<br><br>Apart from the fruitful learning experience, connecting with the Japanese students was a uniquely rewarding experience. Despite the initial awkwardness, it was heartening to see the small ways in which the students learnt to communicate and show consideration for one other. As the sessions progressed, the Singaporean students began to speak observably slower for the Japanese students to understand. In turn, they would take their time and elaborate as best they could to understand each other properly. It was a joyful experience conversing using multiple mediums like pictures, gestures and the many facial expressions to understand each other. The effort that each student made to connect with the Niigata students was truly remarkable.<br><br>The GEP was an engaging journey where the students learnt to be more discerning individuals to culture, viewpoints and the sensitivities of others to help dispel the dissonance between one another."
    imgName1 = "./img/caring_hearts/gep/ikeda junior high school.png"
    imgName2 = "./img/caring_hearts/gep/moriokachuo1.png"
    imgName3 = "./img/caring_hearts/gep/niigata minami high school.jpg"
    countryDescription(description1, description2, description3, header1, header2, header3);

    displayVideo("Japan", imgName1, imgName2, imgName3);
    display.scrollIntoView({
        behavior: 'smooth'
    });

    countryCarousellNone(carousellId)
});

document.querySelector('#CN').addEventListener('click', function() {
    header1 = "Chengdu ShiShi High School, China"
    header2 = "Jinggu National School in Kunming, China"
    header3 = ""
    description1 = "The overarching topic of the programme with Chengdu ShiShi High School was “Me and My City”. Within the span of 4 sessions, several topics such as the movement towards clean, green energy and the countermeasures to air pollution were enthusiastically discussed. The participants went about their respective cities to capture their favourite places to visit, the hottest dining spots and dishes, and the most exciting attractions on camera for our sharing session.<br><br>Our Chinese friends shared with us the long history of their historical campus. Originally built between 143-141 BC, the construction of Chengdu ShiShi was ordered by the Han Dynasty’s governor, Qi Huang. The original campus was historically built from stone, hence the name ShiShi (石室), or ‘stone chamber’. In the third session, both parties shared their respective city’s remedies for air pollution. It was an eye-opening experience as the participants discovered similarities between China’s strategy and Singapore’s. In the final session, everyone had prepared their dinner for the presentation, from the mouthwatering dishes such as Mala Hotpot and Mapo Tofu by the ShiShi team to the  diverse range of Singapore cuisines from all over the world.<br><br>The Josephians were able to forge cross-national bonds with their ShiShi High School friends through WeChat and the Zoom sessions which were filled with laughter and joy. There are even some students who expressed their eagerness to visit Chengdu sans Covid restrictions."
    description2 = "Amid the ongoing pandemic, SJI held its 3rd collaboration with Jinggu National School in Kunming, China. During the exchanges, students from the two schools 'gathered' in the online breakout rooms. Topics such as lifestyle, customs and traditions, entertainment, education, environment and rural environment of the two countries were shared and discussed during their weekly virtual exchanges.<br><br>The interactive small group interactions gave the teams a chance to share their different cultures and school experiences. The diversity of students that they encountered enriched the reflection process, which is the main source for learning in this virtual exchange process. This experience also allowed the teams to hone their speaking and enunciation of Chinese.<br><br>The highlight of this exchange would be 'Virtual Dinner and Concert' where students from both schools had dinner over Zoom, chatting and getting to know each other - about life, learning, and the future. After dinner, the students shared their talents through performances on the guitar and piano, cucurbit blowing, Dai dance, magic show, etc. Through participation in the virtual exchange, the students developed cross-cultural communication skills, confidence, curiosity, self-efficacy and tolerance of ambiguity. In a rapidly internationalising world, these skills are highly essential."
    description3 = ""
    imgName1 = "./img/caring_hearts/gep/chengdu shi shi.jpg"
    imgName2 = "./img/caring_hearts/gep/jinggu national school2.jpg"
    imgName3 = ""
    countryDescription(description1, description2, description3, header1, header2, header3);

    displayVideo("China", imgName1, imgName2, imgName3);
    display.scrollIntoView({
        behavior: 'smooth'
    });
    
    carousellId = "china_carousell"
    countryCarousell(carousellId)

    document.getElementById("cambodia_carousell").style.display = "none";
    document.getElementById("australia_carousell").style.display = "none";
    document.getElementById("laos_carousell").style.display = "none";
    document.getElementById("malaysia_carousell").style.display = "none";
    document.getElementById("thailand_carousell").style.display = "none";
    document.getElementById("vietnam_carousell").style.display = "none";
});

document.querySelector('#TW').addEventListener('click', function() {
    header1 = "National Tainan Second Senior High School, Taiwan"
    header2 = ""
    header3 = ""
    description1 = "During the GEP programme, SJI students had the opportunity to meet and interact with students from National Tainan Second Senior High School. Josephians received a taste of the Taiwanese culture through understanding the Taiwanese way of life as well as their student lives. From this experience, the team learnt how rigorous the Taiwanese education system is, as well as the values and beliefs they uphold.<br><br>Each group was tasked to create a video based on these five research topics: Identity, Experiences, Human Ingenuity, Social Organisation and Sharing the Planet. The discussion component of the programme was an eye-opening experience that helped the team broaden their perception and global awareness.<br><br>This experience was challenging but fulfilling as it allowed the team to use their creativity to bond and get to know new friends from Taiwan and their society. The team under Dr Lee Lye Hin is very grateful for this wonderful opportunity to learn about Taiwan’s culture, and to be able to meet new people and forge long lasting friendships. "
    description2 = ""
    description3 = ""
    imgName1 = "./img/caring_hearts/gep/national_tainan_second_senior_high_school.png"
    imgName2 = ""
    imgName3 = ""
    countryDescription(description1, description2, description3, header1, header2, header3);

    displayVideo("Taiwan", imgName1, imgName2, imgName3);
    display.scrollIntoView({
        behavior: 'smooth'
    });

    countryCarousellNone(carousellId)
});



document.querySelector('#VN').addEventListener('click', function() {
    header1 = ""
    header2 = ""
    header3 = ""
    description1 = ""
    description2 = ""
    description3 = ""
    imgName1 = ""
    imgName2 = ""
    imgName3 = ""
    countryDescription(description1, description2, description3, header1, header2, header3);

    displayVideo("Vietnam", imgName1, imgName2, imgName3);
    display.scrollIntoView({
        behavior: 'smooth'
    });

    carousellId = "vietnam_carousell"
    countryCarousell(carousellId)

    document.getElementById("cambodia_carousell").style.display = "none";
    document.getElementById("australia_carousell").style.display = "none";
    document.getElementById("laos_carousell").style.display = "none";
    document.getElementById("malaysia_carousell").style.display = "none";
    document.getElementById("thailand_carousell").style.display = "none";
    document.getElementById("china_carousell").style.display = "none";
});

document.querySelector('#KR').addEventListener('click', function() {
    header1 = "Heart & Seoul with Sooncheon Je-il High School, Seoul, South Korea"
    header2 = ""
    header3 = ""
    description1 = "From October to November, the team of students led by Ms Lynette Lin and Ms Doris Koh had the opportunity to interact with students from Seoul. The experience, although being limited by current travel restrictions, was still as fulfilling and exciting as one could imagine.<br><br>One of the main themes of the International Baccalaureate is global engagement. This virtual trip to Korea has allowed SJI’s students to learn more about Korea’s culture - the SJI team were exposed to the typical types of beliefs and values that most Koreans cherish. In exchange, the team would also introduce them to Singaporean culture, especially Singapore’s exotic food scene. In one of the sessions, they held a virtual cooking class whereby both Koreans and Singaporeans would choose unique and authentic dishes, after which, they taught the other party how to cook this dish. Not only did the culinary exchange help students to forge a stronger bond with one another, but it also gave them an opportunity to reflect about the wonderful culture that they have, and the identity they associate with."
    description2 = ""
    description3 = ""
    imgName1 = "./img/caring_hearts/gep/sooncheon_je-il.png"
    imgName2 = ""
    imgName3 = ""
    countryDescription(description1, description2, description3, header1, header2, header3);

    displayVideo("South Korea", imgName1, imgName2, imgName3);
    display.scrollIntoView({
        behavior: 'smooth'
    });

    countryCarousellNone(carousellId)
});

document.querySelector('#AU').addEventListener('click', function() {
    header1 = ""
    header2 = ""
    header3 = ""
    description1 = ""
    description2 = ""
    description3 = ""
    imgName1 = ""
    imgName2 = ""
    imgName3 = ""
    countryDescription(description1, description2, description3, header1, header2, header3);

    displayVideo("Australia", imgName1, imgName2, imgName3);
    display.scrollIntoView({
        behavior: 'smooth'
    });

    carousellId = "australia_carousell"
    countryCarousell(carousellId)

    document.getElementById("cambodia_carousell").style.display = "none";
    document.getElementById("vietnam_carousell").style.display = "none";
    document.getElementById("laos_carousell").style.display = "none";
    document.getElementById("malaysia_carousell").style.display = "none";
    document.getElementById("thailand_carousell").style.display = "none";
    document.getElementById("china_carousell").style.display = "none";
});

document.querySelector('#PH').addEventListener('click', function() {
    header1 = "Lasallian INternational Experience (LINE) Hong Kong – Japan – Malaysia – Myanmar – Philippines – Thailand "
    header2 = ""
    header3 = ""
    description1 = "The Lasallian InterNational Experience (LINE) is a virtual gathering of students from schools across Lasallian East Asia District (Hong Kong – Japan – Malaysia – Myanmar – Philippines – Singapore – Thailand). It is a four-week formation programme that guides students to draw parallels between their lives and the life of John Baptist de La Salle.<br><br>Students from SJI were separated into different groups. They were given time to interact and share their various opinions on societal issues. Initially, the language and cultural barrier hindered them from conversing comfortably. However, through the course of the programme, the students could communicate more effectively and openly. The students were able to use the knowledge they had gained to organise and carry out a project as a school to serve the last, the lost and the least.<br><br>The students brainstormed about who they wanted to serve, how they tried to execute the project and possible difficulties they might face. The programme allowed them to think from a different perspective and come up with better ideas."
    description2 = ""
    description3 = ""
    imgName1 = "./img/caring_hearts/gep/LINE.jpg"
    imgName2 = ""
    imgName3 = ""
    countryDescription(description1, description2, description3, header1, header2, header3);

    displayVideo("Philippines", imgName1, imgName2, imgName3);
    display.scrollIntoView({
        behavior: 'smooth'
    });

    countryCarousellNone(carousellId)
});

document.querySelector('#HK').addEventListener('click', function() {
    header1 = "Lasallian INternational Experience (LINE) Hong Kong – Japan – Malaysia – Myanmar – Philippines – Thailand "
    header2 = ""
    header3 = ""
    description1 = "The Lasallian InterNational Experience (LINE) is a virtual gathering of students from schools across Lasallian East Asia District (Hong Kong – Japan – Malaysia – Myanmar – Philippines – Singapore – Thailand). It is a four-week formation programme that guides students to draw parallels between their lives and the life of John Baptist de La Salle.<br><br>Students from SJI were separated into different groups. They were given time to interact and share their various opinions on societal issues. Initially, the language and cultural barrier hindered them from conversing comfortably. However, through the course of the programme, the students could communicate more effectively and openly. The students were able to use the knowledge they had gained to organise and carry out a project as a school to serve the last, the lost and the least.<br><br>The students brainstormed about who they wanted to serve, how they tried to execute the project and possible difficulties they might face. The programme allowed them to think from a different perspective and come up with better ideas."
    description2 = ""
    description3 = ""
    imgName1 = "./img/caring_hearts/gep/LINE.jpg"
    imgName2 = ""
    imgName3 = ""
    countryDescription(description1, description2, description3, header1, header2, header3);

    displayVideo("Hong Kong", imgName1, imgName2, imgName3);
    display.scrollIntoView({
        behavior: 'smooth'
    });

    countryCarousellNone(carousellId)
});

document.querySelector('#LA').addEventListener('click', function() {
    header1 = ""
    header2 = ""
    header3 = ""
    description1 = ""
    description2 = ""
    description3 = ""
    imgName1 = ""
    imgName2 = ""
    imgName3 = ""
    countryDescription(description1, description2, description3, header1, header2, header3);

    displayVideo("Laos", imgName1, imgName2, imgName3);
    display.scrollIntoView({
        behavior: 'smooth'
    });

    carousellId = "laos_carousell"
    countryCarousell(carousellId)

    document.getElementById("cambodia_carousell").style.display = "none";
    document.getElementById("australia_carousell").style.display = "none";
    document.getElementById("china_carousell").style.display = "none";
    document.getElementById("malaysia_carousell").style.display = "none";
    document.getElementById("thailand_carousell").style.display = "none";
    document.getElementById("vietnam_carousell").style.display = "none";
});

document.querySelector('#MY').addEventListener('click', function() {
    header1 = "Lasallian INternational Experience (LINE) Hong Kong – Japan – Malaysia – Myanmar – Philippines – Thailand "
    header2 = ""
    header3 = ""
    description1 = "The Lasallian InterNational Experience (LINE) is a virtual gathering of students from schools across Lasallian East Asia District (Hong Kong – Japan – Malaysia – Myanmar – Philippines – Singapore – Thailand). It is a four-week formation programme that guides students to draw parallels between their lives and the life of John Baptist de La Salle.<br><br>Students from SJI were separated into different groups. They were given time to interact and share their various opinions on societal issues. Initially, the language and cultural barrier hindered them from conversing comfortably. However, through the course of the programme, the students could communicate more effectively and openly. The students were able to use the knowledge they had gained to organise and carry out a project as a school to serve the last, the lost and the least.<br><br>The students brainstormed about who they wanted to serve, how they tried to execute the project and possible difficulties they might face. The programme allowed them to think from a different perspective and come up with better ideas."
    description2 = ""
    description3 = ""
    imgName1 = "./img/caring_hearts/gep/LINE.jpg"
    imgName2 = ""
    imgName3 = ""
    countryDescription(description1, description2, description3, header1, header2, header3);

    displayVideo("Malaysia", imgName1, imgName2, imgName3);
    display.scrollIntoView({
        behavior: 'smooth'
    });

    carousellId = "malaysia_carousell"
    countryCarousell(carousellId)

    document.getElementById("cambodia_carousell").style.display = "none";
    document.getElementById("australia_carousell").style.display = "none";
    document.getElementById("laos_carousell").style.display = "none";
    document.getElementById("china_carousell").style.display = "none";
    document.getElementById("thailand_carousell").style.display = "none";
    document.getElementById("vietnam_carousell").style.display = "none";
});


document.querySelector('#US').addEventListener('click', function() {
    header1 = "Union Grove High School, Atlanta, Georgia, United States of America"
    header2 = ""
    header3 = ""
    description1 = "The SGxUP GEP is part of the four-week long virtual exchange programme conducted with Union Grove High School in Atlanta, Georgia, to expand every participant’s worldview, while also allowing a channel of communication between the two countries. Through using literary texts as the main modes of comparison, Singaporean and American students talked about their experiences with social inequality, American schooling, among other things. This experience gave many of our Singaporean students an insight of life in America, one that was perceived to be quite different from the stereotypes that our Josephians initially had, such as their preference of using Google Meet rather than Zoom, and not all American students owned phones.<br><br>Students were divided into four groups to discuss four themes: Privilege and Merit, Relationships, Journeys, and Outcasts and Conformity. Each theme wrestled with the idea of individuals and their interactions with society, giving us plenty to talk about as it was relatable to everyone. The small group breakout rooms gave students a safe place to communicate about their personal experiences with each topic, and showed many students that despite being from different countries, our experiences were still very similar. After the serious activities were over, there were icebreakers in place to provide for lighthearted chats and fun activities. <br><br>Despite the technical difficulties with Zoom and the Wifi, the GEP still provided the participants with a heartwarming experience in spite of the initial awkwardness brought about by technological difficulties, but many were very happy to see the American students finally open up to us. <br><br>Overall, this experience was not only eye-opening, but was a moment of growth for every student involved, as they learnt about the different cultures and grew past ingrained stereotypes to become better globalised learners."
    description2 = ""
    description3 = ""
    imgName1 = "./img/caring_hearts/gep/union grove high school.png"
    imgName2 = ""
    imgName3 = ""
    countryDescription(description1, description2, description3, header1, header2, header3);

    displayVideo("USA", imgName1, imgName2, imgName3);
    display.scrollIntoView({
        behavior: 'smooth'
    });
    countryCarousellNone(carousellId)
});

document.querySelector('#TH').addEventListener('click', function() {
    header1 = "Lasallian INternational Experience (LINE) Hong Kong – Japan – Malaysia – Myanmar – Philippines – Thailand "
    header2 = ""
    header3 = ""
    description1 = "The Lasallian InterNational Experience (LINE) is a virtual gathering of students from schools across Lasallian East Asia District (Hong Kong – Japan – Malaysia – Myanmar – Philippines – Singapore – Thailand). It is a four-week formation programme that guides students to draw parallels between their lives and the life of John Baptist de La Salle.<br><br>Students from SJI were separated into different groups. They were given time to interact and share their various opinions on societal issues. Initially, the language and cultural barrier hindered them from conversing comfortably. However, through the course of the programme, the students could communicate more effectively and openly. The students were able to use the knowledge they had gained to organise and carry out a project as a school to serve the last, the lost and the least.<br><br>The students brainstormed about who they wanted to serve, how they tried to execute the project and possible difficulties they might face. The programme allowed them to think from a different perspective and come up with better ideas."
    description2 = ""
    description3 = ""
    imgName1 = "./img/caring_hearts/gep/LINE.jpg"
    imgName2 = ""
    imgName3 = ""
    countryDescription(description1, description2, description3, header1, header2, header3);

    displayVideo("Thailand", imgName1, imgName2, imgName3);
    display.scrollIntoView({
        behavior: 'smooth'
    });
    
    carousellId = "thailand_carousell"
    countryCarousell(carousellId)

    document.getElementById("cambodia_carousell").style.display = "none";
    document.getElementById("australia_carousell").style.display = "none";
    document.getElementById("laos_carousell").style.display = "none";
    document.getElementById("malaysia_carousell").style.display = "none";
    document.getElementById("china_carousell").style.display = "none";
    document.getElementById("vietnam_carousell").style.display = "none";
});

document.querySelector('#MM').addEventListener('click', function() {
    header1 = "Lasallian INternational Experience (LINE) Hong Kong – Japan – Malaysia – Myanmar – Philippines – Thailand "
    header2 = ""
    header3 = ""
    description1 = "The Lasallian InterNational Experience (LINE) is a virtual gathering of students from schools across Lasallian East Asia District (Hong Kong – Japan – Malaysia – Myanmar – Philippines – Singapore – Thailand). It is a four-week formation programme that guides students to draw parallels between their lives and the life of John Baptist de La Salle.<br><br>Students from SJI were separated into different groups. They were given time to interact and share their various opinions on societal issues. Initially, the language and cultural barrier hindered them from conversing comfortably. However, through the course of the programme, the students could communicate more effectively and openly. The students were able to use the knowledge they had gained to organise and carry out a project as a school to serve the last, the lost and the least.<br><br>The students brainstormed about who they wanted to serve, how they tried to execute the project and possible difficulties they might face. The programme allowed them to think from a different perspective and come up with better ideas."
    description2 = ""
    description3 = ""
    imgName1 = "./img/caring_hearts/gep/LINE.jpg"
    imgName2 = ""
    imgName3 = ""
    countryDescription(description1, description2, description3, header1, header2, header3);

    displayVideo("Myanmar", imgName1, imgName2, imgName3);
    display.scrollIntoView({
        behavior: 'smooth'
    });

    countryCarousellNone(carousellId)
});

document.querySelector('#KH').addEventListener('click', function() {
    header1 = ""
    header2 = ""
    header3 = ""
    description1 = ""
    description2 = ""
    description3 = ""
    imgName1 = ""
    imgName2 = ""
    imgName3 = ""
    countryDescription(description1, description2, description3, header1, header2, header3);

    displayVideo("Cambodia", imgName1, imgName2, imgName3);
    display.scrollIntoView({
        behavior: 'smooth'
    });

    carousellId = "cambodia_carousell"
    countryCarousell(carousellId)

    document.getElementById("china_carousell").style.display = "none";
    document.getElementById("australia_carousell").style.display = "none";
    document.getElementById("laos_carousell").style.display = "none";
    document.getElementById("malaysia_carousell").style.display = "none";
    document.getElementById("thailand_carousell").style.display = "none";
    document.getElementById("vietnam_carousell").style.display = "none";
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

const countryCarousell = (carousellId) => {
    document.getElementById(carousellId).style.display = "block";
}

const countryCarousellNone = (carousellId) => {
    document.getElementById(carousellId).style.display = "none";
}