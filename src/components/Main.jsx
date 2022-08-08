import React from "react";
import StudentCard from "./StudentCard";

const student = {
    name: 'Kali',
    age: 37,
    id: 'rd568df',
    term: 'Su22'
}
 function Main({name}) {
    
    return (<>
    <main>
        <h1>Hello {name || 'Guest'}</h1>
        {name && <StudentCard student={student} />}
    </main></>)

}

export default Main;