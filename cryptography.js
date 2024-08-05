function encrypt(text, s) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.toUpperCase(text[i])) {
            result += String.fromCharCode((char.charCodeAt(0) + s - 65) % 26 + 65);
        } else if (char.toLowerCase(text[i])) {
            result += String.fromCharCode((char.charCodeAt(0) + s - 97) % 26 + 97);
        } else {
            result += char;
        }
    }

    return result;
}

function decrypt(encryptedText, s) {
    return encrypt(encryptedText, -s);
}

let text = "ATTACKATONCE";
let s = 4;

console.log("Original Text:", text);
console.log("Shift Value:", s);
console.log("Encrypted Text:", encrypt(text, s));
console.log("Decrypted Text:", decrypt(encrypt(text, s), s));