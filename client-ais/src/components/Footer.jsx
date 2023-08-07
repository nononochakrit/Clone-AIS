

const Footer = () => {
    return ( 
    <>
    <div className="w-full h-[600px] flex flex-col items-center bg-[#1E3D35]">
        <div className="w-[68%] h-[80%] flex border-b border-[#25584F] ">
            <div className="w-[40%] h-full flex flex-col ">
                <div className="w-full h-[40%] p-10">
                    <h1 className="text-md font-extrabold w-full text-gray-100 my-4">ดาวน์โหลดแอป myAIS</h1>
                    <div className="flex gap-3 items-start">
                        <img className="" src="https://www.ais.th/content/dam/ais/consumer/symbols/logo/my-ais-app-48x48.svg" alt="" />
                        <img src="https://www.ais.th/content/dam/ais/en/generic/images/App%20Store%20Badge.svg" alt="" />
                        <img src="https://www.ais.th/content/dam/ais/en/generic/images/Play%20Store%20Badge.svg" alt="" />
                    </div>
                </div>
                <div className="w-full h-[40%] p-10">
                    <h1 className="text-md font-extrabold w-full text-gray-100 my-4">ติดตามเรา</h1>
                    <div className="w-full flex gap-3 h-fit">
                        <img className="rounded-[100%] hover:bg-[#73C23A]" src="https://www.ais.th/content/dam/ais/en/generic/images/social-media/facebook.svg" alt="" />
                        <img className="rounded-[100%] hover:bg-[#73C23A]" src="https://www.ais.th/content/dam/ais/en/generic/images/social-media/twitter.svg" alt="" />
                        <img className="rounded-[100%] hover:bg-[#73C23A]" src="https://www.ais.th/content/dam/ais/en/generic/images/social-media/line.svg" alt="" />
                        <img className="rounded-[100%] hover:bg-[#73C23A]" src="https://www.ais.th/content/dam/ais/en/generic/images/social-media/instagram.svg" alt="" />
                        <img className="rounded-[100%] hover:bg-[#73C23A]" src="https://www.ais.th/content/dam/ais/en/generic/images/social-media/youtube.svg" alt="" />
                        <img className="rounded-[100%] hover:bg-[#73C23A]" src="https://www.ais.th/content/dam/ais/en/generic/images/social-media/tiktok.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="w-[60%] h-full p-5 flex flex-col">
                <div className="w-full h-1/2  flex ">
                    <div className="w-1/4 p-5 flex flex-col gap-2 ">
                        <h1 className="text-[#73C23A] font-extrabold">ร้านค้า</h1>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">มือถือ</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">แท็บเล็ต</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">อุปกรณ์เสริม</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">รุ่นมือถือแนะนำ</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">บริการ</a>
                    </div>
                    <div className="w-1/4 p-5 flex flex-col gap-2 ">
                        <h1 className="text-[#73C23A] font-extrabold">แพ็กเกจ</h1>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">รายเดือน</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">เติมเงิน</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">ระหว่างประเทศ</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">สินค้าและบริการแนะนำ</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">SUPER WiFi</a>
                    </div>
                    <div className="w-1/4 p-5 flex flex-col gap-2 ">
                        <h1 className="text-[#73C23A] font-extrabold">เน็ตบ้าน</h1>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">แพ็กเกจ</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">บริการ</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">คำถามที่พบบ่อย</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">ลูกค้าปัจจุบัน</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">แนะนำเพื่อนติดเน็ตบ้าน</a>
                    </div>
                    <div className="w-1/4 p-5 flex flex-col gap-2 ">
                        <h1 className="text-[#73C23A] font-extrabold">โปรโมชัน</h1>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">มือถือและอุปกรณ์</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">โปรโมชันแนะนำ</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">โปรแกรมผ่อนมือถือ</a>
                    </div>
                </div>
                <div className="w-full h-1/2  flex ">
                    <div className="w-1/4 p-5 flex flex-col gap-2 ">
                        <h1 className="text-[#73C23A] font-extrabold">ไลฟ์สไตล์</h1>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">หนังและซีรีส์</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">Streaming App</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">มิวสิก</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">เกม</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">แอปพลิเคชัน & บริการ</a>
                    </div>
                    <div className="w-1/4 p-5 flex flex-col gap-2 ">
                        <h1 className="text-[#73C23A] font-extrabold">สิทธิพิเศษ</h1>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">เอไอเอส พอยท์</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">เอไอเอส พริวิเลจ</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">เอไอเอส เซเรเนด</a>

                    </div>
                    <div className="w-1/4 p-5 flex flex-col gap-2 ">
                        <h1 className="text-[#73C23A] font-extrabold">ช่วยเหลือ</h1>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">ร้านค้าออนไลน์</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">อุปกรณ์และแพ็กเกจ</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">ไฟเบอร์</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">ความบันเทิงและไลฟ์สไตล์</a>
                        <a className="text-white text-sm hover:text-[#73C23A]" href="#">เครือข่ายและเทคโนโลยี</a>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="w-[68%] flex  h-[20%]">
            <div className="w-1/2 h-full flex items-center ">
                <p className="text-gray-200 text-sm ">© 2023 Advanced Info Service PLC. All rights reserved.</p>
            </div>
            <div className="w-1/2 h-full flex justify-between items-center ">
                <a className="text-white text-sm hover:text-[#73C23A]" href="#">แผนผังเว็บไซต์</a>
                <a className="text-white text-sm hover:text-[#73C23A]" href="#">ร่วมงานกับเรา</a>
                <a className="text-white text-sm hover:text-[#73C23A]" href="#">ข้อกำหนดและกฏหมาย</a>
                <a className="text-white text-sm hover:text-[#73C23A]" href="#">มาตรการคุ้มครองข้อมูลผู้ใช้บริการ</a>
            </div>
        </div>
    </div>
    </> 
    );
}
 
export default Footer;
