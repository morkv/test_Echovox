const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    Item.find()
        .sort({date: 1})
        .then(items => res.json(items));
});

// @route   GET SEARCH api/items
// @desc    SEARCH  Item
// @access  Public
// router.get('/search', (req, res) => {
//     const result = Item.filter(item => 
//         new RegExp(`^${req.query.name}`).test(item)
//     );
//     res.json(result);
    
//     var name = 'Document_2';
//     var query = {name: name};
//     Item.find(query).exec(function (err, author) {
//         if (err) {
//             res.send("Error")
//         } else {
//             res.json(author);
//         }
//     });
    
// });

// @route   POST api/items
// @desc    Create A Post
// @access  Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        desc: req.body.desc
    });

    newItem.save()
        .then(item => res.json(item))
});

// @route   DELETE api/items/:id
// @desc    Delete a Item
// @access  Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
});

module.exports = router;