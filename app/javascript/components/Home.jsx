import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Widget } from "@uploadcare/react-widget";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state= {
      uploadURL: ''
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className='vw-100 vh-100 primary-color d-flex align-items-center justify-content-center'>
        <div className='jumbotron jumbotron-fluid bg-transparent'>
          <div className='container secondary-color'>
            <h1 className='display-4'>Food Recipes</h1>
            <p className='lead'>
              A curated list of recipes for the best homemade meal and
              delicacies.
            </p>
            <hr className='my-4' />
            <Link
              to='/recipes'
              className='btn btn-lg custom-button'
              role='button'
            >
              View Recipes
            </Link>

            <Widget publicKey='101bef6739855ac8727b' 
            id='file' 
            multiple={true} 
            onChange={(info) => { 
              this.setState({
                uploadURL: info
              }) 
            }} />
            
          </div>
        </div>
      </div>
    );
  }
}
