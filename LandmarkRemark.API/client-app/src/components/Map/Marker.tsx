import React from 'react';
import './marker.css';
import { useModal } from "../Dialog/ModalService";

const Marker = (props: any) => {

    const confirm = useModal();    

    const showModal = (name: string, canAddNote: boolean) => {
        confirm({
            canAddNote: canAddNote,
            variant: "info",
            catchOnCancel: true,
            title: name,
            description: ""            
        })
        
    };    

    const { color, name, canAddNote, id } = props;

    return (
        <div>
            <div
                className="pin bounce"
                style={{ backgroundColor: color, cursor: 'pointer' }}
                title={name}
                onClick={() => showModal(name, canAddNote)}
            />
            <div className="pulse" />
        </div>
    );
};

export default Marker;