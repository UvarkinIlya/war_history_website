import React from "react";
type genProp = {
    currentGlossary:string[]
    searchTerm:string
    glosa:any
}
export const GlossaryGenerator = (props:genProp) => {
    const alphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']
    const alphabetMap = alphabet.map(letter =>{
            if(props.glosa[letter as keyof typeof props.glosa] !== undefined){
                return(
                    <div style={{display:props.searchTerm === '' ? 'block' : 'none'}}> 
                        <h3 style={{color:'white', fontSize: '30px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal'}}>{letter}</h3>
                        {props.glosa[letter as keyof typeof props.glosa].map((word:string) => {return <p style={{color:'white', fontSize: '20px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal'}}>{word}</p>})}
                    </div>)
                
            }
            return <></>
        });
    return(
        <>
            {alphabetMap}
        </>
    );
}

export const GlossarySearchGenerator = (props:genProp) => {
    const alphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я']
    const searchMap = props.currentGlossary.map(word => <p style={{display: props.searchTerm !== '' ? 'block' : 'none', color:'white', fontSize: '20px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal'}}>{word}</p>)
    
    return(
        <>
            {searchMap}
        </>
    );
}