import StanleyHomepageVideo from '../assets/stanley-homepage.webm'
import StanleyPdpVideo from '../assets/stanley-pdp.webm'
import StanleyAccountVideo from '../assets/stanley-account.webm'
import ShowcaseCard from '../components/ShowcaseCard';
import ResumeButtons from '../components/ResumeButtons';

export default function Portfolio() {
  return (
    <div className='view dev'>
      <div className='view__header'>
        <h1>Porfolio</h1>  
      </div>
      <div className='view__content'>
        <ResumeButtons />
        <div className='dev-cards'>
          <ShowcaseCard 
            company={'Stanley 1913'}
            description={'Built the main Hero module that is present throughout the site, and various sliders for the homepage. All modules you see are built as Javascript Web Components, and all sliders leverage the Swiper.js library.'}
            tech={'Liquid, HTML, SCSS, JS'}
            video={StanleyHomepageVideo}
            startFrame={'#t=5.5'}
          />
          <ShowcaseCard 
            company={'Stanley 1913'}
            description={'Built the main PDP, and this modified version for a special launch. The image gallery leverages Shopify\'s Section Rendering API to avoid loading all variant images on page load, and the sticky add to cart is triggered with Intersection Observer.'}
            tech={'Liquid, HTML, SCSS, JS'}
            video={StanleyPdpVideo} 
          />
          <ShowcaseCard 
            company={'Stanley 1913'}
            description={'Built the custom login, register, and account experience. The account dashboard uses the Section Rendering API to load in native account pages without reloading the page. The custom marketing promo\'s on the Dashboard are merchandised through Metaobjects.'}
            tech={'Liquid, HTML, SCSS, JS'}
            video={StanleyAccountVideo} 
          />
        </div>
      </div>
    </div>
  );
}