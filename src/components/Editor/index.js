import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import '../Editor/Style/index.css'

const EditorJodit = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = {
            readonly: false, // all options from https://xdsoft.net/jodit/doc/
            height: 500,
        };

    const handleSave = () => {
        localStorage.setItem('document', content)
    }

    const loadDoc = () => {
        setContent(localStorage.getItem('document'))
    }

    return (
        <div>
            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />

            <div className="Btns">
                <button onClick={handleSave}>Gravar Documento</button>
                <button onClick={loadDoc}>Carregar o último</button>
                <button onClick={()=> setContent('')}>Novo</button>
            </div>
        </div>


    );
};

export default EditorJodit;