import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, List } from 'antd';
import { FormattedMessage, useIntl } from 'react-intl';
import styled, { css } from 'styled-components';
import IconTeamContainer from '@/ui/atoms/Icons/IconTeamContainer';
import CreateTeam from './TeamCreate/TeamCreate';

export default function TeamSearch({ id, allTeams, selectTeam }) {
    const intl = useIntl();
    const [searchValue, setSearchValue] = useState('');
    const [isCreateTeamFormVisible, setCreateTeamFormVisible] = useState(false);
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    const dropDownRef = useRef(null);

    useOuterClickNotifier(
        e => {
            setIsDropDownVisible(false);
            setCreateTeamFormVisible(false);
        },
        dropDownRef,
        id
    );

    const filterTeams = teamName => {
        const _teamName = teamName.trim();
        if (!teamName) return [];

        const pattern = new RegExp('^' + _teamName, 'i');
        const _filteredTeams = allTeams.filter(_team =>
            pattern.test(_team.name)
        );
        return _filteredTeams;
    };

    const createTeam = () => {
        setSearchValue('');
        setCreateTeamFormVisible(true);
    };

    const clickTeamListItem = item => {
        selectTeam(item);
        setSearchValue(item.name);
        setIsDropDownVisible(false);
    };

    const onClickInput = () => {
        if (isDropDownVisible) {
            setCreateTeamFormVisible(false);
        }
        setIsDropDownVisible(!isDropDownVisible);
    };

    return (
        <div>
            <TeamDiv focused={searchValue || isCreateTeamFormVisible}>
                <Team>
                    <StyledInput
                        id={id + 'input'}
                        placeholder={intl.formatMessage({
                            id: 'TeamSearch Enter Team Name',
                            defaultMessage: 'Enter Team Name',
                        })}
                        onChange={e => setSearchValue(e.target.value)}
                        value={searchValue}
                        onClick={onClickInput}
                    />
                </Team>
            </TeamDiv>

            {isDropDownVisible && (
                <Popup ref={dropDownRef}>
                    {!isCreateTeamFormVisible ? (
                        <div>
                            {searchValue !== '' &&
                                filterTeams(searchValue).length !== 0 && (
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={filterTeams(searchValue)}
                                        renderItem={item => (
                                            <StyledListItem
                                                onClick={() =>
                                                    clickTeamListItem(item)
                                                }
                                            >
                                                <List.Item.Meta
                                                    avatar={
                                                        <IconTeamContainer>
                                                            <Icon type="team" />
                                                        </IconTeamContainer>
                                                    }
                                                    title={
                                                        <Title>
                                                            {item.name}
                                                        </Title>
                                                    }
                                                />
                                            </StyledListItem>
                                        )}
                                    />
                                )}
                            <Team>
                                <IconTeamContainer>
                                    <Icon type="team" />
                                </IconTeamContainer>
                                <Button
                                    size="small"
                                    id={id + 'button'}
                                    onClick={() => createTeam()}
                                >
                                    <FormattedMessage defaultMessage="Create new Team" />
                                </Button>
                            </Team>
                        </div>
                    ) : (
                        <CreateTeam
                            setNewTeamVisible={setCreateTeamFormVisible}
                            allTeams={allTeams}
                            selectTeam={selectTeam}
                        />
                    )}
                </Popup>
            )}
        </div>
    );
}

const useOuterClickNotifier = (onOuterClick, innerRef, id) => {
    useEffect(
        () => {
            // Only add listener, if the element exists
            if (innerRef.current) {
                document.addEventListener('click', handleClick);
            }

            // Unmount previous click-listener to prevent memory leak
            return () => document.removeEventListener('click', handleClick);

            function handleClick(e) {
                if (e.target.id !== id + 'input') {
                    if (e.target.id !== id + 'button') {
                        innerRef.current &&
                            !innerRef.current.contains(e.target) &&
                            onOuterClick(e);
                    }
                }
            }
        },
        [onOuterClick, innerRef, id] // Invoke again, if inputs have changed
    );
};

TeamSearch.propTypes = {
    id: PropTypes.string,
    allTeams: PropTypes.array,
    selectTeam: PropTypes.func,
};

const Title = styled.p`
    font-weight: 700;
    margin-bottom: 0px;
`;

const StyledListItem = styled(List.Item)`
    cursor: pointer;
`;

const StyledInput = styled.input`
    border: none;
    outline: none;
`;

const Popup = styled.div`
    background-color: #fff;
    width: 270px;
    margin-top: 2px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px;
    -webkit-box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.13);
    -moz-box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.13);
    box-shadow: 0px 5px 9px 1px rgba(0, 0, 0, 0.13);
`;

const TeamDiv = styled.div`
    background-color: #fff;
    border: 1px solid #ecebeb;
    border-radius: 10px;
    height: 50px;
    max-width: 270px;
    width: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #ecebeb;
    ${props =>
        props.focused &&
        css`
            border: 1px solid #5ad192;
        `}
`;

const Team = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
