#!/usr/bin/env node

const load_PhoneNumberMetadata = require("../metadata/load_PhoneNumberMetadata");


load_PhoneNumberMetadata().then(result => {
    var territories = result.phoneNumberMetadata.territories["0"].territory;
    for (var territoryNdx in territories) {
        if (territories.hasOwnProperty(territoryNdx)) {
            var territory = territories[territoryNdx];
            console.log(territory.$.id + ":" + territory.$.countryCode);
            if (territory.availableFormats)
                console.log(JSON.stringify(territory.availableFormats));
        }
    }
});