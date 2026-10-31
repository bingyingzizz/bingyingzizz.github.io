# 零集 $\implies$ 完备化
`imp.completion` · 推出 · strong 边 · 根 `../`

`def.null-set` 零集与完备 → `thm.completion` 完备化定理

设 $(X, \mathcal{M}, \mu )$ 是测度空间，$\bar{\mathcal{M}} = \{ E \cup F : E \in \mathcal{M}, F \subseteq N$ 对某个零集 N }。

**① $\bar{\mathcal{M}}$ 是 $\sigma$代数。** 含 $X$（$X \in \mathcal{M}$）。对可数并：$\bigcup (E_{j} \cup F_{j}) = (\bigcup E_{j}) \cup (\bigcup F_{j})$，而 $\bigcup F_{j} \subseteq \bigcup N_{j}$ 是零集。对补：$E \cup F$ 的补是

$$(E \cup F)^c = (E^c \cap N^c) \cup (E^c \cap N \setminus F)$$

第一块属于 $\mathcal{M}$，第二块含在零集 $N$ 里，故属于 $\bar{\mathcal{M}}$ 的形状。

**② $\bar{\mu}$ 良定义。** 设 $E_{1} \cup F_{1} = E_{2} \cup F_{2}$ 且 $F_{i} \subseteq N_{i}$（零集）。由 $E_{1} \subseteq E_{2} \cup N_{2}$ 得 $\mu (E_{1}) \le \mu (E_{2}) + 0$，反向同理，故 $\mu (E_{1}) = \mu (E_{2})$。

> 续见 proofs/imp.completion.2.md
