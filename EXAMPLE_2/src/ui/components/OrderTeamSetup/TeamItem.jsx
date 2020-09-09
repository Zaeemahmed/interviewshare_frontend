import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, Icon } from 'antd';
import ButtonX from '@/ui/atoms/Buttons/ButtonX';
import IconTeamContainer from '@/ui/atoms/Icons/IconTeamContainer';
import SearchTeamContainer from './TeamSearch';

function TeamItem({
    id,
    containerName,
    assignedTeam,
    allTeams,
    selectTeam,
    unassignTeam,
}) {
    return (
        <Col span={6}>
            <ContainerName>{containerName}</ContainerName>
            {assignedTeam && assignedTeam.name ? (
                <TeamDiv>
                    <Team>
                        <TeamNameWrapper>
                            <IconTeamContainer>
                                <Icon type="team" />
                            </IconTeamContainer>
                            <TeamName>{assignedTeam.name}</TeamName>
                        </TeamNameWrapper>
                    </Team>
                    <ButtonX onClick={unassignTeam} />
                </TeamDiv>
            ) : (
                <SearchTeamContainer
                    id={id}
                    allTeams={allTeams}
                    containerName={containerName}
                    selectTeam={selectTeam}
                />
            )}
        </Col>
    );
}

TeamItem.propTypes = {
    id: PropTypes.string,
    containerName: PropTypes.string,
    assignedTeam: PropTypes.object,
    allTeams: PropTypes.array,
    selectTeam: PropTypes.func,
    unassignTeam: PropTypes.func,
};

const ContainerName = styled.p`
    font-weight: 700;
`;

const TeamDiv = styled.div`
    background-color: #fff;
    border: 1px solid #ecebeb;
    border-radius: 10px;
    height: 50px;
    max-width: 270px;
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
`;

const Team = styled.div`
    display: flex;
    align-items: center;
`;

const TeamNameWrapper = styled.div`
    display: flex;
`;

const TeamName = styled.p`
    margin: 0;
    line-height: 30px;
`;

export default TeamItem;
