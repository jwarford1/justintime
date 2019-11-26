'use strict'
const pact = require('@pact-foundation/pact-node')
//require('./testProductsService')
const opts = {
providerBaseUrl: 'https://jsonplaceholder.typicode.com', // where your service will be running during the test, either staging or localhost on CIs
pactUrls: ['http://138.197.140.165/pacts/provider/p1/consumer/c1/latest'], // the pacts to test against
publishVerificationResult: true,
providerVersion: '1.0.0'
}
pact.verifyPacts(opts).then(() => {
console.log('success')
process.exit(0)
}).catch((error) => {
console.log('failed', error)
process.exit(1)
})