// import { useState } from "react";

// //type sfc

// const Home = () => {
//     const handleClick=()=>{
//         console.log('Hello,ninjas');
//     }

//     const handleClickAgain=(name)=>{
//         console.log('hello'+name);
//     }
      
//     const[name,setName]=useState('mario');
//     const handleClicks=()=>{
//         setName('luigi');
//     }

//     const Home=()=>{
//         const[blogs,setBlogs]=useState([
//             {title:'My new',body:'lorem lipsum',author:'maria',id:1},
//             {title:'My name',body:'lorem lipsum',author:'mari',id:2},
//             {title:'My dev',body:'lorem lipsum',author:'abhinav',id:3}
//         ]);
//     }
//     return ( 
//         <div className="home">
//             <h2>HomePage</h2>
//             <button onClick={handleClick}>Click me</button>
//             <button onClick={()=>{handleClickAgain('mario')}}>Click me again</button>
//             <p>{name}</p>
//             <button onClick={handleClicks}>Click me</button>
//             <p>title body author id ke liye</p>
//             {blogs.map(blog => (
//            <div className="blog-preview" key={blog.id} >
//            <h2>{ blog.title }</h2>
//            <p>Written by { blog.author }</p>
//         </div>
//       ))}
//         </div>
//      );
// }
 
// export default Home;
////////////////////////////////////////////////
// import { useState } from "react";

// const Home = () => {
//   const [blogs, setBlogs] = useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//   ])

//   return (
//     <div className="home">
//       {blogs.map(blog => (
//         <div className="blog-preview" key={blog.id} >
//           <h2>{ blog.title }</h2>
//           <p>Written by { blog.author }</p>
//         </div>
//       ))}
//     </div>
//   );
// }
 
// export default Home;


/////////////////////////////////////////////////////
// import { useState,useEffect } from "react";
// import BlogList from "./BlogList";

// const Home = () => {
//   const [blogs, setBlogs] = useState([
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//   ])
//   const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog => blog.id !== id);
//     setBlogs(newBlogs);
//   }
   
//   const[name,setName]=useState('mario');
//   useEffect(()=>{
//       console.log('use effect ran');
//       console.log(name);
//   },[name]);
//   return (
//     <div className="home">
//       {/* <BlogList blogs={blogs} title="All Blogs" /> */}
//       <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
//       {/* <BlogList blogs={blogs.filter((blogz)=>blogz.author==='mario')} title="Mario's Blogsz" /> */}
//       <button onClick={()=>setName('luigi')}>change name</button>
//       <p>{name}</p>
//     </div>
//   );
// }
 
// export default Home;

////////////////////////////////////
import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        //console.log(data);
      })
  }, [])

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;