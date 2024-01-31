<?php

namespace YourApp;

require 'vendor/autoload.php';
require 'fetch_mf2.php';

use Mf2;

$data = fetch_data('https://tetov.se');

$cleaned_data = remove_cache_string($data);
$expected_data = file_get_contents(__DIR__ . '/mf2.json.spec');

// Compare the fetched data with the expected data
if ($cleaned_data === $expected_data) {
    echo "The fetched data matches the expected data.\n";
    exit(0);
} else {
    echo "The fetched data does not match the expected data.\n";
    exit(1);
}
