const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0


const botSay = (data) => {
  return[
    "Hallo!, My name is digibot. what your's name?",
    `Hallo ${data?.nama} how years old?`,
    `Ohh ${data?.usia} what's your hobby?`,
    `wow we have a same hobby, my hobby ${data?.hobi} too, btw you have a bf/gf?`,
    `ohhh ${data?.pacar} if so we're done`,
  ]
}

pertanyaan.innerHTML = botSay()[0]
let usersData = []

function botStart() {
    init++
    if(init === 1) {
    botDelay({ nama: jawaban.value }) 
    } else if(init === 2) {
     botDelay({ usia: jawaban.value })
    } else if (init === 3){
     botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
    botDelay({ pacar : jawaban.value }) 
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    console.log({ usersData: usersData})
    setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, [1500])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
   pertanyaan.innerHTML = `Thank u ${usersData[0]} for visited to digibot :) `
   jawaban.value = "siap thanks juga!"
}

function botEnd() {
  window.location.reload()
}