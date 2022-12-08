export const dataMenu = [
  {
    id: 1,
    title: 'Trang chủ',
    urlSlug: '',
    children: null,
  },
  {
    id: 2,
    title: 'Giới thiệu',
    urlSlug: 'about',
    children: null,
  },
  {
    id: 3,
    title: 'Đặt sân',
    urlSlug: 'book',
    children: null,
  },
  {
    id: 4,
    title: 'Tin tức',
    urlSlug: 'blog',
    children: null,
  },
  {
    id: 5,
    title: 'Liên hệ',
    urlSlug: 'contact',
    children: null,
  },
];

export const dataCategories = [
  {
    id: 1,
    categoryId: 2,
    children: [
      {
        id: 10,
        title: 'Giới thiệu',
        content:
          '<p>Hiện nay các trung tâm còn tổ chức quảng bá, cho thuê sân mới chỉ dừng lại ở mức độ riêng lẻ, rời rạc, điều này gây khó khăn không ít cho người dùng có nhu cầu tìm và đặt thuê sân một cách nhanh chóng. Với sự bùng nổ của công nghệ thông tin, những chiếc điện thoại, máy tính dường như đã trở thành vật bất ly thân của nhiều người. Nắm bắt được nhu cầu của người sử dụng và mong muốn xây dựng được một ứng dụng nhằm hỗ trợ cho việc đặt thuê sân bóng đá được dễ dàng hơn do đó hệ thống mà chúng tôi muốn nói đến ở đây là xây dựng một trang web để cung cấp cho khách hàng những thông tin chi tiết về địa điểm sân, tình trạng sân bóng,mức giá cụ thể từng loại sân và các dịch vụ mà sân bóng cung cấp đến khách hàng chính xác để khách hàng có thể chọn lựa sân bóng phù hợp và nhanh chóng tiện lợi.Nó cũng sẽ giảm bớt khó khăn trong khâu quản lý của người chủ sân .</p><p>Website quản lý hệ thống sân bóng đá mà nhóm xây dựng sẽ tập trung vào các chức năng quan trọng gồm:quản lý thông tin sân bóng,quản lý thông tin khách hàng,quản lý thông tin mức giá các sân,các dịch vị cung cấp cho khách hàng,quản lý quá trình đặt sân, hủy sân online và quản lý thông tin giao dịch với khách hàng.</p>',
      },
      {
        id: 11,
        title: 'GIFT CARD',
      },
      {
        id: 12,
        title: 'Hợp tác',
      },
      {
        id: 13,
        title: 'Chính sách bảo mật',
      },
      {
        id: 14,
        title: 'Điều khoản',
      },
    ],
  },
  {
    id: 2,
    categoryId: 4,
    children: [
      {
        id: 10,
        title: 'Tin trong nước',
        content: '',
      },
      {
        id: 11,
        title: 'Tin quốc tế',
      },
      {
        id: 12,
        title: 'Tin khuyến mãi',
      },
    ],
  },
];
export const dataPitch = [
  {
    id: 1,
    name: 'Sân bóng Đại học Thủy Lợi',
    typePitch: '7',
    quantity: 2,
    priceMin: 200000,
    priceMax: 400000,
    vote: 5,
    countOffer: 29,
    statusOffer: false,
    address: 'Cổng sau Đại học Thủy Lợi',
    description: '',
    image: 'https://cdn.malaebapp.com/images/stadium/375/small',
  },
  {
    id: 2,
    name: 'Sân bóng Đại học Y Hà Nội',
    typePitch: '7',
    quantity: 2,
    priceMin: 300000,
    priceMax: 400000,
    vote: 5,
    countOffer: 29,
    statusOffer: false,
    address: 'Đại học Y Hà Nội',
    description: '',
    image: 'https://cdn.malaebapp.com/images/stadium/78/small',
  },
  {
    id: 3,
    name: 'Sân bóng Thượng Đình',
    typePitch: '7',
    quantity: 2,
    priceMin: 500000,
    priceMax: 700000,
    vote: 1,
    countOffer: 29,
    statusOffer: false,
    address: 'Nguyễn Trãi Thanh Xuân Hà Nội',
    description: '',
    image: 'https://cdn.malaebapp.com/images/stadium/9/small',
  },
  {
    id: 4,
    name: 'Sân bóng Mỹ Đình',
    typePitch: '7',
    quantity: 2,
    priceMin: 200000,
    priceMax: 400000,
    vote: 5,
    countOffer: 29,
    statusOffer: false,
    address: 'Mỹ Đình',
    description: '',
    image: 'https://cdn.malaebapp.com/images/stadium/9/small',
  },
  {
    id: 5,
    name: 'Sân bóng Thượng Đình',
    typePitch: '7',
    quantity: 3,
    priceMin: 500000,
    priceMax: 700000,
    vote: 5,
    countOffer: 29,
    statusOffer: false,
    address: 'Nguyễn Trãi Thanh Xuân Hà Nội',
    description: '',
    image: 'https://cdn.malaebapp.com/images/stadium/375/small',
  },
  {
    id: 6,
    name: 'Sân bóng Thượng Đình',
    typePitch: '7',
    quantity: 2,
    priceMin: 500000,
    priceMax: 700000,
    vote: 5,
    countOffer: 29,
    statusOffer: false,
    address: 'Nguyễn Trãi Thanh Xuân Hà Nội',
    description: '',
    image: 'https://cdn.malaebapp.com/images/stadium/932/small',
  },
];

