import React from 'react'
import styles from './Bio.module.scss'
import { PropTypes } from 'prop-types';

export default function Bio({ headshot, name, tagline, role }) {
    return (
        <div className={styles.bio}>
            <div className={styles.bioImage}>
            <img src={headshot} alt={`Headshot of ${name}`} />
            </div>
            
            <div className={styles.bioContent}>
                <p className={styles.bioContentName}>{name}</p>
                <p className={styles.bioContentTagline}>{tagline}</p>
                <p className={styles.bioContentRole}>{role}</p>
            </div>
        </div>
    )
}


Bio.propTypes = {
    headshot: PropTypes.string,
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
}
