const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;

app.use(morgan('combined'));

// Cấp quyền truy cập cho thư mục public
app.use(express.static('public'));

// Cấu hình Handlebars
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home');
});
// Route xử lý cho trang About
   app.get('/about', (req, res) => {
       res.render('about');
   });

   // Route xử lý cho trang Liên hệ
   app.get('/contact', (req, res) => {
       res.render('contact');
   });

   // Route hiển thị trang Tìm kiếm
   app.get('/search', (req, res) => {
    console.log("Từ khóa tìm kiếm:", req.query.q);
    console.log("Loại tìm kiếm:", req.query.type);
       res.render('search');
   });

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});