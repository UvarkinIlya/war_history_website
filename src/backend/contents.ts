export interface ChapterBackend {
    id: string
    img: string
    name: string
    shortAbout: string
}

let savedChapters:Array<ChapterBackend> = []

export function getChapters(page:number, size:number):Array<ChapterBackend> {
    if (savedChapters.length !== 0){
        return savedChapters
    } else{
        const request = new XMLHttpRequest()
        request.open('GET', `http://localhost:8080/api/schemas/search?page=${page}&size=${size}`, false)
        request.send()

        if (request.status !== 200) {
            throw new Error('Failed get contents')
        }

        savedChapters = JSON.parse(request.responseText).content
        return savedChapters
    }
}