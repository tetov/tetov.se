<?php

namespace YourApp;

require 'vendor/autoload.php';

use Mf2;

// (Above code (or equivalent) assumed in future examples)

$mf = Mf2\fetch('https://tetov.se');
$mf_json = json_encode($mf, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

$pattern = "/(\?v=|email-protection#)[\d\w]+/";
echo preg_replace($pattern, "", $mf_json);
