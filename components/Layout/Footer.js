import React from 'react'

export default function Footer() {
  return (
    <footer id="footer">
    <section className="bg-blue-light" style={{ backgroundColor: "#667d96" }}>
      <div className="container">
        <div className="text-center" style={{ color: "#dbe1e8" }}>
          <p className="mb-0">
            <img
              src="https://www.kbip.org/images/logo.png"
              width={100}
              alt="Official logo KBIP"
              title="Official logo KBIP"
              className="float-center"
            />
            <br />
            <b> KERALA BUREAU OF INDUSTRIAL PROMOTION</b>
            <br />
          </p>
          <p>
            2, Vidhya Nagar, Opp. Police Ground, Thycaud P.O., Thiruvananthapuram
            - 695014, Kerala, India.
            <br />
            Tel: +91 471 2321882 Fax: +91 471 2322883
            <br />
            Email: kbip@keralaindustry.org
           </p>
        </div>
      </div>
    </section>
    <section style={{ backgroundColor: "#036" }}>
      <div className="container">
        <div className="text-center">
          <p className="mb-0 text-white">
             All rights reserved © K-bip 2020. Copyright | Terms of Use. Developed
            &amp; Maintained by Invis Multimedia.
          </p>
        </div>
      </div>
    </section>
  </footer>
  
  )
}
