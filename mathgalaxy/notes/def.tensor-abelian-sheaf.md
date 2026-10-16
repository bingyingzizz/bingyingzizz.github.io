# 阿贝尔层的张量积　`def.tensor-abelian-sheaf`　·　说明
根 `../`

**怎么算。** $M \otimes_{\mathbb{Z}} N$ 是预层 $X \mapsto M(X) \otimes_{\mathbb{Z}} N(X)$ 的**层化**：先逐点张量，再层化。（证明只要考虑 $\mathcal{T} = \widehat{\mathcal{C}}$ 的情形，再用层化；最后归结到通常阿贝尔群的同名结论。）

**基本性质。** 交换（$M \otimes_{\mathbb{Z}} N \cong N \otimes_{\mathbb{Z}} M$）、结合、单位 $M \otimes_{\mathbb{Z}} \mathbb{Z}\cdot\mathbf{1} \cong M$；以及

$$\mathbb{Z}\cdot X \;\otimes_{\mathbb{Z}}\; \mathbb{Z}\cdot Y \;\cong\; \mathbb{Z}\cdot (X \times Y)$$

记 $M \cdot X := M \otimes_{\mathbb{Z}} \mathbb{Z}\cdot X$，则 $\operatorname{Hom}_{\mathbb{Z}}(M, N)(X) \cong \operatorname{Hom}_{\mathbb{Z}}(M \cdot X,\ N)$ —— **「在某点处取值」= 「先在点处张量、再取 Hom」**。

> 续见 notes/def.tensor-abelian-sheaf.2.md
