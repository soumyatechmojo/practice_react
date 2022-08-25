import React,{useState} from 'react'

const UseStateSpread = () => {
    const bio = [
        {
            id:0, name: 'Soumyadeep', age: 26
        },
        {
            id:1, name: 'Rohan', age: 25
        },
        {
            id:2, name: 'Chandan', age: 25
        },
        {
            id:3, name: 'Rachana', age: 25
        }
    ]

    const [myObj , setMyObj] = useState(bio)

    
    
    const changeObject = ()=>{
        setMyObj({...myObj , myName:"Soumya"})
    }
  
  
    return (
    <>
      <h1 className='h1style'> Name:{myObj.myName}, Branch:{myObj.myBranch}, Org:{myObj.myOrg} </h1>
      <button className='btn' onClick={changeObject}> Update </button>
    </>
  )
}

export default UseStateSpread