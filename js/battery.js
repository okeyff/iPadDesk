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
        if (battery.charging) {
            document.querySelector('#status').innerHTML = '<img id="battery-bolt" src="img/battery-bolt.png">';
            document.querySelector('#battery-level').classList.add('battery-animation');
        } else {
            document.querySelector('#battery-level').classList.remove('battery-animation');
        }
    }

    battery.addEventListener('levelchange', updateLevelInfo);

    function updateLevelInfo() {
        //battery.level
        document.querySelector('#battery-level-digit').innerHTML = battery.level * 100 + '%';
        document.querySelector('#battery-level').style.width = battery.level * 100 + '%';
    }
});