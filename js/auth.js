var Act ={	_: function()	{		var query = $(location).attr('search');		var params = query.split('=');		if (params[1] === undefined || params[1] !== 'alt-emeth') {			location.href = './unauth.html';		}	},};$(function(){	Act._();});