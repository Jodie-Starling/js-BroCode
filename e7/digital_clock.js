function updateClock() {
    const now = new Date();
    let hours = now.getHours(); 
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12; // Convert to 12-hour format
    hours = hours.toString().padStart(2,`0`); // // padStart to ensure two digits，第二位是字符串（0会自动转换为字符串）
    const minutes = now.getMinutes().toString().padStart(2,`0`);
    const seconds = now.getSeconds().toString().padStart(2,`0`);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById('digital-clock').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000); // 重复执行某个函数，这里是每秒更新一次时间