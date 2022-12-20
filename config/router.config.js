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
    { path: '/layoutAdmin/dashboard', name: 'dashboard', component: 'dashboard' },
    { path: '/layoutAdmin/ecommerce', name: 'ecommerce', component: 'dashboard' },
    { path: '/layoutAdmin/pitchs', name: 'pitchs', component: 'dashboard' },
    { path: '/layoutAdmin/blogs', name: 'blogs', component: 'dashboard' },
    { path: '/layoutAdmin/users', name: 'users', component: 'dashboard' },
    { path: '/layoutAdmin/employees', name: 'employees', component: 'dashboard' },
    { path: '/layoutAdmin/owners', name: 'owners', component: 'dashboard' },
    { path: '/layoutAdmin/advertisment', name: 'advertisment', component: 'dashboard' },
    { path: '/layoutAdmin/login', name: 'login', component: 'dashboard' },
  ],
};
