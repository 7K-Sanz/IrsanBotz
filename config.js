//=============『 Utama 』================== //
global.owner = ['+62 877 4821 05655'] 
global.mods = [] 
global.prems = [] 

//=============『 Info Owner 』============== //
global.nameowner = '7K Sanz あ⁩⁩'
global.numberowner = '+62 877 4821 05655'
global.instagram = '-'
global.github = 'https://github.com/7K-Sanz'
global.dana = '0895600740052'
global.pulsa = '087748210565'
global.gopay = '0895600740052'

//=============『 Info Bot 』=================//
global.namebot = 'Vanzbot-Md ✗'
global.gc = 'https://chat.whatsapp.com/HUTpnP78RmJI6zpGXi9Off'
global.web = 'https://github.com/7K-Sanz' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.price1 = '1minggu = 5k\n 1bulan = 15k\n permanen = buat bot sendiri aj\nNote:\nVanzbot-MD ✗'

//=======『 Tampilan Dan Lainnya 』============//
global.fotonya1 = 'https://telegra.ph/file/ef4b4564ef9dc4143f949.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/ef4b4564ef9dc4143f949.jpg' //ini juga ganti 
global.lolkey = 'Sad-Bot' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = 'Vanzbot-MD'
global.watermark = wm
global.wm2 = '                     「 Vanzbot-MD ✗ 」'
global.wm3 = '⫹⫺ Vanzbot-MD'
global.htki = '––––––『' 
global.htka = '』––––––'
global.media = 'https://telegra.ph/file/ef4b4564ef9dc4143f949.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wait = '_*Sabar kek Kon*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = 'Sabar Mek Lagi Dibuat\n Oke Sudah Jadi Tol🤗🤗'
global.packname = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nDone\nSticker\Untuk\Mu'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nDone\nBanh\Jangan\DiKecewakanDia:)'

//=============『 Apikey 』================== //
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'irsantod',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Sad-Bot',
}

//=============『 RPG GAMES 』================== //
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//===========『 Jangan Di Ubah 』================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
