#!/usr/bin/env node

const args = process.argv.slice(2);

const {copy} = require('copy-paste');
let shruggie = '¯\\_(ツ)_/¯';

if (args.includes('-c') || args.includes('--code'))
    shruggie = `\`${shruggie}\``;
copy(shruggie);
