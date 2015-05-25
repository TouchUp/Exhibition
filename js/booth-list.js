"use strict";

var w = document.getElementById('subpages');
var divs = w.querySelectorAll('div');

function hide (n) {
	classie.add(n, 'hidden');
}
Array.prototype.map.call(divs, hide);

/*Code to show one element, and hide the other */

function toggleVis (show) {
	classie.refresh(document.getElementById('wrapper'), 'hidden');
	var x = document.getElementById(show);
	Array.prototype.map.call(divs, hide);
	classie.remove(x, 'hidden');
}

/* Code for List.js */

var options = {
    item: '<li onclick = "showInfo(this)"><h3 class="name"></h3><p class="category"></p></li>'
};

var values = [
    { name: 'Imcomp International', category: 'Electronics', no: '230',
        bio: 'Established in 1998, Imcomp International strives to design and produce cool, high-tech products which can be used to improve people\'s daily lives. That\'s why our team puts people first when creating innovative, high-quality wireless devices and accessories.'}, 
    { name: 'Tesla Motors', no: '001', category: 'Electronics', 
        bio: 'Tesla Motors was founded in 2003 by a group of engineers in Silicon Valley who wanted to prove that electric cars could be better than gasoline-powered cars. With instant torque, incredible power, and zero emissions, Tesla\'s products would be cars without compromise. Each new generation would be increasingly affordable, helping the company work towards its mission: to accelerate the world\'s transition to sustainable transport.' },
    { name: 'NTUC FairPrice', no: '150', category: 'Groceries' },
    { name: 'Transformers', category: 'Electronics' },
    { name: 'Lorem Ipsum', category: 'Miscellaneous' },
    { name: 'Ramen Ramen', category: 'Food and Beverage' },
    { name: 'Cheap Bricks', category: 'Construction' },
];

var boothList = new List('booth-list', options, values);

function showInfo(item) {
		
	//Shows the booth-info div
	toggleVis('booth-info');

    var booth_name = item.childNodes[0].innerHTML;
    
    function getBooth(e) {
        if (e.name === booth_name) {
            return true;
        }
        else return false;
    }
    
    var booth = values.filter(getBooth);
    
    console.log(booth);
    
    document.getElementById('booth-name').innerHTML = booth_name;
    document.getElementById('booth-bio').innerHTML = booth[0].bio;
    document.getElementById('booth-no').innerHTML = 'Booth Number: ' + booth[0].no;
	document.getElementById('navbar').innerHTML =  "<button onclick = 'toggleVis(" + '"wrapper"' + ")'> Booth List </button> ";
}

/* ------------------------ */