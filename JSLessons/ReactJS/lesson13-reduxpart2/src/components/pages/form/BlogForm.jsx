import React, { Component } from 'react'

export class BlogForm extends Component {
  render() {
    return (
      <div className="container mt-5 d-flex align-items-center justify-content-center ">
          <form className='col-6'>
        <div class="mb-3">
          <label  class="form-label">Add Title</label>
          <input type="text" class="form-control"   />
        </div>
        <div class="mb-3">
          <label  class="form-label">Add Description</label>
          <input type="text" class="form-control"  />
        </div>
     
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    )
  }
}

export default BlogForm