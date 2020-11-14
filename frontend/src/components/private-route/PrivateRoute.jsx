// import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { Route } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


// const PrivateRoute = ({component: Component, ...rest}) => {
//     const {userInfo} = useSelector(state => state.signin);
//     const navigate = useNavigate();
//     useEffect(() => {
//         if(userInfo === {}){
//             navigate('/signin', {replace: true})
//         }
//     }, [userInfo])

//     console.log(userInfo)
//     return (
//         <Route 
//         {...rest} 
//         render={props =>
//              userInfo && (<Component {...props}></Component>)
//          }
//         ></Route>
//     )
// }

// export default PrivateRoute
