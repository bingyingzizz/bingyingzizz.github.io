# 法坐标下的三阶偏导抵消 $\implies$ 第二比安基恒等式
`imp.tu-bianchi` · 推出 · strong 边 · 根 `../`

`def.curvature-tensor` Riemann 曲率张量 + `prop.curvature-tensor-symmetries` 曲率张量的对称性 → `thm.bianchi-identity` 比安基恒等式

把 $\nabla_{i}R_{jk\ell m}+\nabla_{j}R_{ki\ell m}+\nabla_{k}R_{ij\ell m}$ 在 $p$ 处写成 $g$ 的三阶偏导：三条轮流展开后，每一个三阶偏导 $\partial\partial\partial g$ 恰好出现两次、符号相反，逐项抵消。于是等式在 $p$ 处成立；$p$ 任意且两边都是张量，故恒等式处处成立。

**缩并形式。** 对第二比安基先用 $g^{i\ell}$ 缩并一次、再用 $g^{jm}$ 缩并一次，并用 (3)（两对指标可交换）把指标搬正，得

$$\nabla^{i}R_{ij}-\frac{1}{2}\nabla_{j}S = 0 ,$$

即 $\nabla^{i}G_{ij} = 0$，其中 $G_{ij} = R_{ij}-\frac{1}{2}Sg_{ij}$。（这一步只做指标记账，不逐项抄系数。）

> 续见 proofs/imp.tu-bianchi.3.md
