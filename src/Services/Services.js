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

            
            response.json().then(
                (data)=> {
                    localStorage.setItem('jwtToken',data.token);
                    callback();
                }
            )
            
        }

    })
        .catch((error)=>{
            console.log(error);
        })


};

export const addTask = (title, detail,date,callback)=>{
    fetch("http://localhost:3080/addTask",{
        method:"POST" ,
        body:JSON.stringify({
            title,
            detail,
            date
        }), headers: {
            'content-type': 'application/json' ,//always include this incase of post req to backend to avoid empty req body
            'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
        }
    }).then(
        (res)=>{
            if(res.status=='201'){
                    res.json()
                    .then((data)=>{
                       
                        callback(data.tasks);
                    })
            }
        }
    ).catch(
        (err)=>{console.log(err);}
    )
};

export const getTasks = (callback)=>{
    fetch("http://localhost:3080/userData",{
        method:"GET" ,
         headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
        }
    }).then(
        (res)=>{
            if(res.status=='200'){
                res.json().then(
                    (data)=>{console.log(data);
                        callback(data);
                    }
                    
                )
            }
        }
    ).catch(
        (err)=>{console.log(err);}
    )
};

export const deleteTask = (taskId,callback)=>{
    fetch("http://localhost:3080/deleteTask",{
        method:"POST" ,
        body:JSON.stringify({
            taskId,
        }), headers: {
            'content-type': 'application/json' ,
            'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`//always include this incase of post req to backend to avoid empty req body
        }
    }).then(
        (res)=>{
            if(res.status=='200'){
                    res.json()
                    .then((data)=>{
                       
                        callback(data.tasks);
                    })
            }
        }
    ).catch(
        (err)=>{console.log(err);}
    )
};


export const markCompleted = (taskId,callback)=>{
    fetch("http://localhost:3080/markCompleted",{
        method:"POST" ,
        body:JSON.stringify({
            taskId,
        }), headers: {
            'content-type': 'application/json' ,
            'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`//always include this incase of post req to backend to avoid empty req body
        }
    }).then(
        (res)=>{
            if(res.status=='200'){
                    res.json()
                    .then((data)=>{
                       
                        callback(data.tasks);
                    })
            }
        }
    ).catch(
        (err)=>{console.log(err);}
    )
};