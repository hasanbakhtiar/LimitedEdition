import React, { Component } from 'react'

 class BlogForm extends Component {
   constructor(props){
    super(props);
    this.state={
      formtitle:props.editblog? props.editblog.title : "",
      formdesc:props.editblog? props.editblog.desc : "",
      formimg:props.editblog? props.editblog.img : "",
      err:""
    }
  }
  onTitleChange=(e)=>{
    const formtitle = e.target.value;
    this.setState(()=>({formtitle}))
  }

  onDescChange=(e)=>{
    const formdesc = e.target.value;
    this.setState(()=>({formdesc}))
  }
  onImgChange=(e)=>{
    const formimg = e.target.value;
    this.setState(()=>({formimg}))
  }
  onBlogSubmit=(e)=>{
      e.preventDefault();
      if (!this.state.formtitle || !this.state.formdesc) {
        this.setState({err:"Please, fill input."})
      }else{
        this.setState({err:""})
        this.props.onFormSubmit({
          title: this.state.formtitle,
          desc:this.state.formdesc,
          img:this.state.formimg
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
          <input value={this.state.formimg} onChange={this.onImgChange} type="text" class="form-control"   />
        </div>
        <div class="mb-3">
          <label  class="form-label">Add Title</label>
          <input value={this.state.formtitle} onChange={this.onTitleChange} type="text" class="form-control"   />
        </div>
        {/* {this.state.myTitle} -
        {this.state.desc} */}
        <div class="mb-3">
          <label  class="form-label">Add Description</label>
          <textarea  onChange={this.onDescChange} type="text" class="form-control" >{this.state.formdesc}</textarea>
        </div>
     
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
      </div>
    )
  }
}

export default BlogForm