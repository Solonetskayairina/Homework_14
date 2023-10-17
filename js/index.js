    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const generateKey = function (length, characters) {
        let result = '';
        for (let i=0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    const key = generateKey(16, characters);
    console.log(key);
