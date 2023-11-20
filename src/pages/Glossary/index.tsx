import { useState } from "react"
import { NavigationComponent } from "../../components/NavigationComponent"
import { Background } from "./style"
import glos from "./testGlossary.json"
import { GlossaryGenerator, GlossarySearchGenerator } from "../../components/GlossaryGenerator"

const Glossary = () => {
    const [currentGlossary, setCurrentGlossary]:[string[], (newData:string[]) => void] = useState<string[]>([''])
    const [searchTerm, setSearchTerm] = useState("");

    const alphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']
    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
            let tmpGl:string[] = [];
            alphabet.forEach((letter:string) => {
                if(glos[letter as keyof typeof glos] !== undefined){
                    glos[letter as keyof typeof glos].filter(x => x.match(event.currentTarget.value)).forEach((word:string)=>{
                        tmpGl.push(word);
                    });
                }
            })
            setSearchTerm(event.currentTarget.value)
            setCurrentGlossary(tmpGl)
            console.log(tmpGl);
    }

    return(
        <div style={{...Background()}}>
            <div>
                <NavigationComponent></NavigationComponent>
                <div style={{display: 'flex', padding:'125px 10% 0 10%', flexDirection: 'column'}}>
                    <h2 style={{color:'white', fontSize: '48px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal'}}>Глоссарий</h2>
                    <input onChange={handleInputChange} style={{color:'black' , backgroundColor: '#D2AE84', borderRadius:'30px', height:'50px' }}></input>
                    <GlossaryGenerator glosa={glos} currentGlossary = {currentGlossary} searchTerm={searchTerm}></GlossaryGenerator>
                    <GlossarySearchGenerator glosa={glos} currentGlossary = {currentGlossary} searchTerm={searchTerm}></GlossarySearchGenerator>
                </div>
            </div>
        </div>
    )
}

export default Glossary