import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Text } from '../../../components/Base/Base';
import IconCheckpoint from '../components/IconCheckpoint';
import { FormatValuesContext } from '../../../../context/FormatValuesContext';

export default function CheckpointDevelopers() {
    let formatValue = useContext(FormatValuesContext);
    return (
        <IconCheckpoint
            size={{
                _: '80px',
                md: '80px',
                lg: '105px',
                xl: '125px',
                xxl: '130px',
            }}
        >
            <Text
                color="green"
                textAlign="center"
                lineHeight="14px"
                maxWidth="100px"
            >
                <FormattedMessage
                    defaultMessage="
                    <header>16</header>
                    <subheader>Junior</subheader>
                    <rest>Developers Mentored</rest>"
                    values={formatValue}
                />
            </Text>
        </IconCheckpoint>
    );
}
