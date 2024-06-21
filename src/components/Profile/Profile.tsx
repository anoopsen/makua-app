// Profile.tsx
import React, { useState } from 'react';
import Layout from '../Layout';
import styles from './Profile.module.css';
import Modal from '../Modal/Modal';


const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


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
                <button className={styles.editButton} onClick={handleOpenModal}>
                    Edit Profile
                </button>
            </aside>


            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className={styles.imgprofile}>
                        <div>
                            <img
                                src="/images/pexels-photo.png"
                                alt="Profile"
                                className={styles.profileLogo2}
                            />
                        </div>
                        <div className={styles.ForrestContainer}>
                            <div className={styles.ForrestHeader}>Forrest Skerman-Stevenson</div>
                            <div className={styles.posting}>Posting to Merazonia</div>

                        </div>
                    </div>


                    <textarea
                        className={styles.textareacom}
                        placeholder="What do you want to talk about?"
                    />

                    <hr className={styles.hori} />


                    <div className={styles.ProfileContainer}>
                        <div className={styles.buttonrow}>
                            <button className={styles.emojibtn}>
                                <img
                                    src="/images/Environment.png"
                                    alt="Profile"
                                    className={styles.emoji}
                                />
                                <span className={styles.emojitext}>Emoji</span>
                            </button>

                            <button className={styles.emojibtn}>
                                <img
                                    src="/images/gal.png"
                                    alt="Profile"
                                    className={styles.emoji}
                                />
                                <span className={styles.emojitext}>Photo</span>
                            </button>

                            <button className={styles.emojibtn}>
                                <img
                                    src="/images/video.png"
                                    alt="Profile"
                                    className={styles.emoji}
                                />
                                <span className={styles.emojitext}>Video</span>
                            </button>

                            <button className={styles.emojibtn}>
                                <img
                                    src="/images/gif.png"
                                    alt="Profile"
                                    className={styles.emoji}
                                />
                                <span className={styles.emojitext}>GIF</span>
                            </button>

                            <button className={styles.emojibtn}>
                                <img
                                    src="/images/poll.png"
                                    alt="Profile"
                                    className={styles.emoji}
                                />
                                <span className={styles.emojitext}>Poll</span>
                            </button>
                        </div>


                        <button className={`${styles.postButton} bg-pink-500 text-white py-2 px-4 rounded-lg`}>
                            <img
                                src="/images/right-arrow.png"
                                alt="Profile"
                                className={styles.rightarrowLogo}
                            />
                            Post</button>
                    </div>

                </div>
            </Modal>
        </Layout>
    );
};

export default Profile;
