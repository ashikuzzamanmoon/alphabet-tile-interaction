# Alphabet Tile Interaction

Develop a React application that displays a grid of tiles, each representing a letter of the alphabet in uppercase format. Implement the following functionality:

1. Tile Rendering: Render a tile for each letter of the alphabet (A to Z) within a container or grid layout.
2. Click Interaction: When a tile is clicked, append the corresponding letter to a string displayed in an HTML element with the ID outputString.
3. Consecutive Letter Replacement: If three consecutive letters in the outputString are the same, replace them with an underscore (-). For example, if the user clicks "A",
   "B", "C", "F", "F", "F", "G" in that order, the outputString should display "ABC_G".
4. Multiple Consecutive Letters: If more than three consecutive letters are the same, replace them with the appropriate number of underscores. For instance, if the user clicks
   "A" six times followed by "B", the outputString should display "\_B".
5. Validation: Your solution will be validated by our system, so make sure it meets the specified requirements.

   Example Output:

- Initial state: outputString is empty.
- After dicking "A", "B", "C", "F", "F", "F", "G": outputString displays "ABC_G".
- After clicking "A" six times followed by "B": outputString displays "\_\_B".
