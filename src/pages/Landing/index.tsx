import {NavigationComponent} from '../../components/NavigationComponent'
import LOGO from './logo.svg';
import IMG1 from './original.jpg';
import IMG2 from './d555e3de17dc9b6e51323dc44f3ed04c.jpg'
import IMG3 from './7ed2e783bc54854cc158c70e7a7d1c6b.jpg'
import {Background, First_block, First_img, Header, Logo_text_block, Second_block, Second_block_text, Second_img, Third_img} from './style';


const Landing = () => {
    return(
        <div style={{...Background()}}>
            <img style={{...Third_img()}} alt='Вторая мировая' src={IMG3}></img>
            <img style={{...First_img()}} alt='Ледовое побоище' src={IMG1}></img>
            <img style={{...Second_img()}} alt='Наполеон в Москве' src={IMG2}></img>
           <NavigationComponent></NavigationComponent>
            <div style={{...First_block()}}>
                <img style={{width:'13vw'}} src={LOGO}></img>
                <div style={{...Logo_text_block()}}>
                    <p style={{margin:'0'}}>ВОЕННАЯ</p>
                    <p style={{margin:'0'}}>ИСТОРИЯ</p>
                </div>
                
            </div>
            
            <div style={{...Second_block()}}>
                <div style={{...Second_block_text()}}>
                    <p style={{...Header()}}>Содержание курса</p>
                    <p>Данный курс направлен на раcширение знаний в области военной истории и закрепления их посредством различных материалов исторической хроники и тестов по ним.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Landing