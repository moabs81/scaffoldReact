'use strict';

import { buildTableComponent } from './components/workBenchContainer/jsModules/workBenchLayout'; //import the wrapper page. parallax baby #ForNoGoodReason
import { apiCall } from './components/application/jsModules/ajax';

import React from 'react';
import ReactDOM from 'react-dom';
import DemoApp from './components/application/DemoApp';

let myLoc;

const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];
console.log(PRODUCTS);


const buildAjaxCall = function (cbReturn) {
    const buildAPIReq = {
        baseURI: 'https://my-json-server.typicode.com/moabs81/fakeJSONServer',
        //baseURI: 'http://localhost:3000',
        searchURI: '/offices',
        method: 'GET',
        success: function (result) {
            cbReturn(result.currentTarget.responseText);
        }
    };
    apiCall.call(buildAPIReq);
};

const WebPart = function () {
    const targetDiv = this;
    let tableObject;
    buildAjaxCall(function (result) {
        myLoc = JSON.parse(result);

    });
};

WebPart.call();


buildTableComponent(function (result) { //callback function returns the DOM target for your app           
    ReactDOM.render(<
        DemoApp products={myLoc}
    />,
        document.getElementById(result)
    );
});