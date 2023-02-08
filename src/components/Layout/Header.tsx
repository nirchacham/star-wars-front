import { Fragment } from "react"
import starWarsImage from '../../assets/starWars.jpeg';
import classes from './Header.module.css';
import Favorites from "../Favorites/Favorites";

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactStarWars</h1>
                <Favorites />
            </header>
            <div className={classes['main-image']}>
                <img src={starWarsImage} alt='Star-wars header image'/>
            </div>
        </Fragment>
    )
}

export default Header;