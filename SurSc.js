document.addEventListener("DOMContentLoaded", function () {
    const serverIp = 'apo2073.feathermc.gg';
    const serverPort = '25565';
    const serverIconElement = document.getElementById('serverIcon');
    const serverInfoElement = document.getElementById('serverInfo');

    function queryServer() {
        const url = `https://api.mcsrvstat.us/2/${serverIp}:${serverPort}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.online) {
                    serverInfoElement.innerHTML = `
                        <h3>서버 상태: 온라인</h3>
                        <h3>온라인 플레이어 수: ${data.players.online}/${data.players.max}</h3>
                        <h3>서버 버전: ${data.version}</h3>
                    `;
                } else {
                    serverInfoElement.innerHTML = `
                        <h3>서버 상태: 오프라인</h3>
                    `;
                }
            })
            .catch(error => {
                serverInfoElement.innerHTML = '<p class="error-message">서버 정보를 가져오는 중 오류가 발생했습니다.</p>';
                console.error('서버 정보를 가져오는 중 오류:', error);
            });
    }
    queryServer();
    setInterval(queryServer, 60000);
});
