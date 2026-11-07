# Čech 消解 + 软层无环 $\implies$ 仿紧上 Čech 等于层上同调（路线，含缺口）
`imp.paracompact-cech` · 推出 · strong 边 · 根 `../`

`def.cech-cohomology` Čech 上同调 + `prop.paracompact-partition-unity` 仿紧性与单位分解 + `thm.cartan-leray` Cartan–Leray 谱序列 + `cor.cech-cohomology-spectral` Čech 到上同调的谱序列 + `def.right-derived-functor` 右导出函子 + `thm.derived-long-exact` 导出函子的长正合列 → `thm.paracompact-cech-equals-sheaf` 仿紧空间上的 Čech 就是上同调

列给 $H^{n}(\mathcal{Z}^{q+1})\cong H^{n+1}(\mathcal{Z}^{q})$ 与 $H^{1}(\mathcal{Z}^{q})\cong\operatorname{coker}(\Gamma(\mathcal{A}^{q})\to\Gamma(\mathcal{Z}^{q+1}))$，逐层上移即得。本图有 `def.right-derived-functor` 与 `thm.derived-long-exact` 可引。

> 续见 proofs/imp.paracompact-cech.9.md
