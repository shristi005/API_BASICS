document.getElementById('get-activity').addEventListener('click', () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            document.getElementById("activity-name").textContent = data.activity
            document.getElementById('lets-do-this').classList.remove('hidden')
        })
})