import { useEffect, useState } from "react"
export default function TrueOrFalse(props){

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
                    {props.choices.map(items=>(
                        <div key={items.id.toString()}>
                            <label htmlFor={items.id.toString()}>{items.value}</label>
                            <input type="radio" name="multipleChoiceItems" id={items.id.toString()} onChange={()=>setUserAnswer(items.id)} checked={props.currentAnswer === items.id}/>
                        </div>
                    ))}
                </section>
            </form>
        </div>
    )
}