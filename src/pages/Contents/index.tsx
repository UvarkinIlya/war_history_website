import { useState } from 'react';
import { NavigationComponent } from '../../components/NavigationComponent';
import { Background, Chapter, ChapterContent, ChapterContentBlock } from './style';

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


    return(
        <div style={{...Background()}}>
            <div style={{height:'100%'}}>
                <NavigationComponent></NavigationComponent>
                <div style={{display: 'flex',height:'100%', padding:'125px 10% 125px 10%', flexDirection: 'column'}}>
                    <h2 style={{color:'white', fontSize: '48px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal'}}>Содержание</h2>
                    <div id='1' onMouseEnter={handleMouseEnterChapter} onMouseLeave={handleMouseLeaveChapter} style={{...Chapter(1, chousenChapter) }}>
                        <h2 style={{color:'#000', fontSize: '35px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal', margin:'44px'}}>ВОЕННОЕ ИСКУССТВО РАБОВЛАДЕЛЬЧЕСКОГО ОБЩЕСТВА (VI В. ДО Н.Э. - V В. Н.Э.)</h2>
                        <div style={{...ChapterContentBlock(1, chousenChapter, opacityCondition)}}>
                            <div style={{...ChapterContent()}}>
                                <svg style={{position:'relative', height:'5px'}} stroke='black' stroke-width='3'>
                                    <path d='M0 0 L 500 0 '></path>
                                </svg>
                                <p style={{fontSize:'24px'}}>1.1. ВОЗНИКНОВЕНИЕ ВОЕННОГО ИСКУССТВА РАБОВЛАДЕЛЬЧЕСКОГО ОБЩЕСТВА ( VI - V ВВ.)</p>
                                <p style={{fontSize:'24px'}}>1.2. ОСОБЕННОСТИ ВОЕННОГО ИСКУССТВА ДРЕВНЕЙ ГРЕЦИИИ И ДРЕВНЕГО РИМА</p>
                                <p style={{fontSize:'24px'}}>1.3. (СЕМИНАР №1) ОСНОВНЫЕ ЧЕРТЫ ВОЕННОГО ИСКУССТВА РАБОВЛАДЕЛЬЧЕСКОГО ОБЩЕСТВА</p>
                            </div>
                        </div>
                    </div>
                    <div id='2' onMouseEnter={handleMouseEnterChapter} onMouseLeave={handleMouseLeaveChapter} style={{...Chapter(2, chousenChapter)}}>
                        <h2 style={{color:'#000', fontSize: '40px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal', margin:'44px'}}>ВОЕННОЕ ИСКУССТВО ФЕОДАЛЬНОГО ОБЩЕСТВА ( IХ - ХVII ВВ.)</h2>
                        <div style={{...ChapterContentBlock(2, chousenChapter, opacityCondition)}}>
                            <div style={{...ChapterContent()}}>
                                <svg style={{position:'relative', height:'5px'}} stroke='black' stroke-width='3'>
                                    <path d='M0 0 L 500 0 '></path>
                                </svg>
                                <p style={{fontSize:'24px'}}>2.1. ОСНОВЫ ВОЕННОГО ИСКУССТВА IХ - ХIV ВВ.</p>
                                <p style={{fontSize:'24px'}}>2.2. ОБЩАЯ ХАРАКТЕРИСТИКА РУССКОГО ВОЕННОГО ИСКУССТВА В ХV - ХVII ВВ.</p>
                                <p style={{fontSize:'24px'}}>2.3. (СЕМИНАР №2) ОСНОВНЫЕ ЧЕРТЫ ВОЕННОГО ИСКУССТВА В ПЕРИОД ОБРАЗОВАНИЯ И УКРЕПЛЕНИЯ РУССКОГО ЦЕНТРАЛИЗОВАННОГО ГОСУДАРСТВА И В БОРЬБЕ ПРОТИВ ИНОЗЕМНЫХ ЗАХВАТЧИКОВ</p>
                            </div>
                        </div>
                    </div>
                    <div id='3' onMouseEnter={handleMouseEnterChapter} onMouseLeave={handleMouseLeaveChapter} style={{...Chapter(3, chousenChapter)}}>
                    <h2 style={{color:'#000', fontSize: '40px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal', margin:'44px'}}>ВОЕННОЕ ИСКУССТВО ФЕОДАЛЬНОГО ОБЩЕСТВА ( IХ - ХVII ВВ.)</h2>
                        <div style={{...ChapterContentBlock(3, chousenChapter, opacityCondition)}}>
                            <div style={{...ChapterContent()}}>
                                <svg style={{position:'relative', height:'5px'}} stroke='black' stroke-width='3'>
                                    <path d='M0 0 L 500 0 '></path>
                                </svg>
                                <p style={{fontSize:'24px'}}>2.1. ОСНОВЫ ВОЕННОГО ИСКУССТВА IХ - ХIV ВВ.</p>
                                <p style={{fontSize:'24px'}}>2.2. ОБЩАЯ ХАРАКТЕРИСТИКА РУССКОГО ВОЕННОГО ИСКУССТВА В ХV - ХVII ВВ.</p>
                                <p style={{fontSize:'24px'}}>2.3. (СЕМИНАР №2) ОСНОВНЫЕ ЧЕРТЫ ВОЕННОГО ИСКУССТВА В ПЕРИОД ОБРАЗОВАНИЯ И УКРЕПЛЕНИЯ РУССКОГО ЦЕНТРАЛИЗОВАННОГО ГОСУДАРСТВА И В БОРЬБЕ ПРОТИВ ИНОЗЕМНЫХ ЗАХВАТЧИКОВ</p>
                            </div>
                        </div>
                    </div>
                    <div id='4' onMouseEnter={handleMouseEnterChapter} onMouseLeave={handleMouseLeaveChapter} style={{...Chapter(4, chousenChapter)}}>
                    <h2 style={{color:'#000', fontSize: '40px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal', margin:'44px'}}>ВОЕННОЕ ИСКУССТВО ФЕОДАЛЬНОГО ОБЩЕСТВА ( IХ - ХVII ВВ.)</h2>
                        <div style={{...ChapterContentBlock(4, chousenChapter, opacityCondition)}}>
                            <div style={{...ChapterContent()}}>
                                <svg style={{position:'relative', height:'5px'}} stroke='black' stroke-width='3'>
                                    <path d='M0 0 L 500 0 '></path>
                                </svg>
                                <p style={{fontSize:'24px'}}>2.1. ОСНОВЫ ВОЕННОГО ИСКУССТВА IХ - ХIV ВВ.</p>
                                <p style={{fontSize:'24px'}}>2.2. ОБЩАЯ ХАРАКТЕРИСТИКА РУССКОГО ВОЕННОГО ИСКУССТВА В ХV - ХVII ВВ.</p>
                                <p style={{fontSize:'24px'}}>2.3. (СЕМИНАР №2) ОСНОВНЫЕ ЧЕРТЫ ВОЕННОГО ИСКУССТВА В ПЕРИОД ОБРАЗОВАНИЯ И УКРЕПЛЕНИЯ РУССКОГО ЦЕНТРАЛИЗОВАННОГО ГОСУДАРСТВА И В БОРЬБЕ ПРОТИВ ИНОЗЕМНЫХ ЗАХВАТЧИКОВ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contents