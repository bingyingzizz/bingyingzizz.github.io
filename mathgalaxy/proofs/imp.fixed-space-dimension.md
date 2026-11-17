# 不动点维数
`imp.fixed-space-dimension` · 推出 · strong 边 · 根 `../`

`def.group-character` 群特征标 + `def.invariant-subspace` 不变子空间 → `lem.fixed-space-dimension` 不动点维数与特征标

平均算子 $\varphi(v)=\frac1{|G|}\sum_{g\in G}\rho(g)v$ 是 $G$-等变投影：$\varphi^2=\varphi$ 且 $\varphi|_{V^G}=\mathrm{id}$。故 $V=\mathrm{im}\varphi\oplus\ker\varphi$ 且 $\mathrm{im}\varphi=V^G$。
取基使 $\varphi$ 在 $V^G$ 上为恒等、在 $\ker\varphi$ 上为零，则 $\operatorname{tr}\varphi=\dim V^G$。
另一方面 $\operatorname{tr}\varphi=\frac1{|G|}\sum_g\operatorname{tr}\rho(g)=\langle\chi_\rho,\mathbf 1\rangle$。$\blacksquare$
