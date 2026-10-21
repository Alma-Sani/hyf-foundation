const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTravelTime(travelInformation) {
  const travelTime =
    travelInformation.destinationDistance / travelInformation.speed;

  const hours = Math.floor(travelTime);
  const minutes = Math.floor((travelTime - hours) * 60);

  return hours + " hours and " + minutes + " minutes";
}

const travelTime = calculateTravelTime(travelInformation);

console.log(travelTime);
