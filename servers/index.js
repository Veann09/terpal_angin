/*
* 𝙊𝙬𝙚𝙣𝙨𝘿𝙚𝙫
* 𝘵𝘦𝘭𝘦: https://t.me/owenssw
* 𝘪𝘯𝘧𝘰: https://s.id/26AYH
* 𝘺𝘵: https://youtube.com/CekGem
* 𝙶𝚛𝚘𝚞𝚙: https://chat.whatsapp.com/LQBLGAalERjE1P5X3REnGC

* 🚨Di Larang Menghapus Wm Ini🚨
* #𝗛𝗮𝗿𝗴𝗮𝗶𝗹𝗮𝗵 𝗣𝗲𝗺𝗯𝘂𝗮𝘁 
*/

function _0x3e43() {
    const _0x35fd7a = ['createInterface', 'startsWith', 'messages.upsert', 'greenBright', 'Contoh : 628xxxxx', '4cmsKnR', '570199aAimMh', 'botNumber', 'decodeJid', 'match', 'exit', 'Cannot use pairing code with mobile api', 'some', 'path', 'Start with country code of your WhatsApp Number, Example : 628xxxxxxxx', 'silent', '9QPkcgW', 'includes', '3204816Hjmxmg', '17tzgJcK', 'join', '@whiskeysockets/baileys', 'creds.update', 'Silakan Tulis Nomor Whatsapp Anda', 'key', '../config', '../strava', '63718IiGjuu', 'server', '702651WGAHuF', 'Copy Pairing Code :', 'argv', 'chalk', '56fXhxMN', 'util', 'fatal', 'cyan', 'connection.update', 'loadMessage', 'listMessage', 'watchFile', 'map', '┌──────────────┈', 'question', '694840OmcIYj', '└──────────────┈', 'cache', 'messages', 'close', '../lib/myfunc', 'buttonsMessage', 'Chrome', 'keys', 'replace', 'matchAll', '8633980mLNoyt', 'catch', 'bgBlack', '20.0.04', 'redBright', 'Connected ', 'child', 'node-cache', 'bind', 'creds', 'connection', 'Your WhatsApp Number : ', 'templateMessage', 'stdout', 'default', 'white', 'protocolMessage', 'store', '--pairing-code', 'status@broadcast', 'registered', '│• ', '../lib/color', 'readline', 'message', 'pino', 'sendTextWithMentions', 'authState', 'user', 'log', '1212672cHVwlY', 'sendmentions', 'remoteJid', 'resolve', 'open', '231CjXjbU', 'sendMessage'];
    _0x3e43 = function () {
        return _0x35fd7a;
    };
    return _0x3e43();
}
const _0x58b6b8 = _0x3e03;
(function (_0xfceb0d, _0x26018c) {
    const _0x3aa8eb = _0x3e03,
        _0x20f6c8 = _0xfceb0d();
    while (!![]) {
        try {
            const _0x3b1bac = parseInt(_0x3aa8eb(0xd4)) / 0x1 * (-parseInt(_0x3aa8eb(0xdc)) / 0x2) + -parseInt(_0x3aa8eb(0xde)) / 0x3 * (parseInt(_0x3aa8eb(0x122)) / 0x4) + parseInt(_0x3aa8eb(0xed)) / 0x5 + -parseInt(_0x3aa8eb(0x12f)) / 0x6 + parseInt(_0x3aa8eb(0x123)) / 0x7 * (parseInt(_0x3aa8eb(0xe2)) / 0x8) + -parseInt(_0x3aa8eb(0x12d)) / 0x9 * (parseInt(_0x3aa8eb(0xf8)) / 0xa) + parseInt(_0x3aa8eb(0x11b)) / 0xb * (parseInt(_0x3aa8eb(0x116)) / 0xc);
            if (_0x3b1bac === _0x26018c) break;
            else _0x20f6c8['push'](_0x20f6c8['shift']());
        } catch (_0x4b7890) {
            _0x20f6c8['push'](_0x20f6c8['shift']());
        }
    }
}(_0x3e43, 0xa0a45), require(_0x58b6b8(0xda)));
const {
    default: LexxyBotConnect,
    delay,
    jidNormalizedUser,
    PHONENUMBER_MCC,
    makeCacheableSignalKeyStore,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    getContentType,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    makeInMemoryStore,
    jidDecode,
    proto
} = require(_0x58b6b8(0xd6)), fs = require('fs'), pino = require(_0x58b6b8(0x111)), {
    join
} = require(_0x58b6b8(0x12a)), {
    await,
    getBuffer,
    fetchJson
} = require(_0x58b6b8(0xf2)), makeWASocket = require('@whiskeysockets/baileys')[_0x58b6b8(0x106)], readline = require(_0x58b6b8(0x10f)), NodeCache = require(_0x58b6b8(0xff)), chalk = require(_0x58b6b8(0xe1)), util = require(_0x58b6b8(0xe3)), {
    color,
    mylog
} = require(_0x58b6b8(0x10e)), store = makeInMemoryStore({
    'logger': pino()[_0x58b6b8(0xfe)]({
        'level': 'silent',
        'stream': _0x58b6b8(0x109)
    })
});
let phoneNumber = global[_0x58b6b8(0x124)];
autoread_sw = !![];
const pairingCode = !!phoneNumber || process['argv'][_0x58b6b8(0x12e)](_0x58b6b8(0x10a)),
    useMobile = process[_0x58b6b8(0xe0)][_0x58b6b8(0x12e)]('--mobile'),
    xlec = readline[_0x58b6b8(0x11d)]({
        'input': process['stdin'],
        'output': process[_0x58b6b8(0x105)]
    }),
    question = _0x5c745d => new Promise(_0x557589 => xlec[_0x58b6b8(0xec)](_0x5c745d, _0x557589));
