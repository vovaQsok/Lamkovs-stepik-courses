import './Tabs.scss'
import classNames from 'classnames'

const Tabs = (props) => {
    const {
        className,
    } = props

    return (
        <div
            className={classNames(className, 'tabs')}
        >
            Tabs
        </div>
    )
}

export default Tabs