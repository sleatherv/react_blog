import React from 'react';

const App = () => {

    const setRows = () => [
        <tr>
            <td>
                Rodolfo
			</td>
            <td>
                Rodolfo@platzi.com
			</td>
            <td>
                Rodolfo.com
			</td>
        </tr>,
        <tr>
            <td>
                Rodolfo
			</td>
            <td>
                sleather@gmail.com
			</td>
            <td>
                Rodolfo.com
			</td>
        </tr>
    ];

    return (
        <div className="margen">
            <table className="tabla">
                <thead>
                    <tr>
                        <th>
                            Nombre
						</th>
                        <th>
                            Correo
						</th>
                        <th>
                            Enlace
						</th>
                    </tr>
                </thead>
                <tbody>
                    {setRows()}
                </tbody>
            </table>
        </div>
    )
};

export default App;