var $ = require('jquery')
class MobileMenu {
  constructor(){
    // alert('testing mobile menu file');
    $('.site-header__menu-icon').click(function(){
      console.log('the top right icon was clicked');
    });
  }
}

  module.exports = MobileMenu;
