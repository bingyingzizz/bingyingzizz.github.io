# Zorn 引理：每个真理想都含在极大理想里
`imp.zorn-maximal-ideal` · 推出 · strong 边 · 根 `../`

`lem.zorn` Zorn 引理 → `prop.prime-ideal` 素理想与极大理想

设 $A \ne 0$ 是环，$I \subset A$ 是真理想。考虑

$$\mathcal{S} := \{\, J \trianglelefteq A : I \subseteq J,\ J \ne A \,\},$$

按**包含**排序。$\mathcal{S}$ 非空（$I \in \mathcal{S}$）。

**链有上界**：取链 $\{J_{\alpha}\}$，令 $J := \bigcup_{\alpha} J_{\alpha}$。这是理想（两个元素必落在同一个 $J_{\alpha}$ 里，因为链是全序）；且 $J \ne A$ —— 因为 $1 \notin J_{\alpha}$ 对每个 $\alpha$ 成立，故 $1 \notin J$。所以 $J \in \mathcal{S}$。

由 Zorn 引理，$\mathcal{S}$ 有极大元 $M$。$M$ 就是含 $I$ 的极大理想：若 $M \subset J' \ne A$ 也是理想，则 $J' \in \mathcal{S}$ 且严格大于 $M$，矛盾。

**推论**：$A \ne 0$ 时取 $I = 0$，得极大理想存在；再由「$M$ 极大 $\iff$ $A/M$ 是域」（`prop.prime-ideal` 的等价刻画），得「每个非零环都有域作为商」。

> 续见 proofs/imp.zorn-maximal-ideal.2.md
