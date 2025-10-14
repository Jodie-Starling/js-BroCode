function generateRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allowedChars = '';
    let password = '';

    allowedChars += includeUppercase ? uppercaseChars : '';
    allowedChars += includeLowercase ? lowercaseChars : '';
    allowedChars += includeNumbers ? numberChars : '';
    allowedChars += includeSymbols ? symbolChars : '';

    if (allowedChars.length <= 0) {
        return `(password must be at least one)`;
    }
    if(allowedChars.length <= 0) {
        return `(password must be at least one)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length); 
            // 从 allowedChars 中随机选择一个字符，注意是allowedChars.length，不是length
        password += allowedChars[randomIndex];
    }
    return password;
}

const password = generateRandomPassword(12, false, true, false, true);

console.log(`Generated Password: ${password}`);