# imp.additive-functor-preserves-triangles
`imp.additive-functor-preserves-triangles` · 推出 · strong 边 · 根 `../`

`def.additive-functor` 加法函子 + `def.distinguished-triangle` 导出三角 → `prop.additive-functor-preserves-triangles` 加法函子保导出三角

**证明。** 导出三角的定义是「同构于某个映射锥三角」。逐条检查：
- **$F$ 保映射锥**：$M(f)^{n} = K^{n+1} \oplus L^{n}$ 而微分是分块矩阵 $\begin{pmatrix} -d^{n+1} & 0 \\ f^{n} & d^{n} \end{pmatrix}$。

$F$ 加法，故保有限双积（$F(K^{n+1}\oplus L^{n}) = FK^{n+1}\oplus FL^{n}$）✓，而分块矩阵的两个条件（与微分交换、左上取 $-d$）都是等式，逐项被 $F$ 保持 ✓。

> 续见 proofs/imp.additive-functor-preserves-triangles.2.md
