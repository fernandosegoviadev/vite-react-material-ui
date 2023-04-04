import { gitHubUrl } from "../constants";

export const getGitHubUser = async (user) => {
    const response = await fetch(`${gitHubUrl}${user}`,{
        method: 'GET'
    });
    const payload = response.json();
    return payload;
}