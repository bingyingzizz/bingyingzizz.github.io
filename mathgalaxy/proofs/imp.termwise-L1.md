# 非负逐项积分 + 零集判定 $\implies L^{1}$ 的逐项积分
`imp.termwise-L1` · 推出 · strong 边 · 根 `../`

`thm.termwise-integration` 逐项积分 + `prop.integral-zero-iff` 积分为零 ⟺ 几乎处处为零 → `thm.termwise-L1` L¹ 的逐项积分

设 $\sum_j \int |f_j| < \infty$。

**① 绝对收敛 a.e.。** 令 $g = \sum_j |f_j| \in L^+$。由非负函数的逐项积分，

$$\int g = \sum_j \int |f_j| < \infty$$

由「积分有限的后果」，$g < \infty \text{a.e.}$，即 $\sum_j |f_j(x)| < \infty$ 对 a.e. x 成立。所以 $\sum_j f_j(x)$ 对 a.e. x **绝对收敛**。

**② 定义 $f$。** 令 $f(x) = \sum_j f_j(x)$（在收敛的 a.e. 点上），其余点随意取 0。则 $|f| \le g$，故 $f \in L^{1}$。

**③ 部分和被控制。** 部分和 $s_N = \sum_{j\le N} f_j$ 满足 $|s_N| \le g \in L^1$。

**④ 用 DCT。** $s_N \to f$ a.e.，且被 $g$ 控制，故

> 续见 proofs/imp.termwise-L1.2.md
