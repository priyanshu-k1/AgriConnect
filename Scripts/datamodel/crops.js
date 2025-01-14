class Rice {
  pic = "Resources/crops/rice.png";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow="खरीफ मौसम (मानसून सीजन): जून-जुलाई";
      this.Duration="100-150 दिन";
      this.Soil="चिकनी दोमट या गादयुक्त दोमट मिट्टी";
      this.WaterRequirement="पूरे बढ़ती मौसम के दौरान उच्च जल आवश्यकता। अधिकांश वृद्धि अवधि के लिए निरंतर जलभराव आवश्यक है।";
      this.Irrigation ="बाढ़ सिंचाई";
      this.Temperature="25-35°C";
      this.Fertilizers="नाइट्रोजन, फास्फोरस, और पोटेशियम का संतुलित उपयोग अत्यंत महत्वपूर्ण है।";
      this.Pests="कीट: तना कुच्चू, पत्तियाँ कूदने वाले कीट, फौजी कीड़े, लार्वा।   ";
    } 
    else if (lang == "te") {
      this.BestSeasonToGrow="ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration="100-150 రోజులు";
      this.Soil="మట్టి లోమ్స్ లేదా మట్టి తుమ్ముల మట్టి";
      this.WaterRequirement="పెరుగుదల కాలం boyunca అధిక నీటి అవసరం. పెరుగుదల సమయంలో ఎక్కువ భాగం కోసం నిరంతర వరద అవసరం.";
      this.Irrigation ="వరద నీరా సంరక్షణ";
      this.Temperature="25-35°C";
      this.Fertilizers="నైట్రోజెన్, ఫాస్ఫరస్, మరియు పొటాషియం సంతులితంగా ఉపయోగించడం అత్యంత ముఖ్యమైనది.";
      this.Pests="కీటకాలు: మెట్టు తించేవారు, ఆకు జంపర్లు, ఆర్మీ వేళ్ళు, లార్వా.";
    } 
    else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "100-150 days";
      this.Soil = "Clayey loam or silty loam soils";
      this.WaterRequirements =
        "High water requirement throughout the growing season.Continuous flooding is necessary for most of the growth period";
      this.Irrigation = "Flood irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers =
        "Balanced application of nitrogen, phosphorus, and potassium is crucial.";
        this.Pests = "Pests: Stem borers, leaf hoppers, armyworms, grubs.";
    }
  }
}

class Wheat {
  pic = "Resources/crops/wheat.png";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow = "रबी सीजन (सर्दियों का मौसम): अक्टूबर-नवंबर";
      this.Duration = "120-150 दिन";
      this.Soil = "दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "बाढ़ सिंचाई, ड्रिप सिंचाई, स्प्रिंकलर सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटाश उर्वरक";
      this.Pests = "एफिड्स, रस्ट और स्मट";
    } else if (lang == "te") {
      this.BestSeasonToGrow = "రబీ సీజన్ (శీతాకాలం): అక్టోబర్-నవంబర్";
      this.Duration = "120-150 రోజులు";
      this.Soil = "లోమి మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "వెళ్లిపోయే నీటి ముంపు, డ్రిప్ నీటిపారుదల, స్ప్రింక్లర్ నీటిపారుదల";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం ఎరువులు";
      this.Pests = "ఆఫిడ్స్, రస్ట్ మరియు స్మట్";
    } else {
      this.BestSeasonToGrow = "Rabi Season (Winter Season): October-November";
      this.Duration = "120-150 days";
      this.Soil = "Loamy soils";
      this.WaterRequirement = "Medium water requirement";
      this.Irrigation = "Flood irrigation, drip irrigation, sprinkler irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";
      this.Pests = "Aphids, rust, and smut";
    }
  }
}

