function show(){

    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;
    let eyeColor = document.getElementById("eyeColor").value;
    let lnamee = lastName.split(" ")
    let lname

    if (lnamee.length >= 1){
        lname = lnamee[lnamee.length -1]
    }

    const userObject = {
        firstName: name,
        lastName: lname,
        age,
        eyeColor
    };

    document.getElementById("result").innerHTML = `
    Olá ${userObject.firstName} ${userObject.lastName}, seja bem vindo(a/e)! Você tem ${userObject.age} e seus olhos são cor ${userObject.eyeColor}`


        console.log(lname)
}

