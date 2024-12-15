import React, { useState } from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router";
import { createCandidate } from '../../api/candidateApi';

function RegisterPage1() {
  const [candidateData, setCandidateData] = useState({
    title: "",
    fname: "",
    lname: "",
    nationalID: "",
    dob: "",
    phone: "",
    gender: "",
    job: "",
    address: {
        house_num: "",
        street: "",
        province: "",
        postal_code: ""
    },
    "document": "1",
    "account": "1",
    "heirData": "1"
    }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'address') {
      setCandidateData({
        ...candidateData,
        address: {
          ...candidateData.address,
          [e.target.dataset.field]: value,
        },
      });
    } else {
      setCandidateData({
        ...candidateData,
        [name]: value,
      });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createCandidate(candidateData);
      setMessage(response.message);
    } catch (error) {
      setMessage('Error occurred while creating candidate');
    }
  };


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

          <div class="grid gap-6 mb-4 md:grid-cols-2">
            <div>
              <label for="job_member" class="block mb-2 text-sm font-medium text-gray-900">อาชีพ</label>
              <select id="job_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2">
                <option selected>เลือกอาชีพ</option>
                <option value="">อาชีพ 1</option>
                <option value="">อาชีพ 2</option>
                <option value="">อาชีพ 3</option>
              </select>
            </div>

            <div >
              <label for="phone_member" class="block mb-2 text-sm font-medium text-gray-900 ">หมายเลขโทรศัพท์</label>
              <input type="text" id="phone_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกหมายเลขโทรศัพท์" />
            </div>

          </div>

          <div class='mb-4'>
            <label for="email_member" class="block mb-2 text-sm font-medium text-gray-900 ">อีเมล</label>
            <input type="text" id="email_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกอีเมลของผู้สมัคร" />
          </div>

          <div class="grid gap-6 mb-4 md:grid-cols-2">

            <div>
              <label for="password_member" class="block mb-2 text-sm font-medium text-gray-900 ">รหัสผ่าน</label>
              <input type="password" id="password_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกรหัสผ่าน" />
            </div>

            <div>
              <label for="confirm_password_member" class="block mb-2 text-sm font-medium text-gray-900 ">ยืนยันรหัสผ่าน</label>
              <input type="password" id="confirm_password_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกรหัสผ่านให้ตรงกัน" />
            </div>

          </div>

          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500"></hr>

          {/* ที่อยู่ */}
          <p class="block mb-5 mt-0 text-base leading-tight font-bold text-grey-600">ที่อยู่ปัจจุบัน</p>

          <div class="grid gap-6 mb-5 md:grid-cols-3">

            <div >
              <label for="home_number_member" class="block mb-2 text-sm font-medium text-gray-900 ">บ้านเลขที่</label>
              <input type="text" id="home_number_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกบ้านเลขที่" />
            </div>

            <div >
              <label for="moo_member" class="block mb-2 text-sm font-medium text-gray-900 ">หมู่ที่</label>
              <input type="text" id="moo_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกหมู่ที่" />
            </div>

            <div >
              <label for="soi_member" class="block mb-2 text-sm font-medium text-gray-900 ">ซอย</label>
              <input type="text" id="soi_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกซอย" />
            </div>

          </div>

          <div class="grid gap-6 mb-4 md:grid-cols-2">

            <div >
              <label for="road_member" class="block mb-2 text-sm font-medium text-gray-900 ">ถนน</label>
              <input type="text" id="road_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกถนน" />
            </div>

            <div >
              <label for="sub_district_member" class="block mb-2 text-sm font-medium text-gray-900 ">ตำบล/แขวง</label>
              <input type="text" id="sub_district_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกตำบลหรือแขวง" />
            </div>

            <div >
              <label for="district_member" class="block mb-2 text-sm font-medium text-gray-900 ">อำเภอ/เขต</label>
              <input type="text" id="district_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกอำเภอหรือเขต" />
            </div>

            <div>
              <label for="province_member" class="block mb-2 text-sm font-medium text-gray-900">จังหวัด</label>
              <select id="province_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2">
                <option selected>เลือกจังหวัด</option>
                <option value="1">กระบี่</option>
                <option value="2">กรุงเทพมหานคร</option>
                <option value="3">กาญจนบุรี</option>
                <option value="4">กาฬสินธุ์</option>
                <option value="5">กำแพงเพชร</option>
                <option value="6">ขอนแก่น</option>
                <option value="7">จันทบุรี</option>
                <option value="8">ฉะเชิงเทรา</option>
                <option value="9">ชลบุรี</option>
                <option value="10">ชัยนาท</option>
                <option value="11">ชัยภูมิ</option>
                <option value="12">ชุมพร</option>
                <option value="13">เชียงราย</option>
                <option value="14">เชียงใหม่</option>
                <option value="15">ตรัง</option>
                <option value="16">ตราด</option>
                <option value="17">ตาก</option>
                <option value="18">นครนายก</option>
                <option value="19">นครปฐม</option>
                <option value="20">นครพนม</option>
                <option value="21">นครราชสีมา</option>
                <option value="22">นครศรีธรรมราช</option>
                <option value="23">นครสวรรค์</option>
                <option value="24">นนทบุรี</option>
                <option value="25">นราธิวาส</option>
                <option value="26">น่าน</option>
                <option value="27">บึงกาฬ</option>
                <option value="28">บุรีรัมย์</option>
                <option value="29">ปทุมธานี</option>
                <option value="30">ประจวบคีรีขันธ์</option>
                <option value="31">ปราจีนบุรี</option>
                <option value="32">ปัตตานี</option>
                <option value="33">พระนครศรีอยุธยา</option>
                <option value="34">พะเยา</option>
                <option value="35">พังงา</option>
                <option value="36">พัทลุง</option>
                <option value="37">พิจิตร</option>
                <option value="38">พิษณุโลก</option>
                <option value="39">เพชรบุรี</option>
                <option value="40">เพชรบูรณ์</option>
                <option value="41">แพร่</option>
                <option value="42">ภูเก็ต</option>
                <option value="43">มหาสารคาม</option>
                <option value="44">มุกดาหาร</option>
                <option value="45">แม่ฮ่องสอน</option>
                <option value="46">ยโสธร</option>
                <option value="47">ยะลา</option>
                <option value="48">ร้อยเอ็ด</option>
                <option value="49">ระนอง</option>
                <option value="50">ระยอง</option>
                <option value="51">ราชบุรี</option>
                <option value="52">ลพบุรี</option>
                <option value="53">ลำปาง</option>
                <option value="54">ลำพูน</option>
                <option value="55">เลย</option>
                <option value="56">ศรีสะเกษ</option>
                <option value="57">สกลนคร</option>
                <option value="58">สงขลา</option>
                <option value="59">สตูล</option>
                <option value="60">สมุทรปราการ</option>
                <option value="61">สมุทรสงคราม</option>
                <option value="62">สมุทรสาคร</option>
                <option value="63">สระแก้ว</option>
                <option value="64">สระบุรี</option>
                <option value="65">สิงห์บุรี</option>
                <option value="66">สุโขทัย</option>
                <option value="67">สุพรรณบุรี</option>
                <option value="68">สุราษฎร์ธานี</option>
                <option value="69">สุรินทร์</option>
                <option value="70">หนองคาย</option>
                <option value="71">หนองบัวลำภู</option>
                <option value="72">อ่างทอง</option>
                <option value="73">อำนาจเจริญ</option>
                <option value="74">อุดรธานี</option>
                <option value="75">อุตรดิตถ์</option>
                <option value="76">อุทัยธานี</option>
                <option value="77">อุบลราชธานี</option>
              </select>
            </div>
          </div>

          <div class="grid gap-6 mb-3 md:grid-cols-2">

            <div >
              <label for="zip_member" class="block mb-2 text-sm font-medium text-gray-900 ">รหัสไปรษณีย์</label>
              <input type="text" id="zip_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกรหัสไปรษณีย์" />
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
              <label for="relationship_heir" class="block mb-2 text-sm font-medium text-gray-900">ความเกี่ยวข้อง</label>
              <select id="relationship_heir" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2">
                <option selected>เลือกความเกี่ยวข้อง</option>
                <option value="">สามี/ภรรยา</option>
                <option value="">ลูก</option>
                <option value="">บลาๆ</option>
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

            <div>
              <label for="password_heir" class="block mb-2 text-sm font-medium text-gray-900 ">รหัสผ่าน</label>
              <input type="password" id="password_heir" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกรหัสผ่าน" />
            </div>

            <div>
              <label for="confirm_password_heir" class="block mb-2 text-sm font-medium text-gray-900 ">ยืนยันรหัสผ่าน</label>
              <input type="password" id="confirm_password_heir" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกรหัสผ่านให้ตรงกัน" />
            </div>

          </div>

          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500"></hr>

          {/* ที่อยู่ */}
          <p class="block mb-5 mt-0 text-base leading-tight font-bold text-grey-600">ที่อยู่ปัจจุบัน</p>

          <div class="grid gap-6 mb-5 md:grid-cols-3">

            <div >
              <label for="home_number_member" class="block mb-2 text-sm font-medium text-gray-900 ">บ้านเลขที่</label>
              <input type="text" id="home_number_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกบ้านเลขที่" />
            </div>

            <div >
              <label for="moo_member" class="block mb-2 text-sm font-medium text-gray-900 ">หมู่ที่</label>
              <input type="text" id="moo_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกหมู่ที่" />
            </div>

            <div >
              <label for="soi_member" class="block mb-2 text-sm font-medium text-gray-900 ">ซอย</label>
              <input type="text" id="soi_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกซอย" />
            </div>

          </div>

          <div class="grid gap-6 mb-4 md:grid-cols-2">

            <div >
              <label for="road_member" class="block mb-2 text-sm font-medium text-gray-900 ">ถนน</label>
              <input type="text" id="road_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกถนน" />
            </div>

            <div >
              <label for="sub_district_member" class="block mb-2 text-sm font-medium text-gray-900 ">ตำบล/แขวง</label>
              <input type="text" id="sub_district_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกตำบลหรือแขวง" />
            </div>

            <div >
              <label for="district_member" class="block mb-2 text-sm font-medium text-gray-900 ">อำเภอ/เขต</label>
              <input type="text" id="district_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกอำเภอหรือเขต" />
            </div>

            <div>
              <label for="province_member" class="block mb-2 text-sm font-medium text-gray-900">จังหวัด</label>
              <select id="province_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2">
                <option selected>เลือกจังหวัด</option>
                <option value="1">กระบี่</option>
                <option value="2">กรุงเทพมหานคร</option>
                <option value="3">กาญจนบุรี</option>
                <option value="4">กาฬสินธุ์</option>
                <option value="5">กำแพงเพชร</option>
                <option value="6">ขอนแก่น</option>
                <option value="7">จันทบุรี</option>
                <option value="8">ฉะเชิงเทรา</option>
                <option value="9">ชลบุรี</option>
                <option value="10">ชัยนาท</option>
                <option value="11">ชัยภูมิ</option>
                <option value="12">ชุมพร</option>
                <option value="13">เชียงราย</option>
                <option value="14">เชียงใหม่</option>
                <option value="15">ตรัง</option>
                <option value="16">ตราด</option>
                <option value="17">ตาก</option>
                <option value="18">นครนายก</option>
                <option value="19">นครปฐม</option>
                <option value="20">นครพนม</option>
                <option value="21">นครราชสีมา</option>
                <option value="22">นครศรีธรรมราช</option>
                <option value="23">นครสวรรค์</option>
                <option value="24">นนทบุรี</option>
                <option value="25">นราธิวาส</option>
                <option value="26">น่าน</option>
                <option value="27">บึงกาฬ</option>
                <option value="28">บุรีรัมย์</option>
                <option value="29">ปทุมธานี</option>
                <option value="30">ประจวบคีรีขันธ์</option>
                <option value="31">ปราจีนบุรี</option>
                <option value="32">ปัตตานี</option>
                <option value="33">พระนครศรีอยุธยา</option>
                <option value="34">พะเยา</option>
                <option value="35">พังงา</option>
                <option value="36">พัทลุง</option>
                <option value="37">พิจิตร</option>
                <option value="38">พิษณุโลก</option>
                <option value="39">เพชรบุรี</option>
                <option value="40">เพชรบูรณ์</option>
                <option value="41">แพร่</option>
                <option value="42">ภูเก็ต</option>
                <option value="43">มหาสารคาม</option>
                <option value="44">มุกดาหาร</option>
                <option value="45">แม่ฮ่องสอน</option>
                <option value="46">ยโสธร</option>
                <option value="47">ยะลา</option>
                <option value="48">ร้อยเอ็ด</option>
                <option value="49">ระนอง</option>
                <option value="50">ระยอง</option>
                <option value="51">ราชบุรี</option>
                <option value="52">ลพบุรี</option>
                <option value="53">ลำปาง</option>
                <option value="54">ลำพูน</option>
                <option value="55">เลย</option>
                <option value="56">ศรีสะเกษ</option>
                <option value="57">สกลนคร</option>
                <option value="58">สงขลา</option>
                <option value="59">สตูล</option>
                <option value="60">สมุทรปราการ</option>
                <option value="61">สมุทรสงคราม</option>
                <option value="62">สมุทรสาคร</option>
                <option value="63">สระแก้ว</option>
                <option value="64">สระบุรี</option>
                <option value="65">สิงห์บุรี</option>
                <option value="66">สุโขทัย</option>
                <option value="67">สุพรรณบุรี</option>
                <option value="68">สุราษฎร์ธานี</option>
                <option value="69">สุรินทร์</option>
                <option value="70">หนองคาย</option>
                <option value="71">หนองบัวลำภู</option>
                <option value="72">อ่างทอง</option>
                <option value="73">อำนาจเจริญ</option>
                <option value="74">อุดรธานี</option>
                <option value="75">อุตรดิตถ์</option>
                <option value="76">อุทัยธานี</option>
                <option value="77">อุบลราชธานี</option>
              </select>
            </div>
          </div>

          <div class="grid gap-6 mb-3 md:grid-cols-2">

            <div >
              <label for="zip_member" class="block mb-2 text-sm font-medium text-gray-900 ">รหัสไปรษณีย์</label>
              <input type="text" id="zip_member" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5" placeholder="กรอกรหัสไปรษณีย์" />
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
    <div class='p-8'>
      <div class="max-w-screen-lg mx-auto overflow-hidden md:max-w-3xl lg:max-w-3xl place-items-center">
        <div class="2xl:flex">
          <div className='ibm-plex-sans-thai-medium'>
            <div class="p-10 bg-white border border-lime-200 rounded-lg shadow dark:bg-lime-600 dark:border-lime-500 overflow-hidden">
              <div class="grid gap-6 md:grid-cols-1 place-items-center">
                <FaCircleCheck class="mt-1 w-10 h-10 text-white text-lg transition duration-75" aria-hidden="true" />

                <p class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">คุณลงทะเบียนชมรมผู้สูงอายุสำเร็จเรียบร้อยแล้ว</p>

                <p class="mb-2 font-normal text-white">ผลการลงทะเบียนชมรมผู้สูงอายุของคุณ ทางชมรมจะแจ้งไปยังอีเมลที่คุณได้กรอกลงไปในฟอร์ม</p>

              </div>

              <div class="grid gap-6 md:grid-cols-1 place-items-center">

                <button type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2 mt-5">
                  <Link to='/login'>กลับไปยังหน้าเข้าสู่ระบบ</Link>

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

