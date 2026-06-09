import React from "react";
import "./About.css";
import "./Ab.css";
import whyBg from "../assets/aboutus.png";





// Services Array
// Services Array with numbers instead of icons
const services = [
  {
    icon: <span className="service-number">1</span>,
    title: "Medical Consumables and Disposables",
    description: "Providing high-quality consumables and disposable medical products for hospitals and clinics."
  },
  {
    icon: <span className="service-number">2</span>,
    title: "Surgical Instruments",
    description: "Offering precision surgical instruments for all medical and surgical procedures."
  },
  {
    icon: <span className="service-number">3</span>,
    title: "Physiotherapy and Rehabilitation",
    description: "Providing equipment and solutions for effective physiotherapy and rehabilitation programs."
  },
  {
    icon: <span className="service-number">4</span>,
    title: "Dental Division",
    description: "Complete range of dental equipment and supplies for clinics and laboratories."
  },
  {
    icon: <span className="service-number">5</span>,
    title: "CSSD And Infection Control",
    description: "Solutions for sterilization, infection control, and safe medical practices."
  },
  {
    icon: <span className="service-number">6</span>,
    title: "Emergency and PPE Supplies",
    description: "Providing essential emergency equipment and personal protective gear for medical staff."
  },
  {
    icon: <span className="service-number">7</span>,
    title: "Lab & Analytical",
    description: "Laboratory instruments, analytical devices, and support for scientific research."
  },
  {
    icon: <span className="service-number">8</span>,
    title: "Medical & Lab Furniture",
    description: "Durable and ergonomic furniture designed for medical and laboratory environments."
  },
  {
    icon: <span className="service-number">9</span>,
    title: "Medical Furniture",
    description: "High-quality furniture tailored for healthcare facilities."
  },
  {
    icon: <span className="service-number">10</span>,
    title: "Healthcare & General Furniture",
    description: "Wide range of furniture solutions for hospitals, clinics, and general spaces."
  },
];


