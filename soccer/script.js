const mm = document.querySelector('.meterMarker'),
      fb = document.querySelector('.theBall'),
      ball_place = ['33%','44%','58%','73%','90%'],
      gt = document.querySelector('.goalText'),
      backingTrack = document.querySelector('#back_sound'),
      clapping = document.querySelector('#clapping'),
      kick_sound = document.querySelector('#kickSound')

let ball_distance = 0,
    mspeed = 3

function stopMeter() {  
  let gb_loc = gamebox.getBoundingClientRect(),
      gb_x = gb_loc.x
  
  back_sound.volume = .05
  clapping.volume = .25
  
  if(document.querySelector('.on_screen')) {
    back_sound.play()
    document.querySelector('.on_screen').remove()
  }

  if(mm.style.animationPlayState == 'paused'){
    mm.style.animationPlayState = 'running'
  } else {
    mm.style.animationPlayState = 'paused'
    kick_sound.play()
    let mm_loc = mm.getBoundingClientRect(),
        stop_point = (mm_loc.x + 10) - gb_x

    // do something to the ball
    if(stop_point > 148 && stop_point < 172) {
      // console.log("Good kick!")  
      fb.style.left = stop_point - 10 + 'px'            
      ball_distance++
      mspeed = mspeed - .5
      if(ball_distance > 4) {
        ball_distance = 0
        mspeed = 3
      }      

      gt.classList.add('showCongrats')
      clapping.play()
    } else {
      // console.log("doink!")
      fb.style.left = stop_point < 160 ? stop_point - 30 + 'px' : stop_point + 30 + 'px'
    }    

    fb.classList.add('ball_kicked')
    fb.style.top = '0px'    

    setTimeout(function(){     
      fb.classList.remove('ball_kicked')
      fb.style.left = ''
      fb.style.top = ball_place[ball_distance]

      document.body.style.setProperty('--meter-speed', mspeed + 's')
      mm.style.animationPlayState = 'running'

      gt.classList.remove('showCongrats')
      clapping.pause()
      clapping.currentTime = 0
      kick_sound.pause()
      kick_sound.currentTime = 0
    }, 3500)
  }
}

gamebox.addEventListener('click', stopMeter)