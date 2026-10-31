# 全忠实 $+$ 本质满 $\implies$ 范畴等价
`imp.equiv-criterion` · 推出 · strong 边 · 根 `../`

`def.ff-faithful` 忠实 / 满 / 全忠实 + `def.essentially-surjective` 本质满 → `def.cat-equivalence` 范畴等价

**（$\Longleftarrow$）** 设 $F : \mathcal{C} \to \mathcal{C}'$ 全忠实且本质满，要造出 $G$ 与自然同构。

本质满给出：对每个 $X' \in \mathcal{C}'$ 都能挑一个 $A \in \mathcal{C}$ 与同构 $\eta_{X'} : F(A) \to X'$。用选择公理把这些选择一次做完，定义 $G(X') = A$。

再定义 $G$ 在态射上的作用。给定 $f' : X' \to Y'$，先把它拉回到 $G(X')$ 与 $G(Y')$ 之间：

$$g = \eta_{Y'}^{-1} \circ f' \circ \eta_{X'} : F(G(X')) \to F(G(Y'))$$

> 续见 proofs/imp.equiv-criterion.2.md
