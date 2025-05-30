import { useEffect, useState } from "react"
export default function Identification(props){

    const [userAnswer, setUserAnswer] = useState(props.currentAnswer)

    useEffect(()=>{
        if(userAnswer != null){
            props.setAnswer(userAnswer)
        }
    },[userAnswer])

    return(
        <div>
            <form action="" className="flex flex-col w-full items-center justify-center">
                <p className="pb-4 font-bold text-2xl lg:text-4xl">{props.question}</p>
                    <input type="text" name=""  className="border-b-4 p-2 focus:outline-0 border-[#55883B] font-[300] w-full lg:w-[70%] text-2xl lg:text-3xl " id="" placeholder="Input answer here: " value={props.currentAnswer} onChange={(event)=>setUserAnswer(event.target.value)}/>
            </form>
        </div>
    )
}