import React, { useState } from 'react';
import { Box, Paper, TextField, Button } from '@mui/material';
import { EditorState, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const CreatePost = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(ContentState.createFromText(''))
  );

  const handleEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleSubmit = () => {
    // Access the content from editorState
    const content = editorState.getCurrentContent();
    console.log('Content:', content);
    // Further handling or submission logic here
  };

  return (
    <Box className="h-screen p-12 lg:p-20 text-white lg:m-custom-ml-15">
      <Paper component={'form'} className="p-12">
        <TextField
          margin={"normal"}
          fullWidth
          autoComplete=""
          type="text"
          id="postTitle"
          name="postTitle"
          label="Post Title"
        />
        <TextField
          margin={"normal"}
          fullWidth
          type="text"
          autoComplete=""
          id="postCategory"
          name="postCategory"
          label="Post Category"
        />
        <TextField
          margin={"normal"}
          fullWidth
          type="text"
          autoComplete=""
          id="postTag"
          name="postTag"
          label="Post Tag"
        />
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={handleEditorStateChange}
        />
        <Button sx={{ my: 1.5 }} variant={'contained'} onClick={handleSubmit}>Update</Button>
      </Paper>
    </Box>
  );
};

export default CreatePost;
