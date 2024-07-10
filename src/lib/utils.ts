import clsx, { ClassValue } from "clsx";
import queryString from "query-string";
import { twMerge } from "tailwind-merge";

interface UrlQueryParams {
    params: string;
    key: string;
    value: string;
}

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs));
}

export function formUrlQuery({ params, key, value}: UrlQueryParams) {
    const currentUrl = queryString.parse(params);

    currentUrl[key] = value;

    return queryString.stringifyUrl(
        {
            url: window.location.pathname,
            query: currentUrl
        },
        {
            skipNull: true
        }
    );
}