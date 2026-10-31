# 均值性质 $\implies$ 调和函数的最大值原理
`imp.harmonic-maximum` · 推出 · strong 边 · 根 `../`

`thm.harmonic-mean-value` 调和函数的均值性质 → `thm.harmonic-maximum` 调和函数的最大值原理

**第一步：设出最大值点。** 设 $u$ 在 $\Omega$ 上调和，且在某点取到最大值 $M$。令

$$E := \{\, z \in \Omega : u(z) = M \,\} \ne \emptyset.$$

**第二步：$E$ 是闭的。** $u$ 连续，$E$ 是闭集 $\{M\}$ 在 $\Omega$ 中的原像。

**第三步：$E$ 是开的。** 取 $a \in E$，取 $r > 0$ 使 $\overline{D(a, r)} \subset \Omega$。由均值性质

$$M = u(a) = \frac{1}{2\pi}\int_0^{2\pi} u(a + r e^{i\theta})\,\mathrm{d}\theta.$$

被积函数逐点 $\le M$，而它们的平均恰好是 $M$ $\implies$ 被积函数在**整个圆周**上恒等于 $M$；否则若某一段严格小于 $M$，由连续性就有一段正长度的区间严格小于 $M$，积分随之严格小于 $M$。所以圆周落在 $E$ 里；对每个 $0 < \rho \le r$ 同理，于是 $D(a, r) \subset E$。

> 续见 proofs/imp.harmonic-maximum.2.md
