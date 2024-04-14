import {getParams} from "./common";

export interface SchemaBackend {
    id: string
    img: string
    name: string
    shortAbout: string
}

export function getSchemas(page:number, size:number, name:string = ""):Array<SchemaBackend> {
    const url = new URL('http://localhost:8080/api/schemas/search')
    url.search = getParams(page, size, name)

    const request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()

    if (request.status !== 200) {
        throw new Error('Failed get contents')
    }

    return JSON.parse(request.responseText).content
}