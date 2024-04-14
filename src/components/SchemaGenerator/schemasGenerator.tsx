import React from "react";
import {SchemaBackend} from "../../backend/schemas";
import {Schemas} from "../../pages/Schemas/schemas";
import {Chapter as ChapterStyle} from "../../pages/Schemas/style";

type glossaryGeneratorProp = {
    opacityCondition: boolean
    chousenChapter: number
    handleMouseEnterChapter: any
    handleMouseLeaveChapter: any
    chapters: Array<SchemaBackend>
}

export const SchemesGenerator = (props:glossaryGeneratorProp) => {
    const chapters = props.chapters.map((chapter, index) => {
        return (
            <div id={index.toString()} onMouseEnter={props.handleMouseEnterChapter} onMouseLeave={props.handleMouseLeaveChapter}
                 style={{...ChapterStyle(index, props.chousenChapter)}}>
                    <Schemas opacityCondition={props.opacityCondition}
                             chousenChapter={props.chousenChapter}
                             chapterId={index}
                             chapterName={chapter.name}
                             chapterContent={chapter.shortAbout}
                    ></Schemas>
            </div>
        )
    })

    return (
        <>
            {chapters}
        </>
    )
}