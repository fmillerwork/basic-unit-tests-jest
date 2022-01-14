function computeAge(birthday, currentDate){
    var diff = currentDate - birthday.getTime();
    var age = new Date(diff); 
    
    return Math.abs(age.getUTCFullYear() - 1970)
}

module.exports = computeAge