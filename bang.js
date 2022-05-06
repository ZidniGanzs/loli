
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const zee = require('./lib/api-alphabot')
const hxz = require("./lib/hxz");
const { color, bgcolor } = require('./lib/color')
const bad = JSON.parse(fs.readFileSync('./lib/bad.json'))
const _prem = require("./lib/premium");
const { uploadImages } = require('./lib/uploadimage')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { addBanned, unBanned, cekBannedUser } = require("./lib/banned")
const {getDateId, resetLevelingXp, userXp, userLeveling, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addUserId } = require("./lib/user");
const { gethitUser, checkHit, AddHit, isLimit,limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/user");
const { premium, _claim, sewa, user, ban } = require("./database/jsonfile")
const { addAutoClear,autoClearChat,checkAutoClear, checkDataName, createDataId, getDataId, addDataId, removeDataId, checkDataId, checkClaim, getClaim, expiredClaim, addUserClaim, getHit, cmdAdd, expiredCmd } = require("./lib/totalcmd")
const { smsg, formatp, tanggal,calender, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
thumbnail = ('./lib/hisoka.jpg')

//function rpg
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./database/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./database/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./database/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    kurangLimit
   } = require('./database/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./database/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

// Database Rpg
 let _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./database/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./database/user/darah.json'))

// read database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

module.exports = zidni = async (zidni, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await zidni.decodeJid(zidni.user.id)
        const isOwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
        const senderNumber = sender.split("@")[0] 
        const from = mek.key.remoteJid	
	
        // Group
        const groupMetadata = m.isGroup ? await zidni.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const gcounti = global.gcount
		limitCount = global.limitCount
		autoLevel = global.autoLevel    		
		const isPremium = isOwner? true : _prem.checkPremiumUser(sender, premium)
        const gcount = isPremium ? gcounti.prem : gcounti.user
         let timestamp = speed()
         let latensi = speed() - timestamp
         const nama = `Speed ${latensi.toFixed(4)}s`
		const buttonsDefault = [{ urlButton: { displayText: `Whatsapp`, url : `https://wa.me/6281215205433` } },{ quickReplyButton: { displayText: `Pemilik Bot`, id: `owner` } },{ quickReplyButton: { displayText: `Info Bot`, id: `ping` } },]
		const pickRandom = (arr) => {return arr[Math.floor(Math.random() * arr.length)]}
		const randomNomor = (angka) => {
        return Math.floor(Math.random() * angka) + 1}
        	const math = (teks) => {
            return Math.floor(teks)}  
     	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.users[m.sender]
            if (typeof user !== 'object') global.db.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
        } catch (err) {
            console.error(err)
        }
	        function mentions(teks, mems = [], id) {
			if (id == null || id == undefined || id == false) {
			  let res = zidni.sendMessage(from, { text: teks, mentions: mems })
			  return res
			} else {
		      let res = zidni.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
		      return res
 		    }
		}
const { blocked,hitnya } = require("./database/jsonfile");
 const isHit = checkHit(senderNumber, user)
if (!isHit && isCmd ){ 
addUserId(gcount, limitCount, calender, pushname, senderNumber, user)
}
if(command){
AddHit(senderNumber, user)
cmdAdd("run", "1d", hitnya)
}
expiredCmd(hitnya)
const thisHit = `${getHit("run", hitnya)}`
  const userLevel = getLevelingLevel(senderNumber, user)
  const userExp = getLevelingXp(senderNumber, user)
  const userId = getLevelingId(senderNumber, user)
  const amountExp = Math.floor(Math.random() * 10) + 50
  const requiredExp = 1000 * userLevel
  const userPersen = userExp/requiredExp*100
  const userVerified = getDateId(senderNumber, user)
    const isBanned = cekBannedUser(sender, ban)
   try {
if (userLevel === undefined && userId === undefined) {
addUserId(gcount, limitCount, calender, pushname, senderNumber, user)
}

if (autoLevel){
addLevelingXp(senderNumber, amountExp, user)
}
if (autoLevel && userExp >= requiredExp || autoLevel && userExp == requiredExp) {
addLevelingLevel(senderNumber, 1, user)
resetLevelingXp(senderNumber, userExp, user)


anune =`${userLevel}00`
susu = randomNomor(math(anune))
addBalance(senderNumber, susu, user)


//Hadiah Limit
if(userLevel >= 25){
anuitu =`${userLevel}`
 sapi = randomNomor(math(anuitu))
giveLimit(senderNumber, sapi, user)
} else {
sapi = "0"
}


//Hadiah Premium
if(userLevel >= 50){
zidni = randomNomor(24) + "h"
_prem.addPremiumUser (sender, zidni, premium)         
} else {
	zidni = "0"
}

levelnih = userLevel + 1
}
} catch (err) {
console.error(err)
}
	
				   		   if (isCmd) {
				   anune =`${userLevel}00`
susu = randomNomor(math(anune))
addBalance(senderNumber, susu, user)
}
const timezone = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('DD/MM/YY HH:mm:ss z')
		let time = moment.tz("Asia/Jakarta").format("HH:mm:ss")
	if (backup) {
			if (time == "12:00:00") {
				zidni.sendMessage(owner, {
					document: fs.readFileSync(`./z.json`),
					fileName: "z.json",
					mimetype: "application/json"
				})
			}
			if (time == "18:00:00") {
				zidni.sendMessage(owner, {
					document: fs.readFileSync(`./z.json`),
					fileName: "z.json",
					mimetype: "application/json"
				})
			}
			if (time == "00:00:00") {
				zidni.sendMessage(owner, {
					document: fs.readFileSync(`./z.json`),
					fileName: "z.json",
					mimetype: "application/json"
				})
			}
			if (time == "06:00:00") {
				zidni.sendMessage(owner, {
					document: fs.readFileSync(`./z.json`),
					fileName: "z.json",
					mimetype: "application/json"
				})
			}
		}

    // Public & Self
        if (!zidni.public) {
            if (!m.key.fromMe) return
        }
        // Reply
         const reply = (teks) => {
            zidni.sendMessage(m.chat, {text: teks},  { quoted: mek, thumbnail})	
               }
        // Push Message To Console && Auto Read
     	if (!m.isGroup && isCmd ) {
		console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
		}
		if (m.isGroup && isCmd ) {
		console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
		}
		//OTHER
		badword = ["anjing","memek","kontol","bangsat","goblok","tolol","peler","pler","ajg","asw","asu","gblk","mmk","bgst","bngst"]
	    salam = ["assalamualaikum","assalamu'alaikum"]
	    humor = ["wkwkwk","wkwk","haha","awokawok","awok"]
	// AUTO
 	if (!m.key.fromMe && badword.includes(command)) {
			  zidni.sendMessage(from, { audio: {url : `https://d.top4top.io/m_2248jzsk00.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
		}
	if (!m.key.fromMe && salam.includes(command)) {
			  zidni.sendMessage(from, { audio: {url : `https://f.top4top.io/m_22521bnrt0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
		}		
	if (!m.key.fromMe && humor.includes(command)) {
			  zidni.sendMessage(from, { audio: {url : `https://j.top4top.io/m_2252nduc70.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
		}					
if (m.isGroup && m.mtype == 'viewOnceMessage') {
			let teks = `「 *Anti ViewOnce Message* 」
    
    🤠 *Name* : ${pushname}
    👾 *User* : wa.me/${sender.split("@")[0]}
    ⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
        💫 *MessageType* : ${m.mtype}`
			reply(teks)
			await sleep(500)
			m.copyNForward(m.chat, true, {
				readViewOnce: true
			}, {
				quoted: mek
			}).catch(_ => reply('Mungkin dah pernah dibuka bot'))
		}
		let picaks = [flaming]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
	// write database every 1 minute
	setInterval(() => {
            fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
        }, 60 * 1000)

	// reset limit every 12 hours
        let cron = require('./lib/node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
	    if (!m.key.fromMe && !m.isGroup && !/webp/.test(mime) && /image/.test(mime)) {
         let p = await zidni.downloadAndSaveMediaMessage(quoted)         
     	zidni.sendImageAsSticker(m.chat, p, m, { packname: `Auto Sticker\nCreated By`, author: `\nZidniGanz` })
									}      
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: zidni.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, zidni.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        zidni.ev.emit('messages.upsert', msg)
        }		    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.users[m.sender].afkTime > -1) {
            let user = global.db.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
        case 'y':{
        zidni.sendMessage('status@broadcast',{text: `${q}`})
					}
					break
       case 'menu': case 'help': case 'p': case 'test':{
         const { premium, _claim, sewa, user, ban } = require("./database/jsonfile");
         hituser = gethitUser(senderNumber, user)
				// send a list message!
const sections = [
    {
	title: "Menu Options 📒",
	rows: [
	    {title: "Main Menu", rowId: `allmenu`,description: "Display existing bot commands"},
	    {title: "Random Menu", rowId: "random",description: "Display the random menu"}]},
	    {title: "Other Options 🕸️",rows: [
	    {title: "Bantuan", rowId: "owner"},
	    {title: "Sewa", rowId: "sewa"}] },]
const listMessage = {
  text: `${ucapanWaktu} ${pushname}👋`,
  footer: `Limit : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}
Saldo : $${getBalance(senderNumber, user).toLocaleString()}
User Hit : ${hituser}
Total User : ${user.length}
Hit Today : ${thisHit.toLocaleString()}`,
  title: "",
  buttonText: "Chose One",
  sections
}

zidni.sendMessage(from, listMessage,{ quoted: m })
}
break
          case 'allmenu': {
        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
         const { premium, _claim, sewa, user, ban } = require("./database/jsonfile");
         hituser = gethitUser(senderNumber, user)
        nana =`${userExp}/${requiredExp}`
persenya =`${userPersen}`
        zidni.sendMessage(m.chat, { text: `*_Ada Bug? Ketik ${prefix}report Bug mu_*
  ${readmore}
  *( 📍 )  Main Menu*
  ≻ ${prefix}menu
  ≻ ${prefix}owner
  ≻ ${prefix}speed
  ≻ ${prefix}runtime
  
  *( 🏦 ) Payment And Bank*
  ≻ ${prefix}claim
  ≻ ${prefix}buylimit <Jumlah>
  ≻ ${prefix}buyglimit <Jumlah>
  ≻ ${prefix}giftlimit @tag <jumlah>
  ≻ ${prefix}limit
  ≻ ${prefix}balance
  ≻ ${prefix}topbalance
  ≻ ${prefix}leaderboard
  
  *( 🗡️ ) Rpg*
  ≻ ${prefix}berburu
  ≻ ${prefix}menambang
  ≻ ${prefix}mining
  ≻ ${prefix}heal
  ≻ ${prefix}profile
  ≻ ${prefix}inventory
  ≻ ${prefix}leaderboard
  ≻ ${prefix}buy
  ≻ ${prefix}sell
  
  *( 🔰 )  Download Menu*
  ≻ ${prefix}mediafire <LinkMd>
  ≻ ${prefix}pinterest <Option>
  ≻ ${prefix}play <Option>
  ≻ ${prefix}ytmp4 <LinkYt>
  ≻ ${prefix}ytmp3 <LinkYt>
  ≻ ${prefix}tiktok <LinkTt>
  ≻ ${prefix}tiktokaudio <LinkTt>
  ≻ ${prefix}igdl <LinkIg>
  ≻ ${prefix}fbdl <LinkFb>
  ≻ ${prefix}gitclone <LinkGithub>
  
  *( 🏯 )  Anime And Movie*
  ≻ ${prefix}otaku <Options>
  ≻ ${prefix}animeongoing
  ≻ ${prefix}drakorongoing
  
  *( 🛠️ ) Convert And Tools*
  ≻ ${prefix}stiker <ReplyGambar/Caption>
  ≻ ${prefix}toimg <ReplyStiker>
  ≻ ${prefix}tovn <ReplyAudio>
  ≻ ${prefix}tomp4 <ReplyStiker>
  ≻ ${prefix}tomp3 <ReplyVideor>
  ≻ ${prefix}tourl <ReplyFoto>
  ≻ ${prefix}qrcode <TextOrLink>
  > ${prefix}cutly <Link><Nama>
  
  *( 🔊 ) Voice Changer*
  ≻ ${prefix}bass <ReplyAudio>
  ≻ ${prefix}blown <ReplyAudio>
  ≻ ${prefix}nightcore <ReplyAudio>
  ≻ ${prefix}fat <ReplyAudio>
  ≻ ${prefix}fast <ReplyAudio>
  ≻ ${prefix}earrape <ReplyAudio>
  ≻ ${prefix}robot <ReplyAudio>
  ≻ ${prefix}smooth <ReplyAudio>
  ≻ ${prefix}slow <ReplyAudio>
  ≻ ${prefix}reverse <ReplyAudio>
  ≻ ${prefix}tupai <ReplyAudio>
  
  *( 🙏 ) THANKS TO*
  - Allah SWT.
  - Orang Tua Gweh
  - Zidni
  - Dika
  - Arasya
  - Rizfa`, templateButtons: buttonsDefault, footer: '', mentions: [sender]} )
       }
         break
         case 'random':{
				// send a list message!
const sections = [
  {
	title: "Anime Options 🎎",
	rows: [
	    {title: "Waifu", rowId: "waifu"},
	      {title: "Neko", rowId: "neko"},
	    {title: "Loli", rowId: "waifu"},
	    {title: "Megumin", rowId: "megumin"},
	    {title: "Cewe Rubah", rowId: "foxGirl"}
	]
    },
    {
	title: "Wallpaper Options 🖼️",
	rows: [
	{title: "Wallpaper Anime", rowId: `wallpaper`},
	    {title: "Wallpaper Teknologi", rowId: `#teknologi`},
	    {title: "Wallpaper Mountain View", rowId: "mountain"},
	    {title: "Wallpaper Cyber Space", rowId: "cyberspace"},
	    {title: "Wallpaper Programing", rowId: "programming"}
	   	]
    }, 
    {
	title: "Image Random 🤳",
	rows: [
	    {title: "Pp Couple", rowId: "couple"},
	      {title: "Cewe Cantik", rowId: "cecan"},
	    {title: "Foto Kucing", rowId: "meow"},
	     {title: "Foto Avatar", rowId: "avatar"}
	]
    },
    {
	title: "Other Options 📝",
	rows: [
	    {title: "Quotes Anime", rowId: "quotesanime"},
	      {title: "Quotes", rowId: "quotes"},
	    {title: "Fakta Unik", rowId: "fakta"},
	    {title: "Kata Bucin", rowId: "bucin"},
	     {title: "Cerita Pendek", rowId: "cerpen"},
	      {title: "Cerita Horor", rowId: "cerhor"}
	]
    },
]

const listMessage = {
  text: "This is a list random Menu",
  footer: "",
  title: "",
  buttonText: "Chose One",
  sections
}

zidni.sendMessage(from, listMessage)
}
break
case 'cutly': 
  if (args.length < 2) return reply(`Kirim perintah ${command} link`)
  if (!isUrl(args[0])) return reply("Masukan Link")
				var datta = await fetchJson(`https://xteam.xyz/shorturl/customcuttly?url=${args[0]}&nama=${args[1]}&APIKEY=cristian9407`)
			    reply(`Link : ${datta.result.shortLink}`)
				break
case 'foxgirl':{
const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)      
	var buti = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]			
				 	zidni.sendMessage(from, { caption: `${command}`, image: { url: `https://hardianto.xyz/api/anime/random?sfw=foxGirl&apikey=hardianto`}, buttons: buti, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
				 	}
				 	break
        case 'meow': case 'wallpaper': case 'avatar':{
        const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)      
         	var buti = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]			
				 	zidni.sendMessage(from, { caption: `${command}`, image: { url: `https://hardianto.xyz/api/anime/random?sfw=${command}&apikey=hardianto`}, buttons: buti, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
				 	}
				 	break
				case 'teknologi':
				case 'mountain':
				case 'cyberspace':
				case 'programming':{
				const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)      
				reply('wait')
				ank = await fetchJson (`https://yx-api.herokuapp.com/api/wallpaper/${command}`)
						var buti = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]			
				 	zidni.sendMessage(from, { caption: `Wallpaper ${command}`, image: { url: ank.result}, buttons: buti, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })			  
               }
                   break
			case 'megumin':
				 case 'neko':
					case 'waifu':{					
					const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)      
			reply(mess.wait)
						var buta = [{buttonId: `${command}`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]			
		        	zidni.sendMessage(from, { caption: "Wangy Wangi", image: { url: `https://yx-api.herokuapp.com/api/sfw/${command}`}, buttons: buta, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m})			  
                   }
                   		break					
			case 'cecan': case 'cewek':{
				reply(mess.wait)
				const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)      
			    var b = await fetchJson(`https://yx-api.herokuapp.com/api/asupan/hijab`)
			    var bar = b.result
				var but = [{buttonId: `cecan`, buttonText: { displayText: "Get Again Pict" }, type: 1 }]
				zidni.sendMessage(from, { caption: "Random Cewe Cantik", image: { url: bar.url}, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
			}
			    break
			    case 'komik':{
            axios.get('https://komikindo.co/?s=' + q)
	.then(({ data }) => {
            console.log(`${data}`)
            reply(`${data}`)
            })}
            break
            
			  case 'qrcode':
  case 'qr':{
    const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)
                    if (args.length < 2) return reply(`Kirim perintah ${command} Text\nContoh : ${command} Jojo bot`)
    reply(`Membuat Qr Code`)
    zidni.sendMessage(from, {caption: `*QR CODE*`, image: {url: `https://docs-jojo.herokuapp.com/api/qrcode?text=${q}`}}, {quoted: m})
   }
    break
    case 'animeongoing':{
    const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)
          reply("Wait")
            let play = await fetchJson (`https://hardianto.xyz/api/anime/ongoing?apikey=hardianto`)
            let store = '\n'
            for (let i of play){
            store += `\n*「 _Anime Ongoing_ 」*\n
- *Judul* : ${i.nama}
- *Episode* : ${i.episode}
- *Setiap* : ${i.setiap}
- *Tanggal Rilis* : ${i.rilis}
- *Link* : ${i.link}\n`
            }
            reply(store)
            }
            break
            
	case 'otaku':
	try{
	const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)
	reply("Wait kak, kalo ga respon berarti error")
            if(!q) return reply('judul animenya?')
            let anime = await fetchJson (`https://hardianto.xyz/api/anime/otakudesu?title=${q}&apikey=hardianto`)
            let rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
       
           await  zidni.sendMessage(from, {caption: rem, image: {url:anime.img }}, {quoted: m})
        } catch (err){
            	console.log(err)
            	return reply("Ga ketemu om")
            }       
            break
