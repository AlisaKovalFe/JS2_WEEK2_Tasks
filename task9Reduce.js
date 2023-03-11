const getDiet = (dish, limit) => {
    return dish.reduce(function(acc, curr, index, array){
      let sum = acc + curr;
          if (sum > limit){
            return index;
          }
      return sum;
    },0)
 }
 console.log(getDiet([20,46,24], [50]));