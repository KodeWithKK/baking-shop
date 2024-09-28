// Read Blog to know more: https://www.newline.co/@bespoyasov/how-to-use-fetch-with-typescript--a81ac257
// Example Api call: const user = await api.get<User>('/api/users/42');

function request<TResponse>(
  url: string,
  config: RequestInit = {},
): Promise<TResponse> {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse);
}

const api = {
  get: <TResponse>(url: string) => request<TResponse>(url),
  post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
    request<TResponse>(url, { method: "POST", body }),
};

export default api;
