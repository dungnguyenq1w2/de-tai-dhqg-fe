import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.scss'

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
        console.log("fileClick", index)
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
                className={styles.file_input}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className={styles.file_input__label}>
                    <p>Drag & Drop your files here</p>
                </div>
                <input type="file" value="" onChange={onFileDrop} multiple={true}/>
            </div>
            {
                fileList.length > 0 ? (
                    <div className={styles.file_preview}>
                        <p className={styles.file_preview__title}>Ready to upload</p>
                        <div className={styles.file_preview__list}>
                            {
                                fileList.map((item, index) => (
                                    <div key={index} className={styles.file_preview__list__item}>
                                        <div className={styles.file_preview__list__item__info} onClick={() => fileClick(index)}>
                                            <p>{item.name}</p>
                                            <p>{(item.size / 1024).toFixed(2)} KB</p>
                                        </div>
                                        <span className={styles.file_preview__list__item__del} onClick={() => fileRemove(item)}>&#10005;</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

CFileInput.propTypes = {
    onFileChange: PropTypes.func,
    onFileClick: PropTypes.func
}

export default CFileInput