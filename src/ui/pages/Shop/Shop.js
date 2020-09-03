import React from 'react';
import Slider from 'react-slick';
import { Box } from '../../components/Base/Base';
import SliderDiv from './components/SliderDiv';
import SliderItem from './components/SliderItem';
import Nav from './components/Nav';
export default function Shop() {
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const items = [
        {
            src:
                'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.unsplash.com%2Fphoto-1522098543979-ffc7f79a56c4%3Fixlib%3Drb-1.2.1%26q%3D80%26fm%3Djpg%26crop%3Dentropy%26cs%3Dtinysrgb%26w%3D1080%26fit%3Dmax%26ixid%3DeyJhcHBfaWQiOjEyMDd9&f=1&nofb=1',
            title: 'Syze Dielli',
            price: '30',
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing\n' +
                '                        elit. Odit ducimus accusantium vitae iure harum, ipsum\n' +
                '                        maxime debitis voluptas explicabo reprehenderit! Magnam\n' +
                '                        harum ex laborum, earum iure doloremque necessitatibus\n' +
                '                        voluptates assumenda.',
        },
        {
            src:
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.takeshape.io%2F1f1d0876-be74-4b33-99c8-6ac93f1d70db%2Fdev%2Fb998e714-c99e-463e-af27-fca874b3a881%2Fhenrik-hansen-1415978-unsplash.jpg%3Fauto%3Dcompress%252Cformat&f=1&nofb=1',
            title: 'Syze Luani',
            price: '40',
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing\n' +
                '                        elit. Odit ducimus accusantium vitae iure harum, ipsum\n' +
                '                        maxime debitis voluptas explicabo reprehenderit! Magnam\n' +
                '                        harum ex laborum, earum iure doloremque necessitatibus\n' +
                '                        voluptates assumenda.',
        },
        {
            src:
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.takeshape.io%2F1f1d0876-be74-4b33-99c8-6ac93f1d70db%2Fdev%2Fb998e714-c99e-463e-af27-fca874b3a881%2Fhenrik-hansen-1415978-unsplash.jpg%3Fauto%3Dcompress%252Cformat&f=1&nofb=1',
            title: 'Syze Luani',
            price: '40',
            description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing\n' +
                '                        elit. Odit ducimus accusantium vitae iure harum, ipsum\n' +
                '                        maxime debitis voluptas explicabo reprehenderit! Magnam\n' +
                '                        harum ex laborum, earum iure doloremque necessitatibus\n' +
                '                        voluptates assumenda.',
        },
    ];

    return (
        <Box as="div" width="100%" height="100vh">
            <Nav />

            <SliderDiv>
                <Slider {...settings} >
                    {items.map(item => (
                        <SliderItem
                            imageSrc={item.src}
                            title={item.title}
                            price={item.price}
                        >
                            {item.description}
                        </SliderItem>
                    ))}
                </Slider>
            </SliderDiv>
        </Box>
    );
}
