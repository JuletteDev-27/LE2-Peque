import { useEffect, useState } from "react"

export default function EndPage(props){

    const handleRetake = () =>{
        props.setLogin(true)
        props.setIsFinished(false)
    }

    return(
        <div className="h-[100svh] w-full grid grid-cols-1 lg:grid-cols-7 font-[roboto] bg-[#E6F0DC]">
            <div className="lg:col-span-3 hidden lg:block bg-[url('/src/assets/img/Login_banner.jpg')] bg-right bg-cover"></div>
            <div className="lg:col-span-4 row-span-3 lg:row-span-1 flex flex-col lg:gap-[5rem] gap-[1.5rem] justify-center items-center bg-[url('/src/assets/img/Login_banner.jpg')] bg-center bg-cover relative z-0 lg:bg-none">
                <h1 className="leading-[4rem] text-5xl lg:text-8xl text-center text-white text-shadow-md text-shadow-black font-[300] before:w-full before:h-full before:bg-[#e6f0dc]/30 before:absolute before:z-[-1] before:top-0 before:left-0">Your Exam Results: </h1>
                <div className="flex justify-center ">
                    <div className="flex flex-col gap-[1.5rem] lg:gap-[3rem] p-6">
                        <h1 className="font-[400] text-3xl lg:text-5xl"><span className="font-[500] ">Name:</span> {props.userValues.username}</h1>
                        <h1 className="font-[400] text-3xl lg:text-5xl"><span className="font-[500] ">School ID:</span> {props.userValues.SID}</h1>
                        <h1 className="font-[400] text-3xl lg:text-5xl"><span className="font-[500] ">Your Score:</span> {props.totalScore}</h1>
                        {props.totalScore < 16 && (<h1 className="font-[700] text-3xl lg:text-5xl">Remarks: <span className="bg-red-500 p-4 font-black rounded-full">Failed!</span></h1>)}
                        {(props.totalScore < 20 && props.totalScore >= 16)  && (<h1 className="font-[700] text-3xl lg:text-5xl">Remarks: <span className="bg-green-800 p-4 font-black rounded-full">Passed!</span></h1>)}
                        {(props.totalScore == 20)  && (<h1 className="font-[700] text-3xl lg:text-5xl">Remarks: <span className="bg-green-500 p-4 font-black rounded-full">Perfect!</span></h1>)}
                    </div>
                    
                </div>
                 <button className="w-90% font-[700] bg-green-400 p-4 text-2xl rounded-2xl col-span-2 lg:text-5xl" type="button" onClick={handleRetake}>Retake Exam</button>
                
            </div>
        </div>
    )
}