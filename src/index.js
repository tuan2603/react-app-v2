import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {BrowserRouter} from 'react-router-dom';
import App from "./containers/App";
ReactDOM.render((<BrowserRouter>
        <App/>
    </BrowserRouter>),
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
