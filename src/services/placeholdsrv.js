const _apiBASE = "https://reqres.in";

export default class PlaceholderService {
    getUserData = async () => {
        try {
            const res = await fetch(`${_apiBASE}/api/users?per_page=8`);
            if (!res.ok) {
                throw new Error(`Fetch error`);
            }
            return await res.json();
        } catch (err) {
            console.error(err);
        }
    };
}
