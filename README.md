[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hFs1pb0z)
# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

**Solution**

Since the adjacency matrix must be square, and we must iterate over each row and column therefore the runtime complexity for converting between an adjacency matrix to an adjacency list is $\Theta(V^2)$ where $V$ is the number of vertices in the graph.

This algorithm is reliant on the number of veritices in the graph. The number of edges will not matter nor will how sparse the graph is. Even if no edges exist, there will still be a runtime complexity of $\Theta(V^2)$.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
