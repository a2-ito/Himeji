var t = new Object();
t["img00"] = "spade10";
t["img01"] = "spade11";
t["img02"] = "spade12";
t["img03"] = "spade13";
t["img04"] = "club10";
t["img05"] = "club11";
t["img06"] = "club12";
t["img07"] = "club13";
t["img08"] = "heart10";
t["img09"] = "heart11";
t["img10"] = "heart12";
t["img11"] = "heart13";
t["img12"] = "diamond10";
t["img13"] = "diamond11";
t["img14"] = "diamond12";
t["img15"] = "diamond13";

var isBack = new Object();
isBack["img00"] = true;
isBack["img01"] = true;
isBack["img02"] = true;
isBack["img03"] = true;
isBack["img04"] = true;
isBack["img05"] = true;
isBack["img06"] = true;
isBack["img07"] = true;
isBack["img08"] = true;
isBack["img09"] = true;
isBack["img10"] = true;
isBack["img11"] = true;
isBack["img12"] = true;
isBack["img13"] = true;
isBack["img14"] = true;
isBack["img15"] = true;
isBack["img16"] = true;
isBack["img17"] = true;
isBack["img18"] = true;

function initcard(){
	URL = location.href + 'card'
  var request = new XMLHttpRequest();
  request.open('GET', URL, true);
  request.onload = function () {
      var data = JSON.parse(this.response);
		  for (var i = 0, len = data.length; i < len; ++i){
        console.log(data[i].Mark + data[i].Number);
				var ret = ( '00' + i ).slice( -2 );
				t["img"+ret] = data[i].Mark + data[i].Number;
			}
  }
  // リクエストをURLに送信
  request.send();
}

function shufflecard() {
	URL = location.href + 'shuffle'
  var request = new XMLHttpRequest();
  request.open('GET', URL, true);
  // リクエストをURLに送信
  request.send();
}

function imgwin(imgid){
  const element = document.getElementById(imgid);
  if(element !== null){
    let imagePath = isBack[imgid] ? '/assets/img/'+t[imgid]+'.png' : '/assets/img/backcard.png';
    rotationAnimationLoop(element, imagePath, 0);
    isBack[imgid] = !isBack[imgid];
  }
}

const buttonElem = document.getElementById('button');
if(buttonElem !== null){
    buttonElem.addEventListener('click', () => {
      initcard()
    });
}

const buttonElem_s = document.getElementById('button_shuffle');
if(buttonElem_s !== null){
    buttonElem_s.addEventListener('click', () => {
      shufflecard()
    });
}


/* カードを捲る処理を指定された角度になるまでループさせる関数
* @param  {Object} element   imgタグのElement Object
* @param  {String} imagePath 画像のパス
* @return {Number} deg       カードの回転角度
*/
const rotationAnimationLoop = (element, imagePath, deg) =>{
    if( deg <= 180 ){
        rotationAnimation(element, imagePath, deg);
        setTimeout( 
            () => {
                rotationAnimationLoop(element, imagePath, deg+= 5 ) 
            }, 
        1 );
    }
}

/* カードを捲る処理
* @param  {Object} element   imgタグのElement Object
* @param  {String} imagePath 画像のパス
* @return {Number} deg       カードの回転角度
*/
const rotationAnimation = (element, imagePath, deg) =>{
    if ( 90 === deg ){
        element.src =  imagePath;
    }else {
        element.style.webkitTransform = 'rotateY(' + deg + 'deg)';
    }
}
