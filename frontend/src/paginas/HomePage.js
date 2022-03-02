import '../estilos/components/pages/HomePage.css'

import React from 'react';
const HomePage = (props) => {
    return (
        <main className="holder">
        <div className="homeimg">
            <img src="img/home/img01.jpg" alt="avion" />
        </div>
        <div className="columnas">
            <div className="bienvenidos left">
                <h2>bienvenidos</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nihil alias deleniti natus quod provident quo reprehenderit amet, laboriosam eum? Harum impedit illo eveniet temporibus, atque velit optio quibusdam animi!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum voluptas labore, libero maiores fuga tenetur dolor! Sapiente, pariatur, optio cupiditate nostrum fugiat nemo, excepturi architecto odio exercitationem eligendi veritatis sit!</p>

            </div>
            <div className="testimonios right">
                <h2>
                    testimonios
                </h2>
                <div className="testimonio">
                    <span className="cita"> simplemente excelente

                    </span>
<span className="autor">
    juan perez - zapatos.com
</span>
                </div>

            </div>

        </div>

    </main>
    );
}
export default HomePage;