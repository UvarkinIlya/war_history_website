import React, { useState } from "react"
import { NavigationComponent } from "../../components/NavigationComponent"
import { Background } from "./style"
import glos from "./testGlossary.json"
import { GlossarySearchGenerator } from "../../components/GlossaryGenerator"
import {getGlossary} from "../../backend/glossary";
import { TablePagination, useTheme} from "@mui/material";
import * as locales from '@mui/material/locale';
import { createTheme, ThemeProvider} from '@mui/material/styles';

type SupportedLocales = keyof typeof locales;

const Glossary = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const [locale, setLocale] = React.useState<SupportedLocales>('ruRU');

    const theme = useTheme();

    const themeWithLocale = React.useMemo(
        () => createTheme(theme, locales[locale]),
        [locale, theme],
    );

    const [group, setSelectedValue] = useState('');

    const handleSelectChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    const [searchTerm, setSearchTerm] = useState("");
    const glossary = getGlossary(page, rowsPerPage, searchTerm, group)

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
            console.log(tmpGl);
    }

    return(
        <div style={{...Background()}}>
            <div>
                <NavigationComponent></NavigationComponent>
                <div style={{display: 'flex', padding: '125px 10% 0 10%', flexDirection: 'column'}}>
                    <h2 style={{
                        color: 'white',
                        fontSize: '48px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal'
                    }}>Глоссарий</h2>
                    <select value={group} onChange={handleSelectChange} className="form-select">
                        <option value={"GENERALS"}>Генералы</option>
                        <option value={"WEAPONS"}>Оружие</option>
                        <option value={"TERMS"}>Термины</option>
                        <option value={"REDUCTIONS"}>Сокращения</option>
                        <option value={"DESIGNATIONS"}>Обозначения</option>
                    </select>
                    <input onChange={handleInputChange} style={{
                        color: 'black',
                        backgroundColor: '#D2AE84',
                        borderRadius: '30px',
                        height: '50px'
                    }}></input>
                    <ThemeProvider theme={themeWithLocale}>
                        <TablePagination
                            sx={{
                                '.MuiTablePagination-input': {
                                    backgroundColor: 'white',
                                },
                                '.MuiIconButton-root': {
                                    color: 'white',
                                },
                                '.MuiTablePagination-selectLabel': {
                                    color: 'white',
                                },
                                '.MuiTablePagination-displayedRows': {
                                    color: 'white',
                                }
                            }}
                            component="div"
                            count={100} //TODO fix
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </ThemeProvider>
                    <GlossarySearchGenerator currentGlossary={glossary}
                                             searchTerm={searchTerm}></GlossarySearchGenerator>
                </div>
            </div>
        </div>
    )
}

export default Glossary