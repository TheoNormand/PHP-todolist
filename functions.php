<?php

include_once 'config.php';

global $db;

$db->initialize();

$tasks = $db->getTasks();