var users = {
    
    "Akmal":{
        name: "Akmal",
        surname: "O'ktamov",
        age: 27,
        salary: 800
    },
    
    "Oybek":{
        name: "Oybek",
        surname: "Sattorov",
        age: 36,
        salary: 1500
    },
    
    "Umid":{
        name: "Umid",
        surname: "Abdishukurov",
        age: 21,
        salary: 400
    },
    
    // "abbos":{
    //     name: "Umid",
    //     surname: "Abdishukurov",
    //     age: 21,
    //     salary: 300
    // },
    
    
}

result = 0

function sumSalary(item) {
    
    for (var key in item) {
        
        var value = users.Akmal.salary + users.Oybek.salary + users.Umid.salary
        var result = value 
        
        
    }
    return result
}

console.log(sumSalary(users));


function avarageAge(item2) {
    
    for (var key in item2) {
        
        var value = item2.Akmal.age  + item2.Oybek.age + item2.Umid.age 

        var result = value / 3

        // console.log(result);

    }
    
    return result
    
    console.log(users);
}



console.log(avarageAge(users));