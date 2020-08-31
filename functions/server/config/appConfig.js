const appConfig = {
  port: process.env.PORT || 5000,
  hostUrl: process.env.HOST_URL ||`https://us-central1-paytm-integration-a80b8.cloudfunctions.net/api`
  // 'http://localhost'
  
};

const logConfig = {
  level: process.env.LOG_LEVEL || 'debug'
};

var paytmConfig = {
	mid: process.env.PAYTM_MERCH_ID || 'HBmfIk33650987940361',
	key: process.env.PAYTM_MERCH_KEY || 'ow3ky8tP1v#kdsjZ',
  website: process.env.PAYTM_MERCH_WEBSITE || 'WEBSTAGING',
  transactionUrl: process.env.PAYTM_TXN_URL || 'https://securegw-stage.paytm.in/order/process',
  hostName: process.env.PAYTM_HOST || 'securegw-stage.paytm.in'
};

module.exports = {
  appConfig,
  logConfig,
  paytmConfig
}
