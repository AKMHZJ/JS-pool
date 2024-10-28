const dogYears = (PlanetName, DogAge) => {

    const opes = 31557600;

    let planetyear = 1;
    switch (PlanetName) {
        case "earth":
            planetyear = (1*31557600);
            break;
        case "mercury":
            planetyear = (0.2408467*31557600);
            break;
        case  "venus":
            planetyear = (0.61519726*31557600);
            break;
        case "mars":
            planetyear = (1.8808158*31557600);
            break;
        case "jupiter":
            planetyear = (11.862615*31557600);
            break;
        case "saturn":
            planetyear = (29.447498*31557600);
            break;
        case "uranus":
            planetyear = (84.016846*31557600);
            break;
        case "neptune":
            planetyear = (164.79132*31557600);
            break;
    }

    const palnetdogyear = (DogAge*7)/planetyear;

    return parseFloat(palnetdogyear.toFixed(2));
};
