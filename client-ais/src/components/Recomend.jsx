import { Carousel } from 'antd';
import {AiOutlineRight} from "react-icons/ai";


export default function Recomend({type}) {

    const phone = () => {
        return ( 
            <>
            {/* p1 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/apple/iphone/iphone-14-series/iphone-14-plus/iphone-14.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center  bg-[#E0EFEE] opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800">iPhone 14</h1>
                    <h3 className="text-sm text-gray-500">128GB / 256GB / 512GB</h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">19,900 บาท</p>
                        <p className="text-sm text-gray-500 line-through">28,500 บาท</p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                        <button className=" px-5 py-1 rounded-full hover:bg-[#5C9D2E] bg-[#73C23A] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            {/* p2 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/samsung/phone/galaxy-z-fold5/samsung-galaxy-zfold-5.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center  bg-[#E0EFEE] opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800 ">Samsung Galaxy Z Fold5</h1>
                    <h3 className="text-sm text-gray-500">256GB / 512GB / 1TB</h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">50,800 บาท</p>
                        <p className="text-sm text-gray-500 line-through">59,900 บาท</p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                         <button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            {/* p3 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/vivo/phone/y22/vivo-y22.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-slate-300 opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800">vivo Y22</h1>
                    <h3 className="text-sm text-gray-500">64GB</h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">2,799 บาท</p>
                        <p className="text-sm text-gray-500 line-through">4,999 บาท</p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                        <button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            {/* p4 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/xiaomi/phone/redmi-10-5g/redmi-10-5g.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-slate-300 opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800">Redmi 10 5G (6/128GB)</h1>
                    <h3 className="text-sm text-gray-500">128GB</h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">3,199 บาท</p>
                        <p className="text-sm text-gray-500 line-through">7,299 บาท</p>
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
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/samsung/tablets/galaxy-tab-s8-series/galaxy-tab-s8-ultra/samsung-galaxy-tab-s8-ultra.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-[#E0EFEE] opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800">Samsung Galaxy Tab S8 Ultra 5G</h1>
                    <h3 className="text-sm text-gray-500">128GB</h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">37,800 บาท</p>
                        <p className="text-sm text-gray-500 line-through">45,900 บาท</p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                        <button className=" px-5 py-1 rounded-full hover:bg-[#5C9D2E] bg-[#73C23A] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            {/* t2 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/apple/ipad/ipad-air/5th-gen/wifi/ipad-air-wifi-5th-gen.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-[#E0EFEE] opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800 ">iPad Air 5 Wi-Fi</h1>
                    <h3 className="text-sm text-gray-500">64GB / 256GB</h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">19,200 บาท</p>
                        <p className="text-sm text-gray-500 line-through">23,900 บาท</p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                         <button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            {/* t3 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/apple/ipad/ipad-pro/129-inc-6th-gen/wifi-cellular/ipad-pro-12-9-in-cellular-6th-gen.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-slate-300 opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 h-fit text-gray-800">iPad Pro (6 generation) Wi-Fi + Cellular</h1>
                    <h3 className="text-sm text-gray-500">256GB / 512GB</h3>
                </div>
                <div className="w-full h-[15%]  flex relative  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">48,400 บาท</p>
                        <p className="text-sm text-gray-500 line-through">54,900 บาท</p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                        <button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            {/* t4 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/apple/ipad/ipad/10th-gen/wifi-cellular/ipad-cellular-10th-gen.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-slate-300 opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800">iPad 10 generation (Wi-Fi + Cellular)</h1>
                    <h3 className="text-sm text-gray-500">128GB</h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">17,900 บาท</p>
                        <p className="text-sm text-gray-500 line-through">23,900 บาท</p>
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
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/xiaomi/accessories/xiaomi-smart-camera-c300/xiaomi-smart-camera-c300.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-[#E0EFEE] opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800">Xiaomi Smart Camera C300</h1>
                    <h3 className="text-sm text-gray-500"></h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">1,190 บาท</p>
                        <p className="text-sm text-gray-500 line-through">1,590 บาท</p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                        <button className=" px-5 py-1 rounded-full hover:bg-[#5C9D2E] bg-[#73C23A] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            {/* g2 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/imoo/iot/watch-phone-z6/imoo-watch-phone-z6-purple.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-[#E0EFEE] opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800 ">imoo Watch Phone รุ่น Z6 - PURPLE</h1>
                    <h3 className="text-sm text-gray-500"></h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">7,499 บาท</p>
                        <p className="text-sm text-gray-500 line-through"></p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                         <button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            {/* g3 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/zte/accessories/ais-zte-5g-home-wifi/ais-zte-5g-home-wifi.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-slate-300 opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 h-fit text-gray-800">AIS ZTE 5G Home WiFi (MC888)</h1>
                    <h3 className="text-sm text-gray-500"></h3>
                </div>
                <div className="w-full h-[15%]  flex relative  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">6,490 บาท</p>
                        <p className="text-sm text-gray-500 line-through">9,490 บาท</p>
                    </div>
                    <div className="h-full flex items-center justify-end  w-1/2">
                        <button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">เลือก</button>
                    </div>
                </div>
            </div>
            {/* g4 */}
            <div className="w-[23%] h-full flex flex-col">
                <div className="w-full h-[70%] bg-gray-100 flex relative rounded-lg">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/apple/accessories/apple-tv/apple-tv-4k-3rd-gen/apple-tv-4k-3rd-gen.png.thumb.319.319.png" alt="" />
                    <p className=" text-sm  p-3 items-center hidden bg-slate-300 opacity-70% text-[#1E3D35] absolute left-5  top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                </div>
                <div className="w-full h-[15%]  flex flex-col ">
                    <h1 className="font-bold mt-5 text-gray-800">Apple TV 4K (3gen) Wi-Fi + Ethernet</h1>
                    <h3 className="text-sm text-gray-500"></h3>
                </div>
                <div className="w-full h-[15%]  flex  ">
                    <div className="h-full flex flex-col w-1/2">
                        <p className="font-bold mt-2 text-gray-800">5,490 บาท</p>
                        <p className="text-sm text-gray-500 line-through">5,990 บาท</p>
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
 