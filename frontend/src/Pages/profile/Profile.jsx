import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { userDetailsRequest } from '../../Redux/features/user/userDetailsSlice'
import PrimaryButton from '../../components/primary-button/PrimaryButton'

import {Container, Form, FormContainer} from './profule_style'
import { userUpdateProfileRequest, userUpdateProfileReset } from '../../Redux/features/user/userUpdateProfileSlice'
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {userInfo} = useSelector(state => state.signin)
    const {loading, error, user} = useSelector(state => state.userDetails)
    const {success: updateSuccess, error: updateError, loading: updateLoading} = useSelector(state => state.userUpdateProfile)
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            alert('Password and Confirm password are not match')
        } else {
            dispatch(userUpdateProfileRequest({userId: user._id, name, email, password}))
        }
    }

    useEffect(()=> {

        if(userInfo._id === undefined){
            navigate('/signin', {replace: true});
        } else{
            if(!user){
            dispatch(userUpdateProfileReset())
            dispatch(userDetailsRequest(userInfo._id))
            console.log('Something is wrong')
            } else {
                setName(userInfo.name);
                setEmail(userInfo.email);
            }
        }

        
    }, [dispatch, userInfo, user], )

    return (
        <Container>
            <Form onSubmit={submitHandler}>
                <div>
                    <h3>User Profile</h3>
                </div>
                {
                    loading ? <p>...Loding</p> :
                    error ? <p>{error}</p> : (
                        <>
                        {updateLoading && <p>...Loading</p>}
                        {updateError && <p>{updateError}</p>}
                        {updateSuccess && <p>Profile Updated Successfully</p>}
                        <FormContainer>
                            <label htmlFor="name">Name</label>
                            <input id="name" 
                                    type="text"
                                    placeholder="Enter name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}/>
                        </FormContainer>
                        <FormContainer>
                            <label htmlFor="email">Email</label>
                            <input id="email" 
                                    type="text"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}/>

                        </FormContainer>    
                        <FormContainer>
                            <label htmlFor="password">Password</label>
                            <input id="password" 
                                    type="text"
                                    placeholder="Enter password"
                                    onChange={e => setPassword(e.target.value)}
                                    />
                        </FormContainer>
                        <FormContainer>
                            <label htmlFor="consfirmPassword">Confirm Password</label>
                            <input id="consfirmPassword" 
                                    type="text"
                                    placeholder="Enter password"
                                    onChange={e => setConfirmPassword(e.target.value)}

                                    ></input>
                        </FormContainer>
                        
                            <PrimaryButton className='cButton' type="submit">Update</PrimaryButton>
                    
                        </>
                        
                    )
                }
            </Form>
        </Container>
    )
}

export default Profile
