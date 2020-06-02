import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../../../components/Base/Base';
import IconCheckpoint from '../components/IconCheckpoint';
import { FormatValuesContext } from '../../../../context/FormatValuesContext';

export default function CheckpointStartups() {
    let formatValue = useContext(FormatValuesContext);
    return (
        <IconCheckpoint
            size={{
                _: '110px',
                md: '110px',
                lg: '135px',
                xl: '150px',
                xxl: '155px',
            }}
        >
            <Text color="green" textAlign="center" lineHeight="12px">
                <FormattedMessage
                    defaultMessage="
                    <header>4</header>
                    <subheader>Startups</subheader>
                    <rest>Co-Founded</rest>"
                    values={formatValue}
                />
            </Text>
        </IconCheckpoint>
    );
}
