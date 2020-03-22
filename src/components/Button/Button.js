import React from 'react';
import styles from './Button.module.scss'

const Button = ({children, href}) => {
    return (
        <>
            {
                href ? (
                        <a
                            href={href}
                            target="_blank"
                            className={styles.button}
                        >
                            {children}
                        </a>
                    )
                    :
                    (
                        <button className={styles.button}>
                            {children}
                        </button>
                    )
            }
        </>
    )
};

export default Button;