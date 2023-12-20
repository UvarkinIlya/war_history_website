import ReactPlayer from 'react-player/lazy'

import { useState } from "react";
import { NavigationComponent } from "../../components/NavigationComponent";
import {Background, Video, VideoContentBlock} from "./style";

const Videos = () => {
    const [chousenVideo, setChousenVideo] = useState(0)
    const [opacityCondition, setOpacityCondition] = useState(false)
    const isVideoPlaying = [false, false, false]

    const handleMouseEnterVideo = (event:React.MouseEvent<HTMLDivElement>) => {
        setChousenVideo(Number(event.currentTarget.id));
        setTimeout(()=>{setOpacityCondition(true)}, 200)
    }

    function handleMouseLeaveVideo(event:React.MouseEvent<HTMLDivElement>){
        setChousenVideo(-1);
        setOpacityCondition(false)
    }

    return(
        <div style={{...Background()}}>
            <NavigationComponent></NavigationComponent>
            <div style={{display: 'flex',height:'100%', padding:'125px 10% 125px 10%', flexDirection: 'column'}}>
                <h2 style={{color:'white', fontSize: '48px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal'}}>Видео</h2>
                <div id='1' onMouseEnter={handleMouseEnterVideo} onMouseLeave={handleMouseLeaveVideo} style={{...Video(1, chousenVideo) }}>
                    <h2 style={{color:'#000', fontSize: '35px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal', margin:'44px'}}>Оружие Победы Щит и меч Красной Армии 1 серия "Битва за Москву"</h2>
                    <div>
                        <div style={{...VideoContentBlock(1, 1, true, isVideoPlaying[1])}}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/OBv1QHSpoa4?si=RQX9RZrjak1spTk8&amp;start=280&rel=0"
                                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
                <div id='2' onMouseEnter={handleMouseEnterVideo} onMouseLeave={handleMouseLeaveVideo} style={{...Video(2, chousenVideo) }}>
                    <h2 style={{color:'#000', fontSize: '35px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal', margin:'44px'}}>Оружие Победы Щит и меч Красной армии 02 "У стен Сталинграда"</h2>
                    <div>
                        <div style={{...VideoContentBlock(2, 2, true, isVideoPlaying[2])}}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZYFo5nIl39A?si=FjI_U-Jcp96B246U&amp;start=510&rel=0"
                                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
                <div id='3' onMouseEnter={handleMouseEnterVideo} onMouseLeave={handleMouseLeaveVideo} style={{...Video(3, chousenVideo) }}>
                    <h2 style={{color:'#000', fontSize: '35px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal', margin:'44px'}}>Оружие Победы Щит и меч Красной Армии 3 серия "Крушение «Цитадели»"</h2>
                    <div>
                        <div style={{...VideoContentBlock(3, 3, true, isVideoPlaying[3])}}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/MuUBEY_Ct-w?si=E6y3zf6hGOplyO6a&amp;start=133&rel=0"
                                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Videos