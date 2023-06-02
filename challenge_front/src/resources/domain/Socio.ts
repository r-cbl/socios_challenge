import { SocioType } from '../types/SocioType'

export class Socio {
    id: string
    dni: string
    nombre: string
    apellido: string
    gba: boolean
    
    constructor(dni: string ='', nombre: string = '', apellido: string = '', gba: boolean = false, id: string ='') {
        this.id = id
        this.dni = dni
        this.nombre = nombre
        this.apellido = apellido
        this.gba = gba
    }

    setSocio(socio: SocioType) {
        this.id = socio.id
        this.dni = socio.dni
        this.nombre = socio.nombre
        this.apellido = socio.apellido
        this.gba = socio.gba
    }
}
