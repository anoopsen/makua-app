import React from 'react';
import styles from './NonProfiteHeader.module.css';



const NonProfiteHeader = () => {
    return (
        <>
            <div className={styles['image-container']}>
                <img
                    src="/images/Nonprofit-Header.png"
                    alt="Profile"
                    className={styles.imageheader}
                />

            </div>
            <div className={styles.imageoverlay}>
                <img
                    src="/images/Photo.png"
                    alt="Profile"
                    className={styles.secondimageheader}
                />
            </div>
        </>
    )
}

export default NonProfiteHeader
