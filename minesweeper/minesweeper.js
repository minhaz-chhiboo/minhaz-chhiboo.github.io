document.addEventListener("DOMContentLoaded", startGame);

// Define your `board` object here!
var board = {
	cells: [
		{
			row: 0,
			col: 0,
			isMine: false,
			hidden: true,
			isMarked: false,
		},

		{
			row: 0,
			col: 1,
			isMine: false,
			hidden: true,
			isMarked: false,
		},

		{
			row: 0,
			col: 2,
			isMine: true,
			hidden: true,
			isMarked: false,
		},

		{
			row: 1,
			col: 0,
			isMine: true,
			hidden: true,
			isMarked: false,
		},

		{
			row: 1,
			col: 1,
			isMine: false,
			hidden: true,
			isMarked: false,
		},
		{
			row: 1,
			col: 2,
			isMine: false,
			hidden: true,
			isMarked: false,
		},

		{
			row: 2,
			col: 0,
			isMine: false,
			hidden: true,
			isMarked: false,
		},

		{
			row: 2,
			col: 1,
			isMine: false,
			hidden: true,
			isMarked: false,
		},

		{
			row: 2,
			col: 2,
			isMine: true,
			hidden: true,
			isMarked: false,
		},
	],
};

function startGame() {
	for (var i = 0; i < board.cells.length; i++) {
		board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
	}
	// Don't remove this function call: it makes the game work!
	lib.initBoard();
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
	var markedMines = 0;
	var markedEmptyCells = 0;
	for (let i = 0; i < board.cells.length; i++) {
		if (
			board.cells[i].isMine === "true" &&
			board.cells[i].isMarked === "true"
		) {
			markedMines++;
		}
		if (
			board.cells[i].isMine === "true" &&
			board.cells[i].isMarked === "false"
		) {
			return;
		}
		if (
			board.cells[i].isMine === "false" &&
			board.cells[i].hidden === "false"
		) {
			markedEmptyCells++;
		}
		if (board.cells[i].isMine === "false" && board.cells[i].hidden === "true") {
			return;
		}
	}
	// You can use this function call to declare a winner (once you've
	// detected that they've won, that is!)

	if (markedMines + markedNotMines === board.cells.length) {
		lib.displayMessage("You win!");
	}
	lib.displayMessage("You win!");
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
	var surrounding = lib.getSurroundingCells(cell.row, cell.col);

	var count = 0;
	for (var i = 0; i < surrounding.length; i++) {
		if (surrounding[i].isMine == true) {
			count++;
		}
	}
	return count;
}

function countSurroundingMines(cell) {
	var surrounding = lib.getSurroundingCells(cell.row, cell.col);
	var count = 0;

	surrounding.forEach((element) => {
		if (element.isMine == true) {
			return count++;
		}
	});
	return count;
}