import React, { useEffect, useState } from 'react'
import '../PdfUpload/Pdf.css'
import axios from 'axios'
function Pdf() {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState('')
  const [pdfdata, setPdfData] = useState(null)
  console.log(pdfdata)

  const getPdf = async () => {
    const result = await axios.get("http://localhost:8080/get-files");
    setPdfData(result.data.data)
    console.log(result.data.data)
  }

  useEffect(() => {
    getPdf()
  }, [])

  const showPdf = (pdf) =>{
    window.open(`http://localhost:8080/files/${pdf}`,"_blank")
  }
  const Submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title)
    formData.append('file', file)
    // console.log(title, file)
    const result = await axios.post(
      'http://localhost:8080/upload-files',
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" }
      }
    );
    console.log(result)
    setTitle("")
    setFile("")
    getPdf()
   
  }
  return (


    <>
      <div className='main-container'>
        <form className='formStyle' onSubmit={Submit}>
          <h4>Upload file</h4><br />
          <input type='text' onChange={(e) => setTitle(e.target.value)}
            placeholder='title' required className='form-control' />
          <input type='file' onChange={(e) => { setFile(e.target.files[0]) }}
            accept='application/pdf' className='form-control' />
          <button className='btn btn-primary' type='submit'>submit</button>
        </form>

      </div>
      <div className='pdf'>
          <h4>File</h4>
          <div className='output-div'>
            {pdfdata == null ? "" :
            pdfdata.map((item) => (
                <div className='product-container'>
                  <h6>Title:{item.title}</h6>
                  <button className='btn btn-primary' onClick={() =>{showPdf(item.pdf)}}>Show Pdf</button>
                </div>
            ))}
          </div>
        </div>
      {/* <div class="row">
        <div class="col-sm-6">
        {pdfdata == null ? "" :
            pdfdata.map((item) => (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a onClick={() => showPdf(item.pdf)} class="btn btn-primary">show pdf</a>
            </div>
          </div>
           ))}
        </div>

      </div> */}
    </>
  )
}

export default Pdf
