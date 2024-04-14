import {ChapterContent, ChapterContentBlock} from "./style";

type chapterProp = {
    opacityCondition: boolean
    chousenChapter: number
    chapterId:number
    chapterName: string
    chapterContent: string
}

export const Schemas = (props:chapterProp) => {
    return (
        <div>
            <h2 style={{
                color: '#000',
                fontSize: '35px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
                margin: '44px'
            }}>{props.chapterName}</h2>
            <div style={{...ChapterContentBlock(props.chapterId, props.chousenChapter, props.opacityCondition)}}>
                <div style={{...ChapterContent()}}>
                    <svg style={{position: 'relative', height: '5px'}} stroke='black' stroke-width='3'>
                        <path d='M0 0 L 500 0 '></path>
                    </svg>
                    <p style={{fontSize: '24px'}}>{props.chapterContent}</p>
                    <img src={`http://localhost:8080/api/schemas/image/${props.chapterId}`}></img>
                </div>
            </div>
        </div>
    )
}