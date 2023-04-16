### Video.js React에서 사용


#### spriterThumnails() -> 영상의 로딩바에 마우스 호버시 썸네일 미리보기


![스크린샷 2023-04-16 165120](https://user-images.githubusercontent.com/61955818/232283316-6c3b14ba-751e-45eb-ab1c-975876ddc5c4.png)


```js
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-sprite-thumbnails';


const videoView = () =>{
	const videoRef = useRef();
	const playerRef = useRef();
	
	useEffect(() => {
		if (!playerRef.current) {
			const videoElement = document.createElement('video-js');

			videoElement.classList.add('vjs-big-play-centered');
			videoRef.current.appendChild(videoElement);

			const player = (playerRef.current = videojs(videoElement, options, () => {
				const url = `[url]`
				const image = new Image();
				image.src = url;

				image.onload = function () {
					let imgHeight = image.height;

					player.spriteThumbnails({
						interval: 0.33,
						url: url,
						width: 160,
						height: imgHeight,

});
				};
			}));
		} else {
			const player = playerRef.current;

			player.autoplay(options.autoplay);
			player.src(options.sources);
		}
	}, []);
}
```
