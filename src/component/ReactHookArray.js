import React, { useState } from 'react'

const ReactHookArray = () => {

  const bioData = [
    {
      id: 0, name: 'Soumyadeep', age: 26
    },
    {
      id: 1, name: 'Rohan', age: 25
    },
    {
      id: 2, name: 'Chandan', age: 25
    },
    {
      id: 3, name: 'Naveen', age: 25
    }
  ]

  // Using Hook for change the state of initial value and convert 
  const [myData, setmyData] = useState(bioData);
  const clearData = () => {

    setmyData([])
  }
  
  
  const removeEle = (id)=>{
    //alert(id)
    const myNewArr = myData.filter((curEle) =>{
      return curEle.id !== id
    })
    setmyData(myNewArr);
  }

  return (
    <>{
      myData.map((curEle) => {
        return (
          <h1 className='h1style' key={curEle.id}>
            Name: {curEle.name},
            age: {curEle.age}
            <button className='btnInner' onClick={ () =>removeEle(curEle.id)}>remove</button>
          </h1>)
      }
      )
    }


      <button className='btn' onClick={clearData}> Clear </button>
    </>
  )
}

export default ReactHookArray