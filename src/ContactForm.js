import { useState, useEffect } from "react";

function ContactForm(props) {

    const [contactForm, setContactForm] = useState([])
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        
        const contactForm = {
            firstName,
            lastName,
            address,
            phoneNumber,
        }
        setContactForm([...contactForm, contactForm]);
        setFirstName('');
        setLastName('');
        setAddress('');
    }

    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }

    function handleAddressChange(event) {
        setAddress(event.target.value);
    }

    function handlePhoneNumberChange(event) {
        setPhoneNumber(event.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Contact Form</h2>
            <input value={firstName} onChange={ handleFirstNameChange } placeholder="First Name"/>
            <input value={lastName} onChange={ handleLastNameChange } placeholder="Last Name"/>
            <input value={address} onChange={ handleAddressChange } placeholder="Address"/>
            <input value={phoneNumber} onChange={ handlePhoneNumberChange } placeholder="Phone Number"/>
        </form>
    )
}

export default ContactForm
