import './rxjs-operators';
global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
};