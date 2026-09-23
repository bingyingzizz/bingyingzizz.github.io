# 无穷公理 + 幂集公理 + 分离公理模式 $\implies \omega$ 存在
`imp.inf-to-omega` · 推出 · strong 边 · 根 `../`

`ax.inf` 无穷公理 + `ax.power` 幂集公理 + `ax.sep` 分离公理模式 → `thm.omega` 自然数集存在

1. 由无穷公理取一个归纳集 $I$。称 $J \subseteq I$ 是**归纳的**，若 $\emptyset \in J$ 且 $\forall x (x \in J \to x \cup \{x\} \in J)$。

2. 由幂集公理，$\mathcal{P}(I)$ 是集合；再用分离公理模式取

$$S = \{ J \in \mathcal{P}(I) : J\text{ 是归纳集} \}$$

$S$ 非空（$I \in S$）。

3. 再对 $\mathcal{P}(I)$ 用一次分离公理模式，令

$$\omega = \{ x \in I : \forall J ( J \in S \to x \in J ) \}$$

即 $\omega$ 是所有归纳子集的交。

4. $\omega$ 是归纳集：$\emptyset$ 属于每个 $J \in S$，故 $\emptyset \in \omega$；若 $x \in \omega$，则 $x$ 属于每个 $J \in S$，从而 $x \cup \{x\}$ 属于每个 $J \in S$，故 $x \cup \{x\} \in \omega$。

> 续见 proofs/imp.inf-to-omega.2.md
