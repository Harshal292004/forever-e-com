import { assets } from '../assets/assets';
import Subscribe from './Subscribe';
import CustomHeading from './CustomHeading';


const AboutUsComponent = () => {
  const { contact_img } = assets;
  const head={
    t1:"About",
    t2:"Us"
  }
  return (
    <div className="w-full bg-light-background">
      {/* Main Content Container */}
      <div className="container mx-auto px-6 py-16">
        {/* About Us Section */}
        <CustomHeading
        {...head}
        >

        </CustomHeading>
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          <div className="w-full lg:w-1/2">
            <img
              src={contact_img}
              alt="About Forever"
              className="w-full h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="mt-8 lg:mt-0 w-full lg:w-1/2 space-y-6">
            <div className="prose prose-lg">
              <p className="text-light-secondary leading-relaxed">
                Forever was born out of a passion for innovation and a desire to
                revolutionize the way people shop online. Our journey began with a
                simple idea: to provide a platform where customers can easily
                discover, explore, and purchase a wide range of products from the
                comfort of their homes.
              </p>
              <p className="text-light-secondary leading-relaxed">
                Since our inception, we've worked tirelessly to curate a diverse
                selection of high-quality products that cater to every taste and
                preference. From fashion and beauty to electronics and home
                essentials, we offer an extensive collection sourced from trusted
                brands and suppliers.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-light-primary mb-4">Our Mission</h3>
                <p className="text-light-secondary leading-relaxed">
                  Our mission at Forever is to empower customers with choice,
                  convenience, and confidence. We're dedicated to providing a
                  seamless shopping experience that exceeds expectations, from
                  browsing and ordering to delivery and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-light-primary">WHY CHOOSE US</h2>
            <div className="mx-auto mt-2 h-0.5 w-16 bg-light-accent"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h4 className="text-lg font-semibold text-light-primary mb-4">
                Quality Assurance
              </h4>
              <p className="text-light-secondary">
                We meticulously select and vet each product to ensure it meets our
                stringent quality standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h4 className="text-lg font-semibold text-light-primary mb-4">
                Convenience
              </h4>
              <p className="text-light-secondary">
                With our user-friendly interface and hassle-free ordering process,
                shopping has never been easier.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <h4 className="text-lg font-semibold text-light-primary mb-4">
                Exceptional Customer Service
              </h4>
              <p className="text-light-secondary">
                Our team of dedicated professionals is here to assist you the way,
                ensuring your satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="mt-24">
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;