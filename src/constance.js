export const LANGUAGE_VERSIONS = {
    javascript: '18.15.0',
    typescript: '5.0.3',
    python: '3.10.0',
    java: '15.0.2',
    csharp: '6.12.0',
    php: '8.2.3',
    solidity: '0.8.11',
    rust: '1.60.0'
};

export const CODE_SNIPPETS = {
    javascript: `console.log("Hello, Javascript!");`,
    typescript: `console.log("Hello, Typescript!");`,
    python: `print("Hello, World! python")`,
    java: `public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, World! java");
        }
    }`,
    csharp: `using System;
    class Program {
        static void Main() {
            Console.WriteLine("Hello, World! c#");
        }
    }`,
    php: `<?php
    echo "Hello, World! php";
?>`,
    solidity: `// SPDX-License-Identifier: MIT
    pragma solidity ^0.8.11;
    contract HelloWorld {
        function sayHello() public pure returns (string memory) {
            return "Hello, World!";
        }
    }`,
    rust: `fn main() {
        println!("Hello, World!");
    }`
};
