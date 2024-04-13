export interface GlossaryBackend {
    id: string
    group: string
    name: string
    shortAbout: string
    fullAbout: string
}

//TODO fix 2 requests
export function getGlossary (page:number, size:number, name:string = "", group:string = ""):Array<GlossaryBackend> {
    console.log("get glossary")
    // const savedGlossaryStorage = localStorage.getItem("glossary")
    // if (savedGlossaryStorage != null){
    //     return JSON.parse(localStorage.getItem("glossary") || "{}")
    // }

    const url = new URL('http://localhost:8080/api/glossary/search');
    const params = new URLSearchParams();
    params.set("page", page.toString())
    params.set("size", size.toString())
    if (group !== ""){
        params.set("group", group)
    }
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

    const glossary = JSON.parse(request.responseText).content
    localStorage.setItem("glossary", JSON.stringify(glossary))
    return glossary
}