case 'cerpen':{
 const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)
                var data = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)
  var tex = `*[ CERPEN ]*\n\n*Judul* : ${data.result.title}\n*Kategori* : ${data.result.kategori}\n*Cerritanya* : ${data.result.cerpen}`
  zidni.sendMessage(from, {text: tex}, {quoted: m})
}
  break
  case 'cerhor':{
 const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)
                var data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cerita-horor?apikey=dappakntlll`)
  var tex = `*[ CERITA HOROR ]*\n\n*Judul* : ${data.result.title}\n*Ceritanya* : ${data.result.desc}`
  zidni.sendMessage(from, {text: tex}, {quoted: m})
}
break
  case 'drakorongoing':{
    const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)
          reply("Wait")
            let play = await fetchJson (`https://leyscoders-api.herokuapp.com/api/drakor-ongoing?apikey=dappakntlll`)
            let store = '\n'
            let yap = play.result
            for (let i of yap){
            store += `\n*「 _Drakor Ongoing_ 」*\n
- *Title* : ${i.title}
- *Genre* : ${i.genre}
- *Link* : ${i.url}\n`
            }
            reply(store)
            }
            break
	    case 'afk': {
	    const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)
                let user1 = global.db.users[m.sender]
                user1.afkTime = + new Date
                user1.afkReason = text
                m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
            }
            break	
            
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        
                case 'hidetag': {
                if (!isAdmins) throw mess.admin                  
            zidni.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                zidni.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break

             case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
         
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await zidni.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await zidni.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
           	
            case 'smeme2':
								if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!quoted) return reply(`Reply Gambar!`)									
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''							          
              let poto1 = await zidni.downloadAndSaveMediaMessage(quoted)         
                    let aaa = await TelegraPh(poto1)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.webp?background=${aaa}`)
								zidni.sendImageAsSticker(m.chat, resu, m, { packname: global.packname, author: global.author })										
										} catch (e) {
											console.log(e)
										}
									break
									case 'smeme': case 'stickermeme': case 'stickmeme': {
									const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)
reply(mess.wait)
arg = args.join(' ')
mee = await zidni.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await zidni.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
			  case 'hd':
                 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`        
            m.reply(mess.wait)         
              let poto = await zidni.downloadAndSaveMediaMessage(quoted)
             if (/image/.test(mime)) {
                    let anu5 = await TelegraPh(poto)
           let bangc = await getBuffer(`http://zekais-api.herokuapp.com/upscale?url=${anu5}&apikey=${global.zekais}`)
            zidni.sendMessage(m.chat, {image: bangc, caption: mess.success}, {quoted:m})
	  }
	  break
            
            case 'toimage': case 'toimg': {
            const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await zidni.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    zidni.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'togif': case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await zidni.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await zidni.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'tomp3':  case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            zidni.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break            
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            zidni.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break            
	        case 'tourl': {
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await zidni.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            
	   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await zidni.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                zidni.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
       case 'image': case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: ``,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
        }) }
        break
        case 'igdl': case 'instagram': case 'ig':{
			 const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)
                reply(mess.wait)                
                let anu = await fetchJson(`https://yx-api.herokuapp.com/api/download/ig?url=${q}`)               			    
				  zidni.sendMessage(from, { video: { url: anu.link }, caption: anu.LinkAwal }, { quoted: m })				 
					 }
			    break
			    	
            case 'git': case 'gitclone':          
             if (args.length < 1) return reply('Link Nya Mana? ')
              let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = text.match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filenameq=ZidniGanz.zip'
  zidni.sendMessage(from, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m })
			 break        
			 case 'mediafire':{
               if (args.length < 1) return reply('Link Nya Mana? ')
                 reply('Wait')
              let teks = args.join(' ')
               let li = await fetchJson(`https://melcanz.com/mediafire?url=${teks}&apikey=melcantik`)                 
           zidni.sendMessage(m.chat, { document: { url: li.link }, fileName: li.nama, mimetype: li.mime }, { quoted: m })	      
	      }
	      break
			 case 'tiktoknowm':   case 'tiktok': case 'tt':{
			  const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)
	if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
			reply(mess.wait)
			let nowem = q
			zee.Ttdownloader(nowem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					noweem = await getBuffer(nowm)
	  let buttons = [
                    {buttonId: `tiktokaudio ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: nowm },
                    caption: `${mess.success}`,
                    footer: ``,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
      })
				}).catch((err) => reply(`Link tidak valid`))
			}
             break 
	case 'ttaudio': case 'tiktokaudio':{
	const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)
			     if (!isUrl(args[0])) return reply(mess.error.Iv)
			    if (!args[0].includes('tiktok')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    hxz.ttdownloader(args[0]).then( data => {
			      zidni.sendMessage(from, { audio: { url: data.nowm }, mimetype: 'audio/mp4' }, { quoted: m})			     
				}).catch(() => reply(mess.error.api))
		       }
		         break            
 case 'ytdl': case 'ytv': case 'yt': case 'ytmp4': {
	            reply(mess.wait)
	            const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)
                    const { y2mateA, y2mateV } = require('./lib/y2mate3')
         teks = args.join(' ')
    let res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
            })
             let buttons = [
             	   {buttonId: `ytmp3 ${q}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: res[0].link },
                    caption: `Quality 480p`,
                    footer: res[0].judul,
                    buttons: buttons,
                    headerType: 4                }
                zidni.sendMessage(from, buttonMessage, { quoted: m})
   }  
             break                 
                    case 'play':{
                    const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)
                 const { y2mateA, y2mateV } = require('./lib/y2mate4')        
			 let query = args.join(" ")   
			reply('Wait')
			 res = await yts(text)
			  resu = await y2mateV(res.all[0].url).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
           })
         let buttons = [
                    {buttonId: `ytmp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: resu[0].link  },
                    caption: `${resu[0].judul}`,
                    footer: ``,
                    buttons: buttons,
                    headerType: 4
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
   }
			                break	       
              case 'ytmp3': {
              const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)
    		var mulaikah = args.join(' ')
		reply('Wait')
                  const { y2mateA, y2mateV } = require('./lib/y2mate3')
         teks = args.join(' ')    
           let res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
           zidni.sendMessage(from, { document: { url: res[0].link }, fileName: `${res[0].output}`, mimetype: 'audio/mp3' }, { quoted: m })			      
                           }
                  break
            case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                zidni.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
  
	    case 'couple': {
	     const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                zidni.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                zidni.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
           
            case 'quotesanime': case 'quoteanime': {
             const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                zidni.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        
          case 'quoteagamis': case 'quotes':{
           const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)
	         let ano = await fetchJson(`http://zekais-api.herokuapp.com/${command}?apikey=Ddglle8M`)
             await zidni.sendButtonText(m.chat, [{ buttonId: `${command}`, buttonText: { displayText: 'Next' }, type: 1 }], ano.quotes+'\n', ``, m)
            }
            break
case 'bijak':  case 'bucin': case 'fakta':{
 const {user} = require("./database/jsonfile")
                if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply(`Limit Kamu Sudah Habis Silahkan Buy Limit atau Lakukan Claim Harian`)
                limitAdd(senderNumber, user)
	         let ao = await fetchJson(`http://zekais-api.herokuapp.com/${command}?apikey=Ddglle8M`)
             await zidni.sendButtonText(m.chat, [{ buttonId: `${command}`, buttonText: { displayText: 'Next' }, type: 1 }], ao.result+'\n', ``, m)
            }
            break
          
case 'nabi': case 'kisahnabi':
if (!text) return reply(`Kirim perintah ${command} Nama Nabi\nContoh : ${command} Muhammad`)
		var data = await fetchJson(`https://hardianto.xyz/api/muslim/kisahnabi?nabi=${text}&apikey=hardianto`)
		var yy = data.result
				var kisahnya = `*Nama Nabi :* ${yy.name}\n*Kelahiran :* ${yy.wafat_usia}\n*Tempat Tinggal :* ${yy.singgah}\n*Kisah Nabi :* ${yy.kisah}`
			    reply(kisahnya)
			break
case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		zidni.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		zidni.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		zidni.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		zidni.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		zidni.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		zidni.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}		
              break
              
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		case 'backup':
		case 'sesion':
			if (!isOwner) return reply(`hanya bisa di gunakan owner untuk backup`)
			try {
				zidni.sendMessage(m.sender, {
					document: fs.readFileSync(`./z.json`),
					fileName: "sesion.json",
					mimetype: "application/json"
				})
			} catch (err) {
				textImg(err)
			}
			break
		   case 'block': {
		if (!isOwner) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isOwner) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zidni.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break	   
	  case 'listpc': {
	  if (!isOwner) throw mess.owner
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 zidni.sendTextWithMentions(m.chat, teks, m)
             }
             break
          	case 'setpp':
			case 'setppbot': {
                if (!isOwner) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                 let media = await zidni.downloadAndSaveMediaMessage(quoted)
                await zidni.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'public': {
                if (!isOwner) throw mess.owner
                zidni.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isOwner) throw mess.owner
                zidni.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': 
         case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
                   case 'owner': case 'creator': {
                zidni.sendContact(m.chat, global.owner, m)
            }
            break
            		case 'join': case 'masuk':{
            		  if (!isPremium)return reply("Khusus Pengguna Premium")		
				let result = args[0].split('https://chat.whatsapp.com/')[1]
                await zidni.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))            
				}
				break
