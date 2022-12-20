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
    category: {
      title: 'Giới thiệu',
      urlSlug: 'about',
      categoryId: 2,
    },
    children: [
      {
        id: 10,
        title: 'Giới thiệu',
        urlSlug: 'gioi-thieu',
        content:
          '<p>Hiện nay các trung tâm còn tổ chức quảng bá, cho thuê sân mới chỉ dừng lại ở mức độ riêng lẻ, rời rạc, điều này gây khó khăn không ít cho người dùng có nhu cầu tìm và đặt thuê sân một cách nhanh chóng. Với sự bùng nổ của công nghệ thông tin, những chiếc điện thoại, máy tính dường như đã trở thành vật bất ly thân của nhiều người. Nắm bắt được nhu cầu của người sử dụng và mong muốn xây dựng được một ứng dụng nhằm hỗ trợ cho việc đặt thuê sân bóng đá được dễ dàng hơn do đó hệ thống mà chúng tôi muốn nói đến ở đây là xây dựng một trang web để cung cấp cho khách hàng những thông tin chi tiết về địa điểm sân, tình trạng sân bóng,mức giá cụ thể từng loại sân và các dịch vụ mà sân bóng cung cấp đến khách hàng chính xác để khách hàng có thể chọn lựa sân bóng phù hợp và nhanh chóng tiện lợi.Nó cũng sẽ giảm bớt khó khăn trong khâu quản lý của người chủ sân .</p><p>Website quản lý hệ thống sân bóng đá mà nhóm xây dựng sẽ tập trung vào các chức năng quan trọng gồm:quản lý thông tin sân bóng,quản lý thông tin khách hàng,quản lý thông tin mức giá các sân,các dịch vị cung cấp cho khách hàng,quản lý quá trình đặt sân, hủy sân online và quản lý thông tin giao dịch với khách hàng.</p>',
      },
      {
        id: 11,
        title: 'GIFT CARD',
        urlSlug: 'gift-card',
        content:
          '<p>Gift Card FootballBooking vốn là mã thẻ quà tặng dùng thanh toán tiền cho tài khoản FootballBooking của bạn dùng book các phần chơi golf, các gói chơi golf có trên FootballBooking. Quý khách có thể dùng Gift Card để giảm một phần chi phí thanh toán hoặc thanh toán toàn bộ giao dịch của bạn trên FootballBooking.</p><p><strong>Làm sao để có được mã Gift Card?</strong></p><p>Khi bạn thực hiện 1 giao dịch thành công trên Golfbooking, bạn sẽ được cộng thêm 1 điểm tích lũy mua hàng, khi đạt đủ số điều kiệu nhận Gift Card chúng tôi sẽ gửi cho quý khách một mã Gift Card:</p>',
      },
      {
        id: 12,
        title: 'Hợp tác',
        urlSlug: 'hop-tac',
        content:
          '<p>Gift Card FootballBooking vốn là mã thẻ quà tặng dùng thanh toán tiền cho tài khoản FootballBooking của bạn dùng book các phần chơi golf, các gói chơi golf có trên Golfbooing. Quý khách có thể dùng Gift Card để giảm một phần chi phí thanh toán hoặc thanh toán toàn bộ giao dịch của bạn trên FootballBooking.</p>',
      },
      {
        id: 13,
        title: 'Chính sách bảo mật',
        urlSlug: 'chinh-sach-bao-mat',
        content:
          '<p>Gift Card FootballBooking vốn là mã thẻ quà tặng dùng thanh toán tiền cho tài khoản FootballBooking của bạn dùng book các phần chơi golf, các gói chơi golf có trên Golfbooing. Quý khách có thể dùng Gift Card để giảm một phần chi phí thanh toán hoặc thanh toán toàn bộ giao dịch của bạn trên FootballBooking.</p>',
      },
      {
        id: 14,
        title: 'Điều khoản',
        urlSlug: 'dieu-khoan',
        content:
          '<p>Gift Card FootballBooking vốn là mã thẻ quà tặng dùng thanh toán tiền cho tài khoản FootballBooking của bạn dùng book các phần chơi golf, các gói chơi golf có trên Golfbooing. Quý khách có thể dùng Gift Card để giảm một phần chi phí thanh toán hoặc thanh toán toàn bộ giao dịch của bạn trên FootballBooking.</p>',
      },
    ],
  },
  {
    id: 2,
    category: {
      title: 'Tin tức',
      urlSlug: 'blog',
      categoryId: 4,
    },
    children: [
      {
        idCategory: 40,
        title: 'Tất cả tin tức',
        content: '',
      },
      {
        idCategory: 41,
        title: 'Tin trong nước',
        content: '',
      },
      {
        idCategory: 42,
        title: 'Tin quốc tế',
      },
      {
        idCategory: 43,
        title: 'Tin khuyến mãi',
      },
    ],
  },
];
export const dataPitch = [
  {
    id: 1,
    name: 'Sân bóng Đại học Thủy Lợi',
    typePitch: [
      {
        id: 100,
        type: '7 v 7',
        children: [
          {
            id: 1000,
            time: '8:00',
            price: '200000',
          },
          {
            id: 1001,
            time: '12:00',
            price: '300000',
          },
          {
            id: 1002,
            time: '17:30',
            price: '250000',
          },
          {
            id: 1003,
            time: '16:00',
            price: '350000',
          },
          {
            id: 1004,
            time: '19:00',
            price: '150000',
          },
        ],
      },
      {
        id: 101,
        type: '7 v 7',
        children: [
          {
            id: 1010,
            time: '8:30',
            price: '200000',
          },
          {
            id: 1011,
            time: '12:30',
            price: '300000',
          },
          {
            id: 1012,
            time: '18:30',
            price: '250000',
          },
        ],
      },
      {
        id: 102,
        type: '11 v 11',
        children: null,
      },
      {
        id: 103,
        type: '5 v 5',
        children: null,
      },
    ],
    // quantity: 2,
    priceMin: 200000,
    priceMax: 400000,
    timeStart: '',
    timeEnd: '',
    vote: 5,
    countOffer: 29,
    statusOffer: false,
    address: 'Cổng sau Đại học Thủy Lợi',
    description: '',
    image: 'https://cdn.malaebapp.com/images/stadium/375/small',
    imgSlider: [
      'https://cdn.malaebapp.com/images/stadium/78/4dfde3f2/large',
      'https://cdn.malaebapp.com/images/stadium/78/11498ba5/large',
      'https://cdn.malaebapp.com/images/stadium/78/4dfde3f2/large',
      'https://cdn.malaebapp.com/images/stadium/78/11498ba5/large',
    ],
  },
  {
    id: 2,
    name: 'Sân bóng Đại học Y Hà Nội',
    typePitch: [
      {
        id: 200,
        type: '7v7',
      },
    ],
    // quantity: 2,
    priceMin: 300000,
    priceMax: 400000,
    timeStart: '',
    timeEnd: '',
    vote: 5,
    countOffer: 29,
    statusOffer: false,
    address: 'Đại học Y Hà Nội',
    description: '',
    image: 'https://cdn.malaebapp.com/images/stadium/78/small',
    imgSlider: [
      'https://cdn.malaebapp.com/images/stadium/78/4dfde3f2/large',
      'https://cdn.malaebapp.com/images/stadium/78/11498ba5/large',
      'https://cdn.malaebapp.com/images/stadium/78/4dfde3f2/large',
      'https://cdn.malaebapp.com/images/stadium/78/11498ba5/large',
    ],
  },
  {
    id: 3,
    name: 'Sân bóng Thượng Đình',
    typePitch: [
      {
        id: 300,
        type: '7v7',
      },
      {
        id: 301,
        type: '7v7',
      },
      {
        id: 302,
        type: '11v11',
      },
    ],
    // quantity: 2,
    priceMin: 500000,
    priceMax: 700000,
    timeStart: '',
    timeEnd: '',
    vote: 1,
    countOffer: 29,
    statusOffer: false,
    address: 'Nguyễn Trãi Thanh Xuân Hà Nội',
    description: '',
    image: 'https://cdn.malaebapp.com/images/stadium/9/small',
    imgSlider: [
      'https://cdn.malaebapp.com/images/stadium/78/4dfde3f2/large',
      'https://cdn.malaebapp.com/images/stadium/78/11498ba5/large',
      'https://cdn.malaebapp.com/images/stadium/78/4dfde3f2/large',
      'https://cdn.malaebapp.com/images/stadium/78/11498ba5/large',
    ],
  },
  {
    id: 4,
    name: 'Sân bóng Mỹ Đình',
    typePitch: [
      {
        id: 400,
        type: '7v7',
      },
    ],
    // quantity: 2,
    priceMin: 200000,
    priceMax: 400000,
    timeStart: '',
    timeEnd: '',
    vote: 5,
    countOffer: 29,
    statusOffer: false,
    address: 'Mỹ Đình',
    description: '',
    image: 'https://cdn.malaebapp.com/images/stadium/9/small',
    imgSlider: [
      'https://cdn.malaebapp.com/images/stadium/78/4dfde3f2/large',
      'https://cdn.malaebapp.com/images/stadium/78/11498ba5/large',
      'https://cdn.malaebapp.com/images/stadium/78/4dfde3f2/large',
      'https://cdn.malaebapp.com/images/stadium/78/11498ba5/large',
    ],
  },
  {
    id: 5,
    name: 'Sân bóng Thượng Đình',
    typePitch: [
      {
        id: 500,
        type: '7v7',
      },
    ],
    // quantity: 3,
    priceMin: 500000,
    priceMax: 700000,
    timeStart: '',
    timeEnd: '',
    vote: 5,
    countOffer: 29,
    statusOffer: false,
    address: 'Nguyễn Trãi Thanh Xuân Hà Nội',
    description: '',
    image: 'https://cdn.malaebapp.com/images/stadium/375/small',
    imgSlider: [
      'https://cdn.malaebapp.com/images/stadium/78/4dfde3f2/large',
      'https://cdn.malaebapp.com/images/stadium/78/11498ba5/large',
      'https://cdn.malaebapp.com/images/stadium/78/4dfde3f2/large',
      'https://cdn.malaebapp.com/images/stadium/78/11498ba5/large',
    ],
  },
  {
    id: 6,
    name: 'Sân bóng Thượng Đình',
    typePitch: [
      {
        id: 600,
        type: '7v7',
      },
      {
        id: 601,
        type: '7v7',
      },
    ],
    // quantity: 2,
    priceMin: 500000,
    priceMax: 700000,
    timeStart: '',
    timeEnd: '',
    vote: 5,
    countOffer: 29,
    statusOffer: false,
    address: 'Nguyễn Trãi Thanh Xuân Hà Nội',
    description: '',
    image: 'https://cdn.malaebapp.com/images/stadium/932/small',
    imgSlider: [
      'https://cdn.malaebapp.com/images/stadium/78/4dfde3f2/large',
      'https://cdn.malaebapp.com/images/stadium/78/11498ba5/large',
      'https://cdn.malaebapp.com/images/stadium/78/4dfde3f2/large',
      'https://cdn.malaebapp.com/images/stadium/78/11498ba5/large',
    ],
  },
];

