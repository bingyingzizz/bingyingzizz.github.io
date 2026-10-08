# 测度 $\implies$ 单调 / 次可加 / 上下连续
`imp.measure-props` · 推出 · strong 边 · 根 `../`

`def.measure` 测度 → `prop.measure-basic` 测度的基本性质

$$\mu(\bigcup_j E_j) = \sum_j \mu(A_j) = \lim_{n\to\infty} \sum_{j=1}^{n} \mu(A_j) = \lim_{n\to\infty} \mu(E_n)$$

**(d) 上连续。** 设 $E_{1} \supseteq E_{2} \supseteq \cdots$ 且 $\mu (E_{1}) < \infty$。令 $F_{j} = E_{1} \setminus E_{j}$，则 $F_{1} \subseteq F_{2} \subseteq \cdots$ 且 $\bigcup F_{j} = E_{1} \setminus \bigcap E_{j}$。由 (c) 与 (a)，

$$\mu(E_1) - \mu(\bigcap_j E_j) = \mu(E_1 \setminus \bigcap_j E_j) = \lim_j \mu(F_j) = \lim_j ( \mu(E_1) - \mu(E_j) )$$

因为 $\mu (E_{1}) < \infty$ 是个有限数，可以从两边同时减掉，得 $\mu (\bigcap E_{j}) = \lim \mu (E_{j})$。∎

> 续见 proofs/imp.measure-props.3.md
