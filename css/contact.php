

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light nav-style">
        <a class="navbar-brand pl-3" href="#">COVIDOPEDIA</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Updates</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">FAQs</a>
              </li>
            </ul>
        </div>
      </nav>
  <div class="container">
  <div class="text-center mt-5 pb-3">
            <h1>CONTACT US</h1>
        </div>
      <div class="row">
          <div class="col-lg-8 offset-lg-2 col-12">
          <form action="contact.php" method="POST">
  <div class="form-group">
    <label for="username">Username</label>
    <input type="text" class="form-control" name="username" id="username" placeholder="Enter username" required> 
  </div>
  
  
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="text" class="form-control" name="email" id="email" placeholder="Enter email address" required></input>
  </div>
  <div class="form-group">
    <label for="mobile">Mobile Number</label>
    <input type="number" class="form-control" name="mobile" id="mobile" placeholder="Enter mobile number" required>
  </div>
  <div class="form-group">
    <label>Select Symptoms</label><br>
  <div class="custom-control custom-checkbox custom-control-inline">
  <input type="checkbox" class="custom-control-input" id="customCheck1" name="coronasym[]" value="cold">
  <label class="custom-control-label" for="customCheck1">Cold</label>
</div>
<div class="custom-control custom-checkbox custom-control-inline">
  <input type="checkbox" class="custom-control-input" id="customCheck2"  name="coronasym[]" value="fever">
  <label class="custom-control-label" for="customCheck2">Fever</label>
</div>
<div class="custom-control custom-checkbox custom-control-inline">
  <input type="checkbox" class="custom-control-input" id="customCheck3"  name="coronasym[]" value="breath">
  <label class="custom-control-label" for="customCheck3">Difficulty in breathing</label>
</div>
<div class="custom-control custom-checkbox custom-control-inline">
  <input type="checkbox" class="custom-control-input" id="customCheck4"  name="coronasym[]" value="weak">
  <label class="custom-control-label" for="customCheck4">Feeling weak</label>
</div>
</div>
<div class="form-group">
    <label for="description">Describe how are you feeling</label>
    <textarea class="form-control" id="description" name="description" rows="3"></textarea>
  </div>
<button type="submit" class="btn btn-primary" name="submit">Submit</button>
</form>
          </div>
      </div>
  </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>

<?php
    $server='localhost';
    $user='root';
    $password='';
    $db='coronadb';

    $con=mysqli_connect($server,$user,$password,$db);
        
    if(isset($_POST['submit'])){
        $username=$_POST['username'];
        $email=$_POST['email'];
        $mobile=$_POST['mobile'];
        $symp=$_POST['coronasym'];
        $msg=$_POST['description'];

    $chk="";
    foreach($symp as $chk1){
        $chk.=$chk1.",";
    }
    $insertquery= "INSERT INTO `coronacases` (`username`, `email`, `mobile`, `symp`, `message`)
     VALUES ('$username', '$email', '$mobile', '$chk', '$msg')";
    $query=mysqli_query($con,$insertquery);
    $username="";
    $email="";
    $mobile="";
    $symp=array();
    $msg="";
}

?>


