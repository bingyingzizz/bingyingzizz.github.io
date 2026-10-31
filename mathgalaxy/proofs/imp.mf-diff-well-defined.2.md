# 换卡只乘 Jacobi 矩阵 $\implies$ 切映射良定义
`imp.mf-diff-well-defined` · 推出 · strong 边 · 根 `../`

`def.manifold-chart` 图卡 + `def.tangent-space-manifold` 切空间 → `def.differential-map` 切映射

**第二步：像也相切。** 取 $M$ 的卡 $(V,\psi)$ 使 $F(p) \in V$。把局部表示记作 $G := \psi \circ F \circ \varphi^{-1}$（光滑，定义在 $\varphi(p)$ 附近）。则

$$(\psi \circ F \circ \gamma_{i})^{\prime}(0) = \mathrm{d}G_{\varphi(p)}\bigl((\varphi \circ \gamma_{i})^{\prime}(0)\bigr),$$

两个速度相同、$\mathrm{d}G$ 同一个线性映射，故像的速度相同。即 $F \circ \gamma_{1}$ 与 $F \circ \gamma_{2}$ 在 $F(p)$ 处相切。

> 续见 proofs/imp.mf-diff-well-defined.3.md
