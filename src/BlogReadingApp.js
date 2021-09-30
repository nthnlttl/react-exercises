import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';

function BlogReadingApp() {
    const [selection, setSelection] = useState();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs([
            {
                id: 1,
                title: 'Testing 1',
                text: 'testing first blog post',
            },
            {
                id: 2, 
                title: 'Testing 2',
                text: 'testing second blog post',
            },
            {
                id: 3, 
                title: 'Testing 3',
                text: 'testing third blog post',
            }
        ])
    }, []);

    const blogList = blogs.map(blog => 
        <li key={blog.id}>
            <button className="nav nav-tabs nav-stacked" type="button" id={blog.id} onClick={() => setSelection(blog)}>{blog.title}</button>
        </li>
        );

 let html;

if(selection){
  html = <div>
      <h2>{ selection.title}</h2>
  <p>{selection.text}</p>
  </div>;
} else if ( selection === 'Second Blog')  {
    html = <div><h2>{ selection.title}</h2><p>{selection.text}</p></div>;
} else if ( selection === 'Third Blog')  {
    html = <div><h2>{ selection.title}</h2><p>{selection.text}</p></div>;
}
    
    return(
        <>
            <div>
               <h2> {html}</h2>

            </div>
            <div> 
                <ul>{blogList}</ul>
            </div>
        </>
    )
}

export default BlogReadingApp;