const About = () => {
  return (
    <div className="about-page">

      <section className="nav-buffer"></section>
      <section className="about-section">
      {/* IMAGE COLUMN */}
      <div className="about-image-wrapper">
        <div className="about-image-frame">
          <img src={whyBg} alt="Dental Care" />
        </div>
      </div>

      {/* CONTENT COLUMN */}
      <div className="about-content">
        <span className="about-tag">ABOUT US</span>

        <h1 className="about-heading">
          Your Trust.  <br /> Our Care.
        </h1>

        <p>
          Vendor Trading W.L.L. is a company specializing in medical and furniture
supplies, offering a wide range of products including medical devices,
equipment, consumables, laboratory devices, dental materials,
instruments, disposables, and healthcare and general furniture.
Founded in 2022, we have quickly built a reputation for trust, quality,
and reliability.

        </p>

        <p>

We are committed to staying at the forefront of scientific and medical
advancements, ensuring our clients receive the best possible products
and service.

        </p>

        <p>
          Our aim is to provide long-term growth and value to our customers by
transforming innovative ideas into actionable solutions. With exceptional
service and a committed team of professionals, Vendor Trading W.L.L. is
set for continued growth and expansion.
          </p>
      </div>
    </section>



      {/* ================= LEADERSHIP ================= */}
      <section className="leadership">
  {/* LEFT : CHAIRPERSON */}
  <div className="leadership-left">
    <div className="leader-card">
      <h2>Chairperson</h2>

      <p>
        "Since its founding, Vendor Medical Trading has been a
leader in providing top-quality medical services and
products, setting high standards for the industry. Our
success is driven by a commitment to excellence,
innovative thinking, and careful resource management.

      </p>

      <p>
        Our vision is to become the leading healthcare provider in
Qatar, establishing a new benchmark for the industry. With
a dedicated management team and a highly skilled
workforce, we are committed to providing exceptional
service to every client in Qatar.

      </p>
      <p>I extend my sincere thanks to our valued customers and
business partners for their continued trust in Vendor
Medical Trading, and to our dedicated team for their hard
work, commitment, and dedication."</p>
      <p className="leader-name">
        SHEIKHA NOORA AHMED KH A AL THANI
      </p>
    </div>
  </div>

  {/* RIGHT : MANAGING DIRECTOR */}
  <div className="leadership-right">
    <div className="leader-overlay">
      <div className="leader-card">
        <h2>Managing Director</h2>

        <p>
          “Vendor Medical's mission is to empower customers and the
community by providing exceptional resources and
services. As a leading medical services solutions provider in
Qatar, we offer state-of-the-art infrastructure, premium
medical and industrial facilities, and cutting-edge
technology, significantly contributing to the advancement
of the nation's scientific and healthcare sectors.

        </p>

        <p>
          Beyond serving the community, we are dedicated to
improving all aspects of healthcare. By translating
innovation into transformative solutions, we aim to deliver
sustainable growth and value to our customers.

        </p>
      <p>We are committed to staying at the forefront of emerging
trends in the scientific and medical fields to offer our clients
the best possible solutions."</p>
        <p className="leader-name">
          HEILA SOWAYED S JOHAR
        </p>
      </div>
    </div>
  </div>
</section>


      {/* ================= VALUES ================= */}
      <section className="values-section">
  <h2 className="values-title">Our Values</h2>

  <div className="values-table">
    {/* ===== HEADER ROW ===== */}
    <div className="values-row header-row">
      <div className="cell">Integrity & Ethics</div>
      <div className="cell">Teamwork & Collaboration</div>
      <div className="cell">Innovation & Growth</div>
    </div>

    {/* ===== CONTENT ROW ===== */}
    <div className="values-row content-row">
      <div className="cell value-bg bg-1">
        <div className="glass">
          <p>Honesty</p>
          <p>Accountability</p>
          <p>Confidentiality</p>
          <p>Professionalism</p>
        </div>
      </div>

      <div className="cell value-bg bg-2">
        <div className="glass">
          <p>Collaboration</p>
          <p>Clear Communication</p>
          <p>Mutual Support</p>
          <p>Shared Responsibility</p>
        </div>
      </div>

      <div className="cell value-bg bg-3">
        <div className="glass">
          <p>Continuous Improvement</p>
          <p>Innovation</p>
          <p>Learning Culture</p>
          <p>Sustainable Growth</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ================= TABLE SECTION ================= */}
      <section className="table-section">
  <div className="table-overlay"></div>

  <div className="table-content">
    <div className="table-card">
      <h3>Vision</h3>
      <p>
        Utilize innovative technologies and solutions to transform the
        organization into a world-class model.
      </p>
    </div>

    <div className="table-card">
      <h3>Mission</h3>
      <p>
        Enable organizations through secure, scalable, and patient-centric
        digital solutions.
      </p>
    </div>

    <div className="table-card">
      <h3>Our Team</h3>
      <p>
        A multidisciplinary team of professionals committed to delivering
        excellence and clinical-grade quality.
      </p>
    </div>
  </div>
</section>


      {/* ================= FLOATING IMAGE ================= */}
      
   
      

      
      <section className="about-services">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>
          Providing high-quality healthcare solutions across consumables, instruments, rehab & dental equipment, PPE, labs, and furniture.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="services-btn">
          <a href="/services">
            <button>Explore More</button>
          </a>
        </div>

      </section>

      {/* GALLERY */}
      <section className="gallery-section">
        <div className="gallery-heading">
          <h1>Our Gallery</h1>
        </div>

        <div className="gallery-collage">
          <div className="collage-item item-1"><img src="../assets/y.jpg" alt="" /></div>
          <div className="collage-item item-2"><img src="../assets/y.jpg" alt="" /></div>
          <div className="collage-item item-3"><img src="../assets/y.jpg" alt="" /></div>
          <div className="collage-item item-4"><img src="../assets/y.jpg" alt="" /></div>
          <div className="collage-item item-5"><img src="../assets/y.jpg" alt="" /></div>
        </div>
      </section>

    </div>
  );
};

export default About;