class Lentils {
  pic = "Resources/crops/lentils.png";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow = "रबी सीजन (सर्दियों का मौसम): अक्टूबर-नवंबर";
      this.Duration = "120-150 दिन";
      this.Soil = "अच्छी जल निकासी वाली बलुई दोमट या चिकनी दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "ड्रिप सिंचाई, फरो सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटाश उर्वरक";
      this.Pests = "एफिड्स, पॉड बोरर्स और वीविल्स";
    } else if (lang == "te") {
      this.BestSeasonToGrow = "రబీ సీజన్ (శీతాకాలం): అక్టోబర్-నవంబర్";
      this.Duration = "120-150 రోజులు";
      this.Soil = "చక్కగా డ్రెయినేజ్ ఉన్న ఇసుకలోమి లేదా మట్టి లోమి నేలలు";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "డ్రిప్ నీటిపారుదల, ఫరో నీటిపారుదల";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం ఎరువులు";
      this.Pests = "ఆఫిడ్స్, పాడ్ బోరర్స్ మరియు వీవిల్స్";
    } else {
      this.BestSeasonToGrow = "Rabi Season (Winter Season): October-November";
      this.Duration = "120-150 days";
      this.Soil = "Well-drained sandy loam or clay loam soils";
      this.WaterRequirement = "Medium water requirement";
      this.Irrigation = "Drip irrigation, furrow irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";
      this.Pests = "Aphids, pod borers, and weevils";
    }
  }
}

class Cotton {
  pic = "Resources/crops/cotton.jpg";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow = "खरीफ सीजन (मानसून का मौसम): जून-जुलाई";
      this.Duration = "150-180 दिन";
      this.Soil = "गहरी, अच्छी जल निकासी वाली बलुई दोमट मिट्टी";
      this.WaterRequirement = "उच्च जल आवश्यकता";
      this.Irrigation = "ड्रिप सिंचाई, फरो सिंचाई";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटाश उर्वरक";
      this.Pests = "गुली कीड़े, एफिड्स, और जस्सिड्स";
    } else if (lang == "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "150-180 రోజులు";
      this.Soil = "లోతైన, బాగా నీరు జరగే ఇసుకలోమి నేలలు";
      this.WaterRequirement = "అధిక నీటి అవసరం";
      this.Irrigation = "డ్రిప్ నీటిపారుదల, ఫరో నీటిపారుదల";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం ఎరువులు";
      this.Pests = "బోల్ వర్మ్, ఆఫిడ్స్, మరియు జాస్సిడ్స్";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "150-180 days";
      this.Soil = "Deep, well-drained sandy loam soils";
      this.WaterRequirement = "High water requirement";
      this.Irrigation = "Drip irrigation, furrow irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";
      this.Pests = "Bollworms, aphids, and jassids";
    }
  }
}

