function validateEmail(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const characterAt = email.indexOf('@');
    let count = 0;
    for (i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            count++;
            if (count > 1) {
                throw new Error(`Invalid email address. The address cannot contain more than one @ symbol. Valid example user@mail.com`);
            }
        }
    }
    if (!email.includes('.') || !email.includes('@')) {
        throw new Error(`Invalid email adress. Valid email example "user@mail.com"`)
    }
    if (characterAt < 2) {
        throw new Error(`Invalid email address. The user Name must contain at least two character.`);
    }
    if (email.includes('..')) {
        throw new Error(`Invalid email address. The address cannot contain two consecutive dots. Valid example "user@mail.com"`);
    }
    if (email.indexOf('.', characterAt) + 2 >= email.length) {
        throw new Error(`The domain name must contain at least two characters (.com, .org, .net, .az, .ru).`);
    }
    if (email.slice(characterAt + 1,).indexOf('.') === 0) {
        throw new Error(`The email provider's name must contain at least one character before the domain name (gmail.com, proton.net, yahoo.org).`);
    }
    if (email.indexOf('.') === 0) {
        throw new Error(`Invalid email address. The address cannot start with a dot.`);
    }
    if (email.slice(0, characterAt).indexOf('.', characterAt - 1) !== -1) {
        throw new Error(`Invalid email address. The address cannot contain a dot right before the @ symbol.`);
    }
    if (email.slice(characterAt,).indexOf('.') === -1) {
        throw new Error(`Invalid email address. The domain name is not defined (.com, .org, .net).`);
    }
    if (!email.match(regex)) {
        throw new Error(`Invalid email adress. Valid email address example "user@mail.com".`)
    } else {
        return `Your email address,"${email}" is valid.`;
    }
}
module.exports = { validateEmail };