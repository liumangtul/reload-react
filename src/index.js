import './style.css';
import img1 from './1.jpg';
import $ from 'jquery';
import printMe from './print.js';

$(function(){
    function component(){
        var element='<div class="hello">' +
                        '<h1>hello webpack world!</h1>' +
                        '<div class="img-box"></div>' +
                    '</div>';
        return element;
    };
    $('body').html(component());
    $('h1').click(function(){
        printMe();
    });
    var myImage = new Image();
    myImage.src=img1;
    document.body.appendChild(myImage);
});
if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}