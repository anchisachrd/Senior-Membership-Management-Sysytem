import React, { useState } from 'react'


function RegisterPage1() {
  return (
    <div>
      {/* กล่อง register 1 */}
      <div class="bg-gray-50 overflow-hidden rounded-xl shadow-xl">
        <div class="p-8">
          <p class="block mt-1 mb-7 text-xl leading-tight font-bold text-grey-600">1. ข้อมูลส่วนตัวของผู้สมัคร</p>

          <div class="grid gap-6 mb-6 md:grid-cols-3">
            <div>
              <label for="title_name_member" class="block mb-2 text-sm font-medium text-gray-900">คำนำหน้า</label>
              <select id="title_name_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2">
                <option selected>เลือกคำนำหน้า</option>
                <option value="mr">นาย</option>
                <option value="miss">นางสาว</option>
                <option value="mrs">นาง</option>
              </select>
            </div>

            <div>
              <label for="first_name_member" class="block mb-2 text-sm font-medium text-gray-900 ">ชื่อจริง</label>
              <input type="text" id="first_name_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกชื่อของผู้สมัคร" />
            </div>

            <div>
              <label for="last_name_member" class="block mb-2 text-sm font-medium text-gray-900 ">นามสกุล</label>
              <input type="text" id="last_name_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกนามสกุลของผู้สมัคร" />
            </div>

            <div>
              <label for="id_number_member" class="block mb-2 text-sm font-medium text-gray-900 ">เลขบัตรประชาชน</label>
              <input type="text" id="id_number_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกเลขบัตรประชาชน" />
            </div>

            <div>
              <label for="birth_day_member" class="block mb-2 text-sm font-medium text-gray-900 ">วัน/เดือน/ปี เกิด</label>
              <input id="birth_day_member" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="เลือกวันเกิด" />
            </div>

            <div>
              <label for="sex_member" class="block mb-2 text-sm font-medium text-gray-900">เพศ</label>
              <select id="sex_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2">
                <option selected class='text-opacity-25'>เลือกเพศ</option>
                <option value="man">ชาย</option>
                <option value="woman">หญิง</option>
              </select>
            </div>

          </div>

          <div class="grid gap-6 mb-3 md:grid-cols-2">
            <div>
              <label for="job_member" class="block mb-2 text-sm font-medium text-gray-900">อาชีพ</label>
              <select id="job_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2">
                <option selected>เลือกอาชีพ</option>
                <option value="">อาชีพ 1</option>
                <option value="">อาชีพ 2</option>
                <option value="">อาชีพ 3</option>
              </select>
            </div>

            <div>
              <label for="phone_member" class="block mb-2 text-sm font-medium text-gray-900 ">หมายเลขโทรศัพท์</label>
              <input type="text" id="phone_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกหมายเลขโทรศัพท์" />
            </div>

            <div>
              <label for="email_member" class="block mb-2 text-sm font-medium text-gray-900 ">อีเมล</label>
              <input type="text" id="email_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกอีเมลของผู้สมัคร" />
            </div>

          </div>
        </div>
      </div>

      {/* กล่อง register 2 */}
      <div class="bg-gray-50 overflow-hidden rounded-xl shadow-xl mt-14">
        <div class="p-8">
          <p class="block mt-1 mb-7 text-xl leading-tight font-bold text-grey-600">2. เอกสารของผู้สมัคร</p>

          <div>
            <label for="copy_house_member" class="block mb-2 text-sm font-medium text-gray-900">สำเนาทะเบียนบ้าน</label>
            <input type="file" id="copy_house_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกหมายเลขโทรศัพท์ของผู้สมัคร" />
          </div>

          <div class='mt-5'>
            <label for="copy_id_member" class="block mb-2 text-sm font-medium text-gray-900">สำเนาบัตรประชาชน</label>
            <input type="file" id="copy_id_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกหมายเลขโทรศัพท์ของผู้สมัคร" />
          </div>

          <div class='mt-5'>
            <label for="doc_rename_member" class="block mb-2 text-sm font-medium text-gray-900">ใบเปลี่ยนชื่อ</label>
            <input type="file" id="doc_rename_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกหมายเลขโทรศัพท์ของผู้สมัคร" />
          </div>

          <div class='mt-5'>
            <label for="cer_med_member" class="block mb-2 text-sm font-medium text-gray-900">ใบรับรองแพทย์</label>
            <input type="file" id="cer_med_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกหมายเลขโทรศัพท์ของผู้สมัคร" />
          </div>


        </div>
      </div>
    </div>
  )
}

