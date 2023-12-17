import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons'
import app from './firebaseConfig';
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

function TrangChu() {

    const [state, setState] = useState();

    useEffect(() => {
        const db = getDatabase(app);
        const getHisRef = ref(db, '/state');
        onValue(getHisRef, (snapshot) => {
            setState(snapshot.val());
        });
    }, [])

    return (
        <>
            {state ? (<div className="flex justify-center	w-full my-[100px]">
                <FontAwesomeIcon icon={faUnlock} className='text-[300px] text-[#1976d2]' />
            </div>) : (<div className="flex justify-center	w-full my-[100px]">
                <FontAwesomeIcon icon={faLock} className='text-[300px] text-[#1976d2]' />
            </div>)}

        </>
    )
}


export default TrangChu