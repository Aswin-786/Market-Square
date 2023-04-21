import React, { Fragment } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import { useHistory } from 'react-router-dom';

const Create = () => {

  // accessing form inputs
  const [name, setName] = React.useState('')
  const [category, setCategory] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [image, setImage] = React.useState(null)

  // firebase context
  const { firebase } = React.useContext(FirebaseContext)
  // auth context
  const { user } = React.useContext(AuthContext)
  // for redirectiong to pages
  const history = useHistory()
  // present date
  const date = new Date()

  //form submit
  const handleUpload = () => {
    // creating folder in firebase storage
    firebase.storage().ref(`/image/${image.name}`)
      // adding image to that folder
      .put(image)
      .then(({ ref }) => {
        // taking the image url
        ref.getDownloadURL()
          .then((url) => {
            console.log(url)
            // adding details to products in collections
            firebase.firestore().collection('products').add({
              name,
              category,
              price,
              url,
              userId: user.uid,
              createdAt: date.toDateString()
            })
            // redirecting to home page
            history.push('/')
          })
      })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="inputField"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}

            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="inputField"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="inputField"
              type="number"
              id="fname"
              name="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : " "}></img>
          <br />
          <input onChange={(e) => setImage(e.target.files[0])} type="file" />
          <br />
          <button onClick={handleUpload} className="uploadBtn">upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;