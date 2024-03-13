<?php

/**
 * IMPORTANT: The API key is not in this code, as it's connected to a (paid) OpenAI account
 * You don't want others to use your API key. Ever.
 * @TODO Create a settings.php file in your webservice folder with API_KEY variable in this folder
 * It looks like this:
 * <?php
 * const API_KEY = '';
 */
require_once "settings.php";
require_once "includes/actions.php";

//Based on the GET parameter, 1 of the functions will be called
$endpoint = ($_GET['endpoint'] ?? '');
$apiUrl = 'https://api.openai.com/v1/' . $endpoint;
$data = match ($endpoint) {
    'models' => getModels($apiUrl),
    'chat/completions' => getChatCompletions($apiUrl, $_GET['question'] ?? ''),
    'images/generations' => getGeneratedImages($apiUrl, $_GET['prompt'] ?? ''),
    default => ['error' => ['message' => "You didn't provide any valid endpoint"]],
};

//Set the header & output JSON so the client will know what to expect.
header("Content-Type: application/json");
echo json_encode($data);
exit;
