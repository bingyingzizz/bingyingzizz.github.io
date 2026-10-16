# 测度 $\implies$ 单调 / 次可加 / 上下连续
`imp.measure-props` · 推出 · strong 边 · 根 `../`

`def.measure` 测度 → `prop.measure-basic` 测度的基本性质

设 $\mu$ 是测度。

**(a) 单调。** 设 $E \subseteq F$。则 $F = E \cup (F \setminus E)$，两项不交，故 $\mu (F) = \mu (E) + \mu (F \setminus E) \ge \mu (E)$（取值非负）。

**(b) 次可加。** 令 $F_{j} = E_{j} \setminus (E_{1} \cup \cdots \cup E_\{j-1\})$，则 $F_{j}$ 两两不交、$\bigcup F_{j} = \bigcup E_{j}$ 且 $F_{j} \subseteq E_{j}$。由可数可加与 (a)，

$$\mu(\bigcup_j E_j) = \mu(\bigcup_j F_j) = \sum_j \mu(F_j) \le \sum_j \mu(E_j)$$

**(c) 下连续。** 设 $E_{1} \subseteq E_{2} \subseteq \cdots$。令 $A_{1} = E_{1}$，$A_{j} = E_{j} \setminus E_\{j-1\}$（$j \ge 2$），则 $A_{j}$ 两两不交且 $\bigcup A_{j} = \bigcup E_{j}$。由可数可加，

> 续见 proofs/imp.measure-props.2.md
