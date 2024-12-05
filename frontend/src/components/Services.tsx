import { assets } from '../assets/assets';
import Subscribe from './Subscribe';

const Services = () => {
  const { exchange_icon, support_img, quality_icon } = assets;

  const arrayOfServices = [
    {
      img: exchange_icon,
      serviceTag: 'Easy Exchange Policy',
      serviceDesc: 'We offer hassle free exchange policy',
    },
    {
      img: support_img,
      serviceTag: '7 Days Return Policy',
      serviceDesc: 'We provide 7 days free return policy',
    },
    {
      img: quality_icon,
      serviceTag: 'Best customer support',
      serviceDesc: 'We provide 24/7 customer support',
    },
  ];

  return (
    <div className="w-full bg-light-background/50 py-16">
      <div className="container mx-auto px-6">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {arrayOfServices.map((service, index) => (
            <div 
              key={index} 
              className="flex items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <img src={service.img} alt={service.serviceTag} className="w-12 h-12 mr-4 object-contain" />
              <div>
                <h3 className="font-semibold text-light-primary mb-2">{service.serviceTag}</h3>
                <p className="text-light-secondary">{service.serviceDesc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Section */}
        <Subscribe></Subscribe>
      </div>
    </div>
  );
};

export default Services;