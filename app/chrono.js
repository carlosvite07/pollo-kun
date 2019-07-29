(() => {

  let hours = [`00`,`00`],
      minutes = [`00`,`00`],
      seconds = [`00`,`00`],
      chronometerDisplay1 = document.querySelector(`[data-chronometer1]`),
      chronometerDisplay2 = document.querySelector(`[data-chronometer2]`),
      chronometerCall

  function chronometer(index) {

    seconds[index] ++
    console.log(seconds[index])

    if (seconds[index] < 10) seconds[index] = `0` + seconds[index]

    if (seconds[index] > 59) {
      seconds[index] = `00`
      minutes[index] ++

      if (minutes[index] < 10) minutes[index] = `0` + minutes[index]
    }

    if (minutes[index] > 59) {
      minutes[index] = `00`
      hours[index] ++

      if (hours[index] < 10) hours[index] = `0` + hours[index]
    }

    if(index == 0){
      chronometerDisplay1.textContent = `${hours[index]}:${minutes[index]}:${seconds[index]}`
    }else {
      chronometerDisplay2.textContent = `${hours[index]}:${minutes[index]}:${seconds[index]}`
    }

  }

  play1.onclick = (event) => {
    chronometerCall1 = setInterval(chronometer(0), 1000)
    event.target.classList.add(`d-none`)
    reset1.classList.remove(`d-none`)
  }

  play2.onclick = (event) => {
    chronometerCall2 = setInterval(chronometer(1), 1000)
    event.target.classList.add(`d-none`)
    reset2.classList.remove(`d-none`)
  }

  reset1.onclick = () => {
    clearInterval(chronometerCall1)
    event.target.classList.add(`d-none`)
    play1.classList.remove(`d-none`)
    chronometerDisplay1.textContent = `00:00:00`
      hours = `00`,
      minutes = `00`,
      seconds = `00`
  }

  reset2.onclick = () => {
    clearInterval(chronometerCall2)
    event.target.classList.add(`d-none`)
    play2.classList.remove(`d-none`)
    chronometerDisplay2.textContent = `00:00:00`
      hours = `00`,
      minutes = `00`,
      seconds = `00`
  }

})()
