const AWS = require('aws-sdk');
require('dotenv').config();

// AWS接続の設定
AWS.config.update({
  region: process.env.region,
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey
});

const s3 = new AWS.S3();

s3.listBuckets({}, (err, data) => {
  if (err) {
    console.error('エラー:', err);
  } else {
    console.log('バケット数', data.Buckets.length)
    console.log('接続成功:', data);
  }
});
