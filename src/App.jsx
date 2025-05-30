import { useEffect, useState } from "react"
import LoginPage from "./views/LoginPage"
import Exam from "./views/Exam"
import EndPage from "./views/EndPage"
import questions from "./assets/react_questions"

export default function App(){



  const [isLogIn, setIsLogin] = useState(true)
  const [isTakingExam, setIsTakingExam] = useState(false)
  const [isFinsihed, setIsFinished] = useState(false)
  const [userValues, setUserValues] = useState({})
  const [totalScore, setTotalScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
    
  return(
  <>
    {isLogIn && <LoginPage setLogin={setIsLogin} setTakingExam={setIsTakingExam} setUserValues={setUserValues}/>}
    {isTakingExam && <Exam setTakingExam={setIsTakingExam} setTotalScore={setTotalScore} setIsFinished={setIsFinished} setUserAnswers={setUserAnswers}/>}
    {isFinsihed && <EndPage userValues={userValues} totalScore={totalScore} setIsFinished={setIsFinished} setLogin={setIsLogin}/>}
  </>
    
  )
}