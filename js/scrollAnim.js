const animItems = document.querySelectorAll(".anim");
if (animItems.length > 0){
	window.addEventListener("scroll", animOnScroll);
	function animOnScroll(){
		for(let i = 0; i < animItems.length; i++){
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const start = 4;

			let animItemPoint = window.innerHeight - animItemHeight / start;
			if (animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight / start;
			}

			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (
				animItemOffset + animItemHeight)){
				animItem.classList.add("active");
			}
					
		}
	}
	function offset(el){
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}
		setTimeout(() => {
			animOnScroll();
		}, 200);
	}