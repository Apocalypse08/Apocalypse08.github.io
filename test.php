<?php
$token = "MTE5NDUzNzA0OTUxMzAwOTIyMg.G-daqP.oT0FHs6jO8iRNhJUaOLEmTkW6TburyojgbTzyY";
$channelId = "1107451760030793728";

// 디스코드 API 엔드포인트
$apiEndpoint = "https://discord.com/api/v10/channels/$channelId/messages";

// API 요청 헤더
$headers = [
    "Authorization: Bot $token"
];

// CURL을 사용하여 API 요청
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $apiEndpoint);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// API 응답 받기
$response = curl_exec($ch);

// CURL 세션 닫기
curl_close($ch);

// JSON 형태로 응답 출력
echo $response;
?>
