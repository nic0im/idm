import SvgGrapes from "../svg/SvgGrapes";


export default function Footer(){
    return(
    <div className="h-[150px] w-full bg-gray-100shadow-t-lg text-gray-700 flex items-center justify-between px-[200px] text-2xl font-semibold">
        <div className=" h-[150px] flex items-center flex-col justify-center gap-2">
        <SvgGrapes color="#31bc35" height="70px" width="70px"/>
        </div>
        <div className="flex flex-col gap-5 h-[150px] items-center justify-center">
        <div>
            contactanos
        </div>             
        </div>
        <div className="px-10">
        RRSS
        </div>

    </div>)
}