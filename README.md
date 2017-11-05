# AJAX Upload with Progress Track

Small script to and html file to upload file to webserver asynchronously with AJAX

## Getting Started

Download using git clone or the zip from Github. Place in root of webserver and test.
The code can be easily incorporated in any project. 

### Prerequisites

Should have a basic knowledge of PHP and jQuery. Only a little knowledge would do.
Get apache2 webserver or any other for fetching executed PHP

### Installing

It requires general webserver running PHP. Apache2 would do.

## Deployment

Change the lines in upload.php to set the pathname in which the folder will be saved
```
$target_dir = "uploads/";
$target_file = $target_dir . $path . basename($_FILES["fileToUpload"]["name"]);
```
Any constraints on file size or type can be set up through upload.php

In script.js the progressRenderer function is the action taken when the progress changes. Make your action for progress change here. Like updating a progress bar etc.

## For Using in other Projects
Just copy the files upload.php and script.js

Update upload.php for the path to store files

Include script.js from its location in index.php

The form part of index.php is to be included where  ever the facility is to be provided

If you do not use a jQuery file copy the file used here or just use a distribution repo. 
