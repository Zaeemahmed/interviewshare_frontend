import React from 'react';
import { Flex } from '../Base/Base';
import Icon from './Icon';

export default function PortfolioIcons() {
    return (
        <Flex
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-end"
            position="absolute"
            top="50%"
            css={`
                transform: translateY(-50%);
            `}
            right="5%"
            zIndex="5"
            height={{ md: '90px', xxl: '130px' }}
            width="84px"
        >
            <Icon
                height={{ md: '30px', xxl: '50px' }}
                width={{ md: '30px', xxl: '50px' }}
                to="https://github.com/maximiliangarmatsch"
                alt="GitHub"
                iconSrc="/assets/GitHub.png"
            />
            <Icon
                height={{ md: '30px', xxl: '50px' }}
                width={{ md: '30px', xxl: '50px' }}
                to="https://www.linkedin.com/in/maximilian-garmatsch/"
                alt="LinkedIn"
                iconSrc="/assets/LinkedIn.png"
            />
        </Flex>
    );
}
