//////////////////////////////////////////////////////////////////////////////80
// Echo
//////////////////////////////////////////////////////////////////////////////80
// Copyright (c) 2021 Liam Siira (liam@siira.io), distributed as-is and without
// warranty under the MIT License. See [root]/license.md for more.
// This information must remain intact.
//////////////////////////////////////////////////////////////////////////////80
// Notes:
// Echo was built specifically for Atheos and as such may not be suitable for
// other uses, but Echo is incredibly versitile and configurable. I suggest
// looking at older versions of this file, or grabbing the original source that
// I used as a starter if you're looking to use this elsewhere.
// Source: https://github.com/WeideMo/miniAjax
//												- Liam Siira
//////////////////////////////////////////////////////////////////////////////80


(function(global) {
	'use strict';

	const echo = function(opt) {
		if (!opt || !opt.url) return;
		opt.type = opt.type || ((opt.data) ? 'POST' : 'GET');

		var xhr = new XMLHttpRequest(),
			data = opt.data ? [] : null;

		if (opt.data && typeof opt.data === 'object') {
			for (var name in opt.data) {
				data.push(encodeURIComponent(name) + '=' + encodeURIComponent(opt.data[name]));
			}
			if (opt.rnd) data.push(("v=" + Math.random()).replace(".", ""));
			data = data.join('&');
		}


		if (opt.settled) {
			opt.success = opt.settled;
			opt.failure = opt.settled;
		}

		if (opt.timeout) {
			xhr.timeout = opt.timeout;
			xhr.ontimeout = opt.failure;
		}

		xhr.onload = function() {
			var data = xhr.responseText;
			try {
				data = JSON.parse(data);
			} catch (e) {}
			if (xhr.status >= 200 && xhr.status < 300) {
				if (opt.success) {
					opt.success(data, xhr.status);
				}
			} else if (opt.failure) {
				opt.failure(data, xhr.status);
			}
		};

		if (opt.type === 'GET') {
			data = data ? '?' + data : '';
			xhr.open('GET', opt.url + data, true);
		} else if (opt.type === 'POST') {
			xhr.open('POST', opt.url, true);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		}

		xhr.send(data);
		return xhr;

	};
	global.echo = echo;
})(this);