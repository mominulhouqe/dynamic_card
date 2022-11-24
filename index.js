// const posts =[
//     {
//         title : "this is title 1",
//         body : "this is body 1"
//     },
//     {
//         title : "this is title 2",
//         body : "this body2"
//     },
//     {
//         title : "this is title 3",
//         body : "this is body 3"
//     },
//     {
//         title : "this is title 2",
//         body : "this body2"
//     },
//     {
//         title : "this is title 4",
//         body : "this is body 4"
//     },
//     {
//         title : "this is title 4",
//         body : "this body4"
//     }

// ];
const fecthData = async(config) =>{
    try{ 
     const res = await axios(config);
    return res.data;

    }catch(error){
        throw Error("data is not resposn")
    }
   
   
};



const postsElement = document.querySelector(".posts");

const loadAllData = async() => {
    const posts =await fecthData("https://jsonplaceholder.typicode.com/posts");
    posts.map((posts) =>{
        
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
    <h4 class="post-title">${posts.title} </h4>
    
    <p class="post-body">${posts.body}</p>

    ` ;
    postsElement.appendChild(postElement);
      

    });
   
};

loadAllData();