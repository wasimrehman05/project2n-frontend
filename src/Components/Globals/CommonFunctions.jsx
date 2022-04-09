export async function save(url, param, id = false) {
    const response = await fetch(url + (id ? '/' + id : ''), {
        method: !id ? "POST" : 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(param)
    })
    return response.json();
}