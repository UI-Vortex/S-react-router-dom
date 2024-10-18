import { Parallax } from 'react-parallax';
import Nasa from '../img/doug-walters-QQ9MzSs-o1I-unsplash.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Nasa} strength={700}>
        <div className='content'>
            <span className='img-txt'>A trip to space</span>
        </div>
    </Parallax>
);

export default ImageOne