const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "batch-kun"
global.ownerName = "batch-kun"
global.botNumber = "6285842562537"
global.devNumber = ["6285842562537"]

global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = false // auto read messages
global.Type_Menu = "v2" // TypeMenu v1:IMAGE v2:TEXT V3:TEXT+QSTATUS

global.domain = "batch-kun.co.id" // Ganti Domain Lu
global.key_plta = "-" // Isi Apikey Plta Lu
global.key_pltc = "-" // Isi Apikey Pltc Lu
global.nama_host = "batch-kun" // Ganti Nama Store Atau nama Host Lu

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})