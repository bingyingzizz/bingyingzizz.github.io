# $\mathrm{d}^{2}=0$ 给出两条结构方程
`imp.dg-struct` · 推出 · strong 边 · 根 `../`

`def.moving-frame` 活动标架 + `def.connection-form` 联络形式 → `thm.structure-equations` 结构方程

**第一式。** 对 $\mathrm{d}r = \sum_{i}\omega^{i}e_{i}$ 取外微分（$\omega^{i}$ 是 $1$-形式，$e_{i}$ 是向量值 $0$-形式，故第二项带负号）：

$$0 = \mathrm{d}^{2}r = \sum_{i}\mathrm{d}\omega^{i}\wedge e_{i}-\sum_{i}\omega^{i}\wedge \mathrm{d}e_{i} = \sum_{j}\Bigl(\mathrm{d}\omega^{j}-\sum_{i}\omega^{i}\wedge\omega^{j}_{\ i}\Bigr)e_{j}.$$

最后的等号是把 $-\sum_{i}\omega^{i}\wedge \mathrm{d}e_{i} = -\sum_{i,j}\omega^{i}\wedge\omega^{j}_{\ i}e_{j}$ 按 $e_{j}$ 归并。$e_{j}$ 处处线性无关，故系数为零：$\mathrm{d}\omega^{j} = \sum_{i}\omega^{i}\wedge\omega^{j}_{\ i}$，改换指标即第一结构方程。

**第二式。** 对 $\mathrm{d}e_{i} = \sum_{j}\omega^{j}_{\ i}e_{j}$ 取外微分：

> 续见 proofs/imp.dg-struct.2.md
