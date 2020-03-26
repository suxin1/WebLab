interface NumberValueDic {
    [index: number]: string,
}

export function simpleDic(data: Array<object>, keyStr: string, valueStr: string): any{
    return data.reduce((result: any, item: any) => {
        result[item[keyStr]] = item[valueStr];
        return result;
    }, {})
}