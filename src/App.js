import { useState } from 'react';
import BlogPostForm from "./BlogPostForm";
import ContactForm from "./ContactForm";
import BlogReadingApp from "./BlogReadingApp";
import BookMarkingApp from "./BookMarkingApp";

function App() {
  const [selection, setSelection] = useState('blogForm');

  let html;

  if(selection === 'blogForm') {
    html = <BlogPostForm />
  }else if(selection === 'contactForm') {
    html = <ContactForm />
  }else if(selection === 'blogReadingApp') {
    html = <BlogReadingApp />
  }else if(selection === 'bookMarkingApp')
    html = <BookMarkingApp />


  return (
    <div className="App">
      <header>
        <button type="button" onClick ={() => setSelection('blogForm')}>Blog Form</button>
        <button type="button" onClick ={() => setSelection('contactForm')}>Contact Form</button>
        <button type="button" onClick ={() => setSelection('blogReadingApp')}>Blog Reading</button>
        <button type="button" onClick ={() => setSelection('bookMarkingApp')}>Bookmarking</button>
      </header>

      {html}
    </div>
  );
  }
  





export default App;
