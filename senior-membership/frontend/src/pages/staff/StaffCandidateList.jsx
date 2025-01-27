import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import { getAllCandidates } from '../../api/registerApi';


function StaffCandidateList() {
    const [candidates, setCandidates] = useState([]);
    const navigate = useNavigate();

    const handleRowClick = (candidateId) => {
        navigate(`/staff_candidateProfile/${candidateId}`);
    }

    useEffect(() => {
      const fetchCandidates = async () => {
          try {
              const data = await getAllCandidates();
              console.log("API Response:", data);
              setCandidates(data); 
          } catch (error) {
              console.error('Error:', error);
              setCandidates([]); 
          }
      };
      fetchCandidates();
  }, []);

    return (
        <div className='ibm-plex-sans-thai-medium'>
            <div class="p-12 sm:ml-64">
                <div class="text-xl text-black mx-3 mt-5 mb-8 font-bold">จัดการผู้สมัคร</div>

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


                <button
                    type="button"
                    className="focus:outline-none text-white focus:ring-gray-300 font-medium rounded-lg text-base px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mb-7">
                    <Link to='/staff_cadidateWaitingList'>แถวคอยการสมัคร</Link>
                </button>

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
                            {candidates.length > 0 ? (
                                candidates.map((candidate, index) => (
                                    <tr key={candidate.candidate_id} onClick={() => handleRowClick(candidate.candidate_id)} className="cursor-pointer bg-white border-b hover:bg-gray-50 text-gray-900">
                                        <th scope='row' className="px-8 py-4 font-medium">{index + 1}</th>
                                        <td className="px-6 py-4">{candidate.candidate_id}</td>
                                        <td className="px-6 py-4">{candidate.first_name} {candidate.last_name}</td>
                                        <td className="px-6 py-4">{candidate.national_id}</td>
                                        <td className="px-6 py-4">{candidate.phone}</td>
                                        <td className="px-14 py-4">{candidate.priority ? <FaCheck /> : <FaCheck />}</td>
                                        <td className="px-6 py-4">{candidate.doc_verification_status}</td>
                                        <td className="px-6 py-4">{candidate.is_approved ? 'อนุมัติแล้ว' : 'กำลังตรวจสอบ'}</td>

                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center py-4">ไม่พบรายชื่อผู้สมัคร</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    )
}

export default StaffCandidateList