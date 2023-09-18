export const signUpUser = (userName,email,password,callback)=>{

    //add user
    //change state populate loggedin and tasks state and user details

    console.log(userName,email,password);

    fetch("http://localhost:3080/signup",{
        method:"POST" ,
        body:JSON.stringify({
            userId:2,
            userName:userName,
            email:email,
            password:password
        }),
        headers: {
            'content-type': 'application/json' //always include this incase of post req to backend to avoid empty req body
        }
    }).then((response)=>{
        if(response.status === '201'){

            callback();
            return response.json().message;
        }

    })
        .catch((error)=>{
            console.log(error);
        })

};

export const loginUser = (email,password,callback)=>{

    console.log(email,password);

    fetch("http://localhost:3080/login",{
        method:"POST" ,
        body:JSON.stringify({
            "email":email,
            "password":password
        }),
        headers: {
            'content-type': 'application/json' //always include this incase of post req to backend to avoid empty req body
        }
    }
    ).then((response)=>{
        if(response.status == '200'){

            callback();
            return response.message;
        }

    })
        .catch((error)=>{
            console.log(error);
        })


};

export const addTask = ()=>{

};

export const getTasks = ()=>{

};