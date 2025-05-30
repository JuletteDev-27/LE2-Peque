import { useEffect, useState } from "react"
import ErrorMessage from "../components/ErrorMessage";
import Swal from "sweetalert2";
import "../assets/img/Login_banner.jpg"

export default function LoginPage(props){
    let initialValues = {username:"", SID:""}
    let [userValues, setUserValues] = useState(initialValues);
    let [errors, SetErrors] = useState({})
    let [isSubmitted, setIsSubmitted] = useState(false)
    let [onModal, setOnModal] = useState(false)
    let [modalChoice, setModalChoice] = useState(null)
    

    const examRules = [
  {
    "id": 1,
    "rule": "Read each question carefully before answering."
  },
  {
    "id": 2,
    "rule": "Do not reload or close the page during the exam."
  },
  {
    "id": 3,
    "rule": "Only one submission is allowed."
  },
  {
    "id": 4,
    "rule": "Finish the exam in one sitting."
  },
  {
    "id": 5,
    "rule": "Click the submit button only when you are done."
  }
]


    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmitted){
           setIsSubmitted(false)
           setOnModal(true)
        }
    },[errors])

    useEffect(()=>{
        if(!onModal && isSubmitted){
            props.setLogin(false)
            props.setTakingExam(true)
            props.setUserValues(userValues)
        }
    },[onModal])
    
    const handleLogin = (event) =>{
        const {name, value} = event.target
        let cleaned
        
        if(name == "username"){
            cleaned = value.replace(/[0-9+]/g,"")
        }

        if(name == "SID"){
            cleaned = value.replace(/[^0-9]/g,"")
        }
        
        setUserValues({...userValues, [name]:cleaned})
    }

    const handleModalSubmit = (event) =>{
        event.preventDefault()
        if(modalChoice){
            setOnModal(false)
            setIsSubmitted(true)
        }else{
             Swal.fire({
                title: 'Error!',
                text: 'You cannot take the exam if you do not agree with the rules!',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            setUserValues(initialValues)
            setOnModal(false)
            setIsSubmitted(false)
        }
        
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        SetErrors(validate(userValues))
        setIsSubmitted(true)
    }

    const validate = (values) => {
        const error = {}
        if(!values.username){
            error.username = "Username is required!"
        }

        if(!values.SID){
             error.SID = "School ID is required!"
        }

        if(values.SID.length < 10){
             error.SID = "School ID length must be greater than 10!"
        }

        return error
    }

    return(
        <div className="h-[100svh] w-full grid grid-cols-1 lg:grid-cols-7 font-[roboto] bg-[#E6F0DC]">
            {onModal && (
                <dialog className="w-full h-full bg-[#c1e899]/50 z-10 flex justify-center items-center p-4">
                   <form action="" onSubmit={handleModalSubmit} className="flex p-4 flex-col items-center justify-center bg-white rounded-xl">
                    <section className="flex flex-col items-center p-2 w-[75%]">
                        <h1 className="text-3xl font-[800]">Exam Rules</h1>
                        <ol className="list-decimal">
                            {
                                examRules.map((rule)=>(
                                    <li className="font-[300] pt-2 text-md" key={rule.id}>{rule.rule}</li>
                                ))
                            }
                        </ol>
                    </section>
                    <section>
                        <div className="has-[:checked]:bg-green-500 p-2">
                            <input type="radio" name="choices" id="true" className="" value={true} onChange={(event)=>setModalChoice(event.target.value === "true")}/>
                            <label htmlFor="true" className="">I Agree with the rules</label>
                        </div>
                        
                        <div className="has-[:checked]:bg-green-500 p-2">
                            <input type="radio" name="choices" id="false" value={false} onChange={(event)=>setModalChoice(event.target.value === "true")}/>
                            <label htmlFor="false">I Do not Agree with the rules</label>
                        </div>
                    </section>
                    <input type="submit" value="Submit" className="mt-5 p-2 w-full rounded-2xl text-xl bg-green-500"/>
                   </form>
                </dialog>
            )}
            <div className="lg:col-span-3 hidden lg:block bg-[url('/src/assets/img/Login_banner.jpg')] bg-right bg-cover"></div>
            <div className="lg:col-span-4 row-span-3 lg:row-span-1 flex flex-col justify-center items-center bg-[url('/src/assets/img/Login_banner.jpg')] bg-center bg-cover relative z-0 lg:bg-none">
                <h1 className="text-5xl lg:text-8xl text-white text-shadow-md text-shadow-black font-[300] before:w-full before:h-full before:bg-[#e6f0dc]/30 before:absolute before:z-[-1] before:top-0 before:left-0"><span className="text-[#55883B] ">S</span>olana <span className="text-[#55883B]">E</span>xams</h1>
                <div className="flex items-center justify-center gap-[0.5rem]">
                    <p className="font-[400] text-2xl lg:text-4xl italic pt-2 lg:pt-6">Powered by</p>
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className="w-[2rem]" alt="" srcset="" />
                </div>
                <form action="" method="post" onSubmit={handleSubmit} className="flex flex-col gap-[1.5rem] lg:gap-[3.5rem] items-center justify-center mt-10 text-xl lg:text-3xl">
                    <section className="flex flex-col">
                        <label htmlFor="" className="font-[400] italic">Username</label>
                        <input type="text" 
                        name="username" id="" 
                        value={userValues.username} 
                        onChange={handleLogin} 
                        onFocus={(event)=>{
                            SetErrors({}) 
                            setIsSubmitted(false)
                        }} 
                        autoComplete="off"
                        className="border-b-4 p-2 font-[300] focus:outline-0 border-[#55883B]"/>
                        <ErrorMessage message={errors.username}/>
                    </section>
                    <section className="flex flex-col">
                        <label htmlFor="" className="font-[400] italic">School ID</label>
                        <input type="text" name="SID" id="" value={userValues.SID} onChange={handleLogin} onFocus={()=>{
                            SetErrors({}) 
                            setIsSubmitted(false)
                        }}  autoComplete="off"
                        className="border-b-4 p-2 focus:outline-0 border-[#55883B] font-[300]"/>
                        <ErrorMessage message={errors.SID}/>
                    </section>
                    <button className="w-full font-[700] bg-green-400 p-2 rounded-2xl" type="submit">Enter Exam</button>
                </form>
            </div>
        </div>
    )
}