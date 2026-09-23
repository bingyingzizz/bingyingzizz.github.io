# 良序定理 $\iff$ 佐恩引理
`eq.wo-zorn` · 等价 · strong 边 · 根 `../`

`thm.wellordering` 良序定理 → `lem.zorn` 佐恩引理

$$x \preceq_* y \iff\text{ 存在} (W, \preceq_W) \in \mathcal{D}\text{ 使} x, y \in W\text{ 且} x \preceq_W y$$

因 $\mathcal{D}$ 是链，这些良序彼此兼容，$\preceq_*$ 是 $W^{*}$ 上的良序，且 $(W^{*}, \preceq_*)\in \mathcal{W}$ 是 $\mathcal{D}$ 的上界。

3. 由佐恩引理，取极大元 $(W, \preceq )$。

4. 若 $W \ne X$，取 $x \in X \setminus W$，在 $W \cup \{x\}$ 上定义序：保留 $W$ 上的 $\preceq$，并令所有 $w \in W$ 都 $\preceq x$（把 $x$ 放在最顶端）。这仍是良序，而且是 $(W, \preceq )$ 的严格延拓，与极大性矛盾。故 $W = X$，即 $X$ 被良序化。∎
