import { useState } from 'react';

function useBurgerMenu() {
    const [showingMenu, setShowingMenu] = useState(false);
    const handleOpenMenu = () => {
        setShowingMenu(true);
    }
    const handleCloseMenu = () => {
        setShowingMenu(false);
    }
    return { handleOpenMenu, handleCloseMenu, showingMenu };
}

export default useBurgerMenu;