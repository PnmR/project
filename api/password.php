<?php
function generatePswd(){
    return "generatedPswd123";
}

$pswd = array("pswd" => generatePswd());

echo json_encode($pswd);

?>