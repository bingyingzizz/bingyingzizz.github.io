# 离散群的导出 Hom 是常层　`prop.discrete-cond-rhom-constant`　·　说明
根 `../`

**证明。** 取 $M$ 作为**抽象**阿贝尔群的一个自由消解 $P_{\bullet} \to M$ ✓。
- **常层函子在这条消解上保持正合**：$\mathrm{c}(-)$ 把自由阿贝尔群送到自由凝聚态阿贝尔群 $\mathbb{Z}[E]$，而且它在离散群上正合，于是 $\mathrm{c}(P_{\bullet}) \to \mathrm{c}(M)$ 仍是一个消解 ✓。
- **每一项都零调**：$P_{i} = \mathbb{Z}^{(E)}$ 给出 $\mathrm{c}(P_{i}) = \mathbb{Z}[E]$，而 $\operatorname{RHom}(\mathbb{Z}[E], N) \cong N^{E}$ 集中在 $0$ 次（上一条），故这些项对 $\operatorname{RHom}(-, N)$ 零调 ✓。
- **算出来**：可以用 $\mathrm{c}(P_{\bullet})$ 计算内部的 $\operatorname{RHom}$：
$$\operatorname{RHom}^{\mathrm{cond}}\bigl(\mathrm{c}(M),\ N\bigr) \cong \operatorname{Hom}\bigl(\mathrm{c}(P_{\bullet}),\ N\bigr) = \mathrm{c}\bigl(\operatorname{Hom}(P_{\bullet},\ N)\bigr),$$
取上同调即得 $\mathrm{c}\bigl(\operatorname{Ext}^{\bullet}(M,N)\bigr) = \mathrm{c}\bigl(\operatorname{RHom}^{\mathrm{abs}}(M,N)\bigr)$ ✓。

> 续见 notes/prop.discrete-cond-rhom-constant.2.md
