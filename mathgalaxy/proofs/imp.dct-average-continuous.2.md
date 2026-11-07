# 控制收敛定理 $\implies$ 平均算子联合连续
`imp.dct-average-continuous` · 推出 · strong 边 · 根 `../`

`thm.dct` 控制收敛定理 → `lem.average-continuous` 平均算子联合连续

**② 被积函数几乎处处收敛。** 设 $y \notin \partial B(x_0,r_0)$（球面是零测集）。若 $|y - x_0| < r_0$，取 $\varepsilon = r_0 - |y - x_0| > 0$，则当 $|x_k - x_0| < \varepsilon/2$、$|r_k - r_0| < \varepsilon/2$ 时 $|y - x_k| < r_k$，两侧特征函数都等于 $1$；若 $|y - x_0| > r_0$，同样的扰动下两侧都等于 $0$。于是

$\chi_{B(x_k,r_k)}(y) \longrightarrow \chi_{B(x_0,r_0)}(y) \qquad \text{a.e. } y .$

**③ 控制函数一致有界，DCT 收尾。** $k$ 充分大时 $r_k < r_0 + 1/2$、$|x_k - x_0| < 1/2$，于是 $B(x_k, r_k) \subseteq B(x_0, r_0+1)$，从而

> 续见 proofs/imp.dct-average-continuous.3.md
