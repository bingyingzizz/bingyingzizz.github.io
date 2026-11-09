# Bertrand 判别法：Kummer 取 $c_n=n\log n$
`imp.kummer-bertrand` · 推出 · strong 边 · 根 `../`

`thm.kummer` Kummer 判别法 + `thm.integral-test` 积分判别法 + `def.log-function` 对数函数与 e → `thm.bertrand-test` 贝特朗判别法（Bertrand）

设 $\frac{a_n}{a_{n+1}}=1+\frac1n+\frac{\beta}{n\log n}+o\bigl(\frac1{n\log n}\bigr)$，取 $c_n=n\log n$（$n\ge2$）。则
$$K_n=n\log n\cdot\frac{a_n}{a_{n+1}}-(n+1)\log(n+1).$$
把 $(n+1)\log(n+1)=n\log n+\log n+1+O(1/n)$ 与 $n\log n\cdot\frac{a_n}{a_{n+1}}=n\log n+\log n+\beta+o(1)$ 相减，得 $K_n=\beta-1+o(1)$。
$\beta>1$：$\liminf K_n>0$，由 Kummer 收敛支得收敛（收敛支不需要 $\sum1/c_n$ 的条件）。
$\beta<1$：最终 $K_n\le0$；又 $\sum1/(n\log n)$ 发散（`thm.integral-test`，$\int_2^{N}\frac{dx}{x\log x}=\log\log N$），由发散支得发散。
$\beta=1$：$K_n\to0$，两个例子 $\sum1/(n\log n)$ 与 $\sum1/(n\log n(\log\log n)^2)$ 都满足

> 续见 proofs/imp.kummer-bertrand.2.md
