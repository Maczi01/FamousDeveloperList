import React from 'react';
import styles from './ListItem.module.scss';
import PropTypes from 'prop-types';
import Button from "../../Button/Button";
import Title from "../../Title/Title";

const ListItem = ({image, name, description, twitterLink}) => {
    return (
        <li className={styles.wrapper}>
            <img
                src={image}
                className={styles.image}
                alt={name}/>
            <div>
                <Title>{name}</Title>
                <p className={styles.description}>{description}</p>
                <Button href={twitterLink}>view Twitter</Button>
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