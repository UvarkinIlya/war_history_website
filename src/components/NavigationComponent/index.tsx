import { Link } from 'react-router-dom';
import {windowServices} from '../../modules/windowModules/windowModules';
import './style.css';

export const NavigationComponent = () => {
    const { height, width } = windowServices.useWindowDimensions();
    return(
        <>
        <svg xmlns="http://www.w3.org/2000/svg" style={{position:'fixed'}} width={width} height={10} viewBox={'0 0 '+String(width)+' 10'} fill="none" >
            <path d={`M0 0 H ${String(width)} V 10  H ${String(-width)} V -10   Z `} fillRule="evenodd" fill="#D2AE84"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" style={{left: width -10, position:'fixed'}} width={10} height={height} viewBox={'0 0 20'+String(height)} fill="none" >
            <path d={"M0 0" + " H 10"  + " V" + String(height) + " H -10"  + " Z " } fillRule="evenodd" fill="#D2AE84"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" style={{top: height - 10, position:'fixed'}} width={width} height={10} viewBox={'0 0 '+String(width)+' 10'} fill="none" >
            <path d={"M0 0 H" + String(width) + " V 10"  + " H" + String(-width) + " V -10"  + " Z " } fillRule="evenodd" fill="#D2AE84"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" style={{position:'fixed'}} width={10} height={height} viewBox={'0 0 10'+String(height)} fill="none" >
            <path d={"M0 0 H 10 V " + String(height)  + " H -10 V "+ String(-height)  + " Z " } fillRule="evenodd" fill="#D2AE84"/>
        </svg>
        <Link to="/contents">
            <svg xmlns="http://www.w3.org/2000/svg" style={{left: 125, top: 10}} width={190} height={50} viewBox={'0 0 190 50'} fill="none" >
                <path d={"M0 0 L 25 50 H165 L 190 0  z " } fillRule="evenodd" fill="#D2AE84"/>
                <text x="51" y="30" fill='#000' style={{textAlign: 'center', fontFamily: 'Fortuna', fontSize: '16px',fontStyle: 'normal',fontWeight: '400',lineHeight: 'normal'}}>Содержание</text>
            </svg>
        </Link>
        <Link to="/glossary">
        <svg xmlns="http://www.w3.org/2000/svg" style={{left: 315, top: 10}} width={190} height={50} viewBox={'0 0 190 50'} fill="none" >
            <path d={"M0 0 L 25 50 H165 L 190 0  z " } fillRule="evenodd" fill="#D2AE84"/>
            <text x="59" y="30" fill='#000' style={{textAlign: 'center', fontFamily: 'Fortuna', fontSize: '16px',fontStyle: 'normal',fontWeight: '400',lineHeight: 'normal'}}>Глоссарий</text>
        </svg>
        </Link>
        <Link to="/tests">
        <svg xmlns="http://www.w3.org/2000/svg" style={{left: 505, top: 10}} width={190} height={50} viewBox={'0 0 190 50'} fill="none" >
            <path d={"M0 0 L 25 50 H165 L 190 0  z " } fillRule="evenodd" fill="#D2AE84"/>
            <text x="76" y="30" fill='#000' style={{textAlign: 'center', fontFamily: 'Fortuna', fontSize: '16px',fontStyle: 'normal',fontWeight: '400',lineHeight: 'normal'}}>Тесты</text>
        </svg>
        </Link>
        
        <svg xmlns="http://www.w3.org/2000/svg" style={{left: 695, top: 10}} width={190} height={50} viewBox={'0 0 190 50'} fill="none" >
            <path d={"M0 0 L 25 50 H165 L 190 0  z " } fillRule="evenodd" fill="#D2AE84"/>
            <text x="74" y="30" fill='#000' style={{textAlign: 'center', fontFamily: 'Fortuna', fontSize: '16px',fontStyle: 'normal',fontWeight: '400',lineHeight: 'normal'}}>Видео</text>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" style={{left: 885, top: 10}} width={190} height={50} viewBox={'0 0 190 50'} fill="none" >
            <path d={"M0 0 L 25 50 H165 L 190 0  z " } fillRule="evenodd" fill="#D2AE84"/>
            <text x="58" y="30" fill='#000' style={{textAlign: 'center', fontFamily: 'Fortuna', fontSize: '16px',fontStyle: 'normal',fontWeight: '400',lineHeight: 'normal'}}>Аннотации</text>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox={'0 0 20 20'} fill="none" >
            <path d={"M 10 20 C 0 0 10 10 20 10 " } fillRule="evenodd"/>
        </svg>
        </>
    );
}  