import React, { useEffect, useState } from 'react'
import { HTTP_CLIENT } from '../../utils/config';
import { ENDPOINTS } from '../../utils/helpers';
import classes from "./privacypolicy.module.scss";
import parser from 'html-react-parser'

const PrivacyPolicy = () => {
    const [data, setData] = useState<string>('')
    useEffect(() => {
        HTTP_CLIENT.get(ENDPOINTS.GETPRIVACYPOLICY).then((response) => {
            const res = response.data.result.text
            setData(res)
        })


    }, [])
    return (
        <div className={classes.container} >
            {parser(data)}</div>
    )
}

export default PrivacyPolicy