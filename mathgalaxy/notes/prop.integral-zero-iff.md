# 积分为零 ⟺ 几乎处处为零　`prop.integral-zero-iff`　·　说明
根 `../`

**证明。**
**$(\Longleftarrow)$** 若 $f = 0$ a.e.，则任何简单函数 $\varphi \le f$ 也 a.e. 为零（在 $f = 0$ 处 $\varphi = 0$），故 $\int \varphi = 0$；对全体这样的 $\varphi$ 取上确界得 $\int f = 0$ ✓。
**$(\implies)$** 设 $\int f = 0$。对每个 $n \ge 1$ 记 $A_{n} := \{f > 1/n\}$（可测）。由 $\frac1n\chi_{A_{n}} \le f$ 得
$$\frac1n\,\mu(A_{n}) \le \int f\,\mathrm{d}\mu = 0 \implies \mu(A_{n}) = 0 .$$
而 $\{f > 0\} = \bigcup_{n \ge 1} A_{n}$ 是可数并零集，故 $\mu(\{f>0\}) = 0$，即 $f = 0$ a.e. ✓。∎
附带地：$\{f = +\infty\} \subseteq \{f>0\}$ 也一起被处理掉了。

$(\Longleftarrow )$ 只要 $f$ 在零集外为零，下确界里的每个简单函数 $\varphi \le f$ 也几乎处处为零，从而 $\int \varphi = 0$。

$(\implies )$ 记 $A_n = \{f > 1/n\}$，则 $(1/n)\cdot\mu(A_n) \le \int f = 0$，故 $\mu (A_{n}) = 0$；而 $\{f > 0\} = \bigcup_n A_n$ 是零测的。

> 续见 notes/prop.integral-zero-iff.2.md
