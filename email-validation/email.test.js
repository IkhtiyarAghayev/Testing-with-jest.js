const { validateEmail } = require('./email');

describe('validateEmail Function', () => {
    test('should return the valid email addresses', () => {
        expect(validateEmail("jane.doe@test-email.net")).toBe(`Your email address,"jane.doe@test-email.net" is valid.`);
        expect(validateEmail("support@company.co.uk")).toBe(`Your email address,"support@company.co.uk" is valid.`);
        expect(validateEmail("test.user@example.com")).toBe(`Your email address,"test.user@example.com" is valid.`);
    });
    test('should throw error if there is two @ symbol', () => {
        expect(() => { validateEmail("test@.user@example.com"); }).toThrow();
        expect(() => { validateEmail("@support@company.co.uk"); }).toThrow();
        expect(() => { validateEmail("jane.doe@test-email.net@"); }).toThrow();
    });
    test('should throw error if email address does not contain dot or @ symbol', () => {
        expect(() => { validateEmail("testuser@examplecom"); }).toThrow();
        expect(() => { validateEmail("supportcompany.co.uk"); }).toThrow();
        expect(() => { validateEmail("jane.doetest-email.net"); }).toThrow();
    });
    test('should throw error if user name does not contain at least two characters.', () => {
        expect(() => { validateEmail("i@example.com"); }).toThrow();
        expect(() => { validateEmail("s@company.co.uk"); }).toThrow();
        expect(() => { validateEmail("j@email.net"); }).toThrow();
    });
    test('should throw error if email address contain two consecutive dots', () => {
        expect(() => { validateEmail("jane..doe@test-email.net"); }).toThrow();
        expect(() => { validateEmail("support@company..co.uk"); }).toThrow();
        expect(() => { validateEmail("test.user@example..com"); }).toThrow();
    });
    test('should throw error if the domain name does not contain at least two characters.', () => {
        expect(() => { validateEmail("jane.doe@test-email.n"); }).toThrow();
        expect(() => { validateEmail("support@company.co.k"); }).toThrow();
        expect(() => { validateEmail("test.user@example.c"); }).toThrow();
    });
    test(`should throw error if the email provider's name does not contain at least one character.`, () => {
        expect(() => { validateEmail("@test-email.net"); }).toThrow();
        expect(() => { validateEmail("@company.co.uk"); }).toThrow();
        expect(() => { validateEmail("@example.com"); }).toThrow();
    });
    test('should throw error if the email address start with dot.', () => {
        expect(() => { validateEmail(".jane.doe@test-email.net"); }).toThrow();
        expect(() => { validateEmail(".support@company.co.uk"); }).toThrow();
        expect(() => { validateEmail(".test.user@example.com"); }).toThrow();
    });
    test('should throw error if the email address contains a dot right before the @ symbol.', () => {
        expect(() => { validateEmail("jane.doe.@test-email.net"); }).toThrow();
        expect(() => { validateEmail("support.@company.co.uk"); }).toThrow();
        expect(() => { validateEmail("test.user.@example.com"); }).toThrow();
    });
    test('should throw error if the email address does not contain a domain name or contains an invalid domain name.', () => {
        expect(() => { validateEmail(".jane.doe@test-email"); }).toThrow();
        expect(() => { validateEmail(".support@company"); }).toThrow();
        expect(() => { validateEmail(".test.user@examplecom"); }).toThrow();
    });
    test('should throw error if the email address contains unsupported characters.', () => {
        expect(() => { validateEmail("j?.ane.doe@test-email.net"); }).toThrow();
        expect(() => { validateEmail("#support@company.co.uk"); }).toThrow();
        expect(() => { validateEmail("test.[]\['@example.com"); }).toThrow();
    });
});