import React from 'react';
import Slider from 'react-slick';
import SliderItem from './SliderItem';
import { Box } from '../../../../../components/Base/Base';
import { ForwardArrow, BackArrow } from '../../SlidingArrows';

const SliderItems = () => {
    const settings = {
        arrows: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ForwardArrow />,
        prevArrow: <BackArrow />,
    };
    const items = [
        {
            id: 1,
            src:
                'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.unsplash.com%2Fphoto-1522098543979-ffc7f79a56c4%3Fixlib%3Drb-1.2.1%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb%26w%3D1080%26fit%3Dmax%26ixid%3DeyJhcHBfaWQiOjEyMDd9&f=1&nofb=1',
        },
        {
            id: 2,
            src:
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.takeshape.io%2F1f1d0876-be74-4b33-99c8-6ac93f1d70db%2Fdev%2Fb998e714-c99e-463e-af27-fca874b3a881%2Fhenrik-hansen-1415978-unsplash.jpg%3Fauto%3Dcompress%252Cformat&f=1&nofb=1',
        },
        {
            id: 3,
            src:
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F3b%2F21%2F79%2F3b2179fc8020f022c95b814eb23af3e0--men-eyeglasses-glasses-for-men.jpg&f=1&nofb=1',
        },
    ];

    return (
        <Box>
            <Slider {...settings}>
                {items.map(item => (
                    <SliderItem src={item.src} key={item.id} />
                ))}
            </Slider>
        </Box>
    );
};

export default SliderItems;
