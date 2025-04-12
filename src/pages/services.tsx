import './services.css'; // Import the CSS file for styling

export const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <h2 className="services-subtitle">Here are the services we offer</h2>

      <div className="services-list">
        <ul className="services-items">
          {/* Service 1 */}
          <li className="service-item">
            <strong className="service-title">Flyers</strong>
            <img src="flyer.webp" alt="Flyers" className="service-image"/>
            <p className="service-description">
              We create eye-catching flyers for events, promotions, and marketing campaigns.<br></br> Our designs ensure your message gets noticed.
            </p>
           
            <p className="service-price"><strong>Price:</strong> Kshs. 1,500</p>
          </li>

          {/* Service 2 */}
          <li className="service-item">
            <strong className="service-title">Social Media Posts</strong>
            <img src="social.avif" alt="Flyers" className="service-image"/>
            <p className="service-description">
              We design visually appealing posts tailored to your brand's voice and goals, helping you engage with your audience on social media.
            </p>
            
            <p className="service-price"><strong>Price:</strong> Kshs. 2,000</p>
          </li>

          {/* Service 3 */}
          <li className="service-item">
            <strong className="service-title">Banners</strong>
            <img src="banner.jpg" alt="Flyers" className="service-image"/>
            <p className="service-description">
              High-quality banners designed for events, websites, or any promotions. We ensure your banner stands out and delivers your message effectively.
            </p>
            
            <p className="service-price"><strong>Price:</strong> Kshs. 3,500</p>
          </li>

          {/* Service 4 */}
          <li className="service-item">
            <strong className="service-title">Company Profiles</strong>
            <img src="company.jpg" alt="Flyers" className="service-image"/>
            <p className="service-description">
              Professionally designed company profiles that highlight your business, services, and values, helping you attract clients and investors.
            </p>
            
            <p className="service-price"><strong>Price:</strong> Kshs. 5,000</p>
          </li>

          {/* Service 5 */}
          <li className="service-item">
            <strong className="service-title">Product Catalogues</strong>
            <img src="catalogue.avif" alt="Flyers" className="service-image"/>
            <p className="service-description">
              We design detailed product catalogues that showcase your products in an attractive and professional manner, perfect for businesses and retailers.
            </p>
            
            <p className="service-price"><strong>Price:</strong> Kshs. 4,000</p>
          </li>

          {/* Service 6 */}
          <li className="service-item">
            <strong className="service-title">Website Banners & Ads</strong>
            <img src="company.jpg" alt="Flyers" className="service-image"/>
            <p className="service-description">
              Custom-designed website banners and ads to promote your business, products, or services online. Our designs ensure that your ad grabs attention and increases conversions.
            </p>
           
            <p className="service-price"><strong>Price:</strong> Kshs. 2,500</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