class Maize {
  pic = "Resources/crops/maize.png";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow = "खरीफ सीजन (मानसून का मौसम): जून-जुलाई";
      this.Duration = "90-120 दिन";
      this.Soil = "दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "बाढ़ सिंचाई, ड्रिप सिंचाई, स्प्रिंकलर सिंचाई";
      this.Temperature = "20-30°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटाश उर्वरक";
      this.Pests = "तना कीड़े, पत्ती कूदने वाले और फौजी कीड़े";
    } else if (lang == "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "90-120 రోజులు";
      this.Soil = "లోమి మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "వెళ్లిపోయే నీటి ముంపు, డ్రిప్ నీటిపారుదల, స్ప్రింక్లర్ నీటిపారుదల";
      this.Temperature = "20-30°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం ఎరువులు";
      this.Pests = "స్టెమ్ బోరర్స్, లీఫ్ హాపర్స్ మరియు ఆర్మీ వర్మ్స్";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "90-120 days";
      this.Soil = "Loamy soils";
      this.WaterRequirement = "Medium water requirement";
      this.Irrigation = "Flood irrigation, drip irrigation, sprinkler irrigation";
      this.Temperature = "20-30°C";
      this.Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";
      this.Pests = "Stem borers, leafhoppers, and armyworms";
    }
  }
}
class SugarCane {
  pic = "Resources/crops/sugarcane.png";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow =
        "पूरे वर्ष, लेकिन मुख्य रूप से खरीफ और रबी सीजन में";
      this.Duration = "12-18 महीने";
      this.Soil = "उपजाऊ चिकनी दोमट मिट्टी";
      this.WaterRequirement = "उच्च जल आवश्यकता";
      this.Irrigation = "नहर सिंचाई, ड्रिप सिंचाई, स्प्रिंकलर सिंचाई";
      this.Temperature = "20-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटाश उर्वरक";
      this.Pests = "तना कीड़े, एफिड्स और स्केल कीड़े";
    } else if (lang == "te") {
      this.BestSeasonToGrow = "సంవత్సరం పొడవునా, కానీ ముఖ్యంగా ఖరీఫ్ మరియు రబీ సీజన్లలో";
      this.Duration = "12-18 నెలలు";
      this.Soil = "సారవంతమైన మట్టి లోమి నేలలు";
      this.WaterRequirement = "అధిక నీటి అవసరం";
      this.Irrigation = "కాలువ నీటిపారుదల, డ్రిప్ నీటిపారుదల, స్ప్రింక్లర్ నీటిపారుదల";
      this.Temperature = "20-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం ఎరువులు";
      this.Pests = "బోరర్స్, ఆఫిడ్స్ మరియు స్కేల్ ఇన్సెక్ట్స్";
    } else {
      this.BestSeasonToGrow =
        "Throughout the year, but mainly in the Kharif and Rabi seasons";
      this.Duration = "12-18 months";
      this.Soil = "Fertile clay loam soils";
      this.WaterRequirement = "High water requirement";
      this.Irrigation = "Canal irrigation, drip irrigation, sprinkler irrigation";
      this.Temperature = "20-35°C";
      this.Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";
      this.Pests = "Borers, aphids, and scale insects";
    }
  }
}


class Soybeans {
  pic = "Resources/crops/soyabean.jpg";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow = "खरीफ सीजन (मानसून का मौसम): जून-जुलाई";
      this.Duration = "120-150 दिन";
      this.Soil = "दोमट मिट्टी";
      this.WaterRequirement = "मध्यम जल आवश्यकता";
      this.Irrigation = "बाढ़ सिंचाई, ड्रिप सिंचाई, स्प्रिंकलर सिंचाई";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटाश उर्वरक";
      this.Pests = "पॉड बोरर्स, कैटरपिलर्स और एफिड्स";
    } else if (lang == "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "120-150 రోజులు";
      this.Soil = "లోమి మట్టి";
      this.WaterRequirement = "మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "వెళ్లిపోయే నీటి ముంపు, డ్రిప్ నీటిపారుదల, స్ప్రింక్లర్ నీటిపారుదల";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం ఎరువులు";
      this.Pests = "పాడ్ బోరర్స్, క్రిములు మరియు ఆఫిడ్స్";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "120-150 days";
      this.Soil = "Loamy soils";
      this.WaterRequirement = "Medium water requirement";
      this.Irrigation = "Flood irrigation, drip irrigation, sprinkler irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";
      this.Pests = "Pod borers, caterpillars, and aphids";
    }
  }
}


