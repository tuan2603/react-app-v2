import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import { Provider } from 'react-redux';

import { store } from './helpers';
import {App} from './containers';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
    function () {
        $('#menuToggle').click(function () {
            $('body').toggleClass('open');
        });

        $('.search-trigger').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            $('.search-trigger').parent('.header-left').addClass('open');
        });

        $('.search-close').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            $('.search-trigger').parent('.header-left').removeClass('open');
        });

        // Counter Number
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

    }
);
