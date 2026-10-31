# 标准消解 $\implies$ 显式上链复形算出群上同调
`imp.bar-compute` · 推出 · strong 边 · 根 `../`

`def.bar-resolution` 标准消解 + `def.group-cohomology` 群上同调 → `prop.group-cohom-compute` 用标准消解计算群上同调

**要证**：$H^{n}(G, M) = H^{n}\bigl(\operatorname{Hom}_{R[G]}(B_{\bullet}, M)\bigr)$。

**第一步：$B_{\bullet}$ 是自由（因而投射）消解。** 由「标准消解」那条，$B_{\bullet} \to R$ 正合、每项自由。自由 $\implies$ 投射，投射消解可以拿来算右导出函子。

**第二步：投射消解算 $R^{n}\operatorname{Hom}$。** 对左正合加法函子 $F = \operatorname{Hom}_{R[G]}(R, -)$，取 $R$ 的投射消解 $P_{\bullet} \to R$，则

$$R^{n}F(M) = H^{n}\bigl(\operatorname{Hom}_{R[G]}(P_{\bullet}, M)\bigr).$$

> 续见 proofs/imp.bar-compute.2.md
