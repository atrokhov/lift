current_floor = 1
floor = 1
button_click = "https://zvukipro.com/uploads/files/2019-01/1548225454_jg-032316-sfx-elevator-button.mp3"
lift_arrived = "https://zvukipro.com/uploads/files/2020-02/1582051444_420edcaee8cd0c9.mp3"

function tap(element) {
    audio = document.getElementById("audio")
    audio.src = button_click
    audio.play()

    if (current_floor == floor) {
        interval = undefined

        buttons = document.getElementsByClassName('button')

        for(const button of buttons){
            button.classList.remove("active")
        }

        element.classList.add("active")

        floor = parseInt(element.innerHTML)
        setActive(element)

        interval = setInterval(function(){
            if (floor < current_floor) {
                current_floor--
            } else if (floor > current_floor) {
                current_floor++
            }
            document.getElementById('floor').innerHTML = current_floor
            if (current_floor == floor){ 
                clearInterval(interval)
                audio.src = lift_arrived
                audio.play()
            }
        }, 1000, floor)
    }
}

function up_floor(element) {
    if(current_floor < 16) {
        current_floor++
        document.getElementById('floor').innerHTML = current_floor
        setActive(element)
        destroyActive(element)
    }
}

function down_floor(element) {
    if(current_floor > 1) {
        current_floor--
        document.getElementById('floor').innerHTML = current_floor
        setActive(element)
        destroyActive(element)
    }
}

function setActive(element) {
    element.classList.add("active")
}

function destroyActive(element) {
    setTimeout(function(){
        element.classList.remove("active")
    }, 200)
}