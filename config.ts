const config: Config = {
    mode: 'NO_LIMITS', // 'CHINA' | 'WORLD' | 'NO_LIMITS'
    botToken: 'put_your_token_here',
    keepFiles: {
        compared: true,
        input: true,
        single: true,
        video: true,
    },
    messages: {
        blocked: 'The Chinese website has blocked the bot, too bad 🤷‍♂️',
        bye:
            'Thank you for using this bot 👍\n' +
            'Join telegram channel [Click](https://t.me/animebotc) ♥️',
        hello: 'Hi  Send me a photo to convert it into a 2D anime use this bot you join the channel 🌸',
        media: '@qq\\_neural\\_anime\\_bot',
        received: 'Photo has been received, please wait',
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
