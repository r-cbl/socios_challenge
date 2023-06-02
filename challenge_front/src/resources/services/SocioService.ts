import { Socio } from '../domain/Socio'
import { SocioApi } from './SocioApi'


export class SocioService {
    static async getSocios ():Promise<Array<Socio>> {
        const socioApi = new SocioApi()
        return (await socioApi.getSocios()).map( (singleSocio)=>{
            const socio = new Socio()
            socio.setSocio(singleSocio)
            return socio
        })
    }

    static async getSocio (socioId: string): Promise<Socio> {
        const socioApi = new SocioApi()
        const response = await socioApi.getSocioByID(socioId)
        return response
    }

    static async getSociosByGba (gba:boolean): Promise<Array<Socio>> {
        const socioApi = new SocioApi()
        return (await socioApi.getSocioByGba(gba)).map( (singleSocio)=>{
            const socio = new Socio()
            socio.setSocio(singleSocio)
            return socio
        })
    }

    static async deleteSocio (socioId: string): Promise <number>  {
        const socioApi = new SocioApi()
        const response = await socioApi.deleteSocioByID(socioId)
        return response
    }

    static async putSocio(id: string, socio: Socio) : Promise<number>{
        const socioApi = new SocioApi()
        return  await socioApi.putSocio(id, socio)

    }

    static async postSocio(socio: Socio):Promise<Socio>{
        const socioApi = new SocioApi()
        return  await socioApi.postSocio(socio)

    }

}