class Groundnuts {
  pic = "Resources/crops/peanuts.jpg";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow = "खरीफ सीजन (मानसून का मौसम): जून-जुलाई";
      this.Duration = "90-120 दिन";
      this.Soil = "बलुई दोमट या चिकनी दोमट मिट्टी";
      this.WaterRequirement = "कम से मध्यम जल आवश्यकता";
      this.Irrigation = "ड्रिप सिंचाई, फरो सिंचाई";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटाश उर्वरक";
      this.Pests = "एफिड्स, दीमक और पत्ती कूदने वाले";
    } else if (lang == "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "90-120 రోజులు";
      this.Soil = "ఇసుక లోమి లేదా మట్టి లోమి నేలలు";
      this.WaterRequirement = "తక్కువ నుండి మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "డ్రిప్ నీటిపారుదల, ఫరో నీటిపారుదల";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం ఎరువులు";
      this.Pests = "ఆఫిడ్స్, పుట్టలు మరియు ఆకు జంపర్లు";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "90-120 days";
      this.Soil = "Sandy loam or clay loam soils";
      this.WaterRequirement = "Low to medium water requirement";
      this.Irrigation = "Drip irrigation, furrow irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";
      this.Pests = "Aphids, termites, and leafhoppers";
    }
  }
}

class Millets {
  pic = "Resources/crops/millet.jpg";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow = "खरीफ सीजन (मानसून का मौसम): जून-जुलाई";
      this.Duration = "60-90 दिन";
      this.Soil = "बलुई दोमट या चिकनी दोमट मिट्टी";
      this.WaterRequirement = "कम से मध्यम जल आवश्यकता";
      this.Irrigation = "बाढ़ सिंचाई, ड्रिप सिंचाई, स्प्रिंकलर सिंचाई";
      this.Temperature = "25-35°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटाश उर्वरक";
      this.Pests = "तना कीड़े, पत्ती कूदने वाले और फौजी कीड़े";
    } else if (lang == "te") {
      this.BestSeasonToGrow = "ఖరీఫ్ సీజన్ (మన్సూన్ సీజన్): జూన్-జూలై";
      this.Duration = "60-90 రోజులు";
      this.Soil = "ఇసుకలోమి లేదా మట్టిలోమి నేలలు";
      this.WaterRequirement = "తక్కువ నుండి మధ్యస్థ నీటి అవసరం";
      this.Irrigation = "ముంపు నీటిపారుదల, డ్రిప్ నీటిపారుదల, స్ప్రింక్లర్ నీటిపారుదల";
      this.Temperature = "25-35°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం ఎరువులు";
      this.Pests = "స్టెమ్ బోరర్స్, లీఫ్ హాపర్స్ మరియు ఆర్మీ వర్మ్స్";
    } else {
      this.BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
      this.Duration = "60-90 days";
      this.Soil = "Sandy loam or clay loam soils";
      this.WaterRequirement = "Low to medium water requirement";
      this.Irrigation = "Flood irrigation, drip irrigation, sprinkler irrigation";
      this.Temperature = "25-35°C";
      this.Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";
      this.Pests = "Stem borers, leafhoppers, and armyworms";
    }
  }
}

class Coffee {
  pic = "Resources/crops/coffee.jpg";
  constructor(lang) {
    if (lang == "hi") {
      this.BestSeasonToGrow = "पूरे वर्ष, वर्षा ऋतु में रोपण";
      this.Duration = "5-7 वर्ष व्यावसायिक उत्पादन शुरू होने तक";
      this.Soil = "अच्छी जल निकासी वाली, अम्लीय मिट्टी जिसमें उच्च जैविक पदार्थ हो";
      this.WaterRequirement = "सूखे मौसम में विशेष रूप से उच्च जल आवश्यकता";
      this.Irrigation = "ड्रिप सिंचाई, स्प्रिंकलर सिंचाई";
      this.Temperature = "15-25°C";
      this.Fertilizers = "नाइट्रोजन, फास्फोरस और पोटाश उर्वरक";
      this.Pests = "कॉफी बेरी बोरर्स, पत्ती के माइनर्स और थ्रिप्स";
    } else if (lang == "te") {
      this.BestSeasonToGrow = "సంవత్సరం పొడవునా, వర్షాకాలంలో నాటడం";
      this.Duration = "5-7 సంవత్సరాలు వాణిజ్య ఉత్పత్తి ప్రారంభం వరకు";
      this.Soil = "బాగా డ్రైనేజ్ అయ్యే, ఆమ్లపు నేలలు అధిక సేంద్రియ పదార్థాలతో";
      this.WaterRequirement = "ఎండపూట ఎక్కువ నీటి అవసరం";
      this.Irrigation = "డ్రిప్ నీటిపారుదల, స్ప్రింక్లర్ నీటిపారుదల";
      this.Temperature = "15-25°C";
      this.Fertilizers = "నైట్రోజన్, ఫాస్ఫరస్ మరియు పొటాషియం ఎరువులు";
      this.Pests = "కాఫీ బెర్రీ బోరర్స్, ఆకు మైనర్లు మరియు త్రిప్స్";
    } else {
      this.BestSeasonToGrow =
        "Throughout the year, with planting done during the rainy season";
      this.Duration = "5-7 years before trees start producing commercially";
      this.Soil =
        "Well-drained, acidic soils with high organic matter content";
      this.WaterRequirement =
        "High water requirement, especially during dry periods";
      this.Irrigation = "Drip irrigation, sprinkler irrigation";
      this.Temperature = "15-25°C";
      this.Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";
      this.Pests = "Coffee berry borers, leaf miners, and thrips";
    }
  }
}


