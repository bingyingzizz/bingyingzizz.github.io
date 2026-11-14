# addition and multiplication of matrices　`def.matrix-operations`
English entry · root `../`
[in graph](../#n=def.matrix-operations)　·　[Chinese page (authoritative)](./def.matrix-operations.md)

$$(AB)_{ij} := \sum_{k=1}^{n} a_{ik} b_{kj}$$

(the number of columns of $A$ must equal the number of rows of $B$, otherwise the product is not defined.)

## Notes · **draft**
⭐ Why multiplication looks like this: regard each column of $B$ as a vector in $K^{n}$; then the column of $AB$ with index $j$ is given by $= A \cdot (B$'s $j$-th column$)$ — **matrix multiplication is composition of linear maps** (see "linear maps $\leftrightarrow$ matrices").

It is not an accidental recipe of "multiplying row by column".

⚠ Multiplication is **not commutative**: $AB \ne BA$ (even the shapes may fail to match).

> continued in nodes/def.matrix-operations.en.3.md
