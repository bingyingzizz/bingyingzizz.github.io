# 比较判别法 $\implies$ Kummer 判别法
`imp.kummer` · 推出 · strong 边 · 根 `../`

`thm.comparison-test` 比较判别法 → `thm.kummer` Kummer 判别法

记 $K_n := c_n \frac{a_n}{a_{n+1}} - c_{n+1}$。

**收敛支**：设 $n \ge N_0$ 时 $K_n \ge \delta > 0$。把它写成

$$c_n a_n - c_{n+1} a_{n+1} \ge \delta\, a_{n+1}$$

对 $n = N_0, \ldots, M-1$ 求和，左端**裂项**：$c_{N_0} a_{N_0} - c_M a_M \ge \delta \sum_{n = N_0}^{M-1} a_{n+1}$。左端 $\le c_{N_0} a_{N_0}$（因为 $c_M a_M > 0$），故

$$\sum_{n = N_0}^{M-1} a_{n+1} \le \frac{c_{N_0} a_{N_0}}{\delta}$$

对一切 $M$ 成立 —— 部分和有界，由比较判别法（或直接由单调有界）收敛。

> 续见 proofs/imp.kummer.2.md
