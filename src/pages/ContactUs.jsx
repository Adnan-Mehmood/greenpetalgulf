import PageTitle from '../components/PageTitle';
import { contactInfo } from '../content';

const ContactUs = () => (
  <>
    <PageTitle title="Contact Us" />
    <section className="contact-form-section style-four">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="office-address">
              <div className="icon-box">
                <div className="icon">
                  <i className="fa-solid fa-earth-asia" />
                </div>
                <h4>Contact US</h4>
                <div className="text">{contactInfo.address}</div>
              </div>
              <div className="text">
                We’re here to help you with all your inspection, certification, and maintenance needs — contact Green Petals
                Gulf LLC today for reliable and professional service across Saudi Arabia.
              </div>
            </div>
            <div className="contact-info mb-30">
              <div className="row">
                <div className="col-md-6">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="fa-solid fa-phone-volume" />
                    </div>
                    <h4>Phone</h4>
                    <div className="text">
                      <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="fa-regular fa-envelope" />
                    </div>
                    <h4>Email</h4>
                    <div className="text">
                      <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper-box">
              <div className="sec-title">
                <div className="sub-title">Send Message</div>
                <h2>Get in Touch</h2>
                <div className="text">
                  Have a question or need a quote? Fill out the form below, and our team will get back to you as soon as
                  possible. Whether it’s inspection, certification, or maintenance services, Green Petals Gulf LLC is here to
                  provide reliable support and expert solutions across Saudi Arabia.
                </div>
              </div>
              <div className="contact-form">
                <form
                  name="frm_contact"
                  id="frm_contact"
                  action="/send_email.php"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="txt_name">Name</label>
                        <input type="text" name="txt_name" id="txt_name" placeholder="Name" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="txt_phone">Phone</label>
                        <input type="text" name="txt_phone" id="txt_phone" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="txt_email">Email</label>
                        <input type="email" name="txt_email" id="txt_email" placeholder="Email" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="txt_subject">Subject</label>
                        <input type="text" name="txt_subject" id="txt_subject" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="txt_message">Message</label>
                        <textarea name="txt_message" id="txt_message" placeholder="Message" />
                        <div className="form-btn">
                          <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value="" />
                          <div id="contact_msg" />
                          <button className="theme-btn btn-style-one" type="submit" data-loading-text="Please wait...">
                            <span>
                              <i className="flaticon-up-arrow" />
                              Send Now
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ContactUs;


