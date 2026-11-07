# 控制收敛定理 $\implies$ 平均算子联合连续
`imp.dct-average-continuous` · 推出 · strong 边 · 根 `../`

`thm.dct` 控制收敛定理 → `lem.average-continuous` 平均算子联合连续

**① 只有一段需要交换极限与积分。** 把 $A_{r}f(x) - A_{r_0}f(x_0)$ 按球拆成

$\frac{1}{m(B(x,r))}\int \bigl(\chi_{B(x,r)} - \chi_{B(x_0,r_0)}\bigr) f + \Bigl(\frac{1}{m(B(x,r))} - \frac{1}{m(B(x_0,r_0))}\Bigr) \int_{B(x_0,r_0)} f .$

第二段是「有界系数趋于 $0$ 乘以一个固定常数」，不用定理；第一段要证 $\int (\chi_{B(x_k,r_k)} - \chi_{B(x_0,r_0)}) f \to 0$。$f$ 只在 $L^1_{loc}$ 里、没有连续性可用，所以必须**把极限搬进积分号**。

> 续见 proofs/imp.dct-average-continuous.2.md
