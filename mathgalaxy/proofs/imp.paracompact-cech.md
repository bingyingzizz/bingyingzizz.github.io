# Čech 消解 + 软层无环 $\implies$ 仿紧上 Čech 等于层上同调（路线，含缺口）
`imp.paracompact-cech` · 推出 · strong 边 · 根 `../`

`def.cech-cohomology` Čech 上同调 + `prop.paracompact-partition-unity` 仿紧性与单位分解 + `thm.cartan-leray` Cartan–Leray 谱序列 + `cor.cech-cohomology-spectral` Čech 到上同调的谱序列 + `def.right-derived-functor` 右导出函子 + `thm.derived-long-exact` 导出函子的长正合列 → `thm.paracompact-cech-equals-sheaf` 仿紧空间上的 Čech 就是上同调

**要证**：仿紧 Hausdorff 上 $\check{H}^{n}(X,\mathcal{M})\cong H^{n}(X,\mathcal{M})$，其中左边是沿局部有限开覆盖的定向极限。逐覆盖的强形式只对**好覆盖**成立（见第五步）。

> 续见 proofs/imp.paracompact-cech.2.md
