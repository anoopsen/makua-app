// Profile.tsx
import React from 'react';
import Layout from '../Layout';
import styles from './Profile.module.css';


const Profile = () => {


    return (
        <Layout>
            <aside className={`${styles.profileSidebar} p-4`}>
                <img
                    src="/images/Nonprofit-logo.png"
                    alt="Profile"
                    className={styles.profileLogo}
                />
                <p className={styles.title}>Forrest Skerman-Stevenson</p>
                <p className={styles.text}>
                    I’m a humanitarian and animal rights activist.
                    Currently working as an engineer at SpaceX in sunny LA!
                </p>
                <p className={styles.location}>
                    Los Angeles, CA
                </p>
                <button className={styles.editButton} >
                    Edit Profile
                </button>
            </aside>


        </Layout>
    );
};

export default Profile;
