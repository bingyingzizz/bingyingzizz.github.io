# Čech 消解 + 软层无环 $\implies$ 仿紧上 Čech 等于层上同调（路线，含缺口）
`imp.paracompact-cech` · 推出 · strong 边 · 根 `../`

`def.cech-cohomology` Čech 上同调 + `prop.paracompact-partition-unity` 仿紧性与单位分解 + `thm.cartan-leray` Cartan–Leray 谱序列 + `cor.cech-cohomology-spectral` Čech 到上同调的谱序列 + `def.right-derived-functor` 右导出函子 + `thm.derived-long-exact` 导出函子的长正合列 → `thm.paracompact-cech-equals-sheaf` 仿紧空间上的 Čech 就是上同调

**第一步：Čech 层复形是消解。** 对覆盖 $\mathfrak{U}=(U_{i})$ 令 $\check{\mathcal{C}}^{p}(\mathfrak{U},\mathcal{M}):=\prod_{i_{0}<\cdots<i_{p}}j_{*}(\mathcal{M}|_{U_{i_{0}\cdots i_{p}}})$。逐茎验证：固定 $x$ 取 $i$ 使 $x\in U_{i}$，在茎上令 $(h\sigma)_{i_{0}\cdots i_{p-1}}:=\sigma_{i\,i_{0}\cdots i_{p-1}}$，则 

> 续见 proofs/imp.paracompact-cech.3.md
