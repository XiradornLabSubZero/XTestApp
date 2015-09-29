/*
 * Testing app
 * @author: Sir Xiradorn
 */

/**
 * Function for initialize all the function in this app
 */

$(document).ready(function() {
	lifePointer();
	diceGen();
	resetPoint()
	resetDice()
});

/**
 * function lifePointer
 * function for increment / decrement PV vals
 */
var punto = $('.punto');
var tPV = $('#totalPV');

function lifePointer() {
	punto.on('click', function() {
		var point = parseFloat($(this).attr('point'));
		var t = tPV.html();
		var t = parseInt(t) + point;
		
		console.log(point);
		console.log(t);
		if (t >= 0) {
			tPV.html(t);
		} else {
			tPV.html('0');
		}
	});
};


/**
 * function diceGen
 * generate the dice random values
 */
var dice = $('.dice');

function diceGen() {
	dice.on('click', function() {
		if ($(this).attr('dice') == 'all') {
			var diceType = [4,6,8,10,12,20,100];
			var i = 0;
			
			while(diceType[i]) {
				var dicepoint = parseFloat($('[dice='+ diceType[i] +']').attr('dice'));
				var dicetarget = $('[dicetarget='+ dicepoint +']')
				
				if (diceType[i] == 10) {
					var diceRandVal = Math.floor(Math.random() * dicepoint);
				} else if (diceType[i] == 100) {
					var diceRandVal = Math.floor(Math.random() * 10) * 10;
				} else {
					var diceRandVal = Math.floor((Math.random() * dicepoint) + 1);
				}
				dicetarget.html(diceRandVal);
				i++
			}
		} else {
			var dicepoint = parseFloat($(this).attr('dice'));
			var dicetarget = $('[dicetarget='+ dicepoint +']')
			
			if (dicepoint == 10) {
				var diceRandVal = Math.floor(Math.random() * dicepoint);
			} else if (dicepoint == 100) {	
				var diceRandVal = Math.floor(Math.random() * 10) * 10;
			} else {
				var diceRandVal = Math.floor((Math.random() * dicepoint) + 1);
			}
			dicetarget.html(diceRandVal);
		}
	});
};

/**
 * function resetPoint e resetDice
 */

function resetPoint() {
	var resetBtn = $('.resetpoint');
	resetBtn.on('click', function() {
		tPV.html(resetBtn.attr('resetpoint'));
	});
};

function resetDice() {
	var resetBtn = $('.resetdice');
	resetBtn.on('click', function() {
		var diceType = [4,6,8,10,12,20,100];
		var i = 0;
		
		while(diceType[i]) {
			var dicetarget = $('[dicetarget='+ diceType[i] +']')
			
			dicetarget.html('-');
			i++
		}
	});
};