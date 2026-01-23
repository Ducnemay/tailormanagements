import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
 const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
     navigate('/dashboard')
    console.log('Login attempt:', { email, password, rememberMe });
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#FAF9F6]">
      {/* Left Side - Hero Image */}
      <div className="hidden md:flex md:w-1/2 lg:w-3/5 h-full relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url('https://res.cloudinary.com/dvq9u981t/image/upload/v1769161887/Image/Dinosaur/IMG_5452.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        <div className="absolute bottom-16 left-16 text-white max-w-lg">
          <div className="h-1 w-12 bg-amber-600 mb-6" />
          <h1 className="text-6xl font-serif font-light italic leading-tight tracking-tight mb-4">
            Nghệ Thuật May Đo
          </h1>
          <p className="text-xl font-light opacity-80 font-sans tracking-wide">
            Cổng thông tin dành cho những nghệ nhân tinh hoa và di sản thợ may cao cấp.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 lg:w-2/5 h-full bg-[#FAF9F6] flex flex-col justify-center px-10 sm:px-16 lg:px-24 overflow-y-auto">
        <div className="max-w-md w-full mx-auto">
          {/* Header */}
          <div className="mb-14 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
             <div className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center ring-1 ring-gray-700">
  <img
    src="https://res.cloudinary.com/dvq9u981t/image/upload/v1769161593/Image/Dinosaur/1d0b27fbfdb173ef2aa0.jpg"
    alt="Duan Tailor Logo"
    className="w-8 h-8 object-contain"
  />
</div>
              <div className="flex flex-col">
                <span className="text-[10px] tracking-[0.4em] uppercase font-medium text-gray-900 opacity-60">
                 Duan Tailor
                </span>
                <span className="text-xs tracking-[0.2em] uppercase font-bold text-gray-900">
                 Thành Phố Hồ Chí Minh
                </span>
              </div>
            </div>

            <h2 className="text-5xl font-medium text-gray-900 mb-3 font-serif">
              Chào Mừng
            </h2>
            <p className="text-gray-600 font-sans text-sm tracking-wide">
              Vui lòng xác thực với thông tin đăng nhập bảo mật của bạn.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-700 ml-1">
                Địa Chỉ Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-0 border-b border-gray-300 bg-transparent h-12 px-1 text-lg font-serif transition-all duration-300 focus:border-gray-900 focus:outline-none focus:ring-0 placeholder:text-gray-300"
                placeholder="tailor@maison.vn"
                required
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-700 ml-1">
                Mật Khẩu
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-0 border-b border-gray-300 bg-transparent h-12 px-1 text-lg font-serif transition-all duration-300 focus:border-gray-900 focus:outline-none focus:ring-0 placeholder:text-gray-300"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Remember Me & Recovery */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 border-gray-300 bg-transparent text-gray-900 focus:ring-0 focus:ring-offset-0 transition-colors rounded"
                />
                <span className="text-xs font-sans uppercase tracking-widest text-gray-600 group-hover:text-gray-900 transition-colors">
                  Ghi Nhớ Phiên
                </span>
              </label>
              <a
                href="#"
                className="text-xs font-sans uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900"
              >
                Khôi Phục
              </a>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-black text-white h-14 font-sans font-semibold text-xs uppercase tracking-[0.3em] transition-all duration-500 flex items-center justify-center gap-3 group rounded"
              >
                <span>Đăng Nhập</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-16 pt-10 border-t border-gray-900/5 text-center md:text-left">
            <p className="text-xs font-sans text-gray-400 mb-6 tracking-wide">
              Hệ thống hạn chế. Các nỗ lực truy cập trái phép đều được theo dõi.
            </p>
            <button className="px-8 py-3 border border-gray-900/20 rounded text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
              Yêu Cầu Quyền Truy Cập Nhân Viên
            </button>
          </div>

          {/* Copyright */}
          <div className="mt-16 flex justify-between items-center opacity-30 text-[9px] uppercase tracking-[0.3em] font-sans font-bold">
            <span>© 2025 Atelier de Couture</span>
            <div className="flex gap-6">
              <span className="cursor-pointer hover:opacity-100 transition-opacity">
                Riêng Tư
              </span>
              <span className="cursor-pointer hover:opacity-100 transition-opacity">
                Bảo Mật
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;