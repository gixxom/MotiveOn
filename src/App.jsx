import { useState } from 'react'
// import { Button } from "./components/Common/Button";
// import Layout from './components/Common/Layout';
// import Sidebar from './components/Common/Sidebar';
// import ModalWrapper from './components/Common/ModalWrapper';
// import InputField from './components/Common/InputField.jsx';
// import LoginForm from "./components/Login/LoginForm";
import { createGlobalStyle } from 'styled-components';
// import PasswordFind from "./components/Login/PasswordFind.jsx";
// import PasswordError from "./components/Login/PasswordError.jsx";
// import PasswordComfirm from "./components/Login/PasswordComfirm.jsx";
// import WorkPage from './components/Work/WorkPage.jsx';
// import MyWorkPage from './components/Work/MyWorkPage.jsx';
// import RequestedWorkPage from './components/Work/RequestedWorkPage.jsx';
// import WorkDetail from './components/Work/WorkDetail.jsx';
// import WorkDetailEdit from './components/Work/WorkDetailEdit.jsx';
import WorkRegist from './components/Work/WorkRegist.jsx'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyle />
    {/* <LoginForm></LoginForm> */}
    {/* <PasswordFind></PasswordFind> */}
    {/* <PasswordError></PasswordError> */}
    {/* <PasswordComfirm /> */}
    {/* <WorkPage /> */}
    {/* <MyWorkPage />  */}
    {/* <RequestedWorkPage /> */}
    {/* <WorkDetailEdit /> */}
    <WorkRegist />
    </>
  )
}

export default App;




// // //레이아웃 확인용 
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/common/Layout";

// // 기본 페이지
// import HomePage from "./components/Home/HomePage";
// import CalendarPage from "./components/Calendar/CalendarPage";

// // 업무
// import WorkPage from "./components/Work/WorkPage";
// import MyWorkPage from "./components/Work/MyWorkPage";
// import RequestedWorkPage from "./components/Work/RequestedWorkPage";

// // 전자결재
// import ApprovalPage from "./components/Approval/ApprovalPage";
// import ReferenceApprovalPage from "./components/Approval/ReferenceApprovalPage";
// import DraftApprovalPage from "./components/Approval/DraftApprovalPage";
// import TempApprovalPage from "./components/Approval/TempApprovalPage";
// import CompleteApprovalPage from "./components/Approval/CompleteApprovalPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route element={<Layout />}>
//           {/* 홈 */}
//           <Route path="/" element={<HomePage />} />

//           {/* 일정 */}
//           <Route path="/calendarPage" element={<CalendarPage />} />

//           {/* 업무 */}
//           <Route path="/workPage" element={<WorkPage />} />
//           <Route path="/work/myworklist" element={<MyWorkPage />} />
//           <Route path="/work/reqlist" element={<RequestedWorkPage />} />

//           {/* 전자결재 */}
//          <Route path="/approvalPage" element={<ApprovalPage />} />
// <Route path="/approval/viewerList" element={<ReferenceApprovalPage />} />
// <Route path="/approval/draftList" element={<DraftApprovalPage />} />
// <Route path="/approval/tempList" element={<TempApprovalPage />} />
// <Route path="/approval/approvalList" element={<CompleteApprovalPage />} />

//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;






// 모달창 테스트 
// import Layout from "./components/common/Layout";
// import ModalWrapper from "./components/common/ModalWrapper";
// import useModalStore from "./store/modalStore";
// import PasswordError from "./components/Login/PasswordError.jsx";
// import { Button } from "./components/common/Button";




// function App() {
//   const { openModal } = useModalStore();

//   return (
//     <>
//       {/* <Layout>
//         <h2>메인 컨텐츠</h2> */}
//         <Button
//           onClick={() =>
//             openModal(<PasswordError />) // 여기서 PasswordError 모달로 열기
//           }
//         >
//           PasswordError 모달 열기
//         </Button>
//       {/* </Layout> */}
//       <ModalWrapper />
//     </>
//   );
// }

// export default App;


// // 일반모달창 똑같은겨
// import React, { useState } from "react";
// import PasswordError from "./components/Login/PasswordError";

// function App() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>PasswordError 테스트</h2>
//       <button onClick={() => setOpen(true)}>에러 발생</button>

//       <PasswordError
//         isOpen={open}
//         onClose={() => setOpen(false)}
//       />
//     </div>
//   );
// }

// export default App;