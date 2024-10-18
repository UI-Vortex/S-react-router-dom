import { Parallax } from 'react-parallax';
import second from '../img/spacex-PIOgkhaF3WA-unsplash.jpg'

const ImageTwo = () => (
    <Parallax className='image' bgImage={second} strength={700}>
        <div className='content'>
            <span className='img-txt'>A trip to space</span>
        </div>
    </Parallax>
);

export default ImageTwo