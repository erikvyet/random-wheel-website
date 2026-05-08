import { Container, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import type { Registration } from "../interfaces/Registration";

function ParticipantManager() {
    const headers: GridColDef<Registration>[] = [
        { field: "id", headerName: "STT", width: 70, align: "center", headerAlign: "center" },
        { field: "name", headerName: "Họ và tên", width: 225, align: "center", headerAlign: "center" },
        { field: "phone", headerName: "Số điện thoại", width: 130, align: "center", headerAlign: "center" },
        { field: "email", headerName: "Email", width: 250, align: "center", headerAlign: "center" },
        { field: "date", headerName: "Thời gian tham gia", width: 250, align: "center", headerAlign: "center" }
    ];

    const participants: Registration[] = [];
    for (let i = 0; i < localStorage.length; i++) {
        const json = localStorage.getItem(localStorage.key(i));
        participants.push(JSON.parse(json) as Registration);
    }

    return (
        
        <Container className="size-full bg-zinc-100 overflow-auto p-4!">
            {/* <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className="font-semibold! w-1/20" align="center">STT</TableCell>
                        <TableCell className="font-semibold! w-1/4" align="center">Họ và tên</TableCell>
                        <TableCell className="font-semibold! w-3/20" align="center">Số điện thoại</TableCell>
                        <TableCell className="font-semibold! w-3/10" align="center">Email</TableCell>
                        <TableCell className="font-semibold! w-1/4" align="center">Thời gian tham gia</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {participants.map((participant, index) =>
                        <TableRow key={index}>
                            <TableCell align="center">{index + 1}</TableCell>
                            <TableCell align="center">{participant.name}</TableCell>
                            <TableCell align="center">{participant.phone}</TableCell>
                            <TableCell align="center">{participant.email}</TableCell>
                            <TableCell align="center">{participant.date.toString()}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table> */}
            <DataGrid
                className="rounded-xl! shadow-lg shadow-zinc-300 [&_.MuiDataGrid-columnHeaderTitle]:font-bold!"
                columns={headers} 
                rows={participants} 
                initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
                autoPageSize
                checkboxSelection
                disableColumnResize
            />
        </Container>
    );
}

export default ParticipantManager;