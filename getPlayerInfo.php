<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $playerName = $_POST['playerName'];
    
    // Get player UUID
    $uuidUrl = "https://api.mojang.com/users/profiles/minecraft/$playerName";
    $uuidData = file_get_contents($uuidUrl);
    $uuidJson = json_decode($uuidData, true);
    
    if (isset($uuidJson['id'])) {
        $playerUUID = $uuidJson['id'];
        
        // Get player information
        $playerInfoUrl = "https://sessionserver.mojang.com/session/minecraft/profile/$playerUUID";
        $playerInfoData = file_get_contents($playerInfoUrl);
        $playerInfoJson = json_decode($playerInfoData, true);
        
        if (isset($playerInfoJson['properties'][0]['value'])) {
            $playerSkinData = $playerInfoJson['properties'][0]['value'];
            echo "<h3>플레이어 닉네임: $playerName</h3>";
            echo "<img src='https://crafatar.com/skins/$playerUUID' alt='플레이어 스킨'>";
        } else {
            echo "<p>플레이어 정보를 찾을 수 없습니다.</p>";
        }
    } else {
        echo "<p>플레이어 UUID를 찾을 수 없습니다.</p>";
    }
}
?>
