import {Viaje} from '../models/viaje.js';
import {testimonial} from '../models/testimoniales1.js';
const pagInicio = async (req,res)=>{ //req- lo que enviamos : res- lo que nos responde
    
    const multiConsulta = [];
    multiConsulta.push( testimonial.findAll( { limit: 6 } ) );
    multiConsulta.push( Viaje.findAll( { limit: 3} ) )
    try {
        const consulta = await Promise.all(multiConsulta);
        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes : consulta[1],
            comentarios : consulta[0]
        });   
    } catch (error) {
        console.log(error);
    }
}
const pagNosotros = (req,res)=>{ 
    // pasar variables hasia la vista = nosotros.pug
    // const texto = {
    //     parrafo : 'soy un parrafo',
    //     titulo : 'TITULO'
    // }
    res.render('nosotros',{
        pagina:'Nosotros'
    });
    // res.render('nosotros',{
    //     parrafo : texto.parrafo,
    //     titulo : texto.titulo
    // }); //render busca y escanea el archivo con el mismo nombre que le dimos
}
const pagTestimoniales = async (req,res)=>{ 
    try {
        const comentarios = await testimonial.findAll();

        res.render('testimoniales',{
            pagina: 'Testimoniales',
            comentarios
        });
    } catch (error) {
        console.log(error);
    }
}
const pagViajes = async (req,res)=>{ //req- lo que enviamos : res- lo que nos responde
    // consultar baSE DE DATOS 
    const viajes = await Viaje.findAll();
    res.render('viajes',{
        pagina: 'Viajes',
        viajes
    });
}
const pagDetalleViaje = async (req,res)=>{ 
    const { slug } = req.params;
    try {
        const viaje = await Viaje.findOne( { where : { slug } } );
        res.render('viaje',{
            pagina: 'informacion viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}
export {
    pagInicio,
    pagNosotros,
    pagTestimoniales,
    pagViajes,
    pagDetalleViaje
}