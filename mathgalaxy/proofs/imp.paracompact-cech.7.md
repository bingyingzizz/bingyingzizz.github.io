# Čech 消解 + 软层无环 $\implies$ 仿紧上 Čech 等于层上同调（路线，含缺口）
`imp.paracompact-cech` · 推出 · strong 边 · 根 `../`

`def.cech-cohomology` Čech 上同调 + `prop.paracompact-partition-unity` 仿紧性与单位分解 + `thm.cartan-leray` Cartan–Leray 谱序列 + `cor.cech-cohomology-spectral` Čech 到上同调的谱序列 + `def.right-derived-functor` 右导出函子 + `thm.derived-long-exact` 导出函子的长正合列 → `thm.paracompact-cech-equals-sheaf` 仿紧空间上的 Čech 就是上同调

**第三步：零调消解算导出函子（完整可写）。** 若 $0\to\mathcal{M}\to\mathcal{A}^{0}\to\mathcal{A}^{1}\to\cdots$ 的每一项都 $\Gamma$-无环，则 $H^{n}(X,\mathcal{M})\cong H^{n}(\Gamma(X,\mathcal{A}^{\bullet}))$：令 $\mathcal{Z}^{q+1}=\operatorname{im}(\mathcal{A}^{q}\to\mathcal{A}^{q+1})$，短正合列的长正合

> 续见 proofs/imp.paracompact-cech.8.md
