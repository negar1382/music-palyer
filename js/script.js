let audioElem = document.querySelector('audio')

let musics = [
    'http://127.0.0.1:5500/musicPlayer/musics/Ali%20Zand%20Vakili%20-%20Raghse%20Sayeha%20(320).mp3',
    'http://127.0.0.1:5500/musicPlayer/musics/Ali%20Zand%20Vakili%20-%20Delvapasi%20(320).mp3',
    'http://127.0.0.1:5500/musicPlayer/musics/Ali%20Zand%20Vakili%20-%20Ghamgin%20Tarin%20(320).mp3',
    'http://127.0.0.1:5500/musicPlayer/musics/Ali%20Zand%20Vakili%20-%20Shabe%20Masti%20(320).mp3'
] 

function backHandler(){
    console.log('back')
    let now_s = audioElem.currentTime
    audioElem.currentTime = now_s-5
}

function previousHandler(){
    console.log('previous')
    musics.forEach(function(link){
        if(link == audioElem.src){
            if(musics.indexOf(link)-1 < 0){
                audioElem.src = 3
            }
            else{
                audioElem.src = musics.indexOf(link)-1
            }
        }
    })
}


function playHandler(){
    console.log('play')
    audioElem.play()
}

function pauseHandler(){
    console.log('pause')
    audioElem.pause()
}

function nextHandler(){
    console.log('next')
    // console.log(musics.length)
    musics.forEach(function(link){
        if(link == audioElem.src){
            if(musics.indexOf(link)+1 > musics.length-1){
                audioElem.src = 0
            }
            else{
                audioElem.src = musics.indexOf(link)+1
            }
        }
    })
}

function quickHandler(){
    console.log('quick')
    let x = 1
    if(x = 2){
        audioElem.playbackRate = 1
        x = 1
    }
    else{
        audioElem.playbackRate = 2
        x = 2
    }
}

function overHandler(){
    console.log('over')
    let now_s = audioElem.currentTime
    audioElem.currentTime = now_s+5
}

