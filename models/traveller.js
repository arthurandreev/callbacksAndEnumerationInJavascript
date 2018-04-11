const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {

  let startLocations = [];
  this.journeys.map((x) => {
    startLocations.push(x.startLocation);
  });
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {

  let endLocations = [];
  this.journeys.map((x) => {
    endLocations.push(x.endLocation);
  });
  return endLocations;
};

Traveller.prototype.getModesOfTransport = function () {

  let modeOfTransports = [];
  this.journeys.map((x) => {
    modeOfTransports.push(x.transport);
  });
  return modeOfTransports;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let journeys = this.journeys.filter((x) => x.transport === transport);
  return journeys;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let journeys = this.journeys.filter((x) => x.distance > minDistance);
  return journeys;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let total = this.journeys.reduce((runningTotal, x) => {
     return runningTotal + x.distance;
}, 0);

  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let uniqueModesOfTransport = [];
  this.journeys.map((x) => {
    if (!uniqueModesOfTransport.includes(x.transport)) {
      uniqueModesOfTransport.push(x.transport);
    }
  });
  return uniqueModesOfTransport;
};


module.exports = Traveller;
