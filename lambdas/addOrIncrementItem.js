const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

const ThumbsDownTableName = 'ThumbsDown';

exports.handler = (event, context, callback) => {
    var getItemParams = {
        TableName: ThumbsDownTableName,
        Key: {
            'licensePlate': { S: event.licensePlate },
            'state': { S: event.state }
        },
    };
    dynamodb.getItem(getItemParams, function (err, data) {
        if (err) {
            console.log("Error on GetItem from DB", err);
        } else {
            console.log("Found existing license plate in DB", data.Item);

            if (data.Item === undefined) {
                addNewLicensePlateToDatabase(event, callback);

            } else {
                IncrementThumbsDownCountByOne(event, data);
            }
        }
    });
};

function IncrementThumbsDownCountByOne(event, data) {
    var params = {
        TableName: ThumbsDownTableName,
        Key: {
            'licensePlate': { S: event.licensePlate },
            'state': { S: event.state }
        },
        ExpressionAttributeValues: { ":inc": {N: "1"} },
        UpdateExpression: "ADD thumbsDownCount :inc"
    };

    dynamodb.updateItem(params, function (err, data) {
        if (err) {
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
        }
    });
}

function addNewLicensePlateToDatabase(event, callback) {
    dynamodb.putItem({
        TableName: ThumbsDownTableName,
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
            });
        }
    });
}
