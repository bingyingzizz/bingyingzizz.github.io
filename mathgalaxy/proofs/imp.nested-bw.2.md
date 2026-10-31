# 闭区间套定理 $\implies$ Bolzano–Weierstrass
`imp.nested-bw` · 推出 · strong 边 · 根 `../`

`lem.nested-intervals` 闭区间套定理 → `thm.bolzano-weierstrass` Bolzano–Weierstrass 定理

现在构造子列：对每个 $k$，因为 $I_k$ 含无穷多项，可以取 $n_k > n_{k-1}$ 使 $x_{n_k} \in I_k$（这一步只用到「无穷多项」可以在选完前一项之后继续往下选）。于是 $x_{n_k}$ 与 $x$ 同属 $I_k$，而 $|I_k| = 2M/2^{k} \to 0$，故 $|x_{n_k} - x| \le 2M / 2^{k} \to 0$，即 $x_{n_k} \to x$。∎

「每个有界无限子集都有聚点」是同一句话的集合版本：把子集排成一个各项互异的数列即可。

> $\mathbb{R}^{n}$ 的情形逐坐标使用本定理：一个有界列的第 $i$ 个坐标是有界实数列，先取一个收敛的子列，再在其上对下一个坐标取子列，依次进行 $n$ 次。
