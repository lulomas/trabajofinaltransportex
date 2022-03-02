import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../estilos/components/pages/NovedadesPage.css'
import NovedadItem from '../componetes/novedades/NovedadItem';

const NovedadesPage = props => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3500/api/novedades');
            setNovedades(response.data);
            setLoading(false)
        }
        cargarNovedades();
    }, []);

    return(
        <section className='holder'>
            <h2>Novedades</h2>
            { loading ? ( <p> Cargando ...</p> ) : (
                    novedades.map(item => 
                        <NovedadItem 
                            key={item.id} 
                            title={item.titulo} 
                            subtitle={item.subtitulo}
                            image={item.imagen}
                            body={item.cuerpo}
                        />) //FIN NOVEDADES
                )//FIN ELSE
            }
        </section>
    )

}
export default NovedadesPage;