# 单调性 + 反常积分 $\implies$ 积分判别法
`imp.integral-test` · 推出 · strong 边 · 根 `../`

`thm.comparison-test` 比较判别法 + `def.improper-integral` 反常积分 → `thm.integral-test` 积分判别法

设 $f \ge 0$ 递减。对每个 $n \ge 1$ 与 $x \in [n, n+1]$ 有 $f(n+1) \le f(x) \le f(n)$，逐段积分得

$$f(n+1) \le \int_{n}^{n+1} f \le f(n)$$

对 $n = 1, \ldots, N$ 求和（裂项式的夹逼）：

$$\int_1^{N+1} f \le \sum_{n=1}^{N} f(n) \le f(1) + \int_1^{N} f$$

1. 若 $\int_1^{+\infty} f$ 收敛，则右端的不等式给出部分和 $\sum_{n \le N} f(n)$ 有界，由比较判别法（非负项）级数收敛。
2. 若 $\int_1^{+\infty} f$ 发散，则左端的不等式给出部分和数列无界，级数发散。∎

> 左、右两个不等式是同一个单调性的两次使用：一段上 $f$ 的最大值在左端点、最小值在右端点。
