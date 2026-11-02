# 重排不变 + 二重和 $\implies$ Cauchy 乘积公式
`imp.series-product` · 推出 · strong 边 · 根 `../`

`def.absolute-convergence` 绝对收敛 + `thm.rearrangement` 重排不变性 → `thm.series-product` Cauchy 乘积

1. **对角线与方形的关系**：$A_N B_N = \sum_{m, n \le N} a_m b_n$ 是二重和的一个「方形」部分和。
2. **绝对收敛性**：$\sum_{m, n} |a_m b_n| = \bigl( \sum_m |a_m| \bigr)\bigl( \sum_n |b_n| \bigr) < \infty$（二重非负和按任一方式展布都相等），故二重绝对收敛，任一重排都不改变和，且和 $= AB$。
3. **按对角线重排**：把 $\sum_{m, n} a_m b_n$ 按 $m + n$ 分组，第 $n$ 组之和正是 $c_n = \sum_{k \le n} a_k b_{n-k}$。由第 2 步的重排不变性，$\sum c_n = AB$。
4. **$\sum c_n$ 绝对收敛**：同理对 $\sum_{m,n} |a_m b_n|$ 按对角线分组，得 $\sum |c_n| \le \sum_{m,n}|a_m b_n| < \infty$。

> 续见 proofs/imp.series-product.3.md
