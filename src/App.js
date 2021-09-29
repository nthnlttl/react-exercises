import { useState } from 'react';
import BlogPostForm from "./BlogPostForm";
import ContactForm from "./ContactForm";

function App() {
  const [selection, setSelection] = useState('blogForm');

  let html;

  if(selection === 'blogForm') {
    html = <BlogPostForm />
  } else {
    html = <ContactForm />
  }


  return (
    <div className="App">
      <header>
        <button type="button" onClick ={() => setSelection('blogForm')}>Blog Form</button>
        <button type="button" onClick ={() => setSelection('contactForm')}>Contact Form</button>
        
      </header>

      {html}
    </div>
  );
  }
  





export default App;
