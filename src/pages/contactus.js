import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import '../css/contact.css';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import { AlternateEmail, Person, Send } from '@material-ui/icons'
import axios from "axios";
import { NextSeo } from 'next-seo';

const SubmitButton = withStyles({
    root: {
        background: 'transparent',
        border: '1px solid #13e8b5',
        borderRadius: 5,
        color: 'white',
        height: 45,
        padding: '0 20px',
        marginTop: '20px',
        fontSize: '1.3rem',
        letterSpacing: '1px',
        textTransform: 'capitalize',
        "&:hover": {
            background: '#13a884',
        },
    },
    
})(Button);

const intialFieldValues = {
    name: '', 
    email: '', 
    message: ''
}

const FormField = withStyles({
    root: {
        width: '100%', 
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: '20px', 
        paddingTop: '0px',
        borderRadius: '5px',
        marginBottom: '20px',
        '& label': {
            color: '#13e8b5'
        },
        '& .Mui-focused': {
            color: 'white'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#13e8b5',
            },
            '&.Mui-focused.Mui-error fieldset': {
                borderColor: '#f44336',
            },
        },
        '& .MuiFormHelperText-root': {
            textAlign: 'right',
            color: 'white',
        }
    },
})(TextField);

const validateEmail = (email) => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.toLowerCase());
}

const isEmpty = (str) => {
    return (!str || str.trim().length === 0);
}
const ContactUs = (props)=> {

    const [values, setValues] = useState(intialFieldValues);

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
          url: "https://getform.io/f/c128f607-4510-4b63-8b70-42dca5b07a3a",
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
        handleEmailValidation();
    }

    const [validInput, setValidInput] = useState(false);
    const [validMail, setValidMail] = useState(true);

    const handleEmailValidation =() => {
        if (isEmpty(values.email) || validateEmail(values.email)) {
            setValidMail(true)
        } else {
            setValidMail(false)
        }
    }

    useEffect(() => {
        if (validMail && !(
                isEmpty(values.email) ||
                isEmpty(values.name) ||
                isEmpty(values.message)
            )) {
            setValidInput(true);
        } else {
            setValidInput(false);
        }
        // console.log(validInput);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [values.email, values.name, values.message, validMail])

    return (
    <>
        <NextSeo title="Contact Us" />
        <div className="contact_container">
            <div className="contact_wrapper">   
                <div className="contact_header">
                    Contact Us
                </div>
                <div className="contact_content">
                    <form
                        onSubmit={handleOnSubmit}
                    >
                        <FormField 
                            variant="outlined"
                            name="name"
                            label="Name"
                            value={values.fullName}
                            onChange={handleInputChange}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Person />
                                  </InputAdornment>
                                ),
                            }}
                        />
                        <FormField
                            error={!validMail}
                            variant="outlined"
                            name="email"
                            label="Email"
                            value={values.email}
                            onChange={handleInputChange}
                            helperText={validMail? "" : "Invalid Email"}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <AlternateEmail />
                                  </InputAdornment>
                                ),
                            }}
                        />
                        <FormField
                            id="outlined-multiline-static"
                            multiline
                            variant="outlined"
                            rows={5}
                            label="Message"
                            value={values.msg}
                            onChange={handleInputChange}
                            name="message"
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Send />
                                  </InputAdornment>
                                ),
                            }}
                            inputProps={{
                                maxLength: 255,
                            }}
                            helperText={values.message.length>0? `${values.message.length}/${255}` : ""}
                        />
                        <SubmitButton 
                            className="contact_button" 
                            type="submit"
                            disabled={serverState.submitting || !validInput}
                        >Submit</SubmitButton>
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
    </>                          
    )
}

export default ContactUs;
  