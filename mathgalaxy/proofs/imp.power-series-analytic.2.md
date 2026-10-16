# M-判别法 + 导数交换 $\implies$ 幂级数可逐项求导
`imp.power-series-analytic` · 推出 · strong 边 · 根 `../`

`thm.uniform-limit-derivative` 导数与极限交换 + `prop.weierstrass-m-test` Weierstrass 判别法 + `thm.convergence-radius` 收敛半径 → `thm.power-series-analytic` 幂级数的逐项运算

（因为 $\sqrt[n]{n} \to 1$。）于是它在 $[x_0 - r, x_0 + r]$ 上也一致收敛（同样用 M-判别法）。
3. **交换求导与极限**：对部分和 $S_N$（多项式）用「导数与极限可交换」：$S_N' \rightrightarrows$ 逐项求导级数，且 $S_N(x_0) = a_0$ 收敛，故 $f$ 可导且 $f' = \sum n a_n (x - x_0)^{n-1}$。
4. 逐项积分的结论对 $f$ 的部分和用「极限与积分可交换」同理。∎

> 第 2 步是整条定理的关键：**求导不改变收敛半径**。若半径会缩，反复求导就会把收敛域吃光，$C^{\infty}$ 的结论也就无从谈起。
