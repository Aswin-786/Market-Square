import React from 'react';
import { FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';
import './View.css';

export default function View() {

  const [userDetails, setUserDetails] = React.useState()
  // post context
  const { PostDetails } = React.useContext(PostContext)
  // firebase context
  const { firebase } = React.useContext(FirebaseContext)
  React.useEffect(() => {
    console.log({ PostDetails });
    // destructor user id
    const { userId } = PostDetails
    firebase.firestore().collection('users')
      .where('id', '==', userId).get()
      .then((res) => {
        res.forEach((docs) => {
          // setting to userDetails
          setUserDetails(docs.data())
          console.log(docs.data());
        })
      })
  }, [])

  return (

    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={PostDetails && PostDetails.url }
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails ">
          <p>&#x20B9; {PostDetails && PostDetails.price} </p>
          <span className='font-semibold'>{PostDetails && PostDetails.name}</span>
          <p>{PostDetails && PostDetails.category}</p>
          <span>{PostDetails && PostDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails && userDetails.userName}</p>
          <p>{userDetails && userDetails.phone}</p>
        </div>
      </div>
    </div>

  );
  
}
