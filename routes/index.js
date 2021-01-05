import express, { Router } from 'express';
import { pagInicio,
    pagNosotros,
    pagTestimoniales,
    pagViajes,
    pagDetalleViaje
    } from '../controllers/paginasController.js';
import { guardarTestimoniales } from  '../controllers/testimonialControlador.js'
//aqui utilizamos el rauter de la primera instancia
const router = express.Router(); // es como utilizar la instancia de expres que se creo en el primer index devido a que si creamos otro, el servidor se reiniciaria

router.get('/',pagInicio);
router.get('/Nosotros',pagNosotros);
router.get('/Testimoniales', pagTestimoniales);
router.get('/Viajes', pagViajes);
router.get('/Viajes/:slug', pagDetalleViaje);
router.post('/testimoniales',guardarTestimoniales);
export default router;