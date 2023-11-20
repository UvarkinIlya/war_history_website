import { useState } from "react";
import { NavigationComponent } from "../../components/NavigationComponent";
import { Background, Test, TestContentBlock } from "./style";

const Tests = () => {
    const [chousenTest, setChousenTest] = useState(0)
    const [opacityCondition, setOpacityCondition] = useState(false)

    const handleMouseEnterChapter = (event:React.MouseEvent<HTMLDivElement>) => {
        setChousenTest(Number(event.currentTarget.id));
        setTimeout(()=>{setOpacityCondition(true)}, 300)
    }

    function handleMouseLeaveChapter(event:React.MouseEvent<HTMLDivElement>){
        setChousenTest(-1);
        setOpacityCondition(false)
    }


    return(
        <div style={{...Background()}}>
            <NavigationComponent></NavigationComponent>
            <div style={{display: 'flex',height:'100%', padding:'125px 10% 125px 10%', flexDirection: 'column'}}>
                <h2 style={{color:'white', fontSize: '48px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal'}}>Тесты</h2>
                <div id='1' style={{...Test()}}  onMouseEnter={handleMouseEnterChapter} onMouseLeave={handleMouseLeaveChapter}>
                    <h3 style={{color:'#000', fontSize: '34px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal', margin:'40px'}}>Контрольная работа</h3>
                    <div style={{...TestContentBlock(1, chousenTest, opacityCondition)}}>
                        <svg style={{position:'relative', height:'5px'}} stroke='black' stroke-width='3'>
                            <path d='M0 0 L 500 0 '></path>
                        </svg>
                        <p>Тема: -</p>
                        <p>Результат: -</p>
                        <p>Количество вопросов: 10</p>
                        <div style={{display:'flex'}}>
                            <button>Приступить к тесту</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tests