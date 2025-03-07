import { QueryClient } from "@tanstack/react-query";

export const query = new QueryClient();
export async function fetchEvents({ signal, search }) {
    let url = "http://localhost:3000/events";
    if (search) {
        url += "?search=" + search;
    }
    let response = fetch(url, { signal });
    if (!response.ok) {
        let error = new Error("Error fetching events");
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
    const { events } = response.json();
    return events;
}