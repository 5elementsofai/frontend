/* Amplify Params - DO NOT EDIT
	API_PRODUCTAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_PRODUCTAPI_GRAPHQLAPIIDOUTPUT
	API_PRODUCTAPI_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require('aws-sdk');

const amplify = new AWS.Amplify({
    accessKeyId: 'AKIARYG4X6SXKF4IEXA4',
    secretAccessKey: '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',
    region: 'eu-central-1',
});

exports.handler = async (input) => {
    return amplify.getApp({ appId: input.appId }).promise();    
};
