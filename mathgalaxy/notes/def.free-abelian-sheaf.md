# 自由阿贝尔群层　`def.free-abelian-sheaf`　·　说明
根 `../`

**怎么造。** 先逐点自由化、再层化：把 $X$ 看成预层，取预层 $U \mapsto \mathbb{Z}\cdot X(U)$（逐点自由阿贝尔群），再层化：

$$\mathbb{Z}\cdot X \;:=\; \bigl(U \mapsto \mathbb{Z}\cdot X(U)\bigr)^{\#}.$$

**为什么这就对。** 预层那一层是逐点的：函子范畴里的伴随逐点造，而 $\mathbf{Ab} \to \mathbf{Set}$ 的遗忘函子有左伴随 $E \mapsto \mathbb{Z}\cdot E$（自由阿贝尔群）✓，于是 $\widehat{\mathcal{C}}(\mathbf{Ab}) \to \widehat{\mathcal{C}}$ 的左伴随即逐点自由 ✓。到层这一层，用「层化 $\dashv$ 含入」把伴随传下去 ✓：

$$\operatorname{Hom}_{\mathbb{Z}}\bigl(\mathbb{Z}\cdot X,\ M\bigr) = \operatorname{Hom}_{\widehat{\mathcal{C}}(\mathbf{Ab})}\bigl(\mathbb{Z}\cdot X,\ M\bigr) \cong \operatorname{Hom}_{\widehat{\mathcal{C}}}(X,\ M) = M(X) ✓$$

（$M$ 本身是层，所以在预层那边的 Hom 与层这边的 Hom 一样）。∎

> 续见 notes/def.free-abelian-sheaf.2.md