function searchCrops() {
  var inputbox = document.getElementById("cropinputbox").value.toLowerCase();
  const cropImageElement = document.getElementById("cropImage");
  inputbox = inputbox.charAt(0).toUpperCase() + inputbox.slice(1);
  const nameElement = document.getElementById("cropname");
  const tempElement = document.getElementById("Temp");
  const seasonElement = document.getElementById("season");
  const durationElement = document.getElementById("Duration");
  const soilElement = document.getElementById("Soil");
  const waterElement = document.getElementById("Water");
  const irrigationElement = document.getElementById("Irrigation");
  const fertilizersElement = document.getElementById("Fertilizers");
  const pestsElement = document.getElementById("Pests");
  const image = document.getElementById("imgArea");
  const textarea = document.getElementById("detailsArea");
  const inputBox = document.getElementById("cropinputbox").value.trim();
  const formattedInput =
    inputBox.charAt(0).toUpperCase() + inputBox.slice(1).toLowerCase();
  const lang = localStorage.getItem("selectedLanguage");
  let cropData = null;
  switch (formattedInput) {
    case "Rice":
      cropData = new Rice(lang);
      break;
    case "Wheat":
      cropData = new Wheat(lang);
      break;
    case "Lentils":
    case "Lentil":
      cropData = new Lentils(lang);
      break;
    case "Cotton":
      cropData = new Cotton(lang);
      break;
    case "Maize":
      cropData = new Maize(lang);
      break;
    case "SugarCane":
    case "Sugarcane":
      cropData = new SugarCane(lang);
      break;
    case "Soybeans":
    case "Soybean":
      cropData = new Soybeans(lang);
      break;
    case "Groundnuts":
    case "Groundnut":
      cropData = new Groundnuts(lang);
      break;
    case "Millets":
    case "Millet":
      cropData = new Millets(lang);
      break;
    case "Coffee":
      cropData = new Coffee(lang);
      break;
    default:
      alert("Sorry, we have no data for the crop: " + formattedInput);
      return;
  }
  // Update the UI with crop details
  if (cropData) {
    textarea.style.visibility = "visible";
    nameElement.textContent = formattedInput;
    tempElement.textContent = cropData.Temperature;
    cropImageElement.src = cropData.pic;
    seasonElement.textContent = cropData.BestSeasonToGrow;
    durationElement.textContent = cropData.Duration;
    soilElement.textContent = cropData.Soil;
    waterElement.textContent = cropData.WaterRequirements;
    irrigationElement.textContent = cropData.Irrigation;
    fertilizersElement.textContent = cropData.Fertilizers;
    pestsElement.textContent = cropData.Pests;
  }
}
