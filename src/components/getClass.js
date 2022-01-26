// function to assign wide or big class to images in Image component

export function getClass(i) {
    if (i % 5 === 0) {
        return 'big';
    }
    else if (i % 6 === 0) {
        return 'wide';
    }
}
