import React, { useState } from 'react';
// Предполагается, что CSS стили применены

function Popup() {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            {isOpen && (
                <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        Notify
                        <button onClick={closeModal}>Закрыть</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Popup;