case 'bc': case 'broadcast':
			    if (!isOwner) return reply(mess.OnlyOwner)
		                 var data = await store.chats.all()
                            for (let i of data) {
                              zidni.sendMessage(i.id, { text: `*[ BROADCAST ]*\n\n${q}` })
                               await sleep(1000)
                            }
                            break
                            case 'report':
                            if (text.length < 10) throw `Laporan terlalu pendek, minimal 10 karakter!`
    if (text.length > 1000) throw `Laporan terlalu panjang, maksimal 1000 karakter!`
       reply(`Sukses Kirim Ke Owner, Main² banned!`)
        zidni.sendTextWithMentions(`6281215205433@s.whatsapp.net`, `*[ PANGGILAN USER ]*\nMessage nya : ${q}\nDari : @${sender.split("@")[0]}`, m)
            
        break
        case 'cekprem': case 'cekpremium':{
                   if (!isPremium && !isOwner) return reply(`Kamu bukan user premium`)
                   let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                   let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
                   teks = `❒ *「 Premium User 」* ❒ 
 *Nama : ${pushname}*
 *Tag : @${sender.split("@")[0]}*
 *Expired : ${premiumnya}*`
                    zidni.sendTextWithMentions(from, teks, m)
                     }
                     break
                     case 'premium':
	case 'prem':
	case 'addprem':
	       if (!isOwner) return onlyOwner()
