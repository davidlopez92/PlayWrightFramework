
function randomName(names){
    const randomName = Math.floor(Math.random() * names.length);
  return names[randomName];
};

function randomLastName(lastName){
    const randomLast = Math.floor(Math.random() * lastName.length);
    return lastName[randomLast];
}

module.exports = {randomName, randomLastName}

