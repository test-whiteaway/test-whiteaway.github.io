$(function(){
  let hamburguerButton = $('.hamburger.hamburger--spin')
  let wrapper = $('.wrapper')
  hamburguerButton.click(function() {
    hamburguerButton.toggleClass("is-active")
    wrapper.toggleClass("toggled")
  })
})