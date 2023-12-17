import DangKy from "./Components/DangKy";
import { useState } from 'react';
import app from './firebaseConfig';
import { getDatabase, ref, set } from "firebase/database";
import LichSu from "./Components/LichSu";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TrangChu from "./Components/TrangChu";

function App() {
    const [showTrangChu, setshowTrangChu] = useState(true);
    const [showDangKy, setShowDangKy] = useState(false);
    const [showLichSu, setshowLichSu] = useState(false);
    const db = getDatabase(app);

    const handleSignUp = async () => {
        setshowTrangChu(false);
        setshowLichSu(false);
        setShowDangKy(true);
        await set(ref(db, "/dangKy"), {
            state: true
        }).then(() => {
            console.log("oke");
        }).catch((e) => {
            alert(e)
        })
    }

    const handleShowHistory = () => {
        setShowDangKy(false);
        setshowTrangChu(false);
        setshowLichSu(true);
    }

    const handleShowHome = () => {
        setShowDangKy(false);
        setshowLichSu(false);
        setshowTrangChu(true);
    }

    return (
        <>
            <div>
                <Container>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container minHeight={100}>
                            <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
                                <Button sx={{ fontSize: "20px" }} size="large" variant="contained" onClick={handleShowHome}>Trang Chủ</Button>
                            </Grid>
                            <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
                                <Button sx={{ fontSize: "20px" }} size="large" variant="contained" onClick={handleSignUp}>Đăng Ký</Button>
                            </Grid>
                            <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
                                <Button sx={{ fontSize: "20px" }} size="large" variant="contained" onClick={handleShowHistory}>Xem Lịch Sử</Button>
                            </Grid>

                        </Grid>
                        <Grid container minHeight={160}>
                            {
                                (showTrangChu) && (
                                    <TrangChu />
                                )
                            }
                            {
                                (showDangKy && !showLichSu) && (
                                    <DangKy />
                                )
                            }
                            {
                                (!showDangKy && showLichSu) && (
                                    <LichSu />
                                )
                            }
                        </Grid>
                    </Box>
                </Container>
            </div>
        </>
    );
}

export default App;
