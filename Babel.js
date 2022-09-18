
var my_numbers = [17,19,21];
var size = 5; // Array size
var total=0;
const numbers2 = my_numbers.map(find_total);

function find_total(value) {
      if(value==5)
      {
            total+=5;
      }
      else if(value%2==0 || value==0)
      {
          total+= 1;
      }
      else if(value%2!=0)
      {
          total+=3;
      }
      return total;
}
console.log(total);
