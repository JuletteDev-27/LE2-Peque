import { useEffect, useState } from "react"
export default function MultipleChoice(props){

    const [userAnswer, setUserAnswer] = useState(props.currentAnswer)

    useEffect(()=>{
        console.log(userAnswer)
        if(userAnswer){
            props.setAnswer(userAnswer)
        }
    },[userAnswer])

    return(
        <div>
            <form action="" className="w-full">
                <p className="pb-4 font-bold text-2xl">{props.question}</p>
                <section className="flex flex-col gap-5">
                    {props.choices.map(items=>(
                        <div key={items.id}>
                             <input type="radio" name="multipleChoiceItems" id={items.id} onChange={()=>setUserAnswer(items.id)} checked={props.currentAnswer === items.id}/>
                            <label htmlFor={items.id}>{items.value}</label>
                           
                        </div>
                    ))}
                </section>
            </form>
        </div>
    )
}