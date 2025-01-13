class Rice {
  pic = "Resources/crops/rice.png";
  BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
  Duration = "100-150 days";
  Soil = "Clayey loam or silty loam soils";
  WaterRequirements =
    "High water requirement throughout the growing season.Continuous flooding is necessary for most of the growth period";
  Irrigation = "Flood irrigation";
  Temperature = "25-35°C";
  Fertilizers =
    "Balanced application of nitrogen, phosphorus, and potassium is crucial.";
  Pests = "Pests: Stem borers, leaf hoppers, armyworms, grubs.";
  Infections = "Diseases: Blast, leaf smut, sheath blight, bacterial blight.";
}

class Wheat {
  pic = "Resources/crops/wheat.png";
  BestSeasonToGrow = "Rabi Season (Winter Season): October-November";
  Duration = "120-150 days";
  Soil = "Loamy soils ";
  WaterRequirements = " Medium water requirement";
  Irrigation = "Flood irrigation, drip irrigation, sprinkler irrigation";
  Temperature = " 15-25°C";
  Fertilizers = " Nitrogen, phosphorus, and potassium fertilizers";

  Pests = "aphids, rust, and smut";
  Infections = " Aphids, rust, smut, stem borers";
}

class Lentils {
  pic = "Resources/crops/lentils.png";
  BestSeasonToGrow = " Rabi Season (Winter Season): October-November";
  Duration = "120-150 days";
  Soil = "Well-drained sandy loam or clay loam soils";
  WaterRequirements = "Medium water requirement";
  Irrigation = " Drip irrigation, furrow irrigation";
  Temperature = "15-25°C";
  Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";

  Pests = "aphids, pod borers, and weevils";
  Infections = "rust, blight";
}

class Cotton {
  pic = "Resources/crops/cotton.jpg";
  BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
  Duration = "150-180 days";
  Soil = "Deep, well-drained sandy loam soils";
  WaterRequirements = "High water requirement";
  Irrigation = "Drip irrigation, furrow irrigation";
  Temperature = "25-35°C";
  Fertilizers = " Nitrogen, phosphorus, and potassium fertilizers";

  Pests = "bollworms, aphids, and jassids";
  Infections = "Bollworms, aphids, jassids, leafhoppers";
}

class Maize {
  pic = "Resources/crops/maize.png";
  BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
  Duration = "90-120 days";
  Soil = " loamy soils";
  WaterRequirements = " Medium water requirement";
  Irrigation = "Flood irrigation, drip irrigation, sprinkler irrigation";
  Temperature = "20-30°C";
  Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";

  Pests = "stem borers, leafhoppers, and armyworms";
  Infections = " fungal diseases";
}

class SugarCane {
  pic = "Resources/crops/sugarcane.png";
  BestSeasonToGrow =
    " Throughout the year, but mainly in the Kharif and Rabi seasons";
  Duration = "12-18 months";
  Soil = " fertile clay loam soils";
  WaterRequirements = "High water requirement";
  Irrigation = " Canal irrigation, drip irrigation, sprinkler irrigation";
  Temperature = "20-35°C";
  Fertilizers = " Nitrogen, phosphorus, and potassium fertilizers";

  Pests = "borers, aphids, and scale insects";
  Infections = " fungal diseases";
}

class Soybeans {
  pic = "Resources/crops/soyabean.jpg";
  BestSeasonToGrow = " Kharif Season (Monsoon Season): June-July";
  Duration = "120-150 days";
  Soil = "loamy soils";
  WaterRequirements = " Medium water requirement";
  Irrigation = "Flood irrigation, drip irrigation, sprinkler irrigation";
  Temperature = "25-35°C";
  Fertilizers = "Nitrogen, phosphorus, and potassium fertilizers";

  Pests = "pod borers, caterpillars, and aphids";
  Infections = " rust, bacterial blight";
}

