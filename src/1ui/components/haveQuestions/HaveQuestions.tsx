import {Box, Container, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import cl from './HaveQuestions.module.css'
import {Field, Formik, FormikErrors, FormikProvider} from "formik";
import {SendUsersMessageTC} from "../../../2bll/MessagesReducer";
import {useDispatch} from "react-redux";

export type QuestionFormValuesType = {
    userName: string
    tel: string
    email: string
}

const HaveQuestions = () => {
    const initialValues: QuestionFormValuesType = {tel: "+490000000000", userName: "lisa", email: "lisa@gmail.com"}
    const dispatch=useDispatch()

    return (
        <Box className={cl.root}>
            {/*<Container t="center" style={{textAlign:"left"}}>*/}
            <Container style={{textAlign: "center"}}>
                <Typography variant="h3"  mb="1%">Do you have any <span style={{color:"#0b6eb0"}}>questions</span>?</Typography>
                <Typography m="0 1% 4%" >
                    Хотите уточнить детали или готовы оставить заявку на квартирный переезд в Москве под ключ?
                    Укажите номер телефона, и мы вам перезвоним в течение 60-ти секунд.
                </Typography>
                <Formik initialValues={initialValues}
                        validate={values => {
                            // console.log("form value", values)
                            const errors: FormikErrors<QuestionFormValuesType> = {};
                            if (!values.userName) {
                                errors.userName = 'Required';
                            } else if (values.userName.length < 2 ) {
                                errors.userName = 'Invalid userName';
                            }
                            if (!values.tel) {
                                errors.tel = 'Required';
                            } else if (values.tel.length < 10) {
                                errors.tel = 'number is short'
                            } else if (!/\+49\d{10}/.test(values.tel) ) {
                                //|| !/\+49\(\d{3}\)\d{3}-\d{2}-\d{2}/.test(values.tel)
                                errors.tel = 'its not phone number'
                            }
                            if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                                errors.email='Invalid email';
                            }
                            return errors;
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                          setTimeout(() => {
                             // @ts-ignore
                             dispatch(SendUsersMessageTC(values))
                             // alert(JSON.stringify(values, null, 2));
                             setSubmitting(false);
                             }, 400);
                         // formik.resetForm()
                            }}>
                    {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                        <form className={cl.inputsWrap} onSubmit={handleSubmit}>
                            <Box className={cl.itemWrap}>
                                <TextField required id="outlined-required" label="your name" defaultValue="user"
                                           value={values.userName}
                                           // {...Formik.getFieldProps('userName')}
                                           name="userName" onChange={handleChange} onBlur={handleBlur}
                                />
                                <p className={cl.errorMessage}> {errors.userName && touched.userName && errors.userName}</p>
                            </Box>
                            <Box className={cl.itemWrap}>
                                <TextField required id="outlined-required" label="phone namber" placeholder="+499999999999"
                                    // defaultValue="phone namber"
                                           value={values.tel} name="tel" onChange={handleChange} onBlur={handleBlur}
                                />
                                <p className={cl.errorMessage}>{errors.tel && touched.tel && errors.tel}</p>
                            </Box>
                            <Box className={cl.itemWrap}>
                                <TextField id="email" name="email" label="email" placeholder="john@acme.com" type="email" value={values.email}
                                           onChange={handleChange} onBlur={handleBlur}/>
                                <p className={cl.errorMessage}>{errors.email && touched.email && errors.email}</p>
                            </Box>
                            <button type="submit" disabled={isSubmitting} className={cl.btn}
                                    style={{backgroundColor:!isSubmitting ? "#0b6eb0":"gray", opacity:!isSubmitting?1:0.5}}>
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </Container>
        </Box>
    );
};

export default HaveQuestions;