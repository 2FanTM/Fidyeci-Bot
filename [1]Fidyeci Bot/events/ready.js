const moment = require('moment');

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Konsol: Komutlar Sorunsuz Yüklendi`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Konsol: ${client.user.username} Adlı Bot Discord Uygulamasına Giriş Yaptı`);
}