const BASE_URL = process.env.REACT_APP_BASE_URL;
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const ENDPOINTS = {
    SENDFEEDBACK: "contact_us/addContact_us",
    GETALL: 'screen_type/getAll',
    GETCONTENTS: 'contents/getContents',
    GETCONTENTSCARDS: 'contents_cards/getContentsCards',
};

export { BASE_URL, ENDPOINTS, SERVER_URL };
