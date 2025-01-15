function redirectToMail(mailid){
  alert("Thank for contacting, we'll ping you asap.")

}

const translations = {
  en: {
    nav1: "Home",
    nav2: "Teaching",
    nav3: "Shop",
    nav4: "about",
    nav5: "Language",
    TeachingSearchPlaceHolder:"Search for crop...",
    TeachingSearchButton:"Search",
    label1:"Temperature: ",
    label2:"Season: ",
    label3:"Duration: ",
    label4:"Soil: ",
    label5:"Water: ",
    label6:"Irrigation: ",
    label7:"Fertilizers: ",
    label8:"Pests: ",
    crop1:"Best for: corn, sorghum, sugarcane.",
    crop2:"Best for: Cotton, potatoes",
    crop3:"Best for: Rice, Soybeans",
    crop4:"Best for: Cotton, Vegetables",
    crop5:"Best for: Cotton, Brinjal",
    crop6:"Best for: wheat, corn",
    crop7:"Best for: cotton, corn",
    crop8:"Best for: Tomatoes, berries",
    crop9:"Best for: wheat, corn",
    crop10:"Best for: Soybeans, Pastures ",
    crop11:"Best for: Apples, corn",
    crop12:"Best for: grapes, berries",
    crop13:"Best for: barley, rice",
    crop14:"Best for: potatoes, soybeans",
    crop15:"Best for: Cotton, corn",
    crop16:"Best for: pears, cabbage",
    crop17:"Best for: Apples, mangoes",
    crop18:"Best for: potatoes, cauliflower",
    buyb:"Buy Now",
    aboutheading:"About Us",
    aboutText1:"Welcome to <b>AgriConnect</b>, your trusted partner in farming and agriculture!",
    aboutText2:"At AgriConnect, we are committed to empowering farmers with knowledge and resources to grow a better tomorrow. Our goal is to support you in making informed decisions about crops, their requirements, and effective agricultural practices—all in the language you are most comfortable with: English, Hindi, and Telugu.",
    aboutText3:"What We Offer Crop Education We provide detailed information about various crops, including their water needs, soil type, temperature preferences, and more. Learn about pest management, fertilizers, and seasonal insights tailored to your region. Farming Resources Whether you need pesticides, fertilizers, or high-quality seeds, we've got you covered. We ensure timely delivery of all essential agricultural products right to your doorstep, saving you time and effort. Language Support We believe that knowledge is best understood in a language you are comfortable with. Our platform supports English, Hindi, and Telugu, making it accessible to farmers across India. Sustainable Solutions From organic farming tips to advanced sustainable practices, we guide you  toward eco-friendly methods that benefit both your crops and the environment.",
    aboutText4:"Why Choose Us? Farmer-Centric Approach: We prioritize your needs and challenges. Accessible Information: Our multilingual platform ensures that every farmer can access the guidance they need. Quality Assurance: All products delivered through us are tested and trusted for the best results. Affordable Solutions: We aim to make modern farming techniques and products accessible to all. Join us in cultivating a brighter future. Let's grow together with AgriConnect—because your success is our mission. Contact us today to learn more and explore the resources waiting for you!",
    aboutheading2:"Our Team",
    quote1:"Farming is our heritage, innovation is our promise. Let's nurture success, together.",
    quote2:"Fostering a green revolution. Where farmers meet solutions tailored to their needs.",
    contactB:"Contact",
    checkout:"Check Out",
    fill:"Please fill the details",
    nameinput:"Enter your name.",
    numberinput:"Enter your number.",
    emailinput:"Enter your address.",
    agreement:"agree to terms and condition",

    

    
  },
  hi: {
    nav1: "घर",
    nav2: "शिक्षण",
    nav3: "दुकान",
    nav4: "परिचय ",
    nav5: "भाषा",
    TeachingSearchPlaceHolder:"फसलें खोजें...",
    TeachingSearchButton:"खोज",
    label1:"तापमान: ",
    label2:"ऋतु: ",
    label3:"अवधि: ",
    label4:"मिट्टी: ",
    label5:"पानी: ",
    label6:"सिंचाई: ",
    label7:"उर्वरक: ",
    label8:"कीट: ",
    crop1:"सर्वोत्तम: मक्का, ज्वार, गन्ना",
    crop2:"सर्वोत्तम: कपास, आलू",
    crop3:"सर्वोत्तम: चावल, सोयाबीन",
    crop4:"सर्वोत्तम: कपास, सब्जियाँ",
    crop5:"सर्वोत्तम: कपास, बैंगन",
    crop6:"सर्वोत्तम: कपास, मक्का",
    crop7:"सर्वोत्तम: कपास, मक्का",
    crop8:"सर्वोत्तम: टमाटर, जामुन",
    crop9:"सर्वोत्तम: गेहूं, मक्का",
    crop10:"सर्वोत्तम: सोयाबीन, चरागाह",
    crop11:"सर्वोत्तम: सेब, मक्का",
    crop12:"अंगूर, जामुन",
    crop13:"सर्वोत्तम: जौ, चावल",
    crop14:"सर्वोत्तम: आलू, सोयाबीन",
    crop15:"सर्वोत्तम: कपास, मक्का",
    crop16:"सर्वोत्तम: नाशपाती, पत्तागोभी",
    crop17:"सर्वोत्तम: सेब, आम",
    crop18:"सर्वोत्तम: आलू, फूलगोभी",
    buyb:"अभी खरीदें",
    aboutheading:"हमारे बारे में",
    aboutText1:"<b>AgriConnect</b> में आपका स्वागत है, कृषि और खेती में आपका विश्वसनीय साथी!",
    aboutText2:"AgriConnect में, हम किसानों को ज्ञान और संसाधनों के साथ सशक्त बनाने के लिए प्रतिबद्ध हैं ताकि वे एक बेहतर कल उगा सकें। हमारा लक्ष्य आपको फसलों, उनकी आवश्यकताओं और प्रभावी कृषि प्रथाओं के बारे में सूचित निर्णय लेने में समर्थन करना है—वह भी आपकी पसंदीदा भाषा में: अंग्रेजी, हिंदी और तेलुगु।",
    aboutText3:"हम क्या प्रदान करते हैं फसल शिक्षा हम विभिन्न फसलों के बारे में विस्तृत जानकारी प्रदान करते हैं, जिसमें उनकी पानी की आवश्यकता, मिट्टी का प्रकार, तापमान की प्राथमिकताएँ, और बहुत कुछ शामिल है। कीट प्रबंधन, उर्वरकों, और मौसमी अंतर्दृष्टियों के बारे में जानें जो आपके क्षेत्र के अनुसार अनुकूलित हैं। कृषि संसाधन चाहे आपको कीटनाशक, उर्वरक या उच्च गुणवत्ता वाले बीज की आवश्यकता हो, हम आपकी सभी जरूरतों को पूरा करते हैं। हम सभी आवश्यक कृषि उत्पादों की समय पर डिलीवरी सुनिश्चित करते हैं, ताकि आपका समय और प्रयास बच सके। भाषा समर्थन हम मानते हैं कि ज्ञान को उस भाषा में समझना सबसे अच्छा होता है, जिसमें आप सहज महसूस करते हैं। हमारा मंच अंग्रेजी, हिंदी और तेलुगु को समर्थन देता है, जिससे यह भारत भर के किसानों के लिए सुलभ बनता है। सतत समाधान कार्बनिक खेती के टिप्स से लेकर उन्नत सतत प्रथाओं तक, हम आपको उन पारिस्थितिकीय रूप से अनुकूल विधियों की ओर मार्गदर्शन करते हैं, जो आपकी फसलों और पर्यावरण दोनों के लिए फायदेमंद हैं।",
    aboutText4:"हमें क्यों चुनें? किसान-केंद्रित दृष्टिकोण: हम आपकी आवश्यकताओं और चुनौतियों को प्राथमिकता देते हैं। सुलभ जानकारी: हमारा बहुभाषी मंच यह सुनिश्चित करता है कि हर किसान उस मार्गदर्शन तक पहुंच सके जिसकी उन्हें आवश्यकता है। गुणवत्ता आश्वासन: हमारे द्वारा प्रदान किए गए सभी उत्पाद परीक्षणित और सर्वोत्तम परिणामों के लिए विश्वसनीय हैं।सस्ती समाधान:हमारा उद्देश्य आधुनिक कृषि तकनीकों और उत्पादों को सभी के लिए सुलभ बनाना है।हमसे जुड़ें और एक उज्जवल भविष्य को उगाने में मदद करें। आइए हम साथ में AgriConnect के साथ बढ़ें—क्योंकि आपकी सफलता हमारा मिशन है।आज ही हमसे संपर्क करें, अधिक जानने के लिए और उन संसाधनों को एक्सप्लोर करने के लिए जो आपके लिए इंतजार कर रहे हैं!",
    aboutheading2:"हमारी टीम",
    quote1:"कृषि हमारी धरोहर है, नवाचार हमारी वचनबद्धता है। आइए हम सफलता को साथ मिलकर संजोएं।",
    quote2:"हरे क्रांति को बढ़ावा देना। जहाँ किसान अपनी जरूरतों के अनुसार समाधान प्राप्त करते हैं।",
    contactB:"संपर्क करें",
    checkout:"जाँच करें",
    fill:"कृपया विवरण भरें",
    agreement:"शर्तों और नियमों से सहमत हों",
    nameinput:"अपना नाम दर्ज करें।",
    numberinput:"अपना नंबर दर्ज करें",
    addressinput:"अपना पता दर्ज करें|",
    
  },
  te: {
    nav1: "ఇల్లు ",
    nav2: "బోధన ",
    nav3: "దుకాణం ",
    nav4: "గురించి  ",
    nav5: "భాష ",
    TeachingSearchPlaceHolder:"పంట కోసం శోధించండి...",
    TeachingSearchButton:"శోధన ",
    label1:"ఉష్ణోగ్రత: ",
    label2:"కాలం: ",
    label3:"వ్యవధి: ",
    label4:"మట్టి: ",
    label5:"నీరు: ",
    label6:"నీటి సరఫరా: ",
    label7:"రసాయనాలు: ",
    label8:"కీటకాలు: ",
    crop1:"ఉత్తమం: మక్కా, జొన్న",
    crop2:"ఉత్తమం: పత్తి, ఆలూ",
    crop3:"ఉత్తమం: అన్నం, సోయాబీన్",
    crop4:"ఉత్తమం: పత్తి, కూరగాయలు",
    crop5:"ఉత్తమం: పత్తి, బంగాళాదుంప",
    crop6:"ఉత్తమం: పత్తి, మక్కా",
    crop7:"ఉత్తమం: పత్తి, మక్కా",
    crop8:"ఉత్తమం: టమాటో, బేరీస్",
    crop9:"ఉత్తమం: గోధుమ, మక్కా",
    crop10:"ఉత్తమం: సోయాబీన్, గోచర భూమి",
    crop11:" ఉత్తమం: ఆపples, మక్కా",
    crop12:"ఉత్తమం: ద్రాక్ష, బేరీస్",
    crop13:" ఉత్తమం: బార్లి, అరటి",
    crop14:"ఉత్తమం: ఆలూ, సోయాబీన్",
    crop15:"ఉత్తమం: పత్తి, అత్తా",
    crop16:"ఉత్తమం: నాశపాటి, బోథకోబ్బీ",
    crop17:"దీనికి ఉత్తమమైనది: యాపిల్స్, మామిడి",
    crop18:"ఉత్తమం: ఆలూ, కాలిఫ్లవర్",
    buyb:"ఇప్పుడు కొనండి",
    aboutheading:"మన గురించి",
    aboutText1:"<b>AgriConnect</b> కు స్వాగతం, రైతు మరియు వ్యవసాయం లో మీ విశ్వసనీయ భాగస్వామి!",
    aboutText2:"AgriConnect లో, మేము రైతులను మంచి భవిష్యత్తును పెంచేందుకు జ్ఞానం మరియు వనరులతో శక్తివంతం చేయడంలో నిబద్ధంగా ఉన్నాము. మా లక్ష్యం మీరు పంటలు, వాటి అవసరాలు మరియు సమర్ధవంతమైన వ్యవసాయ అభ్యాసాల గురించి సూత్రసంగతమైన నిర్ణయాలు తీసుకోవడంలో మద్దతు ఇవ్వడమే—మీరు అత్యంత సౌకర్యంగా ఉన్న భాషలో: ఆంగ్లం, హిందీ, మరియు తెలుగు.",
    aboutText3:"మేము ఏమి అందిస్తున్నాం పంట విద్య మేము వివిధ పంటల గురించి విస్తృత సమాచారం అందిస్తున్నాము, వాటి నీటి అవసరాలు, మట్టির రకం, ఉష్ణోగ్రత ప్రాధాన్యతలు మరియు మరిన్ని. మీ ప్రాంతానికి అనుగుణంగా పంటల నిర్వహణ, రసాయనాలు, మరియు సీజనల్ అవగాహన గురించి నేర్చుకోండి. వ్యవసాయ వనరులు మీకు పురుగుల మందులు, రసాయనాలు లేదా అత్యుత్తమ నాణ్యత గల విత్తనాలు అవసరమైతే, మేము వాటిని అందిస్తున్నాము. మీ తగిన అన్ని వ్యవసాయ ఉత్పత్తుల సమయానికి డెలివరీని నిర్ధారిస్తాము, తద్వారా మీ సమయం మరియు శక్తిని ఆదా చేయగలుగుతాము. భాషా మద్దతు జ్ఞానం మీరు సౌకర్యంగా ఉండే భాషలో అర్థం చేసుకోవడం ఉత్తమమని మేము నమ్ముతున్నాము. మా వేదిక ఆంగ్లం, హిందీ మరియు తెలుగు భాషలను మద్దతు చేస్తుంది, దీని ద్వారా ఇది భారతదేశంలోని రైతులకు అందుబాటులో ఉంటుంది. సుస్థిర పరిష్కారాలు జैవిక వ్యవసాయ సలహాలు నుండి ఆధునిక సుస్థిర పద్ధతులు వరకు, మేము పర్యావరణం మరియు పంటలకి అనుకూలమైన పద్ధతుల వైపు మీరు దారిచూపిస్తాము.",
    aboutText4:"మమ్మల్ని ఎందుకు ఎంచుకోవాలి? రైతు-కేంద్రిత దృష్టికోణం:మేము మీ అవసరాలు మరియు సవాళ్లను ప్రాధాన్యం ఇస్తున్నాము. అందుబాటులో ఉన్న సమాచారం:మన మల్టీలాంగ్వేజ్ ప్లాట్‌ఫారమ్ ప్రతి రైతు ఆవశ్యకమైన మార్గదర్శకత్వం పొందగలుగుతుందని నిర్ధారిస్తుంది.నాణ్యత హామీ:మేము అందించే అన్ని ఉత్పత్తులు పరీక్షించబడి, ఉత్తమ ఫలితాల కోసం నమ్మకమైనవి.సాధారణమైన పరిష్కారాలు:ఆధునిక వ్యవసాయ సాంకేతికతలు మరియు ఉత్పత్తులను అందరికీ అందుబాటులో ఉంచడమే మా లక్ష్యం.మమ్మల్ని చేరి ఒక ప్రకాశవంతమైన భవిష్యత్తును పండించడంలో సహకరించండి. AgriConnect తో కలిసి పండిద్దాం—కారణం మీ విజయం మన లక్ష్యం.ఇంకా తెలుసుకోవడానికి మరియు మీ కోసం ఎదురు చూస్తున్న వనరులను అన్వేషించడానికి ఈ రోజు మనతో సంప్రదించండి!",
    aboutheading2:"మా జట్టు",
    quote1:"వ్యవసాయం మన వారసత్వం, ఆవిష్కరణ మన హామీ. మనం కలిసి విజయాన్ని పెంపొందించుకుందాం.",
    quote2:"హరిత విప్లవాన్ని ప్రోత్సహించడం. రైతులు తమ అవసరాలకు అనుకూలమైన పరిష్కారాలను పొందే చోటు.",
    contactB:"సంప్రదించండి",
    checkout:" తనిఖీ చేయండి",
    fill:" దయచేసి వివరాలు భరించండి.",
    agreement:"నిబంధనలు మరియు షరతులకు అంగీకరించండి.",
    nameinput:"మీ పేరు నమోదు చేయండి",
    numberinput:"మీ సంఖ్యను నమోదు చేయండి.",
    addressinput:"మీ చిరునామాను నమోదు చేయండి",

  }
};

function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang][key];
  });
  const placeholders = document.querySelectorAll("[data-placeholder]");
  placeholders.forEach((el) => {
    const key = el.getAttribute("data-placeholder");
    el.placeholder = translations[lang][key];
  });
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNumber = getRandomInt(99,699);

function selectLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    changeLanguage(lang);
    changePayButton();
  }
function changePayButton(){
  try{
    const payButton = document.querySelector(".paybutton");
    lang=localStorage.getItem("selectedLanguage")
    if(lang=="hi"){
      payButton.textContent = `भुगतान करें ₹${randomNumber}`
    }
    else if(lang=="te"){
      payButton.textContent = ` చెల్లించండి ₹${randomNumber}`
    }
    else{
      payButton.textContent = `Pay ₹${randomNumber}`;
    }
    
  }
  finally{
    console.log("element is not present");
  }
}
window.onload=function(){
  changePayButton();
  changeLanguage(localStorage.getItem("selectedLanguage"));
}