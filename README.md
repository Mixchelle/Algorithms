# Cyclotron Algorithm

## Description

🔬 This repository contains an algorithm to simulate particle acceleration within a cyclotron. The algorithm is implemented in JavaScript and provides functions to create and accelerate particles in a cyclotron matrix.

## Usage

To use the cyclotron algorithm, follow these steps:

1. 📥 Clone the repository.
2. ⚙️ Run `npm install` to install the required dependencies.
3. 💻 Implement the `ciclotron` function using the provided code.
4. The function accepts two parameters: `particle` (particle type) and `N` (matrix size).
5. The function returns a matrix representing the cyclotron state after accelerating the particle.

## Algorithm Overview

The cyclotron algorithm simulates particle acceleration for three types of particles: electron (e), proton (p), and neutron (n). Depending on the particle type, different rules are applied to modify the cyclotron matrix.

## Functions

### `generateCyclotronMatrix(N)`

This function generates a new matrix with dimensions NxN, where each element is initialized to 1.

### `accelerateParticle(particle, matrix)`

This function takes a particle type and a matrix as input, and returns a new matrix after accelerating the particle within the cyclotron. The acceleration rules are applied based on the particle type.

### `ciclotron(particle, N)`

The main function `ciclotron` simulates the entire process. It initializes a matrix, applies particle acceleration rules using the `accelerateParticle` function, and returns the resulting matrix.

## Challenge

### Idea

We want to circulate a particle inside a cyclotron. The particles used are: e, p, n (electron, proton, and neutron). Each particle has a circulation function within the cyclotron, which can create either a closed or an open cycle.

Find the algorithm that satisfies the following cases for each particle:

### Input
`[particle, matrix]` ~> Example: `cyclotron("e", matrix)`
