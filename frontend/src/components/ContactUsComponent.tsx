import React from 'react';
import Subscribe from './Subscribe';
import CustomHeading from './CustomHeading';
import { assets } from '../assets/assets';
const ContactUsComponent: React.FC = () => {
  const head={
    t1:"CONTACT",
    t2:"US"
  }
  const {
    contact_img
  }=assets
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <CustomHeading { ...head} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="relative w-full h-[400px] bg-light-background  rounded-lg overflow-hidden">
          <img
            src={contact_img}
            alt="Workspace"
          />
        </div>

        {/* Contact Information */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-light-primary ">
              Our Store
            </h2>
            <address className="not-italic text-light-secondary  space-y-4">
              <p>54709 Willms Station</p>
              <p>Suite 350, Washington, USA</p>
              <div className="pt-4">
                <p>Tel: (415) 555-0132</p>
                <p>Email: admin@forever.com</p>
              </div>
            </address>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-light-primary ">
              Careers at Forever
            </h2>
            <div className="space-y-4">
              <p className="text-light-secondary ">
                Learn more about our teams and job openings.
              </p>
              <button className="px-6 py-3 border-2 border-light-accent  text-light-accent  hover:bg-light-accent hover:text-white  transition-colors duration-200 rounded-lg">
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <Subscribe />
      </div>
    </div>
  );
};






export default ContactUsComponent;
