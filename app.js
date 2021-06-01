const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

//Template engine

app.set('view engine', 'ejs'); // ejs'nin kullanacağımız template engine olduğunu belirttik burada express'e. ejs bizim klasör yapımızdaki views klasörünün içerisine bakar otomatik olarak.

// Middle wares
app.use(express.static('public')); // burada static dosyaları kaydediyoruz. Mesela buradan css dosyasını çıkardığımızda index.html css dosyasını çekemiyor.

//Routes
app.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'));  // "/" requestini gönderdiğinde aynı klasör içerisinde yer alan temp dosyası içerisindeki index.html'yi gönder diyoruz.
  res.render('index'); // kök dosyaya req geldiğinde res objemizin indexi işlemesini istedik. Artık index.ejs den geliyor bu sayfa.
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add');
});

const port = 3000;

app.listen(port, () => {
  console.log(`sunucu ${port} portunda başlatıldı..`);
});
