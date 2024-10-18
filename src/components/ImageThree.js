import { Parallax } from 'react-parallax';
import Three from '../img/tyler-van-der-hoeven-_ok8uVzL2gI-unsplash.jpg'

const ImageThree = () => (
    <Parallax className='image' bgImage={Three} strength={700}>
        <div className='content'>
            <span className='img-txt'>A trip to space</span>
        </div>
    </Parallax>
);

export default ImageThree