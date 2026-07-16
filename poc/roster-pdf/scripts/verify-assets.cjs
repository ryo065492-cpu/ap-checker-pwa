'use strict';

const path = require('node:path');
const { verifySourceAssets } = require('../src/verify.cjs');

const rootDir = path.resolve(__dirname, '..');
process.stdout.write(`${JSON.stringify(verifySourceAssets(rootDir), null, 2)}\n`);
