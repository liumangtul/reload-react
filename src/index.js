import './style.css';
import img1 from './1.jpg';
import $ from 'jquery';

$(function(){
    function component(){
        var element='<div class="hello">' +
                        '<h1>hello webpack world!</h1>' +
                        '<div class="img-box"></div>' +
                    '</div>';
        return element;
    };
    $('body').html(component());
    var myImage = new Image();
    myImage.src=img1;
    document.body.appendChild(myImage);
});