class Groundnuts {
  pic = "Resources/crops/peanuts.jpg";
  BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
  Duration = "90-120 days";
  Soil = "sandy loam or clay loam soils";
  WaterRequirements = " Low to medium water requirement";
  Irrigation = " Drip irrigation, furrow irrigation";
  Temperature = "25-35°C";
  Fertilizers = " Nitrogen, phosphorus, and potassium fertilizers";

  Pests = " aphids, termites, and leafhoppers";
  Infections = "rust, fungal diseases";
}

class Millets {
  pic = "Resources/crops/millet.jpg";
  BestSeasonToGrow = "Kharif Season (Monsoon Season): June-July";
  Duration = "60-90 days";
  Soil = " sandy loam or clay loam soils";
  WaterRequirements = "Low to medium water requirement";
  Irrigation = "Flood irrigation, drip irrigation, sprinkler irrigation";
  Temperature = "25-35°C";
  Fertilizers = " Nitrogen, phosphorus, and potassium fertilizers";

  Pests = "stem borers, leafhoppers, and armyworms";
  Infections = "fungal diseases";
}

class Coffee {
  pic = "Resources/crops/coffee.jpg";
  BestSeasonToGrow =
    "Throughout the year, with planting done during the rainy season";
  Duration = "5-7 years before trees start producing commercially";
  Soil = "Well-drained, acidic soils with high organic matter content";
  WaterRequirements = "High water requirement, especially during dry periods";
  Irrigation = " Drip irrigation, sprinkler irrigation";
  Temperature = " 15-25°C";
  Fertilizers = " Nitrogen, phosphorus, and potassium fertilizers";

  Pests = "coffee berry borers, leaf miners, and thrips";
  Infections = " fungal diseases";
}



function searchCrops(){
  var inputbox=document.getElementById("cropinputbox").value.toLowerCase();
  const cropImageElement = document.getElementById("cropImage");
  inputbox=inputbox.charAt(0).toUpperCase() + inputbox.slice(1);
  const nameElement=document.getElementById("cropname");
  const tempElement = document.getElementById("Temp");
  const seasonElement = document.getElementById("season");
  const durationElement = document.getElementById("Duration");
  const soilElement = document.getElementById("Soil");
  const waterElement = document.getElementById("Water");
  const irrigationElement = document.getElementById("Irrigation");
  const fertilizersElement = document.getElementById("Fertilizers");
  const pestsElement = document.getElementById("Pests");
  const image=document.getElementById("imgArea");
  const textarea=document.getElementById("detailsArea");
  const inputBox = document.getElementById("cropinputbox").value.trim();
  const formattedInput =inputBox.charAt(0).toUpperCase() + inputBox.slice(1).toLowerCase();
  let cropData = null;
  switch (formattedInput) {
      case "Rice":
        cropData = new Rice();
        break;
      case "Wheat":
        cropData = new Wheat();
        break;
      case "Lentils":
      case "Lentil":
        cropData=new Lentils();
        break
      case "Cotton":
        cropData=new Cotton();
        break
      case "Maize":
        cropData=new Maize();
          break
      case "SugarCane":
        case "Sugarcane":
        cropData=new SugarCane();
            break
      case "Soybeans":
        case "Soybean":
        cropData=new Soybeans();
          break
      case "Groundnuts":
        case "Groundnut":
        cropData=new Groundnuts();
          break
      case "Millets":
        case "Millet":
        cropData=new Millets();
        break
      case "Coffee":
        cropData=new Coffee();
        break
      default:
        alert("Sorry, we have no data for the crop: " + formattedInput);
        return;
    }
    // Update the UI with crop details
    if (cropData) {
      textarea.style.visibility="visible";
      nameElement.textContent = formattedInput;
      tempElement.textContent = cropData.Temperature;
      cropImageElement.src=cropData.pic;
      seasonElement.textContent = cropData.BestSeasonToGrow;
      durationElement.textContent = cropData.Duration;
      soilElement.textContent = cropData.Soil;
      waterElement.textContent = cropData.WaterRequirements;
      irrigationElement.textContent = cropData.Irrigation;
      fertilizersElement.textContent = cropData.Fertilizers;
      pestsElement.textContent = cropData.Pests;
    }
  }


