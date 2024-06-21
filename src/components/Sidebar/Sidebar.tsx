import Link from 'next/link';
import styles from './sidebar.module.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const Sidebar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };



    return (
        <>
            <aside className={`${styles.sidebar} p-4`}>
                <nav className={styles.nav}>
                    <ul className={styles.ulItems}>
                        <span>
                            <li >
                                <Link href="#">
                                    <img src="/images/Makua-Logo-Horizontal.png" alt="Profile" className={styles.logoImage} />
                                </Link>
                            </li>
                        </span>
                        <span>
                            <li>
                                <Link href="#">

                                    <img src="/images/Profile .png" alt="Profile" className={`${styles.icon} ${styles.logo}`} />
                                    <span className={styles.sidetext}>Profile</span>
                                </Link>
                            </li>
                            <li><Link href="#">
                                <img src="/images/Notifications.png" alt="Profile" className={`${styles.icon} ${styles.logo}`} />
                                <span className={styles.sidetext}>Notifications</span>
                            </Link>
                            </li>
                            <li><Link href="#">

                                <img src="/images/Settings.png" alt="Profile" className={`${styles.icon} ${styles.logo}`} />
                                <span className={styles.sidetext}>Settings</span>
                            </Link>
                            </li>
                        </span>
                        <span>
                            <h5 className={styles.communities}>COMMUNITIES</h5>
                            <span className={styles.listContainer}>
                                <li className={styles.options}><img src="/images/Nonprofit.png" alt="Profile" className={`${styles.icon} ${styles.logo}`} /><span onClick={handleOpenModal}>Merazonia</span></li>
                                <li className={styles.options}><img src="images\Nonprofit-New.png" alt="Profile" className={`${styles.icon} ${styles.logo}`} /><span >GiveInternational</span></li>
                            </span>
                        </span>


                        <div className={styles.downloadButtonContainer}>
                            <button className={styles.downloadButton}>
                                <img src="images\Vector2.png" alt="Profile" className={`${styles.icon} ${styles.logo}`} />
                                Download the app</button>
                        </div>
                    </ul>
                </nav>


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

        </>
    );
};

export default Sidebar;
