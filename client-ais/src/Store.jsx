import Footer from './components/Footer';
import Header from './components/Header';
import { Carousel } from 'antd';
import {AiOutlineRight,AiOutlineLeft} from "react-icons/ai";
import Recomend from './components/Recomend';
import { useState ,Nav} from 'react';
import NewProduct from './components/NewProduct';
import { useRef } from 'react';
import './styled.css';
const Store = () => {
    const [rec,setRec]= useState('phone')
    const [newP,setNewP]= useState('phone')
    const active='w-fit text-black border-y-4 border-white   border-b-[#73C23A]  text-black text-center  text-[20px] text-center h-full flex items-center'
    const style='w-fit text-black border-y-4 border-white     focus:text-black text-center text-gray-500 text-[20px] text-center h-full flex items-center'
    const ref=useRef();

    return ( 
        <>  
        <div className='flex flex-col w-screen overflow-hidden'>
            <Header></Header>
            <div className='w-full h-[45px] justify-center  flex bg-[#EEF8E8]'>
                <div className='w-[68%] h-full flex items-center'>
                    <a href='http://localhost:5173/' className='text-[20px]  text-gray-500'>ลูกค้าบุคคล&nbsp;&nbsp;/&nbsp;</a>
                    <p className='textgray-800 text-[20px] text-[#1E3D35] font-bold'>&nbsp;&nbsp;ร้านค้า</p>
                </div>
            </div>
            {/* sliding image */}
            <div className="w-full h-[600px]  relative overflow-hidden">
            <Carousel autoplay draggable ref={ref} >
                <div className="w-full h-[600px] overflow-hidden">
                    <img src="https://www.ais.th/content/dam/ais/consumer/content/herobanner/hbn-samsung-galaxy_z-register-pc-th-jul-24.jpg" alt="" className="w-full"/>
                </div>
                <div className="w-full h-[600px] overflow-hidden">
                    <img src="https://www.ais.th/content/dam/ais/consumer/content/herobanner/herobanner-oppo/hbb-oppo-reno-series-pc-jul-26.jpg" alt="" className="w-full"/>
                </div>
                <div className="w-full h-[600px] overflow-hidden">
                    <img src="https://www.ais.th/content/dam/ais/consumer/content/herobanner/herobanner-samsung/hbn-store-samsung-OLS-Web-banner1600x500-TH-10-aug-23.jpg" alt="" className="w-full"/>
                </div>
                <div className="w-full h-[600px] overflow-hidden">
                    <img src="https://www.ais.th/content/dam/ais/consumer/content/herobanner/hbn-sony-PS5-pc.jpg" alt="" className="w-full"/>
                </div>
                <div className="w-full h-[600px] overflow-hidden">
                    <img src="https://www.ais.th/content/dam/ais/consumer/content/herobanner/herobanner-realme/hbn-realme-11-pro-pc-aug-15.jpg" alt="" className="w-full"/>
                </div>
                <div className="w-full h-[600px] overflow-hidden">
                    <img src="https://www.ais.th/content/dam/ais/consumer/content/herobanner/hbn-bestbuy-ruio-a-ii-pc-jul-31-v2.jpg" alt="" className="w-full"/>
                </div>

                <div className="w-full h-[600px] overflow-hidden">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/hero-banner/banner-benefit-ols-1600x500.jpg" alt="" className="w-full"/>
                </div>
                <div className="w-full h-[600px] overflow-hidden">
                    <img src="https://www.ais.th/content/dam/ais/consumer/store/hero-banner/AIS-Points-AOS-1600x500.jpg" alt="" className="w-full"/>
                </div>
                </Carousel>
                <button onClick={()=>{ref.current.prev();}} className="w-10 h-10 bg-gray-100 rounded-full  absolute flex justify-center items-center top-[45%] left-6" ><AiOutlineLeft className="text-[20px] text-gray-500"/></button>
                <button onClick={()=>{ref.current.next();}} className="w-10 h-10 bg-gray-100 rounded-full  absolute flex justify-center items-center top-[45%] right-10" ><AiOutlineRight className="text-[20px] text-gray-500"/></button>
           
            </div>
            
            
            {/* new product */}
            <div className='w-full h-[600px] flex flex-col mt-10 items-center  '>
                <h1 className='text-[34px] w-full text-center  font-bold text-[#1E3D35]'>สินค้ามาใหม่</h1>
                <div className='w-[68%] h-full flex flex-col    '>
                    {/* nav */}
                    <div className='w-full h-[50px] flex gap-8 mt-3 justify-center mb-8 border-b'>
                        <button onClick={()=>{setNewP('phone')}} className={(newP=='phone')?active:style}>มือถือ</button>
                        <button onClick={()=>{setNewP('tablet')}} className={(newP=='tablet')?active:style}>แท็บเล็ต</button>
                        <button onClick={()=>{setNewP('gadget')}} className={(newP=='gadget')?active:style}>อุปกรณ์เสริม</button>
                    </div>
                    {/* product div */}
                    <div className="w-full flex justify-between h-full ">
                        <NewProduct type={newP}></NewProduct>
                    </div>
                </div>
            </div>
            {/* end new product */}

            {/* recommend */}
            <div className='w-full h-[600px] flex flex-col mt-[80px] items-center  '>
                <h1 className='text-[34px] w-full text-center  font-bold text-[#1E3D35]'>สินค้าแนะนำ</h1>
                <div className='w-[68%] h-full flex flex-col    '>
                    {/* nav */}
                    <div className='w-full h-[50px] flex gap-8 justify-center mt-3 mb-8 border-b'>
                    {/* {({isActive})=>isActive?navActive:navStyle} */}
                        <button onClick={()=>{setRec('phone')}} className={(rec=='phone')?active:style}>มือถือ</button>
                        <button onClick={()=>{setRec('tablet')}} className={(rec=='tablet')?active:style}>แท็บเล็ต</button>
                        <button onClick={()=>{setRec('gadget')}} className={(rec=='gadget')?active:style}>อุปกรณ์เสริม</button>
                    </div>
                    {/* product div */}
                    <div className="w-full flex justify-between h-full ">
                        <Recomend type={rec}/>
                    </div>
                </div>
            </div>
            {/* end recommend */}

            {/* promotion */}
            <div className="w-full h-[680px] flex flex-col mt-10 items-center ">
                <h1 className="w-full mt-10 mb-7 text-[#1E3D35] text-[34px] text-center font-extrabold">โปรโมชัน</h1>
                <div className="w-[68%] h-full flex justify-between">
                    {/* item1 */}
                    <div className="w-[23%] h-full flex flex-col">
                        <div className="w-full h-[75%]">
                            <img className="w-full rounded-lg" src="https://www.ais.th/content/dam/ais/consumer/content/herobanner/herobanner-apple/hbn-iphone-14-pro-max-buy1-get1-mb-jul-31.jpg" alt="" />
                            <p className="text-[18px] mt-5 text-gray-700 font-bold">iPhone Buy 1 Get 1</p>
                            <p className="text-[17px] mt-1 mb-1 text-gray-700  h-[80px]">คุ้มกว่านี้ไม่มีอีกแล้ว! ซื้อ iPhone ฟรี AirPods รุ่นที่ 2 พร้อมราคาพิเศษเมื่อสมัครแพ็กเกจ สัญญา 18 เดือน</p>
                            <p className="text-[17px] mt-1 mb-5 text-gray-400 ">18 ก.ค. 66 – 31 ก.ค. 66</p>
                            <div className="flex items-center">
                                <a className="text-[20px]  text-[#73C23A] font-bold" href="#">รายละเอียด&nbsp;</a>
                                <AiOutlineRight className="text-[20px]  text-[#73C23A] font-bold"></AiOutlineRight>
                            </div>
                        </div>
                    </div>
                    {/* item2 */}
                    <div className="w-[23%] h-full flex flex-col">
                        <div className="w-full h-[75%]">
                            <img className="w-full rounded-lg" src="https://www.ais.th/content/dam/ais/consumer/content/herobanner/hbn-vivo-y36-mb-aug-15.jpg" alt="" />
                            <p className="text-[18px] mt-5 text-gray-700 font-bold">VIVO Y36 5G เริ่มต้นที่ 5,799 บ.</p>
                            <p className="text-[17px] mt-1 mb-1 text-gray-700 h-[80px] ">ผ่อน 0% นาน 10 เดือน เครื่องที่ใช่กับสเปกที่ชอบ ที่ AIS Online Store</p>
                            <p className="text-[17px] mt-1 mb-5 text-gray-400 ">7 ก.ค. 66 - 15 ส.ค. 66</p>
                            <div className="flex items-center">
                                <a className="text-[20px]  text-[#73C23A] font-bold" href="#">รายละเอียด&nbsp;</a>
                                <AiOutlineRight className="text-[20px]  text-[#73C23A] font-bold"></AiOutlineRight>
                            </div>
                        </div>
                    </div>
                    {/* item3 */}
                    <div className="w-[23%] h-full flex flex-col">
                        <div className="w-full h-[75%]">
                            <img className="w-full rounded-lg" src="https://www.ais.th/content/dam/ais/consumer/content/herobanner/herobanner-realme/hbn-realme-11-pro-mb-aug-15.jpg" alt="" />
                            <p className="text-[18px] mt-5 text-gray-700 font-bold">realme 11 Pro Series 5G</p>
                            <p className="text-[17px] mt-1 mb-1 text-gray-700 h-[80px]">กล้อง 200MP ซูมเหนือระดับ รับทันที realme Gift box มูลค่า 1,999 บ. ที่ AIS Online Store</p>
                            <p className="text-[17px] mt-1 mb-5 text-gray-400 ">7 ก.ค. 66 – 15 ส.ค. 66</p>
                            <div className="flex items-center">
                                <a className="text-[20px]  text-[#73C23A] font-bold" href="#">รายละเอียด&nbsp;</a>
                                <AiOutlineRight className="text-[20px]  text-[#73C23A] font-bold"></AiOutlineRight>
                            </div>
                        </div>
                    </div>
                    {/* item4 */}
                    <div className="w-[23%] h-full flex flex-col">
                        <div className="w-full h-[75%]">
                            <img className="w-full rounded-lg" src="https://www.ais.th/content/dam/ais/consumer/content/herobanner/hbn-bestbuy-ruio-a-ii-mb-jul-31-v2.jpg" alt="" />
                            <p className="text-[18px] mt-5 text-gray-700 font-bold">RUIO A-ll คุ้มเว่อร์ ลดทันที 1,000 บ.</p>
                            <p className="text-[17px] mt-1 mb-1 text-gray-700 h-[80px]">เครื่องเปล่าไม่ติดสัญญา ที่ AIS Online Store</p>
                            <p className="text-[17px] mt-1 mb-5 text-gray-400 ">28 มิ.ย. 66 – 31 ก.ค. 66</p>
                            <div className="flex items-center">
                                <a className="text-[20px]  text-[#73C23A] font-bold" href="#">รายละเอียด&nbsp;</a>
                                <AiOutlineRight className="text-[20px]  text-[#73C23A] font-bold"></AiOutlineRight>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* end promotion */}

            {/* online store */}
            <div className='w-full h-[300px] flex items-center flex-col '>
                <h1 className='text-[34px] w-full text-center mt-10 mb-6 font-bold text-[#1E3D35]'>ร้านออนไลน์ของเรา</h1>
                <div className='w-[68%] flex justify-between  gap-4 h-full'>
                    <div className='w-[23%] h-full flex '>
                        <div className='w-[30%] h-full '>
                            <img src="https://www.ais.th/content/dam/ais/en/generic/images/Cash-on-delivery.png" alt="" />
                        </div>
                        <div className='flex flex-col w-full h-fit '>
                            <p className='text-gray-800 text-[18px] font-semibold'>หลากหลายช่องทางชำระเงิน</p>
                            <p className='text-gray-500 text-[15px] mt-4 '>สะดวกสบาย รวดเร็ว และมั่นใจได้ในความปลอดภัย</p>
                        </div>
                    </div>
                    <div className='w-[23%] h-full flex '>
                        <div className='w-[30%] h-full '>
                            <img src="https://www.ais.th/content/dam/ais/en/generic/images/10-Days-return.png" alt="" />
                        </div>
                        <div className='flex flex-col w-full h-fit '>
                            <p className='text-gray-800 text-[18px] font-semibold'>รับสินค้าคืนภายใน 10 วัน</p>
                            <p className='text-gray-500 text-[15px] mt-4 '>การคืนเงินจะดำเนินการในกรณีที่มีการคืนสินค้า หรือ ยกเลิกคำสั่งซื้อ ระยะเวลาคืนเงิน 15-45 วันทำการ (ขึ้นอยู่กับธนาคารที่ใช้บริการ)</p>
                        </div>
                    </div>
                    <div className='w-[23%] h-full flex '>
                        <div className='w-[30%] h-full '>
                            <img src="https://www.ais.th/content/dam/ais/consumer/symbols/icon-services/track-and-trace-service.svg" alt="" />
                        </div>
                        <div className='flex flex-col w-full h-fit '>
                            <p className='text-gray-800 text-[18px] font-semibold'>ติดตามสถานะจัดส่งได้</p>
                            <p className='text-gray-500 text-[15px] mt-4 '>คุณสามารถตรวจสอบ สถานะการสั่งซื้อได้บนเว็บไซต์</p>
                        </div>
                    </div>
                    <div className='w-[23%] h-full flex '>
                        <div className='w-[30%] h-full '>
                            <img src="https://www.ais.th/content/dam/ais/en/business/images/security-checkout-logo.png" alt="" />
                        </div>
                        <div className='flex flex-col w-full h-fit '>
                            <p className='text-gray-800 text-[18px] font-semibold'>ระบบชำระเงินปลอดภัย</p>
                            <p className='text-gray-500 text-[15px] mt-4 '>ชำระเงินออนไลน์ด้วยบัตรเครดิต หรือบัตรเดบิต ด้วยมาตรฐาน ความปลอดภัยระดับสากล</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end online store */}

            <div className='w-full flex bg-gray-100 items-center justify-center h-[150px]'>
                <img className='h-1/3' src="https://www.ais.th/content/dam/ais/consumer/symbols/logo/payment/verified-logos-l.png" alt="" />
            </div>
            <Footer></Footer>
        </div>
        </>
     );
}
 
export default Store;