function RegisterPage2() {
  return (
    <div>
      {/* กล่อง register 3 */}
      <div class="bg-gray-50 overflow-hidden rounded-xl shadow-xl">
        <div class="p-8">
          <p class="block mt-1 mb-7 text-xl leading-tight font-bold text-grey-600">3. ข้อมูลส่วนตัวของทายาท</p>

          <div class="grid gap-6 mb-6 md:grid-cols-3">
            <div>
              <label for="title_name_heir" class="block mb-2 text-sm font-medium text-gray-900">คำนำหน้า</label>
              <select id="title_name_heir" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2">
                <option selected>เลือกคำนำหน้า</option>
                <option value="mr">นาย</option>
                <option value="miss">นางสาว</option>
                <option value="mrs">นาง</option>
              </select>
            </div>

            <div>
              <label for="first_name_heir" class="block mb-2 text-sm font-medium text-gray-900 ">ชื่อจริง</label>
              <input type="text" id="first_name_heir" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกชื่อของทายาท" />
            </div>

            <div>
              <label for="last_name_heir" class="block mb-2 text-sm font-medium text-gray-900 ">นามสกุล</label>
              <input type="text" id="last_name_heir" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกนามสกุลของทายาท" />
            </div>

            <div>
              <label for="id_number_heir" class="block mb-2 text-sm font-medium text-gray-900 ">เลขบัตรประชาชน</label>
              <input type="text" id="id_number_heir" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกเลขบัตรประชาชน" />
            </div>

            <div>
              <label for="birth_day_heir" class="block mb-2 text-sm font-medium text-gray-900 ">วัน/เดือน/ปี เกิด</label>
              <input id="birth_day_heir" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="เลือกวันเกิด" />
            </div>

            <div>
              <label for="sex_heir" class="block mb-2 text-sm font-medium text-gray-900">เพศ</label>
              <select id="sex_heir" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2">
                <option selected class='text-opacity-25'>เลือกเพศ</option>
                <option value="man">ชาย</option>
                <option value="woman">หญิง</option>
              </select>
            </div>

          </div>

          <div class="grid gap-6 mb-3 md:grid-cols-2">
            <div>
              <label for="job_heir" class="block mb-2 text-sm font-medium text-gray-900">อาชีพ</label>
              <select id="job_heir" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2">
                <option selected>เลือกอาชีพ</option>
                <option value="">อาชีพ 1</option>
                <option value="">อาชีพ 2</option>
                <option value="">อาชีพ 3</option>
              </select>
            </div>

            <div>
              <label for="phone_heir" class="block mb-2 text-sm font-medium text-gray-900 ">หมายเลขโทรศัพท์</label>
              <input type="text" id="phone_heir" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกหมายเลขโทรศัพท์" />
            </div>

            <div>
              <label for="email_heir" class="block mb-2 text-sm font-medium text-gray-900 ">อีเมล</label>
              <input type="text" id="email_heir" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกอีเมลของทายาท" />
            </div>

          </div>
        </div>
      </div>

      {/* กล่อง register 4 */}
      <div class="bg-gray-50 overflow-hidden rounded-xl shadow-xl mt-14">
        <div class="p-8">
          <p class="block mt-1 mb-7 text-xl leading-tight font-bold text-grey-600">4. เอกสารของทายาท</p>

          <div>
            <label for="copy_house_heir" class="block mb-2 text-sm font-medium text-gray-900">สำเนาทะเบียนบ้าน</label>
            <input type="file" id="copy_house_heir" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกหมายเลขโทรศัพท์ของผู้สมัคร" />
          </div>

          <div class='mt-5'>
            <label for="copy_id_heir" class="block mb-2 text-sm font-medium text-gray-900">สำเนาบัตรประชาชน</label>
            <input type="file" id="copy_id_heir" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกหมายเลขโทรศัพท์ของผู้สมัคร" />
          </div>

          <div class='mt-5'>
            <label for="doc_rename_heir" class="block mb-2 text-sm font-medium text-gray-900">ใบเปลี่ยนชื่อ</label>
            <input type="file" id="doc_rename_heir" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกหมายเลขโทรศัพท์ของผู้สมัคร" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Confirm() {
  return (
    <div>

      <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        Toggle modal
      </button>

      <div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="p-4 md:p-5 text-center">
              <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
              <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                Yes, I'm sure
              </button>
              <button data-modal-hide="popup-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}


function Register() {

  const [step, setStep] = useState(1);
  // console.log(step)

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);

  };

  const handleBack = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : 1));
  };


  return (
    <div>
      {/* แก้ทีหลัง */}
      <div class="max-w-md mx-auto bg-white overflow-hidden md:max-w-2xl">
        <a href="" class="flex items-center mb-5">
          <img src="https://media.discordapp.net/attachments/1263104771322155050/1316775634856579092/logo_chomrom.png?ex=675c465f&is=675af4df&hm=174eea12b7785a176d074afb6dc8f0febe147082dccceac20f99d7ecd33a25db&=&format=webp&quality=lossless&width=625&height=195"
            class="h-auto max-w-xs" alt="Logo" />
        </a>
      </div>

      <form class='p-8'>
        <div class="max-w-screen-lg mx-auto overflow-hidden md:max-w-3xl">
          <div class="md:flex">
            <div className='ibm-plex-sans-thai-medium'>
              <div class="text-center text-3xl text-black mb-8 font-bold">ลงทะเบียนชมรมผู้สูงอายุ</div>

              {step === 1 && <RegisterPage1 />}
              {step === 2 && <RegisterPage2 />}
              {step === 3 && <Confirm />}

              {/* back กับ next */}
              <div className="mt-14">
                <div className="w-full max-w-md mx-auto bg-gray-100 border-2 border-gray-200 rounded-md">
                  <div className="flex items-center justify-between gap-3 p-3 bg-white rounded">
                    {/* ซ่อนปุ่ม Back ถ้าเป็นหน้าแรก */}
                    {step !== 1 ? (
                      <button type="button"
                        onClick={handleBack}
                        className="flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-gray-600"
                      >
                        <svg
                          className="rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="23"
                          viewBox="0 0 22 23"
                          fill="none"
                        >
                          <path
                            d="M8.25324 6.37646L13.7535 11.8767L8.25 17.3802"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        ย้อนกลับ
                      </button>
                    ) : (
                      <div class="w-[95px]"></div>
                    )}
                    <ul className="flex gap-1 items-center">
                      <li className={`w-2 h-2 rounded-full ${step === 1 ? "bg-gray-600" : "bg-gray-300"}`}></li>
                      <li className={`w-2 h-2 rounded-full ${step === 2 ? "bg-gray-600" : "bg-gray-300"}`}></li>
                    </ul>

                    <div>
                      <button onClick={handleNext} type="button" class="flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-gray-600">
                        {step === 2 ? 'เสร็จสิ้น' : 'หน้าถัดไป'}
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
                          <path
                            d="M8.25324 6.37646L13.7535 11.8767L8.25 17.3802"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* {step === 2 && <Confirm />} */}

    </div>
  )
}

export default Register