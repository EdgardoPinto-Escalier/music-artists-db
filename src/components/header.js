import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <header>
      <Link to="/"><i class="fas fa-volume-up"></i> MUSIC ARTISTS DB</Link>
    </header>
  )
}

export default Header;