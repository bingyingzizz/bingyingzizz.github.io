# 数列/函数极限的定义 $\implies$ 夹逼定理
`imp.squeeze` · 推出 · strong 边 · 根 `../`

`def.sequence-limit` 数列极限 + `def.function-limit` 函数极限 → `thm.squeeze` 夹逼定理

**数列版。** 设 $a_n \to L$、$b_n \to L$，且 $n \ge N_0$ 时 $a_n \le x_n \le b_n$。给定 $\varepsilon > 0$。

1. 由 $a_n \to L$，存在 $N_1$，使得 $n \ge N_1$ 时 $|a_n - L| < \varepsilon$，特别地 $a_n > L - \varepsilon$。
2. 由 $b_n \to L$，存在 $N_2$，使得 $n \ge N_2$ 时 $b_n < L + \varepsilon$。
3. 取 $N = \max\{N_0, N_1, N_2\}$。当 $n \ge N$ 时

$$L - \varepsilon < a_n \le x_n \le b_n < L + \varepsilon$$

即 $|x_n - L| < \varepsilon$。故 $x_n \to L$。

> 续见 proofs/imp.squeeze.2.md
