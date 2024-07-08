const cron = require('cron');
const https = require('https');

const backendUrl = 'https://basic-api-m576.onrender.com';

const job = new cron.CronJob('*/14 * * * *', function() {
    console.log('Pinging server to keep it alive...');
    https.get(backendUrl, (res) => {
        if (res.statusCode === 200) {
            console.log('Server is alive and responding.');
        } else {
            console.error(`Failed to ping server. Status code: ${res.statusCode}`);
        }
    }).on('error', (err) => {
        console.error('Error during ping:', err.message);
    });
});

job.start(); // Ensure the job is started

module.exports = {
    job,
};
