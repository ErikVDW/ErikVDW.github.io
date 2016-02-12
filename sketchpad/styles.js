// All blocks are square.
// TODO: Compartmentalize further.

// Constants
var BLOCK_DIV = '<div class = "block"></div>';
var TABLE_BLOCK = '<td class="block"></td>'

// Used by div method

function blockContainerAdd (reqBlocks) { // 
  var i = 0;
  while (i < reqBlocks) {
    $('.block-container').append(BLOCK_DIV);
    i ++; 
  }
}

// Used by table method

function tableAdd (sideLength) { // TODO - APPEND WITH APPROPRIATE SIDE LENGTH, CURRENTLY STAYS AT DEFAULT
  var i = 0;
  while (i < sideLength) {
    $('tbody').append("<tr></tr>");
    i ++;
  }
  
  var i = 0;
  
  while (i < sideLength) {
    $('tr').append(BLOCK_DIV);
    i ++;
  }

}

// Used by both

function changeColor () { // Changes the color on mouseover
  $('.block').mouseover(function(){
    $(this).css("background-color", "white");
  });
}

function main(){
  
  // Determine dimensions

  var sideLength = prompt("How many squares would you like per side on the grid?");
  if (sideLength > 30) {sideLength = 30} // Set maximum for performance reasons (900 squares total)
  var dimension = 400/sideLength; // The width and height of each block
  var reqBlocks = Math.pow(sideLength, 2); // The number of blocks required to fill the area
  
  // Divs

  $('.block').remove();
  blockContainerAdd(reqBlocks);
  $('.block').css({"width" : dimension, "height": dimension});

  $('tr').remove();
  tableAdd(sideLength);
  $('tr').css({"line-height" : dimension});
  $('td, div.block').css({"height" : dimension, "width" : dimension});

  changeColor();

}

$(function(){
  $('button').click(main);
  changeColor();
});