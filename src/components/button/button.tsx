import classes from "./button.module.scss";
import { ICard } from "../../models/ICard";
import Img1 from '../../assets/png/qw.png';
import Img2 from '../../assets/png/Car Parking.png';
import Img3 from '../../assets/png/Toilet.png';
import Img4 from '../../assets/png/Castle w Tree (1).png';
import Img5 from '../../assets/png/Flower and Tree.png';
import Img6 from '../../assets/png/History.png';
import Img7 from '../../assets/png/Walking Routes.png';
import Img8 from '../../assets/png/Viewpoints.png';
import Img9 from '../../assets/png/Picnic Tables.png';
import Img10 from '../../assets/png//Kids Play Park.png';
import Img11 from '../../assets/png/Fairy Trail.png';
import Img12 from '../../assets/png/Places of Interest.png';
import Img13 from '../../assets/png/No Swimming.png';
import Img14 from '../../assets/png/Lifebuoys_copy_1280x1280.png';

const Button = ({ src, text, }: ICard) => {
    const buttonsData = [
        {
            id: 0,
            src: Img1,
            text: 'Entrance & Exit '
        },
        {
            id: 1,
            src: Img2,
            text: 'Car Parking'
        },
        {
            id: 2,
            src: Img3,
            text: 'Toilets'
        },
        {
            id: 3,
            src: Img4,
            text: 'Balloch Park & Castle'
        },
        {
            id: 5,
            src: Img5,
            text: 'Gardens, Woods & Fairy Glen'
        },
        {
            id: 6,
            src: Img6,
            text: 'History'
        },
        {
            id: 6,
            src: Img7,
            text: 'Nature Trails & Walks'
        },
        {
            id: 7,
            src: Img8,
            text: 'Viewpoints'
        },
        {
            id: 8,
            src: Img9,
            text: 'Picnic Tables'
        },
        {
            id: 9,
            src: Img10,
            text: 'Kids Play Areas'
        },
        {
            id: 10,
            src: Img11,
            text: 'The Fairy Trail'
        },
        {
            id: 11,
            src: Img12,
            text: 'Points of Interest'
        },
        {
            id: 12,
            src: Img13,
            text: 'Dangerous Waters'
        },
        {
            id: 13,
            src: Img14,
            text: 'Lifebouys'
        },
    ];
    return (
        <div className={classes.container} >
            {buttonsData.map((button: any) => (

                <button key={button.id} className={classes.btn}>
                    <img src={button.src} alt="btn" />
                    <p>{button.text}</p>
                </button>
            )
            )}




        </div>
    );
};
export default Button;