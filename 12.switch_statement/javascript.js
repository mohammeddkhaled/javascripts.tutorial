// const dayNumber = 0

// if (dayNumber ===0){
//     console.log('it is sunday today')
// }else if (dayNumber ===1){
//     console.log('it is monday today')
// }else if (dayNumber ===2){
//     console.log('it is tuesday today')
// }else if (dayNumber ===3){
//     console.log('it is wednesday today')
// }else if (dayNumber ===4){
//     console.log('it is thursday today')
// }else if (dayNumber ===5){
//     console.log('it is friday today')
// }else if (dayNumber ===6){
//     console.log('it is saturday today')
// }else{
//     console.log('please enter a valid Number')
// }


//          switch sratement


const dayNumber = 1


switch (dayNumber){
  case 0:
    console.log('it is sunday today')
    break
  case 1:
    console.log('it is monday today')
    break
  case 2:
    console.log('it is tuesday today')
    break
  case 3:
    console.log('it is wednesday today')
    break
  case 4:
    console.log('it is thursday today')
    break
  case 5:
    console.log('it is friday today') 
    break
  case 6: 
    console.log('it is saturday today')
    break
  default:
    console.log('please enter a valid Number')
    
}


const userName = 'khaled'
const userAge = 22



// if (userAge >=1  && userAge <=5 ){
//     console.log(`${userName} is a child`)
//     console.log(`${userName} is playing`)
// }
// else if(userAge <=18 && userAge >= 15){
//     console.log(`${userName} is a high school student`)
//     console.log(`${userName} is learning basic`)
// }
// else if (userAge >= 18 && userAge <=24){
//     console.log(`${userName} is a collage student`)
//     console.log(`${userName} is learning computer science`)
// }
// else if (userAge >= 24 && userAge <= 45){
//     console.log(`${userName} is a working professional`)
//     console.log(`${userName} is working on web development`)
// }
// else if (userAge >= 46 && userAge <100){
//     console.log(`${userName} is a retired `)
//     console.log(`${userName} is reading a news paper`)
// }
// else if (userAge >100){
//     console.log(`${userName} is a immortal`)
// }
// else {
//     console.log('please enter a valid age')
// }




switch (true){
   case (userAge >=1  && userAge <=5 ):
    console.log(`${userName} is a child`)
    console.log(`${userName} is playing`)
    break
   case (userAge <=18 && userAge >= 15):
    console.log(`${userName} is a high school student`)
    console.log(`${userName} is learning basic`)
    break
   case (userAge >= 18 && userAge <=24):
    console.log(`${userName} is a collage student`)
    console.log(`${userName} is learning computer science`)
    break
   case  (userAge >= 24 && userAge <= 45):
    console.log(`${userName} is a working professional`)
    console.log(`${userName} is working on web development`)
    break
   case  (userAge >= 46 && userAge <100):
    console.log(`${userName} is a retired `)
    console.log(`${userName} is reading a news paper`)
    break
   case  (userAge >100):
    console.log(`${userName} is a immortal`)
    break
   default :
    console.log('please enter a valid age')

}