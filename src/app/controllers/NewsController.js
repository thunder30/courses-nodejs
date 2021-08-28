
class NewsController {

    // [GET] /news
    index(req, res) {
        res.render('news');                
    }

    // [GET] /news/detail
    show(req, res) {
        res.send('News detail');        
    }

    // [GET] /news/:slug
    slug(req, res) {
        res.send('Randomm url');        
    }

}

module.exports = new NewsController;