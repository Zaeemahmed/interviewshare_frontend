import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../../../components/Base/Base';
import IconCheckpoint from '../components/IconCheckpoint';
import { FormatValuesContext } from '../../../../context/FormatValuesContext';

export default function CheckpointYears() {
    let formatValue = useContext(FormatValuesContext);
    return (
        <IconCheckpoint
            size={{
                _: '100px',
                md: '100px',
                lg: '125px',
                xl: '135px',
                xxl: '140px',
            }}
        >
            <Text color="green" textAlign="center" lineHeight="12px">
                <FormattedMessage
                    defaultMessage="
                    <header>14</header> 
                    <subheader>Years</subheader>
                    <rest>of Software Development</rest>"
                    values={formatValue}
                />
            </Text>
        </IconCheckpoint>
    );
}
