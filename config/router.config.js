/**
 * đối tượng routes cho web và cms
 * @param { là tên không in hoa = tiếng anh viết liền, cách nhau bằng dấu _ và là duy nhất } name
 * @param { là đường dẫn trên trình duyệt, bắt đầu bằng / } path
 * @param { là đường dẫn đến file vật lý trong thư mục pages } component
 */
module.exports.routes = {
  // web
  web: [
    { path: '/', name: 'home', component: 'index' },
    { path: '/about', name: 'about', component: 'about' },
    { path: '/book', name: 'book', component: 'book' },
    { path: '/blog', name: 'blog', component: 'blog' },
    { path: '/book/:id', name: 'detail', component: 'PitchDetail' },
    { path: '/blog/:slug', name: 'blog_detail', component: 'blog_detail' },
  ],
  dashboard: [],
};
