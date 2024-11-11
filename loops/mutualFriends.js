// Write your code below
let bobsFollowers = ['dhokaBeatz', 'gyaiGyimii','sneakerNyame','Twilight']

let tinasFollowers = ['dhokaBeatz','AbenaAmobea', 'Twilight']

let mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++){
    for(let j = 0; j < tinasFollowers.length; j++){
        if (bobsFollowers[i] === tinasFollowers[j]){
            mutualFollowers.push(tinasFollowers[j])
        }
    }
}



