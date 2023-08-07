
import {AiOutlineDown ,AiOutlineSearch,AiOutlineRight} from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";
import {HiOutlineArrowsRightLeft} from "react-icons/hi2";
import {HiOutlineLocationMarker} from "react-icons/hi";
import { PiBagBold } from "react-icons/pi";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";

const header = () => {
    const logoClick=()=>{
        alert('will go to home page')
    }


    return ( 
        <>
                {/* header */}
                <div className ="w-full h-[52px] flex bg-[#1E3D35] ">
                <div className="w-1/3 h-full  flex items-center gap-3 translate-x-1/2">
                    <Link to="/" className="font-bold text-md  text-white  ">ลูกค้าบุคคล</Link>
                    <a href="https://business.ais.co.th/" target="_blank" className=" text-gray-200 text-[15px]">ลูกค้าองค์กร</a>
                    <Link to="/about-us" className=" text-gray-200 text-[15px]">เกี่ยวกับเรา</Link>
                </div>
                <div className="w-2/3 h-full flex  items-center translate-x-1/3">
                    <HiOutlineArrowsRightLeft className="text-white mr-1 text-[23px]"></HiOutlineArrowsRightLeft>
                    <a href="#" className="text-gray-200 text-[15px] mr-6">ย้ายมาเป็นเอไอเอส</a>
                    <HiOutlineLocationMarker className="text-white text-[20px] mr-1"/>
                    <a href="#" className="text-gray-200 text-[15px] mr-5">ศูนย์บริการ</a>
                    <a href="#" className="text-gray-200 text-[15px] mr-5">เข้าสู่ระบบ</a>
                    <a href="#" className="text-gray-500 text-sm mr-8">|</a>
                    <img src="https://www.ais.th/content/dam/ais/en/generic/images/global-nav/flag-th.svg" alt="" className="mr-8"/>
                    <AiOutlineDown className="text-white"/>
                </div>
            </div>

        {/* navbar     */}
            <div className="w-full h-[72px] flex  bg-[#25584F]">
                <div  className=" h-full flex items-center justify-center w-[40%]  ">
                    <a href="http://localhost:5173/"><img  src="https://www.ais.th/content/dam/ais/consumer/symbols/logo/ais-white-text.svg" alt="" /></a>
                </div>
                <div className=" h-full flex items-center gap-3 w-3/5   ">
                    <Link to="/store" className="text-gray-200 text-[19px] px-2 h-full hover:border-b-4 hover:border-[#64B232] pt-5 hover:text-white  ">ร้านค้า </Link>
                    <Link to="/package" className="text-gray-200 text-[19px] px-2 h-full hover:border-b-4 hover:border-[#64B232] pt-5 hover:text-white ">แพ็กเกจ</Link>
                    <Link to="/fibre" className="text-gray-200 text-[19px] px-2 h-full hover:border-b-4 hover:border-[#64B232] pt-5 hover:text-white ">เน็ตบ้าน</Link>
                    <Link to="/promotions" className="text-gray-200 text-[19px] px-2 h-full hover:border-b-4 hover:border-[#64B232] pt-5 hover:text-white ">โปรโมชัน</Link>
                    <Link to="/lifestyle" className="text-gray-200 text-[19px] px-2 h-full hover:border-b-4 hover:border-[#64B232] pt-5 hover:text-white ">ไลฟ์ไตล์</Link>
                    <Link to="/privileges" className="text-gray-200 text-[19px] px-2 h-full hover:border-b-4 hover:border-[#64B232] pt-5 hover:text-white ">สิทธิพิเศษ</Link>
                    <Link to="/help-and-support" className="text-gray-200 text-[19px] px-2 h-full hover:border-b-4 hover:border-[#64B232] pt-5 hover:text-white ">ช่วยเหลือ</Link>
                </div>
                <div className="h-full flex w-[20%] justify-start items-center  gap-4 translate-x-[-15%]">
                <AiOutlineSearch className="text-white text-[22px]" />
                <PiBagBold className="text-white text-[22px]"/>
                </div>
            </div>
        </>
     );
}
 
export default header;