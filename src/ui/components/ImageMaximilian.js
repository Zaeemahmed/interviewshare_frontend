import React from 'react';
import { Box } from './Base/Base';

export default function ImageMaximilian({ margin, size }) {
    return (
        <Box
            as="img"
            minWidth={
                size
                    ? size
                    : { _: '125px', sm: '125px', md: '180px', xxl: '236px' }
            }
            maxWidth={
                size
                    ? size
                    : { _: '125px', sm: '125px', md: '180px', xxl: '236px' }
            }
            height={
                size
                    ? size
                    : { _: '125px', sm: '125px', md: '180px', xxl: '236px' }
            }
            m={
                margin
                    ? margin
                    : {
                          _: '2rem auto',
                          sm: '2rem auto',
                          md: '0 3rem 0 0',
                          xxl: '0 5rem 0 0',
                      }
            }
            alignSelf="flex-start"
            borderRadius="15px 15px 15px 0"
            css={`
                box-shadow: -7px 7px 4px rgba(0, 0, 0, 0.25);
            `}
            src="/assets/Max.jpg"
            alt="Maximilian Garmatsch"
        />
    );
}
