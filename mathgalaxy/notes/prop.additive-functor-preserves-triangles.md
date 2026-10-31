# 加法函子保导出三角　`prop.additive-functor-preserves-triangles`　·　说明
根 `../`

**证明。** 导出三角的定义是「同构于某个映射锥三角」。逐条检查：
- **$F$ 保映射锥**：$M(f)^{n} = K^{n+1} \oplus L^{n}$ 而微分是分块矩阵 $\begin{pmatrix} -d^{n+1} & 0 \\ f^{n} & d^{n} \end{pmatrix}$。$F$ 加法，故保有限双积（$F(K^{n+1}\oplus L^{n}) = FK^{n+1}\oplus FL^{n}$）✓，而分块矩阵的两个条件（与微分交换、左上取 $-d$）都是等式，逐项被 $F$ 保持 ✓。于是 $F(M(f)) \cong M(Ff)$ ✓。
- **$F$ 保平移**：$F(K[1]) = F(K)[1]$（逐项作用与指标无关）✓。
- **$F$ 保同构与同伦类**：$F$ 是函子，把同构送到同构、把 $\mathbf{K}(\mathcal{C})$ 的态射送到 $\mathbf{K}(\mathcal{C}')$ 的态射 ✓。
于是任何导出三角（$\cong$ 某个映射锥三角）被 $F$ 送到 $\cong$ $F$ 的映射锥三角，仍是导出三角 ✓。
⚠️ 这里**必须**用加法性：非加法函子不保双积，$F(K^{n+1}\oplus L^{n}) \ne FK^{n+1}\oplus FL^{n}$，论证立刻断掉。∎

> 续见 notes/prop.additive-functor-preserves-triangles.2.md
