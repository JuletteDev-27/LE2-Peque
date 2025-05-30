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
            <form action="">
                <p>{props.question}</p>
                <section>
                    <input type="text" name="" id="" value={props.currentAnswer} onChange={(event)=>setUserAnswer(event.target.value)}/>
                </section>
            </form>
        </div>
    )
}