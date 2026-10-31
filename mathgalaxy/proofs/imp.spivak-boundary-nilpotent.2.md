# 两次取面 + 交替符号 $\implies$ 边界平方为零
`imp.spivak-boundary-nilpotent` · 推出 · strong 边 · 根 `../`

`def.boundary-operator` 边界算子 → `prop.boundary-squared-zero` 边界算子平方为零

**（2）两遍的符号相反。** 固定的 $(i,\alpha)$ 与 $(\ell,\beta)$ 在总和里出现两次：先 $i$ 后 $\ell$，以及先 $\ell$ 后 $i$。两种次序的符号指数分别是 $i+\alpha+\ell'+\beta$ 与 $\ell+\beta+i'+\alpha$，其中 $\ell' = \ell-[\ell>i]$、$i' = i-[i>\ell]$ 是「删掉另一个坐标之后剩下的 $k-1$ 个位置里读到的编号」（记号 $[\ell>i]$ 在条件成立时取 $1$、否则取 $0$）。

若 $\ell<i$：$\ell' = \ell$、$i' = i-1$，第二个指数比第一个少 $1$。若 $\ell>i$：$\ell' = \ell-1$、$i' = i$，第二个指数比第一个多 $1$。两种情形下两个指数都**相差 $1$**，故两项符号相反，在总和里相消。

**（3）结论。** 每个 $(k-2)$-方块都被数了偶数次、且正负各半，故 $\partial(\partial c) = 0$。对链按线性延拓得 $\partial^{2} = 0$。∎

> 续见 proofs/imp.spivak-boundary-nilpotent.3.md
