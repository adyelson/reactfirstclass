import TituloPrincipal from "./components/TituloPrincipal";
import BlogPost from "./components/BlogPost";
import BlogPostModel from "./models/BlogPostModel";
import "./App.css";

function App() {
  
  const blogModel = new BlogPostModel(
    "Primera postagem!",
    "https://www.weblink.com.br/blog/wp-content/uploads/2019/06/O-Que-e-Um-Blog.png",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui"
  );

  return( 
    // <div class="ExemploDeClasseCss">
    //   <TituloPrincipal titulo="mudou!"/>
    // </div>
    <div className="ExemploDeClasseCss">
    <BlogPost post={blogModel}></BlogPost>
  </div>
  
  );
}

export default App;
