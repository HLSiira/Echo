
<div align="center">
    <h1><a href="https://github.com/hlsiira/Echo">Echo</a> </h1>
</div>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

</div>

## About
Echo is a concentrated library for making Ajax requests, built off of <a href="https://github.com/WeideMo/miniAjax">WeideMo's MiniAjax</a>. Weighing in at under <b>100 lines</b> of code, Echo provides a convenient interface for Ajax requests, both GET and POST. It also provides innate JSON parsing where possible. Echo was built in order to be used as a compact and intuitive Ajax library for development on the <a href="https://www.athos.io/">Atheos IDE</a>, however it's proved so valuable as to become it's own mini library. Echo returns the XMLHttpRequest in order to faciliate aborts, and encourage further customization. Only the URL is required in order to send an Echo; All other options are optional and the type defaults to <code>POST</code>.

## Features
<p><code>Pleasently Parsed:</code> Echo automatically tries to parse JSON replies.</p>
<p><code>Crazily Condensed:</code> The minified version is less than ~1K, roughly 500b gzipped.</p>
<p><code>Easily Extensible:</code> Echo is easily modifyable to meet your needs.</p>

## Usage
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

Below is the typical structure for utilizing sending an Echo:

```javascript

document.addEventListener('DOMContentLoaded', function() {
	'use strict';
	echo.setHeaders({
		'x-csrf-token': '<?php echo(CSRFTOKN) ?>'
	});
});

echo({
    url: "./testXhr.php",                // Destination URL
    type: "POST",                        // Request Type: POST (default) or GET
    data: { name: "WeideMo", age: 26 },  // Data sent to the server
    timeout: 5000,						 // Time in Milliseconds
    settled: function (reply, httpResponseCode) {
        // Function called on either success or failure
    },    
    success: function (reply, httpResponseCode) {
        // Function called on success
    },
    failure: function (reply, httpResponseCode) {
        // Function called on failure
    }
});
```