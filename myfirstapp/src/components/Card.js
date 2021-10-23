import './Card.css';

function card(props) {

    const classAll = 'card '+props.className;

    return (
        <div className={classAll}>{props.children}</div>
    )
}

export default card;