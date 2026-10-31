# 全忠实 $+$ 本质满 $\implies$ 范畴等价
`imp.equiv-criterion` · 推出 · strong 边 · 根 `../`

`def.ff-faithful` 忠实 / 满 / 全忠实 + `def.essentially-surjective` 本质满 → `def.cat-equivalence` 范畴等价

**（$\Longrightarrow$）** 设 $F$ 是等价，取 $G$ 与自然同构 $\beta : G \circ F \implies 1_{\mathcal{C}}$。

**忠实**：设 $f, g : A \to B$ 且 $F(f) = F(g)$。$\beta$ 的自然是说下面两个方块交换：

$$\beta_B \circ G F(f) = f \circ \beta_A, \qquad \beta_B \circ G F(g) = g \circ \beta_A$$

左边两式相等（因为 $F(f) = F(g)$），于是 $f \circ \beta_A = g \circ \beta_A$；$\beta_A$ 可逆，两边右乘 $\beta_A^{-1}$ 得 $f = g$。

**满**：设 $h : F(A) \to F(B)$。先把 $h$ 沿 $G$ 送过去，再用 $\beta$ 接回来，得到 $\mathcal{C}$ 中的态射

$$f = \beta_B \circ G(h) \circ \beta_A^{-1} : A \to B$$

> 续见 proofs/imp.equiv-criterion.4.md
