import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'


// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

import FroalaEditorComponent from 'react-froala-wysiwyg';

// Import all Froala Editor plugins;
import 'froala-editor/js/plugins.pkgd.min.js';

// Import a single Froala Editor plugin.
// import 'froala-editor/js/plugins/align.min.js';

// Import a language file.
// import 'froala-editor/js/languages/de.js';

// Import a third-party plugin.
// import 'froala-editor/js/third_party/image_tui.min.js';
// import 'froala-editor/js/third_party/embedly.min.js';
// import 'froala-editor/js/third_party/spell_checker.min.js';

// Include font-awesome css if required.
// install using "npm install font-awesome --save"
// import 'font-awesome/css/font-awesome.css';
// import 'froala-editor/js/third_party/font_awesome.min.js';

// Include special components if required.
// import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
// import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
// import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
// import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
// import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';

// Render Froala Editor component.
ReactDOM.render(<FroalaEditorComponent tag='textarea'/>, document.getElementById('editor'));

export default function NewPostForm() {

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography>Title</Typography>
                <TextField 
                    variant = "outlined"
                    width = "100%"
                />
            </Grid>
            <Grid item xs={12}>
                <Typography>Poster</Typography>
                <TextField
                    variant = "filled"
                    disabled                
                />
            </Grid>
            <Grid item xs={12}>
            <FroalaEditorComponent
  tag='textarea'
  config={this.config}
  model={this.state.model}
  onModelChange={this.handleModelChange}
/>
            </Grid>

            <Grid item xs={12}>
                <Button variant = "contained" color = "primary">Publish</Button>
            </Grid>
        </Grid>
    )
}
 