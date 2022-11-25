exports.FetchHandler = () => {
  fetch("http://localhost:3300/api/v1/cars")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const transformedCars = data.cars.map((carData) => {
        return {
          id: carData.id,
          price: carData.price,
          model: carData.model,
          brand: carData.brand,
          year: carData.year,
          location: carData.location,
          availability: carData.availability,
          type: carData.type,
          fuel: carData.fuel,
          gear: carData.gear,
          km_limit: carData.km_limit,
          extras: carData.extras,
          price_per_km_after_limit: carData.price_per_km_after_limit,
          owner: carData.owner,
        };
      });
      return transformedCars;
    });
};
