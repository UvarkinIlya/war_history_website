import {getParams} from "./common";

export interface GlossaryBackend {
    id: string
    group: string
    name: string
    shortAbout: string
    fullAbout: string
}

//TODO fix 2 requests
export function getGlossary (page:number, size:number, name:string = "", group:string = ""):Array<GlossaryBackend> {
    const url = new URL('http://localhost:8080/api/glossary/search')
    url.search = getParams(page, size, name, group)

    const request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()

    if (request.status !== 200) {
        throw new Error('Failed get glossary')
    }

    const glossary = JSON.parse(request.responseText).content
    localStorage.setItem("glossary", JSON.stringify(glossary))
    return glossary
}