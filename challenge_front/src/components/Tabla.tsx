import * as React from 'react';
import {Socio} from "../resources/domain/Socio";
import {useEffect, useState} from "react";
import {SocioService} from "../resources/services/SocioService";
import Box from '@mui/material/Box';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {styled} from "@mui/material";


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'nombre',
    headerName: 'Nombre',
    width: 150,
    editable: true,
  },
  {
    field: 'apellido',
    headerName: 'Apellido',
    width: 150,
    editable: true,
  },
  {
    field: 'dni',
    headerName: 'DNI',
    width: 150,
    editable: true,
  },
  {
    field: 'gba',
    headerName: 'Vive en GBA',
    type: 'boolean',
    width: 110,
    editable: true,
  },
];

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#febf00', width:800, margin: '0 auto', alignItems: 'center',

  '& .MuiDataGrid-cell--editing': {
    backgroundColor: 'rgba(92,88,79,0.19)',
    color: '#1a3e72',
    '& .MuiInputBase-root': {
      height: '100%',
    },
  },
  '& .Mui-error': {
    backgroundColor: `rgb(126,10,15, ${theme.palette.mode === 'dark' ? 0 : 0.1})`,
    color: theme.palette.error.main,
  },
}));

export default function Tabla() {

    const [socios, setSocio] = useState<Array<Socio>>([])

    useEffect(() => {
        SocioService.getSocios()
            .then(setSocio)
            .catch((e) => { console.error(e) })
            .finally(() => {})
   }, [])

    return (
        <StyledBox>
          <DataGrid
            rows={socios}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 12,
                },
              },
            }}
            pageSizeOptions={[12]}
            checkboxSelection
            disableRowSelectionOnClick

          />
        </StyledBox>
    );
}