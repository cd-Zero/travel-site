import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from "./modules/RevealOnScroll"
import $ from 'jquery';

var mobileMenu = new MobileMenu();
// feature-item
new RevealOnScroll($('.feature-item'),"85%");
// tetimonials
new RevealOnScroll($(".testimonial"),"65%");
