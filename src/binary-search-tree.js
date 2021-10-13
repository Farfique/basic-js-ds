const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor(data) {
    this.parent = null;
    this.data = data || null;
    this.left = null;
    this.right = null;
  }



  root() {
    if (this.data === null){
      return null;
    }
    else {
      return this;
    }
    
  }

  add(data) {
    if (this.data === null){
      this.data = data;
    }
    else if (data > this.data){
      if (this.right instanceof BinarySearchTree){
        this.right.add(data);
      }
      else {
        this.right = new BinarySearchTree(data);
        this.right.parent = this;
      }      
    }
    else if (data < this.data){
      if (this.left instanceof BinarySearchTree){
        this.left.add(data);
      }
      else {
        this.left = new BinarySearchTree(data);
        this.left.parent = this;
      }
    }
  }

  has(data) {
    if (this.data === null){
      return false;
    }
    if (this.data == data){
      return true;
    }
    else if (data > this.data){
      if (this.right instanceof BinarySearchTree){
        return this.right.has(data);
      }
      else {
        return false;
      }
      
    }
    else {
      if (this.left instanceof BinarySearchTree){
        return this.left.has(data);
      }
      else {
        return false;
      }
      
    }
  }

  find(data) {
    if (this.data === null){
      return null;
    }
    if (this.data == data){
      return this;
    }
    else if (data > this.data){
      if (this.right instanceof BinarySearchTree){
        return this.right.find(data);
      }
      else {
        return null;
      }      
    }
    else {
      if (this.left instanceof BinarySearchTree){
        return this.left.find(data);
      }
      else {
        return null;
      }
      
    }
  }

  remove(data) {

    if (this.data !== null){
      
      if (data > this.data && this.right instanceof BinarySearchTree){
        this.right.remove(data);
      }
      else if (data < this.data&& this.left instanceof BinarySearchTree){
        this.left.remove(data);
      }
      else if (data == this.data){
        if (this.right === null && this.left === null){
          if (data > this.parent.data){
            this.parent.right = null;
          }
          else {
            this.parent.left = null;
          }
        }
        else if (this.right === null && this.left !== null){
            if (data > this.parent.data){
              this.parent.right = this.left;
            }
            else {
              this.parent.left = this.left;
            }
        } 
        else if( this.right !== null && this.left === null){
          if (data > this.parent.data){
            this.parent.right = this.right;
          }
          else {
            this.parent.left = this.right;
          }
        }
        else if (this.right.left === null){
          this.data = this.right.data;
          this.right = this.right.right;
        }
        else {
          let temp = this.right.left.data;          
          this.remove(this.right.left.data);
          this.data = temp;
        }
      }


    }


    if (this.data == data){
      return true;
    }
    else if (data > this.data){
      if (this.right instanceof BinarySearchTree){
        return this.right.has(data);
      }
      else {
        return false;
      }
      
    }
    else {
      if (this.left instanceof BinarySearchTree){
        return this.left.has(data);
      }
      else {
        return false;
      }
      
    }
    
  }

  min() {
    if (this.data === null){
      return null;
    }
    if (!this.left){
      return this.data;
    }
    else {
      return this.left.min();
    }
  }

  max() {
    if (this.data === null){
      return null;
    }
    if (!this.right){
      return this.data;
    }
    else {
      return this.right.max();
    }
  }

}