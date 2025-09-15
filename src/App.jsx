// import { useState } from 'react'
// // import { Button } from "./components/Common/Button";
// // import Layout from './components/ommon/Layout';
// // import Sidebar from './components/Common/Sidebar';
// // import ModalWrapper from './components/Common/ModalWrapper';
// // import InputField from './components/Common/InputField.jsx';
// // import LoginForm from "./components/Login/LoginForm";
// import { createGlobalStyle } from 'styled-components';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import PasswordFind from "./components/Login/PasswordFind.jsx";
// // import PasswordError from "./components/Login/PasswordError.jsx";
// // import PasswordComfirm from "./components/Login/PasswordComfirm.jsx";
// // import WorkPage from './components/Work/WorkPage.jsx';
// // import MyWorkPage from './components/Work/MyWorkPage.jsx';
// // import RequestedWorkPage from './components/Work/RequestedWorkPage.jsx';
// // import WorkDetail from './components/Work/WorkDetail.jsx';
// // import WorkDetailEdit from './components/Work/WorkDetailEdit.jsx';
// import WorkRegist from './components/Work/WorkRegist.jsx'
// import OrgTree from './components/common/OrgTree.jsx';

// const GlobalStyle = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: Poppins;
//   }
//   a {
//     text-decoration: none;
//     color: inherit;
//   }
// `


// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <GlobalStyle />
//       <BrowserRouter>
//         <Routes>
//           {/* WorkRegist 컴포넌트를 기본 경로로 설정합니다. */}
//           <Route path="/" element={<WorkRegist />} />
//           {/* OrgTree 컴포넌트를 위한 경로를 추가합니다. */}
//           <Route path="/common/OrgTree" element={<OrgTree />} />
//           {/* 다른 컴포넌트들도 필요에 따라 아래에 추가할 수 있습니다. */}
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

// -----------------------------------------------


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





// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { createGlobalStyle } from 'styled-components';
// import LoginForm from './components/Login/LoginForm';
// import PasswordConfirm from './components/Login/PasswordComfirm';
// import PasswordError from './components/Login/PasswordError';
// import PasswordFind from './components/Login/PasswordFind';

// const GlobalStyle = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: Poppins;
//   }
//   a {
//     text-decoration: none;
//     color: inherit;
//   }
// `

// function App() {
//   return (
//     <Router>
//       <GlobalStyle />
//       <Routes>
//         <Route path="/login" element={<LoginForm />} />
//         <Route path="/login/passwordConfirm" element={<PasswordConfirm />} />
//         <Route path="/login/passwordError" element={<PasswordError />} />
//         <Route path="/login/passwordFind" element={<PasswordFind />} />
//         {/* 기본 경로를 로그인 페이지로 리디렉션 */}
//         <Route path="*" element={<LoginForm />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { createGlobalStyle } from 'styled-components';
// import LoginForm from './components/Login/LoginForm';
// import PasswordConfirm from './components/Login/PasswordComfirm';
// import PasswordError from './components/Login/PasswordError';
// import PasswordFind from './components/Login/PasswordFind';
// import MyWorkPage from './components/Work/MyWorkPage';
// import RequestedWorkPage from './components/Work/RequestedWorkPage';
// import WorkDetail from './components/Work/WorkDetail';
// import WorkDetailEdit from './components/Work/WorkDetailEdit';
// import WorkPage from './components/Work/WorkPage';
// import WorkRegist from './components/Work/WorkRegist';
// import Layout from './components/common/Layout';


// const GlobalStyle = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: Poppins;
//   }
//   a {
//     text-decoration: none;
//     color: inherit;
//   }
// `

// function App() {
//   return (
//     <Router>
//       <GlobalStyle />
//       <Routes>
//         <Route element={<Layout />}>
//         <Route path="/work" element={<WorkPage />} />
//         <Route path="/work/myworklist" element={<MyWorkPage />} />
//         <Route path="/work/reqlist" element={<RequestedWorkPage />} />
//         <Route path="/work/detail/:id" element={<WorkDetail />} />
//         <Route path="/work/detail/:id/edit" element={<WorkDetailEdit />} />
//         <Route path="/work/regist" element={<WorkRegist />} />
//         {/* 기본 경로를 WorkPage로 리디렉션 */}
//         <Route path="*" element={<WorkPage />} />
//       </Route>
//       </Routes>
//     </Router>
//   );
// }


// export default App;



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

// ===== Login =====
import LoginForm from './components/Login/LoginForm';
import PasswordConfirm from './components/Login/PasswordComfirm';
import PasswordError from './components/Login/PasswordError';
import PasswordFind from './components/Login/PasswordFind';

// ===== Work =====
import MyWorkPage from './components/Work/MyWorkPage';
import RequestedWorkPage from './components/Work/RequestedWorkPage';
import WorkDetail from './components/Work/WorkDetail';
import WorkDetailEdit from './components/Work/WorkDetailEdit';
import WorkPage from './components/Work/WorkPage';
import WorkRegist from './components/Work/WorkRegist';

// ===== Common =====
import Layout from './components/common/Layout';
import OrgTree from './components/common/OrgTree';
import HomePage from './components/Home/HomePage';


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
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>

        {/* ===== Login 관련 (Layout 없음) ===== */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/login/passwordConfirm" element={<PasswordConfirm />} />
        <Route path="/login/passwordError" element={<PasswordError />} />
        <Route path="/login/passwordFind" element={<PasswordFind />} />

        {/* ===== Work 관련 (Layout 포함) ===== */}
        <Route element={<Layout />}>
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/myworklist" element={<MyWorkPage />} />
          <Route path="/work/reqlist" element={<RequestedWorkPage />} />
          <Route path="/work/detail" element={<WorkDetail />} />
          <Route path="/work/detailedit" element={<WorkDetailEdit />} />
          <Route path="/work/regist" element={<WorkRegist />} />
          <Route path="/common/OrgTree" element={<OrgTree />} />
        </Route>

        <Route element={<Layout />}>
          <Route path='/home' element={<HomePage />} />
        </Route>

        {/* ===== 기본 경로 처리 (로그인으로 리디렉션) ===== */}
        <Route path="*" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;

