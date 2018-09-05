#!/usr/bin/env node

const load_PhoneNumberMetadata = require("../metadata/load_PhoneNumberMetadata");



load_PhoneNumberMetadata().then(result => {
    console.log(result);
});