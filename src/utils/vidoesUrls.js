const extractVideoUrls = (data) => {
    return data.results
        .filter(item => item.site === 'YouTube')
        .map(item => `https://www.youtube.com/watch?v=${item.key}`);
};

export { extractVideoUrls };