function Register() {

  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);

  };

  const handleBack = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : 1));
  };


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const ConfirmModal = () => {
    setStep((prevStep) => prevStep + 1);
    setIsModalOpen(!isModalOpen);
  }


  return (
    <div>
      <nav class="bg-white">
        <div class="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src="logo.png" class="h-16" alt="Logo" />
        </div>
      </nav>

      {step !== 3 ? (
        <form class='p-8' onSubmit={handleSubmit}>
          <div class="max-w-screen-lg mx-auto overflow-hidden md:max-w-3xl place-items-center">
            <div class="2xl:flex">
              <div className='ibm-plex-sans-thai-medium'>
                <div class="text-center text-3xl text-black mb-8 font-bold">ลงทะเบียนชมรมผู้สูงอายุ</div>

                {step === 1 && <RegisterPage1 />}
                {step === 2 && <RegisterPage2 />}

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

                      {step !== 2 ? (
                        <div>
                          <button onClick={handleNext} type="button" class="flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-gray-600">
                            หน้าถัดไป
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

                      ) : (
                        <div>
                          <button onClick={toggleModal} type="button" class="flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-gray-600">
                            เสร็จสิ้น
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

                          {isModalOpen && (
                            <div
                              id="popup-modal"
                              className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full bg-black bg-opacity-50"
                            >
                              <div className="relative p-4 w-full max-w-md max-h-full">
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-100">
                                  <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                  </button>
                                  <div className="p-4 md:p-5 text-center">
                                    <svg className="mx-auto mb-4 text-gray-800 w-12 h-12 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <p className="mb-1 text-lg font-bold text-gray-800 dark:text-gray-800">ยืนยันการลงทะเบียน</p>
                                    <p className="mb-5 text-base font-normal text-gray-800 dark:text-gray-800">โปรดตรวจสอบข้อมูลให้ถูกต้องก่อนกดยืนยัน</p>
                                    <button
                                      onClick={ConfirmModal}
                                      className="text-white text-gray-900 focus:outline-none bg-white rounded-lg border border-lime-200 hover:bg-lime-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-lime-100 dark:focus:ring-lime-600 dark:bg-lime-700 dark:text-lime-400 dark:border-lime-500 dark:hover:text-white dark:hover:bg-lime-600 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                    >
                                      ยืนยัน
                                    </button>
                                    <button
                                      onClick={toggleModal}
                                      className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-red-200 hover:bg-red-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-700 dark:bg-red-800 dark:text-red-400 dark:border-red-600 dark:hover:text-white dark:hover:bg-red-700"
                                    >
                                      ยกเลิก
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

      ) : (
        <Confirm />
      )}

    </div>
  )
}

export default Register