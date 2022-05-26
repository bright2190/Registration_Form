window.addEventListener("load", function() {

    let getUser = localStorage.getItem("users");

    if(getUser != null) {
        getUser = JSON.parse(getUser);

        for(i = 0; i < getUser.length; i++) {

            globalArray.push(getUser[i]);

        }

        // globalArray.push(getUser);
    }


})

let globalArray =  [];

let button = document.getElementsByTagName("button")[0]

button.addEventListener("click", function() {

    input1 = document.getElementsByTagName("input")[0].value.trim(); // username
    input2 = document.getElementsByTagName("input")[1].value.trim(); //password



    let userDetails = {

        username: input1,
        password: input2

    }

    globalArray.push(userDetails);

    localStorage.setItem("users", JSON.stringify(globalArray));

    document.getElementsByTagName("input")[0].value = "";

    document.getElementsByTagName("input")[1].value = "";

    alert("User Registered Sucessfully");

    // console.log(nameOnly);
})



let login = document.getElementsByClassName("button")[0];

if(login) {

    document.getElementsByTagName("button")[0].style.display = "none";

}

login.addEventListener("click", function() {

    input1 = document.getElementsByTagName("input")[0].value; // username
    input2 = document.getElementsByTagName("input")[1].value; //password

    let storeName = localStorage.getItem("users");

    if(storeName != null) {

        let checker = [];

        storeName = JSON.parse(storeName);

        for(let i = 0; i < storeName.length; i++) {

            if(input1 == storeName[i].username && input2 == storeName[i].password) {

                checker.push("login");

                // location.href = "user.html";

                break;

            } 

        }


        if(checker.length != 0) {

            let logDetails = {
                username : input1,
                password : input2
            }



            localStorage.setItem("checkLog", JSON.stringify(logDetails));

            window.location.href = "user.html";

        } else {

            document.getElementById("tide").style.display = "block";


        }




        console.log(storeName);


    } else {

        alert("Please Register");
    }

    storeName = JSON.parse(storeName);


    console.log(storeName);

    if(input1 == storeName.username && input2 == storeName.password) {

        window.location.href = "user.html";

    } else {


        alert("we dont know you");

    }


    // console.log(nameOnly);
})