export const dataNews = [
  {
    id: 1,
    title:
      'Trực tiếp bóng đá Morocco - Tây Ban Nha: Hàng xóm đại chiến, lịch sử chờ sang trang (World Cup)',
    countRead: 20,
    content:
      '<h5>Trực tiếp bóng đá World Cup 2022: ĐT Tây Ban Nha vs Morocco hôm nay 22h00 6/12, link xem trực tuyến kết quả Tây Ban Nha vs ĐT Morocco VCK World Cup ở kênh sóng nào?</h5><h5>Đội hình dự kiến ra sân Tây Ban Nha vs Morocco</h5><ul><li><b>Morocco:</b>Bono (1), Achraf Hakimi (2), Nayef Aguerd (5), Romain Saiss (6), Noussair Mazraoui (3), Azzedine Ounahi (8), Sofyan Amrabat (4), Abdelhamid Sabiri (11), Hakim Ziyech (7), Youssef En-Nesyri (19), Sofiane Boufal (17).</li><li><b>Tây Ban Nha:</b>Unai Simon (23), Dani Carvajal (2), Rodri (16), Pau Torres (4), Jordi Alba (18), Gavi (9), Sergio Busquets (5), Pedri (26), Ferran Torres (11), Alvaro Morata (7), Dani Olmo (21) .</li></ul><h5>Thông tin tình hình lực lượng trước trận Tây Ban Nha vs Morocco</h5><p>Với việc thế hệ vàng của Bỉ thi đấu dưới sức vì những lục đục nội bộ và đương kim Á quân Croatia cũng đã già nua, Morocco đã tận dụng tối đa cơ hội của mình ở bảng F. Đoàn quân của HLV Walid Regragui giành được ngôi nhất bảng với 7/9 điểm chung cuộc.</p><p>Morocco bắt đầu hành trình World Cup với trận hòa 0-0 trước Croatia. Sau đó, đại diện châu Phi đánh bại Bỉ vô cùng thuyết phục với tỉ số 2-0. Ở trận đấu cuối, Morocco thi đấu nhẹ nhàng nhưng vẫn có được thắng lợi 2-1 trước Canada. Nhờ vậy mà họ giành ngôi nhất bảng F và trở thành 1 trong 2 đội bóng châu Phi duy nhất góp mặt ở vòng loại trực tiếp của World Cup.</p><p>Giải đấu tại Qatar lần này chứng kiến lần thứ 2 trong lịch sử mà Morocco tiến được tới vòng 1/8 World Cup. Ở lần duy nhất vượt qua vòng bảng năm 1986, Morocco đã bị loại ở đúng vòng 16 đội.</p><p>Morocco hiện tại có sự kết hợp tốt giữa một hàng phòng ngự chắc chắn và hàng công có những điểm nổ phù hợp. Có tới 4/5 vị trí của Morocco ở hàng thủ đạt đẳng cấp cao.</p><p>Đó là thủ môn Bounou, cặp hậu vệ biên Mazraoui và Hakimi cùng với trung vệ Roman Saiss. Ở trên hàng công, Hakim Ziyech và En-Nesyri đều lấy lại được cảm hứng với bàn thắng vào lưới Canada và sẵn sàng gây khó dễ cho Tây Ban Nha.</p>',
    description:
      '(Morocco - Tây Ban Nha, 22h, 6/12, vòng 1/8 World Cup 2022) Đây sẽ là trận đấu hứa hẹn căng thẳng vì lịch sử giữa hai nước lẫn hai đội tuyển.',
    image: '../../static/images/new1.jpg',
    idCategory: 42,
  },
  {
    id: 2,
    title: 'Ronaldo dễ mất băng đội trưởng, phải đá dự bị trận tranh vé tứ kết World Cup?',
    countRead: 20,
    content:
      '<h5>Cristiano Ronaldo đang muốn tỏa sáng ở trận đấu vòng 1/8 World Cup sắp tới. Nhưng mới đây, HLV Fernando Santos vừa lên tiếng việc có thể tước băng đội trưởng ĐT Bồ Đào Nha của CR7.</h5><p>Phong độ của Cristiano Ronaldo tại World Cup 2022 đang không được như ý siêu sao này. Trải qua 3 trận vòng bảng, tiền đạo vừa bị MU thanh lý hợp đồng chỉ có đúng 1 bàn thắng nhờ quả penalty vào lưới ĐT Ghana ở trận ra quân. Trong trận đấu với Uruguay ở lượt trận thứ 2, CR7 ăn mừng hụt khi đánh đầu sượt bóng trong tình huống FIFA tính bàn thắng cho Bruno Fernandes.</p><p>Đến lượt trận cuối vòng bảng, Ronaldo đá chính khi Bồ Đào Nha đấu Hàn Quốc nhưng anh vẫn bỏ lỡ một số cơ hội ăn bàn trước khi bị HLV Fernando Santos rút khỏi sân ngay ở phút 65 để nhường chỗ cho đàn em Andre Silva. Đáng chú ý, trước khi phải ra nghỉ, CR7 đã có động tác đặt một ngón tay trước môi mình với hàm ý yêu cầu ai đó nên im lặng thay vì chỉ trích anh.</p><p>Trong khi đó, ở buổi họp báo hôm 5/12 vừa qua, trước trận đấu gặp ĐT Thụy Sĩ tại vòng 1/8 World Cup 2022 (lúc 2h rạng sáng 7/12), HLV Fernando Santos đã bày tỏ sự không hài lòng khi thấy cậu học trò Ronaldo tỏ thái độ phản ứng với việc bị tiền đạo Cho Gue Sung của Hàn Quốc yêu cầu sớm rời sân.</p><p>"Tôi đã xem những hình ảnh đó chưa ư? Đúng vậy, tôi không thích điều đó, không hề. Tôi thực sự không thích nó. Nhưng kể từ thời điểm đó trở đi, mọi thứ liên quan đến vấn đề đó đã kết thúc. Những vấn đề này cần được giải quyết sau những cánh cửa đóng kín. Hãy chấm dứt hoàn toàn vấn đề này và bây giờ mọi người đều tập trung vào trận đấu ngày mai".</p><p>Bên cạnh đó, HLV Fernando Santos còn từ chối xác nhận rằng Ronaldo sẽ đeo băng đội trưởng, thậm chí còn ám chỉ rằng siêu sao 37 tuổi có thể không đá chính trận gặp ĐT Thụy Sĩ đêm nay trên sân Lusail Iconic (thành phố Lusail, Qatar).</p><p>Nhà cầm quân 68 tuổi nói: "Tôi chỉ quyết định ai sẽ là đội trưởng đội bóng khi tôi đến sân vận động. Tôi vẫn không biết đội hình ra sân của chúng tôi sẽ như thế nào. Đấy là điều tôi luôn làm và nó vẫn sẽ vẫn như vậy vào ngày mai. Các vấn đề khác đã được giải quyết. Chúng tôi đã củng cố nội bộ và thế là xong".</p>',
    description:
      'Cristiano Ronaldo đang muốn tỏa sáng ở trận đấu vòng 1/8 World Cup sắp tới. Nhưng mới đây, HLV Fernando Santos vừa lên tiếng việc có thể tước băng đội trưởng ĐT Bồ Đào Nha của CR7.',
    image: '../../static/images/new2.jpg',
    idCategory: 42,
  },
  {
    id: 3,
    title: 'Trực tiếp bóng đá Pháp - Ba Lan: Lewandowski ghi bàn danh dự (World Cup) (Hết giờ)',
    countRead: 20,
    content:
      '<h5>(Vòng 1/8) Lewandowski thực hiện thành công quả phạt đền giúp Ba Lan có bàn danh dự.</h5><b>Griezmann quan trọng nhất với ĐT Pháp</b><p>Trên L"Equipe, cựu tiền đạo Diego Forlan khẳng định Antoine Griezmann chính là nhân tố quan trọng nhất của ĐT Pháp chứ không phải Kylian Mbappe:</p><p>"Tôi rất thích Griezmann, cậu ấy là mẫu cầu thủ có khả năng kết nối hàng tiền vệ và tiền đạo. Với tôi, cậu ấy là nhân tố chủ chốt của ĐT Pháp. Ngay cả khi chưa từng xem Griezmann thi đấu trước đó, mọi người đều nhận thấy cậu ấy chơi tốt ra sao ở World Cup 2022".</p><b>Deschamps e ngại "người nhện" Szczesny</b><p>Trả lời truyền thông, HLV Didier Deschamps đã hết lời ca ngợi đối thủ Ba Lan, đặc biệt là thủ thành Szczesny. Kể từ đầu giải, ngôi sao thuộc biên chế Juventus đang thể hiện phong độ cao, thậm chí cản phá thành công 2 quả phạt đền.</p><p>“Tôi đã xem cả 3 trận đấu của Ba Lan và đặc điểm chung là họ phòng ngự rất nhiều. Có vẻ như Ba Lan rất thích phòng ngự và họ làm rất tốt điều đó. Họ có rất nhiều cầu thủ giỏi và giàu kinh nghiệm. Tôi có thể kể ra như Szczesny, Glik, Lewandowski… Những cầu thủ trẻ của họ cũng rất tài năng.</p><p>Những gì Ba Lan đã làm được rất đáng trân trọng, họ xứng đáng có mặt ở vòng 16 đội mạnh nhất. Các cầu thủ tôi hiểu mình sẽ phải đấu đầu với ai. Chúng tôi chuẩn bị rất nhiều bài tấn công để đối phó với Szczesny. Cậu ấy là một thủ môn giỏi”.</p><b>Lloris, Giroud chờ chạm tay vào kỷ lục</b><p>Nếu ra sân vào đêm nay, thủ thành Hugo Lloris sẽ chính thức san bằng kỷ lục về số trận khoác áo ĐT Pháp của huyền thoại Lilian Thuram (142 trận). Khả năng này gần như 99% xảy ra, ngoại trừ trường hợp ngôi sao 35 tuổi dính chấn thương vào phút chót.</p><p>Đối với Olivier Giroud, tiền đạo thuộc biên chế AC Milan cũng chỉ cần 1 pha lập công nữa để trở thành chân sút vĩ đại nhất lịch sử ĐT Pháp. Hiện tại, anh đang chia sẻ thành tích 51 bàn với Thierry Henry.</p><b>Đương kim vô địch ở thế "cửa trên"</b><p>Những ngôi sao như Mbappe, Griezmann, Dembele đã được nghỉ ngơi (chỉ vào sân trong nửa cuối hiệp 2 trận gặp Tunisia) để sẵn sàng cho cuộc chạm trán Ba Lan.</p><p>Xét về đẳng cấp lẫn lực lượng, Ba Lan rõ ràng không thể sánh bằng Pháp. "Đại bàng trắng" cũng chật vật tiến vào vòng 1/8 với ngôi nhì bảng C (hơn Mexico hiệu số). Mọi hy vọng của họ giờ đây được đặt lên vai Robert Lewandowski, dù vậy cá nhân tiền đạo 34 tuổi chưa bao giờ được đánh giá cao trong những trận đấu lớn.</p>',
    description:
      '(Vòng 1/8) Lewandowski thực hiện thành công quả phạt đền giúp Ba Lan có bàn danh dự.',
    image: '../../static/images/new4.jpg',
    idCategory: 42,
  },
  {
    id: 4,
    title: 'Brazil đại thắng Hàn Quốc: HLV Tite ca ngợi Neymar, thầy cũ Ronaldo từ chức',
    countRead: 20,
    content:
      '<b>Sau trận đấu giữa Brazil và Hàn Quốc, HLV Tite không tiếc lời khen cậu học trò Neymar trong khi HLV Bento của Hàn Quốc quyết định từ chức.</b><b>HLV Tite tán dương Neymar hết lời</b><p>HLV Tite của ĐT Brazil đã không tiếc lời khen dành cho cậu học trò cưng Neymar sau chiến thắng trước Hàn Quốc. Sự trở lại của tiền đạo sinh năm 1992 giúp chơi của “Những vũ công Samba” biến hóa hơn hẳn và HLV Tite không ngần ngại khẳng định điều này.</p><p>“Cậu ấy là nhạc trưởng của đội bóng. Mọi người đều hiểu rằng Neymar có thể tạo nên sự khác biệt. Brazil là một tập thể mạnh với nhiều cá nhân xuất sắc nhưng Neymar là trung tâm của tất cả mọi người. Cậu ấy có khả năng kết nối tất cả tạo nên những đợt tấn công nguy hiểm”.</p><p>Trong trận đấu này, ông thầy người Brazil gây chú ý khi sử dụng Militao và Danilo “trái kèo” ở hai bên cánh để khỏa lấp đi vấn đề chấn thương ở hàng thủ. HLV Tite giải thích về điều này. “Hai cầu thủ này rất đa năng nên họ có thể 2-3 vị trí trên sân. Tôi đã có tính toán từ trước khi triệu tập họ lên ĐTQG. Thực tế cũng cho thấy họ làm rất tốt. Họ biết cách di chuyển để hỗ trợ tấn công lẫn phòng ngự. Đó là điều tôi muốn thấy”.</p><p>Khi được đặt câu hỏi về phong độ của hàng công, HLV Tite không ngần ngại trả lời. “Tôi đang có trong tay hàng tấn công với dàn hảo thủ chất lượng. Họ có thể làm rất mọi việc từ tác chiến độc lập cho tới phối hợp nhóm. Tôi cần phải cám ơn các chuyên gia ở các CLB trong nước.</p><p>Họ là những người đứng phía sau và thầm lặng cống hiến. Tuy nhiên, nếu không có họ dạy dỗ cả về chuyên môn lẫn đạo đức, ĐT Brazil khó lòng có lứa cầu thủ tài năng như hiện tại. Đội hình trong tay tôi hiện tại rất cân bằng. Đó là điều tôi rất tự hào. Về quyết định thay Weverton vào sân, tôi cũng không nghĩ nhiều. Cậu ấy là người duy nhất chưa được thi đấu nên khi có cơ hội, tôi sử dụng cậu ấy thôi".</p><b>HLV Paulo Bento của Hàn Quốc xin từ chức</b><p>Trong buổi họp báo sau trận thua 1-4 trước Brazil tại vòng 1/8 World Cup, HLV Paulo Bento của ĐT Hàn Quốc đã tuyên bố từ chức. Ông thầy người Bồ Đào Nha tiết lộ đây là quyết định từ 3 tháng trước và ông chỉ công bố sau khi hoàn thành nhiệm vụ tại World Cup 2022.</p><p>“Tôi không còn là huấn luyện viên trưởng của ĐT Hàn Quốc nữa. Tôi đã quyết định điều này từ hồi tháng Chín nhưng vẫn giữ kín và chỉ đưa ra tuyên bố vào lúc này. Tôi cũng chỉ vừa thông báo tới các cầu thủ và liên đoàn bóng đá Hàn Quốc.</p>',
    description:
      'Sau trận đấu giữa Brazil và Hàn Quốc, HLV Tite không tiếc lời khen cậu học trò Neymar trong khi HLV Bento của Hàn Quốc quyết định từ chức.',
    image: '../../static/images/new3.jpg',
    idCategory: 43,
  },
  {
    id: 5,
    title:
      'Trực tiếp bóng đá Morocco - Tây Ban Nha: Hàng xóm đại chiến, lịch sử chờ sang trang (World Cup)',
    countRead: 20,
    content:
      '<h5>Trực tiếp bóng đá World Cup 2022: ĐT Tây Ban Nha vs Morocco hôm nay 22h00 6/12, link xem trực tuyến kết quả Tây Ban Nha vs ĐT Morocco VCK World Cup ở kênh sóng nào?</h5><h5>Đội hình dự kiến ra sân Tây Ban Nha vs Morocco</h5><ul><li><b>Morocco:</b>Bono (1), Achraf Hakimi (2), Nayef Aguerd (5), Romain Saiss (6), Noussair Mazraoui (3), Azzedine Ounahi (8), Sofyan Amrabat (4), Abdelhamid Sabiri (11), Hakim Ziyech (7), Youssef En-Nesyri (19), Sofiane Boufal (17).</li><li><b>Tây Ban Nha:</b>Unai Simon (23), Dani Carvajal (2), Rodri (16), Pau Torres (4), Jordi Alba (18), Gavi (9), Sergio Busquets (5), Pedri (26), Ferran Torres (11), Alvaro Morata (7), Dani Olmo (21) .</li></ul><h5>Thông tin tình hình lực lượng trước trận Tây Ban Nha vs Morocco</h5><p>Với việc thế hệ vàng của Bỉ thi đấu dưới sức vì những lục đục nội bộ và đương kim Á quân Croatia cũng đã già nua, Morocco đã tận dụng tối đa cơ hội của mình ở bảng F. Đoàn quân của HLV Walid Regragui giành được ngôi nhất bảng với 7/9 điểm chung cuộc.</p><p>Morocco bắt đầu hành trình World Cup với trận hòa 0-0 trước Croatia. Sau đó, đại diện châu Phi đánh bại Bỉ vô cùng thuyết phục với tỉ số 2-0. Ở trận đấu cuối, Morocco thi đấu nhẹ nhàng nhưng vẫn có được thắng lợi 2-1 trước Canada. Nhờ vậy mà họ giành ngôi nhất bảng F và trở thành 1 trong 2 đội bóng châu Phi duy nhất góp mặt ở vòng loại trực tiếp của World Cup.</p><p>Giải đấu tại Qatar lần này chứng kiến lần thứ 2 trong lịch sử mà Morocco tiến được tới vòng 1/8 World Cup. Ở lần duy nhất vượt qua vòng bảng năm 1986, Morocco đã bị loại ở đúng vòng 16 đội.</p><p>Morocco hiện tại có sự kết hợp tốt giữa một hàng phòng ngự chắc chắn và hàng công có những điểm nổ phù hợp. Có tới 4/5 vị trí của Morocco ở hàng thủ đạt đẳng cấp cao.</p><p>Đó là thủ môn Bounou, cặp hậu vệ biên Mazraoui và Hakimi cùng với trung vệ Roman Saiss. Ở trên hàng công, Hakim Ziyech và En-Nesyri đều lấy lại được cảm hứng với bàn thắng vào lưới Canada và sẵn sàng gây khó dễ cho Tây Ban Nha.</p>',
    description:
      '(Morocco - Tây Ban Nha, 22h, 6/12, vòng 1/8 World Cup 2022) Đây sẽ là trận đấu hứa hẹn căng thẳng vì lịch sử giữa hai nước lẫn hai đội tuyển.',
    image: '../../static/images/new1.jpg',
    idCategory: 41,
  },
  {
    id: 6,
    title: 'Ronaldo dễ mất băng đội trưởng, phải đá dự bị trận tranh vé tứ kết World Cup?',
    countRead: 20,
    content:
      '<h5>Cristiano Ronaldo đang muốn tỏa sáng ở trận đấu vòng 1/8 World Cup sắp tới. Nhưng mới đây, HLV Fernando Santos vừa lên tiếng việc có thể tước băng đội trưởng ĐT Bồ Đào Nha của CR7.</h5><p>Phong độ của Cristiano Ronaldo tại World Cup 2022 đang không được như ý siêu sao này. Trải qua 3 trận vòng bảng, tiền đạo vừa bị MU thanh lý hợp đồng chỉ có đúng 1 bàn thắng nhờ quả penalty vào lưới ĐT Ghana ở trận ra quân. Trong trận đấu với Uruguay ở lượt trận thứ 2, CR7 ăn mừng hụt khi đánh đầu sượt bóng trong tình huống FIFA tính bàn thắng cho Bruno Fernandes.</p><p>Đến lượt trận cuối vòng bảng, Ronaldo đá chính khi Bồ Đào Nha đấu Hàn Quốc nhưng anh vẫn bỏ lỡ một số cơ hội ăn bàn trước khi bị HLV Fernando Santos rút khỏi sân ngay ở phút 65 để nhường chỗ cho đàn em Andre Silva. Đáng chú ý, trước khi phải ra nghỉ, CR7 đã có động tác đặt một ngón tay trước môi mình với hàm ý yêu cầu ai đó nên im lặng thay vì chỉ trích anh.</p><p>Trong khi đó, ở buổi họp báo hôm 5/12 vừa qua, trước trận đấu gặp ĐT Thụy Sĩ tại vòng 1/8 World Cup 2022 (lúc 2h rạng sáng 7/12), HLV Fernando Santos đã bày tỏ sự không hài lòng khi thấy cậu học trò Ronaldo tỏ thái độ phản ứng với việc bị tiền đạo Cho Gue Sung của Hàn Quốc yêu cầu sớm rời sân.</p><p>"Tôi đã xem những hình ảnh đó chưa ư? Đúng vậy, tôi không thích điều đó, không hề. Tôi thực sự không thích nó. Nhưng kể từ thời điểm đó trở đi, mọi thứ liên quan đến vấn đề đó đã kết thúc. Những vấn đề này cần được giải quyết sau những cánh cửa đóng kín. Hãy chấm dứt hoàn toàn vấn đề này và bây giờ mọi người đều tập trung vào trận đấu ngày mai".</p><p>Bên cạnh đó, HLV Fernando Santos còn từ chối xác nhận rằng Ronaldo sẽ đeo băng đội trưởng, thậm chí còn ám chỉ rằng siêu sao 37 tuổi có thể không đá chính trận gặp ĐT Thụy Sĩ đêm nay trên sân Lusail Iconic (thành phố Lusail, Qatar).</p><p>Nhà cầm quân 68 tuổi nói: "Tôi chỉ quyết định ai sẽ là đội trưởng đội bóng khi tôi đến sân vận động. Tôi vẫn không biết đội hình ra sân của chúng tôi sẽ như thế nào. Đấy là điều tôi luôn làm và nó vẫn sẽ vẫn như vậy vào ngày mai. Các vấn đề khác đã được giải quyết. Chúng tôi đã củng cố nội bộ và thế là xong".</p>',
    description:
      'Cristiano Ronaldo đang muốn tỏa sáng ở trận đấu vòng 1/8 World Cup sắp tới. Nhưng mới đây, HLV Fernando Santos vừa lên tiếng việc có thể tước băng đội trưởng ĐT Bồ Đào Nha của CR7.',
    image: '../../static/images/new2.jpg',
    idCategory: 43,
  },
  {
    id: 7,
    title: 'Trực tiếp bóng đá Pháp - Ba Lan: Lewandowski ghi bàn danh dự (World Cup) (Hết giờ)',
    countRead: 20,
    content:
      '<h5>(Vòng 1/8) Lewandowski thực hiện thành công quả phạt đền giúp Ba Lan có bàn danh dự.</h5><b>Griezmann quan trọng nhất với ĐT Pháp</b><p>Trên L"Equipe, cựu tiền đạo Diego Forlan khẳng định Antoine Griezmann chính là nhân tố quan trọng nhất của ĐT Pháp chứ không phải Kylian Mbappe:</p><p>"Tôi rất thích Griezmann, cậu ấy là mẫu cầu thủ có khả năng kết nối hàng tiền vệ và tiền đạo. Với tôi, cậu ấy là nhân tố chủ chốt của ĐT Pháp. Ngay cả khi chưa từng xem Griezmann thi đấu trước đó, mọi người đều nhận thấy cậu ấy chơi tốt ra sao ở World Cup 2022".</p><b>Deschamps e ngại "người nhện" Szczesny</b><p>Trả lời truyền thông, HLV Didier Deschamps đã hết lời ca ngợi đối thủ Ba Lan, đặc biệt là thủ thành Szczesny. Kể từ đầu giải, ngôi sao thuộc biên chế Juventus đang thể hiện phong độ cao, thậm chí cản phá thành công 2 quả phạt đền.</p><p>“Tôi đã xem cả 3 trận đấu của Ba Lan và đặc điểm chung là họ phòng ngự rất nhiều. Có vẻ như Ba Lan rất thích phòng ngự và họ làm rất tốt điều đó. Họ có rất nhiều cầu thủ giỏi và giàu kinh nghiệm. Tôi có thể kể ra như Szczesny, Glik, Lewandowski… Những cầu thủ trẻ của họ cũng rất tài năng.</p><p>Những gì Ba Lan đã làm được rất đáng trân trọng, họ xứng đáng có mặt ở vòng 16 đội mạnh nhất. Các cầu thủ tôi hiểu mình sẽ phải đấu đầu với ai. Chúng tôi chuẩn bị rất nhiều bài tấn công để đối phó với Szczesny. Cậu ấy là một thủ môn giỏi”.</p><b>Lloris, Giroud chờ chạm tay vào kỷ lục</b><p>Nếu ra sân vào đêm nay, thủ thành Hugo Lloris sẽ chính thức san bằng kỷ lục về số trận khoác áo ĐT Pháp của huyền thoại Lilian Thuram (142 trận). Khả năng này gần như 99% xảy ra, ngoại trừ trường hợp ngôi sao 35 tuổi dính chấn thương vào phút chót.</p><p>Đối với Olivier Giroud, tiền đạo thuộc biên chế AC Milan cũng chỉ cần 1 pha lập công nữa để trở thành chân sút vĩ đại nhất lịch sử ĐT Pháp. Hiện tại, anh đang chia sẻ thành tích 51 bàn với Thierry Henry.</p><b>Đương kim vô địch ở thế "cửa trên"</b><p>Những ngôi sao như Mbappe, Griezmann, Dembele đã được nghỉ ngơi (chỉ vào sân trong nửa cuối hiệp 2 trận gặp Tunisia) để sẵn sàng cho cuộc chạm trán Ba Lan.</p><p>Xét về đẳng cấp lẫn lực lượng, Ba Lan rõ ràng không thể sánh bằng Pháp. "Đại bàng trắng" cũng chật vật tiến vào vòng 1/8 với ngôi nhì bảng C (hơn Mexico hiệu số). Mọi hy vọng của họ giờ đây được đặt lên vai Robert Lewandowski, dù vậy cá nhân tiền đạo 34 tuổi chưa bao giờ được đánh giá cao trong những trận đấu lớn.</p>',
    description:
      '(Vòng 1/8) Lewandowski thực hiện thành công quả phạt đền giúp Ba Lan có bàn danh dự.',
    image: '../../static/images/new4.jpg',
    idCategory: 41,
  },
  {
    id: 8,
    title: 'Brazil đại thắng Hàn Quốc: HLV Tite ca ngợi Neymar, thầy cũ Ronaldo từ chức',
    countRead: 20,
    content:
      '<b>Sau trận đấu giữa Brazil và Hàn Quốc, HLV Tite không tiếc lời khen cậu học trò Neymar trong khi HLV Bento của Hàn Quốc quyết định từ chức.</b><b>HLV Tite tán dương Neymar hết lời</b><p>HLV Tite của ĐT Brazil đã không tiếc lời khen dành cho cậu học trò cưng Neymar sau chiến thắng trước Hàn Quốc. Sự trở lại của tiền đạo sinh năm 1992 giúp chơi của “Những vũ công Samba” biến hóa hơn hẳn và HLV Tite không ngần ngại khẳng định điều này.</p><p>“Cậu ấy là nhạc trưởng của đội bóng. Mọi người đều hiểu rằng Neymar có thể tạo nên sự khác biệt. Brazil là một tập thể mạnh với nhiều cá nhân xuất sắc nhưng Neymar là trung tâm của tất cả mọi người. Cậu ấy có khả năng kết nối tất cả tạo nên những đợt tấn công nguy hiểm”.</p><p>Trong trận đấu này, ông thầy người Brazil gây chú ý khi sử dụng Militao và Danilo “trái kèo” ở hai bên cánh để khỏa lấp đi vấn đề chấn thương ở hàng thủ. HLV Tite giải thích về điều này. “Hai cầu thủ này rất đa năng nên họ có thể 2-3 vị trí trên sân. Tôi đã có tính toán từ trước khi triệu tập họ lên ĐTQG. Thực tế cũng cho thấy họ làm rất tốt. Họ biết cách di chuyển để hỗ trợ tấn công lẫn phòng ngự. Đó là điều tôi muốn thấy”.</p><p>Khi được đặt câu hỏi về phong độ của hàng công, HLV Tite không ngần ngại trả lời. “Tôi đang có trong tay hàng tấn công với dàn hảo thủ chất lượng. Họ có thể làm rất mọi việc từ tác chiến độc lập cho tới phối hợp nhóm. Tôi cần phải cám ơn các chuyên gia ở các CLB trong nước.</p><p>Họ là những người đứng phía sau và thầm lặng cống hiến. Tuy nhiên, nếu không có họ dạy dỗ cả về chuyên môn lẫn đạo đức, ĐT Brazil khó lòng có lứa cầu thủ tài năng như hiện tại. Đội hình trong tay tôi hiện tại rất cân bằng. Đó là điều tôi rất tự hào. Về quyết định thay Weverton vào sân, tôi cũng không nghĩ nhiều. Cậu ấy là người duy nhất chưa được thi đấu nên khi có cơ hội, tôi sử dụng cậu ấy thôi".</p><b>HLV Paulo Bento của Hàn Quốc xin từ chức</b><p>Trong buổi họp báo sau trận thua 1-4 trước Brazil tại vòng 1/8 World Cup, HLV Paulo Bento của ĐT Hàn Quốc đã tuyên bố từ chức. Ông thầy người Bồ Đào Nha tiết lộ đây là quyết định từ 3 tháng trước và ông chỉ công bố sau khi hoàn thành nhiệm vụ tại World Cup 2022.</p><p>“Tôi không còn là huấn luyện viên trưởng của ĐT Hàn Quốc nữa. Tôi đã quyết định điều này từ hồi tháng Chín nhưng vẫn giữ kín và chỉ đưa ra tuyên bố vào lúc này. Tôi cũng chỉ vừa thông báo tới các cầu thủ và liên đoàn bóng đá Hàn Quốc.</p>',
    description:
      'Sau trận đấu giữa Brazil và Hàn Quốc, HLV Tite không tiếc lời khen cậu học trò Neymar trong khi HLV Bento của Hàn Quốc quyết định từ chức.',
    image: '../../static/images/new3.jpg',
    idCategory: 43,
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
    id: 10,
    title: '5 v 5',
  },
  {
    id: 11,
    title: '7 v 7',
  },
  {
    id: 12,
    title: '11 v 11',
  },
];

// ngân hàng
export const dataBanks = [
  {
    id: 1,
    title: 'BIDV',
    accountNumber: '382133121',
    accountName: 'Lê Đức Nam',
    branch: 'Cầu Giấy - Hà Nội',
    image: 'https://golfbooking.com.vn/images/config/bidv_1517888307.png',
  },
  {
    id: 2,
    title: 'VIETINBANK',
    accountNumber: '1092378742',
    accountName: 'Lê Đức Nam',
    branch: 'ĐỐNG ĐA - HÀ NỘI',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Logo_MB_new.png',
  },
];
