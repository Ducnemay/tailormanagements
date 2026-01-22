import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    location: '',
    staffId: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
  };

  return (
    <div className="min-h-screen bg-[#fdfdfb] dark:bg-[#111121] flex flex-col items-center justify-center transition-colors duration-300 py-12 px-6">
      {/* Top Navigation */}
      <div className="fixed top-0 w-full px-8 py-6 flex justify-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-700 rounded flex items-center justify-center">
            <span className="text-white text-2xl font-serif">MT</span>
          </div>
          <h1 className="text-[#111118] dark:text-white text-lg font-bold tracking-[0.2em] uppercase leading-tight">
            Maison de Couture
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full max-w-[440px] px-6 py-12 flex flex-col gap-8">
        {/* Header Text */}
        <div className="text-center">
          <h2 className="text-[#111118] dark:text-white text-2xl font-semibold tracking-tight pb-2">
            Đăng Ký Nhân Viên
          </h2>
          <p className="text-[#636388] dark:text-[#a0a0c0] text-sm font-normal">
            Tích hợp cho các đối tác cửa hàng cao cấp và thợ may nội bộ.
          </p>
        </div>

        {/* Decorative Image */}
        <div 
          className="w-full bg-center bg-no-repeat bg-cover rounded-xl overflow-hidden min-h-[160px] shadow-sm"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800')`
          }}
        />

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-[#111118] dark:text-white text-xs font-semibold uppercase tracking-widest pl-1">
              Họ Và Tên
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-white dark:bg-[#1a1a2e] border border-[#dcdce5] dark:border-[#2a2a4a] rounded-lg h-12 px-4 text-base focus:ring-1 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all placeholder:text-[#b0b0c5]"
              placeholder="VD: Nguyễn Văn An"
              required
            />
          </div>

          {/* Boutique Location */}
          <div className="flex flex-col gap-2">
            <label className="text-[#111118] dark:text-white text-xs font-semibold uppercase tracking-widest pl-1">
              Địa Điểm Cửa Hàng
            </label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full bg-white dark:bg-[#1a1a2e] border border-[#dcdce5] dark:border-[#2a2a4a] rounded-lg h-12 px-4 text-base focus:ring-1 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all text-[#111118] dark:text-white appearance-none cursor-pointer"
              required
            >
              <option value="" disabled>Chọn xưởng của bạn...</option>
              <option value="hanoi-hoankiem">Hà Nội - Hoàn Kiếm</option>
              <option value="hcm-quan1">TP HCM - Quận 1</option>
              <option value="danang-haichau">Đà Nẵng - Hải Châu</option>
              <option value="haiphong-honggai">Hải Phòng - Hồng Gai</option>
              <option value="cantho-ninhkieu">Cần Thơ - Ninh Kiều</option>
            </select>
          </div>

          {/* Staff ID */}
          <div className="flex flex-col gap-2">
            <label className="text-[#111118] dark:text-white text-xs font-semibold uppercase tracking-widest pl-1">
              Mã Nhân Viên
            </label>
            <input
              type="text"
              name="staffId"
              value={formData.staffId}
              onChange={handleChange}
              className="w-full bg-white dark:bg-[#1a1a2e] border border-[#dcdce5] dark:border-[#2a2a4a] rounded-lg h-12 px-4 text-base focus:ring-1 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all placeholder:text-[#b0b0c5]"
              placeholder="VD: VN-9920"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2 pb-2">
            <label className="text-[#111118] dark:text-white text-xs font-semibold uppercase tracking-widest pl-1">
              Tạo Mật Khẩu
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-white dark:bg-[#1a1a2e] border border-[#dcdce5] dark:border-[#2a2a4a] rounded-lg h-12 px-4 text-base focus:ring-1 focus:ring-blue-700 focus:border-blue-700 outline-none transition-all placeholder:text-[#b0b0c5]"
              placeholder="Tối thiểu 8 ký tự"
              required
              minLength={8}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 rounded-lg shadow-lg shadow-blue-700/20 transition-all active:scale-[0.98] mt-2"
          >
            Tạo Tài Khoản
          </button>
        </form>

        {/* Footer */}
        <div className="flex flex-col items-center gap-4 text-sm">
          <p className="text-[#636388] dark:text-[#a0a0c0]">
            Đã có tài khoản? {' '}
            <a 
              href="#"
              className="text-blue-700 dark:text-blue-500 font-semibold hover:underline decoration-2 underline-offset-4"
            >
              Quay lại đăng nhập
            </a>
          </p>

          <div className="flex items-center gap-1 text-[10px] text-[#b0b0c5] uppercase tracking-widest mt-8">
            <ShieldCheck size={12} />
            Cổng Doanh Nghiệp An Toàn
          </div>
        </div>
      </main>

      {/* Location Info */}
      <div className="hidden lg:block fixed bottom-8 right-8">
        <div className="flex flex-col items-end gap-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#636388] dark:text-white opacity-50">
            Trụ Sở Chính
          </span>
          <span className="text-xs text-[#636388] dark:text-[#a0a0c0]">
            Phố Tràng Tiền, Hoàn Kiếm, Hà Nội
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;