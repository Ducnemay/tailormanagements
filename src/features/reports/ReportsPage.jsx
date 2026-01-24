import React, { useState } from 'react';
import { Download, ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import Sidebar from '@/layouts/Sidebar';

const ReportsPage = () => {
  const [activeTab, setActiveTab] = useState('reports');
  const [selectedMonth, setSelectedMonth] = useState('october');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const productMix = [
    { name: 'Vest & Suit', percentage: 42 },
    { name: 'Măng Tô', percentage: 31 },
    { name: 'Sơ Mi & Gilet', percentage: 18 },
    { name: 'Phụ Kiện', percentage: 9 }
  ];

  const acquisitionChannels = [
    { name: 'Truyền Miệng', percentage: 52, color: 'bg-gray-900' },
    { name: 'Mạng Xã Hội', percentage: 24, color: 'bg-amber-600' },
    { name: 'Đối Tác', percentage: 15, color: 'bg-gray-300' },
    { name: 'Vãng Lai', percentage: 9, color: 'bg-gray-100' }
  ];

  const geographyData = [
    { region: 'Hà Nội', volume: '142', avgSpend: '25.8M' },
    { region: 'Quốc Tế', volume: '84', avgSpend: '35.5M' },
    { region: 'TP HCM', volume: '38', avgSpend: '18.9M' }
  ];

  const weeklyRevenue = [
    { week: 'T1', height: 60 },
    { week: 'T2', height: 85 },
    { week: 'T3', height: 70 },
    { week: 'T4', height: 95 },
    { week: 'T5', height: 40 },
    { week: 'T6', height: 75 }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar - SỬA: Fixed với h-screen và overflow-y-auto */}
      <div className="hidden lg:block fixed left-0 top-0 h-screen w-64 z-40 overflow-y-auto">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-64 h-screen overflow-y-auto">
            <Sidebar activeTab={activeTab} onTabChange={(tab) => {
              setActiveTab(tab);
              setIsMobileMenuOpen(false);
            }} />
          </div>
        </div>
      )}

      {/* Main Content - SỬA: Thêm margin-left cho desktop */}
      <div className="flex-1 flex flex-col overflow-hidden w-full lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 md:px-12 py-4 shrink-0">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                >
                  <Menu size={24} className="text-gray-600" />
                </button>
                <div className="flex flex-col">
                  <h2 className="text-lg md:text-xl font-sans text-gray-900 italic">
                    Báo Cáo Hiệu Suất
                  </h2>
                  <p className="text-[9px] uppercase tracking-wider text-gray-400 font-bold">
                    Phân Tích Theo Quý
                  </p>
                </div>
              </div>

              {/* Desktop Export Button */}
              <button className="hidden md:flex items-center gap-2 text-xs tracking-wider uppercase font-bold text-amber-600 hover:text-amber-700 transition-colors">
                <Download size={18} />
                Xuất PDF
              </button>
            </div>

            {/* Month Tabs */}
            <div className="flex items-center justify-between gap-4 overflow-x-auto">
              <div className="flex items-center gap-3 md:gap-4 text-xs tracking-wider font-bold uppercase text-gray-400">
                {['october', 'november', 'december'].map((month, idx) => (
                  <button 
                    key={month}
                    onClick={() => setSelectedMonth(month)}
                    className={`pb-1 transition-colors whitespace-nowrap ${
                      selectedMonth === month 
                        ? 'border-b-2 border-amber-600 text-gray-900' 
                        : 'hover:text-gray-900'
                    }`}
                  >
                    Tháng {idx + 10}
                  </button>
                ))}
              </div>

              {/* Mobile Export Button */}
              <button className="md:hidden p-2 text-amber-600">
                <Download size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-12 overflow-y-auto space-y-8 md:space-y-12">
          {/* Stats Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white border border-gray-200 p-4 md:p-8 flex flex-col gap-1 rounded-lg shadow-sm">
              <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-400 font-bold">
                Tổng Doanh Thu
              </p>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 md:gap-2">
                <span className="text-2xl md:text-3xl font-serif text-gray-900">1.98Tỷ</span>
                <span className="text-xs text-green-600 font-sans font-bold">+14.2%</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-4 md:p-8 flex flex-col gap-1 rounded-lg shadow-sm">
              <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-400 font-bold">
                Giá Trị Đơn TB
              </p>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 md:gap-2">
                <span className="text-2xl md:text-3xl font-serif text-gray-900">20.4M</span>
                <span className="text-xs text-gray-400 font-sans italic">Cao Cấp</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-4 md:p-8 flex flex-col gap-1 rounded-lg shadow-sm">
              <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-400 font-bold">
                Tỷ Lệ Chuyển Đổi
              </p>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 md:gap-2">
                <span className="text-2xl md:text-3xl font-serif text-gray-900">28.4%</span>
                <span className="text-xs text-green-600 font-sans font-bold">+2.1%</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-4 md:p-8 flex flex-col gap-1 rounded-lg shadow-sm">
              <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-400 font-bold">
                Giữ Chân KH
              </p>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 md:gap-2">
                <span className="text-2xl md:text-3xl font-serif text-gray-900">64%</span>
                <span className="text-xs text-amber-600 font-sans font-bold">Cao</span>
              </div>
            </div>
          </section>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Revenue Trends */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 border-b border-gray-300 pb-4">
                <h3 className="text-lg md:text-xl font-serif text-gray-900">Xu Hướng Doanh Thu</h3>
                <div className="flex gap-3 md:gap-4 text-[9px] uppercase tracking-widest font-bold text-gray-400">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-amber-600"></span>
                    May Đo
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-gray-300"></span>
                    Phụ Kiện
                  </span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-4 md:p-8 rounded-lg shadow-sm">
                <div className="flex items-end justify-between h-32 md:h-48 gap-2 md:gap-4 px-2 md:px-4">
                  {weeklyRevenue.map((item, index) => (
                    <div key={index} className="flex flex-col items-center flex-1 gap-1 md:gap-2">
                      <div 
                        className="w-full bg-amber-100 hover:bg-amber-200 transition-colors rounded-t"
                        style={{ height: `${item.height}%` }}
                      ></div>
                      <span className="text-[8px] md:text-[9px] uppercase tracking-tight text-gray-400 font-bold">
                        {item.week}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 md:pt-6 border-t border-gray-200 mt-4 md:mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <p className="text-[10px] md:text-xs text-gray-400 italic">
                    Dữ liệu tổng hợp của cửa hàng
                  </p>
                  <div className="flex gap-2">
                    <button className="w-6 h-6 border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors rounded">
                      <ChevronLeft size={14} />
                    </button>
                    <button className="w-6 h-6 border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors rounded">
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Mix */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex justify-between items-end border-b border-gray-300 pb-4">
                <h3 className="text-lg md:text-xl text-gray-900">Cơ Cấu SP</h3>
              </div>

              <div className="bg-white border border-gray-200 p-4 md:p-8 space-y-6 md:space-y-8 rounded-lg shadow-sm">
                {productMix.map((item, index) => (
                  <div key={index} className="space-y-3 md:space-y-4">
                    <div className="flex justify-between items-end">
                      <p className="text-xs md:text-sm font-serif italic text-gray-900">{item.name}</p>
                      <p className="text-xs font-bold text-gray-900">{item.percentage}%</p>
                    </div>
                    <div className="w-full h-[2px] bg-gray-200 rounded-full">
                      <div 
                        className="h-full bg-amber-600 rounded-full transition-all"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 pb-8 md:pb-12">
            {/* Acquisition Channels */}
            <div className="space-y-4 md:space-y-6">
              <div className="border-b border-gray-300 pb-4">
                <h3 className="text-lg md:text-xl font-serif text-gray-900">Kênh Thu Hút</h3>
              </div>

              <div className="bg-white border border-gray-200 p-4 md:p-8 rounded-lg shadow-sm">
                <div className="flex flex-col gap-4 md:gap-6">
                  {acquisitionChannels.map((channel, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2 md:gap-3">
                        <span className={`w-3 h-3 ${channel.color} rounded`}></span>
                        <span className="text-xs uppercase tracking-wider font-bold text-gray-700">
                          {channel.name}
                        </span>
                      </div>
                      <span className="text-xs font-serif text-gray-900">{channel.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Client Geography */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 border-b border-gray-300 pb-4">
                <h3 className="text-lg md:text-xl font-sans text-gray-900">Phân Bố Địa Lý</h3>
                <a href="#" className="text-xs tracking-wider uppercase font-bold text-amber-600 hover:text-amber-700">
                  Xem Bản Đồ
                </a>
              </div>

              {/* Mobile Card View */}
              <div className="lg:hidden space-y-3">
                {geographyData.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-sm font-sans italic text-gray-900">{item.region}</p>
                      <p className="font-serif text-gray-900">{item.avgSpend}đ</p>
                    </div>
                    <p className="text-xs text-gray-600">{item.volume} Đơn Hàng</p>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-xs uppercase tracking-wider text-gray-400 border-b border-gray-200">
                      <th className="py-4 px-6 font-bold">Khu Vực</th>
                      <th className="py-4 px-6 font-bold">Khối Lượng</th>
                      <th className="py-4 px-6 font-bold text-right">Chi Tiêu TB</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {geographyData.map((item, index) => (
                      <tr key={index} className="group hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 text-sm font-sans italic text-gray-900">
                          {item.region}
                        </td>
                        <td className="py-4 px-6 text-xs text-gray-600">
                          {item.volume} Đơn
                        </td>
                        <td className="py-4 px-6 text-right font-serif text-gray-900">
                          {item.avgSpend}đ
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white px-4 md:px-12 py-4 shrink-0">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] md:text-xs text-gray-500">
            <span className="uppercase tracking-wide text-center md:text-left">
              © 2025 Maison Tailleur
            </span>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <span className="uppercase tracking-wide">Cập Nhật: 08:42</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="uppercase tracking-wide">Phân Tích Thời Gian Thực</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ReportsPage;