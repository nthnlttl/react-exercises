import { useState, useEffect } from 'react';

function BlogPostForm(props) {

    const [blogPosts, setBlogPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    
    
    
    
    function handleSubmit(event) {
        event.preventDefault();
        
        const blogPost = {
            title,
            body,
        }
        setBlogPosts([...blogPosts, blogPost]);

        setTitle('');
        setBody('');
    }
   
    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleBodyChange(event) {
        setBody(event.target.value);
    }

    
    useEffect(() => {
        localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
    }, [blogPosts]);
    return(
        <form onSubmit={handleSubmit}>
            <h2>BlogPost</h2>
            <input value={title} onChange={ handleTitleChange} name="title-input" id="new-title-input" type="text"/>
            <input value={ body } onChange={ handleBodyChange} name="body-input" id="new-body-input" type="text"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default BlogPostForm;

