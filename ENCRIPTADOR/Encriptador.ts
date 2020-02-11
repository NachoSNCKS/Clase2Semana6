import {Md5} from 'ts-md5/dist/md5';

const SALT = "@@@###"

export class Encriptador
{
    encrypt(password:string)
    {
        return Md5.hashStr(SALT + password)
    }
}

let main = () => {
    let encrip = new Encriptador()
    console.log(encrip.encrypt("1234"))
}

main()