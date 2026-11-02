# 等价函子的判据　`thm.equivalence-criterion`　·　说明
根 `../`

另一侧：每个 $X$ 处 $\varphi_{F(X)}^{-1} : F(X) \to F\bigl(GF(X)\bigr)$ 在全忠实之下来自唯一的 $\psi_{X} : X \to GF(X)$，而 $\psi$ 自然（自然性同样过 $F$ 检验，由 $\varphi$ 的自然性得到）✓，于是 $\psi : 1_{\mathcal{C}} \implies G \circ F$ 也是自然同构 ✓。
**$(\Longrightarrow)$** 设 $F$ 有伪逆 $G$，即 $F G \cong 1_{\mathcal{C}'}$、$G F \cong 1_{\mathcal{C}}$。
- **本质满**：$X' \cong F\bigl(G(X')\bigr)$ ✓；
- **全忠实**：$\operatorname{Hom}(X, Y) \xrightarrow{\ F\ } \operatorname{Hom}(FX, FY)$ 的逆由
$$\operatorname{Hom}(FX, FY) \xrightarrow{\ G\ } \operatorname{Hom}(GFX, GFY) \cong \operatorname{Hom}(X, Y)$$
给出（最后一步用 $GF \cong 1_{\mathcal{C}}$ 的自然性）✓。∎

⭐ 这条把「两个范畴一样」这件含糊的事换成两条**可以逐项检查**的判据：Hom 集上是双射（全忠实）、像覆盖到同构（本质满）。

> 续见 notes/thm.equivalence-criterion.3.md
