# Alphabet Tile Interaction

## Description

The **Alphabet Tile Interaction** is a React-based application that displays a grid of alphabet tiles (A-Z). Each tile can be clicked, and the corresponding letter is appended to an output string. If three or more consecutive letters in the output string are the same, they are replaced with an underscore (`_`). The application provides a simple yet interactive experience for handling consecutive letter replacements based on user input.

## Features

1. **Alphabet Tile Rendering**: A grid of tiles from A to Z is rendered.
2. **Click Interaction**: Clicking a tile appends its letter to an output string.
3. **Consecutive Letter Replacement**: If three or more consecutive letters in the output string are the same, they are replaced with an underscore.
4. **Multiple Consecutive Letter Handling**: For more than three consecutive identical letters, the appropriate number of underscores is used.

## Example Output

1. After clicking the tiles `A`, `B`, `C`, `F`, `F`, `F`, `G`, the `outputString` will display: `ABC_G`.
2. After clicking the tile `A` six times followed by `B`, the `outputString` will display: `__B`.

## Technologies Used

- **React.js**: Used to build the interactive UI components.
- **CSS Grid**: Used to layout the alphabet tiles.

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/alphabet-tile-interaction.git
   cd alphabet-tile-interaction
   ```
