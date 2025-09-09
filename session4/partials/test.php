<?php
    // $y = 5.5;
    // $x = (int)$y;
    // (float)$y;
    // (string)$x;
    // $x = (boolean)$x;

    // $x = 0;
    // if(!$x) echo "string true\n";
    // $x = "0";
    // if(!$x) echo "string true\n";
    // $a = [];
    // if(!$a) echo "true";
    // $a = "";
    // if(!$a) echo "true";
    // $a = null;
    // if(!$a) echo "true";
    // $a = false;
    // if(!$a) echo "true";
    
    // operators
    // Arithmatic
    // + - * / %
    // conditional
    // == === != > < >= <= 
    // logical
    // && || !
    // ($a)
    // $a;
    // echo $a;
    // if($a) echo "1";
    // else echo 2;
    // echo ( isset($a) ) ;
    // $degree = 50;
    // if(true){}
    // elseif(false){}
    // else {}
    // switch($degree){
    //     case 50: echo ""; break;
    //     default: echo "d";
    // }
    // $x = array(1,2,3,4,5,6);
    // print_r($x);
    // $a = [1, false, "abc"];
    // print_r($a);

    // $users = [
    //     'name'=> "marwa",
    //     'email'=> "marwa@test.com"
    // ];
    // print_r($users);
    // echo $users['name'] . " " . $users['email'];

    // $x = 0;
    // while($x<10){
    //     echo $x. "<br>";
    //     $x++;
    // }
    // echo $x;

    // for($a=0; $a<10; $a++){
    //     echo $a;
    //     echo "<script>alert(".$a.")</script>";
    // }
    // $fruits = ["Apple", "Banana", "Cherry"];
    // $fruits[0];
    // $users = [
    //     'name'=> "marwa",
    //     'email'=> "marwa@test.com"
    // ];
    // echo $users[0]."<br>";
    // foreach($users as $key => $val){
    //     echo $val."<br>";
    // }
    // foreach($users as $x => $y ){
    //     echo $x. " - " . $y . "<br>";
    // }

    // $x = [1,2,3,4];
    // $y = ["a","b", "c"];
    // echo count($x)."<br>";

    // echo in_array(9, $x)? "true" : "false";
    // echo "<br>";
    // echo array_search(20, $x);
    // echo "<br>";
    // print_r(array_merge($x,$y));
    // echo "<br>";
    // print_r($x);
    // echo "<br>";
    // print_r($y);
    // echo "<br>";
    // asort($x);
    // echo "<br>";
    // rsort($x);
    // echo "<br>";
    // array_push($x, "abc", 4,5,6);
    // print_r($x);
    // echo "<br>";
    // array_pop($x);
    // print_r($x);
    // echo "<br>";
    // array_shift($x);
    // print_r($x);
    // echo "<br>";
    // array_unshift($x, "3", 5,7,9);
    // print_r($x);
    // echo "<br>";
    
    // function printData(int $val):string{
    //     return $val;
    // }
    // echo printData("1");

    // function sum(...$a){
    //     print_r($a);
    // }

    // sum(1,2,3);
    // function test($a="h"){
    //     echo "test". $a;
    // }
    // test();

    $name = "test";

    function test(){
        $name = "inside";
        print_r ($GLOBALS['name']);
    }

test();
?> 