import React, { useState } from 'react';
import { ArrowRight, MapPin, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#0a0a0a] text-white/80 pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
      
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold font-serif text-white mb-6 tracking-widest">
              DUAN TAILOR
            </h2>
            <p className="text-[10px] uppercase tracking-widest leading-loose">
              Trụ sở chính<br/>
              Quận 1, TP. Hồ Chí Minh<br/>
              Việt Nam
            </p>
          </div>

         
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-6">
              Hệ thống Cửa hàng
            </h4>
            <ul className="text-xs space-y-4">
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors">
                  Atelier Hồ Chí Minh
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors">
                  Atelier Hà Nội
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors">
                  Văn phòng đại diện Paris
                </a>
              </li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-6">
              Dịch vụ
            </h4>
            <ul className="text-xs space-y-4">
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors">
                  May đo Bespoke
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors">
                  May đo MTM
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors">
                  Thử đồ tại gia
                </a>
              </li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-6">
              Đăng ký nhận tin
            </h4>
            <p className="text-[10px] mb-4">
              Nhận thông báo về các buổi Trunk Show và bộ sưu tập mới.
            </p>
            <form onSubmit={handleSubscribe} className="flex border-b border-white/20">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-none text-xs w-full py-2 focus:ring-0 placeholder-white/30 text-white"
                placeholder="Địa chỉ Email"
                required
              />
              <button type="submit" className="text-amber-600 hover:text-amber-500 transition-colors">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10">
          <p className="text-[9px] uppercase tracking-widest mb-4 md:mb-0">
            © 2025 DUAN TAILOR. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-8">
            <a 
              href="#" 
              className="text-[9px] uppercase tracking-widest hover:text-amber-600 transition-colors"
            >
              Bảo mật
            </a>
            <a 
              href="#" 
              className="text-[9px] uppercase tracking-widest hover:text-amber-600 transition-colors"
            >
              Điều khoản
            </a>
            <a 
              href="#" 
              className="text-[9px] uppercase tracking-widest hover:text-amber-600 transition-colors flex items-center gap-1"
            >
              <Instagram size={12} />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;