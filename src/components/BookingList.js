import { Card, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { DataGrid } from '@material-ui/data-grid';

export default function BasicFilteringGrid({rows} = {}) {
  const columns = [
    {
      field: 'bookingId',
      headerName: 'BookingId',
      type: 'number',
      hide: false,
      width: 230,
      headerAlign: 'center',
    },
    {
      field: 'firstName',
      headerName: 'Cliente',
      type: 'string',
      hide: false,
      width: 230,
      headerAlign: 'center',
    },
    {
      field: 'bookingTime',
      headerName: 'Fecha de creación',
      type: 'string',
      hide: false,
      width: 230,
      headerAlign: 'center',
    },
    {
      field: 'streetAddress',
      headerName: 'Dirección',
      type: 'string',
      hide: false,
      width: 230,
      headerAlign: 'center',
    },
    {
      field: 'bookingPrice',
      headerName: 'Precio',
      type: 'number',
      hide: false,
      width: 230,
      headerAlign: 'center',
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" align="center">
            Lista de reservas
          </Typography>

          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              columns={columns}
              rows={rows}
              pageSize={5}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}