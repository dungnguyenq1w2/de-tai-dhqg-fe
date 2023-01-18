import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

// import { ImageConfig } from '../../config/ImageConfig'
// import uploadImg from './cloud-upload-regular-240.png'

const CFileInput = props => {

    const wrapperRef = useRef(null)

    const [fileList, setFileList] = useState([])

    const onDragEnter = () => wrapperRef.current.classList.add('dragover')

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover')

    const onDrop = () => wrapperRef.current.classList.remove('dragover')

    const onFileDrop = (e) => {
        const newFiles = e.target.files
        if (newFiles) {
            const updatedList = [...fileList, ...newFiles]
            setFileList(updatedList)
            props.onFileChange(updatedList)
        }
    }

    const fileClick = (index) => {
        props.onFileClick(index)
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList]
        updatedList.splice(fileList.indexOf(file), 1)
        setFileList(updatedList)
        props.onFileChange(updatedList)
    }

    return (
        <div>
            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop-file-input__label">
                    {/* <Image src={uploadImg} width={500} height={500} /> */}
                    <p>Drag & Drop your files here</p>
                </div>
                <input type="file" value="" onChange={onFileDrop} multiple={true}/>
            </div>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <p className="drop-file-preview__title">
                            Ready to upload
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">
                                    {/* <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" /> */}
                                    <div className="drop-file-preview__item__info" style={{border: '1px solid gray'}} onClick={() => fileClick(index)}>
                                        <p>{item.name}</p>
                                        <p>{item.size}B</p>
                                    </div>
                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    )
}

CFileInput.propTypes = {
    onFileChange: PropTypes.func
}

export default CFileInput