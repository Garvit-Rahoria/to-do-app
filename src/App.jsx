import React, { useState, useRef } from 'react'
import { ImCancelCircle, ImCross } from "react-icons/im";
import { MdDelete } from "react-icons/md";



function App() {

  const [list, setList] = useState([]);
  const inputRef = useRef();


  function inputHandler() {
    const val = inputRef.current.value.trim(); //  get the input value
    if (val == "") return alert("Input is Empty!")

    // Duplicate data cannot be store
    const duplicate = list.some((da) => {
      return da.toLowerCase() == val.toLowerCase()

    })
    if (duplicate) return alert("Duplicate Data cannot be exist")


    setList([...list, val])
    inputRef.current.value = "";   // Input cannot be empty!



  }

  function removeHandler(delIndex) {
    const filterData = list.filter((d, i) => {
      return i !== delIndex
    }
    )
    setList(filterData)
  }

  function clearAllHandler() {
    if (list.length == 0) return;
    setList([]);
  }



  return (
    // <div className='w-50 mx-auto p-5 my-5 shadow rounded-3 card '>
    //   <div class='d-flex justify-content-between align-items-center'>

    //     <h1 className="text-center mb-4">ToDo App...</h1>

    //     <div className="all-btn d-flex justify-content-center align-items-center gap-3">
    //       {
    //         list.length > 0 && (
    //           <h5 className="text-primary  text-white p-2 rounded lis">
    //             Total Lists: {list.length}
    //           </h5>
    //         )
    //       }


    //       {
    //         list.length > 1 && (
    //           <button onClick={clearAllHandler} className="btn btn-danger w-10 mb-3 d-flex justify-content-center align-items-center gap-1">
    //             Clear All <MdDelete className='list-all' />
    //           </button>
    //         )
    //       }
    //     </div>
    //   </div>
    //   <div class="input-group mb-3">
    //     <input ref={inputRef} type="text" class="form-control" placeholder="Add ToDo..." onKeyDown={(e) => { if (e.key === "Enter") { inputHandler() } }} aria-label="Recipient’s username" aria-describedby="basic-addon2" />
    //     <button onClick={inputHandler} class="input-group-text text-white add-btn" id="basic-addon2"> Add</button>
    //   </div>

    //   <ul class="list-group">
    //     {
    //       list.map((data, index) => {
    //         return (
    //           <li key={index} class=" d-flex justify-content-between mb-2 p-2 rounded text-white align-items-center lis">
    //             {data}
    //             <span onClick={() => { removeHandler(index) }} class="badge d-flex justify-content-center align-items-center removeBtn"><ImCross /></span>
    //           </li>
    //         )
    //       })
    //     }
    //   </ul>
    // </div>

    <div className='container my-5'>
  <div className='row justify-content-center'>
    
    {/* Responsive column */}
    <div className='col-12 col-sm-10 col-md-8 col-lg-6'>
      
      <div className='p-4 shadow rounded-3 card'>

        {/* Header */}
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3'>
          
          <h1 className="text-center text-md-start mb-0">ToDo App...</h1>

          <div className="all-btn d-flex flex-wrap justify-content-center justify-content-md-end align-items-center gap-2">

            {
              list.length > 0 && (
                <h6 className="bg-primary text-white px-3 py-2 rounded m-0">
                  Total: {list.length}
                </h6>
              )
            }

            {
              list.length > 1 && (
                <button 
                  onClick={clearAllHandler} 
                  className="btn btn-danger d-flex align-items-center gap-1"
                >
                  Clear <MdDelete />
                </button>
              )
            }

          </div>
        </div>

        {/* Input */}
        <div className="input-group mt-4">
          <input
            ref={inputRef}
            type="text"
            className="form-control"
            placeholder="Add ToDo..."
            onKeyDown={(e) => {
              if (e.key === "Enter") inputHandler();
            }}
          />
          <button 
            onClick={inputHandler} 
            className="input-group-text text-white add-btn"
          >
            Add
          </button>
        </div>

        {/* List */}
        <ul className="list-group mt-4">
          {
            list.map((data, index) => (
              <li 
                key={index} 
                className="d-flex justify-content-between align-items-center mb-2 p-2 rounded text-white lis flex-wrap"
              >
                <span className="me-2">{data}</span>

                <span 
                  onClick={() => removeHandler(index)} 
                  className="badge d-flex align-items-center justify-content-center removeBtn"
                >
                  <ImCross />
                </span>
              </li>
            ))
          }
        </ul>

      </div>
    </div>

  </div>
</div>
  )
}

export default App;
