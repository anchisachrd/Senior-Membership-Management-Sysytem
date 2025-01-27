import React from 'react'

function DetailCheckPayment() {
  return (
    <div className='ibm-plex-sans-thai-medium'>
      <div class="p-12 sm:ml-64">

        <div class="text-xl text-black mx-3 mt-5 font-bold">รายละเอียดสลิปโอนเงิน</div>

        <div class="mb-8 overflow-hidden">
          <div class="bg-gray-50 overflow-hidden rounded-xl shadow-xl mt-12">
            <div class="p-12">

              <img src="slip.jpg" class="w-96 h-auto mx-auto rounded-lg mb-5" />
              
              <div class="flex justify-center items-center mb-2">
                <div class="inline-flex text-xl text-black font-base bg-lime-500 rounded p-2">
                  <b class="me-2">ผลการตรวจสอบ:</b> สลิปโอนเงินถูกต้อง
                </div>
              </div>



              <div class="text-lg text-black mx-3 mt-6 font-base"> <b>ชื่อผู้โอนเงิน:</b> นางสาวศรุตา จรูญกีรติโรจน์</div>
              <div class="text-lg text-black mx-3 mt-2 font-base"> <b>ธนาคารผู้รับเงิน:</b> ธนาคารกรุงศรีอยุธยา</div>
              <div class="text-lg text-black mx-3 mt-2 font-base"> <b>ธนาคารผู้โอนเงิน:</b> ธนาคารกสิกรไทย</div>
              <div class="text-lg text-black mx-3 mt-2 font-base"> <b>วันที่โอนเงิน:</b> วันที่ 27 เดือนมกราคม 2568</div>
              <div class="text-lg text-black mx-3 mt-2 font-base"> <b>เวลาที่โอนเงิน:</b> 06:22 น.</div>
              <div class="text-lg text-black mx-3 mt-2 font-base"> <b>จำนวนเงิน:</b> 50 บาท</div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DetailCheckPayment