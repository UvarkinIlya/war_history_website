import React, { useState } from 'react';
import { NavigationComponent } from '../../components/NavigationComponent';
import { Background } from './style';
import {getSchemas, SchemaBackend} from "../../backend/schemas";
import {SchemesGenerator } from "../../components/SchemaGenerator/schemasGenerator";
import {handleInputChange} from "../../components/SearchGenerator/common";
import {TablePagination, useTheme} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import * as locales from "@mui/material/locale";

type SupportedLocales = keyof typeof locales;

const Schemas = () => {
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

    const [locale, setLocale] = React.useState<SupportedLocales>('ruRU');

    const theme = useTheme();

    const themeWithLocale = React.useMemo(
        () => createTheme(theme, locales[locale]),
        [locale, theme],
    );

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

    const [searchTerm, setSearchTerm] = useState("");
    const chapters = getSchemas(page, rowsPerPage, searchTerm)

    return(
        <div style={{...Background()}}>
            <div style={{height:'100%'}}>
                <NavigationComponent></NavigationComponent>
                <div style={{display: 'flex',height:'100%', padding:'125px 10% 125px 10%', flexDirection: 'column'}}>
                    <h2 style={{color:'white', fontSize: '48px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal'}}>Содержание</h2>
                    <input onChange={(event) => {
                        setSearchTerm(handleInputChange(event))
                    }} style={{
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
                            count={100} //TODO
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </ThemeProvider>
                    <SchemesGenerator opacityCondition={opacityCondition}
                                      chousenChapter={chousenChapter}
                                      handleMouseEnterChapter={handleMouseEnterChapter}
                                      handleMouseLeaveChapter={handleMouseLeaveChapter}
                                      chapters={chapters}></SchemesGenerator>
               </div>
            </div>
        </div>
    )
}

export default Schemas