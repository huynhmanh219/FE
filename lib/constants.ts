/**
 * Featured Products for Landing Page
 * TODO: Replace with real data from backend later
 */
export const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Bộ Bài Tarot Rider Waite",
    description: "Bộ bài kinh điển cho người mới bắt đầu, dễ học và giàu hình ảnh biểu tượng",
    price: "450,000",
    originalPrice: "550,000",
    image: "/images/products/rider-waite.jpg",
    tag: "Bestseller",
    category: "tarot",
  },
  {
    id: 2,
    name: "Pha Lê Thạch Anh Tím",
    description: "Thanh lọc năng lượng tiêu cực, tăng cường trực giác và sự tỉnh thức",
    price: "320,000",
    originalPrice: null,
    image: "/images/products/amethyst.jpg",
    tag: "Hot",
    category: "crystals",
  },
  {
    id: 3,
    name: "Bộ Bài Oracle Card",
    description: "Bộ bài Oracle với thông điệp trực quan, phù hợp cho mọi cấp độ",
    price: "380,000",
    originalPrice: null,
    image: "/images/products/oracle-deck.jpg",
    tag: "Mới",
    category: "tarot",
  },
  {
    id: 4,
    name: "Cây Tài Lộc Mini",
    description: "Mang lại tài lộc và may mắn cho gia đình, văn phòng",
    price: "250,000",
    originalPrice: "300,000",
    image: "/images/products/money-tree.jpg",
    tag: null,
    category: "fengshui",
  },
  {
    id: 5,
    name: "Set Nhang Trầm Hương",
    description: "Nhang trầm hương tự nhiên, thanh tịnh không gian, thư giãn tinh thần",
    price: "180,000",
    originalPrice: null,
    image: "/images/products/incense-set.jpg",
    tag: null,
    category: "incense",
  },
] as const;

/**
 * Value Propositions - Why choose us
 */
export const VALUE_PROPS = [
  {
    id: 1,
    icon: "ShieldCheck",
    title: "Chính Hãng 100%",
    description: "Nhập khẩu trực tiếp từ US, UK, đảm bảo nguồn gốc xuất xứ rõ ràng",
  },
  {
    id: 2,
    icon: "BookOpen",
    title: "Hướng Dẫn Chi Tiết",
    description: "Video tutorial và ebook miễn phí cho người mới bắt đầu",
  },
  {
    id: 3,
    icon: "Truck",
    title: "Miễn Phí Vận Chuyển",
    description: "Free ship toàn quốc cho đơn hàng từ 500,000đ",
  },
  {
    id: 4,
    icon: "Headphones",
    title: "Hỗ Trợ 24/7",
    description: "Tư vấn miễn phí qua chat, call hoặc email bất cứ lúc nào",
  },
  {
    id: 5,
    icon: "RotateCcw",
    title: "Đổi Trả Dễ Dàng",
    description: "Chính sách đổi trả trong vòng 7 ngày nếu sản phẩm có lỗi",
  },
  {
    id: 6,
    icon: "Gift",
    title: "Quà Tặng Hấp Dẫn",
    description: "Tích điểm mỗi đơn hàng, đổi quà và nhận ưu đãi đặc biệt",
  },
] as const;

/**
 * Frequently Asked Questions
 */
export const FAQS = [
  {
    id: 1,
    question: "Khi nào website chính thức ra mắt?",
    answer: "Chúng tôi dự kiến ra mắt chính thức vào giữa năm 2026. Đăng ký email để nhận thông báo sớm nhất và ưu đãi 20% cho đơn hàng đầu tiên!",
  },
  {
    id: 2,
    question: "Sản phẩm có chính hãng, nhập khẩu không?",
    answer: "Tất cả sản phẩm đều được nhập khẩu chính hãng từ các nhà sản xuất uy tín tại US, UK và các quốc gia châu Âu. Chúng tôi cam kết 100% chất lượng và nguồn gốc rõ ràng.",
  },
  {
    id: 3,
    question: "Có ship toàn quốc không? Phí ship bao nhiêu?",
    answer: "Chúng tôi giao hàng toàn quốc thông qua các đơn vị vận chuyển uy tín như GHN, GHTK. Miễn phí ship cho đơn hàng từ 500,000đ. Đơn hàng dưới 500k phí ship từ 25,000 - 40,000đ tùy khu vực.",
  },
  {
    id: 4,
    question: "Thanh toán như thế nào?",
    answer: "Chúng tôi hỗ trợ nhiều hình thức thanh toán: COD (thanh toán khi nhận hàng), chuyển khoản ngân hàng, ví điện tử (MoMo, ZaloPay, VNPay), và thẻ tín dụng/ghi nợ.",
  },
  {
    id: 5,
    question: "Tôi mới bắt đầu học Tarot, có được hướng dẫn không?",
    answer: "Có! Chúng tôi cung cấp miễn phí ebook hướng dẫn cho người mới, video tutorial, và hỗ trợ tư vấn 1-1 qua chat/call. Mỗi bộ bài cũng đi kèm sách hướng dẫn chi tiết.",
  },
  {
    id: 6,
    question: "Chính sách đổi trả như thế nào?",
    answer: "Sản phẩm có thể đổi/trả trong vòng 7 ngày nếu còn nguyên seal, chưa sử dụng và có lỗi từ nhà sản xuất. Chúng tôi sẽ hoàn tiền 100% hoặc đổi sản phẩm mới.",
  },
  {
    id: 7,
    question: "Làm sao để nhận ưu đãi 20%?",
    answer: "Chỉ cần đăng ký email ở form trên trang này! Bạn sẽ nhận mã giảm giá 20% qua email khi website chính thức ra mắt. Ưu đãi áp dụng cho đơn hàng đầu tiên.",
  },
] as const;

/**
 * Testimonials (Social Proof)
 * TODO: Replace with real testimonials when available
 */
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Nguyễn Minh Anh",
    avatar: "/images/avatars/avatar-1.jpg",
    rating: 5,
    comment: "Bộ bài Tarot rất đẹp, chất lượng in ấn tuyệt vời. Shop tư vấn nhiệt tình, ship nhanh. Sẽ ủng hộ dài dài!",
    product: "Bộ Bài Tarot Rider Waite",
    date: "2026-02-15",
  },
  {
    id: 2,
    name: "Trần Quốc Tuấn",
    avatar: "/images/avatars/avatar-2.jpg",
    rating: 5,
    comment: "Pha lê thạch anh tím đẹp lắm, năng lượng mạnh. Đặt trong phòng làm việc cảm thấy tập trung hơn hẳn.",
    product: "Pha Lê Thạch Anh Tím",
    date: "2026-02-10",
  },
  {
    id: 3,
    name: "Lê Thu Hà",
    avatar: "/images/avatars/avatar-3.jpg",
    rating: 5,
    comment: "Mình mới bắt đầu học tarot, shop hướng dẫn rất chi tiết. Ebook và video tutorial rất dễ hiểu. Recommend!",
    product: "Bộ Bài Oracle Card",
    date: "2026-02-20",
  },
] as const;

/**
 * Social Links
 */
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/tarotshop",
  instagram: "https://instagram.com/tarotshop",
  tiktok: "https://tiktok.com/@tarotshop",
  youtube: "https://youtube.com/@tarotshop",
} as const;

/**
 * Contact Information
 */
export const CONTACT_INFO = {
  email: "contact@tarotshop.vn",
  phone: "0123 456 789",
  address: "123 Đường ABC, Quận 1, TP. Hồ Chí Minh",
} as const;
