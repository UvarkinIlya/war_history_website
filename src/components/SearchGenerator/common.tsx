import React from "react";
import glos from "../../pages/Glossary/testGlossary.json";

const alphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']
export const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    let tmpGl:string[] = [];
    alphabet.forEach((letter:string) => {
        if(glos[letter as keyof typeof glos] !== undefined){
            glos[letter as keyof typeof glos].filter(x => x.match(event.currentTarget.value)).forEach((word:string)=>{
                tmpGl.push(word);
            });
        }
    })

    return event.currentTarget.value
}