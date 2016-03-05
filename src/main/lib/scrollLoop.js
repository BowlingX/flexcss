export const DIRECTION_DOWN = 'down';
export const DIRECTION_UP = 'up';

/**
 * Runs 60fps and executes callback only if window is scrolling currently
 * @returns {Object}
 */
export default () => {
    let lastPosition;
    let destroyed = true;
    let initialCallback;

    function scrollLoop(callback) {
        // Avoid calculations if not needed
        let pos = global.pageYOffset;
        if (pos < 0) {
            pos = 0;
        }
        if (destroyed) {
            return false;
        }

        if (lastPosition === pos) {
            requestAnimationFrame(() => scrollLoop(callback));
            return false;
        }

        const direction = lastPosition < pos ? DIRECTION_DOWN : DIRECTION_UP;
        lastPosition = pos;
        callback(lastPosition, direction);

        requestAnimationFrame(() => scrollLoop(callback));
    }

    return {
        run: (cb) => {
            lastPosition = global.pageYOffset;
            destroyed = false;
            initialCallback = cb;
            scrollLoop(cb);
        },
        isInitilized: () => typeof initialCallback === 'function',
        isDestroyed: () => destroyed,
        destroy: () => {
            destroyed = true;
        },
        resume: () => {
            if (initialCallback && destroyed) {
                requestAnimationFrame(() => {
                    destroyed = false;
                    lastPosition = global.pageYOffset;
                    scrollLoop(initialCallback);
                });
            }
        }
    };
};
