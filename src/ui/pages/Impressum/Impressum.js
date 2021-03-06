import React from 'react';
import { Box } from '../../components/Base/Base';
import Layout from '../../templates/Layout';
import TextAdress from './sections/TextAdress';
import TextPrivacyPolicy from './sections/TextPrivacyPolicy';
import TextTermsOfService from './sections/TextTermsOfService';
import TextSecurityOverview from './sections/TextSecurityOverview';

export default function Impressum() {
    return (
        <Layout>
            <Box lineHeight="1.3rem" mt="2rem" p="0 15px">
                <TextAdress />
                <TextTermsOfService />
                <TextPrivacyPolicy />
                <TextSecurityOverview />
            </Box>
        </Layout>
    );
}
