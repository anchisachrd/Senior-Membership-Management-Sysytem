import React, { useState } from "react";

function CommitteeVerification({onSubmitFail, onSubmitPass}) {
  // กำหนดเหตุผลที่ไม่ผ่าน topic คือสิ่งที่แสดงบน frontend ส่วน failReason ส่งไป backend ไว้เป็นหัวข้อ gmail
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

  //ไว้เก็บค่า ผ่าน/ไม่ผ่าน ของแต่ละคุณสมบัติ
  const [results, setResults] = useState(() => qualification.map(() => ""));
  const [approvalStatus, setApprovalStatus] = useState(""); //store approval status

  // Check if any question is fail
  const isAnyFail = results.some((v) => v === "fail");
  // Check if all are selected
  const isAllSelected = results.every((v) => v !== "");

  const handleRadioChange = (index, value) => {
    setResults((prev) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });
  };

  // When user clicks ส่งข้อมูล
  const handleSendData = () => {
    if (!isAllSelected) return;

    if (isAnyFail) {
      // Build an array of fail reasons, Collect all fail reasons
      const failReasons = results
        .map((result, i) =>
          result === "fail" ? qualification[i].failReason : null
        )
        .filter(Boolean)
        .join(", ");

        onSubmitFail?.(failReasons);
        setApprovalStatus("ไม่ผ่านการตรวจสอบ");
    } else {
        onSubmitPass?.();
        setApprovalStatus("ผ่านการตรวจสอบ");
    }
  };

  return (
    <div className="w-full">
      <hr class="h-px my-12 bg-gray-200 border-0 dark:bg-gray-500"></hr>

      <div class="bg-gray-300 overflow-hidden rounded-xl shadow-xl mt-12">
        <div class="p-8">
          <p class="block mt-1 mb-7 text-xl leading-tight font-bold text-grey-600">
            ตรวจสอบเอกสารตามคุณสมบัติ
          </p>
          {qualification.map((item, index) => (
            <div key={index} class="mb-6">
              <p class="block mt-1 mb-4 text-l leading-tight font-medium text-gray-900">
                {item.topic}
              </p>
              <div class="flex">
                <div class="flex items-center me-4">
                  <input
                    type="radio"
                    value="pass"
                    name={`topic_${index}`}
                    checked={results[index] === "pass"}
                    onChange={() => handleRadioChange(index, "pass")}
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="inline-radio"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                  >
                    ผ่านคุณสมบัติ
                  </label>
                </div>
                <div class="flex items-center me-4">
                  <input
                    type="radio"
                    value="fail"
                    name={`topic_${index}`}
                    checked={results[index] === "fail"}
                    onChange={() => handleRadioChange(index, "fail")}
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="inline-radio"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-900"
                  >
                    ไม่ผ่านคุณสมบัติ
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {!approvalStatus && (
        <div className="relative mt-14 flex justify-center items-center gap-4">
          <button
            type="button"
            onClick={handleSendData}
            disabled={!isAllSelected}
            className="focus:outline-none text-white bg-lime-800 hover:bg-lime-700 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-base px-5 py-2.5  dark:bg-lime-600 dark:hover:bg-lime-500 dark:focus:ring-lime-600"
          >
            ส่งข้อมูล
          </button>
          <button
            type="button"
            onClick={() => setResults(qualification.map(() => ""))}
            className="text-white bg-red-600 hover:bg-red-700 rounded-lg px-4 py-2"
          >
            ล้างผลการตรวจสอบ
          </button>
        </div>
      )}

      {approvalStatus === "ไม่ผ่านการตรวจสอบ" && (
        <div className="flex justify-center items-center gap-4 mt-14">
          <button
            type="button"
            onClick={() => alert("ลบข้อมูล clicked!")}
            className="text-white bg-red-600 hover:bg-red-700 rounded-lg px-4 py-2"
          >
            ลบข้อมูล
          </button>
        </div>
      )}
    </div>
  );
}

export default CommitteeVerification;
