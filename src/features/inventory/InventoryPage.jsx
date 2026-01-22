import React, { useState } from 'react';
import { Search, Filter, Plus, Bell } from 'lucide-react';
import Sidebar from '@/layouts/Sidebar';

const InventoryPage = () => {
  const [activeTab, setActiveTab] = useState('inventory');

  const fabrics = [
    {
      image: 'https://res.cloudinary.com/dvq9u981t/image/upload/v1769075940/Image/Dinosaur/p5xu90w3mM2mpFOvezeZw6XI5ii9cwEDuKujJJvK.jpg',
      name: 'Vải Len Super 150 Xám Than',
      mill: 'Xưởng: Vitale Barberis Canonico',
      origin: 'Biella, Ý',
      stock: '42.5 Mét',
      stockStatus: 'normal',
      uses: ['Vest', 'Quần Tây']
    },
    {
      image: 'https://res.cloudinary.com/dvq9u981t/image/upload/v1769076006/Image/Dinosaur/16274c800a793599f2a5258c0cd5e0b1.jpg',
      name: 'Cashmere Navy Đêm',
      mill: 'Xưởng: Loro Piana',
      origin: 'Quarona, Ý',
      stock: '8.0 Mét',
      stockStatus: 'low',
      uses: ['Măng Tô']
    },
    {
      image: 'https://res.cloudinary.com/dvq9u981t/image/upload/v1769076069/Image/Dinosaur/images.jpg',
      name: 'Lụa Habotai Ngà',
      mill: 'Xưởng: Pongees',
      origin: 'Lyon, Pháp',
      stock: '115.0 Mét',
      stockStatus: 'normal',
      uses: ['Lót', 'Sơ Mi']
    },
    {
      image: 'https://res.cloudinary.com/dvq9u981t/image/upload/v1769075687/preview.jpg',
      name: 'Len Saxony Glen Plaid',
      mill: 'Xưởng: Holland & Sherry',
      origin: 'Peebles, Scotland',
      stock: '28.5 Mét',
      stockStatus: 'normal',
      uses: ['Vest', 'Gilet']
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-200 px-12 flex items-center justify-between shrink-0">
          <div className="flex gap-16">
            <div className="flex flex-col">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">
                Tổng Giá Trị Kho
              </p>
              <p className="text-xl font-serif text-gray-900">4.028.520.000đ</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">
                Nhập Hàng Tháng Này
              </p>
              <p className="text-xl font-serif text-gray-900">
                115.200.000đ 
                <span className="text-xs text-red-600 font-sans font-bold ml-2">-4%</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 border-r border-gray-300 pr-8">
              <Filter size={18} className="text-gray-400" />
              <select className="border-none text-xs tracking-wider focus:ring-0 bg-transparent font-bold uppercase cursor-pointer text-gray-900">
                <option>Tất Cả Vật Liệu</option>
                <option>Len Super 150s</option>
                <option>Lụa & Satin</option>
                <option>Cashmere Nguyên Chất</option>
              </select>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="TÌM KIẾM VẢI..."
                className="pl-9 pr-4 py-2 w-48 border border-gray-300 rounded-lg text-xs tracking-wider focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <Bell size={20} />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 p-12 overflow-y-auto">
          <div className="flex justify-between items-end border-b border-gray-300 pb-6 mb-10">
            <div className="space-y-1">
              <h2 className="text-3xl font-serif text-gray-900">Kho Vải May Đo</h2>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                Bộ Sưu Tập Được Tuyển Chọn Từ Các Xưởng Châu Âu
              </p>
            </div>
            <button className="bg-gray-900 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 flex items-center gap-2 rounded-lg hover:bg-gray-800 transition-colors">
              <Plus size={16} />
              Lô Hàng Mới
            </button>
          </div>

          {/* Fabric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {fabrics.map((fabric, index) => (
              <div key={index} className="bg-white border border-gray-200 group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
                  <img
                    src={fabric.image}
                    alt={fabric.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {fabric.stockStatus === 'low' && (
                    <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 border border-amber-600 rounded">
                      <span className="text-[8px] uppercase tracking-wider font-bold text-orange-600">
                        Sắp Hết Hàng
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <span className="text-[9px] text-white/70 uppercase tracking-widest font-bold">
                      {fabric.mill}
                    </span>
                    <p className="text-white font-serif text-lg">{fabric.name}</p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">
                        Nguồn Gốc
                      </span>
                      <span className="text-xs italic font-serif text-gray-900">
                        {fabric.origin}
                      </span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-[9px] text-gray-400 uppercase font-bold tracking-widest">
                        Tồn Kho
                      </span>
                      <span className={`text-sm font-serif ${
                        fabric.stockStatus === 'low' 
                          ? 'text-orange-600 font-bold' 
                          : 'text-gray-900'
                      }`}>
                        {fabric.stock}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200">
                    {fabric.uses.map((use, i) => (
                      <span
                        key={i}
                        className="text-[9px] uppercase tracking-widest border border-gray-300 px-2 py-1 bg-gray-50 rounded"
                      >
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <section className="mt-16 grid grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-8 flex flex-col gap-1 rounded-lg shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                Cảnh Báo Sắp Hết
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif text-orange-600">04</span>
                <span className="text-xs text-gray-400 font-sans uppercase">
                  Cần Nhập Thêm
                </span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 flex flex-col gap-1 rounded-lg shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                Hàng Đang Về
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif text-gray-900">12</span>
                <span className="text-xs text-amber-600 font-sans uppercase font-bold italic">
                  Đang Vận Chuyển
                </span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 flex flex-col gap-1 rounded-lg shadow-sm">
              <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                Đã Đặt Trước
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif text-gray-900">184</span>
                <span className="text-xs text-green-600 font-sans uppercase font-bold">
                  Mét Đã Phân Bổ
                </span>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="h-12 border-t border-gray-200 flex items-center justify-between px-12 text-xs uppercase tracking-wider text-gray-400 font-bold shrink-0 bg-white">
          <span>© 2025 Maison Tailleur - Hệ Thống Quản Lý May Đo</span>
          <div className="flex gap-6">
            <span>Nút Kho: Hậu Cần-Miền Nam</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Đã Đồng Bộ
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default InventoryPage;