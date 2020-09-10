import React from 'react';
import 'date-fns';
import { useParams, useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Layout from '../../templates/Layout';
import SubmissionSystemForm from './SubmissionSystemForm';

function a11yProps(index) {
    return {
        id: `SubmissionSystemTab-${index}`,
        'aria-controls': `SubmissionSystem-TabPanel-${index}`,
    };
}

export default function SubmissionSystemCreate() {
    let { eventId, tab } = useParams();
    tab = parseInt(tab, 10) || 0;
    const history = useHistory();

    const tabs = ['Overview', 'page2', 'page3'];

    const defaultValues = {
        name: '',
        mnemonic: '',
        description: '',
        start_time: null,
        end_time: null,
        location: '',
        city: '',
        language: '',
        is_closed: false,
    };

    return (
        <Layout loading={false} error={false}>
            <AppBar position="static">
                <Tabs
                    value={tab}
                    onChange={(e, newTab) =>
                        history.push(
                            '/submissionSystemCreate/' + eventId + '/' + newTab
                        )
                    }
                    aria-label="Tabs"
                    centered
                >
                    {tabs.map((t, index) => (
                        <Tab
                            key={'SubmissionSystemTab' + index}
                            label={t}
                            {...a11yProps(index)}
                        />
                    ))}
                </Tabs>
            </AppBar>
            {tabs.map((t, index) => (
                <div
                    key={'SubmissionSystemTabContent' + index}
                    role="tabpanel"
                    hidden={tab !== index}
                    id={`SubmissionSystem-TabPanel-${index}`}
                    aria-labelledby={`SubmissionSystem-Tab-${index}`}
                >
                    {tab === index && (
                        <SubmissionSystemForm
                            loading={false}
                            defaultValues={defaultValues}
                        />
                    )}
                </div>
            ))}
        </Layout>
    );
}
