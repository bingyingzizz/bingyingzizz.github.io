# 非负积分的定义 $\implies$ 单调收敛定理
`imp.mct` · 推出 · strong 边 · 根 `../`

`def.integral-nonneg` 非负函数的积分 + `prop.simple-integral-props` 简单函数积分的性质 → `thm.mct` 单调收敛定理

**① 一个方向是免费的。** 由 $f_{n} \le f$ 与积分的单调性，$\int f_{n} \le \int f$，故

$$\lim_{n\to\infty} \int f_n \le \int f$$

所以只需证另一边。

**② 用一个简单函数从下面逼近 $f$。** 给定 $\varepsilon > 0$，由 $\int f$ 的定义（取上确界）存在简单函数 $\varphi$ 使

$$0 \le \varphi \le f, \quad  \int \varphi \ge \int f - \varepsilon$$

**③ 把 $\varphi$ 搬进 $E_{n}$。** 令 $E_n = \{x : f_n(x) \ge \varphi(x)\}$。因为 $f_{n} \uparrow f$ 且 $\varphi \le f$，集合列 $E_{n}$ 是递增的、且 $\bigcup_n E_n = X$。于是

$$\int f_n \ge \int_{E_n} f_n \ge \int_{E_n} \varphi$$

> 续见 proofs/imp.mct.2.md
