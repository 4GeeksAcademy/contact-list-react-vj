import React from "react";
import { useNavigate } from "react-router-dom";

function ContactCard(props) {
    const navigate = useNavigate();

    const handleDelete = async () => {
        console.log('Eliminando contacto con id:', props.contactId);
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/vicente-j/contacts/${props.contactId}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error(`Error al eliminar el contacto: ${response.status}`);
            }

            console.log("Delete OK: " + response.ok);
            console.log("Delete Status: " + response.status);


            props.onDeleteContact(props.contactId);

        } catch (error) {
            console.error("Hubo un problema al eliminar el contacto:", error);
        }
    };

    return (
        <div className="card mt-3">

            <img src="https://thumbs.dreamstime.com/b/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available-236105299.jpg" className="card-img-top" alt="Contact" />

            <ul className="list-group list-group-flush ">
                <div className="card-body bg-white">
                    <h5 className="card-title">
                        <strong>{props.contactName}</strong>
                    </h5>
                </div>
                <li className="list-group-item ">
                    <strong>Correo electrónico:</strong> {props.contactMail}
                </li>
                <li className="list-group-item ">
                    <strong>Teléfono:</strong> {props.contactPhone}
                </li>
                <li className="list-group-item ">
                    <strong>Domicilio:</strong> {props.contactAddress}
                </li>
            </ul>

            <div className="card-body">

                <button
                    className="btn btn-primary m-3"
                    onClick={() => navigate(`/viewcontact/${props.contactId}`)}
                >
                    Ver Contacto
                </button>

                <button
                    className="btn btn-success m-3"
                    onClick={() => navigate(`/editcontact/${props.contactId}`)}
                >
                    Editar Contacto
                </button>

                <button
                    className="btn btn-danger m-3"
                    onClick={handleDelete}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default ContactCard;