
/*
 * GET home page.
 */
var profiles = require('../profiles/profiles.js');
exports.index = function (req, res) {
    //res.render('index', { title: 'Express' });
    res.render('index', { title: 'Profiles', profiles: profiles });
};

exports.anypageAdmin = function (req, res) {
    var ope = req.params.admin;
    if (ope) {
        if (['add', 'delete'].indexOf(ope) !== -1) {
            if (ope === 'add') {
                ope = '追加';
            } else {
                ope = '削除';
            }
            res.send('こんにちは。 Mr. ' + req.params.page + 'を' + ope + 'しますか？');
            return;
        }
        res.send(404);
    }
};

exports.mrpage = function (req, res) {
    res.send('こんにちは。Mr Pageです。');
};

exports.anypage = function (req, res) {
    res.send('こんにちは。 Mr. ' + req.params.page + 'です');
};

exports.anypage2 = function (req, res) {
    var subpage = req.params[0];
    var parentPage = subpage ? req.params.book + 'の' : '';
    res.send(parentPage + (subpage || req.params.book) + 'へようこそ');

}