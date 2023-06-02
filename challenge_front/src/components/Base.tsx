import React from 'react'
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';


export const Base = (props: any) => (
    <>
        <CssBaseline />
        <GlobalStyles styles={{
            ul: { margin: 0, padding: 0, listStyle: 'none' },
            fontFamily: 'Arial Black, sans-serif',
            webkitFontSmoothing: 'antialiased',
            mozOsxFontSmoothing: 'grayscale',
            fontColor: 'white',

        }} />
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: '#18191e',
            }}
        >
            {props.children}
        </Box>
    </>
)