if (m.message.extendedTextMessage === null || m.message.extendedTextMessage === undefined) {
if(!q) return reply(`Penggunaan :\n${prefix}addprem Tag/Reply/input nomer\n\nPilih waktu\ns = detik\nh = jam\nd =hari\n\nContoh: ${prefix}addprem +62xxx 1h`)       
if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')  
if(args.length > 2 ) return reply(`Format salah, ketik ${prefix}addprem 62851xxx 1h Gitu tod`)
if(args.length < 2 ) return reply(`Format salah, ketik ${prefix}addprem 62851xxx 1h Gitu tod`)
nomor = args[0] + `@s.whatsapp.net`              
if(_prem.checkPremiumUser (nomor, premium)) return reply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (nomor, args[1], premium)         
await reply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
  zidni.sendMessage(nomor, { text:  `HALO KAK\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`})
    } else if (m.message.extendedTextMessage.contextInfo.participant) {
premnih = m.message.extendedTextMessage.contextInfo.participant
if(args.length < 1) return reply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)      
 if(_prem.checkPremiumUser (premnih, premium)) return reply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (premnih, q, premium)         
await reply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
  zidni.sendMessage(premnih, { text:  `HALO KAK AKU\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`})
     } else if(m.message.extendedTextMessage.contextInfo.mentionedJid.length == 1) { 
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) return reply(`Satu satu dong`)
if(args.length < 2) return reply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)       
lulu =`${mentioned[0].split('@')[0]}@s.whatsapp.net`
 if(_prem.checkPremiumUser (lulu, premium)) return reply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (lulu, args[1], premium)         
