import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H2, P } from '../../components/Base';
import { Text } from '../../../../components/Base/Base';

export default function CommunicationAndFileTransmission() {
    return (
        <div>
            <H2>
                <FormattedMessage defaultMessage="5. Communication & File Transmission" />
            </H2>
            <P>
                <FormattedMessage
                    defaultMessage="All files stored at rest are encrypted. All data in transit between our website forms, web apps, APIs, and devices are encrypted with most of our service providers using TLS (<span>Transport Layer Security</span>) for data transmission, establishing a secure channel protected by a 256 bit AES (<span>Advanced Encryption Standard</span>) encryption. However, not all email communications (incoming or outgoing) are encrypted as some web services require emails to be decrypted in order to be sent or read. Please consider this before emailing us any Personally Identifiable and Proprietary Information.{linebreak}
IMPORTANT: THE SECURITY OF YOUR DATA AND PERSONALLY IDENTIFIABLE AND PROPRIETARY INFORMATION IS IMPORTANT TO US AND WE TAKE REASONABLE PRECAUTIONS TO KEEP YOUR DATA SAFE, BUT REMEMBER THAT NO METHOD OF TRANSMISSION OVER THE INTERNET, OR METHOD OF ELECTRONIC STORAGE, IS 100% SECURE. FOR MORE INFORMATION PLEASE READ OUR <span>TERMS OF SERVICE</span> AND <span>PRIVACY POLICY</span>.{linebreak}
If you have any questions or concerns about our security protocols, please email <span>mail@maximiliangarmatsch.com</span>."
                    values={{
                        span: chunks => (
                            <Text as="span" color="white">
                                {chunks}
                            </Text>
                        ),
                        linebreak: (
                            <>
                                <br />
                                <br />
                            </>
                        ),
                    }}
                />
            </P>
        </div>
    );
}
