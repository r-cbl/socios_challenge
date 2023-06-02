import {Typography} from "@mui/material";
import * as React from "react";
import Tabla from "./Tabla";

export const Main = (props: any) => (
    <>
        <Typography color={"white"} variant={"h3"} sx={{textAlign: 'center', m:2, fontWeight:'bold'}}>Socios</Typography>
        <Tabla />
    </>
)