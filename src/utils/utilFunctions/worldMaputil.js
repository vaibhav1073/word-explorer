export const findExtremePoints = (data) => {
  if (!data) {
    // console.log("data nahi hai bhai")
    return null;
  }
  const { countryCodeArr, countryData } = data;
  let maxiPopDen = -Infinity,
    miniPopDen = Infinity,
    set = new Set();

  countryCodeArr.forEach((country) => {
    const popDen =
      countryData[country].population / Math.abs(countryData[country].area);
    // console.log(Math.abs(countryData[country].area))
    maxiPopDen = Math.max(maxiPopDen, popDen);
    miniPopDen = Math.min(miniPopDen, popDen);

    set.add(countryData[country].continents[0]);
  });

  return [miniPopDen, maxiPopDen, [...set]];
};

export const colorScale = (continent) => {
  switch (continent) {
    case "Africa":
      return "#FF5233"; // Red color for Africa
    case "Europe":
      return "#0476C1"; // Blue color for Europe
    case "Asia":
      return "#FFD700"; // Gold color for Asia
    case "North America":
      return "#228B22"; // Green color for North America
    case "South America":
      return "#800080"; // Purple color for South America
    case "Oceania":
      return "#FFA500"; // Orange color for Australia
    default:
      return "#F5F4F6"; // Default color for other continents
  }
};

export const colorScalePopDensity = (population, area, min, max) => {
  const density = population / area;
  const score = (density - min) / (max - min);

  if (!score) {
    return "#FFEBF2";
  } else {
    // console.log(score)
    if (score > 0.0075) return "#CB4154";
    else if (score > 0.005) return "#FF7985";
    else if (score > 0.0025) return "#FFB1BA";
    else return "#FFEBF2";
  }
};
export const findMode = (value) => {
  switch (value) {
    case 1:
      return "Population_Density";
    case 2:
      return "GDP_Per_Capita";
    default:
      return "Continents";
  }
};

export const mapStyle = {
  fillColor: "white",
  weight: 1,
  color: "black",
  fillOpacity: 1,
};
