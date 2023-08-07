import React, { useRef } from "react";
import { Link } from "react-router-dom";
import './styled.css';
import Footer from "./components/Footer";
import Header from './components/Header';
import { Carousel} from 'antd';
import {AiOutlineRight,AiOutlineLeft} from "react-icons/ai";




export default function Consumers(){
    console.log('consumers')
    const ref=useRef();

    return(
        <>
        <div className='flex flex-col w-screen overflow-hidden justify-center'>
        {/* <header></header> */}
        <Header></Header>

        {/* sliding image */}
            <div className="w-full h-[600px]  relative overflow-hidden">
            <Carousel autoplay draggable ref={ref} >
                <div className="w-full h-[600px] overflow-hidden">
                    <img src="https://www.ais.th/content/dam/ais/consumer/content/herobanner/hbn-samsung-galaxy_z-register-pc-th-jul-24.jpg" alt="" className="w-full"/>
                </div>
                <div className="w-full h-[600px] overflow-hidden">
                    <img src="https://www.ais.th/content/dam/ais/consumer/content/home-banner/5g-square-1600x500.jpg" alt="" className="w-full"/>
                </div>
                <div className="w-full h-[600px] overflow-hidden">
                    <img src="https://www.ais.th/content/dam/ais/consumer/content/home-banner/AIS_Fibre_Branding_Banner_Jul_Hero_Official_1600x500_TH.jpg" alt="" className="w-full"/>
                </div>
                <div className="w-full h-[600px] overflow-hidden">
                    <img src="https://www.ais.th/content/dam/ais/consumer/content/home-banner/1600x500_WebBanner_HBOPack_BATMANvSUPERMAN_th.jpg" alt="" className="w-full"/>
                </div>
                <div className="w-full h-[600px] overflow-hidden">
                    <img src="https://www.ais.th/content/dam/ais/consumer/content/home-banner/Ready2Fly-x-TA-1600x500-Click_th.png" alt="" className="w-full"/>
                </div>
                <div className="w-full h-[600px] overflow-hidden">
                    <img src="https://www.ais.th/content/dam/ais/consumer/content/home-banner/ip-14-pc-th-uobcity-jul-31-new.jpg" alt="" className="w-full"/>
                </div>
                <div className="w-full h-[600px] overflow-hidden">
                    <img src="https://www.ais.th/content/dam/ais/consumer/content/home-banner/AIS-Amazing-1-Point-Taroto_1600x500_th.jpg" alt="" className="w-full"/>
                </div>
            </Carousel>
            <button onClick={()=>{ref.current.prev();}} className="w-10 h-10 bg-gray-100 rounded-full  absolute flex justify-center items-center top-[45%] left-6" ><AiOutlineLeft className="text-[20px] text-gray-500"/></button>
            <button onClick={()=>{ref.current.next();}} className="w-10 h-10 bg-gray-100 rounded-full  absolute flex justify-center items-center top-[45%] right-10" ><AiOutlineRight className="text-[20px] text-gray-500"/></button>
            </div>
        {/* product */}
            <div className="w-full h-fit flex-col  py-[80px] justify-center ">
                <h1 className="text-[35px] w-screen  text-[#1E3D35] mb-2 text-center font-extrabold">สินค้าและบริการ</h1>
                <div className="w-full h-full flex justify-center ">
                    {/* menu */}
                    <div className="w-9/12 h-full  p-5 flex flex-wrap gap-4 ">
                        <div className="w-[65%]  relative rounded-2xl bg-green-200 overflow-hidden">
                            <img className="hover:scale-110 duration-300 h-full " src="https://www.ais.th/content/dam/ais/consumer/content/home/mansory-device-l.jpg" alt="" />
                            <h1 className="bottom-8 left-8 absolute text-white font-bold text-[35px]">มือถือและอุปกรณ์</h1>
                        </div>
                        <div className="w-[32%]  relative rounded-2xl bg-green-200 overflow-hidden">
                            <img className="hover:scale-110 duration-300 h-full " src="https://www.ais.th/content/dam/ais/consumer/content/home/mansory-postpaid-m.jpg" alt="" />
                            <h1 className="bottom-8 left-8 absolute text-white font-bold text-[35px]">ลูกค้ารายเดือน</h1>
                        </div>
                        <div className="w-[32%]  relative rounded-2xl bg-green-200 overflow-hidden">
                            <img className="hover:scale-110 duration-300 h-full " src="https://www.ais.th/content/dam/ais/consumer/content/home/mansory-prepaid-m.jpg" alt="" />
                            <h1 className="bottom-8 left-8 absolute text-white font-bold text-[35px]">ลูกค้าเติมเงิน</h1>
                        </div>
                        <div className="w-[65%]  relative rounded-2xl bg-green-200 overflow-hidden">
                            <img className="hover:scale-110 duration-300 h-full " src="https://www.ais.th/content/dam/ais/consumer/content/home/mansory-fibre-l.jpg" alt="" />
                            <h1 className="bottom-8 left-8 absolute text-white font-bold text-[35px]">ไฟเบอร์ เน็ตบ้าน</h1>
                        </div>
                        <div className="w-[32%]  relative rounded-2xl bg-green-200 overflow-hidden">
                            <img className="hover:scale-110 duration-300 h-full " src="https://www.ais.th/content/dam/ais/consumer/content/home/mansory-insurance-m.jpg" alt="" />
                            <h1 className="bottom-8 left-8 absolute text-white font-bold text-[35px]">ประกัน</h1>
                        </div>
                        <div className="w-[32%]  relative rounded-2xl bg-green-200 overflow-hidden">
                            <img className="hover:scale-110 duration-300 h-full " src="https://www.ais.th/content/dam/ais/consumer/content/home/mansory-entertainment-m.jpg" alt="" />
                            <h1 className="bottom-8 left-8 absolute text-white font-bold text-[35px]">ไลฟ์ไตล์</h1>
                        </div>
                        <div className="w-[32%]  relative rounded-2xl bg-green-200 overflow-hidden">
                            <img className="hover:scale-110 duration-300 h-full " src="https://www.ais.th/content/dam/ais/consumer/content/home/mansory-privilege-m.jpg" alt="" />
                            <h1 className="bottom-8 left-8 absolute text-white font-bold text-[35px]">สิทธิพิเศษ</h1>
                        </div>

                    </div>
                </div>
            </div>
        {/* UOB */}
            <div className="w-screen h-screen flex relative items-center bg-black">
                <img src="https://www.ais.th/content/dam/ais/consumer/content/home-banner/big-branner-uob-bg.jpg" alt="" />
                <div className="w-3/5 h-3/5  pl-[150px] absolute">
                    <img src="https://www.ais.th/content/dam/ais/consumer/content/home-banner/big-branner-uob-logo.png" alt="" />
                    <span>
                        <span className="text-white text-[40px] font-extrabold">พบกับ&nbsp;</span>
                        <span className="text-[#64B232] text-[40px] font-extrabold">iPhone 14&nbsp;</span>
                        <span className="text-white text-[40px] font-extrabold">ที่&nbsp;</span>
                        <span className="text-[#64B232] text-[40px] font-extrabold">AIS</span>
                        <p className="text-white text-[30px] font-extrabold">เปลี่ยน iPhone ใหม่ทุก 24 เดือน เมื่อซื้อ iPhone 14 ทุกรุ่น</p>
                        <p className="text-white text-[30px] font-extrabold">ที่ AIS กับ UOB Best Buy</p>
                    </span>

                    <button className="bg-[#73C23A] my-10 text-white w-[160px] h-[60px] font-bold text-[18px] rounded-full hover:bg-[#5C9D2E]">ดูเพิ่มเติม</button>
                    <h1 className="text-white ">*สำหรับลูกค้าที่ใช้เครือข่ายเอไอเอสอย่างต่อเนื่องด้วยแพ็คเกจรายเดือน 699 บาทขึ้นไป. </h1>
                </div>
            </div>
        {/* promotion */}
            <div className="w-screen h-[135px] relative flex bg-[#73C23A]">
                <div className="h-full w-3/5 flex justify-center items-center">
                    <h1 className="text-white text-[30px] font-extrabold ">กำลังมองหามือถือราคาพิเศษอยู่หรือเปล่า?</h1>
                </div>
                <div className="h-full w-2/5 flex justify-center items-center">
                    <button className="w-[200px] h-[52px] rounded-3xl bg-white text-[#73C23A] text-[18px] font-bold">ดูข้อเสนอสุดพิเศษ</button>
                </div>
            </div>
        {/* smartphone */}
            <div className="w-full flex justify-center h-[630px] ">
                <div className="w-[68%] flex py-9 flex-col h-full">
                    <h1 className="text-center text-[38px] text-gray-800 mt-5 mb-5 font-extrabold">สมาร์ทโฟน</h1>
                    <div className="w-full flex justify-between h-full ">
                        {/* smartphone 1 */}
                        <div className="w-[23%] h-full flex flex-col">
                            <div className="w-full h-[70%] bg-[#F5F5F5] flex relative rounded-xl">
                                <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/apple/iphone/iphone-14-series/iphone-14-pro-max/iphone-14-pro.png.thumb.319.319.png" alt="" />
                                <p className=" text-sm  p-3 items-center  bg-[#E0EFEE] opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                            </div>
                            <div className="w-full h-[15%]  flex flex-col ">
                                <h1 className="font-bold mt-5 text-gray-800">iPhone 14 Pro Max</h1>
                                <h3 className="text-sm text-gray-500">128GB / 256GB / 512GB / 1TB</h3>
                            </div>
                            <div className="w-full h-[15%]  flex  ">
                                <div className="h-full flex flex-col w-1/2">
                                    <p className="font-bold mt-2 text-gray-800">31,300 บาท</p>
                                    <p className="text-sm text-gray-500 line-through">40,100 บาท</p>
                                </div>
                                <div className="h-full flex items-center justify-end  w-1/2">
                                    <button className=" px-5 py-1 rounded-full hover:bg-[#5C9D2E] bg-[#73C23A] text-white text-[20px] font-extrebold">ดูเพิ่มเติม</button>
                                </div>
                            </div>
                        </div>
                        {/* smartphone2 */}
                        <div className="w-[23%] h-full flex flex-col">
                            <div className="w-full h-[70%] bg-[#F5F5F5] flex relative rounded-xl">
                                <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/samsung/phone/galaxy-z-fold4-5g/samsung-galaxy-zfold-4-5g.png.thumb.319.319.png" alt="" />
                                <p className=" text-sm  p-3 items-center hidden bg-slate-300 opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                            </div>
                            <div className="w-full h-[15%]  flex flex-col ">
                                <h1 className="font-bold mt-5 text-gray-800 ">Samsung Galaxy Z Fold4 5G</h1>
                                <h3 className="text-sm text-gray-500">256GB / 512GB</h3>
                            </div>
                            <div className="w-full h-[15%]  flex  ">
                                <div className="h-full flex flex-col w-1/2">
                                    <p className="font-bold mt-2 text-gray-800">48,900 บาท</p>
                                    <p className="text-sm text-gray-500 line-through">59,900 บาท</p>
                                </div>
                                <div className="h-full flex items-center justify-end  w-1/2">
                                    <button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">ดูเพิ่มเติม</button>
                                </div>
                            </div>
                        </div>
                        {/* smartphone3 */}
                        <div className="w-[23%] h-full flex flex-col">
                            <div className="w-full h-[70%] bg-[#F5F5F5] flex relative rounded-xl">
                                <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/xiaomi/phone/xiaomi-12t-pro-5g/xiaomi-12t-pro-5g.png.thumb.319.319.png" alt="" />
                                <p className=" text-sm  p-3 items-center hidden bg-slate-300 opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                            </div>
                            <div className="w-full h-[15%]  flex flex-col ">
                                <h1 className="font-bold mt-5 text-gray-800">Xiaomi 12T Pro 5G</h1>
                                <h3 className="text-sm text-gray-500">256GB</h3>
                            </div>
                            <div className="w-full h-[15%]  flex  ">
                                <div className="h-full flex flex-col w-1/2">
                                    <p className="font-bold mt-2 text-gray-800">15,990 บาท</p>
                                    <p className="text-sm text-gray-500 line-through">25,990 บาท</p>
                                </div>
                                <div className="h-full flex items-center justify-end  w-1/2">
                                    <button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">ดูเพิ่มเติม</button>
                                </div>
                            </div>
                        </div>
                        {/* smartphone4 */}
                        <div className="w-[23%] h-full flex flex-col">
                            <div className="w-full h-[70%] bg-[#F5F5F5] flex relative rounded-xl">
                                <img src="https://www.ais.th/content/dam/ais/consumer/store/devices/apple/ipad/ipad-air/5th-gen/wifi-cellular/ipad-air-cellular-5th-gen.png.thumb.319.319.png" alt="" />
                                <p className=" text-sm  p-3 items-center hidden bg-[#E0EFEE] opacity-70% text-[#1E3D35] absolute left-5 top-5 text-center font-semibold rounded-xl">แนะนำ</p>
                            </div>
                            <div className="w-full h-[15%]  flex flex-col ">
                                <h1 className="font-bold mt-5 text-gray-800">iPad Air 5 Wi-Fi + Cellular</h1>
                                <h3 className="text-sm text-gray-500">64GB / 256GB</h3>
                            </div>
                            <div className="w-full h-[15%]  flex  ">
                                <div className="h-full flex flex-col w-1/2">
                                    <p className="font-bold mt-2 text-gray-800">24,000 บาท</p>
                                    <p className="text-sm text-gray-500 line-through">29,900 บาท</p>
                                </div>
                                <div className="h-full flex items-center justify-end  w-1/2">
                                    <button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">ดูเพิ่มเติม</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        {/* end smartphone */}

        {/* simcard */}
            <div className="w-full h-[650px] flex flex-col items-center pt-8  bg-gray-100">
                <h1 className="text-center text-[38px] mt-5 text-gray-800 font-extrabold">ซิมการ์ด</h1>
                <div className="h-full w-[68%]  flex justify-between">
                    {/* sim1 */}
                    <div className="w-[23%] flex flex-col h-full">
                        <img src="https://www.ais.th/content/dam/ais/consumer/store/sim-card/postpaid/premium-789-289/product-detail/premium-789-289.png" alt="" />
                        <p className="text-[18px] font-bold text-gray-800">Premuim Number SIM</p>
                        <ul className="list-disc text-[16px] mt-3 ml-10 mb-4 text-gray-500">
                            <li>เน็ต 80GB</li>
                            <li>โทรฟรี 300 นาที</li>
                        </ul>
                        <p className="text-[18px] font-bold my-3 text-gray-800">199 บาท</p>
                        <div className="w-full flex justify-center"><button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">ดูเพิ่มเติม</button></div>
                    </div>
                    {/* sim2 */}
                    <div className="w-[23%] flex flex-col h-full">
                        <img src="https://www.ais.th/content/dam/ais/consumer/store/sim-card/postpaid/zeed/product-detail/zeed.png" alt="" />
                        <p className="text-[18px] font-bold text-gray-800">ZEED 5G</p>
                        <ul className="list-disc text-[16px] mt-3 ml-10 mb-4 text-gray-500">
                            <li>4G/3G เน็ตไม่จำกัด 8Mbps</li>
                            <li>โทรฟรี 100 นาที</li>
                        </ul>
                        <p className="text-[18px] font-bold my-3 text-gray-800">55 บาท</p>
                        <div className="w-full flex justify-center"><button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">ดูเพิ่มเติม</button></div>
                    </div>
                    {/* sim3 */}
                    <div className="w-[23%] flex flex-col h-full">
                        <img src="https://www.ais.th/content/dam/ais/consumer/store/sim-card/prepaid/sim2fly-asia/product-detail/sim2fly-asia.png" alt="" />
                        <p className="text-[18px] font-bold text-gray-800">SIM2Fly</p>
                        <ul className="list-disc text-[16px] mt-3 ml-10 mb-4 text-gray-500">
                            <li>เน็ต 10GB เล่นได้ 10วัน</li>
                            <li>โทรเริ่มที่ 6 บาทต่อนาที</li>
                        </ul>
                        <p className="text-[18px] font-bold my-3 text-gray-800">399 บาท</p>
                        <div className="w-full flex justify-center"><button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">ดูเพิ่มเติม</button></div>
                    </div>
                    {/* sim4 */}
                    <div className="w-[23%] flex flex-col h-full">
                        <img src="https://www.ais.th/content/dam/ais/consumer/store/sim-card/prepaid/the-one/product-detail/the-one.png" alt="" />
                        <p className="text-[18px] font-bold text-gray-800">The ONE SIM</p>
                        <ul className="list-disc text-[16px] mt-3 ml-10 mb-4 text-gray-500">
                            <li>เน็ต 5G 1 GB</li>
                            <li>พร้อมความบันเทิง PLAY FAMILY</li>
                        </ul>
                        <p className="text-[18px] font-bold my-3 text-gray-800">50 บาท</p>
                        <div className="w-full flex justify-center"><button className=" px-5 py-1 rounded-full bg-[#73C23A] hover:bg-[#5C9D2E] text-white text-[20px] font-extrebold">ดูเพิ่มเติม</button></div>
                    </div>
                </div>
            </div>
        {/* end simcard */}

        {/* network */}
            <div className="w-full  h-[650px] flex flex-col items-center">
                <div className="w-[68%] h-full  flex flex-col ">
                    <h1 className="mt-10 mb-6 text-gray-700 w-full text-center font-extrabold text-[38px]">เครือข่าย</h1>
                    <div className="w-full h-full gap-4 flex">
                        <div className="w-1/2 h-fit rounded-xl overflow-hidden ">
                            <img className="w-full hover:scale-110 duration-300" src="https://www.ais.th/content/dam/ais/consumer/content/home/banner-network-5g-sa.jpg" alt="" />
                        </div>
                        <div className="w-1/2 h-fit flex gap-6 flex-col  ">
                            <div className="w-full h-1/2 rounded-xl overflow-hidden">
                                <img className="w-full hover:scale-105 duration-300" src="https://www.ais.th/content/dam/ais/consumer/content/home/network-wifi.jpg" alt="" />
                            </div>
                            <div className="w-full h-1/2 rounded-xl overflow-hidden">
                                <img className="w-full hover:scale-105 duration-300" src="https://www.ais.th/content/dam/ais/consumer/content/home/network-nb-iot.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* fibre */}
            <div className="w-full h-[630px] flex flex-col items-center bg-gray-100">
                <h1 className="w-full mt-10 mb-7 text-[#1E3D35] text-[38px] text-center font-extrabold">ไฟเบอร์ เน็ตบ้าน</h1>
                <div className="w-[68%] h-full flex justify-between">
                    {/* item1 */}
                    <div className="w-[23%] h-full flex flex-col">
                        <div className="w-full h-[75%]">
                            <img className="w-full rounded-lg" src="https://www.ais.th/content/dam/ais/consumer/content/home/fibre-01_ais_fibre-power-4-advance-en.jpg" alt="" />
                            <p className="text-[18px] mt-5 text-gray-700 font-bold">POWER4 ADVANCE</p>
                            <p className="text-[17px] mt-1 mb-5 text-gray-500 ">ตอบโจทย์ทุกฟังก์ชันการใช้งาน ด้วย WiFi อัจฉริยะ</p>
                            <div className="flex items-center">
                                <a className="text-[20px]  text-[#73C23A] font-bold" href="#">ดูเพิ่มเติม&nbsp;</a>
                                <AiOutlineRight className="text-[20px]  text-[#73C23A] font-bold"></AiOutlineRight>
                            </div>
                        </div>
                    </div>
                    {/* item2 */}
                    <div className="w-[23%] h-full flex flex-col">
                        <div className="w-full h-[75%]">
                            <img className="w-full rounded-lg" src="https://www.ais.th/content/dam/ais/consumer/content/home/fibre-02_ais_fibre-BB24.jpg" alt="" />
                            <p className="text-[18px] mt-5 text-gray-700 font-bold">BROADBAND24</p>
                            <p className="text-[17px] mt-1 mb-5 text-gray-500 ">เน็ตบ้านคุณภาพ ติดตั้งเร็ว ติดต่อง่าย แก้ปัญหาจบใน 24 ชม.</p>
                            <div className="flex items-center">
                                <a className="text-[20px]  text-[#73C23A] font-bold" href="#">ดูเพิ่มเติม&nbsp;</a>
                                <AiOutlineRight className="text-[20px]  text-[#73C23A] font-bold"></AiOutlineRight>
                            </div>
                        </div>
                    </div>
                    {/* item3 */}
                    <div className="w-[23%] h-full flex flex-col">
                        <div className="w-full h-[75%]">
                            <img className="w-full rounded-lg" src="https://www.ais.th/content/dam/ais/consumer/content/home/fibre-03_AIS_HomePLUS.jpg" alt="" />
                            <p className="text-[18px] mt-5 text-gray-700 font-bold">Fibre Serenade</p>
                            <p className="text-[17px] mt-1 mb-5 text-gray-500 ">ที่สุดของความคุ้มค่า พร้อมฟรี ค่าแรกเข้า มูลค่า 2,000 บาท</p>
                            <div className="flex items-center">
                                <a className="text-[20px]  text-[#73C23A] font-bold" href="#">ดูเพิ่มเติม&nbsp;</a>
                                <AiOutlineRight className="text-[20px]  text-[#73C23A] font-bold"></AiOutlineRight>
                            </div>
                        </div>
                    </div>
                    {/* item4 */}
                    <div className="w-[23%] h-full flex flex-col">
                        <div className="w-full h-[75%]">
                            <img className="w-full rounded-lg" src="https://www.ais.th/content/dam/ais/consumer/content/home/fibre-04_AIS-Fibre-mesh-wifi.jpg" alt="" />
                            <p className="text-[18px] mt-5 text-gray-700 font-bold">SuperMESH WiFi</p>
                            <p className="text-[17px] mt-1 mb-5 text-gray-500 ">1 Gbps ตัวจริง สุดคุ้ม เพียง 999 บ./เดือน</p>
                            <p className="text-[17px] text-gray-100 ">1 Gbps ตัวจริง สุดคุ้ม เพียง 999 บ./เดือน</p>
                            <div className="flex items-center">
                                <a className="text-[20px]  text-[#73C23A] font-bold" href="#">ดูเพิ่มเติม&nbsp;</a>
                                <AiOutlineRight className="text-[20px]  text-[#73C23A] font-bold"></AiOutlineRight>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            <Footer></Footer>

        {/* endpage */}
        </div>
        </>
    )
}