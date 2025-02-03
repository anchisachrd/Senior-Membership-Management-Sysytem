import React, { useState } from 'react'
import { useNavigate } from "react-router";

function SubmitPayment() {

    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const ConfirmModal = () => {
        alert('ยืนยันแล้วค่ะ/ครับ')
        setIsModalOpen(!isModalOpen);
        navigate('/history')
    }

    const [namePayment, setNamePayment] = useState("");
    const [bank, setBank] = useState("");
    const [amount, setAmount] = useState("");
    const [slip, setSlip] = useState("");

    const isFormValid = namePayment !== "" && bank !== "" && amount !== "" && slip !== "";


    return (
        <div class='p-12 sm:ml-64'>

            {/* <div class="relative mt-12 flex justify-center items-center text-3xl text-black font-bold">
                การชำระเงิน
            </div> */}

            <div class="bg-gray-100 overflow-hidden rounded-xl shadow-xl">
                <div class="p-12">
                    <div class="text-2xl text-black font-bold">ขั้นตอนการชำระเงิน</div>
                    <div class='mt-5 ms-8 mb-0'>
                        <div class="text-lg text-black font-medium me-2">1. สแกน QR Code ชำระเงิน ด้านล่างเพื่อชำระเงินค่าศพในแอปพลิเคชันธนาคารของท่าน</div>
                        <div class="text-lg text-black font-medium me-2 mt-3">2. ตรวจสอบหมายเลขบัญชีธนาคารและชื่อของผู้รับเงินก่อนทำการชำระเงิน</div>
                        <div class="text-lg text-black font-medium me-2 mt-3">3. เมื่อตรวจสอบข้อมูลเรียบร้อยแล้ว ทำการชำระเงิน</div>
                        <div class="text-lg text-black font-medium me-2 mt-3">4. กรอกข้อมูลและแนบหลักฐานการชำระเงินหลังจากโอนเงินได้ที่ฟอร์มชำระเงิน</div>
                        <div class="text-lg text-black font-medium me-2 mt-3">5. กดปุ่มเสร็จสิ้น</div>
                    </div>
                </div>
            </div>

            <div class="bg-gray-100 overflow-hidden rounded-xl shadow-xl mt-12">
                <div class="p-12">
                    <div class="text-2xl text-black font-bold">ช่องทางการชำระเงิน</div>

                    <div class="grid gap-6 md:grid-cols-2">
                        <div class="relative mt-8">
                            <img src="qrcode.png" class="w-90 h-auto mx-auto" />
                            <div class="flex justify-center mt-6 text-xl text-black font-lg">
                                สแกน QR Code ด้านบน
                            </div>
                        </div>


                        <div class="flex flex-col justify-center">
                            <div class="text-xl text-black font-bold">รายละเอียดบัญชีธนาคารของชมรม: </div>
                            <div class="text-xl text-black font-medium mt-3">ธนาคารกรุงศรีอยุธยา</div>
                            <div class="text-xl text-black font-medium mt-3">หมายเลขธนาคาร: 229199xxxx</div>
                            <div class="text-xl text-black font-medium mt-3">ชื่อผู้รับเงิน: ชมรมผู้สูงอายุ</div>
                        </div>
                    </div>

                </div>
            </div>


            <div class="bg-gray-200 overflow-hidden rounded-xl shadow-xl mt-12">
                <div class="p-12">
                    <div class="text-2xl text-black font-bold mb-5">ฟอร์มแจ้งชำระเงิน</div>

                    <div class="text-lg text-black mb-5">แจ้งชำระเงินค่าบำรุงรักษาศพของ <b>คุณพอยเบ ง่วงนอนงับ</b></div>

                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label for="name_payment" class="block mb-2 text-sm font-medium text-gray-900 ">ชื่อบัญชีที่โอน</label>
                            <input value={namePayment} onChange={e => setNamePayment(e.target.value)} type="text" id="name_payment" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกชื่อของบัญชีที่โอน" />
                        </div>

                        <div>
                            <label for="bank" class="block mb-2 text-sm font-medium text-gray-900">ธนาคาร</label>
                            <select value={bank} onChange={e => setBank(e.target.value)} id="bank" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2">
                                <option selected>เลือกธนาคารของท่าน</option>
                                <option value="bank1">ธนาคาร 1</option>
                                <option value="bank2">ธนาคาร 2</option>
                                <option value="bank3">ธนาคาร 3</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid gap-6 mb-6 md:grid-cols-3">
                        <div>
                            <label for="amount" class="block mb-2 text-sm font-medium text-gray-900 ">จำนวนเงิน</label>
                            <input value={amount} onChange={e => setAmount(e.target.value)} type="text" id="amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกจำนวนเงิน" />
                        </div>

                        <div>
                            <label for="slip" class="block mb-2 text-sm font-medium text-gray-900 ">สลิปการชำระเงิน</label>
                            <input value={slip} onChange={e => setSlip(e.target.value)} type="file" id="slip" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกจำนวนเงิน" />
                        </div>
                    </div>

                    <div class="relative mt-14 flex justify-center items-center">
                        <button
                            type="button"
                            onClick={toggleModal}
                            disabled={!isFormValid}
                            class={`focus:outline-none text-white font-medium rounded-lg text-base px-5 py-2.5 me-9 mb-2 ${isFormValid
                                ? 'bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800'
                                : 'bg-gray-400 cursor-not-allowed'
                                }`}>
                            แจ้งผลการชำระเงิน
                        </button>

                        {isModalOpen && (
                            <div
                                id="popup-modal"
                                class="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full bg-black bg-opacity-50"
                            >
                                <div class="relative p-4 w-full max-w-md max-h-full">
                                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-100">
                                        <button
                                            type="button"
                                            onClick={toggleModal}
                                            class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span class="sr-only">Close modal</span>
                                        </button>
                                        <div class="p-4 md:p-5 text-center">
                                            <svg class="mx-auto mb-4 text-gray-800 w-12 h-12 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            <p class="mb-1 text-lg font-bold text-gray-800 dark:text-gray-800">ยืนยันการแจ้งชำระเงิน</p>
                                            <p class="mb-5 text-base font-normal text-gray-800 dark:text-gray-800">โปรดตรวจสอบความถูกต้องก่อนกดยืนยัน </p>
                                            <button
                                                onClick={ConfirmModal}
                                                class="text-white text-gray-900 focus:outline-none bg-white rounded-lg border border-lime-200 hover:bg-lime-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-lime-100 dark:focus:ring-lime-600 dark:bg-lime-700 dark:text-lime-400 dark:border-lime-500 dark:hover:text-white dark:hover:bg-lime-600 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                            >
                                                ยืนยัน
                                            </button>
                                            <button
                                                onClick={toggleModal}
                                                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-red-200 hover:bg-red-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-700 dark:bg-red-800 dark:text-red-400 dark:border-red-600 dark:hover:text-white dark:hover:bg-red-700">
                                                ยกเลิก
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubmitPayment