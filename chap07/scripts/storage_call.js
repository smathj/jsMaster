var storage = new MyStorage('JSSample');
storage.setItem('hoge', '호게');
console.log(storage.getItem('hoge'));
storage.save();