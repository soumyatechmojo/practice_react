import React from 'react'

const ReactHookArray = () => {
  const allBioData = [
    {
      id:0,
      name: 'Rana',
      age: 25
    },
    {
      id:1,
      name: 'Naveen',
      age: 24
    },
    {
      id:2,
      name: "Manoj",
      age: 24
    }
  ]
  
  return (
    <>
      <h1 className='h1style' ></h1>
    </>
  )
}

export default ReactHookArray






// import React,{useState} from 'react'

// const ReactHookArray = () => {
  
//   const bioData = [
//     {
//       id:0, name: 'Soumyadeep', age: 26
//     },
//     {
//       id:1, name: 'Rohan', age: 25
//     },
//     {
//       id:2, name: 'Chandan', age: 25
//     },
//     {
//       id:3, name: 'Rachana', age: 25
//     }
//   ]
  
//   // Using Hook for change the state of initial value and convert 
//     const [myData , setmyData] = useState(bioData);
//     const clearData = ()=>{
    
//     setmyData([])
//     }
//   //console.log(bioData);

//   return (
//     <>{
//       myData.map ((curEle) => <h1 className='h1style' key={curEle.id}>Name: {curEle.name}, age: {curEle.age} </h1>)
//     }
//     <button className='btn' onClick={clearData}>Clear</button>
//     </>
//   )
// }

// export default ReactHookArray