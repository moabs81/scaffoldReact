'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { buildTableComponent } from './components/workBenchContainer/jsModules/workBenchLayout'; //import the wrapper page. parallax baby #ForNoGoodReason
import { apiCall } from './components/application/jsModules/ajax';
import WebPart from './components/webPart/jsModules/WebPart';
import WebPart2 from './components/webPart2/jsModules/webPart2';


const buildAjaxCall = function (cbReturn) {
    const buildAPIReq = {
        //baseURI: 'https://my-json-server.typicode.com/moabs81/fakeJSONServer',
        baseURI: 'http://localhost:3000',
        searchURI: '/offices',
        method: 'GET',
        success: function (result) {
            cbReturn(result);
        }
    };
    apiCall.call(buildAPIReq);
};

buildTableComponent(function (result) { //callback function returns the DOM target for your app           
    const targetDiv = result;
    buildAjaxCall(function (result) {
        ReactDOM.render(
            //<WebPart2 data={JSON.parse(result.currentTarget.responseText)} />,
            <WebPart data={JSON.parse(result.currentTarget.responseText)} />,
            document.getElementById(targetDiv)
        );
    });
    setInterval(function () {
        buildAjaxCall(function (result) {
            ReactDOM.render(
                //<WebPart2 data={JSON.parse(result.currentTarget.responseText)} />,
                <WebPart data={JSON.parse(result.currentTarget.responseText)} />,
                document.getElementById(targetDiv)
            );
        });
    }, 10000);
});