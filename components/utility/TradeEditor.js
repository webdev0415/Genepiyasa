
import React from 'react';
import dynamic from 'next/dynamic'
import { convertToRaw, convertFromRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import draftToMarkdown from 'draftjs-to-markdown';
import ReactMarkdown from 'react-markdown'
import {connect} from "react-redux"
import {addTrade} from "../../store/action/actions"
import styled from 'styled-components'
import TextInput from './TextInput'
import SelectInput from './SelectInput'
import { mdToDraftjs, draftjsToMd } from 'draftjs-md-converter';
// const convertToRaw = dynamic(() => import('draft-js').then(mod => mod.convertToRaw),{ssr:false})
const Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor),{ssr:false})
// const draftToMarkdown = require("draftjs-to-markdown")
// const draftToMarkdown = ()=>{
//   dynamic(()=>import('draftjs-to-markdown'),{ssr:false})
// }



const EditorConvertToMarkdown = ({addTrade, categorys, username }) => {
  
  const subject = React.useRef(null);
  const author = username
  const initState = {
        "trade_subject": "",
        "trade_content": "",
        "trade_author": author,
        "trade_category": "",
        "trade_status_flag": "waiting"
      }
  const [postVal, setPostVal] = React.useState(initState)

  const [editorState, setEditorState] = React.useState()

    let convertVal
    if (editorState !== undefined) {
    	convertVal =  draftjsToMd(convertToRaw(editorState.getCurrentContent()))
    }

    const onEditorStateChange = (editorState) => {
      setEditorState(editorState)
      setPostVal(Object.assign({}, postVal, {"trade_content": convertVal}))
    };
    const handelSubjectChange = e => {
      setPostVal(Object.assign({}, postVal, {"trade_subject": e.target.value}))
    }
    const handelCategoryChange = e => {
      setPostVal(Object.assign({}, postVal, {"trade_category": e.target.value}))
    }
    const handleCreateClick = (postVal) => {
      // console.log("postVal", postVal);
      addTrade(postVal)
      
    }
    const handleChange = () => {

    }

    return (
      <EditorContainer>
        <SeclectBar className="row">
          <TextInput icon="email" label="Subject" id="subject" onChange={handelSubjectChange} required={true}/>
          <SelectInput icon="email" label="Category" id="subject" onChange={handelCategoryChange} categorys={categorys} required={true}/>

        </SeclectBar>
        <EditorContentWrapper className="row">
  	      <EditorContent>
  		        <Editor
  		          onEditorStateChange={onEditorStateChange}
  		        />
  	      </EditorContent>
  	      <PreviewContent>
  	      	<PreviewTitle>Preview</PreviewTitle>
  	      	<div>
  	      		<ReactMarkdown source={convertVal} />
  	      	</div>
  	      </PreviewContent>
        </EditorContentWrapper>
        <PostButton onClick={(a) => handleCreateClick(postVal)}>POST</PostButton>
      </EditorContainer>
    );
}
const PreviewTitle = styled.h1`
  padding: 3px 7px;
`
const EditorContainer = styled.div`
  
`
const SeclectBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`
const EditorContentWrapper = styled.div`
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  min-height: 75vh;
`
const EditorContent = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  background-color: white;
  font-size: 1.8rem;
`
const PreviewContent = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  background-color: lightgray;
`
const PostButton = styled.button`
  margin-top: 1rem;
  padding: 1.5rem;
  border: 0.1rem solid rgb(152, 53, 255);
  background-color: rgba(152, 53, 255, 0.1);
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.purpleButtonSecondaryText};
`
const mapStateToProps = state => ({
  categorys: state.blogs.categorys,
  username: state.auth.user.username
})
const mapDispatchToProps = dispatch => ({
  addTrade: (a) => dispatch(addTrade(a))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditorConvertToMarkdown)
