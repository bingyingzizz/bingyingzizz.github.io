# imp.discrete-cond-rhom-constant
`imp.discrete-cond-rhom-constant` · 推出 · strong 边 · 根 `../`

`def.internal-hom` 内 Hom + `def.condensed-abelian-group` 凝聚态阿贝尔群 + `prop.rhom-ze-powers` 离散空间上自由模的导出 Hom → `prop.discrete-cond-rhom-constant` 离散群的导出 Hom 是常层

**证明。** 取 $M$ 作为**抽象**阿贝尔群的一个自由消解 $P_{\bullet} \to M$ ✓。
- **常层函子在这条消解上保持正合**：$\mathrm{c}(-)$ 把自由阿贝尔群送到自由凝聚态阿贝尔群 $\mathbb{Z}[E]$，而且它在离散群上正合，于是 $\mathrm{c}(P_{\bullet}) \to \mathrm{c}(M)$ 仍是一个消解 ✓。
- **每一项都零调**：$P_{i} = \mathbb{Z}^{(E)}$ 给出 $\mathrm{c}(P_{i}) = \mathbb{Z}[E]$，而 $\operatorname{RHom}(\mathbb{Z}[E], N) \cong N^{E}$ 集中在 $0$ 次（上一条），故这些项对 $\operatorname{RHom}(-, N)$ 零调 ✓。
- **算出来**：可以用 $\mathrm{c}(P_{\bullet})$ 计算内部的 $\operatorname{RHom}$：
$$\operatorname{RHom}^{\mathrm{cond}}\bigl(\mathrm{c}(M),\ N\bigr) \cong 

> 续见 proofs/imp.discrete-cond-rhom-constant.2.md