await reply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
  zidni.sendMessage(lulu, { text:  `HALO KAK AKU\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`})
     } else{
 reply(`Kirim perintah ${prefix}addprem @tag atau nomor atau reply pesan orang yang ingin di addprem`)
 }
break
  case 'listprem':
        case 'listpremium':

                   let txt = `*── 「 LIST PREMIUM 」 ──*\nTotal : ${premium.length}\n\n`
                   let men = [];
                   for (let i of premium){
                   men.push(i.id)
                   let cekvip = ms(i.expired - Date.now())
                   txt += `*ID :* @${i.id}\n*Expired :* ${cekvip.days} Hari ${cekvip.hours} Jam ${cekvip.minutes} Menit ${cekvip.seconds} Detik\n\n`
                   }
                    zidni.sendTextWithMentions(from, txt, m)
                   break
                   case 'delprem':
case 'delpremium':
       if (!isOwner) return onlyOwner()
if (m.message.extendedTextMessage === null || m.message.extendedTextMessage === undefined) {
if(!q) return reply("Penggunaan : delprem Tag/Reply/Input nomer target yang mau di jadikan premium")
if (args[0].includes('08')) return reply('Awali nomor dengan 62')  
if(args[3]) return reply(`Format salah, ketik ${prefix}delprem 62851xxx  Gitu tod`)
nomor = args[0] + `@s.whatsapp.net` 
if(!_prem.checkPremiumUser (nomor, premium)) return reply("Maap kak user tersebut tidak ada di database")   
          _prem.delPremiumUser (nomor, premium)
          return reply(`Succes delete premium ${nomor}`)
          
 } else if (m.message.extendedTextMessage.contextInfo.participant) {
premnih = m.message.extendedTextMessage.contextInfo.participant
if(args.length > 0) return reply("Format salah")
if(!_prem.checkPremiumUser (premnih, premium)) return reply("Maap kak user tersebut tidak ada di database")   
 _prem.delPremiumUser (premnih, premium) 
  await reply(`Succes delete premium  ${premnih.split("@")[0]}`)
  
} else if(m.message.extendedTextMessage.contextInfo.mentionedJid) { 
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid;
if(mentioned.length > 1) return reply("Satu satu kak")
	lulu = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
	if(!_prem.checkPremiumUser (lulu, premium)) return reply("Maap kak user tersebut tidak ada di database")   
_prem.delPremiumUser (lulu, premium) 
await reply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
 }
