# 比较判别法 $\implies$ Kummer 判别法
`imp.kummer` · 推出 · strong 边 · 根 `../`

`thm.comparison-test` 比较判别法 → `thm.kummer` Kummer 判别法

**发散支**：设 $\sum 1/c_n$ 发散且 $n \ge N_0$ 时 $K_n \le 0$，即 $c_n a_n \le c_{n+1} a_{n+1}$。于是 $\{c_n a_n\}$ 递增，特别地 $c_n a_n \ge c_{N_0} a_{N_0} =: \gamma > 0$，从而

$$a_n \ge \frac{\gamma}{c_n}$$

由 $\sum 1/c_n$ 发散与比较判别法，$\sum a_n$ 发散。∎

> **裂项**是这一族判别法的共同机制：$K_n$ 的设计就是要让 $c_n a_n - c_{n+1}a_{n+1}$ 塌缩成一个望远镜和。（把 $c_n$ 取成 $1, n, n\ln n$ 就分别得到 d'Alembert、Raabe、Bertrand。）
