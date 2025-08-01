import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGlobalReducer from "../../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const ViewContacts = () => {
    const { id } = useParams();
    const [contact, setContact] = useState(null);
    const { store } = useGlobalReducer();

    useEffect(() => {
        const fetchContact = () => {
            if (store.contacts) { // Cambiado contactList por contacts
                let currentContact = store.contacts.find(contact => contact.id === Number(id));
                setContact(currentContact);
            }
        };
        fetchContact();
    }, [store.contacts, id]); // Cambiado contactList por contacts

    const navigate = useNavigate();

    if (!contact) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="contact-details my-5 mx-5">
            <h2>Detalles del Contacto</h2>
            <div className="contact-list">
                <div className="card bg-secondary text-center">
                    <img 
                        src={contact.photo || "https://thumbs.dreamstime.com/b/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available-236105299.jpg"} 
                        className="card-img-top" 
                        alt="Contact" 
                    />
                    <div className="card-body bg-light">
                        <h5 className="card-title">{contact.name}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Correo: {contact.email}</li>
                            <li className="list-group-item">Teléfono: {contact.phone}</li>
                            <li className="list-group-item">Dirección: {contact.address}</li>
                        </ul>
                        <div className="mt-3">
                            <button
                                className="btn btn-success mx-2"
                                onClick={() => navigate(`/editcontact/${contact.id}`)}
                            >
                                Editar
                            </button>
                            <button
                                className="btn btn-primary mx-2"
                                onClick={() => navigate(`/contacts/`)}
                            >
                                Volver a Contact List
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/">
                <button className="btn btn-primary mt-3">Volver</button>
            </Link>
        </div>
    );
}