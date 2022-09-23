import TituloPrincipal from "./components/TituloPrincipal";
import Contador from "./components/Contador";
import BlogPage from "./components/BlogPage";
import BlogPostModel from "./models/BlogPostModel";
import "./App.css";

function App() {
  
 
  return( 
    <>
    {/* <div class="ExemploDeClassesCss">
      <Contador/>
    </div>
  <div class="ExemploDeClasseCss">
   <TituloPrincipal titulo="mudou!"/>
  </div> */}
  {/* <div className="ExemploDeClasseCss">
  <BlogPost post={blogModel}></BlogPost>
  </div> */}
  <div className="ExemploDeClasseCss">
  <BlogPage ></BlogPage>
  </div>
    </>
  
  );
}

export default App;
