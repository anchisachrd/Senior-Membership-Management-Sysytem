import React, { useEffect, useState } from "react";
import {
  updateApprovalStatus,
  getVerificationDetail,
  saveVerificationDetail,
} from "../api/candidateApi";
import ConfirmModal from "./ConfirmModal";

function CommitteeVerification({ candidateId }) {
  const qualification = [
    {
      topic: "1. ใบรับรองแพทย์ยังไม่หมดอายุ",
      failReason: "ใบรับรองแพทย์หมดอายุ",
    },
    {
      topic: "2. เอกสารบางอย่างไม่ครบ",
      failReason: "เอกสารขาด",
    },
  ];

  const [results, setResults] = useState(() => qualification.map(() => ""));
  const [approvalStatus, setApprovalStatus] = useState("new");
  const [isEditing, setIsEditing] = useState(true);

  //for modal
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getVerificationDetail(candidateId);
        console.log("Full fetch response:", data);

        if (Array.isArray(data)) {
          setResults(data);
          const isAllEmpty = data.every((v) => v === "");
          if (isAllEmpty) {
            setApprovalStatus("new");
            setIsEditing(true);
          } else {
            const isAnyFail = data.some((v) => v === "fail");
            setApprovalStatus(isAnyFail ? "fail" : "pass");
            setIsEditing(false);
          }
        } else if (data && data.details) {
          const parsedDetails =
            typeof data.details === "string"
              ? JSON.parse(data.details)
              : data.details;

          setResults(parsedDetails);

          const isAllEmpty = parsedDetails.every((v) => v === "");
          if (isAllEmpty) {
            setApprovalStatus("new");
            setIsEditing(true);
          } else {
            const isAnyFail = parsedDetails.some((v) => v === "fail");
            setApprovalStatus(isAnyFail ? "fail" : "pass");
            setIsEditing(false);
          }
        } else {
          setApprovalStatus("new");
          setIsEditing(true);
        }
      } catch (error) {
        console.error("Error fetching verification details:", error);
      }
    };
    fetchData();
  }, [candidateId]);

  const isAllSelected = results.every((v) => v !== "");
  const isAnyFail = results.some((v) => v === "fail");

  const handleRadioChange = (index, value) => {
    if (!isEditing) return;
    setResults((prev) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });
  };

  const handleSendData = async () => {
    if (!isAllSelected) return;
    setIsSaveModalOpen(true); // Open save modal
  };

  const confirmSaveData = async () => {
    setIsSaveModalOpen(false); // Close modal

    try {
      const overallStatus = isAnyFail ? "ไม่ผ่านการตรวจสอบ" : "ผ่านการตรวจสอบ";

      let failReasons = "";
      if (isAnyFail) {
        failReasons = results
          .map((r, i) => (r === "fail" ? qualification[i].failReason : null))
          .filter(Boolean)
          .join(", ");
      }

      await saveVerificationDetail(candidateId, results);
      await updateApprovalStatus(candidateId, overallStatus, failReasons);

      setApprovalStatus(isAnyFail ? "fail" : "pass");
      setIsEditing(false);

      alert(`เปลี่ยนสถานะสมาชิกเป็น ${overallStatus}`);
    } catch (error) {
      console.error("Error updating approval status:", error);
      alert("เกิดข้อผิดพลาดในการอัปเดตสถานะ");
    }
  };

  const handleClearAll = () => {
    setResults(qualification.map(() => ""));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteData = () => {
    setIsDeleteModalOpen(false); // Close modal
    alert("ลบข้อมูล clicked!");
  };

  return (
    <div className="w-full">
      {/* Main Panel (with relative for absolute positioning inside) */}
      <div className="bg-gray-200 overflow-hidden rounded-xl  mt-12 relative p-8">
        {/** "แก้ไขข้อมูล" Button - Top-Right */}
        {!isEditing && (approvalStatus === "pass" || approvalStatus === "fail") && (
          <button
            type="button"
            onClick={handleEdit}
            className="absolute top-4 right-4 text-white bg-yellow-500 hover:bg-yellow-600 rounded-lg px-4 py-2"
          >
            แก้ไขข้อมูล
          </button>
        )}

        <p className="block mt-4 mb-10 text-xl  leading-tight font-bold text-grey-600">
          ตรวจสอบเอกสารตามคุณสมบัติ ( โปรดเลือกให้ครบถ้วน )
        </p>

        {qualification.map((item, index) => (
          <div key={index} className="mb-6">
            <p className="block mt-8 mb-4 text-lg leading-tight font-medium text-gray-900">
              {item.topic}
            </p>
            <div className="flex gap-12">
              <div className="flex items-center me-4">
                <input
                  type="radio"
                  value="pass"
                  name={`topic_${index}`}
                  disabled={!isEditing}
                  checked={results[index] === "pass"}
                  onChange={() => handleRadioChange(index, "pass")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                />
                <label className="ms-2 text-m font-medium text-gray-900">
                  ผ่านคุณสมบัติ
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  type="radio"
                  value="fail"
                  name={`topic_${index}`}
                  disabled={!isEditing}
                  checked={results[index] === "fail"}
                  onChange={() => handleRadioChange(index, "fail")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label className="ms-2 text-m font-medium text-gray-900">
                  ไม่ผ่านคุณสมบัติ
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Buttons Below */}
      <div className="relative mt-14 flex justify-center gap-4">
        {(approvalStatus === "new" || isEditing) && (
          <>
            <button
              type="button"
              onClick={handleSendData}
              disabled={!isAllSelected}
              className="text-white bg-lime-800 hover:bg-lime-700 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-lg px-5 py-2.5"
            >
              บันทึกข้อมูล
            </button>
            <button
              type="button"
              onClick={handleClearAll}
              className="text-white bg-red-600 hover:bg-red-700 rounded-lg px-4 py-2"
            >
              ล้างการตรวจสอบ
            </button>
          </>
        )}

        {approvalStatus === "fail" && !isEditing && (
          <button
            type="button"
            onClick={handleDelete}
            className="text-white bg-red-600 hover:bg-red-700 rounded-lg px-4 py-2"
          >
            ลบข้อมูล
          </button>
        )}
      </div>
       {/* Confirm Modals */}
       <ConfirmModal
        isOpen={isSaveModalOpen}
        title="ยืนยันการบันทึกข้อมูล"
        description="คุณต้องการบันทึกข้อมูลนี้หรือไม่?"
        onConfirm={confirmSaveData}
        onCancel={() => setIsSaveModalOpen(false)}
      />

      <ConfirmModal
        isOpen={isDeleteModalOpen}
        title="ยืนยันการลบข้อมูล"
        description="คุณต้องการลบข้อมูลนี้หรือไม่?"
        onConfirm={confirmDeleteData}
        onCancel={() => setIsDeleteModalOpen(false)}
      />
    </div>
  );
}

export default CommitteeVerification;
