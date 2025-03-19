import { QueryClient } from "@tanstack/react-query";

export const query = new QueryClient();
export async function fetchEvents({ signal, search }) {
    let url = "http://localhost:3000/events";
    if (search) {
        url += "?search=" + search;
    }
    console.log("Fetching URL:", url);

    let response = await fetch(url, { signal });
    if (!response.ok) {
        let error = new Error("Error fetching events");
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
    const data = await response.json();
    if (data.event) {
        return data;
    } else if (data.events) {
        return data.events;
    } else {
        return [];
    }
}
export async function fetchById({ id, signal }) {
    let url = "http://localhost:3000/events/" + id;
    let response = await fetch(url, { signal });
    if (!response.ok) {
        let error = new Error("Error fetching this event");
        error.code = response.status;
        error.info = await response.json();
    }
    const { event } = await response.json();
    return event;
}
export async function updateEvent({ id, event }) {
    console.log("Enviando para o backend:", { id, event });

    let url = "http://localhost:3000/events/" + id;
    let response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify({ event }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error("Erro na resposta:", errorData);
        const error = new Error("An error occurred while updating the event");
        error.code = response.status;
        error.info = errorData;
        throw error;
    }

    return response.json();
}
export async function createNewEvent(eventData) {
    const response = await fetch("http://localhost:3000/events", {
        method: "POST",
        body: JSON.stringify(eventData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log(response)
    if (!response.ok) {
        const error = new Error('An error occurred while creating the event');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
    const { event } = await response.json();
    return event;
}