//type sfc
//index.css mey styling kiye hai 

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color:"white",
                    backgroundColor: "black",
                    borderRadius:"8px"
                }}>New Blog</a>  
                {/* one curlybraces for dynamic values and one for the javascript object */}
            </div>
        </nav>
     );
}
 
export default Navbar;