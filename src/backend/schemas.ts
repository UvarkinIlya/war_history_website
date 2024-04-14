export interface SchemaBackend {
    id: string
    img: string
    name: string
    shortAbout: string
}

export function getSchemas(page:number, size:number, name:string = ""):Array<SchemaBackend> {
    const url = new URL('http://localhost:8080/api/schemas/search')
    const params = new URLSearchParams()

    params.set("page", page.toString())
    params.set("size", size.toString())
    if (name !== ""){
        params.set("name", name)
    }
    url.search = params.toString()

    const request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()

    if (request.status !== 200) {
        throw new Error('Failed get contents')
    }

    return JSON.parse(request.responseText).content
}