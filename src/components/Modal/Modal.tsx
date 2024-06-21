// Modal.tsx
import React, { ReactNode } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalCloseButton} onClick={onClose}>
                    <img
                        src="/images/close.png"
                        alt="Profile"
                        className={styles.closebtn}
                    />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
