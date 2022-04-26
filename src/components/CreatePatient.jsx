import { useState } from 'react'
import ImageUploading from 'react-images-uploading';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import './css/createpatient.css'

const CreatePatient = ({ createNewPatient, closeForm }) => {
    const [images, setImages] = useState([])
    const [fullName, setFullName] = useState('')
    const [gender, setGender] = useState('')
    const [weight, setWeight] = useState(0)
    const [ailment, setAilment] = useState('')

    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };

    return (
        <div className='create-patient'>
            <div className="content">
                <button onClick={() => closeForm(false)}>
                    <AiOutlineClose />
                </button>

            <h1>Patient Creation Form</h1>
            <p>Fill the form below</p>
            <form onSubmit={e => e.preventDefault()}>
                <ImageUploading
                    multiple={false}
                    value={images}
                    onChange={onChange}
                    dataURLKey="data_url"
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                    }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                        <button
                        id='add'
                        style={isDragging ? { color: 'red' } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                        >
                        <AiOutlinePlus />
                        </button>
                        &nbsp;
                        {imageList.length ? <button onClick={onImageRemoveAll} id='remove'>
                            <AiOutlineClose />
                        </button> : null}
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                            <img src={image['data_url']} alt="" width="100" />
                            <div className="image-item__btn-wrapper">
                            <button onClick={() => onImageUpdate(index)}>Update</button>
                            <button onClick={() => onImageRemove(index)}>Remove</button>
                            </div>
                        </div>
                        ))}
                    </div>
                    )}
                </ImageUploading>

                <input type="text" placeholder="Patient's Full Name" onChange={(e) => setFullName(e.target.value)} />
                <input type="text" placeholder="Patient's Gender" onChange={(e) => setGender(e.target.value)} />
                <input type="text" placeholder="Patient's Weight" onChange={(e) => setWeight(e.target.value)} />
                <input type="text" placeholder="Patient's Ailment" onChange={(e) => setAilment(e.target.value)} />
                <button
                    onClick={() => {
                        createNewPatient({
                            image: images[0].data_url,
                            name: {
                                first: fullName.split(' ')[0],
                                last: fullName.split(' ')[1]
                            },
                            gender: gender,
                            weight: weight,
                            ailment: ailment,
                            registered: { date: new Date().toISOString() },
                            status: 'Confirmed',
                        })
                        closeForm(false)
                    }}
                >
                    Create Patient
                </button>
            </form>
        </div>
        </div>
    )
}

export default CreatePatient
