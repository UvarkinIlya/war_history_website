export function Background() {
    return({
        backgroundColor: '#00150B',
        fontFamily: 'Fortuna',
    })
}

export function Video(VideoId:number, chousenVideo:number) {
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

export function VideoContentBlock(VideoId:number, chousenVideo:number, opacityCondition:boolean, isPlaying: boolean) {
    return({
        transition: '.9s cubic-bezier(.3, 0, 0, 1.3)',
        overflow: 'hidden',
        maxHeight: chousenVideo === VideoId || isPlaying  ? '1000px':'0',
        padding: chousenVideo === VideoId || isPlaying  ? '0 44px 44px  44px' : '0',
        opacity: (chousenVideo === VideoId && opacityCondition) || isPlaying ? '1' : '0'
    } as const)
}