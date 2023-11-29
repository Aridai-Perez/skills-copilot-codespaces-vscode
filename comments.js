// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');
const moment = require('moment');
const { ensureAuthenticated } = require('../config/auth');

// Create comment