break    
               case 'sewa':
  case 'daftarprem':{
   let thumbnail = await getBuffer (`https://telegra.ph/file/f72f88a4374d134953cfc.png`)
            const tod = generateWAMessageFromContent(from,
{"productMessage": {
						"product": {
							"productImage": {
								"url": "https://mmg.whatsapp.net/d/f/ApB9FM5wpdh-vIFBU_eh6oNUGfydsIPHeH5g948qu8ei.enc",
								"mimetype": "image/jpeg",
								"fileSha256": "p4HuRqm7bqae/spDY4q6UCGc8pmIt+Nw4T7AqCYjI1U=",
								"fileLength": "999999999999999",
								"mediaKey": "PocZSjTMz/cehHKI0CiPG0J7gMHZHWUP+asVhdNHwuQ=",
								"fileEncSha256": "WmHKTxEV8v82TwD1CwOHSNG9wxUkJ53j8/7YUvQkwUY=",
								"jpegThumbnail": thumbnail
						},
							"productId": "9999",
							"title": `Turu Bang`,
							"description": `*[ LIST HARGA SEWA ]*

*Keuntungan :*
- Bebas Masukin Bot Ke Grup WhatsApp Mu
- Menjadi Akun Premium
- Limit Unlimited
- Tidak Ada Kata ~Limit Menurun~

*LIST SEWA*
- Rp.10.000 - Perbulan`,
							"currencyCode": "IDR",
							"priceAmount1000": "10000000",
							"url": "zidniganz@yahoo.com",
							"productImageCount": 1,
							"salePriceAmount1000": "0"
						},
						"businessOwnerJid": `6281215205433@s.whatsapp.net`
					}
				}, {quoted : m})			
zidni.relayMessage(from, tod.message, {messageId: tod.key.id})
}
  break
        case 'claim':   
           case 'klaim':{
            const { premium, _claim, sewa, user, ban } = require("./database/jsonfile");
              if (checkClaim(senderNumber, _claim)) return reply(`Kamu Sudah Melakukan Klaim Harian`)
                    var htgm6 = randomNomor(1000)
                    var htgm7 = randomNomor(20)
                    addBalance(senderNumber, htgm6, user)
                    giveLimit(sender, htgm7, user)
                    addUserClaim("1d", timeWib, pushname, senderNumber, _claim)
                    await reply(`*── 「 CLAIM  」 ──*

Selamat kamu mendapatkan *${htgm7}* Limit & Uang Rp *${htgm6}* 
Dari claim harian`)
}
                    break
        	 case 'limit':
            case 'ceklimit': 
            case 'balance': 
            case 'glimit':{
             const { premium, _claim, sewa, user, ban } = require("./database/jsonfile");
                      reply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}\nLimit Game : ${cekGLimit(senderNumber, gcount, user)}/${gcount}\nSaldo : Rp ${getBalance(senderNumber, user)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
                      }
                      break
            case 'buylimit':{
            const { premium, _claim, sewa, user, ban } = require("./database/jsonfile");      
                       if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = Rp1000`)
                       if (q.includes('-')) return reply(`Jangan menggunakan -`)
                       if (isNaN(q)) return reply(`Harus berupa angka`)
                       let ane = Number(math(q) * 1000)
                       if (getBalance(senderNumber, user) < ane) return reply(`Saldo kamu tidak mencukupi untuk pembelian ini, Harga 1 limit Rp1000`)
                       kurangBalance(senderNumber, ane, user)
                       giveLimit(senderNumber, math(q), user)
                       reply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${getBalance(senderNumber, user).toLocaleString()}\nSisa Limit : ${getLimit(senderNumber, limitCount, user)}/${limitCount}`)
                       }
                       break    
           case 'buyglimit':
           case 'buygamelimit':
                       {
                       const { premium, _claim, sewa, user, ban } = require("./database/jsonfile");       
                       if(!q)return reply(`Example : ${prefix + command} 10\n\nHarga 1 limit = Rp750`)
                       const koinPerlimit = 750
                       const total = koinPerlimit * q
                       if (getBalance(senderNumber, user) <= total) return reply(`Maaf Saldo kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
                       kurangBalance(senderNumber, total, user)
                       givegame(senderNumber, math(q), user)
                      reply(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp${getBalance(senderNumber, user).toLocaleString()}\nSisa Game Limit : ${cekGLimit(senderNumber, gcount, user)}/${gcount}`)
                       }
                       break
          case 'giftlimit':{
          const { premium, _claim, sewa, user, ban } = require("./database/jsonfile");       
                       if(!isOwner)return
                       if (!q)return reply(`Example : ${prefix + command} @tag 10`)
                       lim = q.split(" ")[1]
                       const tag1 = `${q.split(" ")[0].replace("@",'')}`
                       giveLimit(tag1, lim, user)
                       reply('Succes')
                     }
                         break
        case 'topbalance':{
                                        const { premium, _claim, sewa, user, ban } = require("./database/jsonfile");
       
                      let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
                      let mebn = [];
                      for (let i of user){
                      mebn.push(i.id)
                      let bl = (i.balance)
                      txot += `*ID :* Wa.me/${i.id.split("@")[0]}\n➸ Saldo : ${bl}\n\n`
                      }
                      mentions(txot, mebn, true)
                     }
                       break
           case 'leaderboard':
	case 'listuser':
			case 'userlist':{
			const {user} = require("./database/jsonfile")
	         let usernye = `*Leaderboard*\nJumlah : ${user.length}\n\n`
	         persenya =`${userPersen}`
nana =`${userExp}/${requiredExp}`
let tx = `*── 「 LEADERBOARD 」 ──*\n\n`
let meb = [];
for (let i of user){
                      meb.push(i.id)
                      let bl = (i.balance)
                      let ka = (i.xp)
                      let tt = (i.limit)
                      let lv = (i.level)
		tx += `*Name :* ${i.name}\n*ID :* @${i.id.split("@")[0]}\n➸ Level : ${lv}\n➸ Exp : ${ka}\n➸ Pangkat : ${userLeveling(i.level)}\n➸ Limit : ${tt}\n➸ Saldo : Rp ${bl}\n\n`
                      }
                              zidni.sendTextWithMentions(m.chat, tx, m)
				}
				break	
				case 'setuser':
              case 'delalluser':
	case 'clearalluser':{
	const {user} = require("./database/jsonfile")
				         if (!isOwner) return onlyOwner()
				         var obj = [] 
                         fs.writeFileSync('./database/user.json', JSON.stringify(obj))         
				         await reply(`ALL USER BERHASIL DI HAPUS`)
			             }
			             break 
			             case 'inv': case 'inventori': case 'profile':{
			             const { premium, _claim, sewa, user, ban } = require("./database/jsonfile");   
if (q.includes('--help')) return m.reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var riych = await getBuffer(picak+'Profile User')
     let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*❤️Darah kamu* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Besi kamu* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Emas Kamu* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Emerald Kamu* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺️Limit kamu* : ${getLimit(senderNumber, limitCount, user)}\n`
     teksehmazeh += `*🧪Potion Kamu* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ 🐺HASIL BURUAN🐺 ]_\n`
     teksehmazeh += `*🐟Ikan* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Ayam* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Kelinci* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Domba* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Sapi* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Gajah* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${pushname}*_`
    const butt = [{ urlButton: { displayText: `Whatsapp`, url : `https://wa.me/${m.sender.split("@")[0]}` } },{ quickReplyButton: { displayText: `Nambang ⛏️`, id: `mining` } },{ quickReplyButton: { displayText: `Berburu ⚔️ `, id: `berburu` } },]
    zidni.sendMessage(m.chat, { text: teksehmazeh,templateButtons: butt, footer: '', mentions: [sender]} )
  }
  break
