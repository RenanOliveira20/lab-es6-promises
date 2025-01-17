// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }
const table = document.querySelector('#table')
// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                let steakImg = document.createElement('img')
                steakImg.setAttribute('src','./public/images/steak.jpg' )
                table.appendChild(steakImg)
              })
            })
          })
        })
      })
    })
  })
});



// // Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(()=>{
    addFood(mashPotatoes[2], '#mashPotatoes').then(()=>{
      addFood(mashPotatoes [3], '#mashPotatoes').then(()=>{
        addFood(mashPotatoes [4], '#mashPotatoes').then(()=>{
          let mashPotatoesImg = document.createElement('img')
            mashPotatoesImg.setAttribute('src','./public/images/mashPotatoes.jpg' )
              table.appendChild(mashPotatoesImg)
        })
      })
    })
  })
});
// Iteration 3 using async/await

  async function makeFood(step) {
     // ... your code here
    for(let i = 0; i < step.length ; i += 1){
       await addFood(step[i], '#brusselSprouts') 
     }
    let brusselSproutsImg = document.createElement('img')
    brusselSproutsImg.setAttribute('src','./public/images/brusselSprouts.jpg' )
    table.appendChild(brusselSproutsImg)
  }
  makeFood(brusselSprouts);