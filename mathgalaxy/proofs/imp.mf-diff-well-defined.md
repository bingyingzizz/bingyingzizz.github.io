# 换卡只乘 Jacobi 矩阵 $\implies$ 切映射良定义
`imp.mf-diff-well-defined` · 推出 · strong 边 · 根 `../`

`def.manifold-chart` 图卡 + `def.tangent-space-manifold` 切空间 → `def.differential-map` 切映射

设 $\gamma_{1}, \gamma_{2}$ 是过 $p$ 的两条曲线且在卡 $(U,\varphi)$ 里相切，即 $(\varphi \circ \gamma_{1})^{\prime}(0) = (\varphi \circ \gamma_{2})^{\prime}(0)$。要证 $F \circ \gamma_{1}$ 与 $F \circ \gamma_{2}$ 在 $F(p)$ 处相切。

**第一步：结论与卡无关。** 在另一张卡 $(U_{1},\varphi_{1})$ 里

$$(\varphi_{1} \circ \gamma_{i})^{\prime}(0) = \mathrm{d}(\varphi_{1} \circ \varphi^{-1})_{\varphi(p)}\bigl((\varphi \circ \gamma_{i})^{\prime}(0)\bigr),$$

同一个线性映射作用在同一个向量上，故两个结果仍相等。于是 $[\gamma]$ 与卡无关 —— 这正是 `def.tangent-space-manifold` 的切向量有定义的原因，这里只是复核一遍。

> 续见 proofs/imp.mf-diff-well-defined.2.md
