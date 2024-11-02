export const setAuthUser =(data)=>{
 
    localStorage.setItem("user",JSON.stringify(data));
};

export const getAuthUser =(data)=>{
if(localStorage.getItem("user")){ 
    return JSON.parse(localStorage.getItem("user"));
}};

export const removeAuthUser =(data)=>{
    if(localStorage.getItem("user")){ localStorage.removeItem("user");
    }};



export const getAuthUserJWt =(data)=>{
    const auth =getAuthUser();
    return  {headers: {
        //'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}` // Attach the JWT token here
      },}
   
};