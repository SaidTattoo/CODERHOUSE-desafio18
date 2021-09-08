const { suma, resta, multiplicacion, division, validNumber } = require('../index')
describe("CODERHOUSE CALCULADORA ", () => {

    describe("validar Numero", () => {
        it("valida el tipo de numeros", () => {
            const ValueReturn = validNumber(1) 
            expect(ValueReturn).toBe(1)
        })
    })
    describe("validar Numero", () => {
        it("valida el tipo de numeros si se ingresa una letra este retorna 0", () => {
            const ValueReturn = validNumber('t') 
            expect(ValueReturn).toBe(0)
        })
    })

    describe("Suma", () => {
        it('Deberia devolver la suma de 4 + 2', () => {
            const valueReturn = suma(4, 2)
            expect(valueReturn).toBe(6)
        })
    })

    describe("Suma", () => {
        it('Deberia devolver la suma de 4 + "x" se espera que la letra se transforme en 0 ', () => {
            const valueReturn = suma(4, 'x')
            expect(valueReturn).toBe(4)
        })
    })

    describe("Suma", () => {
        it('Deberia devolver la suma de "2" + 2', () => {
            const valueReturn = suma("2", 2)
            expect(valueReturn).toBe(4)
        })
    })
    describe("Suma", () => {
        it('Deberia devolver la suma de 2 + 2', () => {
            const valueReturn = suma(2, 2)
            expect(valueReturn).toBe(4)
        })
    })

    describe("Resta", () => {
        it('Deberia devolver la resta de 2 - 2', () => {
            const valueReturn = resta(2, 2)
            expect(valueReturn).toBe(0)
        })
    })
    describe("Resta", () => {
        it('Deberia devolver la resta de 8 - 6', () => {
            const valueReturn = resta(8, 6)
            expect(valueReturn).toBe(2)
        })
    })

    describe("Multiplicacion", () => {
        it('Deberia devolver la Multiplicacion de 2 * 2', () => {
            const valueReturn = multiplicacion(2, 2)
            expect(valueReturn).toBe(4)
        })
    })
    describe("Multiplicacion", () => {
        it('Deberia devolver la Multiplicacion de 5 * 4', () => {
            const valueReturn = multiplicacion(5, 4)
            expect(valueReturn).toBe(20)
        })
    })

    describe("Division", () => {
        it('Deberia devolver la division de 2 / 2', () => {
            const valueReturn = division(2, 2)
            expect(valueReturn).toBe(1)
        })
    })
    describe("Division", () => {
        it('Deberia devolver la division de 9 / 3', () => {
            const valueReturn = division(9, 3)
            expect(valueReturn).toBe(3)
        })
    })
})