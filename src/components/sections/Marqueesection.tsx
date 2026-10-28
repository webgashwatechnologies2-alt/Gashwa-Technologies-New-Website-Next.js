import Image from 'next/image';
import shopifyLogo from '../../../public/assets/img/service/shopify.png';

// Types
interface MarqueeItem {
  name: string;
  logo: string | typeof shopifyLogo;
}

const MARQUEE_ITEMS: MarqueeItem[] = [
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Shopify', logo: shopifyLogo },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
  { name: 'Illustrator', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
];

export default function Marqueesection() {
  const repeatedItems: MarqueeItem[] = [
    ...MARQUEE_ITEMS,
    ...MARQUEE_ITEMS,
    ...MARQUEE_ITEMS,
  ];

  return (
    <div className="marque-section section-padding marquee-section-custom">
      <div className="container-fluid">
        <div className="marquee-wrapper style-2 text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item style-2">
                {repeatedItems.map((item: MarqueeItem, index: number) => (
                  <span key={`${item.name}-${index}`}>
                    <span className="text-slider">
                      <Image
                        src={item.logo as string}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="marquee-logo-img"
                        unoptimized={typeof item.logo === 'string' && item.logo.startsWith('http')}
                      />
                    </span>
                    <span className="text-slider text-style">{item.name}</span>
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
