const fullName = "john mick";
const getFirstName = fullName.split(" ");

const arrow2 = (name)=>{
  return getFirstName[0];
}

const arrow = (name)=> getFirstName[0];

console.log(arrow(fullName));
