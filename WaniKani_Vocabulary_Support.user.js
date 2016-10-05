// ==UserScript==
// @name        WaniKani Vocabulary Support
// @namespace   wanikani
// @description Adds useful links to the vocab pages
// @include     http*.wanikani.com/vocabulary/*
// @include     http*.wanikani.com/level/*/vocabulary/*
// @version     1
// @grant       none
// ==/UserScript==

var vocab = document.getElementsByClassName('vocabulary-icon')[0].firstChild.innerHTML;

var url1 = 'http://eow.alc.co.jp/search?q=' + encodeURIComponent(vocab) + '&ref=sa';
var info1 = document.getElementsByClassName('page-list')[0].getElementsByTagName('ul')[0];
var alc = document.createElement('li');
alc.innerHTML = '<a target="_alcVocab" href="' + url1 + '">ALC</a>';
info1.appendChild(alc);

var url2 = 'http://dictionary.goo.ne.jp/srch/en/' + encodeURIComponent(vocab) + '/m1u/';
var info2 = document.getElementsByClassName('page-list')[0].getElementsByTagName('ul')[0];
var goo = document.createElement('li');
goo.innerHTML = '<a target="_alcVocab" href="' + url4 + '">Goo</a>';
info2.appendChild(goo);

var url3 = '' + encodeURIComponent(vocab) + '&ref=sa';
var info3 = document.getElementsByClassName('page-list')[0].getElementsByTagName('ul')[0];
var jisho = document.createElement('li');
jisho.innerHTML = '<a target="_alcVocab" href="' + url1 + '">Jisho</a>';
info3.appendChild(jisho);

var url4 = '' + encodeURIComponent(vocab) + '/m1u/';
var info4 = document.getElementsByClassName('page-list')[0].getElementsByTagName('ul')[0];
var tangorin = document.createElement('li');
tangorin.innerHTML = '<a target="_alcVocab" href="' + url4 + '">Tangorin</a>';
info4.appendChild(tangorin);

var url5 = '' + encodeURIComponent(vocab) + '&ref=sa';
var info5 = document.getElementsByClassName('page-list')[0].getElementsByTagName('ul')[0];
var weblio = document.createElement('li');
weblio.innerHTML = '<a target="_alcVocab" href="' + url1 + '">Weblio</a>';
info5.appendChild(weblio);