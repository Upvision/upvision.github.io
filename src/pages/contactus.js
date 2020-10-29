import React, {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import '../css/contact.css'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';
import axios from "axios";
import { Link } from "gatsby"
import Layout from "../components/layout"

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

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });

    const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://getform.io/f/e259a4c6-8fc3-4832-84d5-30ef0176e489",
          data: new FormData(form)
        })
        .then(r => {
        handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
        });
    };

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
                    <form 
                        className={classes.root} 
                        action="https://getform.io/f/e259a4c6-8fc3-4832-84d5-30ef0176e489" 
                        method="POST"
                        onSubmit={handleOnSubmit}
                    >
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
                        <MyButton 
                            className="contact_button" 
                            type="submit"
                            disabled={serverState.submitting}
                        >Submit</MyButton>
                        <div className="contact_msg">
                            {serverState.status && (
                                <p className={!serverState.status.ok ? "ErrorMsg" : ""}>
                                {serverState.status.msg}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
  