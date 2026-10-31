# 截口的定义 $\implies$ 截口保持可测性
`imp.section-measurable` · 推出 · strong 边 · 根 `../`

`def.section` 截口 → `prop.section-measurable` 截口可测

**(a)** 令 $\mathcal{R} = \{E \subseteq X \times Y : E_x \in \mathcal{N}\text{ 且} E^y \in \mathcal{M}\quad  \forall(x, y) \in X \times Y\}$。

- **$\mathcal{R}$ 含所有矩形**：若 $E = A \times B$，则

$$E_x = B\quad  (x \in A), \quad  E_x = \emptyset\quad  (x \notin A)$$

两边都在 $\mathcal{N}$ 里（$\mathcal{N}$ 含 $\emptyset$）；横截口同理。

- **$\mathcal{R}$ 是 $\sigma$代数**：截口运算保持并、交、补 —— 例如 $(\bigcup_n E^{(n)})_x = \bigcup_n E^{(n)}_x$、$(E^c)_x = (E_x)^c$（这里用的是 $Y$ 在 $X \times Y$ 中的「竖条」补集）。故 $\mathcal{R}$ 对可数并与补封闭。

于是 $\mathcal{R} \supseteq \mathcal{M}($矩形族$) = \mathcal{M} \otimes \mathcal{N}$，(a) 得证。

> 续见 proofs/imp.section-measurable.2.md
