export const LANGUAGE_VERSIONS = {
    javascript: '15.3.0',  // Update with a valid version
    typescript: '5.1',
    python: '3.11.3',
    java: '20',
    csharp: '12',
    php: '8.2'
  };
  
export const CODE_SNIPPETS={
    javascript:`console.log("Hello, Javascript!");`,
    typescript:`console.log("Hello, Typescript!");`,
    python:`print("Hello, World!")
    `,
    java:`public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, World!");
        }
}
    `,
    csharp:`using System;

    class Program {
        static void Main() {
            Console.WriteLine("Hello, World!");
        }
}
    `,
    php:`<?php
    echo "Hello, World!";
?>
    `,
    Solidity:`// SPDX-License-Identifier: MIT
    pragma solidity ^0.8.19;
    
    contract HelloWorld {
        function sayHello() public pure returns (string memory) {
            return "Hello, World!";
        }
    }
    `
}