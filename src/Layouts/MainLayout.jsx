import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import Sidebar from '../Sidebar/Sidebar'

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar always visible */}
      <Sidebar className="w-64 bg-gray-100 border-r" />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4 flex-1 overflow-y-auto">
          <Outlet /> {/* Page content changes here */}
        </main>
      </div>
    </div>
  )
}

export default MainLayout