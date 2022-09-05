import React, { useEffect, useState } from 'react'
import { Header, ImageContainer, ModalContainer } from './components'

import axios from 'axios';
import { LinearProgress } from '@mui/material';
import { useSnackbar } from 'notistack';
import Footer from './components/Footer';


const App = () => {

  // Modal 
  const [showModal, setShowModal] = useState({
    show: false,
    modal: null,
    modalProps: {}
  });

  const { enqueueSnackbar } = useSnackbar();

  const handleOpen = (modal, props = {}) => {
    return () => {
      setShowModal({
        show: true,
        modal: modal,
        modalProps: props
      })
    }
  }

  const handleClose = (ignoreSnack = false) => {
    setShowModal({
      show: false,
      modal: null,
      modalProps: {}
    })

    if (!ignoreSnack) {
      enqueueSnackbar('Cancel action', { variant: 'warning' });
    }

  }

  //  Columns
  const [columnsCount, setColumnsCount] = useState(3);

  const handleColumn = (count) => {
    return () => {
      setColumnsCount(c => {
        if ((c + count) <= 0)
          return 1

        return c + count;
      })
    }
  }

  // Images
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false)

  // Agregar imagen
  const handleUpload = (image) => {
    setImages(imgs => {
      return [image, ...imgs]
    })
  }

  // Remover imagen
  const handleDelete = (id) => {
    setImages(imgs => {
      // Obtenemos el nuevo array
      const newImgs = imgs.filter((e) => {
        return e.id != id
      })

      return newImgs
    })

  }

  // Peticion para traer todas las imagenes
  const [searchQuery, setSearchQuery] = useState('')
  const handleSearch = (search) => setSearchQuery(search);

  useEffect(() => {

    setLoading(true);
    axios.get('https://unsplash-server-production.up.railway.app/images' + `?search=${searchQuery}`).then(res => {

      enqueueSnackbar('Get images!', { variant: 'success' });
      setImages(res.data);
      setLoading(false);
    }).catch(err => {
      console.log(err.response.data);
      enqueueSnackbar('Error get images :(', { variant: 'error' });
      setLoading(false);
    });

  }, [searchQuery])




  return (
    <div className='main'>
      <Header openCreateModal={handleOpen} handleSearch={handleSearch} handleColumn={handleColumn} columnsCount={columnsCount} />
      {!loading && <ImageContainer openDeleteModal={handleOpen} numberColums={columnsCount} images={images} />}
      {loading && <LinearProgress color='inherit' />}
      {showModal.show && <ModalContainer Modal={showModal.modal} modalProps={showModal.modalProps}
        handleClose={handleClose} handleUpload={handleUpload} handleDelete={handleDelete} />}
      <Footer />

    </div>

  )
}

export default App