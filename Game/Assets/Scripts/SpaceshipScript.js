// A variable that will contain our bullet prefab
public var bullet : GameObject;

function Update() {  
    // Move the spaceship horizontally  
    rigidbody2D.velocity.x = Input.GetAxis("Horizontal") * 10;

    // When the spacebar is pressed
    if (Input.GetKeyDown("space")) {
        // Create a new bullet at “transform.position”
        // Which is the current position of the ship
        Instantiate(bullet, transform.position, Quaternion.identity);
    }
}

function OnTriggerEnter2D(obj : Collider2D) {  
    var name = obj.gameObject.name;

  
    // If it collided with the spaceship
    if (name == "Enemy") {
        // Destroy itself (the enemy) to keep things simple
        //Destroy(gameObject);
	}
}


	