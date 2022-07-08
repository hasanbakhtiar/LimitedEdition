import React from 'react'

const Contact = () => {
  return (
    <div className='container'>  {/*Section: Contact v.2*/}
    <section className="mb-4">
      {/*Section heading*/}
      <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
      {/*Section description*/}
      <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
      <div className="row">
        {/*Grid column*/}
        <div className="col-md-9 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" action="mail.php" method="POST">
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input type="text" id="name" name="name" className="form-control" />
                  <label htmlFor="name" className>Your name</label>
                </div>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input type="text" id="email" name="email" className="form-control" />
                  <label htmlFor="email" className>Your email</label>
                </div>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
            {/*Grid row*/}
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input type="text" id="subject" name="subject" className="form-control" />
                  <label htmlFor="subject" className>Subject</label>
                </div>
              </div>
            </div>
            {/*Grid row*/}
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-md-12">
                <div className="md-form">
                  <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} />
                  <label htmlFor="message">Your message</label>
                </div>
              </div>
            </div>
            {/*Grid row*/}
          </form>
          <div className="text-center text-md-left">
            <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
          </div>
          <div className="status" />
        </div>
        {/*Grid column*/}
        {/*Grid column*/}
        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li><i className="fas fa-map-marker-alt fa-2x" />
              <p>San Francisco, CA 94126, USA</p>
            </li>
            <li><i className="fas fa-phone mt-4 fa-2x" />
              <p>+ 01 234 567 89</p>
            </li>
            <li><i className="fas fa-envelope mt-4 fa-2x" />
              <p>contact@mdbootstrap.com</p>
            </li>
          </ul>
        </div>
        {/*Grid column*/}
      </div>
    </section>
    {/*Section: Contact v.2*/}</div>
  )
}

export default Contact