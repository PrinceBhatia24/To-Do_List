import './App.css';
import { useState } from "react";
import Todo from './Components/Todo';


const App = () => {

  const [item, setItem] = useState("");

  const [list, setList] = useState([]);

  const handlerchange = (event) => {

    setItem(() => {
      return event.target.value;
    })
  }

  const submit = () => {
    setList((prev) => {
      return [...prev, item];
    })
    setItem("")
  }


  const closebtns= (id)=>{
  
    setList((prev)=>{
      return prev.filter((arrElemet,index)=>{
        return index!==id;
      });
    })
    }
  
  
  return (


    <>
      <div className='container Top'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='box'>
              <h3 className='fw-bold text-center' style={{ borderBottom: '1px solid black' }}>To-Do List</h3>

              <div className="input">
                <input type="text" name="name" value={item} onChange={handlerchange} placeholder="Add a Item" />
                <button onClick={submit} className="btn btn-dark" ><i className="fas fa-plus">+</i></button>
              </div>
              <div className='mt-5 container'>
                <ul style={{ listStyleType: 'number' }}>
                  {list.map((items,index,data) => {
                      return <Todo key={index} closbtn={closebtns} id={index}  item={items}  />
                  })
                  }

                </ul>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}


export default App;
