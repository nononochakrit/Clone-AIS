import { Carousel } from 'antd';
import {AiOutlineRight} from "react-icons/ai";


export default function NewProduct({type}) {

    const phone = () => {
        return ( 
            <>
            {/* p1 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/asus/phone/rog-7-series/rog-7-ultimate/asus-rog-7-ultimate.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-[#E0EFEE] opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800">ROG PHONE 7 Ultimate (16/512GB)</h1>
                    <h3 className="text-sm text-gray-500">512GB</h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">36,490 บาท</p>
                        <p className="text-sm text-gray-500 line-through">42,990 บาท</p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                        <button className=" px-5 py-1 rounded-full hover:bg-[#5C9D2E] bg-[#73C23A] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            {/* p2 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/samsung/phone/galaxy-z-flip5/samsung-galaxy-z-flip5-graphite.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center  bg-[#E0EFEE] opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800 ">Samsung Galaxy Z Flip5</h1>
                    <h3 className="text-sm text-gray-500">256GB / 512GB</h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">30,800 บาท</p>
                        <p className="text-sm text-gray-500 line-through">39,900 บาท</p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                         <button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            {/* p3 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/oppo/phone/reno10-series/reno-10-pro-plus/oopo-reno-10-pro-plus-5g-slivery-grey.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-slate-300 opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800">OPPO Reno10 Pro+ 5G (RAM 12GB)</h1>
                    <h3 className="text-sm text-gray-500">256GB</h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">20,890 บาท</p>
                        <p className="text-sm text-gray-500 line-through">27,990 บาท</p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                        <button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            {/* p4 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/honor/phone/magic-5-pro/honor-magic-5-pro.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-slate-300 opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800">Honor Magic 5 Pro</h1>
                    <h3 className="text-sm text-gray-500">512GB</h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">24,790 บาท</p>
                        <p className="text-sm text-gray-500 line-through">29,990 บาท</p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                        <button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            </>
         );
    }


    const tablet = () => {
        return ( 
            <>
            {/* t1 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/samsung/tablets/galaxy-tab-s8-series/galaxy-tab-s8-plus/samsung-galaxy-tab-s8-plus.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-[#E0EFEE] opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800">Samsung Galaxy Tab S8 Plus WiFi</h1>
                    <h3 className="text-sm text-gray-500">128GB</h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">28,900 บาท</p>
                        <p className="text-sm text-gray-500 line-through">33,900 บาท</p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                        <button className=" px-5 py-1 rounded-full hover:bg-[#5C9D2E] bg-[#73C23A] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            {/* t2 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/nubia/tablet/pad-3d-perspective/nubia-pad-3d-perspective.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-[#E0EFEE] opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800 ">Nubia Pad 3D</h1>
                    <h3 className="text-sm text-gray-500">256GB</h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">46,900 บาท</p>
                        <p className="text-sm text-gray-500 line-through"></p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                         <button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            {/* t3 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/oppo/tablet/pad-air-wifi-64-gb/oppo-pad-air-64-gb.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center  bg-slate-300 opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 h-fit text-gray-800">OPPO Pad Air (WiFi)</h1>
                    <h3 className="text-sm text-gray-500">64GB</h3>
                </div>
                <div className="w-full h-[15%]  flex relative  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">6,999 บาท</p>
                        <p className="text-sm text-gray-500 line-through">7,999 บาท</p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                        <button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            {/* t4 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/apple/ipad/ipad/10th-gen/wifi/ipad-wifi-10th-gen.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-slate-300 opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800">iPad 10 generation (Wi-Fi)</h1>
                    <h3 className="text-sm text-gray-500">64GB / 256GB</h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">14,200 บาท</p>
                        <p className="text-sm text-gray-500 line-through">17,900 บาท</p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                        <button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            </>
         );
    }

    const gadget = () => {
        return ( 
            <>
            {/* g1 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/apple/accessories/power-and-cable/magsafe-battery-pack/apple-magsafe-battery-pack.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-[#E0EFEE] opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800">MagSafe Battery Pack</h1>
                    <h3 className="text-sm text-gray-500"></h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">3,990 บาท</p>
                        <p className="text-sm text-gray-500 line-through"></p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                        <button className=" px-5 py-1 rounded-full hover:bg-[#5C9D2E] bg-[#73C23A] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            {/* g2 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/fibre/tp-link/deco-x20-dual-x20-dual-band-ax1800-mesh-wifi6/fibre-tp-link-deco-x20-dual-x20-dual-band-ax1800-mesh-wifi6.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-[#E0EFEE] opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800 ">TP-Link Deco X20 Dual-Band AX1800 Mesh WiFi 6 System (2 Pack)</h1>
                    <h3 className="text-sm text-gray-500"></h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">5,750 บาท</p>
                        <p className="text-sm text-gray-500 line-through">6,990 บาท</p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                         <button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            {/* g3 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/xiaomi/accessories/redmi-buds-4/xiaomi-redmi-buds-4.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-slate-300 opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 h-fit text-gray-800">redmi Buds 4</h1>
                    <h3 className="text-sm text-gray-500"></h3>
                </div>
                <div className="w-full h-[15%]  flex relative  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">1,290 บาท</p>
                        <p className="text-sm text-gray-500 line-through">1,490 บาท</p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                        <button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            {/* g4 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/apple/accessories/airpods-and-earpods/airpods-3rd-gen/apple-airpods-3rd-gen.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-slate-300 opacity-70% text-[#1E3D35] absolute left-5  top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800">AirPods (รุ่นที่ 3) พร้อมเคสชาร์จ MagSafe</h1>
                    <h3 className="text-sm text-gray-500"></h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">6,190 บาท</p>
                        <p className="text-sm text-gray-500 line-through">6,990 บาท</p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                        <button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            </>
         );
    }

    if(type=='phone'){
        return(phone())
    }else if(type=='tablet'){
        return(tablet())
    }else{return(gadget())}


}
 