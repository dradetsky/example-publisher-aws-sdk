example: publisher in aws sdk
=============================

shows how to hook into aws-sdk publisher to consume client-side monitoring
events

example results for people too lazy to get example running
----------------------------------------------------------

```
% node index.js
{
  Type: 'ApiCallAttempt',
  Api: 'GetItem',
  Version: 1,
  Service: 'DynamoDB',
  Fqdn: 'localhost',
  UserAgent: 'aws-sdk-nodejs/2.820.0 linux/v15.5.0 promise',
  HttpStatusCode: 200,
  AccessKey: 'AK',
  XAmznRequestId: 'ca2d067b-50ec-4e4d-975e-0f0551765c38',
  Timestamp: 1609616679456,
  AttemptLatency: 23,
  Region: 'us-west-1'
}
{
  Type: 'ApiCall',
  Api: 'GetItem',
  Version: 1,
  Service: 'DynamoDB',
  Region: 'us-west-1',
  MaxRetriesExceeded: 0,
  UserAgent: 'aws-sdk-nodejs/2.820.0 linux/v15.5.0 promise',
  FinalHttpStatusCode: 200,
  AttemptCount: 1,
  Timestamp: 1609616679451,
  Latency: 29
}
```
