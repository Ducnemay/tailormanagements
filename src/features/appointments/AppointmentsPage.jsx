import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import Sidebar from '@/layouts/Sidebar';

const AppointmentsPage = () => {
  const [activeTab, setActiveTab] = useState('appointments');
  
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDate = now.getDate();

  const monthNames = [
    'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4',
    'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8',
    'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
  ];

  const generateCalendar = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendar = [];
    const firstDayAdjusted = firstDay === 0 ? 6 : firstDay - 1;
    
    for (let i = 0; i < firstDayAdjusted; i++) {
      calendar.push(null);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(day);
    }
    
    return calendar;
  };

  const calendarDays = generateCalendar(currentYear, currentMonth);

  const appointments = {
    [currentDate]: [
      { time: '14:30', client: 'Ông Nguyễn Văn Minh', type: 'fitting' },
      { time: '16:00', client: 'Ông Trần Quốc Thắng', type: 'consultation' }
    ],
    [currentDate + 1]: [
      { time: '10:00', client: 'Ông Lê Văn Tùng', type: 'pickup' }
    ],
    5: [
      { time: '14:00', client: 'Ông Phạm Minh', type: 'fitting' },
      { time: '16:30', client: 'Ông Vũ An', type: 'pickup' }
    ]
  };

  const todayAgenda = [
    {
      time: '14:30',
      type: 'Thử Đồ Lần 2',
      client: 'Ông Nguyễn Văn Minh',
      order: 'Đơn #MT-8291',
      product: 'Bộ Vest 3 Mảnh Navy',
      location: 'Xưởng B',
      duration: '45 Phút',
      color: 'blue'
    },
    {
      time: '16:00',
      type: 'Đo Số Đo',
      client: 'Ông Trần Quốc Thắng',
      order: 'Tư Vấn Đầu Tiên',
      product: 'Chương Trình Sơ Mi Đặt May',
      location: 'Phòng Riêng',
      duration: '60 Phút',
      color: 'gray'
    },
    {
      time: '18:15',
      type: 'Nhận Hàng Cuối',
      client: 'Ông Lê Văn Tùng',
      order: 'Đơn #MT-7740',
      product: 'Áo Măng Tô Cashmere',
      location: 'Quầy Lễ Tân',
      duration: '30 Phút',
      color: 'amber'
    }
  ];

  const getEventColor = (type) => {
    const colors = {
      fitting: 'bg-blue-600',
      consultation: 'bg-gray-800',
      pickup: 'bg-amber-600'
    };
    return colors[type] || 'bg-gray-400';
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-200 px-12 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-8">
            <h2 className="text-2xl font-serif text-gray-900">
              {monthNames[currentMonth]} {currentYear}
            </h2>
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-50 rounded">
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-50 rounded">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex gap-6 items-center border-r border-gray-300 pr-8">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">Thử Đồ</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-800"></span>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">Tư Vấn</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">Nhận Hàng</span>
              </div>
            </div>
            <button className="bg-gray-900 text-white px-6 py-3 text-xs uppercase tracking-wider font-bold flex items-center gap-2 hover:bg-gray-800 transition-colors rounded-lg">
              <Plus size={16} />
              Đặt Lịch Hẹn Mới
            </button>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Calendar */}
          <div className="flex-1 overflow-y-auto bg-white">
            <div className="grid grid-cols-7 border-l border-t border-gray-200">
              {['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'].map((day, idx) => (
                <div key={idx} className="bg-gray-50 py-4 border-r border-b border-gray-200 text-center text-xs uppercase tracking-wider font-bold text-gray-400">
                  {day}
                </div>
              ))}

              {calendarDays.map((day, idx) => {
                const isToday = day === currentDate;
                const hasAppointments = day && appointments[day];

                return (
                  <div
                    key={idx}
                    className={`min-h-[120px] border-r border-b border-gray-200 p-3 transition-colors hover:bg-gray-50 ${
                      !day ? 'bg-gray-50/30' : ''
                    } ${isToday ? 'bg-amber-50 border-l-4 border-l-amber-600' : ''}`}
                  >
                    {day && (
                      <>
                        <span className={`text-xs font-bold ${isToday ? 'text-amber-600' : 'text-gray-900'}`}>
                          {day} {isToday && 'Hôm nay'}
                        </span>
                        {hasAppointments && (
                          <div className="mt-2 space-y-1">
                            {appointments[day].map((apt, i) => (
                              <div
                                key={i}
                                className={`${getEventColor(apt.type)} text-white text-[9px] px-2 py-1 uppercase tracking-tight truncate rounded`}
                              >
                                {apt.time} {apt.client}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="w-[400px] flex flex-col bg-gray-50 overflow-y-auto border-l border-gray-200">
            <div className="p-8 border-b border-gray-200">
              <p className="text-xs uppercase tracking-wider text-amber-700 font-bold mb-2">
                Lịch Trình Hôm Nay
              </p>
              <h3 className="text-3xl font-serif italic text-gray-900">
                Thứ Năm, {currentDate} Tháng {currentMonth + 1}
              </h3>
            </div>

            <div className="flex-1 p-8 space-y-10">
              <div className="relative pl-8 border-l-2 border-gray-300 space-y-12">
                {todayAgenda.map((item, index) => (
                  <div key={index} className="relative">
                    <span className={`absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-white border-2 ${
                      item.color === 'blue' ? 'border-blue-600' :
                      item.color === 'gray' ? 'border-gray-800' :
                      'border-amber-600'
                    }`}></span>
                    <div className="flex flex-col gap-4">
                      <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                        {item.time} — {item.type}
                      </span>
                      <div>
                        <h4 className="text-xl font-sans italic text-gray-900">
                          {item.client}
                        </h4>
                        <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                          {item.order} • {item.product}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <span className="bg-white border border-gray-300 px-3 py-1 text-xs uppercase tracking-wider rounded">
                          {item.location}
                        </span>
                        <span className="bg-white border border-gray-300 px-3 py-1 text-xs uppercase tracking-wider rounded">
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-white border-t border-gray-200">
              <button className="w-full border-2 border-gray-900 py-4 text-xs uppercase tracking-wider font-bold hover:bg-gray-900 hover:text-white transition-colors rounded-lg">
                Xem Chi Tiết Ngày
              </button>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="h-12 border-t border-gray-200 flex items-center justify-between px-12 text-xs uppercase tracking-wider text-gray-400 font-bold bg-white shrink-0">
          <span>© 2025 Maison Tailleur - Hệ Thống Quản Lý May Đo</span>
          <div className="flex gap-6">
            <span>Máy Chủ: HN-01</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Kết Nối Ổn Định
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AppointmentsPage;