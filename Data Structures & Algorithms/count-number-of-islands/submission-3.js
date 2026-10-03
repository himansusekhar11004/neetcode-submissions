class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

        const rowL = grid.length;
        const colL = grid[0].length;
        let numOfIsland = 0;
        for(let i = 0; i < rowL; i++){
            for(let j = 0; j < colL; j++){
                if(grid[i][j] === '1'){
                    this.dfs(grid, i, j, rowL, colL);
                    numOfIsland++; 
                    console.log(grid);
                }
            }
        }
        return numOfIsland;
    }

    dfs(grid, row, col, rowL, colL){
        grid[row][col] = '0';
        if( row >= 0 && row + 1 < rowL && grid[row + 1][col] === '1')
            this.dfs(grid, row + 1, col, rowL, colL);
        if( row - 1 >= 0 && row - 1 < rowL && grid[row - 1][col] === '1')
            this.dfs(grid, row - 1, col, rowL, colL);
        if(col >= 0 && col < colL && grid[row][col + 1] === '1')
            this.dfs(grid, row, col + 1, rowL, colL);
        if(col - 1 >= 0 && col - 1 < colL && grid[row][col - 1] === '1')
            this.dfs(grid, row, col - 1, rowL, colL);
    }

}
