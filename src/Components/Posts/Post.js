import React from 'react';
import Heart from '../../assets/Heart';
import { FirebaseContext, AuthContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';
import './Post.css';
import { useHistory } from 'react-router-dom';


function Posts() {
  const { user } = React.useContext(AuthContext)
  // setting products
  const [products, setProducts] = React.useState([])
  // firebase context
  const { firebase } = React.useContext(FirebaseContext)
  // post context
  const { setPostDetails } = React.useContext(PostContext)
  // redirecting to pages
  const history = useHistory()
  const [myPost, setMyPost] = React.useState([])

  React.useEffect(() => {
    firebase.firestore().collection('products').get()
      .then((snapshot) => {
        const allPost = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            // setting id
            id: product.id
          }
        })
        // adding to products
        setProducts(allPost)
      })
  }, [firebase])

  // after products updated checking the user added any products
  React.useEffect(() => {
    products.map((data) => {
      if (user && (user.uid === data.userId)) {
        setMyPost([data])
      }
    })
  }, [products])


  return (

    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {
            // through products
            products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="card"
                  onClick={() => {
                    setPostDetails(product)
                    history.push('/view')
                  }}
                >
                  <div className="favorite">
                    <Heart />
                  </div>
                  <div className="image">
                    <img src={product.url} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {product.price}</p>
                    <span className="kilometer">{product.category}</span>
                    <p className="name">{product.name}</p>
                  </div>
                  <div className="date">
                    <span>{product.createdAt}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>My Post</span>
        </div>
        <span className='text-gray-800 '>{(myPost.length === 0) && 'No products listed yet!'}</span>
        {
          // through added user products
          myPost.map((product) => {
            return (
              <div
                key={product.id}
                className="card"
                onClick={() => {
                  setPostDetails(product)
                  history.push('/view')
                }}
              >
                <div className="favorite">
                  <Heart />
                </div>
                <div className="image">
                  <img src={product.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.category}</span>
                  <p className="name">{product.name}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>

  );
}


export default Posts;
