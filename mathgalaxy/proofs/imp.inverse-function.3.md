# 压缩映射原理 $\implies$ 逆映射定理（有限维）
`imp.inverse-function` · 推出 · strong 边 · 根 `../`

`thm.banach-fixed-point` 压缩映射原理 + `thm.mean-value-multi` 多元中值定理 + `thm.chain-rule-multi` 多元链式法则 → `thm.inverse-function` 逆映射定理

**第三步：对每个小 $y$，解 $f(x) = y$。** 设 $\|y\| \le r/2$。定义 $\Psi_y(x) := y + \Phi(x)$。若 $\|x\| \le r$ 则 $\|\Psi_y(x)\| \le \|y\| + \|\Phi(x) - \Phi(0)\| + \|\Phi(0)\| \le \frac{r}{2} + \frac{r}{2} = r$（注意 $\Phi(0) = 0$），故 $\Psi_y$ 把闭球 $\overline{B}(0, r)$ 映入自身；它又是系数 $\frac{1}{2}$ 的压缩映射。闭球在 $\mathbb{R}^{n}$ 中**完备**，由压缩映射原理（`thm.banach-fixed-point`）$\Psi_y$ 有唯一不动点 $x \in \overline{

> 续见 proofs/imp.inverse-function.4.md
