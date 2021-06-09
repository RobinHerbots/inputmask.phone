#!/usr/bin/env node

const load_PhoneNumberMetadata = require("../metadata/load_PhoneNumberMetadata");


load_PhoneNumberMetadata().then(result => {
    var territories = result.phoneNumberMetadata.territories["0"].territory;
    for (var territoryNdx in territories) {
        if (territories.hasOwnProperty(territoryNdx)) {
            var territory = territories[territoryNdx];

            if (territory.$.id === "BE") {
                console.log(territory.$.id + ":" + territory.$.countryCode);
                if (territory.availableFormats) {
                    territory.availableFormats[0].numberFormat.forEach((format) =>
                        console.table(format));
                }
            }
        }
    }
});