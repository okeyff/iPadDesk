navigator.getBattery().then(function(battery) {
    function updateAllBatteryInfo() {
        updateChargeInfo();
        updateLevelInfo();
    }

    updateAllBatteryInfo();

    battery.addEventListener('charginchange', function() {
        updateChargeInfo();
    })

    function updateChargeInfo() {
        console.log(battery.charging);
        if (battery.charging) {
            document.querySelector('#status').innerHTML = 'Заряжается';
            document.querySelector('#battery-level').classList.add('battery-animation');
        } else {
            document.querySelector('#status').innerHTML = 'Разряжается';
            document.querySelector('#battery-level').classList.remove('battery-animation');
        }
    }

    battery.addEventListener('levelchange', updateLevelInfo);

    function updateLevelInfo() {
        //battery.level
        console.log(battery.level)
        document.querySelector('#battery-level-digit').innerHTML = battery.level * 100 + '%';
        document.querySelector('#battery-level-').style.width = battery.level * 100 + '%';
    }
});