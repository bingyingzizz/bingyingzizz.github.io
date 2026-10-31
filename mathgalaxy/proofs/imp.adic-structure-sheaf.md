# 有理开集上的局部化 $\implies$ 结构层是层
`imp.adic-structure-sheaf` · 推出 · strong 边 · 根 `../`

`prop.rational-localization` 有理开集上的局部化 + `prop.huber-subring-recovery` A⁺ 由谱决定 → `thm.adic-structure-sheaf` adic 结构层是层

由 `prop.rational-localization`，$\mathcal{O}_X(U) = A[1/f]$ 只依赖 $U$，且粘合映射唯一，所以它预层化。

**$\mathcal{O}_X$ 是层。** 考虑 $\psi : \operatorname{Spec} A \to \operatorname{Spa}(A,A^+)$，$\mathfrak{p} \mapsto (A \to \operatorname{Frac}(A/\mathfrak{p}) \to \{0,1\})$。有理开集的原像是 $D(f)$，故 $\mathcal{O}_{\operatorname{Spa}}$ 是 $\mathcal{O}_{\operatorname{Spec} A}$ 沿 $\psi$ 的推前；推前保层。

**赋值延拓到茎。** 每个 $x$ 在包含它的有理开集上都有定义，且与局部化相容；取余极限得 $\mathcal{O}_{X,x}$ 上的赋值。

**(iii)** 在每个仿射开集上就是 `prop.huber-subring-recovery`。$\blacksquare$
