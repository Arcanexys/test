const apiUrl = 'https://7103.api.greenapi.com';

async function getSettings() {
    const idInstance = document.getElementById('instanceId').value;
    const apiTokenInstance = document.getElementById('apiToken').value;
    const response = await fetch(`${apiUrl}/waInstance${idInstance}/getSettings/${apiTokenInstance}`);
    const data = await response.json();
    document.getElementById('responseTextArea').value = JSON.stringify(data, null, 2);
}

async function getStateInstance() {
    const idInstance = document.getElementById('instanceId').value;
    const apiTokenInstance = document.getElementById('apiToken').value;
    const response = await fetch(`${apiUrl}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
    const data = await response.json();
    document.getElementById('responseTextArea').value = JSON.stringify(data, null, 2);
}

async function sendMessage() {
    const idInstance = document.getElementById('instanceId').value;
    const apiTokenInstance = document.getElementById('apiToken').value;
    const phoneNumber = document.getElementById('phoneNumber').value + '@c.us';
    const textMessage = document.getElementById('textMessage').value;
    const response = await fetch(`${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ chatId: phoneNumber, message: textMessage })
    });
    const data = await response.json();
    document.getElementById('responseTextArea').value = JSON.stringify(data, null, 2);
}

async function sendFileByUrl() {
    const idInstance = document.getElementById('instanceId').value;
    const apiTokenInstance = document.getElementById('apiToken').value;
    const phoneNumber = document.getElementById('phoneNumberFile').value + '@c.us';
    const urlFile = document.getElementById('urlFile').value;
    const fileName = urlFile.substring(urlFile.lastIndexOf('/') + 1);
    const response = await fetch(`${apiUrl}/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ chatId: phoneNumber, urlFile: urlFile, fileName: fileName })
    });
    const data = await response.json();
    document.getElementById('responseTextArea').value = JSON.stringify(data, null, 2);
}
