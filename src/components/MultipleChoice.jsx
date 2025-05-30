import { useEffect, useState } from "react"
export default function MultipleChoice(props){

    const [userAnswer, setUserAnswer] = useState(props.currentAnswer)

    useEffect(()=>{
        if(userAnswer){
            props.setAnswer(userAnswer)
        }
    },[userAnswer])

    return(
        <div>
            <form action="" className="w-full">
                <p className="pb-4 font-bold text-2xl lg:text-4xl max-w-[850px] leading-[4rem]">{props.question}</p>
                <section className="flex flex-col gap-5">
                    {props.choices.map(items=>(
                        <div key={items.id} className="has-[:checked]:bg-green-400 hover:bg-yellow-400 p-2">
                            <input type="radio" name="multipleChoiceItems" id={items.id} onChange={()=>setUserAnswer(items.id)} checked={props.currentAnswer === items.id} className="hidden"/>
                            <label className="font-[400] ml-[0.5rem] text-lg lg:text-2xl " htmlFor={items.id}>{items.value}</label>
                           
                        </div>
                    ))}
                </section>
            </form>
        </div>
    )
}