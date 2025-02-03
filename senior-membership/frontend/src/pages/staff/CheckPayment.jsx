import React from 'react'
import { useNavigate } from 'react-router-dom';

function CheckPayment() {

  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate('/staff_detailCheckPayment');
  }

  return (
    <div className='ibm-plex-sans-thai-medium'>
      <div class="p-12 sm:ml-64">
        <div class="text-xl text-black mx-3 mt-5 mb-8 font-bold">การตรวจสอบสลิป</div>

        <div class="relative overflow-hidden shadow-xl sm:rounded-lg ">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-base text-gray-300 uppercase bg-gray-50 dark:bg-gray-300 dark:text-gray-900">
              <tr>
                <th scope="col" class="px-6 py-3">
                  No.
                </th>
                <th scope="col" class="px-6 py-3">
                  รหัสผู้สมัคร
                </th>
                <th scope="col" class="px-6 py-3">
                  ชื่อผู้สมัคร
                </th>
                <th scope="col" class="px-6 py-3">
                  รหัสผู้เสียชีวิต
                </th>
                
                <th scope="col" class="px-6 py-3">
                  สถานะการตรวจสอบสลิป
                </th>

              </tr>
            </thead>

            <tbody>
              <tr onClick={handleRowClick} class="cursor-pointer bg-white border-b dark:bg-gray-200 dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-200 text-gray-900">
                <th scope="row" class="px-8 py-4 font-medium">
                  1.
                </th>
                <td class="px-6 py-4">
                  0234
                </td>
                <td class="px-6 py-4">
                  ศรุตา จรูญกีรติโรจน์
                </td>
                <td class="px-6 py-4">
                  0999
                </td>
                <td class="px-6 py-4">
                  สลิปโอนเงินถูกต้อง
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CheckPayment