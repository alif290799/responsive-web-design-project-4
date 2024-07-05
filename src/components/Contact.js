import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center h-[60vh] my-0 md:my-5">
            <div className="bg-gray-900 text-white w-full md:w-1/3 p-10 flex flex-col gap-10 justify-center">
                <div>
                    <h2 className="text-lg font-bold mb-1">Working Hour</h2>
                    <p>Sunday to Saturday</p>
                    <p>09:00 AM to 11:00 PM</p>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-1">Location</h2>
                    <p>Street - 127, New York, United States</p>
                    <p>546544</p>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-1">Contact us</h2>
                    <p>+123456789</p>
                    <p>hey@yourdomain.com</p>
                </div>
            </div>
            <div className="w-0 md:w-2/3">
                <MapContainer
                    center={[40.7128, -74.006]}
                    zoom={13}
                    className="h-full"
                >
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    />
                </MapContainer>
            </div>
        </div>
    );
};

export default Contact;
