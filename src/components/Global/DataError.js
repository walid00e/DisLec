import './DataError.css'

const DataError = (props) => {
    return (
        <div className="data-error-container  rounderCorn dropShadow">
            <p className="data-error-log">{props.msg}</p>
        </div>
    );
}

export default DataError;