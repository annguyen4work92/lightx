
export const sleep = (second: number) => {
    return new Promise((resolve) => setTimeout(resolve, second >= 1? second * 1000: 0));
}

export default sleep;