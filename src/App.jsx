import './App.css';
import React from "react";
import Header from './components/Header components/Header';
import Sidebar from './components/Sidebar components/Sidebarcomp';
import DashboardHeader from './components/Body components/Dashboardheadercomp';
import DashboardBody from './components/Body components/Dashboardbodycomp';



export default function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <DashboardHeader />
      <DashboardBody />
    </>
  )
}