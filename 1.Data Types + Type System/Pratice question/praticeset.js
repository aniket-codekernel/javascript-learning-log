/*3.What is a typeof null 
    //Why does this bug exist 
        //.In js every first implemation(1995),values were stored with a type tag
        //.The tag for object was 000
        //.null was represented as the null pointer 0x00 which happen of to match the object type tag 
        //.so type of null incrrectly retured "object" form dry one

    //Why hasn't it been fixed
        //.This is cant be fixxed beccause the millions of a website working on that 
        //.If js is fixed this bug that millions of website stop working That why this bug cant be fixed    

*/


/*8.How do you correctly check if a values is NaN
    //Number.isNaN(NaN);  //true
    //Number.isNaN("Hello"); //false
    //Number.isNaN(0/0);   //true

      //STRICT:.only returs true if the value is acutally the type number AND is NaN
               .Its does not fooled
               .Always use Number.isNaN()-it's a safe modern,non coercing way to check for NaN
*/


/*13.Why Primitives compare by value and object compare by reference
      //The core reason: how theys stored in memory
      .Primitives=>stack memory
                  .Stored directly as the actual value in a fixed memory slot
                  .When you compare two primitives,JS just check :"do these two values look identical"
                  let a=5;
                  let b=5;
                  consloe.log(a===b); True-same value , that's all that matters


      .object=>Heap memory
                  .The object actual data lives in a heap
                  .The variables itself only holds a reference (address) pointing to that location in the heap not the data itself
                  .when you compare two objects js checks "do these two variables point to the excat same memory addres" not wheter
                  their contents look same
                    let obj 1={name:"a"}
                    let obj 2={name:"a"}
                    console.log(obj 1===obj 2); //false => differet address, even though content is identical

                    let obj 3 = obj 1
                    console.log(obj 1 == obj 3); //true=>same adress (obj 3 point to the same object as obj 1)

                    visual method model
                    Primitives (stack)
                    a=[5];
                    b=[5];      Comparsion:Values vs Values =>equal
                    objects(Heap)
                    obj1 => 0*001 => {name:"A"}
                    obj2 => 0*002 => {name:"A"}  =>comparsion: address vs address =>Not equal x
                    obj3 => 0*001 => {same as obj 1} =>comparsion: address vs address => equal
*/


/*20.What the difference in behavor betn
      let a = "hi"
      let b = new string("hi")
      console.log(typeof a,typeof b) //string object
      console.log(a===b);  false

      let b = new string("hi")
      Normally when you write a string, you just do this let a = "hi"
      this create a primitive a plain simple value that's 99% of how you ever makes a string 

      let b =new string ("hi")
       This does not store "hi" it create a whole objct that has "hi" trucked inside it,plus baggage (metthod properties intera solt for the value)


       let b =new string ("hi")
       console.log(b)  //[string "hi"] looks different from a plane string 
       console.log(b + "") //hi  coercet to primitive when needed
       console.log(b length) //2 object can have properties like this
       console.log(type of b)  //objecyt
*/ 
