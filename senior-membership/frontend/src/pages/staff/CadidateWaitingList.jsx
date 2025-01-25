
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";


function CadidateWaitingList() {

  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate('/staff_candidateProfile'); 
  }
  
  return (
    <div className='ibm-plex-sans-thai-medium'>
      <div class="p-12 sm:ml-64">
        <div class="text-xl text-black mx-3 mt-5 mb-8 font-bold">แถวคอยการสมัคร</div>

          <div class='mb-8 overflow-hidden'>
          <div class="grid gap-6 md:grid-cols-4">
            <form class="max-w-3xl">
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-200 sr-only dark:text-white">ค้นหา</label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="" required />
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">ค้นหา</button>
              </div>
            </form>

            {/* filter */}

          </div>
        </div>



        <div class="relative overflow-hidden shadow-xl sm:rounded-lg">
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
                  เลขบัตรประชาชน
                </th>
                <th scope="col" class="px-6 py-3">
                  เบอร์โทรศัพท์
                </th>
                <th scope="col" class="px-6 py-3">
                  ได้รับสิทธิ์ก่อน
                </th>
                <th scope="col" class="px-6 py-3">
                  ตรวจสอบเอกสาร
                </th>
                <th scope="col" class="px-6 py-3">
                  อนุมัติการเป็นสมาชิก
                </th>
              </tr>
            </thead>
            
              <tbody>
                <tr onClick={handleRowClick} class="cursor-pointer bg-white border-b dark:bg-gray-200 dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-200 text-gray-900">
                  <th scope="row" class="px-8 py-4 font-medium">
                    1.
                  </th>
                  <td class="px-6 py-4">
                    0999
                  </td>
                  <td class="px-6 py-4">
                    ศรุตา จรูญกีรติโรจน์
                  </td>
                  <td class="px-6 py-4">
                    1760101127661
                  </td>
                  <td class="px-6 py-4">
                    0873360562
                  </td>
                  <td class="px-14 py-4">
                  <FaCheck />
                  </td>
                  <td class="px-6 py-4">
                    กำลังตรวจสอบ
                  </td>
                  <td class="px-6 py-4">
                    กำลังตรวจสอบ
                  </td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>


  )
}


export default CadidateWaitingList