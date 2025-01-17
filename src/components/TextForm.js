import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        if (text.trim().length === 0) {
          props.showAlert('Nothing to change to uppercase!', 'warning');
          return;
        }
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase.', 'success');
    };

    const handleLowClick = () => {
        if (text.trim().length === 0) {
          props.showAlert('Nothing to change to lowercase!', 'warning');
          return;
        }
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase.', 'success');
    };

    const clearText = () => {
        if (text.trim().length === 0) {
          props.showAlert('Nothing to clear!', 'warning');
          return;
        }
        setText('');
        props.showAlert('Text has been cleared.', 'success');
    };

    const copyText = () => {
        if (text.trim().length === 0) {
            props.showAlert('Nothing to copy!', 'warning');
            return;
        }
        navigator.clipboard.writeText(text);
        props.showAlert('Text copied to clipboard!', 'success');
    };

    const extraSpaces = () => {
        if (text.trim().length === 0) {
          props.showAlert('Nothing to remove extra spaces!', 'warning');
          return;
        }
        let newText = text.split(/[ ]+/).join(' ');
        setText(newText);
        props.showAlert('Extra spaces are removed.', 'success');
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState('');

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                color: props.mode === 'dark' ? 'white' : '#031f48',
                paddingBottom: '100px', // Ensures space for the footer
            }}
        >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <div
                    className="p-3"
                    style={{
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px',
                        justifyContent: 'center',
                    }}
                >
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={handleUpClick}
                    >
                        Uppercase
                    </button>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={handleLowClick}
                    >
                        Lowercase
                    </button>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={copyText}
                    >
                        Copy
                    </button>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={clearText}
                    >
                        Clear
                    </button>
                    <button
                        className="btn btn-primary btn-sm"
                        onClick={extraSpaces}
                    >
                        Remove Spaces
                    </button>
                </div>
                <textarea
                    className="form-control mt-3"
                    value={text}
                    onChange={handleOnChange}
                    style={{
                        backgroundColor: props.mode === 'dark' ? '#333' : 'white',
                        color: props.mode === 'dark' ? 'white' : '#031f48',
                        minHeight: '150px',
                        maxHeight: '400px',
                        overflowY: 'auto',
                    }}
                    rows="8"
                />
            </div>
            <div className="mt-3">
                <h2>Your text summary</h2>
                <p>
                    {text.split(/\s+/).filter((element) => element.length !== 0).length} words,{' '}
                    {text.length} characters
                </p>
                <h3>Preview</h3>
                <p
                    style={{
                        maxHeight: '300px',
                        overflowY: 'auto',
                        border: '1px solid #ccc',
                        padding: '10px',
                        borderRadius: '5px',
                    }}
                >
                    {text.length > 0 ? text : 'Enter something to preview it here.'}
                </p>
            </div>
        </div>
    );
}
