import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Icon, Input } from 'antd';
import styled from 'styled-components';
import { FormattedMessage, useIntl } from 'react-intl';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { gqlAllTeams } from '@/api/Queries/Team';
import { gqlCreateTeam } from '@/api/Mutations/Team';
import ButtonCancel from '@/ui/atoms/Buttons/ButtonCancel';
import IconTeamContainer from '@/ui/atoms/Icons/IconTeamContainer';
import './TeamCreate.css';

export default function TeamCreate({
    setNewTeamVisible,
    allTeams,
    selectTeam,
}) {
    const apolloClient = useApolloClient();
    const intl = useIntl();
    const [newTeamName, setNewTeamName] = useState('');
    const [newTeamEmail, setNewTeamEmail] = useState('');
    const [errorMessageName, setErrorMessageName] = useState('');
    const [errorMessageEmail, setErrorMessageEmail] = useState('');

    const [CreateNewTeam] = useMutation(gqlCreateTeam, {
        update(cache, { data: { newTeam } }) {
            const teamCache = cache.readQuery({ query: gqlAllTeams });

            let AllTeams = teamCache.allTeams.push(newTeam);

            apolloClient.writeQuery({
                query: gqlAllTeams,
                data: { allTeams: AllTeams },
            });
        },
    });

    function createNewTeam() {
        let hasError = false;
        setErrorMessageEmail('');
        setErrorMessageName('');

        let nameAlreadyExist = allTeams
            .map(team => team.name)
            .indexOf(newTeamName);

        if (newTeamEmail.length === 0) {
            hasError = true;
            setErrorMessageEmail('Please add your email address.');
        }
        if (newTeamName.length === 0) {
            hasError = true;
            setErrorMessageName('Please add your team name.');
        }
        if (nameAlreadyExist !== -1) {
            hasError = true;
            setErrorMessageName('Team name is already used.');
        }

        if (!hasError) {
            CreateNewTeam({
                variables: {
                    managerEmail: newTeamEmail,
                    name: newTeamName,
                },
            }).then(response => {
                let team = response?.data?.createTeam?.team || {};
                selectTeam(team);
            });

            setNewTeamName('');
            setNewTeamEmail('');
            setErrorMessageEmail('');
            setErrorMessageName('');
            setNewTeamVisible(false);
        }
    }

    return (
        <div className="TeamCreate">
            <Header>
                <IconTeamContainer>
                    <Icon type="team" />
                </IconTeamContainer>
                <Title>
                    <FormattedMessage defaultMessage="Create new Team" />
                </Title>
            </Header>
            <div>
                <Form>
                    <Form.Item
                        label={intl.formatMessage({
                            id: 'TeamCreate New Team Name label',
                            defaultMessage: 'Team Name',
                        })}
                        validateStatus={
                            errorMessageName.length > 0 ? 'error' : 'success'
                        }
                        help={errorMessageName}
                    >
                        <Input
                            placeholder={intl.formatMessage({
                                id: 'TeamCreate New Team Name',
                                defaultMessage: 'Enter',
                            })}
                            value={newTeamName}
                            onChange={e => {
                                setNewTeamName(e.target.value);
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label={intl.formatMessage({
                            id: 'TeamCreate Team Manager label',
                            defaultMessage: 'Team Manager',
                        })}
                        validateStatus={
                            errorMessageEmail.length > 0 ? 'error' : 'success'
                        }
                        help={errorMessageEmail}
                    >
                        <Input
                            placeholder={intl.formatMessage({
                                id: 'TeamCreate New Team Email',
                                defaultMessage: 'Enter Email',
                            })}
                            value={newTeamEmail}
                            onChange={e => {
                                setNewTeamEmail(e.target.value);
                            }}
                        />
                    </Form.Item>
                </Form>
            </div>
            <Footer>
                <ButtonCancel onClick={() => setNewTeamVisible(false)} />
                <Button size="small" onClick={createNewTeam} type="primary">
                    <FormattedMessage defaultMessage="Create Team" />
                </Button>
            </Footer>
        </div>
    );
}

TeamCreate.propTypes = {
    setNewTeamVisible: PropTypes.func,
    allTeams: PropTypes.array,
    selectTeam: PropTypes.func,
};

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.div`
    margin-left: 20px;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;
