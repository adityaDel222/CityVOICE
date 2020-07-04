const express = require('express');
const articles = require('../models/articles');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.render('admin');
});
router.post('/submit', (req, res) => {
    console.log('Title: ' + req.body.title);
    console.log('Subtitle: ' + req.body.subtitle);
    console.log('Category: ' + req.body.category);
    const newArticle = new articles({
        title: req.body.title,
        date: {
            dayDB: req.body.dayselect,
            monthDB: req.body.monthselect,
            yearDB: req.body.yearselect
        },
        time: {
            hourDB: req.body.hour,
            minuteDB: req.body.minute
        },
        by: req.body.by,
        location: req.body.location,
        subtitle: req.body.subtitle,
        image: {
            url: req.body.imgurl,
            caption: req.body.imgcaption
        },
        content: {
            para1: req.body.para1,
            para2: req.body.para2,
            para3: req.body.para3,
            para4: req.body.para4,
            para5: req.body.para5
        },
        category: req.body.category
    });
    newArticle.save((err, articles) => {
        if(err) {
            console.error(err);
        } else {
            console.log('Articles saved to database');
        }
    })
    res.redirect('/admin');
});

module.exports = router;