import React, { useState } from 'react';
import { Download, ChevronLeft, ChevronRight } from 'lucide-react';
import Sidebar from '@/layouts/Sidebar';

const ReportsPage = () => {
  const [activeTab, setActiveTab] = useState('reports');
  const [selectedMonth, setSelectedMonth] = useState('october');

  const productMix = [
    { name: 'Vest & Suit', percentage: 42 },
    { name: 'Măng Tô (Áo Khoác)', percentage: 31 },
    { name: 'Sơ Mi & Gilet', percentage: 18 },
    { name: 'Phụ Kiện', percentage: 9 }
  ];

  const acquisitionChannels = [
    { name: 'Truyền Miệng', percentage: 52, color: 'bg-gray-900' },
    { name: 'Mạng Xã Hội', percentage: 24, color: 'bg-amber-600' },
    { name: 'Đối Tác Khách Sạn', percentage: 15, color: 'bg-gray-300' },
    { name: 'Khách Vãng Lai', percentage: 9, color: 'bg-gray-100' }
  ];

  const geographyData = [
    { region: 'Hà Nội, Khu Vực Trung Tâm', volume: '142 Đơn Hàng', avgSpend: '25.800.000đ' },
    { region: 'Quốc Tế (USA/UK)', volume: '84 Đơn Hàng', avgSpend: '35.500.000đ' },
    { region: 'TP HCM & Miền Nam', volume: '38 Đơn Hàng', avgSpend: '18.900.000đ' }
  ];

  const weeklyRevenue = [
    { week: 'Tuần 1', height: 60 },
    { week: 'Tuần 2', height: 85 },
    { week: 'Tuần 3', height: 70 },
    { week: 'Tuần 4', height: 95 },
    { week: 'Tuần 5', height: 40 },
    { week: 'Tuần 6', height: 75 }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-200 px-12 flex items-center justify-between shrink-0">
          <div className="flex flex-col">
            <h2 className="text-xl font-serif text-gray-900 italic tracking-tight">
              Báo Cáo Hiệu Suất Kinh Doanh
            </h2>
            <p className="text-[9px] uppercase tracking-wider text-gray-400 font-bold">
              Phân Tích Hiệu Suất Theo Quý
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4 text-xs tracking-wider font-bold uppercase text-gray-400">
              <button 
                onClick={() => setSelectedMonth('october')}
                className={`pb-1 transition-colors ${
                  selectedMonth === 'october' 
                    ? 'border-b-2 border-amber-600 text-gray-900' 
                    : 'hover:text-gray-900'
                }`}
              >
                Tháng 10
              </button>
              <button 
                onClick={() => setSelectedMonth('november')}
                className={`pb-1 transition-colors ${
                  selectedMonth === 'november' 
                    ? 'border-b-2 border-amber-600 text-gray-900' 
                    : 'hover:text-gray-900'
                }`}
              >
                Tháng 11
              </button>
              <button 
                onClick={() => setSelectedMonth('december')}
                className={`pb-1 transition-colors ${
                  selectedMonth === 'december' 
                    ? 'border-b-2 border-amber-600 text-gray-900' 
                    : 'hover:text-gray-900'
                }`}
              >
                Tháng 12
              </button>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            <button className="flex items-center gap-2 text-xs tracking-wider uppercase font-bold text-amber-600 hover:text-amber-700 transition-colors">
              <Download size={18} />
              Xuất PDF
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 p-12 overflow-y-auto space-y-12">
          {/* Stats Cards */}
          <section className="grid grid-cols-4 gap-8">
            <div className="bg-white border border-gray-200 p-8 flex flex-col gap-1 relative overflow-hidden rounded-lg shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                Tổng Doanh Thu
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif text-gray-900">1.982.080.000đ</span>
                <span className="text-xs text-green-600 font-sans font-bold">+14.2%</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 flex flex-col gap-1 rounded-lg shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                Giá Trị Đơn TB
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif text-gray-900">20.400.000đ</span>
                <span className="text-xs text-gray-400 font-sans italic">Hạng Cao Cấp</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 flex flex-col gap-1 rounded-lg shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                Tỷ Lệ Chuyển Đổi
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif text-gray-900">28.4%</span>
                <span className="text-xs text-green-600 font-sans font-bold">+2.1%</span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 flex flex-col gap-1 rounded-lg shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                Giữ Chân Khách Hàng
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif text-gray-900">64%</span>
                <span className="text-xs text-amber-600 font-sans font-bold">Trung Thành Cao</span>
              </div>
            </div>
          </section>

          {/* Charts Grid */}
          <div className="grid grid-cols-3 gap-12">
            {/* Revenue Trends - 2 columns */}
            <div className="col-span-2 space-y-6">
              <div className="flex justify-between items-end border-b border-gray-300 pb-4">
                <h3 className="text-xl font-serif text-gray-900">Xu Hướng Doanh Thu</h3>
                <div className="flex gap-4 text-[9px] uppercase tracking-widest font-bold text-gray-400">
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

              <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
                <div className="flex items-end justify-between h-48 gap-4 px-4">
                  {weeklyRevenue.map((item, index) => (
                    <div key={index} className="flex flex-col items-center flex-1 gap-2">
                      <div 
                        className="w-full bg-amber-100 hover:bg-amber-200 transition-colors rounded-t"
                        style={{ height: `${item.height}%` }}
                      ></div>
                      <span className="text-[9px] uppercase tracking-tight text-gray-400 font-bold">
                        {item.week}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-gray-200 mt-6 flex justify-between items-center">
                  <p className="text-xs text-gray-400 italic">
                    Dữ liệu phản ánh hiệu suất tổng hợp của cửa hàng.
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

            {/* Product Mix - 1 column */}
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-gray-300 pb-4">
                <h3 className="text-xl  text-gray-900">Cơ Cấu Sản Phẩm</h3>
                <span className="text-xs tracking-wider uppercase font-bold text-gray-400">
                  Danh Mục Hàng Đầu
                </span>
              </div>

              <div className="bg-white border border-gray-200 p-8 space-y-8 rounded-lg shadow-sm">
                {productMix.map((item, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex justify-between items-end">
                      <p className="text-xs font-serif italic text-gray-900">{item.name}</p>
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
          <div className="grid grid-cols-3 gap-12 pb-12">
            {/* Acquisition Channels */}
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-gray-300 pb-4">
                <h3 className="text-xl font-serif text-gray-900">Kênh Thu Hút</h3>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
                <div className="flex flex-col gap-6">
                  {acquisitionChannels.map((channel, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
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

            {/* Client Geography - 2 columns */}
            <div className="col-span-2 space-y-6">
              <div className="flex justify-between items-end border-b border-gray-300 pb-4">
                <h3 className="text-xl font-serif text-gray-900">Phân Bố Địa Lý</h3>
                <a href="#" className="text-xs tracking-wider uppercase font-bold text-amber-600 hover:text-amber-700">
                  Xem Bản Đồ Chi Tiết
                </a>
              </div>

              <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
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
                        <td className="py-4 px-6 text-sm font-serif italic text-gray-900">
                          {item.region}
                        </td>
                        <td className="py-4 px-6 text-xs text-gray-600">
                          {item.volume}
                        </td>
                        <td className="py-4 px-6 text-right font-serif text-gray-900">
                          {item.avgSpend}
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
        <footer className="h-12 border-t border-gray-200 flex items-center justify-between px-12 text-xs uppercase tracking-wider text-gray-400 font-bold bg-white shrink-0">
          <span>© 2025 Maison Tailleur - Hệ Thống Quản Lý May Đo</span>
          <div className="flex gap-6">
            <span>Cập Nhật Hệ Thống: 08:42 GMT+7</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Phân Tích Thời Gian Thực
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ReportsPage;