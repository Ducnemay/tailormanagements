import React, { useState } from 'react';
import { Bell, Search } from 'lucide-react';
import Sidebar from '@/layouts/Sidebar';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Get current date
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDate = now.getDate();

  // Vietnamese month names
  const monthNames = [
    'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 
    'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8',
    'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
  ];

  // Generate calendar days for current month
  const generateCalendar = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const calendar = [];
    
    // Add empty cells for days before month starts (0 = Sunday, 1 = Monday, etc.)
    // Convert Sunday (0) to 6, and shift others by -1 to make Monday = 0
    const firstDayAdjusted = firstDay === 0 ? 6 : firstDay - 1;
    for (let i = 0; i < firstDayAdjusted; i++) {
      calendar.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(day);
    }
    
    return calendar;
  };

  const calendarDays = generateCalendar(currentYear, currentMonth);

  // Data
  const commissions = [
    {
      client: 'Nguyễn Văn An',
      location: 'HÀ NỘI, HOÀN KIẾM',
      garments: ['VEST', 'QUẦN TÂY'],
      value: '15.500.000đ'
    },
    {
      client: 'Trần Minh Khoa',
      location: 'TP HỒ CHÍ MINH, QUẬN 1',
      garments: ['ÁO DÀI'],
      value: '28.000.000đ'
    },
    {
      client: 'Lê Hoàng Nam',
      location: 'ĐÀ NẴNG',
      garments: ['SUIT CƯỚI'],
      value: '32.500.000đ'
    },
    {
      client: 'Phạm Đức Anh',
      location: 'HÀ NỘI, BA ĐÌNH',
      garments: ['ÁO VEST', 'SƠ MI'],
      value: '9.200.000đ'
    }
  ];

  const upcomingFittings = [
    {
      date: 'T2',
      day: '22',
      client: 'Ông Nguyễn Văn Minh',
      time: '14:30',
      type: 'THỬ ÁO LẦN 2'
    },
    {
      date: 'T2',
      day: '22',
      client: 'Ông Trần Quốc Thắng',
      time: '16:00',
      type: 'ĐO SIZE'
    },
    {
      date: 'T3',
      day: '23',
      client: 'Ông Lê Văn Tùng',
      time: '10:00',
      type: 'CHỈNH SỬA CUỐI'
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 min-h-screen">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
          <div className="flex justify-between items-center">
            {/* Revenue Stats */}
            <div className="flex gap-12">
              <div>
                <p className="text-xs text-gray-500 tracking-wider uppercase mb-1">
                  Doanh Thu Hôm Nay
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-light text-gray-900">24.500.000đ</span>
                  <span className="text-sm text-green-600 font-medium">+12%</span>
                </div>
              </div>
              
              <div>
                <p className="text-xs text-gray-500 tracking-wider uppercase mb-1">
                  Doanh Thu Tháng Này
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-light text-gray-900">685.200.000đ</span>
                  <span className="text-sm text-green-600 font-medium">+8.4%</span>
                </div>
              </div>
            </div>

            {/* Search & Notifications */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                  size={18} 
                />
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-8">
          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <p className="text-xs text-gray-500 tracking-wider uppercase mb-3">
                Tư Vấn
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-light text-gray-900">14</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  Khách Hàng Chờ
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <p className="text-xs text-gray-500 tracking-wider uppercase mb-3">
                Thử Đồ
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-light text-gray-900">08</span>
                <span className="text-sm text-amber-600 uppercase tracking-wide font-medium">
                  Đang Xử Lý
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <p className="text-xs text-gray-500 tracking-wider uppercase mb-3">
                Hoàn Thành
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-light text-gray-900">21</span>
                <span className="text-sm text-green-600 uppercase tracking-wide font-medium">
                  Sẵn Sàng Lấy
                </span>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Commissions - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-sans text-gray-900">
                  Đơn Hàng Gần Đây
                </h2>
                <button className="text-sm text-amber-700 hover:text-amber-800 uppercase tracking-wider font-medium transition-colors">
                  Xem Tất Cả
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-6 py-4 text-left">
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                          Khách Hàng
                        </span>
                      </th>
                      <th className="px-6 py-4 text-left">
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                          Loại Sản Phẩm
                        </span>
                      </th>
                      <th className="px-6 py-4 text-right">
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                          Giá Trị
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {commissions.map((commission, index) => (
                      <tr 
                        key={index} 
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-5">
                          <div className="font-medium text-gray-900 text-base">
                            {commission.client}
                          </div>
                          <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
                            {commission.location}
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex flex-wrap gap-2">
                            {commission.garments.map((garment, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 rounded-md text-xs uppercase tracking-wider text-gray-700 font-medium"
                              >
                                {garment}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <span className="text-lg font-light text-gray-900">
                            {commission.value}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Fittings & Calendar - Takes 1 column */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-serif text-gray-900">Lịch Hẹn</h2>
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {monthNames[currentMonth]} {currentYear}
                </span>
              </div>

              {/* Calendar */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day, idx) => (
                    <div 
                      key={idx} 
                      className="text-center text-xs text-gray-500 font-medium py-2"
                    >
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, idx) => (
                    <button
                      key={idx}
                      disabled={!day}
                      className={`
                        aspect-square flex items-center justify-center text-sm rounded-lg
                        transition-all
                        ${!day 
                          ? 'invisible' 
                          : day === currentDate
                            ? 'bg-amber-600 text-white font-semibold shadow-md'
                            : 'hover:bg-gray-100 text-gray-700'
                        }
                      `}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Upcoming Fittings */}
              <div>
                <h3 className="text-xs text-amber-700 uppercase tracking-wider font-semibold mb-4">
                  Lịch Sắp Tới
                </h3>
                <div className="space-y-3">
                  {upcomingFittings.map((fitting, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="flex gap-4">
                        <div className="text-center min-w-[50px]">
                          <div className="text-xs text-gray-500 uppercase tracking-wide">
                            {fitting.date}
                          </div>
                          <div className="text-3xl font-light text-gray-900 leading-none mt-1">
                            {fitting.day}
                          </div>
                        </div>
                        <div className="flex-1 border-l-2 border-gray-200 pl-4">
                          <div className="font-medium text-gray-900 mb-1">
                            {fitting.client}
                          </div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide">
                            {fitting.time} - {fitting.type}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white px-8 py-4 mt-12">
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span className="uppercase tracking-wide">
              © 2025 Maison Tailleur - Hệ Thống Quản Lý May Đo
            </span>
            <div className="flex items-center gap-4">
              <span className="uppercase tracking-wide">Máy Chủ: HN-01</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="uppercase tracking-wide">Kết Nối Ổn Định</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DashboardPage;