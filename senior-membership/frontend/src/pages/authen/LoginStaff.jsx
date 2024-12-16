import React from 'react'
import { Link } from "react-router";
import { TbLockPassword } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";

function LoginStaff() {
  return (

    <div>
      <div class='p-12 mt-48'>
        <div class="max-w-screen-lg mx-auto overflow-hidden md:max-w-3xl lg:max-w-3xl place-items-center">
          <div class="2xl:flex">
            <div className='ibm-plex-sans-thai-medium'>
              <div class="p-8 bg-gray-50 overflow-hidden rounded-xl shadow-xl">

                <div class='place-items-center'>
                  <img src="logo.png" class="h-16" alt="Logo ja" />
                </div>

                <div class="text-center text-3xl text-black mt-8 mb-8 font-bold">เข้าสู่ระบบสำหรับพนักงาน</div>
                <div class="grid gap-6 md:grid-cols-1">

                  <div>
                    <label for="email" class="block mb-2 text-base font-medium text-gray-900 ">อีเมล</label>
                    <div class="relative mb-0">
                      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <MdOutlineMail class='text-xl text-gray-400' />
                      </div>
                      <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5 ps-10" placeholder="email@xample.com" />
                    </div>
                  </div>

                  <div>
                    <label for="passsword" class="block mb-2 text-base font-medium text-gray-900 ">รหัสผ่าน</label>
                    <div class="relative mb-0">
                      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <TbLockPassword class='text-xl text-gray-400' />
                      </div>
                      <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5 ps-10" placeholder="**********" />
                    </div>
                  </div>
                </div>

                <div class="grid gap-6 md:grid-cols-1 place-items-center">
                  <button type="button" class="text-gray-900 bg-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mt-5">
                    <Link to='/login' class='text-base'>เข้าสู่ระบบ</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginStaff