export const signUpUser = (userName,email,password,callback)=>{

    //add user
    //change state populate loggedin and tasks state and user details

    console.log(userName,email,password);

    fetch("https://localhost:3080/signup",{
        method:"POST" ,
        body:JSON.stringify({
            userId:2,
            userName:userName,
            email:email,
            password:password
        })
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


    fetch("http://localhost:3080/login",{
        method:"POST" ,
        body:JSON.stringify({
            email:email,
            password:password
        })}
    ).then((response)=>{
        if(response.status === '202'){

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