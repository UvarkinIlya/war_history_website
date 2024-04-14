export function Background() {
    return({
        backgroundColor: '#00150B',
        fontFamily: 'Fortuna',
        height: '100%',
        width: '100wv',
    })
}

export function Chapter(chapterId:number, chousenChapter:number) {
    return({
        width: '100%',
        backgroundColor:'#D2AE84', 
        borderRadius:'30px', 
        display:'flex', 
        alignItems:'flex-start',
        flexDirection:'column',
        marginTop:'10px'
    } as const)
}

export function ChapterContent() {
    return({ 
        display: 'flex',
        alignItems:'flex-start',
        flexDirection: 'column',
    } as const)
}

export function ChapterContentBlock(chapterId:number, chousenChapter:number, opacityCondition:boolean) {
    return({ 
        transition: '.9s cubic-bezier(.3, 0, 0, 1.3)',
        overflow: 'hidden',
        maxHeight: chousenChapter === chapterId ? '1000px':'0',
        padding: chousenChapter === chapterId ? '0 44px 44px  44px' : '0', 
        opacity: chousenChapter === chapterId && opacityCondition ? '1' : '0'
    } as const)
}




