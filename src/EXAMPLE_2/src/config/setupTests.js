/*
 Create-React-App demands that this file stays in ./src folder
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LocalStorageMock from '@/api/Mocks/LocalStorageMock';

configure({ adapter: new Adapter() });

/* Mock usable LocalStorage */
global.localStorage = new LocalStorageMock();

/* Mock for fetch -- see https://github.com/jefflau/jest-fetch-mock */
require('jest-fetch-mock').enableMocks();

/* Mock for react-intl useIntl hook */
jest.mock('react-intl', () => {
    const reactIntl = require.requireActual('react-intl');
    const intl = reactIntl.createIntl({ locale: 'en' });

    return {
        ...reactIntl,
        useIntl: () => intl,
    };
});
