import React from 'react'
import '../App.css'

function Todo(props) {
    return (
        <>
         
                    <li><h4 className='d-inline'>{props.item}</h4><span onClick={()=>{
                         props.closbtn(props.id);
                    }} className='xbtn'>X</span> </li>

        </>
    )
}
export default Todo;