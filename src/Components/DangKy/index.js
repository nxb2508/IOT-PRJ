import { useState, useEffect } from 'react';
import app from './firebaseConfig';
import { getDatabase, ref, set, onValue } from "firebase/database";
import Button from '@mui/material/Button';
function DangKy() {
    // Push Function
    const [number, setNumber] = useState('');

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        set(ref(db, "/dangKy"), {
            id: number
        }).then(() => {
            console.log("oke");
        }).catch((e) => {
            alert(e)
        })
    };

    const [mess, setMess] = useState();
    const db = getDatabase(app);

    useEffect(() => {
        const getMessRef = ref(db, '/mess');
        onValue(getMessRef, (snapshot) => {
            setMess(snapshot.val());
        });
    })

    return (
        <div className="App flex flex-col items-center text-[20px] font-[450]" style={{width: '100%'}}>
            <p className="mt-[15px] mb-[15px]">Message: {mess}</p>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Enter id:
                    <input className='border-solid border-2 border-indigo-600 rounded-lg ml-[10px] mr-[10px]' type="number" value={number} onChange={handleNumberChange} />
                </label>
                <Button variant="contained" type="submit">Send To Sensor</Button>
            </form>
        </div>
    );

}

export default DangKy;