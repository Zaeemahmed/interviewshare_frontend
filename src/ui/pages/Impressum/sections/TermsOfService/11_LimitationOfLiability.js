import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { H2, P } from '../../components/Base';
import { Text } from '../../../../components/Base/Base';

export default function LimitationOfLiability() {
    return (
        <div>
            <H2>
                <FormattedMessage defaultMessage="11. Limitation Of Liability" />
            </H2>
            <P>
                <FormattedMessage
                    defaultMessage="TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU AGREE THAT MAXIMILIAN FRANZ PETER GARMATSCH SHALL NOT BE LIABLE TO YOU FOR ANY DAMAGES ARISING OUT OF YOUR USE OF, OR INABILITY TO USE, THE SERVICE, INCLUDING, WITHOUT LIMITATION, ANY AND ALL DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, PUNITIVE, SPECIAL, EXEMPLARY OR STATUTORY DAMAGES (INCLUDING, WITHOUT LIMITATION, LOSS OF BUSINESS, LOSS OR PROFITS, LOSS OF REVENUE, LOSS OF DATA, LEAK/HACK/STOLEN DATA OR DATA AND PERSONALLY IDENTIFIABLE AND PROPRIETARY INFORMATION OTHERWISE OBTAINED BY ANY THIRD PARTY NOT ENTITLED TO HAVE IT IS DUE TO CAUSES BEYOND OUR REASONABLE CONTROL., LOSS OF GOODWILL OR FOR ANY COST OF COVER OR COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES), EVEN IF MAXIMILIAN FRANZ PETER GARMATSCH HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, AND REGARDLESS OF THE LEGAL THEORY UNDER WHICH DAMAGES ARE SOUGHT, WHETHER IN BREACH OF CONTRACT OR IN TORT, INCLUDING NEGLIGENCE. {linebreak}
You acknowledge that you have read, understand and agree to Maximilian Franz Peter Garmatsch’s Privacy Policy located at <a>https://maximiliangarmatsch.com/impressum</a>, which is hereby incorporated into and made a part of these Terms of Service by this reference. {linebreak}
Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the limitations of the foregoing sections may not apply to you. IN THESE STATES, MAXIMILAN FRANZ PETER GARMATSCH’S LIABILITY WILL BE LIMITED TO THE FULLEST EXTENT PERMITTED BY LAW."
                    values={{
                        a: chunks => (
                            <Text
                                as={Link}
                                color="white"
                                css={`
                                    text-decoration: none;
                                    color: #fff !important;
                                `}
                                to="/impressum"
                            >
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
