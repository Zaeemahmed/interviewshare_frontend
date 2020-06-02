import React from 'react';
import { FormattedMessage } from 'react-intl';
import { H1 } from '../components/Base';
import AcceptanceOfTOS from './TermsOfService/1_AcceptanceOfTOS';
import DescriptionOfService from './TermsOfService/2_DescriptionOfService';
import Purchases from './TermsOfService/3_Purchases';
import Subscriptions from './TermsOfService/4_Subscriptions';
import Delivery from './TermsOfService/5_Delivery';
import Rescheduling from './TermsOfService/6_Rescheduling';
import CancellationsAndRefunds from './TermsOfService/7_Cancellations&Refunds';
import DisclainerOfWarranties from './TermsOfService/8_DisclainerOfWarranties';
import LinksToOtherWebsites from './TermsOfService/9_LinksToOtherWebsites';
import Idemnity from './TermsOfService/10_Idemnity';
import LimitationOfLiability from './TermsOfService/11_LimitationOfLiability';
import ChangesToTOS from './TermsOfService/12_ChangesToTOS';
import Jurisdiction from './TermsOfService/13_Jurisdiction';

export default function TextTermsOfService() {
    return (
        <div>
            <H1>
                <FormattedMessage defaultMessage="Terms of Service" />
            </H1>
            <AcceptanceOfTOS />
            <DescriptionOfService />
            <Purchases />
            <Subscriptions />
            <Delivery />
            <Rescheduling />
            <CancellationsAndRefunds />
            <DisclainerOfWarranties />
            <LinksToOtherWebsites />
            <Idemnity />
            <LimitationOfLiability />
            <ChangesToTOS />
            <Jurisdiction />
        </div>
    );
}
