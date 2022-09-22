import {Status} from './status.enum'
export class Contact{
    name=''
    surname=''
    email=''
    connected=Status.OFFLINE

    constructor(name, surname,email,connected)
    {
        this.name=name
        this.surname=surname
        this.email=email
        this.connected=connected
    }
}