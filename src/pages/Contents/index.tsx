import { useState } from 'react';
import { NavigationComponent } from '../../components/NavigationComponent';
import { Background } from './style';
import {getChapters } from "../../backend/contents";
import {GlossaryGenerator } from "../../components/ChapterGenerator/chapterGenerator";

const Contents = () => {
    const [chousenChapter, setChousenChapter] = useState(-1);
    const [opacityCondition, setOpacityCondition] = useState(false)

    const handleMouseEnterChapter = (event:React.MouseEvent<HTMLDivElement>) => {
        setChousenChapter(Number(event.currentTarget.id));
        setTimeout(()=>{setOpacityCondition(true)}, 300)
    }

    function handleMouseLeaveChapter(event:React.MouseEvent<HTMLDivElement>){
        setChousenChapter(-1);
        setOpacityCondition(false)
    }

    const chapters = getChapters(0, 1000)

    return(
        <div style={{...Background()}}>
            <div style={{height:'100%'}}>
                <NavigationComponent></NavigationComponent>
                <div style={{display: 'flex',height:'100%', padding:'125px 10% 125px 10%', flexDirection: 'column'}}>
                    <h2 style={{color:'white', fontSize: '48px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal'}}>Содержание</h2>
                    <GlossaryGenerator opacityCondition={opacityCondition}
                                       chousenChapter={chousenChapter}
                                       handleMouseEnterChapter={handleMouseEnterChapter}
                                       handleMouseLeaveChapter={handleMouseLeaveChapter}
                                       chapters={chapters}></GlossaryGenerator>
               </div>
            </div>
        </div>
    )
}

export default Contents