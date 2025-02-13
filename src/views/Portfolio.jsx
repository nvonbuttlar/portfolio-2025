import StanleyHomepageVideo from '../assets/stanley-homepage.webm'
import ShowcaseCard from '../components/ShowcaseCard';

export default function Portfolio() {
  return (
    <div className="view">
      <div className='view__header'>
        <h1>Porfolio</h1>
        <p>Some of my latest work:</p>      
      </div>
      <div className='view__content'>
        <ShowcaseCard 
          company={'Stanley 1913'}
          description={'Built the main Hero module that is present throughout the site used throughout the site, and various sliders for the homepage. All modules you see are built as Javascript Web Components, and all sliders leverage the Swiper.js library.'}
          tech={'Liquid, HTML, SCSS, JS'}
          video={StanleyHomepageVideo} 
        />
        <ShowcaseCard 
          company={'Stanley 1913'}
          description={'Built the main Hero module that is present throughout the site used throughout the site, and various sliders for the homepage. All modules you see are built as Javascript Web Components, and all sliders leverage the Swiper.js library.'}
          tech={'Liquid, HTML, SCSS, JS'}
          video={StanleyHomepageVideo} 
        />
        <ShowcaseCard 
          company={'Stanley 1913'}
          description={'Built the main Hero module that is present throughout the site used throughout the site, and various sliders for the homepage. All modules you see are built as Javascript Web Components, and all sliders leverage the Swiper.js library.'}
          tech={'Liquid, HTML, SCSS, JS'}
          video={StanleyHomepageVideo} 
        />
      </div>
    </div>
  );
}