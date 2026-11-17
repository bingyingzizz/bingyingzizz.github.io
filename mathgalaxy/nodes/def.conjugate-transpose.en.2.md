# Conjugate Transpose (Adjugate)　`def.conjugate-transpose`
English entry · root `../`
[in graph](../#n=def.conjugate-transpose)　·　[Chinese page (authoritative)](./def.conjugate-transpose.md)

Let $A \in M_{m\times n}(\mathbb{C})$. The **conjugate transpose** (also called the **adjoint matrix**) is

$$A^{*} := \overline{A}^{T} = \bigl(\overline{A^{T}}\bigr), \qquad (A^{*})_{ij} := \overline{a_{ji}} .$$

Properties: $(A+B)^{*} = A^{*} + B^{*}$, $(cA)^{*} = \overline{c}\,A^{*}$, $(AB)^{*} = B^{*}A^{*}$, $(A^{*})^{*} = A$.

**Relation to the inner product (this is its defining property)**: for all $x, y$ one has

$$\langle Ax, y\rangle = \langle x, A^{*}y\rangle .$$

For a real matrix $A^{*} = A^{T}$, and the two notions coincide.

> continued in nodes/def.conjugate-transpose.en.3.md