export const dataNews = [
  {
    id: 1,
    name: 'Trực tiếp bóng đá Morocco - Tây Ban Nha: Hàng xóm đại chiến, lịch sử chờ sang trang (World Cup)',
    countRead: 20,
    content: '',
    description:
      '(Morocco - Tây Ban Nha, 22h, 6/12, vòng 1/8 World Cup 2022) Đây sẽ là trận đấu hứa hẹn căng thẳng vì lịch sử giữa hai nước lẫn hai đội tuyển.',
    image: '../../static/images/new1.jpg',
  },
  {
    id: 2,
    name: 'Ronaldo dễ mất băng đội trưởng, phải đá dự bị trận tranh vé tứ kết World Cup?',
    countRead: 20,
    content: '',
    description:
      'Cristiano Ronaldo đang muốn tỏa sáng ở trận đấu vòng 1/8 World Cup sắp tới. Nhưng mới đây, HLV Fernando Santos vừa lên tiếng việc có thể tước băng đội trưởng ĐT Bồ Đào Nha của CR7.',
    image: '../../static/images/new2.jpg',
  },
  {
    id: 3,
    name: 'Trực tiếp bóng đá Pháp - Ba Lan: Lewandowski ghi bàn danh dự (World Cup) (Hết giờ)',
    countRead: 20,
    content: '',
    description:
      '(Vòng 1/8) Lewandowski thực hiện thành công quả phạt đền giúp Ba Lan có bàn danh dự.',
    image: '../../static/images/new4.jpg',
  },
  {
    id: 4,
    name: 'Brazil đại thắng Hàn Quốc: HLV Tite ca ngợi Neymar, thầy cũ Ronaldo từ chức',
    countRead: 20,
    content: '',
    description:
      'Sau trận đấu giữa Brazil và Hàn Quốc, HLV Tite không tiếc lời khen cậu học trò Neymar trong khi HLV Bento của Hàn Quốc quyết định từ chức.',
    image: '../../static/images/new3.jpg',
  },
  {
    id: 5,
    name: 'Trực tiếp bóng đá Morocco - Tây Ban Nha: Hàng xóm đại chiến, lịch sử chờ sang trang (World Cup)',
    countRead: 20,
    content: '',
    description:
      '(Morocco - Tây Ban Nha, 22h, 6/12, vòng 1/8 World Cup 2022) Đây sẽ là trận đấu hứa hẹn căng thẳng vì lịch sử giữa hai nước lẫn hai đội tuyển.',
    image: '../../static/images/new1.jpg',
  },
  {
    id: 6,
    name: 'Ronaldo dễ mất băng đội trưởng, phải đá dự bị trận tranh vé tứ kết World Cup?',
    countRead: 20,
    content: '',
    description:
      'Cristiano Ronaldo đang muốn tỏa sáng ở trận đấu vòng 1/8 World Cup sắp tới. Nhưng mới đây, HLV Fernando Santos vừa lên tiếng việc có thể tước băng đội trưởng ĐT Bồ Đào Nha của CR7.',
    image: '../../static/images/new2.jpg',
  },
  {
    id: 7,
    name: 'Trực tiếp bóng đá Pháp - Ba Lan: Lewandowski ghi bàn danh dự (World Cup) (Hết giờ)',
    countRead: 20,
    content: '',
    description:
      '(Vòng 1/8) Lewandowski thực hiện thành công quả phạt đền giúp Ba Lan có bàn danh dự.',
    image: '../../static/images/new4.jpg',
  },
  {
    id: 8,
    name: 'Brazil đại thắng Hàn Quốc: HLV Tite ca ngợi Neymar, thầy cũ Ronaldo từ chức',
    countRead: 20,
    content: '',
    description:
      'Sau trận đấu giữa Brazil và Hàn Quốc, HLV Tite không tiếc lời khen cậu học trò Neymar trong khi HLV Bento của Hàn Quốc quyết định từ chức.',
    image: '../../static/images/new3.jpg',
  },
];

export const matchDuration = [
  {
    id: 1,
    time: '60',
  },
  {
    id: 2,
    time: '90',
  },
  {
    id: 3,
    time: '120',
  },
];

export const pitchSizes = [
  {
    id: 11,
    title: '7 v 7',
  },
  {
    id: 12,
    title: '11 v 11',
  },
];
