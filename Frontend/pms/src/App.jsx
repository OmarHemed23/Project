import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import 
{ 
  faCircleInfo, faCashRegister, faDashboard, faDownload, faSearch, 
  faArrowLeft, faArrowRight, faUser, faCheckSquare, faTools, faComments, faEnvelope, faChevronDown, faImage, faPaperclip,
  faWallet, faBuilding, faFileContract, faExchange, faChevronRight, faCalendar, faInfoCircle, faTimes, faHome, faBell, 
  faBars, faEye, faEllipsisV, faUsers, faChartLine, faChartBar, faFileAlt, faCog, faArrowUp, faArrowDown
} 
from '@fortawesome/free-solid-svg-icons';
import  GuestLayout from './layout/GuestLayout';
import AuthenticatedLayout from './layout/AuthenticatedLayout';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import Dashboard from './pages/landlord/Dashboard';
import Home from './pages/tenant/Home';
import LeaseInfo from './pages/tenant/LeaseInfo';
import Payment from './pages/tenant/Payment';
import MaintenanceRequests from './pages/tenant/MaintenanceRequests';
import TenantTalk from './pages/tenant/TenantTalk';
import Announcement from './pages/tenant/Announcements';
import AnnouncementCard from './components/AnnouncementCard';
import './App.css';

export default function App() {

  library.add
    (
      fab, faDashboard, faCircleInfo, faCashRegister, faDownload, faSearch, 
      faArrowLeft, faArrowRight, faUser, faCheckSquare, faTools, faComments, faEnvelope, faChevronDown, faImage, faPaperclip, 
      faWallet, faBuilding, faFileContract, faExchange, faChevronRight, faChevronDown, faCalendar, faInfoCircle, faTimes, faHome,
      faBell, faBars, faEye, faEllipsisV, faUsers, faChartLine, faChartBar, faFileAlt, faCog, faArrowUp, faArrowDown
    );
  return (
    <Routes>
      <Route path='/auth/*' element={<GuestLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='login/forgot-password' element={<ForgotPassword />} />
      </Route>
      <Route path='/landlord/*' element={<AuthenticatedLayout />}>
        <Route path='dashboard' element={<Dashboard />} />
      </Route>
      <Route path='/tenant/*' element={<AuthenticatedLayout />}>
        <Route path='home' element={<Home />} />
        <Route path='leaseinfo' element={<LeaseInfo />} />
        <Route path='payment' element={<Payment />} />
        <Route path='maintenance-request' element={<MaintenanceRequests />} />
        <Route path='tenant-talk' element={<TenantTalk />} />
        <Route path='announcement' element={<Announcement />} >
          <Route path='announcement/:id' element={<AnnouncementCard />} />
        </Route>
      </Route>
    </Routes>
  );
}
