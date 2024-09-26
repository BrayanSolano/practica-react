export const Posts =  ()=>{
    return <button onClick={()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(Response => Response.json())
            .then(data => console.log(data))
    }}>Traer Datos</button>

}