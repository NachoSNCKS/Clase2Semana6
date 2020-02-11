import {LNC} from "../src/lnc"

describe("ESC1 lncToDecimal", () => {
    it("3 difgitos", () =>{
        let valorEntrada = 719
        let resEsperado = 53

        let lnc = new LNC()
        let resObtenido = lnc.lnctoDecimal(valorEntrada)

        expect(resEsperado).toEqual(resObtenido)
    })
    it("0 difgitos", () =>{
        let valorEntrada = 0
        let resEsperado = 0

        let lnc = new LNC()
        let resObtenido = lnc.lnctoDecimal(valorEntrada)

        expect(resEsperado).toEqual(resObtenido)
    })
    it("1 difgitos", () =>{
        let valorEntrada = 7
        let resEsperado = 7

        let lnc = new LNC()
        let resObtenido = lnc.lnctoDecimal(valorEntrada)

        expect(resEsperado).toEqual(resObtenido)
    })
    it("5 difgitos", () =>{
        let valorEntrada = 10345
        let resEsperado = 151

        let lnc = new LNC()
        let resObtenido = lnc.lnctoDecimal(valorEntrada)

        expect(resEsperado).toEqual(resObtenido)
    })
})