import { testimonial } from '../models/testimoniales1.js';
const guardarTestimoniales = async (req,res)=>{
    const { nombre , correo, mensaje } = req.body;
    if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
        const comentarios = await testimonial.findAll();
        res.render('testimoniales',{
            pagina : 'Testimoniales',
            alerta : 'faltan datos, hijo de tu puta madre!!!',
            apro : false,
            nombre,
            correo,
            mensaje,
            comentarios
        });
    } else {
        try {
            
            await testimonial.create({
                nombre,
                correo,
                mensaje
            });
                
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
    
}

export{
    guardarTestimoniales
}