export function getParams(page:number, size:number, name:string = "", group:string = ""):string{
    const params = new URLSearchParams()
    params.set("page", page.toString())
    params.set("size", size.toString())
    if (group !== ""){
        params.set("group", group)
    }
    if (name !== ""){
        params.set("name", name)
    }
    return  params.toString()
}