import { useEffect, useState } from "react"
import LoginPage from "./views/LoginPage"
import Exam from "./views/Exam"

export default function App(){



  const [isLogIn, setIsLogin] = useState(true)
  const [isTakingExam, setIsTakingExam] = useState(true)
  const [isFinsihed, setIsFinished] = useState(false)
  const [userValues, setUserValues] = useState({})
  const [totalScore, setTotalScore] = useState(0)
    useEffect(()=>{
     {console.log(userValues)}
  },[userValues])
   

  

  return(
  <>
    {/* {isLogIn && <LoginPage setLogin={setIsLogin} setTakingExam={setIsTakingExam} setUserValues={setUserValues}/>} */}
    {isTakingExam && <Exam setTakingExam={setIsTakingExam} setTotalScore={setTotalScore} setIsFinished={setIsFinished}/>}
    {isFinsihed && (<p>{totalScore}</p>)}
  </>
    
  )
}