function generateSVG (data) {

    let svgString;
    let width;
    let height;
    let text = answers.text ? answers.text.trim() : null;

    switch (data.shape) {
        case 'Square':
            width = 100;
            height = 100;
            svgString = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${width}" height="${height}" fill="${data.shapeColor}" />
        ${data.text ? `<text x="50%" y="50%" text-anchor="middle" fill="${data.textColor}">${text}</text>` : ''}
        </svg>
    `;
            break;

        case 'Circle':
            width = height = 200;
            svgString = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${width / 2}" cy="${height / 2}" r="${width / 2}" fill="${data.shapeColor}" />
        ${data.text ? `<text x="50%" y="50%" text-anchor="middle" fill="${data.textColor}">${text}</text>` : ''}
        </svg>
    `;
            break;

        case 'Triangle':
            width = height = 200;
            svgString = `
            <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,${height} ${width},${height} ${width / 2},0" fill="${data.shapeColor}" />
            ${data.text ? `<text x="50%" y="50%" text-anchor="middle" fill="${data.textColor}">${text}</text>` : ''}
            </svg>
        `;
            break;

        default:
            console.log('Invalid shape selection.');
            return;
    }

}