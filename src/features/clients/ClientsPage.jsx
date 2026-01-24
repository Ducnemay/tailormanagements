import React, { useState } from 'react';
import { Search, UserPlus, MoreVertical, Menu, Filter } from 'lucide-react';
import Sidebar from '@/layouts/Sidebar';

const ClientsPage = () => {
  const [activeTab, setActiveTab] = useState('clients');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const clients = [
    {
      initials: 'NVA',
      name: 'Nguyễn Văn An',
      since: 'Khách hàng từ 2020',
      location: 'Hà Nội, Hoàn Kiếm',
      orders: '02',
      status: 'fitting',
      statusText: 'Đang Thử Đồ',
      lifetime: '68.500.000đ',
      color: 'amber'
    },
    {
      initials: 'TMK',
      name: 'Trần Minh Khoa',
      since: 'Khách hàng từ 2021',
      location: 'TP HCM, Quận 1',
      orders: '01',
      status: 'collection',
      statusText: 'Sẵn Sàng Lấy',
      lifetime: '42.800.000đ',
      color: 'green'
    },
    {
      initials: 'LHN',
      name: 'Lê Hoàng Nam',
      since: 'Khách hàng từ 2018',
      location: 'Đà Nẵng',
      orders: '00',
      status: 'inactive',
      statusText: 'Không Hoạt Động',
      lifetime: '156.200.000đ',
      color: 'gray'
    },
    {
      initials: 'PĐA',
      name: 'Phạm Đức Anh',
      since: 'Khách hàng từ 2023',
      location: 'Hà Nội, Cầu Giấy',
      orders: '01',
      status: 'consultation',
      statusText: 'Tư Vấn',
      lifetime: '12.400.000đ',
      color: 'navy'
    },
    {
      initials: 'VQT',
      name: 'Vũ Quốc Thắng',
      since: 'Khách hàng từ 2019',
      location: 'Hải Phòng',
      orders: '03',
      status: 'fitting',
      statusText: 'Đang Thử Đồ',
      lifetime: '89.600.000đ',
      color: 'amber'
    }
  ];

  const getStatusColor = (status) => {
    const colors = {
      fitting: 'bg-amber-50 text-amber-700 border-amber-200',
      collection: 'bg-green-50 text-green-700 border-green-200',
      inactive: 'bg-gray-50 text-gray-400 border-gray-200',
      consultation: 'bg-blue-50 text-blue-700 border-blue-200'
    };
    return colors[status] || colors.inactive;
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-64 bg-[#1a2332]">
            <Sidebar activeTab={activeTab} onTabChange={(tab) => {
              setActiveTab(tab);
              setIsMobileMenuOpen(false);
            }} />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 md:px-12 py-4 shrink-0">
          <div className="flex flex-col gap-4">
            {/* Top Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                >
                  <Menu size={24} className="text-gray-600" />
                </button>
                <div className="flex flex-col">
                  <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">
                    Danh Mục Khách Hàng
                  </p>
                  <h2 className="text-lg md:text-2xl font-serif text-gray-900">
                    Khách Hàng VIP
                  </h2>
                </div>
              </div>
              
              {/* Desktop Add Button */}
              <button className="hidden md:flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 border-2 border-amber-600 text-amber-600 text-xs tracking-wider uppercase font-bold hover:bg-amber-600 hover:text-white transition-all rounded-lg">
                <UserPlus size={16} />
                <span className="hidden sm:inline">Thêm Khách Hàng Mới</span>
              </button>

              {/* Mobile Add Button */}
              <button className="md:hidden p-2 border-2 border-amber-600 text-amber-600 rounded-lg">
                <UserPlus size={20} />
              </button>
            </div>

            {/* Search Bar - Full Width on Mobile */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Tìm kiếm khách hàng..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg text-sm md:text-xs tracking-wider focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
        </header>

        {/* Filter Bar */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 md:px-12 py-4 shrink-0">
          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-700 mb-3"
          >
            <Filter size={16} />
            Bộ Lọc
          </button>

          {/* Filters - Collapsible on Mobile */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block space-y-4 lg:space-y-0`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex flex-col gap-3">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                  Lọc Theo Trạng Thái:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'all', label: 'Tất Cả' },
                    { value: 'consultation', label: 'Tư Vấn' },
                    { value: 'fitting', label: 'Thử Đồ' },
                    { value: 'collection', label: 'Lấy Hàng' }
                  ].map(filter => (
                    <button
                      key={filter.value}
                      onClick={() => setFilterStatus(filter.value)}
                      className={`px-3 md:px-4 py-1.5 text-xs tracking-widest uppercase border rounded transition-all ${
                        filterStatus === filter.value
                          ? 'bg-gray-900 text-white border-gray-900'
                          : 'border-gray-300 hover:border-amber-600'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                  Sắp Xếp:
                </span>
                <select className="bg-white border border-gray-300 rounded px-3 py-2 text-xs tracking-wider uppercase font-bold text-gray-900 focus:ring-0 cursor-pointer">
                  <option>Hoạt Động Gần Nhất</option>
                  <option>Giá Trị Trọn Đời</option>
                  <option>Theo Bảng Chữ Cái</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto px-4 md:px-12 py-6 md:py-8">
          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4">
            {clients.map((client, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-900 text-amber-600 flex items-center justify-center font-serif text-lg shrink-0 rounded">
                    {client.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-gray-900 truncate">
                      {client.name}
                    </p>
                    <p className="text-xs text-gray-400 uppercase tracking-tight">
                      {client.since}
                    </p>
                    <p className="text-xs uppercase tracking-wider font-bold text-gray-700 mt-1">
                      {client.location}
                    </p>
                  </div>
                  <button className="text-gray-300 hover:text-amber-600">
                    <MoreVertical size={20} />
                  </button>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className={`inline-block px-3 py-1 text-xs uppercase tracking-wider font-bold border rounded ${getStatusColor(client.status)}`}>
                      {client.statusText}
                    </span>
                    <span className="text-sm text-gray-600">
                      {client.orders} đơn
                    </span>
                  </div>
                  <p className="text-base font-serif text-gray-900">
                    {client.lifetime}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="text-xs uppercase tracking-wider text-gray-500 border-b border-gray-200 bg-gray-50">
                  <th className="py-5 px-8 font-bold text-left">Hồ Sơ Khách Hàng</th>
                  <th className="py-5 px-8 font-bold text-left">Địa Điểm</th>
                  <th className="py-5 px-8 font-bold text-center">Đơn Hàng</th>
                  <th className="py-5 px-8 font-bold text-left">Trạng Thái</th>
                  <th className="py-5 px-8 font-bold text-right">Giá Trị Trọn Đời</th>
                  <th className="py-5 px-8"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {clients.map((client, index) => (
                  <tr key={index} className="group hover:bg-gray-50 transition-colors">
                    <td className="py-6 px-8">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gray-900 text-amber-600 flex items-center justify-center font-serif text-lg shrink-0 rounded">
                          {client.initials}
                        </div>
                        <div>
                          <p className="text-base font-medium text-gray-900">
                            {client.name}
                          </p>
                          <p className="text-xs text-gray-400 uppercase tracking-tight">
                            {client.since}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-8">
                      <p className="text-xs uppercase tracking-wider font-bold text-gray-700">
                        {client.location}
                      </p>
                    </td>
                    <td className="py-6 px-8 text-center">
                      <span className="text-sm font-serif text-gray-900">
                        {client.orders}
                      </span>
                    </td>
                    <td className="py-6 px-8">
                      <span className={`inline-block px-3 py-1 text-xs uppercase tracking-wider font-bold border rounded ${getStatusColor(client.status)}`}>
                        {client.statusText}
                      </span>
                    </td>
                    <td className="py-6 px-8 text-right">
                      <p className="text-base font-serif text-gray-900">
                        {client.lifetime}
                      </p>
                    </td>
                    <td className="py-6 px-8 text-right">
                      <button className="text-gray-300 hover:text-amber-600 transition-colors">
                        <MoreVertical size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-wider text-gray-400 text-center sm:text-left">
              Hiển thị 1-5 / 128 khách hàng
            </p>
            <div className="flex gap-2 md:gap-4">
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:border-amber-600 text-gray-400 hover:text-amber-600 transition-all rounded">
                ‹
              </button>
              <div className="flex gap-1">
                <span className="w-8 h-8 flex items-center justify-center bg-gray-900 text-white text-xs font-bold rounded">1</span>
                <span className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:border-amber-600 text-xs cursor-pointer rounded">2</span>
                <span className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:border-amber-600 text-xs cursor-pointer rounded">3</span>
              </div>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:border-amber-600 text-gray-400 hover:text-amber-600 transition-all rounded">
                ›
              </button>
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
              <span className="uppercase tracking-wide">Cập Nhật: 14:30</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="uppercase tracking-wide">Kết Nối An Toàn</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ClientsPage;