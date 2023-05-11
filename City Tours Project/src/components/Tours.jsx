import { useState } from 'react';

function Tours({ img, city, place, info }) {
  const [show, setShow] = useState(false);

  function handleRemove(e) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
  return (
    <article className='tour'>
      <div className='tour-img'>
        <img src={img} />
        <div className='close-btn'>
          <i className='fa-solid fa-rectangle-xmark' onClick={handleRemove}></i>
        </div>
      </div>
      <div className='tour-info'>
        <h2>{city}</h2>
        <h3>{place}</h3>
        <div className='show-info'>
          Info
          <i
            className='fa-solid fa-square-caret-down'
            onClick={() => setShow(prev => !prev)}
          ></i>
        </div>
        <div className='info'>{show && info}</div>
      </div>
    </article>
  );
}

export default Tours;
