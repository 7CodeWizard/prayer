import React, { useState, useRef } from 'react'
import {
  Button,
  Container,
  Row,
  Col,
  // Alert,
  ListGroup,
  ListGroupItem,
  // Progress,
  Input
} from 'reactstrap'

const FileUpload = ({ onChange }) => {
  // const [selectedFiles, setSelectedFiles] = useState([])
  // const [uploadProgress, setUploadProgress] = useState(0)
  // const [uploadError, setUploadError] = useState(null)
  const [previewUrls, setPreviewUrls] = useState([])
  const fileInputRef = useRef(null)

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files)
    // setSelectedFiles(files)
    onChange(event)
    const newPreviewUrls = files.map(file => URL.createObjectURL(file))
    setPreviewUrls(newPreviewUrls)
  }

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  return (
    <Container>
      <Row>
        <Col md={{ size: 6, offset: 3 }} className='mb-5 mt-4'>
          <div className='text-center mb-3'>
            <Button color='info' onClick={handleButtonClick}>Upload Image</Button>
            <Input
              type="file"
              name="file"
              id="file"
              onChange={handleFileChange}
              multiple
              innerRef={fileInputRef}
              style={{ display: 'none' }}
            />
          </div>
          {previewUrls.length > 0 && (
            <ListGroup>
              {previewUrls.map((url, index) => (
                <ListGroupItem key={index}>
                  <img src={url} alt={`Preview ${index}`} style={{ width: '100%' }} />
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
          {/* {uploadError && (
            <Alert color="danger" className="mt-3">
              {uploadError}
            </Alert>
          )}
          {uploadProgress > 0 && (
            <Progress value={uploadProgress} className="mt-3">
              {uploadProgress}%
            </Progress>
          )} */}
        </Col>
      </Row>
    </Container>
  )
}

export default FileUpload
