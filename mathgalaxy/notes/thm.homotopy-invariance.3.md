# 同伦不变性　`thm.homotopy-invariance`　·　说明
根 `../`

③ **侧面。** 剩下的是删去某个 $v_{j}$（$j < i$）或某个 $w_{j}$（$j > i$）的面。对 $j < i$：该面在 $\partial\tau_{i}$ 中的符号是 $(-1)^{j}$，在 $\partial P_{n}(\sigma)$ 中的总系数是 $(-1)^{i+j}$；而在棱柱 $\Delta^{n-1} \times [0,1]$ 的剖分里，它正是 $d_{j}\sigma$ 的第 $(i-1)$ 块，在 $P_{n-1}(d_{j}\sigma)$ 中的系数是 $(-1)^{i-1}$，再乘 $\partial\sigma$ 中 $d_{j}$ 的符号 $(-1)^{j}$，得 $(-1)^{i+j-1} = -(-1)^{i+j}$。对 $j > i$：该面在 $\partial\tau_{i}$ 中的符号是 $(-1)^{j+1}$，总系数是 $(-1)^{i+j+1}$；它对应 $d_{j}\sigma$ 的第 $i$ 块，在 $P_{n-1}(d_{j}\sigma)$ 中系数为 $(-1)^{i}(-1)^{j} = (-1)^{i+j}$，同样是相反数。所以侧面之和恰为 $-P_{n-1}(\partial\sigma)$。

合并 ①–③ 得

$$\partial P_{n}(\sigma) = g \circ \sigma - f \circ \sigma - P_{n-1}(\partial \sigma),$$

> 续见 notes/thm.homotopy-invariance.4.md
