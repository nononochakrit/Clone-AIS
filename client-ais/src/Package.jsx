import Header from './components/Header';
import Footer from './components/Footer';
import { Carousel } from 'antd';
import {AiOutlineRight} from "react-icons/ai";


const Package = () => {
    return ( 
        <>
        <Header></Header>
        <div className='w-full h-[45px] justify-center  flex bg-[#EEF8E8]'>
            <div className='w-[68%] h-full flex items-center'>
                <a href='http://localhost:5173/' className='text-[20px]  text-gray-500'>ลูกค้าบุคคล&nbsp;&nbsp;/&nbsp;</a>
                <a href='http://localhost:5173/package' className='textgray-800 text-[20px] text-gray-500'>&nbsp;&nbsp;แพ็คเกจ&nbsp;&nbsp;/</a>
                <p className='textgray-800 text-[20px] text-[#1E3D35] font-bold'>&nbsp;&nbsp;รายเดือน</p>
            </div>
        </div>
        {/* sliding image */}
        <Carousel autoplay >
            <div className="w-full h-[600px] overflow-hidden">
                <img src="https://www.ais.th/content/dam/ais/consumer/content/herobanner/hbn-package-netflix-pc-th-jul.jpg" alt="" className="w-full"/>
            </div>
            <div className="w-full h-[600px] overflow-hidden">
                <img src="https://www.ais.th/content/dam/ais/consumer/content/herobanner/hbn-package-experience-pc-th.jpg" alt="" className="w-full"/>
            </div>
            <div className="w-full h-[600px] overflow-hidden">
                <img src="https://www.ais.th/content/dam/ais/consumer/content/herobanner/hbn-netflix-delete-pc-th.jpg" alt="" className="w-full"/>
            </div>
            <div className="w-full h-[600px] overflow-hidden">
                <img src="https://www.ais.th/content/dam/ais/consumer/content/herobanner/hbn-postpaid-p2p-5g-affordable-pc-jul-31.jpg" alt="" className="w-full"/>
            </div>
            <div className="w-full h-[600px] overflow-hidden">
                <img src="https://www.ais.th/content/dam/ais/consumer/content/herobanner/july-2023-AIS_Insurance_PRUEASYCAREEXTRA_1600x500-click_TH.jpg" alt="" className="w-full"/>
            </div>
                
        </Carousel>

        {/* menu */}
        <div className='w-full  h-[65px] flex  gap-8 py-4 justify-center items-center bg-[#25584F]'>
            <div className=' text-gray-200 border-y-[6px] text-[18px] hover:text-[#73C23A] hover:border-b-[#73C23A] border-[#25584F] hover:font-medium'>แพ็กเกจรายเดือน</div>
            <div className=' text-gray-200 border-y-[6px] text-[18px] hover:text-[#73C23A] hover:border-b-[#73C23A] border-[#25584F] hover:font-medium'>ซิมรายเดือน</div>
            <div className=' text-gray-200 border-y-[6px] text-[18px] hover:text-[#73C23A] hover:border-b-[#73C23A] border-[#25584F] hover:font-medium'>แพ็กเกจเสริม</div>
            <div className=' text-gray-200 border-y-[6px] text-[18px] hover:text-[#73C23A] hover:border-b-[#73C23A] border-[#25584F] hover:font-medium'>เปลี่ยนเติมเงินเป็นรายเดือน</div>
            <div className=' text-gray-200 border-y-[6px] text-[18px] hover:text-[#73C23A] hover:border-b-[#73C23A] border-[#25584F] hover:font-medium'>บริการเสริม</div>
        </div>
        {/* monthly */}
        <div className="w-full h-[680px] flex flex-col gap-2 mt-10  items-center ">
                <h1 className="w-full mt-10 mb-10 text-[#1E3D35] text-[34px] text-center font-extrabold">แพ็กเกจรายเดือน</h1>
                <div className="w-[68%] h-full flex flex-wrap justify-between ">
                
                    {/* item1 */}
                    <div className="w-[23%] h-full flex flex-col">
                        <div className="w-full h-[75%]">
                            <img className="w-full rounded-lg" src="https://www.ais.th/content/dam/ais/consumer/content/package/exclusive/5g-netflix/netflix-mb-th-jul.jpg" alt="" />
                            <p className="text-[18px] mt-5 text-gray-700 font-bold">5G Netflix</p>
                            <p className="text-[17px] mt-1  text-gray-700  h-[80px]">แพ็กเกจรายเดือนใหม่! ครั้งแรกพาคุณเชื่อมต่อโลกความบันเทิงสนุกได้ไม่รู้จบ</p>
                            <div className="flex items-center">
                                <a className="text-[20px]  text-[#73C23A] font-bold" href="#">เพิ่มเติม&nbsp;</a>
                                <AiOutlineRight className="text-[20px]  text-[#73C23A] font-bold"></AiOutlineRight>
                            </div>
                        </div>
                    </div>
                    {/* item2 */}
                    <div className="w-[23%] h-full flex flex-col">
                        <div className="w-full h-[75%]">
                            <img className="w-full rounded-lg" src="https://www.ais.th/content/dam/ais/consumer/content/herobanner/hbn-package-experience-mb-th.jpg" alt="" />
                            <p className="text-[18px] mt-5 text-gray-700 font-bold">AIS 5G Max Experience</p>
                            <p className="text-[17px] mt-1 mb-1 text-gray-700 h-[80px] ">เต็มแม็กซ์กับประสบการณ์ 5G รายเดือน จุใจทั้งเน็ต และความบันเทิง</p>
                            <div className="flex items-center">
                                <a className="text-[20px]  text-[#73C23A]  font-bold  " href="#">เพิ่มเติม&nbsp;</a>
                                <AiOutlineRight className="text-[20px]  text-[#73C23A] font-bold"></AiOutlineRight>
                            </div>
                        </div>
                    </div>
                    {/* item3 */}
                    <div className="w-[23%] h-full flex flex-col">
                        <div className="w-full h-[75%]">
                            <img className="w-full rounded-lg" src="https://www.ais.th/content/dam/ais/consumer/content/package/postpaid/herobanner/5gserenade-exclusive-mb.jpg" alt="" />
                            <p className="text-[18px] mt-5 text-gray-700 font-bold">5G Serenade Exclusive Plan</p>
                            <p className="text-[17px] mt-1 mb-1 text-gray-700 h-[80px] ">สัมผัสประสบการณ์พิเศษสุดเอ๊กซ์คลูซีฟ พร้อมสิทธิพิเศษที่เหนือกว่า</p>
                            <div className="flex items-center">
                                <a className="text-[20px]  text-[#73C23A]  font-bold  " href="#">เพิ่มเติม&nbsp;</a>
                                <AiOutlineRight className="text-[20px]  text-[#73C23A] font-bold"></AiOutlineRight>
                            </div>
                        </div>
                    </div>
                    {/* item4 */}
                    <div className="w-[23%] h-full flex flex-col">
                        <div className="w-full h-[75%]">
                            <img className="w-full rounded-lg" src="https://www.ais.th/content/dam/ais/consumer/content/herobanner/hbn-postpaid-p2p-5g-affordable-mb-jul-31.jpg" alt="" />
                            <p className="text-[18px] mt-5 text-gray-700 font-bold">เปลี่ยนจากเติมเงินเป็นรายเดือน</p>
                            <p className="text-[17px] mt-1 mb-1 text-gray-700 h-[80px] ">รับข้อเสนอ สุดพิเศษ ทั้งส่วนลดสมาร์ทโฟนและแพ็กเกจ</p>
                            <div className="flex items-center">
                                <a className="text-[20px]  text-[#73C23A]  font-bold  " href="#">เพิ่มเติม&nbsp;</a>
                                <AiOutlineRight className="text-[20px]  text-[#73C23A] font-bold"></AiOutlineRight>
                            </div>
                        </div>
                    </div>
                    
                
                   

                </div>
            </div>

        <Footer></Footer>
        
        </>
     );
}
 
export default Package;