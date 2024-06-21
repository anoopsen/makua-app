import Link from 'next/link';
import styles from './sidebar.module.css';

const Sidebar = () => {
    return (
        <aside className={`${styles.sidebar} p-4`}>
            <nav>
                <ul>
                    <li >
                        <Link href="#">
                            <img src="/images/Makua-Logo-Horizontal.png" alt="Profile" className={styles.logoImage} />
                        </Link>
                    </li>
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
                    <h5 className={styles.communities}>COMMUNITIES</h5>
                    <li><Link href="#"><img src="/images/Nonprofit.png" alt="Profile" className={`${styles.icon} ${styles.logo}`} /><span className={styles.sidetext}>Merazonia</span></Link></li>
                    <li><Link href="#"><img src="images\Nonprofit-New.png" alt="Profile" className={`${styles.icon} ${styles.logo}`} /><span className={styles.sidetext}>GiveInternational</span></Link></li>


                    <div className={styles.downloadButtonContainer}>
                        <button className={styles.downloadButton}>
                            <img src="images\Vector2.png" alt="Profile" className={`${styles.icon} ${styles.logo}`} />
                            Download the app</button>
                    </div>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
