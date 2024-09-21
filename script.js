const downloadCVButton = document.getElementById('download-cv');

downloadCVButton.addEventListener('click', () => {
    // Create a new link element
    const link = document.createElement('a');
    link.href = 'path/to/your/cv.pdf'; // Replace with your CV file path
    link.download = 'Static Interactive Resume.html'; // Replace with your desired file name
    link.click();
});
