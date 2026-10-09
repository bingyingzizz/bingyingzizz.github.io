# 覆盖筛的四条等价　`prop.sieve-covering-equivalent`　·　说明
根 `../`

- **$1 \implies 2$**：$R \in J(X)$ 时 $R \to \widetilde{R}$ 又延拓出 $v : \underline{X} = \widetilde{h_{X}} \to \widetilde{R}$；由延拓的唯一性（对 $\mathrm{id}_{R}$、对 $\mathrm{id}_{\underline{X}}$）得 $v \circ u = \mathrm{id}_{\widetilde{R}}$、$u \circ v = \mathrm{id}_{\underline{X}}$，故 $u$ 是同构。
- **$2 \implies 1$**：设 $u$ 是同构。要把 $R$ 拼出一个 $J(X)$ 里的筛：由 $h_{X} \to \underline{X} \cong \widetilde{R} = \mathcal{H}(\mathcal{H}(R))$，可造出 $R' \in J(X)$ 与 $\varphi : R' \to \mathcal{H}(R)$。对 $f \in R'(Y)$，它的像落在 $\mathcal{H}(R)(Y)$ 里，而那里每个元素都来自某个 $S \to R$（$S \in J(Y)$），于是 $S \subseteq f^{-1}(R)$，即 $f^{-1}(R) \in J(Y)$。既然对一切 $f \in R'$ 都成立，由 $R'$ 是覆盖筛得 $R$ 也是覆盖筛。
- **$3$、$4$** 与前两条的等价是练习。∎

原书把这条列为 **Proposition 3.2.12**；紧跟着的推论 **Corollary 3.2.13** 是一族态射的版本：族 $(X_{i} \to X)$ 生成覆盖筛 $\iff \coprod_{i} X_{i} \to X$ 是满态射。
