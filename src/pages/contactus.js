import React, {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import '../css/contact.css'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';

const MyButton = styled(Button)({
    background: '#7B807A',
    border: 0,
    borderRadius: 5,
    color: 'white',
    height: 45,
    padding: '0 30px',
    marginTop: '20px'
})

const intialFieldValues = {
    fullName: '', 
    email: '', 
    msg: ''
}


const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '100%', 
            backgroundColor: 'white', 
            marginTop: '20px', 
            borderRadius: '5px',
            marginBottom: '20px'
        }
    }
}))



const ContactUs = (props)=> {

    const [values, setValues] = useState(intialFieldValues);
    const classes = useStyle();

    const handleInputChange = (e)=>{
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    return (
        <div className="contact_container">
            <div className="contact_wrapper">   
                <div className="contact_header">
                    Contact Us
                </div>
                <div className="contact_content">
                    <form className={classes.root}>
                        <span className="form_label">Name:</span> 
                        <TextField 
                            variant="filled"
                            label="Full Name"
                            name="fullName"
                            value={values.fullName}
                            onChange={handleInputChange}
                        />
                        <span className="form_label">Email:</span> 
                        <TextField 
                            variant="filled"
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />
                        <span className="form_label">Message:</span> 
                        <TextField
                            id="outlined-multiline-static"
                            label="Your Message Here..."
                            multiline
                            rows={5}
                            variant="filled"
                            value={values.msg}
                            onChange={handleInputChange}
                            name="msg"
                        />
                        <MyButton className="contact_button">Submit</MyButton>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
  