case 'mining': case 'menambang':{
if (q.includes('--help')) return m.reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return m.reply('Kamu kelelahan!, cobalah heal menggunakan potion') 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ HASIL MENAMBANG ]\n*⛓️ Besi* : ${besinya}\n*🌟 Emas* : ${emasnya}\n*💎 Emerald* : ${emeraldnya}`
   const butt = [{ urlButton: { displayText: `Whatsapp`, url : `https://wa.me/${m.sender.split("@")[0]}` } },{ quickReplyButton: { displayText: `Menambang Lagi ⛏️`, id: `${command}` } },]
    zidni.sendMessage(m.chat, { text: caption,templateButtons: butt, footer: '', mentions: [sender]} )
   }, 7000)  
  setTimeout( () => {
         zidni.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Mulai menambang🎣`, m)
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaksi
 case 'beli': case 'buy':{
if (q.includes('--help')) return m.reply(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return m.reply('Mau beli apa?')
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} potion 2\n 1 potion = 100000 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Potion kamu* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'umpan'){
  let noh = 5000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} umpan 2\n 1 umpan = 2500 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Umpan kamu* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} limit 2\n 1 limit = 35000 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Limit kamu* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { m.reply("Format salah!") }
 }
 break
 case 'sel': case 'jual':{//BY LORD RIFZA
 if (!q) return  m.reply(`Mau jual apa?\nExample : ${prefix + command} ikan 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return m.reply('Ikan kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 monay`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ikan kamu* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return m.reply('Ayam kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 monay`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ayam kamu* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return m.reply('Kelinci kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 monay`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Kelinci kamu* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return m.reply('Domba kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} domba 2\n 1 domba = 5000 monay`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Domba kamu* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return m.reply('Sapi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 monay`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Sapi kamu* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return m.reply('Gajah kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} gajah 2\n 1 gajah = 15000 monay`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Gajah kamu* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} besi 2\n 1 besi = 15000 monay`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Besi kamu* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emas 2\n 1 emas = 50000 monay`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emas kamu* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 monay`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emerald kamu* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { m.reply("Format salah!") }

 }
 break

 case 'heal':{
if (q.includes('--help')) return m.reply(examkosong) 
 if (!isCekDarah < 1) return m.reply('Kamu hanya bisa heal ketika darah kamu 0')
 if (isCekDarah > 100) return m.reply('Darah kamu sudah penuh')
 if (isPotion < 1) return m.reply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 m.reply('Berhasil, darah kamu sudah full')
 }
 break
 case 'berburu':{
if (q.includes('--help')) return m.reply(examkosong) 
 //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return m.reply('Darah kamu habis, cobalah heal menggunakan potion') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
  let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan rimba') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Hutan Amazon') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Hutan tropis') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Padang rumput') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'Hutan afrika') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Pegunungan') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HASIL BURUAN ]_\n`
     teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
     teksehmazeh += `*🐔Ayam* : ${ayam}\n`
     teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
     teksehmazeh += `*🐑Domba* : ${domba}\n`
     teksehmazeh += `*🐄Sapi* : ${sapi}\n`
     teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Lokasi* : ${lokasinya}\n`
     teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
     teksehmazeh += `*Sisa darah* : ${getDarah(m.sender)}\n`
    const butt = [{ urlButton: { displayText: `Whatsapp`, url : `https://wa.me/${m.sender.split("@")[0]}` } },{ quickReplyButton: { displayText: `Berburu Lagi 🏹`, id: `berburu` } },]
    zidni.sendMessage(m.chat, { text: teksehmazeh,templateButtons: butt, footer: pushname, mentions: [sender]} )    
  }, 5000)  
 setTimeout( () => {
        zidni.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Mulai berburu di ${lokasinya}`, m)
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
            default:
                if (budy.startsWith('=>')) {
                    if (!isOwner) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isOwner) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isOwner) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    zidni.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
