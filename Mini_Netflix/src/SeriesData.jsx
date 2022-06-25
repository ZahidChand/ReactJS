const SeriesData = [
    {
        id: 1,
        imgsrc: "https://c4.wallpaperflare.com/wallpaper/582/58/501/breaking-bad-walter-white-jesse-pinkman-wallpaper-preview.jpg",
        title: "A Netflix Original Series",
        seriesName: "Breaking Bad",
        seriesLink: "https://www.netflix.com/in/title/70143836"
    },
    {
        id: 2,
        imgsrc: "https://wallpapercave.com/dwp1x/wp6126886.jpg",
        title: "A Netflix Original Series",
        seriesName: "Money Heist",
        seriesLink: "https://www.netflix.com/in/title/80192098"
    },
    {
        id: 3,
        imgsrc: "https://wallpapercave.com/dwp1x/wp5575898.jpg",
        title: "A Netflix Original Series",
        seriesName: "You",
        seriesLink: "https://www.netflix.com/in/title/80211991"
    },
    {
        id: 4,
        imgsrc: "https://wallpapercave.com/dwp1x/wp4056397.jpg",
        title: "A Netflix Original Series",
        seriesName: "DARK",
        seriesLink: "https://www.netflix.com/in/title/80100172"
    },

    {
        id: 5,
        imgsrc: "https://wallpapercave.com/dwp1x/wp4025678.jpg",
        title: "A Netflix Original Series",
        seriesName: "Sacred Games",
        seriesLink: "https://www.netflix.com/in/title/80115328"
    },
    {
        id: 6,
        imgsrc: "data:image/jpeg;base64,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",
        title: "A Netflix Original Series",
        seriesName: "Bard Of Blood",
        seriesLink: "https://www.netflix.com/in/title/80225885"
    },
]

export default SeriesData;