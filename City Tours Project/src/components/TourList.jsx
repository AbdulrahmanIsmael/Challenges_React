import '../styles/tourlist.scss';
import Tours from './Tours';
import { tourData } from '../../public/tourData.js';

function TourList() {
  return (
    <section className='tours'>
      {tourData.map(tour => {
        return (
          <Tours
            key={tour.id}
            img={tour.img}
            city={tour.city}
            place={tour.name}
            info={tour.info}
          />
        );
      })}
    </section>
  );
}

export default TourList;
