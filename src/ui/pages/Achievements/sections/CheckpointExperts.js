import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../../../components/Base/Base';
import IconCheckpoint from '../components/IconCheckpoint';
import { FormatValuesContext } from '../../../../context/FormatValuesContext';

export default function CheckpointLines() {
    let formatValue = useContext(FormatValuesContext);
    return (
        <IconCheckpoint
            size={{
                _: '105px',
                md: '105px',
                lg: '125px',
                xl: '145px',
                xxl: '150px',
            }}
        >
            <Text
                color="green"
                textAlign="center"
                lineHeight="14px"
                width="90px"
            >
                <FormattedMessage
                    defaultMessage="
                    <header>50+</header> 
                    <subheader>digital experts</subheader> 
                    <rest>in my network</rest>"
                    values={formatValue}
                />
            </Text>
        </IconCheckpoint>
    );
}
