// Include the fs module
const fs = require('fs');

// Create a new file and write content to it
fs.writeFile('example.txt', 'Hello, this is a demo of the fs module!', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File created and content written successfully.');

    // Read content from the file
    fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
      } else {
        console.log('File content:', data);

        // Append additional content to the file
        fs.appendFile('example.txt', '\nAppended content.', (err) => {
          if (err) {
            console.error('Error appending to file:', err);
          } else {
            console.log('Content appended successfully.');

            // Read the updated content
            fs.readFile('example.txt', 'utf8', (err, updatedData) => {
              if (err) {
                console.error('Error reading file:', err);
              } else {
                console.log('Updated file content:', updatedData);

                // Delete the file
                fs.unlink('example.txt', (err) => {
                  if (err) {
                    console.error('Error deleting file:', err);
                  } else {
                    console.log('File deleted successfully.');
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
