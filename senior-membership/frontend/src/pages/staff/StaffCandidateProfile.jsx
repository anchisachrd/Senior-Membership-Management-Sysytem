import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCandidateAndHeirById, updateCandidateStatus} from "../../api/candidateApi";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { LuFile } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import DocumentPreview from "../../components/DocumentPreview";

function Information_personal({ data }) {
  return (
    <div>
      {/* กล่อง 1 */}
      <div class="bg-gray-50 overflow-hidden rounded-xl shadow-xl mt-14">
        <div class="p-8">
          <p class="block mt-1 mb-7 text-xl leading-tight font-bold text-grey-600">
            1. ข้อมูลส่วนตัวของผู้สมัคร
          </p>

          <div class="grid gap-6 mb-6 md:grid-cols-3">
            <div>
              <label
                for="title_name_member"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                คำนำหน้า
              </label>

              <input
                type="text"
                value={data.title}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
                readOnly
              />
            </div>

            <div>
              <label
                for="first_name_member"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                ชื่อจริง
              </label>
              <input
                type="text"
                value={data.first_name}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>

            <div>
              <label
                for="last_name_member"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                นามสกุล
              </label>
              <input
                type="text"
                value={data.last_name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                placeholder="กรอกนามสกุลของผู้สมัคร"
                readOnly
              />
            </div>

            <div>
              <label
                for="id_number_member"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                เลขบัตรประชาชน
              </label>
              <input
                type="text"
                value={data.national_id}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>

            <div>
              <label
                for="birth_day_member"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                วัน/เดือน/ปี เกิด
              </label>
              <input
                id="birth_day_member"
                type="text"
                value={data.dob}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>

            <div>
              <label
                for="sex_member"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                เพศ
              </label>
              <input
                id="sex_member"
                value={data.gender}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2"
                readOnly
              />
            </div>
          </div>

          <div class="grid gap-6 mb-4 md:grid-cols-2">
            <div>
              <label
                for="job_member"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                อาชีพ
              </label>
              <input
                id="job_member"
                value={data.occupation}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2"
                readOnly
              />
            </div>

            <div>
              <label
                for="phone_member"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                หมายเลขโทรศัพท์
              </label>
              <input
                type="text"
                value={data.phone}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>
          </div>

          <div class="mb-4">
            <label
              for="email_member"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              อีเมล
            </label>
            <input
              type="text"
              value={data.email}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
              readOnly
            />
          </div>

          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500"></hr>

          {/* ที่อยู่ */}
          <p class="block mb-5 mt-0 text-base leading-tight font-bold text-grey-600">
            ที่อยู่ปัจจุบัน
          </p>

          <div class="grid gap-6 mb-5 md:grid-cols-3">
            <div>
              <label
                for="home_number_member"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                บ้านเลขที่
              </label>
              <input
                type="text"
                value={data.address.house_num}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>

            <div>
              <label
                for="moo_member"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                หมู่ที่
              </label>
              <input
                type="text"
                value={data.address.moo}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>

            <div>
              <label
                for="soi_member"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                ซอย
              </label>
              <input
                type="text"
                value={data.address.soi}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>
          </div>

          <div class="grid gap-6 mb-4 md:grid-cols-2">
            <div>
              <label
                for="road_member"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                ถนน
              </label>
              <input
                type="text"
                value={data.address.street}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>

            <div>
              <label
                for="sub_district_member"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                ตำบล/แขวง
              </label>
              <input
                type="text"
                value={data.address.subdistrict}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>

            <div>
              <label
                for="district_member"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                อำเภอ/เขต
              </label>
              <input
                type="text"
                value={data.address.district}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>

            <div>
              <label
                for="province_member"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                จังหวัด
              </label>
              <input
                id="province_member"
                value={data.address.province}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2"
                readOnly
              />
            </div>
          </div>

          <div class="grid gap-6 mb-3 md:grid-cols-2">
            <div>
              <label
                for="zip_member"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                รหัสไปรษณีย์
              </label>
              <input
                type="text"
                value={data.address.postal_code}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      {/* กล่อง */}
      <div class="bg-gray-50 overflow-hidden rounded-xl shadow-xl mt-14">
        <div class="p-8">
          <p class="block mt-1 mb-7 text-xl leading-tight font-bold text-grey-600">
            2. เอกสารของผู้สมัคร
          </p>

          <DocumentPreview
            label="สำเนาทะเบียนบ้าน"
            docPath={data.documents?.house_registration}
          />

          <DocumentPreview
            label="สำเนาบัตรประชาชน"
            docPath={data.documents?.id_card}
          />

          <DocumentPreview
            label="ใบเปลี่ยนชื่อ"
            docPath={data.documents?.rename_doc}
          />

          <DocumentPreview
            label="ใบรับรองแพทย์"
            docPath={data.documents?.med_certification}
          />
        </div>
      </div>
    </div>
  );
}

function Information_heir({ data }) {
  return (
    <div>
      {/* กล่อง  3 */}
      <div class="bg-gray-50 overflow-hidden rounded-xl shadow-xl mt-14">
        <div class="p-8">
          <p class="block mt-1 mb-7 text-xl leading-tight font-bold text-grey-600">
            3. ข้อมูลส่วนตัวของทายาท
          </p>

          <div class="grid gap-6 mb-6 md:grid-cols-3">
            <div>
              <label
                for="title_name_heir"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                คำนำหน้า
              </label>
              <input
                value={data.title}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2"
                readOnly
              />
            </div>

            <div>
              <label
                for="first_name_heir"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                ชื่อจริง
              </label>
              <input
                type="text"
                id="first_name_heir"
                value={data.first_name}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>

            <div>
              <label
                for="last_name_heir"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                นามสกุล
              </label>
              <input
                type="text"
                id="last_name_heir"
                value={data.last_name}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>

            <div>
              <label
                for="id_number_heir"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                เลขบัตรประชาชน
              </label>
              <input
                type="text"
                id="id_number_heir"
                value={data.national_id}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>

            <div>
              <label
                for="birth_day_heir"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                วัน/เดือน/ปี เกิด
              </label>
              <input
                id="birth_day_heir"
                type="text"
                value={data.dob}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>

            <div>
              <label
                for="sex_heir"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                เพศ
              </label>
              <input
                id="sex_heir"
                value={data.gender}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2"
                readOnly
              />
            </div>
          </div>

          <div class="grid gap-6 mb-3 md:grid-cols-2">
            <div>
              <label
                for="job_heir"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                อาชีพ
              </label>
              <input
                id="job_heir"
                value={data.occupation}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2"
                readOnly
              />
            </div>

            <div>
              <label
                for="relationship_heir"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                ความเกี่ยวข้อง
              </label>
              <input
                id="relationship_heir"
                value={data.relationship}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2"
                readOnly
              />
            </div>

            <div>
              <label
                for="phone_heir"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                หมายเลขโทรศัพท์
              </label>
              <input
                type="text"
                value={data.phone}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>

            <div>
              <label
                for="email_heir"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                อีเมล
              </label>
              <input
                type="text"
                value={data.email}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>
          </div>

          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500"></hr>

          {/* ที่อยู่ */}
          <p class="block mb-5 mt-0 text-base leading-tight font-bold text-grey-600">
            ที่อยู่ปัจจุบัน
          </p>

          <div class="grid gap-6 mb-5 md:grid-cols-3">
            <div>
              <label
                for="home_number_member"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                บ้านเลขที่
              </label>
              <input
                type="text"
                value={data.address.house_num}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>

            <div>
              <label
                for="moo_member"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                หมู่ที่
              </label>
              <input
                type="text"
                value={data.address.moo}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>

            <div>
              <label
                for="soi_member"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                ซอย
              </label>
              <input
                type="text"
                value={data.address.soi}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>
          </div>

          <div class="grid gap-6 mb-4 md:grid-cols-2">
            <div>
              <label
                for="road_member"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                ถนน
              </label>
              <input
                type="text"
                value={data.address.street}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>

            <div>
              <label
                for="sub_district_member"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                ตำบล/แขวง
              </label>
              <input
                type="text"
                value={data.address.subdistrict}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>

            <div>
              <label
                for="district_member"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                อำเภอ/เขต
              </label>
              <input
                type="text"
                value={data.address.district}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>

            <div>
              <label
                for="province_member"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                จังหวัด
              </label>
              <input
                value={data.address.province}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2"
                readOnly
              />
            </div>
          </div>

          <div class="grid gap-6 mb-3 md:grid-cols-2">
            <div>
              <label
                for="zip_member"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                รหัสไปรษณีย์
              </label>
              <input
                type="text"
                value={data.address.postal_code}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-grey-500 focus:border-grey-500 block w-full p-2.5"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      {/* กล่อง 4 */}
      <div class="bg-gray-50 overflow-hidden rounded-xl shadow-xl mt-14">
        <div class="p-8">
          <p class="block mt-1 mb-7 text-xl leading-tight font-bold text-grey-600">
            4. เอกสารของทายาท
          </p>

          <DocumentPreview
            label="สำเนาทะเบียนบ้าน"
            docPath={data.documents?.house_registration}
          />

          <DocumentPreview
            label="สำเนาบัตรประชาชน"
            docPath={data.documents?.id_card}
          />

          <DocumentPreview
            label="ใบเปลี่ยนชื่อ"
            docPath={data.documents?.rename_doc}
          />
        </div>
      </div>
    </div>
  );
}
function StaffCandidateProfile() {
  const { id } = useParams();
  const location = useLocation();
  const { showButtons } = location.state || { showButtons: false };

  const [candidate, setCandidate] = useState(null);
  const [heir, setHeir] = useState(null);

  const [activeTab, setActiveTab] = useState("personalInfo");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenCancel, setIsModalOpenCancel] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCandidateAndHeirData = async () => {
      try {
        console.log("Candidate ID:", id);
        const data = await getCandidateAndHeirById(id);
        setCandidate(data);
        setHeir(data.heir);
      } catch (error) {
        console.error("Error fetching candidate details:", error);
      }
    };
    fetchCandidateAndHeirData();
  }, [id]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const ConfirmModal = async () => {
    try {
      await updateCandidateStatus(id);
      alert("สถานะเอกสารถูกเปลี่ยนเป็น 'ผ่านการตรวจสอบ'");
      setIsModalOpen(false);
      navigate("/staff_candidateList");
    } catch (error) {
      alert("เกิดข้อผิดพลาดในการอัปเดตสถานะ");
      console.error(error);
    }
  };

  const toggleModalCancel = () => {
    setIsModalOpenCancel(!isModalOpenCancel);
  };

  const ConfirmModalCancelOne = () => {
    alert("เอกสารไม่ครบถ้วน");
    setIsModalOpenCancel(!isModalOpenCancel);
    navigate("/staff_candidateList");
  };

  const ConfirmModalCancelTwo = () => {
    alert("เอกสารไม่ถูกต้อง");
    setIsModalOpenCancel(!isModalOpenCancel);
    navigate("/staff_candidateList");
  };

  const ConfirmModalCancelThree = () => {
    alert("เอกสารไม่ถูกต้องและไม่ครบถ้วน");
    setIsModalOpenCancel(!isModalOpenCancel);
    navigate("/staff_candidateList");
  };

  return (
    <div class="ibm-plex-sans-thai-medium">
      <div class="p-12 sm:ml-64 overflow-hidden">
        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li class="me-2">
            <button
              onClick={() => setActiveTab("personalInfo")}
              class={`inline-block p-4 rounded-t-lg ${
                activeTab === "personalInfo"
                  ? "text-white bg-gray-600 dark:bg-gray-600"
                  : "text-gray-500 bg-gray-300 dark:text-white"
              }`}
            >
              ข้อมูลส่วนตัว
            </button>
          </li>
          {/* แท็บ ข้อมูลทายาท */}
          <li class="me-2">
            <button
              onClick={() => setActiveTab("heirInfo")}
              class={`inline-block p-4 rounded-t-lg ${
                activeTab === "heirInfo"
                  ? "text-white bg-gray-600 dark:bg-gray-600"
                  : "text-gray-500 bg-gray-300 dark:text-white"
              }`}
            >
              ข้อมูลทายาท
            </button>
          </li>
        </ul>

        <div class="mb-8 overflow-hidden">
          {activeTab === "personalInfo" && candidate && (
            <Information_personal data={candidate} />
          )}
          {activeTab === "heirInfo" && heir && <Information_heir data={heir} />}
        </div>

        {showButtons && (<div class="relative mt-14 flex justify-center items-center">
          <button
            type="button"
            onClick={toggleModal}
            class="focus:outline-none text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-base px-5 py-2.5 me-9 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
          >
            ผ่านการตรวจสอบ
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
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                  <div class="p-4 md:p-5 text-center">
                    <svg
                      class="mx-auto mb-4 text-gray-800 w-12 h-12 dark:text-gray-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <p class="mb-1 text-lg font-bold text-gray-800 dark:text-gray-800">
                      ยืนยันการตรวจสอบ
                    </p>
                    <p class="mb-5 text-base font-normal text-gray-800 dark:text-gray-800">
                      โปรดตรวจสอบความถูกต้องและ <br />{" "}
                      ครบถ้วนของเอกสารก่อนกดยืนยัน <br />{" "}
                      ของข้อมูลส่วนตัวผู้สมัครและทายาท
                    </p>
                    <button
                      onClick={ConfirmModal}
                      class="text-white text-gray-900 focus:outline-none bg-white rounded-lg border border-lime-200 hover:bg-lime-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-lime-100 dark:focus:ring-lime-600 dark:bg-lime-700 dark:text-lime-400 dark:border-lime-500 dark:hover:text-white dark:hover:bg-lime-600 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                    >
                      ยืนยัน
                    </button>
                    <button
                      onClick={toggleModal}
                      class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-red-200 hover:bg-red-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-700 dark:bg-red-800 dark:text-red-400 dark:border-red-600 dark:hover:text-white dark:hover:bg-red-700"
                    >
                      ยกเลิก
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={toggleModalCancel}
            class="focus:outline-none text-white bg-red-950 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-red-700 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            ไม่ผ่านการตรวจสอบ
          </button>

          {isModalOpenCancel && (
            <div
              id="popup-modal"
              class="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full bg-black bg-opacity-50"
            >
              <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-100">
                  <button
                    type="button"
                    onClick={toggleModalCancel}
                    class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                  <div class="p-4 md:p-5 text-center">
                    <svg
                      class="mx-auto mb-4 text-gray-800 w-12 h-12 dark:text-gray-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <p class="mb-1 text-lg font-bold text-gray-800 dark:text-gray-800">
                      เอกสารไม่ผ่านการตรวจสอบ
                    </p>
                    <p class="mb-5 text-base font-normal text-gray-800 dark:text-gray-800">
                      โปรดเลือกผลไม่ผ่านการตรวจสอบเอกสาร
                    </p>
                    <button
                      onClick={ConfirmModalCancelOne}
                      class="text-white text-gray-900 focus:outline-none bg-white rounded-lg border border-yellow-200 hover:bg-yellow-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-yellow-100 dark:focus:ring-yellow-600 dark:bg-yellow-700 dark:text-yellow-400 dark:border-yellow-500 dark:hover:text-white dark:hover:bg-yellow-600 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                    >
                      ไม่ครบถ้วน
                    </button>
                    <button
                      onClick={ConfirmModalCancelTwo}
                      class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-orange-200 hover:bg-orange-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-orange-100 dark:focus:ring-orange-700 dark:bg-orange-800 dark:text-orange-400 dark:border-orange-600 dark:hover:text-white dark:hover:bg-orange-700"
                    >
                      ไม่ถูกต้อง
                    </button>
                    <button
                      onClick={ConfirmModalCancelThree}
                      class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-red-200 hover:bg-red-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-700 dark:bg-red-800 dark:text-red-400 dark:border-red-600 dark:hover:text-white dark:hover:bg-red-700"
                    >
                      ทั้งคู่
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
  );
}

export default StaffCandidateProfile;
