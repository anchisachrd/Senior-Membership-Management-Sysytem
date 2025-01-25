import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// หน้าต่าง ๆ 
import App from './App.jsx'
import Login from './pages/authen/Login.jsx'
import LoginStaff from './pages/authen/LoginStaff.jsx'
import Register from './pages/authen/Register.jsx'
import CommitteCandidateList from './pages/committee/CommitteCandidateList.jsx'
import CommitteCandidateProfile from './pages/committee/CommitteCandidateProfile.jsx'
import DeathReport from './pages/heir/DeathReport.jsx'
import StaffCandidateList from './pages/staff/StaffCandidateList.jsx'
import CadidateWaitingList from './pages/staff/CadidateWaitingList.jsx'
import StaffCandidateProfile from './pages/staff/StaffCandidateProfile.jsx'

import SidebarStaff from './components/SidebarStaff.jsx'
import Sidebar from './components/Sidebar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      {/* หน้าที่ต้องมี side bar */}

      <Route  element={ <Sidebar />}>
        <Route path='/deathReport' element={ <DeathReport />} />
      </Route>

      <Route  element={ <SidebarStaff />}>
        <Route path='/committee_condidateList' element={ <CommitteCandidateList />} />
        <Route path='/committe_candidateProfile' element={ <CommitteCandidateProfile />} />
        <Route path='/staff_candidateList' element={ < StaffCandidateList/>} />
        <Route path='/staff_cadidateWaitingList' element={ < CadidateWaitingList />} />
        <Route path='/staff_candidateProfile/:id' element={ < StaffCandidateProfile/>} />
      </Route>
      
      {/* หน้าที่ไม่ต้องมี side bar */}
      <Route path='/login' element={ <Login />} />
      <Route path='/staff_login' element={ <LoginStaff />} />
      <Route path='/register' element={ <Register />} />
    </Routes>
  </BrowserRouter>,
)
