import {TablePagination, useTheme} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import React from "react";
import * as locales from "@mui/material/locale";

type SupportedLocales = keyof typeof locales;

type PaginationProps = {
    page: number;
    rowsPerPage: number;
    handleChangePage: (event: (React.MouseEvent<HTMLButtonElement> | null), page: number) => void;
    handleChangeRowsPerPage: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined;
}

export const Pagination = (props:PaginationProps) => {
    const [locale, setLocale] = React.useState<SupportedLocales>('ruRU');

    const theme = useTheme();

    const themeWithLocale = React.useMemo(
        () => createTheme(theme, locales[locale]),
        [locale, theme],
    );

    return(
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
                page={props.page}
                onPageChange={props.handleChangePage}
                rowsPerPage={props.rowsPerPage}
                onRowsPerPageChange={props.handleChangeRowsPerPage}
            />
        </ThemeProvider>
    )
}