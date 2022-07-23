class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree
{
    constructor()
    {
        this.root = null;
    }
    insert(data){
	let newNode = new Node(data);
	if(this.root === null)
		this.root = newNode;
	else
		this.TochildNode(this.root, newNode);
    }   
    TochildNode(node, newNode){
	    if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode;
            }
            else
			this.TochildNode(node.left, newNode);
	    }
	    else{
		if(node.right === null){
			node.right = newNode;
        }
		else
			this.TochildNode(node.right,newNode);
	    }
    }

    search(node, data){
            if(node === null)
                return null;

            else if(data < node.data)
                return this.search(node.left, data);
        

            else if(data > node.data)
                return this.search(node.right, data);

            else
                return node.data;
    }
    getRootNode(){
        return this.root;
    }
    preorderTraverselRecursive(node){
    if(node !== null)
        {
            console.log(node.data);
            this.preorderTraverselRecursive(node.left);
            this.preorderTraverselRecursive(node.right);
        }
    }
    PreOrderiterative(node){

        if (node == null){
            return;
        }
        let stack = [];
        stack.push(root);
        
        while (stack.length > 0){
            let node = stack[stack.length - 1];
            console.log(node.data);
            stack.pop();
            if (node.right != null){
                stack.push(node.right);
            }
            if (node.left != null){
                stack.push(node.left);
            }
        }

    }
}

let BST = new BinarySearchTree();

BST.insert(10);
BST.insert(21);
BST.insert(9);
BST.insert(2);
BST.insert(50);

let root = BST.getRootNode();
console.log("Iterative  : ")
BST.PreOrderiterative(root);
console.log("Recursive  : ")
BST.preorderTraverselRecursive(root);
// if(BST.search(root,15)!==null){
//     console.log("Found");
// }
// else{
//     console.log("Not Found")
// }