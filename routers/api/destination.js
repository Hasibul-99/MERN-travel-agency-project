const express =  require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth  = require('../../middleware/auth');
const Destination = require('../../models/Destination');


// @route   GET api/destination
// @dosc    Get destination
// @access  private
router.get('/', auth, async (req, res) => {
    try {
        let query = {};
        const reqQuery = {
            ...req.query
        };

        // Fields to exclude
        const removeFields = ["select", "sort", "page", "limit"];

        // Loop over removeFields and delete them from reqQuesry
        removeFields.forEach((param) => delete reqQuery[param]);

        // Create query string
        let queryStr = JSON.stringify(reqQuery);

        // Create operators ($get, $get, etc)
        queryStr = queryStr.replace(
            /\b(gt|gte|lt|lte|in)\b/g,
            (match) => `$${match}`
        );

        console.log("queryStr", queryStr);

        query = Destination.find(JSON.parse(queryStr));

        //Select Fields
        if (req.query.select) {
            const fields = req.query.select.split(",").join(" ");
            query = query.select(fields);
        }

        // Sort
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy);
        } else {
            query = query.sort("-createdAt");
        };

        //Pagination
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 25;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const total = await Destination.countDocuments();

        query = query.skip(startIndex).limit(limit);

        // Executing result
        const destinations = await query;

        // Pagination result
        const pagination = {};

        if (endIndex < total) {
            pagination.next = {
                page: page + 1,
                limit,
            };
        }

        if (startIndex > 0) {
            pagination.prev = {
                page: page - 1,
                limit,
            };
        }

        res.status(200).json({
            success: true,
            count: destinations.length,
            pagination: pagination,
            data: destinations,
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


// @route   POST api/destination
// @dosc    current new destination
// @access  private
router.post('/', [auth, [
    check('title', 'Title is required').not().isEmpty(),
    check('category', 'Category is required').not().isEmpty(),
    check('startOn', 'Start date is required').not().isEmpty(),
    check('endOn', 'End date is required').not().isEmpty(),
    check('bookinkLastDate', 'Booking last Date is required').not().isEmpty(),
    check('address', 'Address is required').not().isEmpty(),
    check('country', 'Country is required').not().isEmpty(),
    check('city', 'City is required').not().isEmpty(),
    check('zipCode', 'Zip code is required').not().isEmpty(),
]], async (req, res) => {
   const errors = validationResult(req);

   if (!errors.isEmpty()) {
       return res.status(400).json({errors: errors.array()});
   };

   const {
    title, category, keywords, status, description, phone, website,
    email, startOn, endOn, bookinkLastDate, address, country, city, state, zipCode,
    youtube, facebook, twitter, instagram
   } = req.body;

   // build Destination object

   const destinationFields = {};

   destinationFields.createdBy = req.user.id;
   if (title) destinationFields.title = title;
   if (website) destinationFields.website = website;
   if (category) destinationFields.category = category;
   if (description) destinationFields.description = description;
   if (status) destinationFields.status = status;
   if (phone) destinationFields.phone = phone;
   if (email) destinationFields.email = email;
   if (startOn) destinationFields.startOn = startOn;
   if (endOn) destinationFields.endOn = endOn;
   if (bookinkLastDate) destinationFields.bookinkLastDate = bookinkLastDate;
   if (address) destinationFields.address = address;
   // keywords - Spilt into array
   if (keywords) {
    destinationFields.keywords = keywords.split(',');
   }

   //Location
   destinationFields.location = {
    country: country || '',
    city: city || '',
    state: state || '',
    zipCode: zipCode || ''
   };

   // Social
   destinationFields.social = {};
   if (youtube) destinationFields.social.youtube = youtube;
   if (twitter) destinationFields.social.twitter = twitter;
   if (facebook) destinationFields.social.facebook = facebook;
   if (instagram) destinationFields.social.instagram =  instagram;

   try {
       destination = new Destination(destinationFields);
       await destination.save();
       res.json(destination);

   } catch (err) {
       console.error(err.message);
       res.status(500).send('Server Error'); 
   }

});

module.exports = router;