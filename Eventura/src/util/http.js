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
    let url = "http://localhost:3000/events/" + id;
    let response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify({ event }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (!response.ok) {
        const error = new Error("An error occured while updating the event");
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
    return response.json();
}