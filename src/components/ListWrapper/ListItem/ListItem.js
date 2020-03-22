import React from 'react';
import styles from './ListItem.module.scss';
import PropTypes from 'prop-types';

const ListItem = ({image, name, description, twitterLink}) => {
    return (
        <li className={styles.wrapper}>
            <img
                src={image}
                className={styles.image}
                alt={name}/>
            <div>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.description}>{description}</p>
                <a href={twitterLink} target="_blank" className={styles.button}>
                    visit twitter page
                </a>
            </div>
        </li>
    )

};

ListItem.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    twitterLink: PropTypes.string.isRequired,
};
ListItem.defaultProps = {
    image: null,
    description: 'One of React creators'
}

export default ListItem;