async function connectToWhatsApp() {
    const _0x4305b9 = _0x58b6b8;
    let {
        version: _0x4ebea0,
        isLatest: _0x460873
    } = await fetchLatestBaileysVersion();
    const {
        state: _0x5f37b6,
        saveCreds: _0x360f92
    } = await useMultiFileAuthState(join(__dirname, './session')), _0x2006c9 = new NodeCache(), _0x400186 = makeWASocket({
        'logger': pino({
            'level': _0x4305b9(0x12c)
        }),
        'printQRInTerminal': !pairingCode,
        'mobile': useMobile,
        'auth': {
            'creds': _0x5f37b6[_0x4305b9(0x101)],
            'keys': makeCacheableSignalKeyStore(_0x5f37b6[_0x4305b9(0xf5)], pino({
                'level': 'fatal'
            })[_0x4305b9(0xfe)]({
                'level': _0x4305b9(0xe4)
            }))
        },
        'browser': ['Ubuntu', _0x4305b9(0xf4), _0x4305b9(0xfb)],
        'version': _0x4ebea0,
        'patchMessageBeforeSending': _0x31b508 => {
            const _0xca57bc = _0x4305b9,
                _0x5a2aa8 = !!(_0x31b508[_0xca57bc(0xf3)] || _0x31b508[_0xca57bc(0x104)] || _0x31b508[_0xca57bc(0xe8)]);
            return _0x5a2aa8 && (_0x31b508 = {
                'viewOnceMessage': {
                    'message': {
                        'messageContextInfo': {
                            'deviceListMetadataVersion': 0x2,
                            'deviceListMetadata': {}
                        },
                        ..._0x31b508
                    }
                }
            }), _0x31b508;
        },
        'getMessage': async _0x556614 => {
            const _0x21f49f = _0x4305b9;
            let _0xa7f473 = jidNormalizedUser(_0x556614[_0x21f49f(0x118)]),
                _0x5e197a = await store[_0x21f49f(0xe7)](_0xa7f473, _0x556614['id']);
            return _0x5e197a?. ['message'] || '';
        },
        'markOnlineOnConnect': !![],
        'generateHighQualityLinkPreview': !![],
        'msgRetryCounterCache': _0x2006c9
    });
    store[_0x4305b9(0x100)](_0x400186['ev']);
    if (pairingCode && !_0x400186[_0x4305b9(0x113)]['creds'][_0x4305b9(0x10c)]) {
        if (useMobile) console[_0x4305b9(0x115)](_0x4305b9(0x128));
        console[_0x4305b9(0x115)](chalk[_0x4305b9(0xe5)](_0x4305b9(0xeb))), console[_0x4305b9(0x115)](_0x4305b9(0x10d) + chalk[_0x4305b9(0xfc)](_0x4305b9(0xd8))), console['log']('│• ' + chalk[_0x4305b9(0xfc)](_0x4305b9(0x121))), console[_0x4305b9(0x115)](chalk[_0x4305b9(0xe5)](_0x4305b9(0xee)));
        let _0x2af2ed;
        !!_0x2af2ed ? (_0x2af2ed = _0x2af2ed['replace'](/[^0-9]/g, ''), !Object[_0x4305b9(0xf5)](PHONENUMBER_MCC)[_0x4305b9(0x129)](_0x42431a => _0x2af2ed[_0x4305b9(0x11e)](_0x42431a)) && (console['log'](chalk[_0x4305b9(0xfa)](chalk[_0x4305b9(0xfc)](_0x4305b9(0x12b)))), process[_0x4305b9(0x127)](0x0))) : (_0x2af2ed = await question(chalk[_0x4305b9(0xfa)](chalk[_0x4305b9(0x120)](_0x4305b9(0x103)))), _0x2af2ed = _0x2af2ed[_0x4305b9(0xf6)](/[^0-9]/g, ''), !Object[_0x4305b9(0xf5)](PHONENUMBER_MCC)[_0x4305b9(0x129)](_0x479e33 => _0x2af2ed['startsWith'](_0x479e33)) && (console[_0x4305b9(0x115)](chalk['bgBlack'](chalk['redBright'](_0x4305b9(0x12b)))), _0x2af2ed = await question(chalk[_0x4305b9(0xfa)](chalk[_0x4305b9(0x120)]('Your WhatsApp Number : '))), _0x2af2ed = _0x2af2ed[_0x4305b9(0xf6)](/[^0-9]/g, ''), xlec[_0x4305b9(0xf1)]())), setTimeout(async () => {
            const _0x473ede = _0x4305b9;
            let _0x8bfff = await _0x400186['requestPairingCode'](_0x2af2ed);
            _0x8bfff = _0x8bfff?. [_0x473ede(0x126)](/.{1,4}/g)?. [_0x473ede(0xd5)]('-') || _0x8bfff, console[_0x473ede(0x115)](chalk['bgBlack'](chalk[_0x473ede(0x120)](_0x473ede(0xdf))), chalk['black'](chalk[_0x473ede(0x107)](_0x8bfff)));
        }, 0x7d0);
    }
    return _0x400186['ev']['on'](_0x4305b9(0x11f), async _0x30ed3c => {
        const _0x15633c = _0x4305b9;
        try {
            msg = _0x30ed3c[_0x15633c(0xf0)][0x0];
            if (!msg[_0x15633c(0x110)]) return;
            require(_0x15633c(0xdb))(_0x400186, msg, store);
        } catch (_0x45b21d) {
            console[_0x15633c(0x115)](_0x45b21d);
        }
    }), _0x400186['ev']['on'](_0x4305b9(0xe6), _0x24b71a => {
        const _0x423396 = _0x4305b9;
        console[_0x423396(0x115)]('Connection Update :', _0x24b71a);
        if (_0x24b71a[_0x423396(0x102)] === _0x423396(0x11a)) console[_0x423396(0x115)](mylog(_0x423396(0xfd) + _0x400186[_0x423396(0x114)]['id']));
        else _0x24b71a[_0x423396(0x102)] === 'close' && (console[_0x423396(0x115)](mylog('Disconnected!')), connectToWhatsApp());
    }), _0x400186[_0x4305b9(0x112)] = async (_0x2b001f, _0xc27d9b, _0x7f93e8, _0x2bb0cf = {}) => _0x400186[_0x4305b9(0x11c)](_0x2b001f, {
        'text': _0xc27d9b,
        'contextInfo': {
            'mentionedJid': [..._0xc27d9b[_0x4305b9(0xf7)](/@(\d{0,16})/g)][_0x4305b9(0xea)](_0x30e3b2 => _0x30e3b2[0x1] + '@s.whatsapp.net')
        },
        ..._0x2bb0cf
    }, {
        'quoted': _0x7f93e8
    }), _0x400186[_0x4305b9(0x125)] = _0x309362 => {
        const _0x47cb89 = _0x4305b9;
        if (!_0x309362) return _0x309362;
        if (/:\d+@/gi ['test'](_0x309362)) {
            let _0x260cf4 = jidDecode(_0x309362) || {};
            return _0x260cf4[_0x47cb89(0x114)] && _0x260cf4[_0x47cb89(0xdd)] && _0x260cf4[_0x47cb89(0x114)] + '@' + _0x260cf4[_0x47cb89(0xdd)] || _0x309362;
        } else return _0x309362;
    }, _0x400186[_0x4305b9(0x117)] = (_0x2f74e3, _0x2994bb, _0x494301 = [], _0x12b7c6) => {
        const _0x7284dc = _0x4305b9;
        if (_0x12b7c6 == null || _0x12b7c6 == undefined || _0x12b7c6 == ![]) {
            let _0xe846a4 = _0x400186[_0x7284dc(0x11c)](_0x2f74e3, {
                'text': _0x2994bb,
                'mentions': _0x494301
            }, {
                'quoted': msg
            });
            return _0xe846a4;
        } else {
            let _0x45107f = _0x400186[_0x7284dc(0x11c)](_0x2f74e3, {
                'text': _0x2994bb,
                'mentions': _0x494301
            }, {
                'quoted': msg
            });
            return _0x45107f;
        }
    }, _0x400186['ev']['on'](_0x4305b9(0xd7), _0x360f92), _0x400186['ev']['process'](async _0x2608f8 => {
        const _0xda68fa = _0x4305b9;
        if (_0x2608f8[_0xda68fa(0x11f)]) {
            const _0x5810f5 = _0x2608f8[_0xda68fa(0x11f)];
            for (let _0x17b54b of _0x5810f5[_0xda68fa(0xf0)]) {
                if (_0x17b54b[_0xda68fa(0xd9)][_0xda68fa(0x118)] === _0xda68fa(0x10b)) {
                    if (_0x17b54b[_0xda68fa(0x110)]?. [_0xda68fa(0x108)]) return;
                    await delay(0xbb8), autoread_sw && await _0x400186['readMessages']([_0x17b54b[_0xda68fa(0xd9)]]);
                }
            }
        }
    }), _0x400186;
}

function _0x3e03(_0x275586, _0x8f6ef0) {
    const _0x3e4313 = _0x3e43();
    return _0x3e03 = function (_0x3e03fc, _0xe3c89f) {
        _0x3e03fc = _0x3e03fc - 0xd4;
        let _0x3f94ff = _0x3e4313[_0x3e03fc];
        return _0x3f94ff;
    }, _0x3e03(_0x275586, _0x8f6ef0);
}
connectToWhatsApp()[_0x58b6b8(0xf9)](_0xb66dcf => console[_0x58b6b8(0x115)](_0xb66dcf));
let file = require[_0x58b6b8(0x119)](__filename);
fs[_0x58b6b8(0xe9)](file, () => {
    const _0x371591 = _0x58b6b8;
    fs['unwatchFile'](file), console[_0x371591(0x115)](chalk[_0x371591(0xfc)]('Update ' + __filename)), delete require[_0x371591(0xef)][file], require(file);
});