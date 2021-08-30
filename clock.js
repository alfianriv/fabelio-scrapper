const axios = require('axios');

var runner = async function() {
  console.log("sync data")
  await axios.get('https://fabelio-app-dashboard.herokuapp.com/api/auto_sync')
}

var CronJob = require('cron').CronJob;
new CronJob({
  cronTime: "0 0 */1 * * *",
  onTick: runner,
  start: true,
  timeZone: "America/Los_Angeles"
});