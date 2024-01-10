const serverIp2 = 'Aweek.feathermc.gg';
const serverPort2 = '25565';
const serverIconElement2 = document.getElementById('serverIcon2');
const serverInfoElement2 = document.getElementById('serverInfo2');

function queryServer2() {
    const url2 = `https://api.mcsrvstat.us/2/${serverIp2}:${serverPort2}`;

    fetch(url2)
        .then(response => response.json())
        .then(data => {
            if (data.online) {
                serverInfoElement2.innerHTML = `
                    <h3>서버 상태: 온라인</h3>
                    <h3>온라인 플레이어 수: ${data.players.online}/${data.players.max}</h3>
                    <h3>서버 버전: ${data.version}</h3>
                `;
            } else {
                serverInfoElement2.innerHTML = `
                    <h3>서버 상태: 오프라인</h3>
                `;
            }
        })
        .catch(error => {
            serverInfoElement2.innerHTML = '<p class="error-message">서버 정보를 가져오는 중 오류가 발생했습니다.</p>';
            console.error('서버 정보를 가져오는 중 오류:', error);
        });
}
queryServer2();
setInterval(queryServer2, 60000);
