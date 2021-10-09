<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>자바스크립트 마스터북</title>
</head>
<body>
<form method="POST" action="hello.php">
<label for="name">이름:</label>
<input type="text" name="name" size="15" />
<input type="submit" name="submit" value="송신" />
</form>
<?php
if ($_REQUEST['submit'] !== null) {
  sleep(3); 
  print('안녕하세요, '. htmlspecialchars($_POST['name'], ENT_QUOTES | ENT_HTML5, 'UTF-8').'씨!');
}
?>
</body>
</html>