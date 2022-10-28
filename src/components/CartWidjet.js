import Carrito from './Carrito.jpg'
import Button from 'react-bootstrap/Button';
const CartWidjet = () => {
  return (
    <>
      <Button variant="info" className='justify-content-end'><img
              src={Carrito}
              width="25"
              height="25"
              className="d-inline-block align-top justify-content-end"
              alt="logo"
            /></Button>{' '}
    </>
  )
}

export default CartWidjet
