const xml = '<book><title>Sample Title</title><author>Achmad Iqsan</author></book>';

const xmlobject = (new DOMParser()).parseFromString(xml,"text/xml");

const title = xmlobject.querySelector('title').textContent;
const author = xmlobject.querySelector('author').textContent;

console.log('Title : ', title);
console.log('Author : ', author);

const xml2 = '<book><title>Percobaan 2</title><author>Near Kendari</author></book>';

const xmlobject2 = (new DOMParser()).parseFromString(xml2,"text/xml");

title2	=xmlobject2.getElementsByTagName('title')[0].firstChild.nodeValue;
author2	=xmlobject2.getElementsByTagName('author')[0].firstChild.nodeValue;

console.log('Title : ', title2);
console.log('Author : ', author2);

