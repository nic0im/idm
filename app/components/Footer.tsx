import Grapes from "../../public/Grapes";

export default function Footer(){
    return(
    <div className="h-[150px] w-full bg-green-800 text-white flex items-center justify-between px-[200px] text-2xl font-semibold">
        <div className=" h-[150px] flex items-center flex-col justify-center gap-2">
            <Grapes/>
        </div>
        <div className="flex flex-col gap-5 h-[150px] items-center justify-center">
        <div>
            contactanos
        </div>
        <div>
        soporte
            </div>                
        </div>
        <div className="px-10">
        RRSS
        </div>

    </div>)
}