import React from 'react'

const Summary = () => {
  return (
    <>
    <div>
      Profile Summary 
    </div>
    <textarea
    type="text"
    style={{
        border:"2px grey solid",
        height: "8rem",
        width:"100%",
        borderRadius: "20px",
        marginTop:"15px",
        padding : "10px",
        color : "gray"
    }}
    />
    <div style={{
      display : "flex",
      flexDirection : "row",
      justifyContent : "flex-end",
      marginTop  : "1.5rem"
    }}>      
    
   <button 
    type="submit"
    style={{
        cursor:"pointer",
        height:"3rem",
        width:"5rem",
        backgroundColor: "#5245A8",
        marginRight : "20px",
        borderRadius : "8px",
        color: "white",
        fontSize : "1.2rem"
        
    }}
    
   >ADD</button>
   <button 
    type="submit"
    style={{
        cursor:"pointer",
        height:"3rem",
        width:"6rem",
        backgroundColor: "#5245A8",
        borderRadius : "8px",
        color: "white",
        fontSize : "1.2rem"
    }} 
   >Using Ai</button>
   </div>
    </>
  )
}

export default Summary
