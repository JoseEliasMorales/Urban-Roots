import React, { useState, useEffect } from "react";
import "./Fetch.css";
import AgregarAlCarrito from "../CarritoDeCompras/AgregarAlCarrito/AgregarAlCarrito";
const Fetch = () => {
    const [zapatillas, setZapatillas] = useState();
    var myHeaders = new Headers();
    myHeaders.append(
        "Authorization",
        "Bearer APP_USR-392321431174947-040509-4f536c9eff439577ba5b0330af55f241-397959970"
    );

    let requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };

    const fetchApi = async () => {
        const response = await fetch(
            "https://api.mercadolibre.com/sites/MLA/search?q=zapatilla%20adidas%20oficial&limit=12",
            { headers: requestOptions }
        );
        const responseJSON = await response.json();
        setZapatillas(responseJSON.results);
    };

    useEffect(() => {
        fetchApi();
    });

    function modificarUrl(url) {
        let primeraParte = url.slice(0, 28);
        let insertarEnUrl = "NQ_NP_";
        let segundaParte = url.slice(28);
        let urlNueva =
            primeraParte +
            insertarEnUrl +
            segundaParte.replace("I.jpg", "O.webp");
        return urlNueva;
    }

    function modificarNombre(title) {
        let word1 = "Sport";
        let word2 = "Team";
        let word3 = "Color";
        let word4 = "Tienda";
        let index;
        if (title.indexOf(word1) === -1) {
            if (title.indexOf(word2) === -1) {
                if (title.indexOf(word3) === -1) {
                    index = title.indexOf(word4);
                } else {
                    index = title.indexOf(word3);
                }
            } else {
                index = title.indexOf(word2);
            }
        } else {
            index = title.indexOf(word1);
        }
        let nuevoTitulo = title.slice(0, index);
        return nuevoTitulo;
    }

    const formatearPeso = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 0,
    });

    return (
        <div className="lista">
            {!zapatillas ? (
                <div class="cs-loader">
                    <div class="cs-loader-inner">
                        <label>●</label>
                        <label>●</label>
                        <label>●</label>
                        <label>●</label>
                        <label>●</label>
                        <label>●</label>
                    </div>
                </div>
            ) : (
                zapatillas.map((item) => (
                    <div
                        className="item"
                        key={item.id}
                    >
                        <img
                            className="imageItem"
                            src={
                                !zapatillas ? "" : modificarUrl(item.thumbnail)
                            }
                            alt={item.title}
                        />
                        <p className="itemTitle">
                            {" "}
                            {modificarNombre(item.title)}
                        </p>
                        <p className="precio">
                            {formatearPeso.format(item.price)}
                        </p>
                        <span>
                            <AgregarAlCarrito/>
                        </span>
                    </div>
                ))
            )}
        </div>
    );
};

export default Fetch;
