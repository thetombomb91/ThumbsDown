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
        } else {
            console.log("Success", data.Item);

            if (data.Item === undefined) {
                addNewLicensePlateToDatabase(event, callback);

            } else {
                IncrementThumbsDownCountByOne(event, data.Item['thumbsDownCount']['N'], callback);
            }
        }
    });
};

function IncrementThumbsDownCountByOne(event, thumbsDownCount, callback) {
    var params = {
        TableName: 'ThumbsDown',
        Key: {
            'licensePlate': { S: event.licensePlate },
            'state': { S: event.state }
        },
        ExpressionAttributeValues: { ":inc": { N: "1" } },
        UpdateExpression: "ADD thumbsDownCount :inc"
    };

    console.log("Updating the item...", thumbsDownCount);
    dynamodb.updateItem(params, function (err, data) {
        if (err) {
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("UpdateItem succeeded:", JSON.stringify(thumbsDownCount, null, 2));
            callback(null, {
                statusCode: '200',
                licensePlate: event.licensePlate,
                state: event.state,
                thumbsDownCount: +thumbsDownCount + 1
            });
        }
    });
}

function addNewLicensePlateToDatabase(event, callback) {
    dynamodb.putItem({
        TableName: 'ThumbsDown',
        Item: {
            'licensePlate': { S: event.licensePlate },
            'state': { S: event.state },
            'thumbsDownCount': { N: '1' }
        }
    }, function (err, data) {
        if (err) {
            console.log(err, err.stack);
            callback(null, {
                statusCode: '500',
                body: err
            });
        } else {
            callback(null, {
                statusCode: '200',
                licensePlate: event.licensePlate,
                state: event.state,
                thumbsDownCount: 1
            });
        }
    });
}
