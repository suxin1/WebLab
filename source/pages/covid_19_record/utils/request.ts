const url = "http://www.graphvis.cn/graphvis/sari/data";

function request(config: any) {
    let req = new XMLHttpRequest();
    function handleResponse(response: any) {
        return response.json;
    }
    return new Promise((resolve, reject) => {
        req.addEventListener("progress", config.onprogress || (() => {
        }));
        req.addEventListener("load",  ((res) => {
            resolve(handleResponse(res));
        }));
        req.addEventListener("error", config.onerror || ((res) => {
            reject(res);
        }));
        req.addEventListener("abort", config.onabort || (() => {
            debugger
        }));

        req.open(config.method, "http://www.graphvis.cn/graphvis/sari/data/20200321.json");
        req.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
        req.send();
    })
}

export function getCovidData(date: Date) {
    return request({
        url: `${url}/${date.getFullYear()}${to2(date.getMonth())}${date.getDate()}.json`,
        method: "GET"
    })
}

function to2(num: number) {
    return (Array(2).join("0")+num).slice(-2);
}