import React from "react";
import StudentCard from "./StudentCard";

const student = {
    name: 'Khali Gopaul',
    age: 37,
    id: 'rd568df',
    term: 'Su22'
}
 function Main(props) {
    
    return (<main>
        <h1>Hello {props.name}</h1>
        <StudentCard student={student} />
    </main>)

}

export default Main;