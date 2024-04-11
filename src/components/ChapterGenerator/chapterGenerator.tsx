import React from "react";
import {ChapterBackend} from "../../backend/contents";
import {Chapter} from "../../pages/Contents/chapter";
import {Chapter as ChapterStyle} from "../../pages/Contents/style";

type glossaryGeneratorProp = {
    opacityCondition: boolean
    chousenChapter: number
    handleMouseEnterChapter: any
    handleMouseLeaveChapter: any
    chapters: Array<ChapterBackend>
}

export const GlossaryGenerator = (props:glossaryGeneratorProp) => {
    const chapters = props.chapters.map((chapter, index) => {
        return (
            <div id={index.toString()} onMouseEnter={props.handleMouseEnterChapter} onMouseLeave={props.handleMouseLeaveChapter}
                 style={{...ChapterStyle(index, props.chousenChapter)}}>
                    <Chapter opacityCondition={props.opacityCondition}
                                 chousenChapter={props.chousenChapter}
                                 chapterId={index}
                                 chapterName={chapter.name}
                                 chapterContent={chapter.shortAbout}
                                 chapterImg={chapter.img}
                    ></Chapter>
            </div>
        )
    })

    return (
        <>
            {chapters}
        </>
    )
}