<!DOCTYPE html>
<html lang="en">

<!-- Copyright (C) 2020-Present  Liam Siira <Liam@Siira.us>	-->
<!-- This file is part of https://www.siira.us				-->
<!-- This code can not be copied and/or distributed			-->
<!-- without the express permission of Liam Siira			-->

<head>
	<title>Echo</title>
	<meta name="description" content="Echo - A concentrated (ES6) library for Ajax requests.">
	
	<!-- Common Head -->
	<?php include '/var/www/html/util/assets/php/head.php'; ?>

	<!-- Favicon -->
	<?php include '/var/www/html/util/assets/php/favicon.php'; ?>

</head>

<body class="language-js">
	<canvas id="synthetic"></canvas>
	<header class="fade3">
		<?php include '/var/www/html/util/assets/php/logo.php'; ?>
		<brand>
			<h1>Echo</h1>
			<span>A concentrated (ES6) library for Ajax requests.</span>
		</brand>
	</header>

	<main class="fade3">
		<section id="intro">
			<h2>About</h2>

			<p>
				Echo is a compact library for making Ajax requests, built off of <a href="https://github.com/WeideMo/miniAjax">WeideMo's MiniAjax</a> Weighing in at under <b>100 lines</b> of code, Echo provides a convenient interface for Ajax requests, both GET and POST. It also provides innate JSON parsing where possible. Echo was built in order to be used as a compact and intuitive Ajax library for development on the <a href="https://www.athos.io/">Atheos IDE</a>, however it's proved so valuable as to become it's own mini library. Echo returns the XMLHttpRequest in order to faciliate aborts, and encourage further customization. Only the URL is required in order to send an Echo; All other options are optional and the type defaults to <code>POST</code>.
			</p>
			<p>
				Echo uses the MIT License
			</p>
			<a href="https://github.com/hlsiira/Echo" class="btn download">Download on Github</a>

		</section>

		<section id="features">
			<h2>Features</h2>

			<p>
				<strong>Pleasently Parsed: </strong>Echo automatically tries to parse JSON replies.
			</p>
			<p>
				<strong>Crazily Condensed: </strong>The minified version is less than ~1K, roughly 500b gzipped.
			</p>
			<p>
				<strong>Easily Extensible: </strong>Echo is easily modifyable to meet your needs.
			</p>
		</section>


		<section id="overall">
			<h2>Usage</h2>

			<div class="argTable">
				<table>
					<tr>
						<th>Argument</th>
						<th>Required</th>
						<th>Type</th>
					</tr>
					<tr>
						<td>url</td>
						<td><code>true</code></td>
						<td><code>string</code></td>
					</tr>
					<tr>
						<td>type</td>
						<td><code>false</code></td>
						<td><code>["POST" || "GET"]</code></td>
					</tr>
					<tr>
						<td>data</td>
						<td><code>false</code></td>
						<td><code>object</code></td>
					</tr>
				</table>
				<table>
					<tr>
						<th>Argument</th>
						<th>Required</th>
						<th>Type</th>
					</tr>
					<tr>
						<td>timeout</td>
						<td><code>false</code></td>
						<td><code>integer</code></td>
					</tr>
					<tr>
						<td>success</td>
						<td><code>false</code></td>
						<td><code>function</code></td>
					</tr>
					<tr>
						<td>failure</td>
						<td><code>false</code></td>
						<td><code>function</code></td>
					</tr>
				</table>
			</div>
			<pre><code>
				echo({
				url: "./testXhr.php",                // Destination URL
				type: "POST",                        // Request Type: POST (default) or GET
				data: { name: "WeideMo", age: 26 },  // Data sent to the server
				timeout: 5000,						 // Time in Milliseconds
				success: function (reply, httpResponseCode) {
				// Function called on success
				},
				failure: function (reply, httpResponseCode) {
				// Function called on failure
				}
				});
			</code></pre>
			<p>
				Returns <code>XMLHttpRequest</code>
			</p>

		</section>
	</main>

	<footer class="fade3">
		<small>&copy; Copyright 2020, Liam Siira</small>
	</footer>

	<shadow class="fade6"></shadow>

	<script type="text/javascript" src="cdn/javascript.php?js=main|prism|synthetic"></script>

</body>

</html>