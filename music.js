// var d = document.getElementById("drum");


// function DrumAudio() {
//     return d.paused ? d.play() : d.pause();
//   };




// var f = document.getElementById("flute");
// function FluteAudio() {
//     return H.paused ? H.play() : H.pause();
//   };



// // c


// var H = document.getElementById("flute");
// function HarmoniumAudio() {
//     return H.paused ? H.play() : H.pause();
//   };




// // c

// var M = document.getElementById("flute");
// function MarcasAudio() {
//     return M.paused ? M.play() : M.pause();
//   };




// // c

// var T = document.getElementById("flute");
// function TablaAudio() {
//     return T.paused ? T.play() : T.pause();
//   };




// // c

// var V = document.getElementById("violin");
// function violinAudio() {
//     return V.paused ? V.play() : V.pause();
//   };


// // c

// // 2 example
// const playSound = (value) => {
//     let audio = document.querySelectorAll(".audio");
//     for (let i = 0; i < 4; i++) {
//       if (value == i) {
//         audio[i].play();
//       } else {
//         audio[i].pause();
//      }
     
//     }
  
// };

// // const data ={
// //     name: 'deepak',
// //     adress:{
// //         flatno:'123',
// //         area : 'ave',
// //     },
// //     age : '27,'
// // }
// // const data2 = {...data};
// // data2.name= 'deep';
// // data2.adress.flatno = '321'

// // console.log(data);
// // console.log(data2);


const playSound = (value) => {
  let audio = document.querySelectorAll(".audio");
  for (let i = 0; i < 8; i++) {
    if (value == i) {
      audio[i].play();
    } else {
      audio[i].pause();
    }
  }
};

function reset() {
  // Since playSound is a function and not an object, there's no 'reset' method
  // To stop all audio, calling playSound with a value that represents "reset" can be done
  playSound(-1); // Assuming -1 is used to reset all sounds in the function
}

reset();
