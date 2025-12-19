import './Questions.scss'
import classNames from 'classnames'

const Questions = (props) => {
    const {
        className,
    } = props

    return (
        <div
            className={classNames(className, 'questions')}
        >
            Questions
        </div>
    )
}

export default Questions