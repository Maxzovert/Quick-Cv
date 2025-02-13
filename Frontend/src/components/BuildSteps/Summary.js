import React, { useState } from 'react'
import { useResume } from "../../Context"
import { AIChatSession } from "../../AiModal";
import { Button, ButtonGroup, Img } from "@chakra-ui/react"
import { Spinner } from "@chakra-ui/react";
import aiSpin from "../../images/aiSpin.png"



const Summary = () => {

  const{about ,summary , setSummary} = useResume();
  const[generating, setGenerating]=useState(false);
  const prompt = `Job Title : ${about.role}, Depend on job title give me a summary for my resume with in 4-5 lines`;
  const [count,  setCount] = useState(0);

  const handleChange = (e) => {
    // const { name, value } = e.target;
    setSummary(e.target.value);
  };


  //AI Summary Generator
  const GenerateSummary = async() => {
    const PROMPT = prompt;
    console.log(PROMPT)
    setGenerating(true)
    const result = await AIChatSession.sendMessage(PROMPT)
    console.log(result.response.text());
    setSummary(result.response.text())
    setGenerating(false);
    setCount(1)
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
    
   <Button 
    type="submit"
    style={{
        height:"3rem",
        width:"6rem",
        backgroundColor: "#5245A8",
        marginRight : "20px",
        borderRadius : "8px",
        color: "white",
        fontSize : "1.2rem"
        
    }}
    
   >ADD</Button>
   <Button 
    type="submit"
    style={{
        height:"3rem",
        width:"6rem",
        color: "#5245A8",
        borderRadius : "8px",
        fontSize : "1.2rem"
    }} 
    onClick={() => GenerateSummary()}
   > {generating ? (
    <Spinner />
  ) : count === 0 ? (
    <>
    AI <Img src={aiSpin} alt="AI Spinner" width="20px" marginLeft="4px" />
    </>
  ) : (
    <>
      Again <Img src={aiSpin} alt="AI Spinner" width="20px" marginLeft="4px" />
    </>
  )}</Button>
   </div>
    </>
  )
}

export default Summary
