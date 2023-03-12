const getDiet = (diets, lim) =>{
    let sum = 0;
    for(let i=0; i<diets.length; i++){
     sum+=diets[i];    
      if(sum>lim){
        return i;
      }
      else if (sum<=lim){
        return('eat=',diets.length);
      }
    }
  }
  console.log(getDiet([20,46,24,14,40], [550]));