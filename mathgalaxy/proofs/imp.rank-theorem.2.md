# 逆映射定理 + 隐函数定理 $\implies$ 常秩定理
`imp.rank-theorem` · 推出 · strong 边 · 根 `../`

`thm.inverse-function` 逆映射定理 + `thm.implicit-function` 隐函数定理 → `cor.rank-theorem` 常秩定理

**第二步：把 $f'$ 当成新坐标。** 令 $\Phi(x', x'') := \bigl( f'(x', x''),\ x'' \bigr)$。它的导数在 $a$ 处是块矩阵 $\begin{pmatrix} D_{x'}f' & D_{x''}f' \\ 0 & I_{n-r} \end{pmatrix}$，行列式 $= \det D_{x'}f' \ne 0$，故由逆映射定理（`thm.inverse-function`）$\Phi$ 在 $a$ 附近是 $C^{1}$ 坐标变换。在 $\Phi$ 坐标下（记新坐标仍为 $(y', y'')$，其中 $y' = f'(x',x'')$、$y'' = x''$），$\Phi$ 把 $f$ 变成

$$f \circ \Phi^{-1}(y', y'') = \bigl( y',\ \widehat f(y', y'') \bigr)$$

> 续见 proofs/imp.rank-theorem.3.md
