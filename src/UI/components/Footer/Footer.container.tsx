import React, { FC } from 'react';
import {config} from '../../../config/site.config';
import './Footer.styles.css';

const THIS_YEAR = new Date().getFullYear();

export const Footer: FC = () => (
    <footer className='footer'>
        <div>
            <span className="footer_text">© {THIS_YEAR} {config.myName}</span>
            <a href={`mailto:${config.myEmail}`} className="footer_text">{config.myEmail}</a>
        </div>

        <span className="footer_slogan">{config.slogan}</span>
    </footer>
);
