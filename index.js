const sdk = require('node-appwrite')
var datetime = require('node-datetime')

// import  client  from './database'
const express = require('express')
const DateTime = require('node-datetime/src/datetime')

const app = express()
const client = new sdk.Client()

const databases = new sdk.Databases(client)

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64023703cc24b8ba7614')
    .setKey(
        'b7e44434ddcd0f57c76ee6f3026ffc1eaaebce0a32c595a00d007042c7ba46a2c669e6fff59a8502a0ad92e475f6bcae94ccf286a4e9a996373b1444e05e5d480add6ef76bc77b9857d5406eb5797831c6eb0d7ecf3195aec12f599ba666c433a8b314c45b76631c5e1384d65f55df823095e3b7c432c4f304c0935a799dbd7e'
    ) // Your secret API key

const data = {
    type: 'edass',
    timestamp: 'asa',
    data: 'dsssa',
}
const createcollection = async () => {
    const promise = await databases
        .createDocument('6402379b26b88803578e', 'wadukek', 'unique()', {
            "username":"x",
            "password":"adssasasa",
            
        })
        .then(
            function (response) {
                console.log(response)
            },
            function (error) {
                console.log(error)
            }
        )
        console.log(promise)
}

createcollection()

app.addListener(2000, () => {
    console.log('listeining on port 20000')
})
