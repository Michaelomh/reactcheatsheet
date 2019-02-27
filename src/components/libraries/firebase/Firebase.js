import React from 'react';
import { Row, Col } from 'react-bootstrap';

class Firebase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 'value'
    };
  }

  render() {
    return (
      <div className="template">
        <Row>
          <Col sm={12}><h3>Configuration &amp; Setup</h3>
            <pre><code>
            <p>{`You need to install firebase first
$ npm install --save firebase

//go to firebase website and create a new project and get all the configurations for the project
//save it in a folder called config.js or firebase.js
// *Remember to remove them from github if you are uploading

//to add firebase to your project , add the following to your main component
import firebase from '../../firebase/Firebase'; 

componentWillMount() {
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true });
}`}</p>
            </code></pre></Col>
          <Col sm={12}><h3>Read</h3>
            <pre><code>
            <p>{`db.collection('this.props.dbToConnect').get().then((snap) => {
  snap.docs.forEach(record => {
    //populate active income fields
    this.setState(prevState => ({
      activeIncome: [...prevState.activeIncome, record.data()]
    }))
  })
})`}</p>
            </code></pre></Col>
          <Col sm={12}><h3>Create/Add</h3>
            <pre><code>
            <p>{`db.collection(this.props.dbToConnect).add({
    key: value,
    key1: value1
  }).then((snapshot) => {
    //successful submission of records
  }).catch((error) => {
    //catching error
  });
}`}</p>
            </code></pre></Col>
            <Col sm={12}><h3>Update</h3>
            <pre><code>
            <p>{``}</p>
            </code></pre></Col>
            <Col sm={12}><h3>Delete</h3>
            <pre><code>
            <p>{``}</p>
            </code></pre></Col>
        </Row>
          <h3>Notes</h3>
          <pre><code>
              <p>{`
              
              `}</p>
            </code></pre>
      </div>
    );
  }
}

export default Firebase;
