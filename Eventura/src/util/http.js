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