const config: Config = {
    mode: 'NO_LIMITS', // 'CHINA' | 'WORLD' | 'NO_LIMITS'
    botToken: '5778803513:AAGqTkyF--atxLBdKisq4xx6YXgFUvSiUW8',
    keepFiles: {
        compared: false,
        input: false,
        single: false,
        video: false,
    },
    messages: {
        blocked: 'The Chinese website has blocked the bot, too bad 🤷‍♂️',
        bye:
            '💚 Thanks For Using Bot 💚\n' +
            '💚 You can add bot your groups 💚\n' +
            '💚 [Bot Channel](https://t.me/animebotc) 💚\n' +
            '💚 [Bot Channel](https://t.me/animebotc) 💚\n' +
            'special Thanks For script Owner Imcsu',
        hello: 'Hi  Send me a photo to convert it into a 2D anime you use this bot please join the channel 🌸',
        media: '@Anime\\qq\\Ai\\_bot',
        received: 'Photo has been received, please wait 🍀',
    },
    sendMedia: {
        compared: true,
        single: true, // doesn't work with mode=WORLD
        video: true, // doesn't work with mode=WORLD
    },
    parallelRequests: 10,
    // proxyUrl: 'socks5://HIA:HIA@47.92.85.36:1080',
};

export default config;
