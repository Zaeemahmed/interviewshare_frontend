import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H2, P } from '../../components/Base';

export default function LinksToOtherWebsites() {
    return (
        <div>
            <H2>
                <FormattedMessage defaultMessage="7. Links To Other Websites" />
            </H2>
            <P>
                <FormattedMessage defaultMessage="This web site contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects your Personally Identifiable and Proprietary Information." />
            </P>
        </div>
    );
}
