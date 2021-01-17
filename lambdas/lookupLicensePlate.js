const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

exports.handler = (event, context, callback) => {
    var getParams = {
        TableName: 'ThumbsDown',
        Key: {
            'licensePlate': { S: event.licensePlate },
            'state': { S: event.state }
        },
    };
    dynamodb.getItem(getParams, function (err, data) {
        if (err) {
            console.log("Error on GetItem from DB", err);
            callback(null, {
                statusCode: '404',
                licensePlate: event.licensePlate,
                state: event.state,
            });
        } else {
            console.log("Success", data.Item);
            callback(null, {
                statusCode: '200',
                licensePlate: event.licensePlate,
                state: event.state,
                thumbsDownCount: data.Item['thumbsDownCount']['N']
            });
        }
    });
};
