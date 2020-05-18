const size = 9;

function createTable()
{
  var board = new Array(size);
  for(let i=0; i<size; i++)
  {
    board[i] = new Array(size);
    for(let j=0; j<size; j++)
    {
      board[i][j] = 0;
    }
  }
  return board;
}

function fillBoard(board)
{
  //creating array of 1-9 and shuffling it
  let array = new Array(size);
  for(let i=1; i<=size; i++)
  {
    array[i-1] = i;
  }
  array = shuffle(array);

  //filling in diagonal 3x3 squares
  let index = 0;
  let count = 0;
  let index2= 0;
  for(let j=0; j<size; j++)
  {
    for(let k=index; k<index+3; k++)
    {
      board[j][k] = array[index2];
      index2++;
    }
    count++;
    if(count == 3)
    {
      index+=3;
      count = 0;
      array = shuffle(array);
      index2 = 0;
    }
  }
  
  //filling in the rest of the board
  for(let i=0; i<size; i++)
  {
    for(let j=0; j<size; j++)
    {
      board[i][j] = Math.floor(Math.random() * 9) + 1;
      while(!valid(board, board[i][j] , i, j))
      {
        board[i][j] = Math.floor(Math.random() * 9) + 1;
      }
    }
  }
  return board;
}

function shuffle(array)
{
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex)
  {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function valid(array, number, i, j)
{
  return ((checkRow(array, number, i, j) && checkColumn(array, number, i, j)) && checkBox(array, number, i, j));
}

function checkRow(array, number, i, j)
{
  for(let k=0; k<size; k++)
  {
    if((number == array[i][k]) && (k!=j))
    {
      return false;
    }
  }
  return true;
}

function checkColumn(array, number, i, j)
{
  for(let k=0; k<size; k++)
  {
    if((number == array[k][j]) && (k!=i))
    {
      return false;
    }
  }
  return true;
}

//not finished
function checkBox(array, number, i, j)
{
  return true;
}

let x = createTable();
console.log(x);
x = fillBoard(x);
console.log(x);
