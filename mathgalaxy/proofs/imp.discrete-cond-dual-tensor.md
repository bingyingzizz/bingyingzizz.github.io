# 离散群的凝聚态 $\operatorname{RHom}$ = 常层化的抽象 $\operatorname{RHom}$ $\implies$ 导出张量那一步能落地
`imp.discrete-cond-dual-tensor` · 推出 · strong 边 · 根 `../`

`prop.discrete-cond-rhom-constant` 离散群的导出 Hom 是常层 → `prop.rhom-dual-tensor` 离散对偶的导出 Hom 与导出张量

`prop.rhom-dual-tensor` 的证法里有一句「再用**自由情形**的导出张量计算」 —— 那一步要的正是把凝聚态里的 $\operatorname{RHom}$/$\otimes^{\mathbf{L}}$ 换回抽象群论里能算的东西：

$$\operatorname{RHom}^{\mathrm{cond}}_{\mathbb{Z}}(M,N) \cong \mathrm{c}\bigl(\operatorname{RHom}^{\mathrm{abs}}_{\mathbb{Z}}(M,N)\bigr), \qquad M \otimes^{\mathbf{L},\mathrm{cond}}_{\mathbb{Z}} N \cong \mathrm{c}\bigl(M \otimes^{\mathbf{L},\mathrm{abs}}_{\mathbb{Z}} N\bigr).$$

有了这两条，右端 $M \otimes^{\mathbf{L}}_{\mathbb{Z}} N[-1]$ 就可以用 $M$ 的自由消解逐项算出来。

⚠ 本图把这一步当成**引理**引（`prop.discrete-cond-rhom-constant`），没有展开它的证明。
