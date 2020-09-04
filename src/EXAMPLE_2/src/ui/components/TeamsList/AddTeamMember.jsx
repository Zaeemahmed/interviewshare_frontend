import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Icon, Input, Button } from 'antd';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { FormattedMessage, useIntl } from 'react-intl';
import { gqlAddTeamMember } from '@/api/Mutations/Team';
import { gqlAllTeams } from '@/api/Queries/Team';
import { TeamContext } from '@/api/Context/TeamContext';

export default function AddTeamMember({ isManager }) {
    const intl = useIntl();
    const { team, teamRefetch } = useContext(TeamContext);
    let teamId = team.id;

    const [isEditing, setEditing] = useState(false);
    const [email, setEmail] = useState('');

    const apolloClient = useApolloClient();

    const [addTeamMember] = useMutation(gqlAddTeamMember, {
        update(
            cache,
            {
                data: {
                    addOrUpdateMembership: {
                        team: { organizationUsers },
                    },
                },
            }
        ) {
            const teamCache = cache.readQuery({ query: gqlAllTeams });
            let AllTeams = teamCache.allTeams;

            let newTeam = {
                ...teamCache,
            };

            for (let i = 0; i < AllTeams.length; i++) {
                if (AllTeams[i].id === teamId) {
                    AllTeams[i].organizationUsers = [
                        ...AllTeams[i].organizationUsers,
                        {
                            inviteeEmail: email,
                        },
                    ];
                    break;
                }
            }

            apolloClient.writeQuery({
                query: gqlAllTeams,
                data: { allTeams: newTeam.allTeams },
            });

            teamRefetch();
        },
    });

    const clickAddTeamMember = e => {
        e.stopPropagation();

        setEmail(e.target.value);

        addTeamMember({
            variables: {
                teamId: teamId,
                inviteeEmail: email,
                isManager: isManager,
            },
        });

        setEditing(false);
    };

    return (
        <div>
            {!isEditing ? (
                <Div
                    wrapper
                    onClick={() => {
                        setEditing(true);
                    }}
                >
                    <Div plus>
                        <Icon type="plus" />
                    </Div>
                    <p style={{ marginBottom: 0 }}>
                        {isManager ? (
                            <FormattedMessage defaultMessage="Add Team Manager" />
                        ) : (
                            <FormattedMessage defaultMessage="Add Team Member" />
                        )}
                    </p>
                </Div>
            ) : (
                <Div inputdiv>
                    <div>
                        <EmailInput
                            placeholder={intl.formatMessage({
                                id: 'AddTeamMember Email',
                                defaultMessage: 'Please enter Email',
                            })}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            autoFocus
                        />
                    </div>
                    <Div buttons>
                        <Button
                            size="small"
                            data-testid="cancelButton"
                            onClick={() => {
                                setEditing(false);
                            }}
                            style={{ marginRight: '5px' }}
                        >
                            <FormattedMessage defaultMessage="Cancel" />
                        </Button>
                        <Button
                            size="small"
                            data-testid="addTeamButton"
                            onClick={clickAddTeamMember}
                            type="primary"
                        >
                            <FormattedMessage defaultMessage="Invite" />
                        </Button>
                    </Div>
                </Div>
            )}
        </div>
    );
}

AddTeamMember.propTypes = {
    isManager: PropTypes.bool,
};

const Div = styled.div`
    ${props =>
        props.plus &&
        css`
            border: 1px solid #ecebeb;
            border-radius: 50%;
            height: 30px;
            width: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 18px;
            margin-right: 10px;
        `}
    ${props =>
        props.wrapper &&
        css`
            padding: 10px;
            border: 1px solid #ecebeb;
            border-radius: 10px;
            height: 65px;
            width: 265px;
            margin-right: 2%;
            margin-bottom: 20px;
            display: flex;
            justify-content: left;
            align-items: center;
            cursor: pointer;
        `}
    ${props =>
        props.inputdiv &&
        css`
            padding: 10px;
            border: 1px solid #5ad192;
            border-radius: 10px;
            height: 85px;
            width: 265px;
            margin-right: 2%;
            margin-bottom: 20px;
            box-shadow: 0px 0px 3px #5ad192;
            z-index: 10;
            position: relative;
            display: block;
        `}
    ${props =>
        props.buttons &&
        css`
            text-align: right;
            margin-top: 5px;
        `}
`;

const EmailInput = styled(Input)`
    border: none !important;
    :focus,
    :hover {
        border: none !important;
        box-shadow: none !important;
    }
`;
