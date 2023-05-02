import React from 'react';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';
import './View.css';
import { useHistory } from 'react-router-dom';

export default function View() {

  const [userDetails, setUserDetails] = React.useState()
  // post context
  const { PostDetails } = React.useContext(PostContext)
  // firebase context
  const { firebase } = React.useContext(FirebaseContext)
  const { user } = React.useContext(AuthContext)
  const [remove, setRemove] = React.useState(false)
  // for redirectiong to pages
  const history = useHistory()

  React.useEffect(() => {

    // destructor user id
    const { userId } = PostDetails
    firebase.firestore().collection('users')
      .where('id', '==', userId).get()
      .then((res) => {
        res.forEach((docs) => {
          // setting to userDetails
          setUserDetails(docs.data())

          // if this is user own post
          if (docs.data().id === user.uid) {
            setRemove(true)
          }
        })
      })

  }, [])

  // delete the post
  const handleDelete = () => {
        firebase.firestore().collection('products').doc(PostDetails.id).delete().then(() => {
      // redirecting to home page
      history.push('/')
    })
  }
  
  return (
    <div>
      <div className="viewParentDiv">
        <div className="imageShowDiv">
          <img
            src={PostDetails && PostDetails.url}
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
      <div className='delete'>
        {
          remove
          &&
          <botton
            className='btn'
            onClick={handleDelete}
          >
            Delete the Post
          </botton>
        }
      </div>
    </div>

  );

}
