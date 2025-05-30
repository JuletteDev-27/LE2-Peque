import { useEffect, useState } from "react"
import questions from "../assets/react_questions.json"
import MultipleChoice from "../components/MultipleChoice"
import TrueOrFalse from "../components/TrueOrFalse"
import Identification from "../components/Identification"
import Swal from "sweetalert2"

export default function Exam(props){
    const [counter, setCounter] = useState(0)
    const [totalScore, setTotalScore] = useState(null)
    const [currentAnswers, setCurrentAnswers] = useState({})
    const trueOrFalseChoices = [{id:true, value:"True"},{id:false, value:"False"}]

    useEffect(()=>{
        if(totalScore!=null){
            props.setTotalScore(totalScore)
            props.setIsFinished(true)
            props.setTakingExam(false)
        }
    },[totalScore])

    const handleAnswer = (userAnswer) => {
        setCurrentAnswers((prevAnswers) => ({
            ...prevAnswers,
            [counter]: userAnswer,
        }));
    };

    const correctAnswers = questions.map(items=>items.answer)

    const question = questions[counter]

    const handlePrev = () => {
        if(counter > 0){
            setCounter(prev => prev-1)
        }
    }

     const handleNext = () => {
        if(counter < questions.length-1){
            setCounter(prev => prev+1)
        }
    }

    const handleSubmit = () =>{
         Swal.fire({
            title: 'Notice',
            text: 'Once you submit, you cannot change any of your answers! Are you sure you want to proceed?',
            icon: 'warning',
            confirmButtonText: 'Submit',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
        }).then((result)=>{
            if(result.isConfirmed){
                    let score=0
                    for(let i = 0; i < correctAnswers.length; i++){
                        if(correctAnswers[i] === currentAnswers[i]){
                            score++
                        }
                    }
                    setTotalScore(score)
                }
            })
        
        
    }

    return(
        <div className="h-[100svh] w-full flex justify-center items-center  bg-[#E6F0DC]">
            <div className="h-[80%] min-w-[100%] lg:min-w-[70%] lg:h-[70%] flex flex-col items-center justify-between p-5">
                <section className="place-self-start lg:place-self-center">
                    <select className="bg-green-300 text-xl p-2 font-bold w-[100%] rounded-xl" value={counter} onChange={(e) => setCounter(Number(e.target.value))}>
                        {questions.map((items,index)=>(
                            <option className="bg-white font-[400] p-2" value={index}>Question {index+1}</option>
                        ))}
                    </select>
                </section>
                <section>
                    {question.type === "multiple" && <MultipleChoice question={question.question} choices={question.choices} setAnswer={handleAnswer} currentAnswer={currentAnswers[counter]}/>}
                    {question.type==='binary' && <TrueOrFalse question={question.question} choices={trueOrFalseChoices} setAnswer={handleAnswer} currentAnswer={currentAnswers[counter]}/>}
                    {question.type==='identification' && <Identification question={question.question} setAnswer={handleAnswer} currentAnswer={currentAnswers[counter]}/>}
                </section>
                <div className="grid grid-cols-2  gap-5 w-full lg:w-[40%] relative">
                    <button className="w-full font-[700] bg-red-400 p-2 rounded-2xl lg:text-2xl" type="button" onClick={handlePrev}>Previous</button>
                    <button className="w-full font-[700] bg-yellow-400 p-2 rounded-2xl lg:text-2xl" type="button" onClick={handleNext}>Next</button>
                    <button className="w-full font-[700] bg-green-400 p-4 rounded-2xl col-span-2 lg:text-2xl" type="button" onClick={handleSubmit}>Submit</button>
                </div>
                
            </div>
        </div>
    )

}