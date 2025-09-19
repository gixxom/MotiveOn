// src/components/common/OrgTree2.jsx
import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "jstree";
import { getOrgTree } from "../motiveOn/api";
import "jstree/dist/themes/default/style.min.css";

export default function OrgTree2({ onSelect, onClose }) {
  const treeRef = useRef(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // ✅ 임시 저장

  useEffect(() => {
    const treeEl = $(treeRef.current);

    getOrgTree()
      .then((res) => {
        console.log(" 원본 데이터:", res.data);

        const data = res.data.map((node) => {
          const id = String(node.id || node.ID);
          const parent =
            node.parent === "#" || node.PARENT === "#"
              ? "#"
              : String(node.parent || node.PARENT);
          const text = node.text || node.TEXT;
          const type = node.type || node.TYPE;

          if (type === "department") {
            return {
              id,
              parent,
              text,
              type,
              icon: "jstree-folder",
            };
          }

          return {
            id,
            parent,
            text,
            type: "employee",
            icon: "jstree-file",
          };
        });

        // 기존 트리 초기화
        if (treeEl.jstree(true)) {
          treeEl.jstree("destroy");
        }

        // jstree 초기화
        treeEl
          .jstree({
            core: { data, check_callback: true },
            themes: { dots: true, icons: true },
            plugins: ["search"],
          })
          .on("select_node.jstree", function (e, data) {
            $(this).jstree("open_all"); // ✅ 기존 열기 로직 유지

            // ✅ 사원 선택만 state 에 저장 (아직 부모에는 안 넘김)
            if (data.node.original.type === "employee") {
              const eno = data.node.id.replace("e-", "");
              const name = data.node.text;
              setSelectedEmployee({ value: eno, label: name });
            } else {
              setSelectedEmployee(null);
            }
          });
      })
      .catch((err) => {
        console.error("❌ 조직도 불러오기 실패:", err);
      });

    return () => {
      if (treeEl.jstree(true)) {
        treeEl.jstree("destroy");
      }
    };
  }, []);

  const handleSearch = (e) => {
    $(treeRef.current).jstree(true).search(e.target.value);
  };

  // ✅ 확인 버튼 클릭 시 부모로 최종 전달
  const handleConfirm = () => {
    if (selectedEmployee) {
      onSelect(selectedEmployee);
    }
    if (onClose) onClose();
  };

  return (
    <div>
      <input
        type="text"
        id="orgSearch"
        placeholder="검색(이름/부서)"
        onKeyUp={handleSearch}
        style={{ marginBottom: "8px", width: "100%" }}
      />
      <div
        ref={treeRef}
        style={{ maxHeight: "400px", overflowY: "auto", border: "1px solid #ddd", padding: "4px" }}
      ></div>

      {/* ✅ 확인 버튼 */}
      <div style={{ marginTop: "12px", textAlign: "right" }}>
        <button
          onClick={handleConfirm}
          style={{
            padding: "8px 16px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#1976d2",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          확인
        </button>
      </div>
    </div>
  );
}
