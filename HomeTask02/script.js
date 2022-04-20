const API_KEY = "YOUR_API_KEY";

let template = document.querySelector('#video-template').content;

document.querySelector('.search-btn').addEventListener("click",function(){
    if(document.querySelector('.search-bar').value==""){
        alert("Search for something!");
        return;
    }

    document.querySelector(".main-container").innerHTML = "";
    //fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=15&q=${document.querySelector(".search-bar").value}`)
    fetch("./test.json")
        .then(searchResults => searchResults.json())
        .then(searchResults => {
            let ids = []
            for(let video of searchResults.items){
                ids.push(video.id.videoId);
            }

            //fetch(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${ids.join(',')}&part=snippet,statistics`)
            fetch("./testDetails.json")    
                .then(videoDetails => videoDetails.json())
                .then(videoDetails => {
                    for(let i in searchResults.items){
                        videoDetails.items[i].snippet.shortDesc = searchResults.items[i].snippet.description;
                    }
                    getVideo(videoDetails.items);
                });
            });
});

function getVideo(videoDetails){
    let i = 1;
    for(let video of videoDetails){
        fillDetails(video,i++);
    }
    displayVideos(1);
}

function fillDetails(details,i){
    let video = document.importNode(template,true);

    video.querySelector(".video-container").setAttribute("id","video"+i);
    video.querySelector(".title").textContent = details.snippet.title;
    video.querySelector(".views").textContent = details.statistics.viewCount + " views";
    video.querySelector(".publishedOn").textContent = details.snippet.publishedAt.substring(0,10).split("-").join("/");
    video.querySelector(".author").textContent = details.snippet.channelTitle;
    video.querySelector(".author").setAttribute("onclick","window.open('https://www.youtube.com/channel/"+ details.snippet.channelId+"')");
    video.querySelector(".desc").textContent = details.snippet.shortDesc;
    
    video.querySelector(".thumbnail").src = details.snippet.thumbnails.high.url;
    video.querySelector(".thumbnail").setAttribute("onclick","window.open('https://www.youtube.com/watch?v=" + details.id +")");

    document.querySelector(".main-container").appendChild(video);
}

function displayVideos(pageId){
    hideAll();
    let vidCount = videoCount()
    while (Math.ceil(15 / vidCount) < pageId) {
        pageId--;
    }

    for (let i = (vidCount * (pageId - 1)) + 1; i <= (pageId * vidCount) && i <= 15; i++) {
        document.querySelector("#video" + i).style.display = "block";
    }

    generatePages(Math.ceil(15 / vidCount));
    document.querySelector("#page" + pageId).classList.add("active");
}

function hideAll() {
    for (let i = 1; i <= 15; i++) {
        document.querySelector("#video" + i).style.display = "none";
    }
}

window.onresize = function () {
    displayVideos(document.querySelectorAll(".active")[0].getAttribute("id").substring(4));
}

function videoCount() {
    let divWidth = document.querySelectorAll(".main-container")[0].offsetWidth;
    let videoCount;
    if (divWidth < 500) {
        videoCount = 1;
    } else if (divWidth < 900) {
        videoCount = 2;
    } else if (divWidth < 1200) {
        videoCount = 3;
    } else if (divWidth < 1500) {
        videoCount = 4;
    } else {
        videoCount = 5;
    }
    return videoCount;
}

function generatePages(count) {
    let pages = document.querySelector(".pages");
    pages.textContent = "";
    for (let i = 1; i <= count; i++) {
        let btn = document.createElement("button");
        btn.classList.add("page");
        btn.setAttribute("id", "page" + i);
        let pageId = i;
        btn.setAttribute("onclick", `displayVideos(${pageId})`);
        btn.textContent = i;
        pages.appendChild(btn);
    }
}

// console.log(ids);(15) ['K8d3KcpeH2M', '00k_wvArYCs', '8wHzHr7sAg0', 'nRMTiomAINA', 'GlgMBGmbEN8', 'DLtEZiscCac', 'kHlJXmiV_WI', 'oyBNF1Ps1U0', 'TqYtMNtEdco', 'zSLS_yeSzVE', 'l9gFXQ2glmg', 'qDP0aRw440g', 'q45oIoa00Ro', 'gORO3iE8ZZo', 'Y-IpxxSyEmc']
            // 0: "K8d3KcpeH2M"
            // 1: "00k_wvArYCs"
            // 2: "8wHzHr7sAg0"
            // 3: "nRMTiomAINA"
            // 4: "GlgMBGmbEN8"
            // 5: "DLtEZiscCac"
            // 6: "kHlJXmiV_WI"
            // 7: "oyBNF1Ps1U0"
            // 8: "TqYtMNtEdco"
            // 9: "zSLS_yeSzVE"
            // 10: "l9gFXQ2glmg"
            // 11: "qDP0aRw440g"
            // 12: "q45oIoa00Ro"
            // 13: "gORO3iE8ZZo"
            // 14: "Y-IpxxSyEmc"
            // length: 15
            // [[Prototype]]: Array(0)