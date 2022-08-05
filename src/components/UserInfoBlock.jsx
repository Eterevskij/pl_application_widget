import React from 'react';
import styles from './UserInfoBlock.module.css';
import user from '../img/User.jpg';

const UserInfoBlock = (props) => {

    const { role, name, photo } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>

                <div className={styles.photoWrapper}>

                    {photo ?
                        <img src={user} /> :
                        <div className={styles.photoPlug}>
                            <p className={styles.photoPlug__text}>{name.middle[0]}
                                                                  {name.last[0]}</p>
                        </div>
                    }
                    
                </div>

            </div>

            <div className={styles.right}>

                <p className={styles.role}>{role}</p>
                <p className={styles.name}>{`${name.first}
                                            ${name.middle}
                                            ${name.last}`}</p>

            </div>
        </div>
    )
}

export default UserInfoBlock; 