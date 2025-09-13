import React, { useState } from "react";
import Header from "../common/Header";
import InputField from "../common/InputField";
import SelectBox from "../common/SelectBox";
import Button from "../common/Button";
import DatePicker from "../common/DatePicker";

export default function RequestedWorkPage() {
  const [title, setTitle] = useState("");
  const [requester, setRequester] = useState("");
  const [assignee, setAssignee] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [content, setContent] = useState("");

  const requesterOptions = [
    { value: "kim", label: "김민준" },
    { value: "lee", label: "이서준" },
  ];

  const assigneeOptions = [
    { value: "park", label: "박동규" },
    { value: "choi", label: "최영훈" },
  ];

  const handleSave = () => {
    const data = { title, requester, assignee, startDate, endDate, content };
    console.log("저장 데이터:", data);
  };

  const handleMenuClick = () => {
    console.log("메뉴 클릭!");
  };

  const pageWrapperStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    maxHeight: "100vh",
    fontFamily: "Noto Sans CJK KR, sans-serif",
    backgroundColor: "#f0f2f5",
  };

  const contentContainerStyle = {
    flex: 1,
    maxWidth: "390px",
    padding: "72px 16px 0",
    backgroundColor: "white",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    boxSizing: "border-box",
  };

  const fieldRow = {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  };

  const labelStyle = {
    width: "70px",
    fontWeight: "bold",
    fontSize: "14px",
    marginRight: "8px",
    color: "#333",
    flexShrink: 0,
  };

  const inputWrapperStyle = {
    flex: 1,
  };

  const buttonContainerStyle = {
    padding: "8px",
    backgroundColor: "white",
  };

  return (
    <div style={pageWrapperStyle}>
      <Header onMenuClick={handleMenuClick} />

      <div style={contentContainerStyle}>
        {/* 제목 */}
        <div style={fieldRow}>
          <div style={labelStyle}>제목</div>
          <div style={inputWrapperStyle}>
            <InputField
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요(필수)"
              required={true}
            />
          </div>
        </div>

        {/* 요청자 */}
        <div style={fieldRow}>
          <div style={labelStyle}>요청자</div>
          <div style={inputWrapperStyle}>
            <SelectBox
              options={requesterOptions}
              value={requester}
              onChange={(e) => setRequester(e.target.value)}
              placeholder="요청자를 선택하세요."
            />
          </div>
        </div>

        {/* 담당자 */}
        <div style={fieldRow}>
          <div style={labelStyle}>담당자</div>
          <div style={inputWrapperStyle}>
            <SelectBox
              options={assigneeOptions}
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              placeholder="담당자를 선택하세요."
            />
          </div>
        </div>

        {/* 시작일 */}
        <div style={fieldRow}>
          <div style={labelStyle}>시작일</div>
          <div style={inputWrapperStyle}>
            <DatePicker
              dateValue={startDate}
              onDateChange={setStartDate}
            />
          </div>
        </div>
        
        {/* 종료일 */}
        <div style={fieldRow}>
          <div style={labelStyle}>종료일</div>
          <div style={inputWrapperStyle}>
            <DatePicker
              dateValue={endDate}
              onDateChange={setEndDate}
            />
          </div>
        </div>

        {/* 내용 */}
        <div style={{ ...fieldRow, alignItems: "flex-start", marginBottom: 0 }}>
          <div style={labelStyle}>내용</div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요."
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              backgroundColor: "#f9f9f9",
              fontSize: "14px",
              height: "325px",
              resize: "vertical",
              boxSizing: "border-box",
              outline: "none",
            }}
          />
        </div>
      </div>

      <div style={buttonContainerStyle}>
        <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "10px 0" }}/>
        <Button label="저장" onClick={handleSave} variant="primary" />
      </div>
    </div>
  );
}