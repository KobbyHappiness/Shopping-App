import database from "./database";

export const login = ({email, password})=>{
    const found = database.users.filter(user=> 
        user.email === email && user.password == password
    );

    return found.length > 0 ? {user: found[0], status: true} : {error: "User does not exist", status: false};
}

export const signup = (data)=>{
    const newUser = {...data, id: database.users.length + 1};
    database.users.push(newUser);
}