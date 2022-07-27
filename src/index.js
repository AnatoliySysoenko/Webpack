import './css/style.css';
import './less/style.less';
// import './lodash';
import './sass/style.sass';
import './sass/style.scss';
import '@babel/polyfill';
// import * as ReactDOM from 'react-dom/client';
// import $ from 'jquery';
import Post from './post';
// import React from 'react';
// import { Renderer } from 'react-dom';
import logo from '@assets/webpack_icon.png';

const post = new Post('Webpack Post Title', logo);

console.log('Post to string:', post.toString());
$('pre').html(post.toString());
