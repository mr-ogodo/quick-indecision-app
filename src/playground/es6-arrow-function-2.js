const user ={
  name: 'seun',
  cities: ['new york', 'chicago', 'atlanta'],
  printPlacesLived: function() {
    const cityLived = this.cities.map((city)=>{
      return this.name + ' has lived in ' + city;
    });
    return cityLived ;
  }
}

console.log(user.printPlacesLived());

const numbers = [1, 2, 3, 4, 5];
const multiplyBy = 7;

const multiplier = ()=>{
  return numbers.map((number)=> number * multiplyBy);
}

console.log(multiplier());
