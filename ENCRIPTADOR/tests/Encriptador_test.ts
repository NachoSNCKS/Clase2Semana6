import {Encriptador} from "../ENCRIPTADOR"
//Asi se empiezan las pruebas
describe("ESC1", () => {
    it("Comprobacion password", () => {
        let cad = ""
        let encrip = new Encriptador()
        let resEsperado = "c60580980424b7112df8d5b652b977f3"

        let encontrado : boolean = false 
        
        //Logica de busqueda bruta

        //Primero recorremos todas las opciones que puede tomar un caracter
        for(let i = 48; i < 123; i++){
            for(let j = 48; j < 123; j++){
                for(let k = 48; k < 123; k++){
                    for(let l = 48; l < 123; l++){
                        cad += String.fromCharCode(i)
                        cad += String.fromCharCode(j)
                        cad += String.fromCharCode(k)
                        cad += String.fromCharCode(l)

                        let resObtenido = new String(encrip.encrypt(cad))
                        //Linea que hace la prueba
                        //expect(resEsperado).toEqual(resObtenido)
                        if(resEsperado == resObtenido){
                            encontrado = true
                            break;
                        }else{
                            cad = ""
                        }
                    }
                    if (encontrado) break
                }
                if (encontrado) break
            }
            if(encontrado) break    
        }
        //Linea que hace la prueba 2.1
        expect(encontrado).toEqual(true)
    })
})