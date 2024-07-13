import { Box } from '@mui/system';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from '../../core/ui/config/slider';
import ExperienceCard from './ExperienceCard'
import { experiences } from '../../views/experiences';
import Experiences from '../Sections/Experiences';
import NextExperience from '../Experiences/NextExperience';

export default function ProjectCarousel() {
  
  
  let settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextExperience />,
    responsive: [
      {
        breakpoint: 1610,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          
        }
      }
    ]
  };

  return (
    /*className='slider-container'*/
    <Box
    gap="15px"
       >
      <Slider {...settings} >
        {
          experiences.map((experience, index) => {
            return (
              <ExperienceCard
                key={index}
                experience={{
                  imageUrl: experience.imageUrl,
                  title: experience.title,
                  commentary: experience.commentary,
                  username: experience.username ,
                  rating: experience.rating,
                  metier:experience.metier,
                  specialite : experience.specialite,

                }}
              />
            )
          })
        }
      </Slider>
    </Box>
  )
}
