const aws = require('aws-sdk')

aws.Service.prototype.publisher = {
  eventHandler: function(event) {
    console.log(event)
  }
}

const dynamodb = new aws.DynamoDB({
  clientSideMonitoring: true,
  endpoint: 'http://localhost:8000',
  region: 'us-west-1',
  apiVersion: '2012-08-10'
})

const docClient = new aws.DynamoDB.DocumentClient({
  service: dynamodb
})

const main = async () => {
  const params = {
    TableName: 'test',
    Key: {
      id: 'foo'
    }
  }

  const res = await docClient.get(params).promise()

  console.log(res)
}

main()
