const express = require('express');
const articles = require('../models/articles');
const router = express.Router();

router.get('/', (req, res) => {
    articles.find({}, (err, articles) => {
        if(err) {
            console.log(err);
        } else {
            articles.sort((a, b) => {
                monthsList = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
                aDateTime = new Date(a.date.yearDB, monthsList[a.date.monthDB] - 1, a.date.dayDB, a.time.hourDB, a.time.minuteDB);
                bDateTime = new Date(b.date.yearDB, monthsList[b.date.monthDB] - 1, b.date.dayDB, b.time.hourDB, b.time.minuteDB);
                return aDateTime < bDateTime ? 1 : -1;
            });
            res.render('index', {
                heading: 'Headlines',
                articles: articles
            });
        }
    });
});
router.get('/latest/', (req, res) => {
    articles.find({}, (err, articles) => {
        if(err) {
            console.error(err);
        } else {
            articles.sort((a, b) => {
                monthsList = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
                aDateTime = new Date(a.date.yearDB, monthsList[a.date.monthDB] - 1, a.date.dayDB, a.time.hourDB, a.time.minuteDB);
                bDateTime = new Date(b.date.yearDB, monthsList[b.date.monthDB] - 1, b.date.dayDB, b.time.hourDB, b.time.minuteDB);
                return aDateTime < bDateTime ? 1 : -1;
            });
            res.render('index', {
                heading: 'Latest',
                articles: articles
            });
        }
    });
});
router.get('/economy/', (req, res) => {
    articles.find({ category: "economy" }, (err, articles) => {
        if(err) {
            console.error(err);
        } else {
            articles.sort((a, b) => {
                monthsList = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
                aDateTime = new Date(a.date.yearDB, monthsList[a.date.monthDB] - 1, a.date.dayDB, a.time.hourDB, a.time.minuteDB);
                bDateTime = new Date(b.date.yearDB, monthsList[b.date.monthDB] - 1, b.date.dayDB, b.time.hourDB, b.time.minuteDB);
                return aDateTime < bDateTime ? 1 : -1;
            });
            res.render('index', {
                heading: 'Economy',
                articles: articles
            });
        }
    });
});
router.get('/politics/', (req, res) => {
    articles.find({ category: "politics" }, (err, articles) => {
        if(err) {
            console.error(err);
        } else {
            articles.sort((a, b) => {
                monthsList = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
                aDateTime = new Date(a.date.yearDB, monthsList[a.date.monthDB] - 1, a.date.dayDB, a.time.hourDB, a.time.minuteDB);
                bDateTime = new Date(b.date.yearDB, monthsList[b.date.monthDB] - 1, b.date.dayDB, b.time.hourDB, b.time.minuteDB);
                return aDateTime < bDateTime ? 1 : -1;
            });
            res.render('index', {
                heading: 'Politics',
                articles: articles
            });
        }
    });
});
router.get('/sports/', (req, res) => {
    articles.find({ category: "sports" }, (err, articles) => {
        if(err) {
            console.error(err);
        } else {
            articles.sort((a, b) => {
                monthsList = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
                aDateTime = new Date(a.date.yearDB, monthsList[a.date.monthDB] - 1, a.date.dayDB, a.time.hourDB, a.time.minuteDB);
                bDateTime = new Date(b.date.yearDB, monthsList[b.date.monthDB] - 1, b.date.dayDB, b.time.hourDB, b.time.minuteDB);
                return aDateTime < bDateTime ? 1 : -1;
            });
            res.render('index', {
                heading: 'Sports',
                articles: articles
            });
        }
    });
});
router.get('/entertainment/', (req, res) => {
    articles.find({ category: "entertainment" }, (err, articles) => {
        if(err) {
            console.error(err);
        } else {
            articles.sort((a, b) => {
                monthsList = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
                aDateTime = new Date(a.date.yearDB, monthsList[a.date.monthDB] - 1, a.date.dayDB, a.time.hourDB, a.time.minuteDB);
                bDateTime = new Date(b.date.yearDB, monthsList[b.date.monthDB] - 1, b.date.dayDB, b.time.hourDB, b.time.minuteDB);
                return aDateTime < bDateTime ? 1 : -1;
            });
            res.render('index', {
                heading: 'Entertainment',
                articles: articles
            });
        }
    });
});
router.get('/editorial/', (req, res) => {
    articles.find({ category: "editorial" }, (err, articles) => {
        if(err) {
            console.error(err);
        } else {
            articles.sort((a, b) => {
                monthsList = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
                aDateTime = new Date(a.date.yearDB, monthsList[a.date.monthDB] - 1, a.date.dayDB, a.time.hourDB, a.time.minuteDB);
                bDateTime = new Date(b.date.yearDB, monthsList[b.date.monthDB] - 1, b.date.dayDB, b.time.hourDB, b.time.minuteDB);
                return aDateTime < bDateTime ? 1 : -1;
            });
            res.render('index', {
                heading: 'Editorial',
                articles: articles
            });
        }
    });
});
router.get('/article/:id', (req, res) => {
    articles.findById(req.params.id, (err, article) => {
        if(err) {
            console.error(err);
        } else {
            articles.find({ category: article.category }, (err, relArticlesList) => {
                if(err) {
                    console.error(err);
                } else {
                    relArticlesList.sort((a, b) => {
                        monthsList = {'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
                        aDateTime = new Date(a.date.yearDB, monthsList[a.date.monthDB] - 1, a.date.dayDB, a.time.hourDB, a.time.minuteDB);
                        bDateTime = new Date(b.date.yearDB, monthsList[b.date.monthDB] - 1, b.date.dayDB, b.time.hourDB, b.time.minuteDB);
                        return aDateTime < bDateTime ? 1 : -1;
                    });
                    res.render('article', {
                        article: article,
                        relArticlesList: relArticlesList
                    });
                }
            });
        }
    });
});

module.exports = router;