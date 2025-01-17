import React from 'react';

function Alert(props) {
    const capitalize = (word) => {
        const lower = word?.toLowerCase();
        return lower ? lower.charAt(0).toUpperCase() + lower.slice(1) : "";
    };

    return (
        <div style={{ height: props.height || '60px' }}>
            {props.alert && (
                <div 
                    className={`alert alert-${props.alert.type} alert-dismissible fade show`} 
                    role={props.alert.type === "error" ? "alertdialog" : "alert"}
                >
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                    <button 
                        className="btn-close" 
                        data-bs-dismiss="alert" 
                        aria-label="Close"
                    ></button>
                </div>
            )}
        </div>
    );
}

export default Alert;
