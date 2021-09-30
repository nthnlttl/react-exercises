import { useState, useEffect } from "react";

function ContactForm(props) {

    const [contactList, setContactList] = useState([]);
    const [last, setLast] = useState('');
    const [first, setFirst] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        
        const contact = {
            first,
            last,
            address,
            phoneNumber,
        }

        setContactList([...contactList, contact]);

        setFirst('');
        setLast('');
        setAddress('');
        setPhoneNumber('');
    }

    function handleFirstNameChange(event) {
        setFirst(event.target.value);
    }

    function handleLastNameChange(event) {
        setLast(event.target.value);
    }

    function handleAddressChange(event) {
        setAddress(event.target.value);
    }

    function handlePhoneNumberChange(event) {
        setPhoneNumber(event.target.value);
    }

    useEffect(() => {
        localStorage.setItem("contactList", JSON.stringify(contactList));
    }, [contactList]);

    return(
        <form onSubmit={handleSubmit}>
            <h2 htmlFor="contact-input">
                <label>Contact Form</label>
            </h2>
            <input value={first} name="first-name" onChange={ handleFirstNameChange } type="text" placeholder="First Name"/>
            <input value={last} name="last-name" onChange={ handleLastNameChange } type="text" placeholder="Last Name"/>
            <input value={address} name="address-input" onChange={ handleAddressChange } type="text" placeholder="Address"/>
            <input value={phoneNumber} name="tel-input" onChange={ handlePhoneNumberChange } type="tel" placeholder="Phone Number"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ContactForm
