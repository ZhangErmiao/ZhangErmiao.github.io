var my_right_button = document.querySelector("button[name='right']");
var my_left_button = document.querySelector("button[name='left']");
function open_hidden_tree(){
  my_tree = document.querySelector("#hidden_tree");
  my_tree.style.display = "block";
}
function close_hidden_tree(){
  my_tree = document.querySelector("#hidden_tree");
  my_tree.style.display = "none";
}
my_right_button.addEventListener('click',open_hidden_tree, false);
my_left_button.addEventListener('click',close_hidden_tree, false);


var change_html = function(){
  var dom = document.querySelector("li[name='html']");
  dom.style.display = "block";
  var dom0 = document.querySelector("li[name='概述']");
  dom0.style.display = "none";
}
var change_html = function(){
  var dom = document.querySelector("li[name='html']");
  dom.style.display = "block";
  var dom0 = document.querySelector("li[name='概述']");
  dom0.style.display = "none";
}
var html = document.querySelector("a[name='html']")
html.addEventListener('click',change_html,false)
