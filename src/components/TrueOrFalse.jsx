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
            <form action="" className="w-full flex flex-col gap-[1rem]">
                <p className="pb-4 font-bold text-2xl lg:text-4xl">{props.question}</p>
                <section className="flex flex-col w-full gap-[1rem]">
                    {props.choices.map(items=>(
                        <div key={items.id.toString()} className="has-[:checked]:bg-green-400 hover:bg-yellow-400 p-2">
                            <label htmlFor={items.id.toString()} className="font-[400] ml-[0.5rem] text-lg lg:text-2xl w-full">{items.value}</label>
                            <input type="radio" className="hidden" name="multipleChoiceItems" id={items.id.toString()} onChange={()=>setUserAnswer(items.id)} checked={props.currentAnswer === items.id}/>
                        </div>
                    ))}
                </section>
            </form>
        </div>
    )
}