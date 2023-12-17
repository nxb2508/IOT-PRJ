import { getDatabase, ref, onValue } from "firebase/database";
import app from '../../firebaseConfig';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import "./lichSu.css"
function LichSu() {
    const [history, setHistory] = useState();

    useEffect(() => {
        const db = getDatabase(app);
        const getHisRef = ref(db, '/history');
        onValue(getHisRef, (snapshot) => {
            setHistory(snapshot.val());
        });
    }, [])

    return (
        <div className="App" style={{ width: '100%', marginBottom: "30px"}}>
            <p className="text-[36px] text-center mb-[10px]" >Lịch sử mở khóa</p>
            <TableContainer component={Paper} >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontSize: "28px", fontWeight: 500, color: "#1976d2" }}>
                                Trạng thái
                            </TableCell>
                            <TableCell sx={{ fontSize: "28px", fontWeight: 500, color: "#1976d2" }} align="right">
                                Thời gian
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {history &&
                            history.map((row) => (
                                <TableRow key={row.time} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                    {row.state ?
                                        (<TableCell component="th" scope="row" sx={{ fontSize: "18px"}} >
                                            Mở khóa thành công
                                        </TableCell>) :
                                        (<TableCell component="th" scope="row" sx={{ fontSize: "18px", color: "#dc4949" }} >
                                            Mở khóa thất bại
                                        </TableCell>)}

                                    <TableCell align="right" sx={{ fontSize: "18px" }}>
                                        {row.time}
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default LichSu;
