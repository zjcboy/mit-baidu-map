
import { Injectable } from '@angular/core';
interface JSONPCallback {
    (json: any): void;
}

@Injectable()
export class MitBaiduMapLoaderService {

    constructor() { }

    load(ak: string): Promise<any> {
        let Map_URL = '//api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=JSONP_CALLBACK';
        let p = new Promise((resolve, reject) => {
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.setAttribute('src', Map_URL);
            script.async = true;
            script.onload = function () {
                script.parentNode.removeChild(script);
            };
            window['JSONP_CALLBACK'] = function (json) {
                resolve(json);
            };

            document.head.appendChild(script);
        });

        return p;
    }



}

