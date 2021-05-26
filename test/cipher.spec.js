// [Español]
// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
//
// [Português]
// Importamos o objeto `cipher`, que contém os métodos `encode` e `decode`

import cipher from '../src/cipher';

var texto2 = "Hola";
describe('cipher', () => {

    it('should be an object', () => {
        expect(typeof cipher).toBe('object');
    });

    describe('cipher.encode', () => {

        it('should be a function', () => {
            expect(typeof cipher.encode).toBe('function');
        });

        it('should throw TypeError when invoked with wrong argument types', () => {
            expect(() => cipher.encode('HOLA',33)).toThrow(TypeError);
            expect(() => cipher.encode('HOLA',33)).toThrow(TypeError);
            expect(() => cipher.encode('HOLA',33)).toThrow(TypeError);
            expect(() => cipher.encode('HOLA',33)).toThrow(TypeError);
        });

        it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
            expect(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ' , 33)).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
        });
    });

    describe('cipher.decode', () => {

        it('should be a function', () => {
            expect(typeof cipher.decode).toBe('function');
        });

        it('should throw TypeError when invoked with wrong argument types', () => {
            expect(() => cipher.decode('HOLA',33)).toThrow(TypeError);
            expect(() => cipher.decode('HOLA',33)).toThrow(TypeError);
            expect(() => cipher.decode('HOLA',33)).toThrow(TypeError);
            expect(() => cipher.decode('HOLA',33)).toThrow(TypeError);
        });

        it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
            expect(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        });
    });

});