# 覆盖筛的四条等价　`prop.sieve-covering-equivalent`　·　说明
根 `../`

- **$1 \implies 2$**：$R \in J(X)$ 时 $R \to \widetilde{R}$ 又由**层化的粘合公理**唯一延拓出 $v : \underline{X} = \widetilde{h_{X}} \to \widetilde{R}$；把 $v \circ u$ 与 $u \circ v$ 分别与 $R \to \widetilde{R}$、$h_{X} \to \underline{X}$ 比较，由延拓的**唯一性**它们分别是 $\mathrm{id}_{\widetilde{R}}$ 与 $\mathrm{id}_{\underline{X}}$，故 $u$ 是同构。
- **$2 \implies 1$**：设 $u$ 是同构。由**传递性公理**，只要造出一个 $R' \in J(X)$ 使每个 $f \in R'(Y)$ 都有 $f^{-1}(R) \in J(Y)$ 就够了。由 2 有 $h_{X} \to \underline{X} \cong \widetilde{R} = \mathcal{H}(\mathcal{H}(R))$，于是可造出 $R' \in J(X)$ 与 $\varphi : R' \to \mathcal{H}(R)$。对 $f \in R'(Y)$，它在 $\mathcal{H}(R)(Y)$ 里的像来自某个 $S \to R$（$S \in J(Y)$）—— 沿 $h_{Y} \to R' \to \mathcal{H}(R)$ 走一圈可知 $S \subseteq f^{-1}(R)$，于是 $f^{-1}(R) \in J(Y)$。再用一次传递性，得 $R \in J(X)$。
- **$2 \iff 3$**：由「层化是左 Kan 延拓」（$\sharp T = \varin

> 续见 notes/prop.sieve-covering-equivalent.3.md
