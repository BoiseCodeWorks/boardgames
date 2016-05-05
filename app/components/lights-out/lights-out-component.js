angular.module('boardgames')
    .component('grid', {
        templateUrl: 'app/components/grid/grid.html',
        bindings: {
            rows: '<',
            cols: '<',
            cellClick: '<'   
        },
        controllerAs: 'vm',
        controller: function(){
            var vm = this;
            vm.test = 'Am I alive?'
            vm.grid = [];
            function buildGrid() {
                for (var row = 0; row < vm.rows; row++) {
                    vm.grid[row] = [];
                    for (var col = 0; col < vm.cols; col++) {
                        vm.grid[row][col] = { row: row, col: col }
                    }
                }
            }
            buildGrid()
        }
    })
    .component('lightsOutComponent', {
        templateUrl: 'app/components/lights-out/lights-out.html',
        controller: function() {
            var vm = this;
            var turn = 'x'
            
            vm.toggleCell = function(cell, grid) {
                vm.grid = grid;
                cell.active = !cell.active;
                toggleNeighbors(cell);
            }
            
            vm.ttt = function(cell){
                console.log(cell)
                cell.mark = turn;
                if(turn == 'x'){
                    turn = 'o'
                } else {
                    turn = 'x'
                }
            }
            

            function toggleNeighbor(cell, x, y){
                if(vm.grid[cell.row + x]){
                   var cell = vm.grid[cell.row+x][cell.col+y]
                   if(cell){
                       cell.active = !cell.active;
                   }
                }
            }

            function toggleNeighbors(cell) {
                toggleNeighbor(cell,-1,0)
                toggleNeighbor(cell,1,0)
                toggleNeighbor(cell,0,-1)
                toggleNeighbor(cell,0,1)
                
                
                // var size = vm.grid.length -1;
                // //North
                // if (cell.row > 0) {
                //     vm.grid[cell.row - 1][cell.col].active = !vm.grid[cell.row - 1][cell.col].active;
                // }

                // //South
                // if (cell.row < size) {
                //     vm.grid[cell.row + 1][cell.col].active = !vm.grid[cell.row + 1][cell.col].active
                // }

                // //West
                // if (cell.col > 0) {
                //     vm.grid[cell.row][cell.col - 1].active = !vm.grid[cell.row][cell.col - 1].active
                // }

                // //East
                // if (cell.col < size) {
                //     vm.grid[cell.row][cell.col + 1].active = !vm.grid[cell.row][cell.col + 1].active
                // }
            }



        },
        controllerAs: 'vm'
    })