//////////////////////////////////////////////////////////////////////////////80
// Echo
//////////////////////////////////////////////////////////////////////////////80
// Copyright (c) Liam Siira (Siira.us), distributed as-is and without
// warranty under the modified License: MIT - Hippocratic 1.2: firstdonoharm.dev
// See [root]/license.md for more. This information must remain intact.
//////////////////////////////////////////////////////////////////////////////80
// Notes:
// Echo was built specifically for Atheos and as such may not be suitable for
// other uses, but Echo is incredibly versitile and configurable. I suggest
// looking at older versions of this file, or grabbing the original source that
// I used as a starter if you're looking to use this elsewhere.
// Source: https://github.com/WeideMo/miniAjax
//												- Liam Siira
//////////////////////////////////////////////////////////////////////////////80

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], function() {
			return factory(root);
		});
	} else if (typeof exports === 'object') {
		module.exports = factory(root);
	} else {
		root.echo = factory(root);
	}
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function(window) {

	'use strict';

	function formatParams(data, random) {
		var arr = [];
		if (!data && typeof data !== 'object') return;
		for (var name in data) {
			arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
		}
		if (random) arr.push(("v=" + Math.random()).replace(".", ""));
		return arr.join('&');
	}

	const echo = function(options) {
		options = options || {};
		options.type = options.type || ((options.data) ? 'POST' : 'GET');

		var params = formatParams(options.data, options.random);
		var xhr;

		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else {
			xhr = new ActiveXObject('Microsoft.XMLHTTP');
		}

		if (options.timeout) {
			xhr.timeout = options.timeout;
			xhr.ontimeout = options.failure;
		}

		xhr.onload = function() {
			var data = xhr.responseText;
			try {
				data = JSON.parse(data);
			} catch (e) {}
			if (xhr.status >= 200 && xhr.status < 300) {
				if (options.success) {
					options.success(data, xhr.status);
				}
			} else {
				if (options.failure) {
					options.failure(data, xhr.status);
				}
			}
		};

		if (options.type === 'GET') {
			params = params ? '?' + params : '';
			xhr.open('GET', options.url + params, true);
			xhr.send(null);
		} else if (options.type === 'POST') {
			xhr.open('POST', options.url, true);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.send(params);
		}

		return xhr;

	};
	return echo;
});