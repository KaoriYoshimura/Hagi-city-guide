const reverseArray = (tempPosts: any) => {
    const postsToRun: any = [];
    for (let i = tempPosts.length - 1; i >= 0; i--) {
        postsToRun.push(tempPosts[i]);
    }
    return postsToRun;
};

export default reverseArray;
