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
    // { path: '/about/:id', name: 'about', component: 'about' },
    { path: '/book', name: 'book', component: 'book' },
    { path: '/blog', name: 'blog', component: 'blog' },
    { path: '/book/:id', name: 'detail', component: 'PitchDetail' },
    { path: '/blog/detail/:id', name: 'blog_detail', component: 'blog_detail' },
    { path: '/contact', name: 'contact', component: 'contact' },
    { path: '/checkout', name: 'checkout', component: 'checkout' },
  ],
  dashboard: [
    { path: '/admin/dashboard', name: 'dashboard', component: 'admin/dashboard' },
    { path: '/admin/ecommerce', name: 'ecommerce', component: 'admin/ecommerce' },
    { path: '/admin/pitchs', name: 'pitchs', component: 'admin/pitchs' },
    { path: '/admin/blogs', name: 'blogs', component: 'admin/blogs' },
    { path: '/admin/users', name: 'users', component: 'admin/account' },
    { path: '/admin/employees', name: 'employees', component: 'admin/account' },
    { path: '/admin/owners', name: 'owners', component: 'admin/account' },
    { path: '/admin/advertisment', name: 'advertisment', component: 'admin/advertistment' },
    { path: '/admin/login', name: 'login', component: 'dashboard' },
  ],
};
