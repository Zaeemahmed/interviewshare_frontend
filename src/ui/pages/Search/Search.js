import React from 'react';
import { Grid } from '@material-ui/core';
import { Box } from '../../components/Base/Base';
import SearchForm from './SearchForm';
import SearchHeading from './components/SearchHeading';


const Search = () => {
    return (
        <Box>
            <Grid
                container
                style={{
                    background: '#E5E5E5',
                    margin: '1rem 0',
                    padding:'1rem 0'
                }}
                justify="center"
            >
                <Grid
                    item
                    sm={8}
                    xs={10}
                    md={5}
                    lg={4}
                    style={{
                        background: '#FFF',
                        borderRadius: '10px',
                        padding: '1rem',
                    }}
                >
                    <SearchHeading />
                    <Box>
                        <SearchForm/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Search;
