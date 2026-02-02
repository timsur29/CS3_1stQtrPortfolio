for (let i=0; i<=10000; i+=68) {
    console.log(i)
}
 
 console.log("SEPARATOR");
 
 var j=0
 while (j<=10000) {
    console.log(j)
    j+=67
 }

console.log("SEPARATOR")

 fav_people = ["adriel", "yna", "carly"]
 fav_pastries = ["eclairs", "creampuffs", "cake"]

 for (let i=0; i<fav_people.length; i++) {
    console.log(fav_people[i]);
 }

 for (pastry of fav_pastries) {
    console.log(pastry)
 }

 newperson = fav_people.push("daniel a")
 pastrydemote = fav_pastries.pop()

fav_people.forEach(output)
console.log(`${pastrydemote} isn't quite my favorite anymore`)

function output(elem) {
    console.log(elem)
}