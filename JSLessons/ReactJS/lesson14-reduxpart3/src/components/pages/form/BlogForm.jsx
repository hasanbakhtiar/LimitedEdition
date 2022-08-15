import React, { Component } from 'react'

 class BlogForm extends Component {
   constructor(props){
    super(props);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onBlogSubmit = this.onBlogSubmit.bind(this);
    this.state={
      myTitle:"",
      myDesc:"",
      err:""
    }
  }
  onTitleChange(e){
    const a = e.target.value;
    this.setState({myTitle:a})
  }

  onDescChange(e){
    const b = e.target.value;
    this.setState({myDesc:b})
  }
  onBlogSubmit(e){
      e.preventDefault();
      if (!this.state.myTitle || !this.state.myDesc) {
        this.setState({err:"Please, fill input."})
      }else{
        this.setState({err:""})
        this.props.onFormSubmit({
          itemTitle: this.state.myTitle,
          itemDesc:this.state.myDesc
        });
      }
  }
  render() {
    return (
      <div>
      {this.state.err && (
        <p className='text-center alert-danger'>{this.state.err}</p>
      )}
      <div className="container mt-5 d-flex align-items-center justify-content-center ">
        
          <form onSubmit={this.onBlogSubmit} className='col-6'>
        <div class="mb-3">
          <label  class="form-label">Add Title</label>
          <input onChange={this.onTitleChange} type="text" class="form-control"   />
        </div>
        {/* {this.state.myTitle} -
        {this.state.myDesc} */}
        <div class="mb-3">
          <label  class="form-label">Add Description</label>
          <input onChange={this.onDescChange} type="text" class="form-control"  />
        </div>
     
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
      </div>
    )
  }
}

export default BlogForm