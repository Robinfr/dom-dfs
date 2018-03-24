/**
 * Performs a depth-first-search on a node and its children
 * @param curElement Current node in the queue
 * @param condition The condition the node has to match
 * @param queue The current queue
 */
const dfsDom = (
    curElement: HTMLElement,
    condition: (element: HTMLElement) => boolean,
    queue: HTMLElement[] = []
): HTMLElement | null => {
    if (condition(curElement)) {
        return curElement;
    }

    queue = [].slice.apply(curElement.childNodes).concat(queue);

    const nextElement = queue.shift();
    if (!!nextElement) {
        return dfsDom(nextElement, condition, queue);
    }

    return null;
};

/**
 * Performs a depth-first-search on a Node and its children until one of them matches the provided condition
 * @param element Initial starting node
 * @param condition The condition that the node needs to match to be returned
 */
export default (
    element: HTMLElement,
    condition: (element: HTMLElement) => boolean
): HTMLElement | null => dfsDom(element, condition);
