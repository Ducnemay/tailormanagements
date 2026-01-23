import React, { useState } from 'react';
import Footer from '@/layouts/Footer';
import { MapPin, Mail,User, CheckCircle, Clock, Ruler } from 'lucide-react'

const HomePage = () => {
  const [formData, setFormData] = useState({
    title: 'Ông (Mr)',
    fullName: '',
    email: '',
    phone: '',
    requirements: ''
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      title: 'Ông (Mr)',
      fullName: '',
      email: '',
      phone: '',
      requirements: ''
    });
  };

  return (
    <div className="bg-[#fdfbf7]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-gray-200 px-4 md:px-12 py-4">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-12">
         <div className="flex items-center gap-4">
  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center ring-1 ring-gray-200 shadow-sm">
    <img
      src="https://res.cloudinary.com/dvq9u981t/image/upload/v1769161593/Image/Dinosaur/1d0b27fbfdb173ef2aa0.jpg"
      alt="Duan Tailor Logo"
      className="w-14 h-14 object-contain"
    />
  </div>

  <h1 className="text-gray-900 text-2xl font-semibold tracking-[0.25em] font-serif">
    DUAN TAILOR
  </h1>
</div>

            <nav className="hidden lg:flex gap-8">
              <a href="#about" className="text-gray-900 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-amber-700 transition-colors">
                Về DUAN
              </a>
              <a href="#services" className="text-gray-900 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-amber-700 transition-colors">
                Dịch Vụ
              </a>
              <a href="#founder" className="text-gray-900 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-amber-700 transition-colors">
                Nhà Sáng Lập
              </a>
              <a href="#appointment" className="text-gray-900 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-amber-700 transition-colors">
                Đặt Lịch
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <a href="/login" className="text-[10px] font-medium uppercase tracking-widest text-gray-400 hover:text-amber-700 transition-colors border-b border-transparent hover:border-amber-700 pb-0.5">
              Đăng nhập Admin
            </a>
            <a href="#appointment" className="hidden sm:flex min-w-[160px] cursor-pointer items-center justify-center border border-gray-900 h-10 px-6 hover:bg-gray-900 hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest">
              Đặt Lịch Hẹn
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img
              src="https://res.cloudinary.com/dvq9u981t/image/upload/v1769161887/Image/Dinosaur/IMG_5452.jpg"
              alt="Nghệ nhân may đo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20 text-center px-4 max-w-5xl">
            <p className="text-white text-[10px] uppercase tracking-[0.5em] mb-6 font-medium">
              Di Sản Từ 1990 • Sài Gòn • Hà Nội
            </p>
            <h2 className="text-white text-5xl md:text-8xl font-light leading-tight mb-8 font-serif italic">
              Nghệ Thuật May Đo Di Sản
            </h2>
            <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              Kết hợp giữa kỹ thuật thủ công truyền thống và tư duy hiện đại, 
              mang đến những bộ phục trang hoàn mỹ cho quý ông thượng lưu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#appointment" className="bg-amber-200 text-black px-10 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-amber-700 transition-all w-full sm:w-auto">
                Đặt Lịch Hẹn Tư Vấn
              </a>
              <a href="#services" className="bg-transparent text-white border border-white px-10 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all w-full sm:w-auto">
                Khám Phá Dịch Vụ
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 md:py-40 px-6 bg-[#f5f5f0]" id="about">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-amber-700 text-[10px] font-bold uppercase tracking-[0.4em] block mb-6">
                Câu Chuyện Thương Hiệu
              </span>
              <h2 className="text-gray-900 text-4xl md:text-5xl font-light leading-tight mb-8 font-sans italic">
                Về DUAN - Nghệ Thuật May Đo
              </h2>
              <div className="w-16 h-px bg-amber-700 mb-10"></div>
              <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
                <p>
                  Khởi nguồn từ thương hiệu <strong className="text-gray-900">Đài Các Veston (1990)</strong>, 
                  chúng tôi đã dành hơn ba thập kỷ để gìn giữ và phát triển tinh hoa của nghệ thuật may đo Việt Nam.
                </p>
                <p>
                  Quá trình chuyển mình thành <strong className="text-gray-900">DUAN Tailor</strong> không chỉ là 
                  sự thay đổi về danh xưng, mà là một cam kết về sự đổi mới dựa trên nền tảng di sản vững chắc. 
                  Chúng tôi tin rằng mỗi bộ Suit không chỉ là trang phục, mà là biểu tượng của phong thái và đẳng cấp cá nhân.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dvq9u981t/image/upload/v1769155976/Image/Dinosaur/duan-journal-duan-tailor.jpg"
                alt="Craftsmanship"
                className="w-full h-auto shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl hidden md:block">
                <p className="text-3xl font-serif italic text-amber-700">Est. 1990</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-[#fdfbf7]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-amber-700 text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">
                Giá Trị Cốt Lõi
              </span>
              <h2 className="text-gray-900 text-4xl md:text-5xl font-light font-sans">
                Điều Gì Làm DUAN Khác Biệt?
              </h2>
            </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {[
    {
      icon: User,
      title: 'May đo cá nhân hóa tỉ mỉ',
      desc: 'Mỗi sản phẩm được thiết kế dựa trên bản rập độc nhất, phù hợp hoàn hảo với chỉ số và vóc dáng riêng biệt.'
    },
    {
      icon: CheckCircle,
      title: 'Bảo hành trọn đời',
      desc: 'Chúng tôi đồng hành cùng quý khách qua năm tháng với dịch vụ chỉnh sửa và bảo dưỡng trang phục miễn phí.'
    },
    {
      icon: Clock,
      title: 'May gấp trong 48 giờ',
      desc: 'Dành cho những sự kiện quan trọng đột xuất, DUAN cam kết hoàn thiện bộ phục trang chuẩn mực trong thời gian ngắn nhất.'
    },
    {
      icon: Ruler,
      title: 'Lên form chuẩn xác',
      desc: 'Kỹ thuật cắt rập đỉnh cao đảm bảo áo ôm khít nhưng vẫn mang lại sự cử động thoải mái nhất.'
    }
  ].map((item, idx) => {
    const Icon = item.icon

    return (
      <div
        key={idx}
        className="
          p-10 
          bg-[#faf9f6] 
          border border-stone-200 
          text-center 
          rounded-2xl
          hover:shadow-lg 
          transition-all
        "
      >
        {/* ICON */}
        <div className="mb-6 flex justify-center">
          <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center">
            <Icon className="w-7 h-7 text-amber-700" />
          </div>
        </div>

        {/* TITLE */}
        <h3 className="text-lg font-medium mb-4 text-stone-800 tracking-wide">
          {item.title}
        </h3>

        {/* DESC */}
        <p className="text-sm text-stone-600 leading-relaxed">
          {item.desc}
        </p>
      </div>
    )
  })}
</div>

          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-[#f5f5f0]" id="services">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
              <div>
                <span className="text-amber-700 text-[15px] font-bold uppercase tracking-[0.4em] block mb-4">
                  Dịch Vụ Cao Cấp
                </span>
                <h2 className="text-gray-900 text-4xl md:text-5xl font-light font-serif italic">
                  Dịch Vụ DUAN
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  img: 'https://res.cloudinary.com/dvq9u981t/image/upload/v1769155105/Image/Dinosaur/service-express-tailor.jpg',
                  title: 'May Gấp 48 Giờ',
                  subtitle: 'Thời gian tối ưu • Chất lượng tuyệt đối'
                },
                {
                  img: 'https://res.cloudinary.com/dvq9u981t/image/upload/v1769154847/Image/Dinosaur/brand-story-about-duan-tailor.jpg',
                  title: 'May Đo Trực Tuyến',
                  subtitle: 'Tư vấn từ xa • Giao hàng toàn cầu'
                },
                {
                  img: 'https://res.cloudinary.com/dvq9u981t/image/upload/v1769155258/Image/Dinosaur/service-made-to-measure.jpg',
                  title: 'May Đo MTM',
                  subtitle: 'Made To Measure • Linh hoạt & Tinh tế'
                },
                {
                  img: 'https://res.cloudinary.com/dvq9u981t/image/upload/v1769155288/Image/Dinosaur/service-doorstep-dress.jpg',
                  title: 'May Đo Tận Nhà',
                  subtitle: 'Riêng tư • Sang trọng • Tại gia'
                }
              ].map((service, idx) => (
                <div key={idx} className="group relative overflow-hidden aspect-[3/4] cursor-pointer">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-white text-2xl font-sans italic mb-2">{service.title}</h3>
                    <p className="text-white/70 text-[10px] uppercase tracking-widest">{service.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-[#fdfbf7] overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-amber-700 text-[15px] font-bold uppercase tracking-[0.4em] block mb-4">
                Nghệ Thuật Thủ Công
              </span>
              <h2 className="text-gray-900 text-4xl md:text-5xl font-light font-serif">
                Quy Trình May Đo Tỉ Mỉ
              </h2>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-10"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
                {[
                  { step: 1, title: 'Tư vấn & chọn vải', desc: 'Lựa chọn từ hơn 3000 mẫu vải từ các nhà dệt danh tiếng thế giới.' },
                  { step: 2, title: 'Lấy số đo chi tiết', desc: 'Ghi nhận hơn 40 thông số cơ thể để đảm bảo độ chính xác tuyệt đối.' },
                  { step: 3, title: 'Thiết kế rập & cắt vải', desc: 'Vẽ rập tay độc bản cho riêng quý khách và tiến hành cắt thủ công.' },
                  { step: 4, title: 'Khâu tạm & thử lần đầu', desc: 'Buổi thử (Fitting) đầu tiên với cấu trúc khung áo cơ bản.' },
                  { step: 5, title: 'Điều chỉnh & hoàn thiện', desc: 'Tinh chỉnh những chi tiết cuối cùng và bàn giao tác phẩm hoàn mỹ.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold mb-6 shadow-lg">
                      {item.step}
                    </div>
                    <h4 className="text-lg font-sans italic mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-500 px-4">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-24 md:py-40 bg-[#faf9f6]" id="founder">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://res.cloudinary.com/dvq9u981t/image/upload/v1769155023/Image/Dinosaur/home-duan-founder-designer-nguyen-cong-duan.webp"
                alt="NTK Nguyễn Công Duẩn"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-amber-700 text-[15px] font-bold uppercase tracking-[0.4em] block mb-6">
                Nghệ Nhân May Đo
              </span>
              <h2 className="text-gray-900 text-4xl md:text-5xl font-light mb-8 font-serif leading-tight italic">
                Nhà Sáng Lập - NTK Nguyễn Công Duẩn
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Bắt đầu hành trình với kim chỉ từ năm 18 tuổi, NTK Nguyễn Công Duẩn đã dành trọn thanh xuân 
                  để tìm hiểu về cấu trúc cơ thể và sự vận động của sợi vải.
                </p>
                <p>
                  Với sự am hiểu sâu sắc về kỹ thuật cắt rập (Pattern Making) và khả năng "đọc" hình thể, 
                  ông đã tạo nên những bộ Suit không chỉ đẹp về thẩm mỹ mà còn chuẩn xác về form dáng, 
                  tôn vinh tối đa những ưu điểm của người mặc.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="w-12 h-px bg-amber-700"></div>
                <p className="text-xl font-sans italic">"Mỗi mũi khâu là một lời cam kết về chất lượng."</p>
              </div>
            </div>
          </div>
        </section>

        {/* DUAN Journal */}
        <section className="py-24 bg-[#fdfbf7]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-amber-700 text-[15px] font-bold uppercase tracking-[0.4em] block mb-4">
                Kiến Thức Thời Trang
              </span>
              <h2 className="text-gray-900 text-4xl md:text-5xl font-light font-serif italic mb-6">
                DUAN Journal
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Dành cho những cô cậu có mong muốn tìm hiểu và khám phá thêm về thế giới thời trang veston, 
                hôm nay Duẩn sẽ chia sẻ đôi nét về phân khúc vải cao cấp trong may mặc veston để các cô cậu 
                có thêm cái nhìn mới về veston với Duẩn nhé!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Featured Article */}
              <div className="lg:col-span-2 lg:row-span-2 group cursor-pointer">
                <div className="relative overflow-hidden aspect-[16/10] mb-6">
                  <img
                    src="https://res.cloudinary.com/dvq9u981t/image/upload/v1769155435/Image/Dinosaur/vai-cao-cap-trong-may-mac-veston-01.jpg"
                    alt="Tìm hiểu về phân khúc vải cao cấp"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-amber-700 text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest">
                    Bài Viết Nổi Bật
                  </div>
                </div>
                <span className="text-amber-700 text-[10px] font-bold uppercase tracking-widest block mb-3">
                  Kiến Thức May Đo
                </span>
                <h3 className="text-3xl font-sans italic text-gray-900 mb-4 group-hover:text-amber-700 transition-colors">
                  Tìm hiểu về phân khúc vải cao cấp trong may mặc veston
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dành cho những cô cậu có mong muốn tìm hiểu và khám phá thêm về thế giới thời trang veston, 
                  hôm nay Duẩn sẽ chia sẻ đôi nét về phân khúc vải cao cấp trong may mặc veston...
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-amber-700 transition-colors">
                  Đọc Thêm
                  <span>→</span>
                </a>
              </div>

              {/* Article 2 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/3] mb-4">
                  <img
                    src="https://res.cloudinary.com/dvq9u981t/image/upload/v1769155525/Image/Dinosaur/tuxedo-bo-canh-bat-hu-cua-quy-ong-lich-lam-01.jpg"
                    alt="Tuxedo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span className="text-amber-700 text-[10px] font-bold uppercase tracking-widest block mb-2">
                  Phong Cách
                </span>
                <h3 className="text-xl font-sans italic text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                  Tuxedo - Bộ cánh bất hủ của quý ông lịch lãm
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Xuất hiện từ cuối thế kỷ 19 tại thị trấn Tuxedo Park, New York, bộ trang phục này 
                  nhanh chóng trở thành lựa chọn hàng đầu...
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-amber-700 transition-colors">
                  Đọc Thêm →
                </a>
              </div>

              {/* Article 3 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/3] mb-4">
                  <img
                    src="https://res.cloudinary.com/dvq9u981t/image/upload/v1769155574/Image/Dinosaur/su-khac-biet-giua-bespoke-vs-made-to-measure-01.jpg"
                    alt="Bespoke vs Made to Measure"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span className="text-amber-700 text-[10px] font-bold uppercase tracking-widest block mb-2">
                  Kiến Thức
                </span>
                <h3 className="text-xl font-serif italic text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                  Sự khác biệt giữa Bespoke và Made to measure
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Hai thuật ngữ phổ biến nhất trong may đo suit. Hãy cùng Duẩn đi qua điểm khác biệt 
                  giữa hai phương pháp này...
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-amber-700 transition-colors">
                  Đọc Thêm →
                </a>
              </div>

              {/* Article 4 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/3] mb-4">
                  <img
                    src="https://res.cloudinary.com/dvq9u981t/image/upload/v1769162076/Image/Dinosaur/DUAN._PREMIUM_14_-_Photo.jpg"
                    alt="Top Nhà May Vest"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span className="text-amber-700 text-[10px] font-bold uppercase tracking-widest block mb-2">
                  Hướng Dẫn
                </span>
                <h3 className="text-xl font-serif italic text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                  Top Nhà May Vest Nam Đẹp TPHCM 2025
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Hiểu rõ 3 tiêu chí quan trọng nhất khi chọn nhà may vest nam, đồng thời giới thiệu 
                  top nhà may vest nam cao cấp hàng đầu...
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-amber-700 transition-colors">
                  Đọc Thêm →
                </a>
              </div>

              {/* Article 5 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/3] mb-4">
                  <img
                    src="https://res.cloudinary.com/dvq9u981t/image/upload/v1769155743/Image/Dinosaur/xu-huong-vest-nam-may-do-bespoke-suit-duan-tailor-1.jpg"
                    alt="Xu hướng bespoke 2025"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span className="text-amber-700 text-[10px] font-bold uppercase tracking-widest block mb-2">
                  Xu Hướng 2025
                </span>
                <h3 className="text-xl font-sans italic text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                  May đo vest nam cao cấp: Giải mã xu hướng bespoke 2025
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Vest may đo đang trở thành lựa chọn tất yếu cho những ai muốn đầu tư nghiêm túc 
                  vào phong cách của mình...
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-amber-700 transition-colors">
                  Đọc Thêm →
                </a>
              </div>

              {/* Article 6 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/3] mb-4">
                  <img
                    src="https://res.cloudinary.com/dvq9u981t/image/upload/v1769155770/Image/Dinosaur/vest-cuoi-chu-re-2025-duan-tailor.jpg"
                    alt="Vest cưới"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span className="text-amber-700 text-[10px] font-bold uppercase tracking-widest block mb-2">
                  Lễ Cưới
                </span>
                <h3 className="text-xl font-sans italic text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                  Bí quyết chọn vest cưới mới nhất 2025
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Ngày cưới là khoảnh khắc trọng đại trong đời, và không chỉ cô dâu mà chú rể cũng cần 
                  xuất hiện với vẻ ngoài chỉn chu, hoàn hảo nhất...
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-amber-700 transition-colors">
                  Đọc Thêm →
                </a>
              </div>
            </div>

            {/* View All Button */}
            <div className="text-center mt-16">
              <a href="#" className="inline-flex items-center justify-center border-2 border-gray-900 h-12 px-10 hover:bg-gray-900 hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest">
                Xem Tất Cả Bài Viết
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-[#f5f5f0]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <span className="text-amber-700 text-[15px] font-bold uppercase tracking-[0.4em] block mb-4">
                Đánh Giá Từ Khách Hàng
              </span>
              <h2 className="text-gray-900 text-4xl md:text-5xl font-light font-serif italic">
                Cảm Nhận Khách Hàng
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  quote: 'Sự tỉ mỉ trong từng đường kim mũi chỉ của DUAN thực sự khiến tôi ấn tượng. Form dáng hoàn hảo không kém gì những tiệm may lâu đời tại Paris.',
                  name: 'Alexandre Abela',
                  title: 'Khách hàng - Pháp'
                },
                {
                  quote: 'Tôi đã may rất nhiều nơi nhưng chỉ tại DUAN, tôi mới tìm thấy sự cân bằng tuyệt đối giữa phong cách cổ điển và sự thoải mái khi mặc.',
                  name: 'Rahaya',
                  title: 'Doanh nhân'
                },
                {
                  quote: 'Dịch vụ may đo tận nơi của DUAN rất chuyên nghiệp và tinh tế. Một trải nghiệm xa xỉ thực thụ ngay tại không gian riêng của mình.',
                  name: 'Đặng Huân Vinh',
                  title: 'Khách hàng thân thiết'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-12 shadow-sm italic text-gray-700 relative">
                  <span className="text-amber-700 text-4xl absolute top-6 left-6 font-serif opacity-20">"</span>
                  <p className="mb-8 leading-relaxed">"{item.quote}"</p>
                  <div className="border-t border-gray-100 pt-6">
                    <p className="font-bold text-sm uppercase tracking-widest text-gray-900">{item.name}</p>
                    <p className="text-[10px] text-amber-700 uppercase tracking-widest mt-1">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment Section */}
        <section className="py-24 md:py-40 bg-[#fdfbf7]" id="appointment">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div>
                <span className="text-amber-700 text-[15px] font-bold uppercase tracking-[0.4em] block mb-6">
                  Liên Hệ Đặt Lịch
                </span>
                <h2 className="text-gray-900 text-5xl md:text-6xl font-light font-sans mb-8">
                  Bắt Đầu Hành Trình Của Bạn
                </h2>
                <p className="text-gray-700 text-lg md:text-xl mb-12 leading-relaxed">
                  Đặt lịch tư vấn riêng tư tại các flagship atelier của chúng tôi. 
                  Các nghệ nhân may đo sẽ trực tiếp lắng nghe và hiện thực hóa phong cách của quý vị.
                </p>
                <div className="space-y-6 text-sm">
                  <div className="flex items-center gap-4">
                   <MapPin className="w-4 h-4 text-amber-700" />
<span>Quận 1, TP. Hồ Chí Minh / Hoàn Kiếm, Hà Nội</span>
                  </div>
                  <div className="flex items-center gap-4">
                   <Mail className="w-4 h-4 text-amber-700" />
<span>contact@maison.vn</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#f5f5f0] p-8 md:p-12 shadow-sm border border-gray-100">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-1">
                      <label className="block text-[10px] uppercase tracking-widest font-bold mb-2">
                        Danh xưng
                      </label>
                      <select
                        name="title"
                        value={formData.title}
                        onChange={handleFormChange}
                        className="w-full bg-transparent border-b border-gray-300 focus:border-amber-700 focus:ring-0 py-2 text-sm"
                      >
                        <option>Ông (Mr)</option>
                        <option>Bà (Ms)</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[10px] uppercase tracking-widest font-bold mb-2">
                        Họ và Tên
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleFormChange}
                        className="w-full bg-transparent border-b border-gray-300 focus:border-amber-700 focus:ring-0 py-2 text-sm"
                        placeholder="Nguyễn Văn A"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full bg-transparent border-b border-gray-300 focus:border-amber-700 focus:ring-0 py-2 text-sm"
                        placeholder="email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold mb-2">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full bg-transparent border-b border-gray-300 focus:border-amber-700 focus:ring-0 py-2 text-sm"
                        placeholder="090 000 0000"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold mb-2">
                      Yêu cầu cụ thể
                    </label>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleFormChange}
                      className="w-full bg-transparent border-b border-gray-300 focus:border-amber-700 focus:ring-0 py-2 text-sm resize-none"
                      placeholder="Tôi muốn đặt lịch tư vấn bộ Suit cưới..."
                      rows="4"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-amber-700 transition-colors"
                  >
                    Gửi Yêu Cầu Đặt Lịch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default HomePage;