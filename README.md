# AJAX Upload with Progress Track

Small script to and html file to upload file to webserver asynchronously with AJAX

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

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

In script.js the progressRenderer function is the action taken when the progress changes. Make your action for progress change here.
Like updating a progress bar etc.


