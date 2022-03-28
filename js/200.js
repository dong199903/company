// fn;  

// 'aaaabbcc' => 'aacc'
// 'ab' => '';
//'acb' => 'acb' 

function delStr (str) {
  let res = [];

  for(let i=0;i<str.length;i++) {
    if(str[i]!=='b') {
      res.push(str[i]);
    } else {
      //如果是b，并且栈顶是a则出栈
      let top = res[res.length-1];
      if(top==='a') res.pop();
      else res.push("b");
    }
  }
  return res.join("");
}

let res = delStr("acb");
console.log(res);