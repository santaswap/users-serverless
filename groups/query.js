'use strict';
const AWS = require('aws-sdk');
const docs = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });
const helper = require('./helper');

module.exports.handler = (event, context, callback) => {
  getGroupItems(event)
    .then(helper.mapGroupItemsToGroup)
    .then(helper.mapGroupToResponse)
    .then( group => helper.sendSuccess(group, callback) )
    .catch( err => helper.sendError(err, context) );
};

let getGroupItems = (event) => {
  console.log('Getting group with event', event);
  // const params = {
  //   TableName: process.env.GROUPS_TABLE,
  //   KeyConditionExpression: 'groupId = :groupId',
  //   ExpressionAttributeValues: { ':groupId': groupId }
  // };
  // console.log('Getting group with params', params);
  // return docs.query(params).promise();
  return Promise.resolve([]);
};