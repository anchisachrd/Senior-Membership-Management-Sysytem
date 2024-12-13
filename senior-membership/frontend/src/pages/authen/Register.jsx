import React from 'react'

function Register() {
  return (
    <div>
      {/* แก้ทีหลัง */}
      <div class="max-w-md mx-auto bg-white overflow-hidden md:max-w-2xl">
        <a href="" class="flex items-center mb-5">
          <img src="https://media.discordapp.net/attachments/1263104771322155050/1316775634856579092/logo_chomrom.png?ex=675c465f&is=675af4df&hm=174eea12b7785a176d074afb6dc8f0febe147082dccceac20f99d7ecd33a25db&=&format=webp&quality=lossless&width=625&height=195"
            class="h-auto max-w-xs" alt="Logo" />
        </a>
      </div>

      <div class='p-8'>
        <div class="max-w-screen-lg mx-auto">
          <div class="md:flex">
            <div className='ibm-plex-sans-thai-medium'>
              <div class="text-center text-3xl text-black mb-8 font-bold">ลงทะเบียนชมรมผู้สูงอายุ</div>
              {/* กล่อง register 1 */}
              <div class="bg-gray-50 overflow-hidden rounded-xl shadow-xl">
                <div class="p-8">
                  <p class="block mt-1 text-xl leading-tight font-bold text-grey-600">1. ข้อมูลส่วนตัวของผู้สมัคร</p>

                  <form class='mt-6'>
                    <div class="grid gap-6 mb-6 md:grid-cols-3">

                      <div>
                        <label for="title_name" class="block mb-2 text-sm font-medium text-gray-900">คำนำหน้า</label>
                        <select id="title_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5">
                          <option selected>เลือกคำนำหน้า</option>
                          <option value="mr">นาย</option>
                          <option value="miss">นางสาว</option>
                          <option value="mrs">นาง</option>
                        </select>
                      </div>

                      <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">ชื่อจริง</label>
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกชื่อของผู้สมัคร" required />
                      </div>

                      <div>
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 ">นามสกุล</label>
                        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกนามสกุลของผู้สมัคร" required />
                      </div>

                      <div>
                        <label for="id_number" class="block mb-2 text-sm font-medium text-gray-900 ">เลขบัตรประชาชน</label>
                        <input type="text" id="id_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกเลขบัตรประชาชนของผู้สมัคร" required />
                      </div>


              
                      <div>
                      <label for="birth_day" class="block mb-2 text-sm font-medium text-gray-900 ">วัน/เดือน/ปี เกิด</label>
                        <div class="relative max-w-sm">
                          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                          </div>
                          <input datepicker id="default-datepicker" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full ps-10 p-2.5" placeholder="เลือกวันเกิด" />
                        </div>
                      </div>

                      <div>
                        <label for="sex" class="block mb-2 text-sm font-medium text-gray-900">เพศ</label>
                        <select id="sex" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5">
                          <option selected class='text-opacity-25'>เลือกเพศ</option>
                          <option value="man">ชาย</option>
                          <option value="woman">หญิง</option>
                        </select>
                      </div>


                    </div>
                  </form>

                </div>
              </div>
              {/* กล่อง register 2 */}
              <div class="bg-gray-50 overflow-hidden rounded-xl shadow-xl mt-14">
                <div class="p-8">
                  <p class="block mt-1 text-xl leading-tight font-bold text-grey-600">2. เอกสารของผู้สมัคร</p>
                  <p class="mt-3 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register