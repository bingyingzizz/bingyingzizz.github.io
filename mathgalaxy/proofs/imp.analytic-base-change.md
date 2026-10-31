# 解析环映射 $\implies$ base change
`imp.analytic-base-change` · 推出 · strong 边 · 根 `../`

`def.analytic-ring` 解析环 + `prop.analytic-examples` 解析环的例子 → `prop.analytic-base-change` 解析环的 base change

**(i)** 由映射 $f : \mathcal{A} \to \mathcal{B}$ 的定义，每个 $\mathcal{B}[S]$ 作为 $A$-模都在 $\operatorname{Mod}^{\mathrm{cond}}_{\mathcal{A}}$ 里；而这些 $\mathcal{B}[S]$ 是 $\operatorname{Mod}^{\mathrm{cond}}_{\mathcal{B}}$ 的紧投射生成元，故整个 $\operatorname{Mod}^{\mathrm{cond}}_{\mathcal{B}}$ 都落进 $\operatorname{Mod}^{\mathrm{cond}}_{\mathcal{A}}$。

**(ii)** 检验 $C \in D(\operatorname{Mod}^{\mathrm{cond}}_{\mathcal{B}})$ 作为 $A$-模是否在 $D(\operatorname{Mod}^{\mathrm{cond}}_{\mathcal{A}})$ 里：由 (ii) 的判据只需看上同调，归约到 (i)。得到的函子保余极限、把 $A[S]$ 送到 $\mathcal{B}[S]$，故是左导出。$\blacksquare$
