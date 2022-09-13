import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Editor} from "@tinymce/tinymce-react";
import EditorJodit from "./components/Editor";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <EditorJodit/>

          {/*<Editor*/}
          {/*    textareaName='content'*/}
          {/*    initialValue='write your content here'*/}
          {/*    init={{*/}
          {/*        // skin: false,*/}
          {/*        content_css: false,*/}
          {/*        height: 500,*/}
          {/*        // menubar: false,*/}
          {/*        plugins: [*/}
          {/*            'link image',*/}
          {/*            'table paste'*/}
          {/*        ],*/}
          {/*        toolbar:*/}
          {/*            'undo redo | formatselect | bold italic backcolor | \*/}
          {/*            alignleft aligncenter alignright alignjustify | \*/}
          {/*            bullist numlist outdent indent | removeformat | help'*/}
          {/*    }}*/}
          {/*    // onEditorChange={(e)=>{setBody(e.target.value)}}*/}
          {/*/>*/}
      </div>
    );
  }
}

export default App;
