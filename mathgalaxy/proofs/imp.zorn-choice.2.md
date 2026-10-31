# 佐恩引理 $\implies$ 选择公理（路线 $2\implies1$）
`imp.zorn-choice` · 推出 · strong 边 · 根 `../`

`lem.zorn` 佐恩引理 → `ax.choice` 选择公理

$f$ 是函数：若 $(i, a), (i, a') \in f$，则它们分别属于某个 $f_{1}, f_{2} \in \mathcal{D}$；$\mathcal{D}$ 是链，不妨设 $f_{1} \subseteq f_{2}$，于是 $(i, a), (i, a') \in f_{2}$，而 $f_{2}$ 是函数，故 $a = a'$。
$f \in \mathcal{F}$：$\operatorname{dom} f = \bigcup _\{g \in \mathcal{D}\} \operatorname{dom} g \subseteq I$，且对 $i \in \operatorname{dom} f$ 有 $f(i) \in A_i$。
$f$ 是 $\mathcal{D}$ 的上界：$f \supseteq g$ 对一切 $g \in \mathcal{D}$ 成立。

**③ 用佐恩引理**，取 $(\mathcal{F}, \subseteq )$ 的极大元 $f$。

**④ 极大元必须「定义在全体 $I$ 上」**：若存在 $i_{0} \in I \setminus \operatorname{dom} f$，由 $A_\{i_{0}\} \ne \emptyset$ 取 $a \in A_\{i_{0}\}$，则

> 续见 proofs/imp.zorn-choice.3.md
