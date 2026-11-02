# 非负积分的定义 $\implies$ 单调收敛定理
`imp.mct` · 推出 · strong 边 · 根 `../`

`def.integral-nonneg` 非负函数的积分 + `prop.simple-integral-props` 简单函数积分的性质 → `thm.mct` 单调收敛定理

**④ 让 $n \to \infty$。** 由简单函数积分的性质 (d)，$A \mapsto \int_A \varphi d\mu$ 是 $\mathcal{M}$ 上的一个**测度**；把它用在递增列 $E_{n} \uparrow X$ 上，用测度的下连续性：

$$\lim_{n\to\infty} \int_{E_n} \varphi = \int_X \varphi = \int \varphi$$

所以存在 $N$ 使 $n > N$ 时 $\int_{E_n} \varphi > \int \varphi - \varepsilon$，从而

$$\int f_n \ge \int \varphi - \varepsilon \ge \int f - 2\varepsilon$$

**⑤ 收尾。** 对一切 $n > N$ 成立，故 $\lim_n \int f_n \ge \int f - 2\varepsilon$；令 $\varepsilon \to 0$ 得 $\lim_n \int f_n \ge \int f$。与 ① 合起来就是等号。∎

> 续见 proofs/imp.mct.3.md
