require('../styles/pageLayout.less');
import tile from '../styles/imgs/chalkboard.jpeg';

const buildTableComponent = function(cbReturn) {
    $(function() {
        $('.contentContainer').append('<div class="appContainer" id="appContainer"></div>');
        document.getElementById('allContentDiv').onscroll = function(e) {
            const viewPort = document.getElementById('contentContainer').getBoundingClientRect();
            if (viewPort.top < 140) {
                $('.titleContainer').addClass('titleContainerSolid');
            } else {
                $('.titleContainer').removeClass('titleContainerSolid');
            }
        };
        if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
            console.log('this is ie');
            $('body').addClass('IEFallback');
            $('.menu-content.left-title').html('<h2>Component Demo Workbench (fallback IE Style, no parallax)</h2>');
        } else {
            console.log('this is not ie');
            const backgroundImg = document.getElementById('backgroundImg');
            backgroundImg.src = tile;
        }
        cbReturn('appContainer');
    });
};

export { buildTableComponent };