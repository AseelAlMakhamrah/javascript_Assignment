//////1. 
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
// const [ ,,otherrRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
console.log(otherrRandomCar)
//output :Tesla
//        Mercedes
//////2. 
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

//output :there is an error for log out the name becouse the name print bu using defination of the dectionary
// so there is no name that declarate 
// we  van solve this one bu using employee.name
// that will get "Elon " like output


//////3. 
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// //output :12345
//           undefined

// ///////4. 
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
// //output :false , couse the first contan value 2 and second contain 2 
//          : true , couse the first contan value 2 and third contain 3
// //////5. 
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// //output :value
            // (6) [1, 5, 1, 8, 3, 3]
            // 1
            // 5



