'use strict';

import { buildTableComponent } from './components/workBenchContainer/jsModules/workBenchLayout'; //import the wrapper page. parallax baby #ForNoGoodReason
import { apiCall } from './components/application/jsModules/ajax';

import React from 'react';
import ReactDOM from 'react-dom';
import DemoApp from './components/application/DemoApp';
import WebPart from './components/webPart/jsModules/WebPart';

const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

const buildAjaxCall = function (cbReturn) {
    const buildAPIReq = {
        baseURI: 'https://my-json-server.typicode.com/moabs81/fakeJSONServer',
        //baseURI: 'http://localhost:3000',
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
            <WebPart data={JSON.parse(result.currentTarget.responseText)}/>,
            document.getElementById(targetDiv)
        );
    });
    setInterval(function(){
        buildAjaxCall(function (result) {                        
            ReactDOM.render(
                <WebPart data={JSON.parse(result.currentTarget.responseText)}/>,
                document.getElementById(targetDiv)
            );
        });
    }, 120000);
});