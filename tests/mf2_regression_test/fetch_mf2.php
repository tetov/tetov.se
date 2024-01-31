<?php

namespace YourApp;

require 'vendor/autoload.php';

use Mf2;

function remove_cache_string($json)
{
    $pattern = '/\?v=[A-Za-z0-9]+/';
    return preg_replace($pattern, '', $json);
}

function fetch_data($url)
{
    $mf = Mf2\fetch($url);
    return json_encode($mf, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
}

if (!debug_backtrace()) {
    // Check if URL is provided
    if (!isset($argv[1])) {
        echo "Usage: php fetch_mf2.php <url>\n";
        exit(1);
    }

    echo remove_cache_string(fetch_data($argv[1]));
}
