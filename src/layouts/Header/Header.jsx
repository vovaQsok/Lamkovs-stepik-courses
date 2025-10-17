import './Header.scss'
import Logo from "@/components/Logo";
import classNames from "classnames";

const Header = (props) => {
    const {
        url,
    } = props

    const menuItems = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Movies & Shows',
            href: '/movies'
        },
        {
            label: 'Support',
            href: '/support'
        },
        {
            label: 'Subscriptions',
            href: '/subscriptions'
        },
    ]

    return (
        <header className="header">
            <div className="header__inner container">
                <Logo
                    className="header__logo"
                    loading="eager"
                />
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        {menuItems.map(({label, href}, index) => (
                            <li className = "header__menu-item" key={index}>
                                <a
                                    className={classNames('header__menu-link', {
                                        'is-active': href === url
                                    })}
                                    href={href}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header