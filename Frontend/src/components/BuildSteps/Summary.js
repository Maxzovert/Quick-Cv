import React, { useState } from 'react'
import { useResume } from "../../Context"
import { AIChatSession } from "../../AiModal"



const Summary = () => {

  const{about ,summary , setSummary} = useResume();
  // const[aiGeneratedSummary , setAiGeneratedSummary]=useState("");
  const prompt = `Job Title : ${about.role}, Depend on job title give me a summary for my resume with in 4-5 lines`

  const handleChange = (e) => {
    // const { name, value } = e.target;
    setSummary(e.target.value);
  };

  //AI Summary Generator

  const GenerateSummary = async() => {
    const PROMPT = prompt;
    console.log(PROMPT)
    const result = await AIChatSession.sendMessage(PROMPT)
    console.log(result.response.text());
    setSummary(result.response.text())
  }
  return (
    <>
    <div>
      Profile Summary 
    </div>
    <textarea
    type="text"
    style={{
        border:"2px grey solid",
        height: "10rem",
        width:"100%",
        borderRadius: "20px",
        marginTop:"15px",
        padding : "10px",
        color : "gray"
    }}
    onChange={(e)=>{handleChange(e)}}
    value={summary}
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
    onClick={() => GenerateSummary()}
   >Using Ai</button>
   </div>
    </>
  )
}

export default Summary
