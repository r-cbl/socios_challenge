import { SocioType } from '../types/SocioType'
import { Socio } from "../domain/Socio";
import axios from 'axios';
import {CrearSocioType} from "../types/CrearSocioType";


export class SocioApi {

    async getSocios(): Promise<Array <Socio>> {
        const socios =  await axios.get(process.env.REACT_APP_SOCIOS_API+'/socios/')
        return socios.data.map( (socio: any) => {
            return this.mapSocio(socio)
        })
    }

    async getSocioByID (id: string): Promise<Socio> {
        const socio =  await axios.get(process.env.REACT_APP_SOCIOS_API+'/socios/'+id)
        const socioMapped = this.mapSocio(socio.data)
        return socioMapped
    }

    async getSocioByGba (gba: boolean ): Promise<Array <Socio>> {
        const socios = await axios.get(process.env.REACT_APP_SOCIOS_API+'/socios/?gba='+gba)
        return socios.data.map( (socio: any) => {
            return this.mapSocio(socio)
        })
    }

    async deleteSocioByID (id: string): Promise<number> {
        const socio =  await axios.delete(process.env.REACT_APP_SOCIOS_API+'/socios/'+id)
        return socio.status
    }

    async putSocio(id: string, data: Socio): Promise<number> {
        const body = this.mapNuevoSocioType(data)
        const respuesta =  await axios.put(process.env.REACT_APP_SOCIOS_API+'/socios/'+id, body)
        return respuesta.status
    }

    async postSocio(data: Socio): Promise<Socio> {
        const body = this.mapNuevoSocioType(data)
        const socio =  await axios.post(process.env.REACT_APP_SOCIOS_API+'/socios/', body)
        const socioMapped = this.mapSocio(socio.data)
        return socioMapped
    }

    private mapSocio(socio: SocioType):Socio {
        const socioObj = new Socio();
        socioObj.setSocio(socio)
        return  socioObj
    }

    private mapNuevoSocioType(socio: Socio): CrearSocioType {
        return {
            dni: socio.dni,
            nombre: socio.nombre,
            apellido: socio.apellido,
            gba: socio.gba
        }
    }



}


