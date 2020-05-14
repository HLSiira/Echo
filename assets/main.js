document.addEventListener("DOMContentLoaded", function() {
	if (window.console && window.console.log) {
		window.console.log([
			"",
			"╭───────────────────────────────╮",
			"│                               │",
			"│  Hi, I'm Liam Siira.          │",
			"│  Want to get in touch?        │",
			"│  Contact me at liam@siira.us. │",
			"│                               │",
			"╰───────────────────────────────╯"
		].join("\n"));
	}
	if (synthetic) {
		synthetic.init();
	}

	var nav = document.querySelector('#links');

	if (nav) {
		var links = document.querySelectorAll('section'),
			html = '',
			title;
		for (var i = 0; i < links.length; i++) {
			title = links[i].querySelector('h3');
			if (links[i].id && title) {
				html += '<li><a href="#' + links[i].id + '">' + title.innerText + '</a></li>';
			}
		}
		nav.innerHTML = html;
	}

	Prism.highlightAll();

});