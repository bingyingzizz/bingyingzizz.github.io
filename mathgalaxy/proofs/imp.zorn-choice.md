# 佐恩引理 $\implies$ 选择公理（路线 $2\implies1$）
`imp.zorn-choice` · 推出 · strong 边 · 根 `../`

`lem.zorn` 佐恩引理 → `ax.choice` 选择公理

设 $\{A_i\}_\{i \in I\}$ 是一族非空集合。要对它造出一个选择函数。

**① 舞台：部分选择函数全体**。令

$$\mathcal{F} = \{ f : f\text{ 是函数}, \operatorname{dom} f \subseteq I,\text{ 且} \forall i \in \operatorname{dom} f, f(i) \in A_i \}$$

按包含关系 $\subseteq$ 排序。$\mathcal{F} \ne \emptyset$（空函数在 $\mathcal{F}$ 中），且 $(\mathcal{F}, \subseteq )$ 是偏序集。

**② 每个链有上界**：设 $\mathcal{D} \subseteq \mathcal{F}$ 是 $\subseteq$链，令 $f = \bigcup \mathcal{D}$。

> 续见 proofs/imp.zorn-choice.2.md
